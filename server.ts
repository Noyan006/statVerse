import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize Gemini client if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    aiConfigured: !!aiClient,
    timestamp: new Date().toISOString(),
  });
});

// AI Tutor chat endpoint
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history, currentLessonTitle, language } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    const langName = language === 'bn' ? 'Bengali (বাংলা)' : 'English';

    // If Gemini API is configured, use it
    if (aiClient) {
      const systemInstruction = `You are StatBot, an expert, enthusiastic, and patient AI Statistics & Data Science Tutor for the StatVerse platform.
Your goals:
1. Explain Statistics, Probability, Mathematics, and Data Science clearly to students.
2. Teach in ${langName}. If the user asks in Bengali or Bengali is selected, explain fluently in Bengali while keeping standard statistical notations and terms clear.
3. Use step-by-step mathematical reasoning, intuitive real-world analogies, and provide clear formulas (formatted using standard LaTeX like $E[X]$ or $$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$$).
4. When relevant, provide practical Python (NumPy/Pandas/Scipy) or R code examples.
5. If the user mentions a specific concept related to StatVerse (like Mean, Normal Distribution, Bayes Theorem, Central Limit Theorem, Hypothesis Testing, Regression), refer them warmly to related StatVerse modules.
Current context: User is viewing or studying "${currentLessonTitle || 'General Curriculum'}".`;

      // Build conversation contents
      const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history.slice(-6)) {
          if (item.sender === 'user') {
            formattedContents.push({ role: 'user', parts: [{ text: item.text }] });
          } else if (item.sender === 'bot') {
            formattedContents.push({ role: 'model', parts: [{ text: item.text }] });
          }
        }
      }

      formattedContents.push({ role: 'user', parts: [{ text: message }] });

      const response = await aiClient.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const reply = response.text || 'I could not generate an answer at this moment.';
      res.json({ reply, source: 'gemini' });
      return;
    }

    // Graceful offline fallback with comprehensive knowledge base when GEMINI_API_KEY is not yet attached
    const lower = message.toLowerCase();
    let reply = '';

    if (language === 'bn') {
      if (lower.includes('mean') || lower.includes('গড়')) {
        reply = `### গড় (Arithmetic Mean) সম্পর্কে সহায়তা:
গড় হলো কোনো সংখ্যাসমূহের সমষ্টিকে মোট পদসংখ্যা দিয়ে ভাগ করার মান।
**সূত্র:** $\\bar{x} = \\frac{\\sum x_i}{n}$
**বাস্তব উদাহরণ:** ৫ জন শিক্ষার্থীর প্রাপ্ত নম্বর যথাক্রমে ৭০, ৭৫, ৮০, ৮৫, ৯০ হলে, তাদের গড় = $(৭০ + ৭৫ + ৮০ + ৮৫ + ৯০) / ৫ = ৮০$।
📌 আপনি আমাদের **'গড়, মধ্যমা ও প্রচুরক'** লেসনটিতে গিয়ে ইন্টারেক্টিভ ক্যালকুলেটর দেখতে পারেন।`;
      } else if (lower.includes('bayes') || lower.includes('বেইজ')) {
        reply = `### বেইজের উপপাদ্য (Bayes' Theorem):
বেইজের উপপাদ্য নতুন তথ্যের ভিত্তিতে কোনো ঘটনার সম্ভাব্যতা আপডেট করতে ব্যবহৃত হয়।
**সূত্র:** $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$
এখানে:
- $P(A)$: পূর্ব সম্ভাব্যতা (Prior Probability)
- $P(B|A)$: লাইকলিহুড (Likelihood)
- $P(A|B)$: উত্তর সম্ভাব্যতা (Posterior Probability)
📌 আমাদের **'বেইজের উপপাদ্য'** লেসনে ইন্টারেক্টিভ সিমুলেটর ব্যবহার করে দেখুন!`;
      } else if (lower.includes('normal') || lower.includes('স্বাভাবিক')) {
        reply = `### স্বাভাবিক বণ্টন (Normal Distribution):
স্বাভাবিক বণ্টন হলো একটি প্রতিসম, ঘণ্টাকৃতির (bell-shaped) অবিচ্ছিন্ন সম্ভাব্যতা বণ্টন।
**সূত্র:** $f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$
- প্রায় ৬৮% মান $\\mu \\pm 1\\sigma$ এর মধ্যে থাকে
- প্রায় ৯৫% মান $\\mu \\pm 2\\sigma$ এর মধ্যে থাকে
- প্রায় ৯৯.৭% মান $\\mu \\pm 3\\sigma$ এর মধ্যে থাকে (Empirical Rule)
📌 'স্বাভাবিক বণ্টন' অধ্যায়ে গিয়ে স্লাইডার নাড়িয়ে কার্ভের পরিবর্তন সরাসরি পর্যবেক্ষণ করুন।`;
      } else {
        reply = `আমি StatBot — আপনার স্ট্যাটিস্টিকস ও ডেটা সায়েন্স টিউটর।
আপনার প্রশ্ন: "${message}"।
আপনি পরিসংখ্যানের মৌলিক বিষয় (গড়, মধ্যমা, ভেদাঙ্ক), সম্ভাব্যতা তত্ত্ব (বেইজের উপপাদ্য), সম্ভাবনা বণ্টন (স্বাভাবিক বণ্টন), হাইপোথিসিস টেস্টিং কিংবা পাইথন/আর প্রোগ্রামিং সম্পর্কিত যেকোনো প্রশ্ন করতে পারেন।

💡 *নোট: সম্পূর্ণ আনলিমিটেড লাইভ এআই জেনারেশন সক্রিয় করতে Settings > Secrets প্যানেলে আপনার GEMINI_API_KEY যুক্ত করুন। অফলাইনেও আপনি সমস্ত লেসন, সিমুলেটর ও ক্যালকুলেটর নিরবচ্ছিন্নভাবে ব্যবহার করতে পারছেন।*`;
      }
    } else {
      if (lower.includes('mean') || lower.includes('average')) {
        reply = `### Understanding the Arithmetic Mean:
The mean is the sum of all observed values divided by the number of observations.
**Formula:** $\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i$
**Example:** For scores 70, 75, 80, 85, 90:
Mean = $(70 + 75 + 80 + 85 + 90) / 5 = 80$.
📌 Explore our interactive Mean, Median & Mode visualizer in the curriculum!`;
      } else if (lower.includes('bayes')) {
        reply = `### Bayes' Theorem:
Bayes' theorem updates the probability of an event given prior evidence.
**Formula:** $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$
- $P(A)$: Prior belief
- $P(B|A)$: Likelihood of observing evidence $B$ given state $A$
- $P(A|B)$: Posterior probability after evidence
📌 Check out our dedicated Bayes' Theorem lesson with interactive disease screening simulation!`;
      } else if (lower.includes('normal distribution') || lower.includes('bell curve')) {
        reply = `### The Normal (Gaussian) Distribution:
A symmetric, continuous bell-shaped distribution completely defined by its mean $\\mu$ and standard deviation $\\sigma$.
**Probability Density Function (PDF):**
$$f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}$$
**Empirical Rule (68-95-99.7):**
- 68.27% of data lies within $[\mu - \\sigma, \\mu + \\sigma]$
- 95.45% of data lies within $[\mu - 2\\sigma, \\mu + 2\\sigma]$
- 99.73% of data lies within $[\mu - 3\\sigma, \\mu + 3\\sigma]$
📌 Try out our interactive Normal Distribution Curve simulator in the Simulations tab!`;
      } else {
        reply = `Hello! I am **StatBot**, your AI Statistics & Data Science Tutor on StatVerse.
You asked: "${message}".
I can help guide you through Mathematical Foundations, Probability, Central Limit Theorem, Hypothesis Testing, Regression, and Python/R analysis.

💡 *Note: To enable unlimited custom live generative AI answers, attach your GEMINI_API_KEY in the Secrets panel. All built-in lessons, interactive simulations, and practice tools are 100% functional right now!*`;
      }
    }

    res.json({ reply, source: 'local_curriculum' });
  } catch (error: any) {
    console.error('Error in /api/ai/chat:', error);
    res.status(500).json({ error: error?.message || 'Failed to generate response' });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`StatVerse server running at http://localhost:${PORT}`);
  });
}

startServer();
