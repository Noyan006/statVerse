# StatVerse — Interactive Statistics & Data Science Learning Platform

StatVerse is a modern, bilingual (English & বাংলা) educational web application designed for students, researchers, and data science practitioners.

---

## 🌟 Key Features

1. **20 Fully Authored Foundational Lessons**:
   - Each lesson follows a strict 16-point structure: Dual-language titles, core definition, why it matters, key terminology, mathematical formulas (KaTeX), step-by-step derivations, two worked numerical examples, real-life applications across fields, interactive simulations, Python & R code, common mistakes & misconceptions, key takeaways, and practice quiz questions.
2. **Interactive Statistical Simulators**:
   - Mean, Median & Mode Explorer (with outlier sensitivity slider and dot plot)
   - Variance & Standard Deviation Explorer (squared deviation geometry, Bessel's $n-1$ correction)
   - Normal Distribution & Bell Curve Visualizer (Empirical rule 68-95-99.7, tail probabilities, interval shading)
   - Central Limit Theorem Simulator (live histogram of sample averages morphing to normal)
   - Law of Large Numbers Visualizer (running mean trajectory converging to expectation)
   - Bayes' Theorem & Medical Screening Calculator (natural frequency tree, false positive resolution)
   - Confidence Interval Coverage Simulator (50 samples, live capture vs missed tracking)
   - Hypothesis Testing & p-Value Visualizer (critical rejection regions, alpha levels, Z-statistic)
   - Linear Regression & Correlation Explorer (click-to-add points, OLS line, $r$ and $R^2$)
3. **Bilingual Learning System (বাংলা & English)**:
   - Instant language switching across all curriculum modules, buttons, and AI tutor explanations.
4. **AI Statistics Tutor — StatBot**:
   - Server-side Express integration using `@google/genai` (Gemini 3.8 Flash).
   - Context-aware curriculum recommendation linking questions to indexed lessons.
   - Built-in graceful offline fallback providing step-by-step statistical problem solving even without an external API key.
5. **Dedicated Global Smart Search**:
   - Instant search across both English and Bengali keywords, filters by Category and Difficulty.
6. **Practical Coding Labs**:
   - Interactive tutorials for Python (NumPy, Pandas, SciPy), R, SQL, and Excel formulas with expected outputs.
7. **Personal Learning Dashboard**:
   - Tracks completed lessons, bookmarks, and quiz scores locally with zero sign-up requirements.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion
- **Math Notation**: KaTeX (inline and display mode rendering)
- **Visuals**: Dynamic interactive SVG canvas with zero external heavy chart bundle bloat
- **Backend**: Node.js, Express, `@google/genai`
- **Testing**: Node.js 22 built-in native test runner (`node --test`)

---

## 🚀 Getting Started

### 1. Installation
\`\`\`bash
npm install
\`\`\`

### 2. Environment Variables
Create a `.env` file (refer to `.env.example`):
\`\`\`bash
# GEMINI_API_KEY: Optional for live generative AI responses.
# All lessons, calculators, and simulations function 100% free without it.
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
PORT=3000
\`\`\`

### 3. Run Development Server
\`\`\`bash
npm run dev
\`\`\`
The application starts at `http://localhost:3000`.

### 4. Run Unit Tests
\`\`\`bash
node --test src/utils/statistics.test.ts
\`\`\`

### 5. Production Build
\`\`\`bash
npm run build
npm start
\`\`\`

---

## 🌐 Zero-Budget Free Deployment

StatVerse is built to run on free hosting tiers:
- **Vercel / Netlify / Cloud Run Free Tier**: Deploy with standard build command `npm run build`.
- **Custom Domain**: Connect free DNS CNAME records to point to your custom domain with automatic SSL.
