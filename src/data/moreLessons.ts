import { Lesson } from '../types/index.ts';

export const MORE_LESSONS: Lesson[] = [
  // 21. Vectors & Matrices in Data Science
  {
    id: 'linear-algebra-data-science',
    categoryId: 'math-foundations',
    order: 21,
    title: {
      en: 'Vectors & Matrices in Data Science',
      bn: 'ডেটা সায়েন্সে ভেক্টর ও ম্যাট্রিক্স',
    },
    shortDescription: {
      en: 'Learn how tabular data maps to high-dimensional vector spaces, dot products quantify similarity, and matrix operations accelerate machine learning.',
      bn: 'উপাত্ত কীভাবে বহুমাত্রিক ভেক্টর স্পেসে রূপান্তরিত হয়, ডট গুণন দিয়ে কীভাবে সাদৃশ্য মাপা হয় এবং ম্যাট্রিক্স কীভাবে মেশিন লার্নিং পরিচালনা করে।',
    },
    definition: {
      en: 'Linear algebra is the branch of mathematics concerning vector spaces and linear mappings between these spaces. In data science, every observation is represented as a vector of numerical features, and entire datasets are represented as matrices.',
      bn: 'লিনিয়ার অ্যালজেব্রা বা রৈখিক বীজগণিত হলো গণিতের এমন একটি শাখা যা ভেক্টর স্পেস এবং তাদের মধ্যবর্তী রৈখিক রূপান্তর নিয়ে কাজ করে। ডেটা সায়েন্সে প্রতিটি পর্যবেক্ষণকে একটি বৈশিষ্ট্য ভেক্টর এবং সম্পূর্ণ উপাত্ত সেটকে ম্যাট্রিক্স হিসেবে প্রকাশ করা হয়।',
    },
    whyItMatters: {
      en: 'Every modern machine learning model, from simple linear regression to deep neural networks and recommendation systems (like Netflix or Spotify), relies on matrix-vector multiplications computed in parallel on GPUs.',
      bn: 'সরল রৈখিক নির্ভরণ থেকে শুরু করে ডিপ নিউরাল নেটওয়ার্ক এবং নেটফ্লিক্স বা স্পটিফাইয়ের রিকমেন্ডেশন সিস্টেমের মতো প্রতিটি আধুনিক প্রযুক্তি জিপিইউতে সমান্তরালভাবে চলা ম্যাট্রিক্স-ভেক্টর গুণনের ওপর প্রতিষ্ঠিত।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'Vector', bn: 'ভেক্টর' },
        definition: {
          en: 'An ordered list of numbers representing magnitude and direction, or the attributes of a single data observation.',
          bn: 'মানের একটি সুনির্দিষ্ট ক্রমবিন্যাস যা কোনো পর্যবেক্ষণের বিভিন্ন বৈশিষ্ট্য বা ডাইমেনশন নির্দেশ করে।',
        },
        latex: '\\mathbf{x} = [x_1, x_2, \\dots, x_d]^T',
      },
      {
        term: { en: 'Dot Product', bn: 'ডট গুণন (অভ্যন্তরীণ গুণফল)' },
        definition: {
          en: 'The sum of the products of the corresponding entries of two sequences of numbers, directly related to cosine similarity.',
          bn: 'দুটি ভেক্টরের অনুরূপ উপাদানগুলোর গুণফলের সমষ্টি, যা তাদের পারস্পরিক কোণ বা সাদৃশ্যের পরিমাপক।',
        },
        latex: '\\mathbf{u} \\cdot \\mathbf{v} = \\sum_{i=1}^{n} u_i v_i',
      },
      {
        term: { en: 'Euclidean Norm (L2 Norm)', bn: 'ইউক্লিডীয় নর্ম' },
        definition: {
          en: 'The geometric length of a vector from the origin in Euclidean space.',
          bn: 'মূলবিন্দু থেকে ভেক্টরের জ্যামিতিক দূরত্বের পরিমাপ।',
        },
        latex: '\\|\\mathbf{x}\\|_2 = \\sqrt{\\sum_{i=1}^n x_i^2}',
      },
    ],
    equations: [
      {
        label: { en: 'Vector Dot Product', bn: 'ভেক্টর ডট গুণন' },
        latex: '\\mathbf{u} \\cdot \\mathbf{v} = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\| \\cos(\\theta) = \\sum_{i=1}^n u_i v_i',
        explanation: {
          en: 'Measures alignment: if dot product is zero, the vectors are orthogonal (perpendicular/uncorrelated).',
          bn: 'ভেক্টরদ্বয়ের দিকের সামঞ্জস্য নির্দেশ করে; গুণফল শূন্য হলে ভেক্টর দুটি পরস্পর লম্ব বা অসংশ্লিষ্ট।',
        },
      },
      {
        label: { en: 'Matrix-Vector Multiplication', bn: 'ম্যাট্রিক্স ও ভেক্টর গুণন' },
        latex: '\\mathbf{y} = X \\mathbf{w} + \\mathbf{b}',
        explanation: {
          en: 'The universal forward-pass equation: feature matrix $X$ multiplied by weight vector $\\mathbf{w}$ plus bias $\\mathbf{b}$.',
          bn: 'মেশিন লার্নিংয়ের সার্বজনীন সমীকরণ: বৈশিষ্ট্য ম্যাট্রিক্স $X$-কে ওজন ভেক্টর $\\mathbf{w}$ দিয়ে গুণ করে বায়াস $\\mathbf{b}$ যোগ।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Cosine Similarity between Users', bn: 'ব্যবহারকারীদের মধ্যে কোসাইন সাদৃশ্য নির্ণয়' },
        problem: {
          en: 'User A rated [Action, Comedy, Romance] as [5, 1, 1]. User B rated them as [4, 2, 1]. Calculate their dot product and Cosine Similarity.',
          bn: 'ব্যবহারকারী A তিনটি ক্যাটাগরিতে রেটিং দিয়েছেন [5, 1, 1] এবং ব্যবহারকারী B দিয়েছেন [4, 2, 1]। তাদের ডট গুণফল ও কোসাইন সিমিলারিটি নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Compute the dot product: u . v = (5 * 4) + (1 * 2) + (1 * 1) = 20 + 2 + 1 = 23.',
              bn: 'ডট গুণফল হিসাব করুন: (৫ * ৪) + (১ * ২) + (১ * ১) = ২০ + ২ + ১ = ২৩।',
            },
            math: '\\mathbf{u} \\cdot \\mathbf{v} = 20 + 2 + 1 = 23',
          },
          {
            step: 2,
            text: {
              en: 'Compute norms: ||u|| = sqrt(25 + 1 + 1) = sqrt(27) ≈ 5.196. ||v|| = sqrt(16 + 4 + 1) = sqrt(21) ≈ 4.583.',
              bn: 'নর্ম হিসাব করুন: ||u|| = sqrt(২৭) ≈ ৫.১৯৬; ||v|| = sqrt(২১) ≈ ৪.৫৮৩।',
            },
            math: '\\|\\mathbf{u}\\| = \\sqrt{27} \\approx 5.196, \\quad \\|\\mathbf{v}\\| = \\sqrt{21} \\approx 4.583',
          },
          {
            step: 3,
            text: {
              en: 'Cosine Similarity = 23 / (5.196 * 4.583) = 23 / 23.81 = 0.966 (96.6% preference similarity).',
              bn: 'কোসাইন সিমিলারিটি = ২৩ / (৫.১৯৬ * ৪.৫৮৩) = ০.৯৬৬ (৯৬.৬% পছন্দগত সাদৃশ্য)।',
            },
            math: '\\text{Similarity} = \\frac{23}{23.81} \\approx 0.966',
          },
        ],
        finalAnswer: {
          en: 'Dot product is 23; Cosine similarity is 0.966, indicating very high taste alignment.',
          bn: 'ডট গুণফল ২৩ এবং কোসাইন সাদৃশ্য ০.৯৬৬, যা দর্শকদের রুচির উচ্চ মিল প্রকাশ করে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Search Engines & Semantic Embeddings', bn: 'সার্চ ইঞ্জিন ও টেক্সট এম্বেডিং' },
        example: {
          en: 'Google converts words and sentences into 768-dimensional dense vectors and ranks search matches using cosine similarity.',
          bn: 'গুগল প্রতিটি বাক্যকে ৭৬৮ মাত্রার ভেক্টরে রূপান্তর করে এবং ডট গুণন ব্যবহার করে সবচেয়ে প্রাসঙ্গিক উত্তর খুঁজে বের করে।',
        },
      },
      {
        field: { en: 'Computer Vision & Facial Recognition', bn: 'কম্পিউটার ভিশন ও ফেসিয়াল রিকগনিশন' },
        example: {
          en: 'Faces are encoded as 128-dimensional embedding vectors. A face matches a database record if Euclidean distance is below a threshold.',
          bn: 'মুখমণ্ডলকে ১২৮ মাত্রার ভেক্টরে রূপান্তর করে ইউক্লিডীয় দূরত্বের মাধ্যমে পরিচয় নিশ্চিত করা হয়।',
        },
      },
    ],
    pythonCode: `import numpy as np

# Feature vector for two items (e.g. word embeddings or user profiles)
u = np.array([5.0, 1.0, 1.0])
v = np.array([4.0, 2.0, 1.0])

# Dot product & norms
dot_prod = np.dot(u, v)
norm_u = np.linalg.norm(u)
norm_v = np.linalg.norm(v)

# Cosine similarity
cos_sim = dot_prod / (norm_u * norm_v)
print(f"Dot Product: {dot_prod:.2f}")
print(f"Cosine Similarity: {cos_sim:.4f}")

# Batch matrix multiplication: X (3 samples, 3 features) @ weights W
X = np.array([[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]])
W = np.array([0.5, -0.2, 0.1])
predictions = X @ W
print("Predictions:", predictions)`,
    rCode: `u <- c(5, 1, 1)
v <- c(4, 2, 1)

dot_prod <- sum(u * v)
norm_u <- sqrt(sum(u^2))
norm_v <- sqrt(sum(v^2))
cos_sim <- dot_prod / (norm_u * norm_v)

cat("Dot product:", dot_prod, "\\n")
cat("Cosine similarity:", round(cos_sim, 4), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Confusing element-wise multiplication (Hadamard product) with true matrix multiplication (dot product).',
          bn: 'ম্যাট্রিক্সের উপাদানভিত্তিক সাধারণ গুণন এবং প্রকৃত ম্যাট্রিক্স ডট গুণনকে গুলিয়ে ফেলা।',
        },
        correct: {
          en: 'In Python, `A * B` is element-wise multiplication; use `A @ B` or `np.dot(A, B)` for linear algebra matrix product.',
          bn: 'পাইথনে `A * B` হলো উপাদানভিত্তিক গুণ; প্রকৃত ম্যাট্রিক্স গুণনের জন্য `A @ B` বা `np.dot(A, B)` ব্যবহার করতে হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Data rows are coordinate vectors; datasets are numerical matrices.',
        bn: 'উপাত্তের প্রতিটি সারি হলো ভেক্টর এবং সম্পূর্ণ টেবিলটি একটি ম্যাট্রিক্স।',
      },
      {
        en: 'The dot product evaluates angle and similarity; matrix operations scale feature transformations to millions of data points simultaneously.',
        bn: 'ডট গুণন পারস্পরিক কোণ ও সাদৃশ্য পরিমাপ করে; ম্যাট্রিক্স অপারেশন কোটি কোটি তথ্যে দ্রুত হিসাব পরিচালনা করে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q21-1',
        question: {
          en: 'If the dot product between two non-zero vectors is exactly zero, what does this tell you about their geometric relationship?',
          bn: 'যদি দুটি অশূন্য ভেক্টরের ডট গুণফল শূন্য হয়, তবে তাদের জ্যামিতিক সম্পর্ক কী?',
        },
        options: [
          { en: 'They point in the exact same direction', bn: 'তারা একই দিকে নির্দেশ করছে' },
          { en: 'They are orthogonal (perpendicular at 90 degrees)', bn: 'তারা পরস্পর লম্ব (৯০ ডিগ্রি কোণে অবস্থিত)' },
          { en: 'They have equal lengths', bn: 'তাদের দৈর্ঘ্য সমান' },
          { en: 'One vector is the inverse of the other', bn: 'একটি ভেক্টর অন্যটির বিপরীত' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Because u · v = ||u|| ||v|| cos(θ), a dot product of 0 implies cos(θ) = 0, meaning θ = 90° (orthogonal / linearly independent).',
          bn: 'যেহেতু u · v = ||u|| ||v|| cos(θ), ডট গুণফল ০ হলে cos(θ) = ০ হয়, অর্থাৎ মধ্যবর্তী কোণ ৯০° (লম্ব)।',
        },
      },
    ],
    relatedLessonIds: ['data-types-and-scales', 'simple-linear-regression', 'intro-to-machine-learning'],
  },

  // 22. Calculus & Gradient Descent
  {
    id: 'calculus-gradient-descent',
    categoryId: 'math-foundations',
    order: 22,
    title: {
      en: 'Calculus & Gradient Descent',
      bn: 'ক্যালকুলাস ও গ্রেডিয়েন্ট ডিসেন্ট',
    },
    shortDescription: {
      en: 'Understand derivatives as instantaneous rates of change and master gradient descent, the core optimization engine of neural networks and machine learning.',
      bn: 'অন্তরীকরণ ও পরিবর্তনের হার বুঝুন এবং গ্রেডিয়েন্ট ডিসেন্ট আয়ত্ত করুন, যা মেশিন লার্নিং ও এআই মডেলের মূল অপ্টিমাইজেশন ভিত্তি।',
    },
    definition: {
      en: 'Differential calculus studies rates at which quantities change. In data science, Gradient Descent is an iterative optimization algorithm for finding the local minimum of a differentiable objective (loss) function by taking steps proportional to the negative of the gradient.',
      bn: 'ক্যালকুলাসের অন্তরীকরণ শাখা পরিবর্তনের তাৎক্ষণিক হার নিয়ে আলোচনা করে। ডেটা সায়েন্সে গ্রেডিয়েন্ট ডিসেন্ট হলো একটি পুনরাবৃত্তিমূলক অপ্টিমাইজেশন পদ্ধতি যা কোনো লস ফাংশনের ঢালের বিপরীত দিকে ধাপে ধাপে অগ্রসর হয়ে সর্বনিম্ন ত্রুটির বিন্দু খুঁজে বের করে।',
    },
    whyItMatters: {
      en: 'Machines do not "think"; they minimize error. Whether training a linear regression model or GPT-4 with billions of parameters, calculus calculates how to adjust every single parameter to minimize loss.',
      bn: 'কম্পিউটার নিজে চিন্তা করে না; এটি কেবল ভুল বা এরর কমায়। সাধারণ রিগ্রেশন থেকে শুরু করে জিপিটি-৪ এর মতো বিশাল ল্যাঙ্গুয়েজ মডেলের প্রতিটি প্যারামিটার উন্নত করতে ক্যালকুলাসের গ্রেডিয়েন্ট ডিসেন্ট অপরিহার্য।',
    },
    level: 'intermediate',
    prerequisites: ['linear-algebra-data-science', 'variance-and-std-dev'],
    keyTerms: [
      {
        term: { en: 'Derivative', bn: 'অন্তরক (Derivative)' },
        definition: {
          en: 'The slope or instantaneous rate of change of a function with respect to an independent variable.',
          bn: 'কোনো স্বাধীন চলকের সাপেক্ষে ফাংশনের তাৎক্ষণিক পরিবর্তনের হার বা স্পর্শকের ঢাল।',
        },
        latex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
      },
      {
        term: { en: 'Gradient', bn: 'গ্রেডিয়েন্ট' },
        definition: {
          en: 'A vector of all partial derivatives of a multivariable function, pointing in the direction of greatest rate of increase.',
          bn: 'বহুচলক ফাংশনের সকল আংশিক অন্তরকের ভেক্টর, যা ফাংশনটির সর্বাধিক বৃদ্ধির দিক নির্দেশ করে।',
        },
        latex: '\\nabla f = \\left[ \\frac{\\partial f}{\\partial x_1}, \\frac{\\partial f}{\\partial x_2}, \\dots \\right]^T',
      },
      {
        term: { en: 'Learning Rate (Alpha)', bn: 'লার্নিং রেট (আলফা)' },
        definition: {
          en: 'A hyperparameter that determines the step size taken in each iteration towards the minimum.',
          bn: 'একটি হাইপার-প্যারামিটার যা প্রতিটি পদক্ষেপে ঢালের দিকে কত বড় ধাপ নেওয়া হবে তা নির্ধারণ করে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Gradient Descent Update Rule', bn: 'গ্রেডিয়েন্ট ডিসেন্ট আপডেট নিয়ম' },
        latex: '\\theta_{t+1} = \\theta_t - \\alpha \\nabla J(\\theta_t)',
        explanation: {
          en: 'Updates model weight theta by moving opposite to the gradient of the loss function J by step size alpha.',
          bn: 'লস ফাংশন J-এর ঢালের বিপরীত অভিমুখে আলফা পরিমাণের ধাপ ফেলে বর্তমান প্যারামিটার থেটাকে হালনাগাদ করে।',
        },
      },
      {
        label: { en: 'Mean Squared Error Loss Gradient', bn: 'এমএসই লস এর ঢাল' },
        latex: '\\frac{\\partial J}{\\partial w} = -\\frac{2}{n} \\sum_{i=1}^n x_i (y_i - \\hat{y}_i)',
        explanation: {
          en: 'Derivative of MSE loss with respect to weight w for linear regression.',
          bn: 'লিনিয়ার রিগ্রেশনে ওজন w-এর সাপেক্ষে গড় বর্গীয় ত্রুটির আংশিক অন্তরক।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'One Step of Gradient Descent', bn: 'গ্রেডিয়েন্ট ডিসেন্টের একটি ধাপ হিসাব' },
        problem: {
          en: 'Consider loss function J(w) = w^2 - 4w + 5. Starting at initial weight w_0 = 5 with learning rate alpha = 0.1, compute the derivative at w_0 and the updated weight w_1.',
          bn: 'ধরি লস ফাংশন J(w) = w^2 - 4w + 5। প্রাথমিক মান w_0 = 5 এবং লার্নিং রেট alpha = 0.1 হলে, w_0 বিন্দুতে ঢাল এবং নতুন মান w_1 নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Find the derivative: dJ/dw = 2w - 4.',
              bn: 'অন্তরক নির্ণয় করুন: dJ/dw = 2w - 4।',
            },
            math: "\\frac{dJ}{dw} = 2w - 4",
          },
          {
            step: 2,
            text: {
              en: 'Evaluate gradient at w = 5: 2(5) - 4 = 10 - 4 = 6 (slope is positive; increasing w increases loss).',
              bn: 'w = ৫ বিন্দুতে ঢালের মান: ২(৫) - ৪ = ৬ (ঢাল ধনাত্মক, অর্থাৎ w বাড়লে লস বাড়বে)।',
            },
            math: "\\nabla J(5) = 6",
          },
          {
            step: 3,
            text: {
              en: 'Apply update rule: w_1 = w_0 - alpha * gradient = 5 - (0.1 * 6) = 5 - 0.6 = 4.4.',
              bn: 'আপডেট সূত্র প্রয়োগ: w_1 = ৫ - (০.১ * ৬) = ৫ - ০.৬ = ৪.৪।',
            },
            math: "w_1 = 5 - 0.1(6) = 4.4",
          },
        ],
        finalAnswer: {
          en: 'The gradient at w_0=5 is 6, and the updated parameter w_1 is 4.4 (moving closer to true minimum at w=2).',
          bn: 'ঢাল হলো ৬ এবং হালনাগাদ মান ৪.৪ (যা সঠিক সর্বনিম্ন বিন্দু w=২ এর আরও কাছাকাছি)।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Deep Learning & Neural Network Backpropagation', bn: 'ডিপ লার্নিং ও ব্যাকপ্রপাগেশন' },
        example: {
          en: 'PyTorch and TensorFlow use the chain rule of calculus (automatic differentiation) to backpropagate gradients across billions of transformer layers.',
          bn: 'পাইটর্চ ও টেনসরফ্লো ক্যালকুলাসের চেইন রুল প্রয়োগ করে স্বয়ংক্রিয়ভাবে কোটি কোটি নিউরাল স্তরে ভুল সংশোধন করে।',
        },
      },
    ],
    pythonCode: `# Implementing Batch Gradient Descent for finding minimum of J(w) = w^2 - 4w + 5
w = 5.0
alpha = 0.1
epochs = 20

print("Step-by-step optimization:")
for epoch in range(epochs):
    loss = w**2 - 4*w + 5
    grad = 2*w - 4  # analytical derivative
    w = w - alpha * grad
    if epoch % 4 == 0 or epoch == epochs - 1:
        print(f"Epoch {epoch:2d}: w = {w:.4f}, Loss = {loss:.4f}, Grad = {grad:.4f}")

print(f"Converged optimal weight: {w:.4f} (analytical target: 2.0000)")`,
    rCode: `w <- 5.0
alpha <- 0.1
for (i in 1:20) {
  grad <- 2 * w - 4
  w <- w - alpha * grad
}
cat("Optimal w:", round(w, 4), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Setting the learning rate too large, causing the algorithm to oscillate wildly and diverge towards infinity.',
          bn: 'লার্নিং রেট অতিরিক্ত বেশি রাখা, যার ফলে সমাধান না পেয়ে লস ক্রমাগত বেড়ে যায় (Divergence)।',
        },
        correct: {
          en: 'Use learning rate schedules, grid search, or adaptive optimizers (like Adam) to safely control step sizes.',
          bn: 'অ্যাডাম (Adam) অপ্টিমাইজার বা লার্নিং রেট শিডিউলিং ব্যবহার করে নিরাপদ পদক্ষেপ নিশ্চিত করুন।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The derivative tells which direction increases error; taking steps in the opposite direction minimizes loss.',
        bn: 'অন্তরক বা ঢাল বলে দেয় কোন দিকে ভুল বাড়ে; তার বিপরীত দিকে এগোলে ত্রুটি সর্বনিম্ন হয়।',
      },
      {
        en: 'Gradient descent powers virtually every parameter tuning algorithm across modern artificial intelligence.',
        bn: 'আধুনিক কৃত্রিম বুদ্ধিমত্তার প্রায় প্রতিটি মডেল গ্রেডিয়েন্ট ডিসেন্টের মাধ্যমে প্রশিক্ষিত হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q22-1',
        question: {
          en: 'What happens to the parameter update when the gradient at the current point is zero (gradient = 0)?',
          bn: 'বর্তমান বিন্দুতে গ্রেডিয়েন্টের মান শূন্য হলে প্যারামিটার আপডেটে কী ঘটে?',
        },
        options: [
          { en: 'The parameter jumps to infinity', bn: 'প্যারামিটার অসীমে চলে যায়' },
          { en: 'The parameter remains unchanged (stationary point or optimum reached)', bn: 'প্যারামিটারের কোনো পরিবর্তন হয় না (সর্বোচ্চ বা সর্বনিম্ন বিন্দু অর্জিত হয়েছে)' },
          { en: 'The learning rate is automatically doubled', bn: 'লার্নিং রেট দ্বিগুণ হয়ে যায়' },
          { en: 'The model resets to random weights', bn: 'মডেলটি পুনরায় র্যান্ডম ওয়েটে ফিরে যায়' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Since θ_new = θ_old - α(0) = θ_old, zero gradient means the update step size is 0, signifying a local/global optimum or saddle point.',
          bn: 'যেহেতু θ_new = θ_old - α(০) = θ_old, ঢাল শূন্য হলে মান পরিবর্তিত হয় না, অর্থাৎ কাঙ্ক্ষিত বিন্দুতে পৌঁছানো গেছে।',
        },
      },
    ],
    relatedLessonIds: ['linear-algebra-data-science', 'simple-linear-regression', 'intro-to-machine-learning'],
  },

  // 23. Binomial Distribution
  {
    id: 'binomial-distribution',
    categoryId: 'prob-distributions',
    order: 23,
    title: {
      en: 'The Binomial Distribution',
      bn: 'দ্বিপদী বণ্টন (Binomial Distribution)',
    },
    shortDescription: {
      en: 'Model counts of binary successes in repeated independent trials, from customer conversion rates to pharmaceutical trial efficacy.',
      bn: 'নির্দিষ্ট সংখ্যক স্বাধীন পরীক্ষার সফলতার সংখ্যা গণনা করার বণ্টন; বিক্রয় রূপান্তর থেকে ওষুধ পরীক্ষার ফলাফল পর্যন্ত সর্বত্র ব্যবহৃত।',
    },
    definition: {
      en: 'The Binomial Distribution is the discrete probability distribution of the number of successes in a fixed sequence of n independent experiments, each asking a yes/no question, and each with its own boolean-valued outcome with constant success probability p.',
      bn: 'দ্বিপদী বণ্টন হলো একটি বিচ্ছিন্ন সম্ভাব্যতা বণ্টন, যা নির্দিষ্ট সংখ্যক (n) স্বাধীন পরীক্ষার মধ্যে সফলতার সংখ্যা নির্দেশ করে, যেখানে প্রতিটি পরীক্ষার কেবল দুটি ফলাফল (সাফল্য বা ব্যর্থতা) সম্ভব এবং সাফল্যের সম্ভাব্যতা (p) সর্বদা স্থির থাকে।',
    },
    whyItMatters: {
      en: 'Whenever you analyze binary outcomes (conversion vs bounce, pass vs fail, spam vs not spam, survival vs death), the binomial distribution provides exact probabilities and theoretical baselines for A/B hypothesis testing.',
      bn: 'বাস্তব জীবনে যখনই কোনো ঘটনার ফলাফল দুটি অবস্থায় বিভক্ত থাকে (যেমন পাস/ফেল, কেনা/না কেনা, স্প্যাম/নন-স্প্যাম), তখনই দ্বিপদী বণ্টন সঠিক সম্ভাব্যতা নির্ণয় ও এ/বি টেস্টিংয়ের ভিত্তি তৈরি করে।',
    },
    level: 'beginner',
    prerequisites: ['probability-fundamentals', 'random-variables'],
    keyTerms: [
      {
        term: { en: 'Bernoulli Trial', bn: 'বার্নৌলি পরীক্ষা' },
        definition: {
          en: 'A single random experiment with exactly two possible outcomes: success (1) and failure (0).',
          bn: 'একটি একক দৈব পরীক্ষা যার ফলাফল কেবল দুটি হতে পারে: সাফল্য (১) অথবা ব্যর্থতা (০)।',
        },
      },
      {
        term: { en: 'Binomial Coefficient', bn: 'দ্বিপদী সহগ' },
        definition: {
          en: 'The number of ways to choose k successes from n trials, denoted as n choose k.',
          bn: 'n সংখ্যক পরীক্ষা থেকে k সংখ্যক সাফল্য কতভাবে বাছাই করা যায় তার সংখ্যা।',
        },
        latex: '\\binom{n}{k} = \\frac{n!}{k!(n-k)!}',
      },
      {
        term: { en: 'Expected Value & Variance', bn: 'প্রত্যাশিত মান ও ভেদাঙ্ক' },
        definition: {
          en: 'The mean is np and the variance is np(1-p).',
          bn: 'গড় বা প্রত্যাশিত মান হলো np এবং ভেদাঙ্ক হলো np(1-p)।',
        },
        latex: '\\mu = np, \\quad \\sigma^2 = np(1-p)',
      },
    ],
    equations: [
      {
        label: { en: 'Binomial Probability Mass Function (PMF)', bn: 'দ্বিপদী সম্ভাব্যতা অপেক্ষক (PMF)' },
        latex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
        explanation: {
          en: 'Gives the probability of observing exactly k successes in n independent trials, each with success probability p.',
          bn: 'p সম্ভাব্যতাযুক্ত n সংখ্যক স্বাধীন পরীক্ষায় ঠিক k সংখ্যক সাফল্য পাওয়ার সম্ভাব্যতা প্রকাশ করে।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'E-commerce Purchase Conversion Probability', bn: 'অনলাইন শপের বিক্রয় রূপান্তর সম্ভাব্যতা' },
        problem: {
          en: 'An online store has an average checkout conversion rate of 20% (p = 0.20). If 5 random visitors visit the website, what is the probability that exactly 2 of them make a purchase?',
          bn: 'একটি অনলাইন শপে কেনাকাটার গড় হার ২০% (p = ০.২০)। ৫ জন নতুন ক্রেতা ওয়েবসাইট ভিজিট করলে ঠিক ২ জন পণ্য কিনবেন—তার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Identify parameters: n = 5 trials, k = 2 successes, p = 0.20, q = (1 - p) = 0.80.',
              bn: 'পরামিতি চিহ্নিত করুন: n = ৫, k = ২, p = ০.২০, q = ০.৮০।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute binomial coefficient: 5 choose 2 = 5! / (2! * 3!) = (5 * 4) / 2 = 10.',
              bn: 'দ্বিপদী সহগ হিসাব: ৫ choose ২ = ১০।',
            },
            math: "\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10",
          },
          {
            step: 3,
            text: {
              en: 'Evaluate PMF: P(X = 2) = 10 * (0.20)^2 * (0.80)^3 = 10 * 0.04 * 0.512 = 0.2048 (20.48%).',
              bn: 'সম্ভাব্যতা নির্ণয়: P(X = ২) = ১০ * (০.০৪) * (০.৫১২) = ০.২০৪৮ (২০.৪৮%)।',
            },
            math: "P(X = 2) = 10 \\times (0.2)^2 \\times (0.8)^3 = 0.2048",
          },
        ],
        finalAnswer: {
          en: 'The exact probability that exactly 2 of the 5 visitors make a purchase is 20.48%.',
          bn: '৫ জনের মধ্যে ঠিক ২ জন পণ্য কেনার নিখুঁত সম্ভাব্যতা হলো ২০.৪৮%।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Digital Marketing & A/B Testing', bn: 'ডিজিটাল মার্কেটিং ও বিজ্ঞাপন' },
        example: {
          en: 'Measuring if changing an ad button from green to blue significantly improves click-through rate over 10,000 ad impressions.',
          bn: '১০,০০০ বিজ্ঞাপনে নীল বাটনে ক্লিক করার সংখ্যা সবুজ বাটনের চেয়ে পরিসংখ্যানিকভাবে বেশি কি না তা যাচাই।',
        },
      },
      {
        field: { en: 'Industrial Quality Control', bn: 'উৎপাদন ও মান নিয়ন্ত্রণ' },
        example: {
          en: 'Automotive factories testing 50 microchips per batch to ensure defective parts do not exceed acceptable tolerance limits.',
          bn: 'প্রতি ব্যাচে ৫০টি চিপ পরীক্ষা করে ত্রুটিযুক্ত চিপের সংখ্যা গ্রহণযোগ্য সীমার মধ্যে আছে কি না তা নিশ্চিতকরণ।',
        },
      },
    ],
    pythonCode: `from scipy.stats import binom
import numpy as np

n = 5       # number of trials
p = 0.20    # probability of success

# Exact PMF for k = 2
prob_2 = binom.pmf(2, n, p)
print(f"P(X = 2): {prob_2:.4f}")

# Cumulative probability: at most 2 purchases P(X <= 2)
prob_at_most_2 = binom.cdf(2, n, p)
print(f"P(X <= 2): {prob_at_most_2:.4f}")

# Theoretical Mean and Standard Deviation
mean = n * p
std_dev = np.sqrt(n * p * (1 - p))
print(f"Mean successes: {mean:.2f}, Std Dev: {std_dev:.2f}")`,
    rCode: `n <- 5
p <- 0.20

# P(X = 2)
cat("P(X = 2):", dbinom(2, size = n, prob = p), "\\n")
# P(X <= 2)
cat("P(X <= 2):", pbinom(2, size = n, prob = p), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Applying the binomial distribution when trials are dependent (e.g., drawing cards without replacement).',
          bn: 'স্বাধীনতাহীন পরীক্ষায় দ্বিপদী বণ্টন প্রয়োগ করা (যেমন তাস তুলে আর ফেরত না রাখা)।',
        },
        correct: {
          en: 'When sampling without replacement from a finite population, use the Hypergeometric Distribution instead.',
          bn: 'ফেরত না দিয়ে বাছাই করার ক্ষেত্রে দ্বিপদীর পরিবর্তে হাইপার-জিওমেট্রিক বণ্টন ব্যবহার করতে হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'A binomial model requires a fixed number of trials, binary outcomes, constant probability, and mutual independence.',
        bn: 'দ্বিপদী বণ্টনের জন্য নির্দিষ্ট সংখ্যক পরীক্ষা, দুটি ফলাফল, স্থির সম্ভাব্যতা ও পারস্পরিক স্বাধীনতা আবশ্যক।',
      },
      {
        en: 'For large n, the Binomial distribution converges smoothly to a Normal distribution by the Central Limit Theorem.',
        bn: 'পরীক্ষার সংখ্যা n খুব বড় হলে দ্বিপদী বণ্টন মসৃণভাবে স্বাভাবিক (নরমাল) বণ্টনে রূপান্তরিত হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q23-1',
        question: {
          en: 'What is the variance of a Binomial distribution with n = 100 trials and success probability p = 0.30?',
          bn: 'n = ১০০ এবং সাফল্য p = ০.৩০ হলে দ্বিপদী বণ্টনের ভেদাঙ্ক (Variance) কত?',
        },
        options: [
          { en: '30.0', bn: '৩০.০' },
          { en: '21.0', bn: '২১.০' },
          { en: '4.58', bn: '৪.৫৮' },
          { en: '70.0', bn: '৭০.০' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Variance = np(1 - p) = 100 * 0.30 * 0.70 = 21.0. (Standard deviation would be sqrt(21) ≈ 4.58).',
          bn: 'ভেদাঙ্ক = np(১ - p) = ১০০ * ০.৩০ * ০.৭০ = ২১.০। (পরিমিত ব্যবধান হতো রুট ২১ বা ৪.৫৮)।',
        },
      },
    ],
    relatedLessonIds: ['probability-fundamentals', 'random-variables', 'normal-distribution'],
  },

  // 24. Poisson Distribution
  {
    id: 'poisson-distribution',
    categoryId: 'prob-distributions',
    order: 24,
    title: {
      en: 'The Poisson Distribution',
      bn: 'পয়সোঁ বণ্টন (Poisson Distribution)',
    },
    shortDescription: {
      en: 'Model the arrival of rare events over continuous time or spatial intervals, from web traffic spikes to customer call center volumes.',
      bn: 'নির্দিষ্ট সময় বা স্থানের ব্যবধানে বিরল ঘটনা ঘটার সম্ভাব্যতা বণ্টন; কল সেন্টারে গ্রাহকের আগমন বা সার্ভারে রিকোয়েস্ট স্পাইক বিশ্লেষণে অপরিহার্য।',
    },
    definition: {
      en: 'The Poisson Distribution is a discrete probability distribution that expresses the probability of a given number of events occurring in a fixed interval of time or space, assuming events arrive independently at a constant average rate λ (lambda).',
      bn: 'পয়সোঁ বণ্টন হলো এমন একটি বিচ্ছিন্ন সম্ভাব্যতা বণ্টন যা নির্দিষ্ট সময় বা স্থানের ব্যবধানে কোনো ঘটনা নির্দিষ্ট সংখ্যক বার ঘটার সম্ভাব্যতা প্রকাশ করে, যেখানে ঘটনাগুলো একটি স্থির গড় হার λ (ল্যাম্বডা)-তে সম্পূর্ণ স্বাধীনভাবে ঘটে।',
    },
    whyItMatters: {
      en: 'Poisson processes model real-world queuing systems: cloud server auto-scaling, hospital emergency ward capacity, insurance disaster claims, and call center staffing.',
      bn: 'ক্লাউড সার্ভার স্বয়ংক্রিয়ভাবে বাড়ানো, হাসপাতালের জরুরি বিভাগে বেড সংখ্যা নির্ধারণ এবং ইন্স্যুরেন্স কোম্পানির ঝুঁকি ব্যবস্থাপনায় পয়সোঁ বণ্টন বাস্তব জগতকে মডেল করে।',
    },
    level: 'intermediate',
    prerequisites: ['probability-fundamentals', 'random-variables'],
    keyTerms: [
      {
        term: { en: 'Rate Parameter (Lambda)', bn: 'হার পরামিতি (ল্যাম্বডা)' },
        definition: {
          en: 'The average number of events observed per unit interval of time or area.',
          bn: 'একক সময় বা ক্ষেত্রফলে পর্যবেক্ষণে প্রাপ্ত ঘটনার গড় সংখ্যা।',
        },
        latex: '\\lambda > 0',
      },
      {
        term: { en: 'Equidispersion Property', bn: 'সম-বিস্তার বৈশিষ্ট্য' },
        definition: {
          en: 'A unique mathematical signature of the Poisson distribution: its mean is exactly equal to its variance (Mean = Variance = λ).',
          bn: 'পয়সোঁ বণ্টনের অনন্য বৈশিষ্ট্য: এর গড় ও ভেদাঙ্কের মান হুবহু সমান (গড় = ভেদাঙ্ক = λ)।',
        },
        latex: 'E[X] = \\text{Var}(X) = \\lambda',
      },
    ],
    equations: [
      {
        label: { en: 'Poisson PMF', bn: 'পয়সোঁ সম্ভাব্যতা অপেক্ষক' },
        latex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}',
        explanation: {
          en: 'Probability of observing exactly k occurrences given average arrival rate lambda and mathematical constant e ≈ 2.71828.',
          bn: 'গড় হার ল্যাম্বডা জানা থাকলে ঠিক k বার ঘটনাটি ঘটার নিখুঁত সম্ভাব্যতা।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Cloud API Request Influx', bn: 'ক্লাউড সার্ভারে এপিআই রিকোয়েস্টের সম্ভাব্যতা' },
        problem: {
          en: 'A server receives an average of 3 requests per second (lambda = 3). What is the probability that the server receives exactly 5 requests in a given second?',
          bn: 'একটি সার্ভারে প্রতি সেকেন্ডে গড়ে ৩টি রিকোয়েস্ট আসে (lambda = ৩)। কোনো এক নির্দিষ্ট সেকেন্ডে ঠিক ৫টি রিকোয়েস্ট আসার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Parameters: lambda = 3, k = 5.',
              bn: 'পরামিতি: lambda = ৩, k = ৫।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute terms: 3^5 = 243, 5! = 120, e^(-3) ≈ 0.049787.',
              bn: 'পদগুলোর মান: ৩^৫ = ২৪৩; ৫! = ১২০; e^(-৩) ≈ ০.০৪৯৭৮৭।',
            },
            math: "3^5 = 243, \\quad 5! = 120, \\quad e^{-3} \\approx 0.04979",
          },
          {
            step: 3,
            text: {
              en: 'Multiply: P(X = 5) = (243 * 0.049787) / 120 = 12.098 / 120 ≈ 0.1008 (10.08%).',
              bn: 'গুণফল: P(X = ৫) = (২৪৩ * ০.০৪৯৭৮৭) / ১২০ = ০.১০০৮ (১০.০৮%)।',
            },
            math: "P(X = 5) = \\frac{243 \\times 0.04979}{120} \\approx 0.1008",
          },
        ],
        finalAnswer: {
          en: 'The probability of receiving exactly 5 requests in a second is approximately 10.08%.',
          bn: 'কোনো এক সেকেন্ডে ঠিক ৫টি রিকোয়েস্ট আসার সম্ভাব্যতা প্রায় ১০.০৮%।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Cybersecurity & DDoS Protection', bn: 'সাইবার সিকিউরিটি ও আক্রমণ প্রতিরোধ' },
        example: {
          en: 'Monitoring traffic anomaly: if packet volume in a 1-second window exceeds the 99.99th percentile of a Poisson rate, an automatic DDoS filter triggers.',
          bn: 'প্যাকেট আসার সংখ্যা পয়সোঁ বণ্টনের ৯৯.৯৯ শতাংশ সীমা ছাড়িয়ে গেলে স্বয়ংক্রিয় আক্রমণ প্রতিরোধ ব্যবস্থা চালু করা।',
        },
      },
      {
        field: { en: 'Hospital Emergency Room Staffing', bn: 'হাসপাতালের জরুরি বিভাগ' },
        example: {
          en: 'Calculating ambulance arrival probabilities per hour during weekend nights to schedule on-call surgeons.',
          bn: 'সাপ্তাহিক ছুটির দিনে প্রতি ঘণ্টায় কতজন জরুরি রোগী আসতে পারে তার ভিত্তিতে চিকিৎসক মোতায়েন।',
        },
      },
    ],
    pythonCode: `from scipy.stats import poisson

lam = 3.0  # average rate

# Probability of exactly 5 events
p_5 = poisson.pmf(5, lam)
print(f"P(X = 5): {p_5:.4f}")

# Probability of at most 3 events P(X <= 3)
p_at_most_3 = poisson.cdf(3, lam)
print(f"P(X <= 3): {p_at_most_3:.4f}")

# Overdispersion test check
mean = lam
variance = lam
print(f"Theoretical Mean: {mean}, Variance: {variance}")`,
    rCode: `lam <- 3
cat("P(X = 5):", dpois(5, lambda = lam), "\\n")
cat("P(X <= 3):", ppois(3, lambda = lam), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming Poisson applies when events clump together or trigger one another (e.g. viral retweets or contagious infections).',
          bn: 'একটি ঘটনা অন্য ঘটনাকে উৎসাহিত করলে (যেমন সংক্রামক রোগ বা ভাইরাল পোস্ট) পয়সোঁ বণ্টন ধরে নেওয়া।',
        },
        correct: {
          en: 'Poisson requires strict independence. If variance exceeds the mean (overdispersion), use the Negative Binomial Distribution instead.',
          bn: 'পয়সোঁ বণ্টনে ঘটনাগুলোর পারস্পরিক স্বাধীনতা বাধ্যতামূলক; উপাত্তে ওভারডিসপারশন থাকলে নেগেটিভ বায়োনোমিয়াল বণ্টন ব্যবহার করুন।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Poisson models count data over time or space where the average rate λ is known and events occur independently.',
        bn: 'স্থির গড় হারে স্বাধীনভাবে ঘটা বিরল ঘটনার সংখ্যা গণনায় পয়সোঁ মডেল প্রযোজ্য।',
      },
      {
        en: 'The signature feature of Poisson is that mean equals variance (E[X] = Var(X) = λ).',
        bn: 'পয়সোঁ বণ্টনের প্রধান বৈশিষ্ট্য হলো এর গড় ও ভেদাঙ্কের মান সর্বদা সমান।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q24-1',
        question: {
          en: 'If a customer support queue experiences an average of λ = 4 arrivals per hour, what is the variance of arrivals per hour?',
          bn: 'যদি কোনো সাপোর্ট সেন্টারে প্রতি ঘণ্টায় গড়ে λ = ৪ জন গ্রাহক আসেন, তবে তাদের আগমনের ভেদাঙ্ক (Variance) কত?',
        },
        options: [
          { en: '2', bn: '২' },
          { en: '4', bn: '৪' },
          { en: '16', bn: '১৬' },
          { en: '0.25', bn: '০.২৫' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'For any Poisson distribution, the variance is mathematically identical to the mean rate lambda (Var(X) = λ = 4).',
          bn: 'যেকোনো পয়সোঁ বণ্টনে ভেদাঙ্ক সর্বদা ল্যাম্বডার মানের সমান হয় (ভেদাঙ্ক = λ = ৪)।',
        },
      },
    ],
    relatedLessonIds: ['binomial-distribution', 'random-variables', 'normal-distribution'],
  },

  // 25. Two-Sample t-Test & A/B Testing
  {
    id: 'two-sample-t-test',
    categoryId: 'inference',
    order: 25,
    title: {
      en: 'Two-Sample t-Test & A/B Testing',
      bn: 'দ্বি-নমুনা টি-টেস্ট ও এ/বি টেস্টিং',
    },
    shortDescription: {
      en: 'Compare the means of two independent groups to determine if observed differences are statistically significant or merely random noise.',
      bn: 'দুটি পৃথক দলের গড় তুলনা করে যাচাই করুন তাদের পার্থক্যের কারণ সত্যিই কোনো প্রভাব নাকি কেবলই ভাগ্যের খেলা।',
    },
    definition: {
      en: "The Two-Sample Independent Student's t-Test evaluates whether the population means of two independent groups differ significantly. Welch's t-test adapts this when the two groups have unequal sample sizes or variances.",
      bn: 'দ্বি-নমুনা টি-টেস্ট হলো এমন একটি অনুমানমূলক পরীক্ষা যা দুটি স্বাধীন দলের গড় মানের মধ্যে কোনো অর্থপূর্ণ বা তাৎপর্যপূর্ণ পার্থক্য আছে কি না তা নির্ধারণ করে। দলগুলোর উপাত্তের বিস্তার অসমান হলে ওয়েলচ টি-টেস্ট (Welch\'s t-test) ব্যবহৃত হয়।',
    },
    whyItMatters: {
      en: "A/B testing is the primary scientific method of tech firms (Google, Amazon, Meta) and drug regulators (FDA). The two-sample t-test tells engineers whether Version B's higher metrics represent real value or sampling fluke.",
      bn: 'গুগল, অ্যামাজন বা মেটার মতো প্রযুক্তি প্রতিষ্ঠান এবং বিশ্বখ্যাত ওষুধ নিয়ন্ত্রক সংস্থাগুলোর নতুন ফিচার বা ওষুধের কার্যকারিতা প্রমাণের প্রধান ভিত্তি হলো দ্বি-নমুনা টি-টেস্ট।',
    },
    level: 'intermediate',
    prerequisites: ['hypothesis-testing', 'confidence-intervals'],
    keyTerms: [
      {
        term: { en: 'Null Hypothesis (H0)', bn: 'নাস্তিক প্রকল্প (H0)' },
        definition: {
          en: 'The default stance that there is zero difference between the two group means.',
          bn: 'প্রাথমিক অনুমান যে দুটি দলের গড় মানের মধ্যে কোনো বাস্তব পার্থক্য নেই (μ1 = μ2)।',
        },
        latex: 'H_0: \\mu_1 = \\mu_2',
      },
      {
        term: { en: "Welch's t-Statistic", bn: 'ওয়েলচ টি-পরিসংখ্যান' },
        definition: {
          en: 'A t-test formulation that does not assume equal population variances.',
          bn: 'দুটি দলের ভেদাঙ্ক সমান না হলেও কার্যকরভাবে টি-মান হিসাব করার সূত্র।',
        },
        latex: 't = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
      },
    ],
    equations: [
      {
        label: { en: "Welch's Two-Sample t-Statistic", bn: 'ওয়েলচ দ্বি-নমুনা টি-সূত্র' },
        latex: 't = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
        explanation: {
          en: 'Standardizes the difference between sample means by the combined standard error.',
          bn: 'নমুনা গড়দ্বয়ের ব্যবধানকে তাদের সম্মিলিত প্রমিত ভুল (স্ট্যান্ডার্ড এরর) দিয়ে ভাগ করে টি-মান তৈরি করে।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'A/B Test on App Checkout Speed', bn: 'অ্যাপ চেকআউট স্পিডে এ/বি টেস্টিং' },
        problem: {
          en: 'Group A (control): n1=30, mean1=15.0s, s1=2.0s. Group B (streamlined UI): n2=30, mean2=13.5s, s2=2.0s. Calculate the t-statistic.',
          bn: 'গ্রুপ A: ৩০ জন, গড় ১৫.০ সেকেন্ড, s১=২.০। গ্রুপ B: ৩০ জন, গড় ১৩.৫ সেকেন্ড, s২=২.০। টি-পরিসংখ্যান হিসাব করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Difference between means: 15.0 - 13.5 = 1.5 seconds.',
              bn: 'গড়ের ব্যবধান: ১৫.০ - ১৩.৫ = ১.৫ সেকেন্ড।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Standard error: sqrt( (4/30) + (4/30) ) = sqrt( 8/30 ) = sqrt(0.2667) ≈ 0.5164.',
              bn: 'স্ট্যান্ডার্ড এরর: sqrt( ৪/৩০ + ৪/৩০ ) = sqrt( ০.২৬৬৭ ) ≈ ০.৫১৬৪।',
            },
            math: "SE = \\sqrt{\\frac{2^2}{30} + \\frac{2^2}{30}} = \\sqrt{\\frac{8}{30}} \\approx 0.5164",
          },
          {
            step: 3,
            text: {
              en: 'Compute t: 1.5 / 0.5164 ≈ 2.905.',
              bn: 'টি-মান: ১.৫ / ০.৫১৬৪ ≈ ২.৯০৫।',
            },
            math: "t = \\frac{1.5}{0.5164} \\approx 2.905",
          },
        ],
        finalAnswer: {
          en: 'The t-statistic is 2.905. With df ≈ 58, the p-value is ~0.005 (< 0.05), so we reject H0. The new UI is significantly faster!',
          bn: 'টি-মান ২.৯০৫ এবং p-মান প্রায় ০.০০৫ (< ০.০৫); সুতরাং নাস্তিক প্রকল্প বাতিল। নতুন ইন্টারফেসটি পরিসংখ্যানিকভাবে নিশ্চিতভাবেই দ্রুত!',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Web Design & Conversion Optimization', bn: 'ওয়েব ডিজাইন ও এ/বি টেস্টিং' },
        example: {
          en: 'Testing whether a single-page checkout increases average order value compared to a multi-step checkout.',
          bn: 'এক পৃষ্ঠার চেকআউট সিস্টেম ক্রেতাদের গড় খরচের পরিমাণ বাড়ায় কি না তা যাচাই।',
        },
      },
      {
        field: { en: 'Clinical Drug Trials', bn: 'ক্লিনিক্যাল ড্রাগ ট্রায়াল' },
        example: {
          en: 'Comparing average blood pressure reduction between a new antihypertensive medication and a placebo.',
          bn: 'নতুন ওষুধের রক্তচাপ কমানোর গড় কার্যকারিতা প্লাসিবোর চেয়ে বেশি কি না তা যাচাই।',
        },
      },
    ],
    pythonCode: `from scipy import stats
import numpy as np

# Control (Group A) and Treatment (Group B)
np.random.seed(42)
group_a = np.random.normal(loc=15.0, scale=2.0, size=30)
group_b = np.random.normal(loc=13.5, scale=2.0, size=30)

# Two-sample Welch's t-test
t_stat, p_val = stats.ttest_ind(group_a, group_b, equal_var=False)

print(f"Group A Mean: {group_a.mean():.2f}")
print(f"Group B Mean: {group_b.mean():.2f}")
print(f"t-statistic: {t_stat:.4f}")
print(f"p-value: {p_val:.4f}")
if p_val < 0.05:
    print("Result: Statistically significant difference (Reject H0)!")
else:
    print("Result: Fail to reject H0.")`,
    rCode: `a <- rnorm(30, mean = 15.0, sd = 2.0)
b <- rnorm(30, mean = 13.5, sd = 2.0)
result <- t.test(a, b)
print(result)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming equal variances without testing, which inflates false positive rates when sample sizes differ.',
          bn: 'দলদ্বয়ের ভেদাঙ্ক যাচাই না করেই সমান ধরে নেওয়া, যা নমুনার আকার ভিন্ন হলে ভুল সিদ্ধান্ত দেয়।',
        },
        correct: {
          en: "Always default to Welch's t-test (`equal_var=False` in Python), which safely handles unequal variances without sacrificing power.",
          bn: 'সর্বদা ওয়েলচ টি-টেস্ট ব্যবহার করুন (`equal_var=False`), যা ভেদাঙ্ক অসমান হলেও সঠিক ফলাফল বজায় রাখে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The two-sample t-test measures whether the gap between two sample averages is real or random fluctuation.',
        bn: 'দ্বি-নমুনা টি-টেস্ট প্রমাণ করে দুটি দলের গড়ের পার্থক্য বাস্তব নাকি কেবলই কাকতালীয়।',
      },
      {
        en: 'A p-value below 0.05 provides evidence that the treatment condition produces a genuine effect.',
        bn: 'পি-মান ০.০৫ এর কম হলে নাস্তিক প্রকল্প বাতিল করে নতুন ফিচারের কার্যকারিতা গ্রহণ করা হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q25-1',
        question: {
          en: 'If an A/B test comparing two website versions yields a p-value of 0.002, what conclusion should the product team make at alpha = 0.05?',
          bn: 'একটি এ/বি পরীক্ষায় p-মান ০.০০২ আসলে (আলফা = ০.০৫), প্রোডাক্ট টিম কোন সিদ্ধান্তে পৌঁছাবে?',
        },
        options: [
          { en: 'Accept H0: There is no measurable difference between versions', bn: 'H0 গ্রহণ: দুটি ভার্সনের মধ্যে কোনো পার্থক্য নেই' },
          { en: 'Reject H0: There is a statistically significant difference between the two versions', bn: 'H0 বাতিল: দুটি ভার্সনের পারফরম্যান্সে পরিসংখ্যানিকভাবে তাৎপর্যপূর্ণ পার্থক্য রয়েছে' },
          { en: 'The test failed and must be deleted', bn: 'পরীক্ষাটি ব্যর্থ হয়েছে এবং মুছে ফেলতে হবে' },
          { en: 'Version A is exactly 0.2% better than Version B', bn: 'ভার্সন A ভার্সন B-এর চেয়ে ০.২% ভালো' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Because p (0.002) is less than alpha (0.05), we reject the null hypothesis and conclude the observed difference is highly unlikely to be due to chance.',
          bn: 'যেহেতু পি-মান (০.০০২) আলফা (০.০৫)-এর চেয়ে অনেক ছোট, তাই নাস্তিক প্রকল্প বাতিল করে সিদ্ধান্ত নেওয়া হয় যে দুই ভার্সনের মধ্যে বাস্তব পার্থক্য বিদ্যমান।',
        },
      },
    ],
    relatedLessonIds: ['hypothesis-testing', 'confidence-intervals', 'central-limit-theorem'],
  },

  // 26. Chi-Square Test of Independence
  {
    id: 'chi-square-test',
    categoryId: 'inference',
    order: 26,
    title: {
      en: 'Chi-Square Test of Independence',
      bn: 'কাই-বর্গ পরীক্ষা (Chi-Square Test of Independence)',
    },
    shortDescription: {
      en: 'Assess whether two categorical variables are statistically independent or significantly associated using contingency tables.',
      bn: 'দুটি ক্যাটাগোরিক্যাল বা শ্রেণীবদ্ধ চলকের মধ্যে পারস্পরিক নির্ভরতা বা সম্পর্ক রয়েছে কি না তা কাই-বর্গ পরীক্ষার মাধ্যমে নির্ণয় করুন।',
    },
    definition: {
      en: 'The Pearson Chi-Square Test of Independence evaluates whether there is a statistically significant relationship between two categorical variables summarized in a contingency table by comparing observed frequencies to expected frequencies under the hypothesis of independence.',
      bn: 'পিয়ারসন কাই-বর্গ পরীক্ষা হলো একটি অ-প্যারামেট্রিক অনুমানমূলক পরীক্ষা যা একটি কনটিনজেন্সি টেবিলে প্রাপ্ত পর্যবেক্ষণকৃত ফ্রিকোয়েন্সি এবং তাত্ত্বিক প্রত্যাশিত ফ্রিকোয়েন্সির তুলনা করে দুটি চলকের পারস্পরিক নির্ভরতা যাচাই করে।',
    },
    whyItMatters: {
      en: 'Real data frequently involves categories rather than continuous numbers: customer device (iOS vs Android) vs subscription plan, demographic group vs election outcome, or mutation type vs cancer prognosis.',
      bn: 'বাস্তব জীবনের অনেক উপাত্তই ক্যাটাগরিভিত্তিক (যেমন মোবাইল অপারেটিং সিস্টেম বনাম পেইড সাবস্ক্রিপশন, বা কোনো ওষুধের প্রতিক্রিয়া বনাম রোগীর বয়স গ্রুপ)। এসব ক্ষেত্রে কাই-বর্গ পরীক্ষাই সম্পর্ক প্রমাণের একমাত্র নির্ভরযোগ্য হাতিয়ার।',
    },
    level: 'intermediate',
    prerequisites: ['hypothesis-testing', 'data-types-and-scales'],
    keyTerms: [
      {
        term: { en: 'Contingency Table', bn: 'কনটিনজেন্সি টেবিল' },
        definition: {
          en: 'A two-dimensional matrix displaying the joint frequency distribution of two categorical variables.',
          bn: 'দুটি শ্রেণীবদ্ধ চলকের যৌথ ফ্রিকোয়েন্সি প্রদর্শনকারী একটি দ্বিমাত্রিক সারণি।',
        },
      },
      {
        term: { en: 'Expected Frequency (E)', bn: 'প্রত্যাশিত ফ্রিকোয়েন্সি (E)' },
        definition: {
          en: 'The count expected in a cell if the two variables were completely independent.',
          bn: 'চলকদ্বয় সম্পূর্ণ স্বাধীন হলে সংশ্লিষ্ট ঘরে যে ফ্রিকোয়েন্সি থাকার কথা ছিল।',
        },
        latex: 'E_{ij} = \\frac{R_i \\times C_j}{N}',
      },
      {
        term: { en: 'Degrees of Freedom', bn: 'স্বাধীনতার মাত্রা (df)' },
        definition: {
          en: 'Calculated as (rows - 1) * (columns - 1) for an r x c contingency table.',
          bn: 'r × c টেবিলের জন্য (সারি - ১) × (কলাম - ১)।',
        },
        latex: '\\text{df} = (r - 1)(c - 1)',
      },
    ],
    equations: [
      {
        label: { en: 'Chi-Square Test Statistic', bn: 'কাই-বর্গ পরিসংখ্যান সূত্র' },
        latex: '\\chi^2 = \\sum_{i=1}^r \\sum_{j=1}^c \\frac{(O_{ij} - E_{ij})^2}{E_{ij}}',
        explanation: {
          en: 'Sum of squared differences between observed (O) and expected (E) counts, scaled by expected counts.',
          bn: 'পর্যবেক্ষণকৃত ও প্রত্যাশিত মানের পার্থক্যের বর্গের সমষ্টিকে প্রত্যাশিত মান দিয়ে ভাগ করে কাই-বর্গ মান পাওয়া যায়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Testing Subscription Choice by Operating System', bn: 'অপারেটিং সিস্টেম ও সাবস্ক্রিপশন পছন্দের সম্পর্ক যাচাই' },
        problem: {
          en: 'In a survey of 100 users, 60 use iOS (30 Free, 30 Paid) and 40 use Android (30 Free, 10 Paid). Total Free = 60, Total Paid = 40. Calculate the expected frequency of iOS Paid users and the overall Chi-Square contribution.',
          bn: '১০০ জন ব্যবহারকারীর মধ্যে ৬০ জন iOS (৩০ জন ফ্রি, ৩০ জন পেইড) এবং ৪০ জন Android (৩০ জন ফ্রি, ১০ জন পেইড)। মোট ফ্রি ৬০, মোট পেইড ৪০। iOS পেইড ব্যবহারকারীদের প্রত্যাশিত মান কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Expected iOS Paid: E = (Row Total iOS * Col Total Paid) / N = (60 * 40) / 100 = 24.',
              bn: 'iOS পেইড ঘরের প্রত্যাশিত মান: E = (৬০ * ৪০) / ১০০ = ২৪।',
            },
            math: "E_{\\text{iOS, Paid}} = \\frac{60 \\times 40}{100} = 24",
          },
          {
            step: 2,
            text: {
              en: 'Compare Observed (30) vs Expected (24): (30 - 24)^2 / 24 = 36 / 24 = 1.5.',
              bn: 'পর্যবেক্ষণকৃত (৩০) বনাম প্রত্যাশিত (২৪): (৩০ - ২৪)^২ / ২৪ = ৩৬ / ২৪ = ১.৫।',
            },
            math: "\\frac{(30 - 24)^2}{24} = \\frac{36}{24} = 1.5",
          },
        ],
        finalAnswer: {
          en: 'Expected iOS Paid count is 24. Summing all 4 cells gives chi-square = 4.167 (p = 0.041 < 0.05), proving a significant association between OS and subscription rate!',
          bn: 'প্রত্যাশিত মান ২৪। চারটি ঘরের মোট কাই-বর্গ ৪.১৬৭ (p = ০.০৪১ < ০.০৫), যা নির্দেশ করে মোবাইল ওএসের সাথে পেইড সাবস্ক্রিপশনের বাস্তব সম্পর্ক রয়েছে!',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Genomics & Disease Association', bn: 'জিনতত্ত্ব ও রোগ প্রতিরোধ' },
        example: {
          en: 'Testing whether specific single nucleotide polymorphisms (SNPs) correlate with hereditary heart disease prevalence.',
          bn: 'নির্দিষ্ট জেনেটিক বৈশিষ্ট্যের সাথে বংশগত হৃদরোগের প্রকোপের কোনো সম্পর্ক আছে কি না তা অনুসন্ধান।',
        },
      },
    ],
    pythonCode: `import numpy as np
from scipy.stats import chi2_contingency

# Contingency table: Rows = [iOS, Android], Cols = [Free, Paid]
table = np.array([
    [30, 30],  # iOS
    [30, 10]   # Android
])

chi2_stat, p_val, dof, expected = chi2_contingency(table)

print(f"Chi2 Statistic: {chi2_stat:.4f}")
print(f"p-value: {p_val:.4f}")
print(f"Degrees of freedom: {dof}")
print("Expected frequencies table:\\n", expected)`,
    rCode: `data_matrix <- matrix(c(30, 30, 30, 10), nrow = 2, byrow = TRUE)
chisq.test(data_matrix)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Running Chi-Square when cell expected counts are very small (e.g. less than 5).',
          bn: 'কোনো ঘরে প্রত্যাশিত ফ্রিকোয়েন্সি ৫ এর চেয়ে কম থাকা সত্ত্বেও কাই-বর্গ টেস্ট চালানো।',
        },
        correct: {
          en: "When expected cell counts are below 5, the asymptotic distribution fails: use Fisher's Exact Test instead.",
          bn: 'প্রত্যাশিত মান ৫ এর কম হলে কাই-বর্গের বদলে ফিশারস একজ্যাক্ট টেস্ট (Fisher\'s Exact Test) ব্যবহার করা বাধ্যতামূলক।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The Chi-Square test compares real observations to what you would see if variables were purely independent.',
        bn: 'কাই-বর্গ পরীক্ষা বাস্তব সংখ্যাকে তাত্ত্বিক স্বাধীন পরিস্থিতির সাথে তুলনা করে।',
      },
      {
        en: 'A high Chi-Square statistic indicates that the observed category frequencies diverge significantly from random chance.',
        bn: 'কাই-বর্গ মান যত বড় হবে, চলকদ্বয়ের মধ্যে পারস্পরিক সম্পর্কের প্রমাণ তত জোরালো হবে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q26-1',
        question: {
          en: 'What are the degrees of freedom for a Chi-Square test on a contingency table with 3 rows and 4 columns?',
          bn: '৩টি সারি এবং ৪টি কলাম বিশিষ্ট একটি কনটিনজেন্সি টেবিলে কাই-বর্গ পরীক্ষার স্বাধীনতার মাত্রা (df) কত?',
        },
        options: [
          { en: '12', bn: '১২' },
          { en: '7', bn: '৭' },
          { en: '6', bn: '৬' },
          { en: '5', bn: '৫' },
        ],
        correctIndex: 2,
        explanation: {
          en: 'df = (rows - 1) * (columns - 1) = (3 - 1) * (4 - 1) = 2 * 3 = 6.',
          bn: 'স্বাধীনতার মাত্রা = (সারি - ১) × (কলাম - ১) = (৩ - ১) × (৪ - ১) = ২ × ৩ = ৬।',
        },
      },
    ],
    relatedLessonIds: ['data-types-and-scales', 'hypothesis-testing', 'two-sample-t-test'],
  },

  // 27. Multiple Linear Regression & Multicollinearity
  {
    id: 'multiple-linear-regression',
    categoryId: 'regression',
    order: 27,
    title: {
      en: 'Multiple Linear Regression & Multicollinearity',
      bn: 'বহুধা রৈখিক নির্ভরণ ও মাল্টিকোলিনিয়ারিটি',
    },
    shortDescription: {
      en: 'Model a continuous outcome using multiple predictors simultaneously while diagnosing multicollinearity and evaluating adjusted R-squared.',
      bn: 'একাধিক প্রভাবক চলকের সমন্বয়ে একটি ফলাফল চলকের পূর্বাভাস দিন; মাল্টিকোলিনিয়ারিটি শনাক্তকরণ এবং সমন্বিত R-স্কয়ার্ড মূল্যায়ন।',
    },
    definition: {
      en: 'Multiple Linear Regression is an extension of simple linear regression that models the linear relationship between one continuous dependent variable Y and two or more independent explanatory variables X1, X2, ..., Xp.',
      bn: 'বহুধা রৈখিক নির্ভরণ হলো সাধারণ রৈখিক নির্ভরণের একটি সম্প্রসারিত রূপ, যা একটি অবিচ্ছিন্ন নির্ভরশীল চলক Y এবং দুই বা ততোধিক স্বাধীন ব্যাখ্যাদানকারী চলকের (X1, X2, ..., Xp) মধ্যে রৈখিক সম্পর্ক প্রকাশ করে।',
    },
    whyItMatters: {
      en: 'Real world outcomes rarely have single causes. House prices depend on square footage, location, age, and bedrooms simultaneously. Multiple regression isolates the unique contribution of each variable while holding other factors constant.',
      bn: 'বাস্তব জীবনে কোনো ফলাফলই একক কারণে ঘটে না। যেমন বাড়ির দাম শুধু আয়তনের ওপর নয়, বয়স, বেডরুম ও এলাকার ওপরও নির্ভরশীল। বহুধা রিগ্রেশন অন্য সব চলক স্থির রেখে প্রতিটি চলকের স্বতন্ত্র প্রভাব পরিমাপ করে।',
    },
    level: 'intermediate',
    prerequisites: ['simple-linear-regression', 'correlation'],
    keyTerms: [
      {
        term: { en: 'Partial Regression Coefficient', bn: 'আংশিক নির্ভরণ সহগ' },
        definition: {
          en: 'The expected change in Y for a one-unit increase in X_j, holding all other predictors constant (ceteris paribus).',
          bn: 'অন্যান্য সকল চলক স্থির থাকা অবস্থায় নির্দিষ্ট চলকটির এক একক পরিবর্তনে ফলাফলের প্রত্যাশিত পরিবর্তন।',
        },
        latex: '\\beta_j',
      },
      {
        term: { en: 'Adjusted R-Squared', bn: 'সমন্বিত R-স্কয়ার্ড (Adjusted R²)' },
        definition: {
          en: 'A modified version of R^2 that penalizes the addition of extraneous explanatory variables that do not improve model fit.',
          bn: 'R-স্কয়ার্ডের একটি সংশোধিত রূপ যা মডেলে অপ্রয়োজনীয় বা অকার্যকর চলক যোগ করলে পেনাল্টি আরোপ করে কমে যায়।',
        },
        latex: 'R^2_{\\text{adj}} = 1 - \\left[ \\frac{(1 - R^2)(n - 1)}{n - p - 1} \\right]',
      },
      {
        term: { en: 'Variance Inflation Factor (VIF)', bn: 'ভ্যারিয়েন্স ইনফ্লেশন ফ্যাক্টর (VIF)' },
        definition: {
          en: 'A metric detecting multicollinearity; VIF > 5 or 10 indicates severe linear dependence between predictors.',
          bn: 'চলকগুলোর পারস্পরিক সম্পর্কের তীব্রতা মাপার একক; VIF ৫ বা ১০ এর বেশি হলে গুরুতর মাল্টিকোলিনিয়ারিটি বিদ্যমান।',
        },
        latex: '\\text{VIF}_j = \\frac{1}{1 - R_j^2}',
      },
    ],
    equations: [
      {
        label: { en: 'Multiple Regression Model', bn: 'বহুধা রিগ্রেশন সমীকরণ' },
        latex: 'Y = \\beta_0 + \\beta_1 X_1 + \\beta_2 X_2 + \\dots + \\beta_p X_p + \\epsilon',
        explanation: {
          en: 'Vector form: Y = X beta + epsilon, solved via OLS: beta_hat = (X^T X)^(-1) X^T Y.',
          bn: 'ম্যাট্রিক্স সমীকরণ Y = X beta + epsilon, যার OLS সমাধান হলো beta_hat = (X^T X)^(-1) X^T Y।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'House Price Prediction with Square Footage & Bedrooms', bn: 'আয়তন ও বেডরুম দিয়ে বাড়ির মূল্য নির্ধারণ' },
        problem: {
          en: 'Fitted model: Price = 50,000 + 150 * (SqFt) + 10,000 * (Bedrooms). Predict the price of a 1,500 sq ft home with 3 bedrooms.',
          bn: 'মডেল: Price = 50,000 + 150 * (SqFt) + 10,000 * (Bedrooms)। ১,৫০০ বর্গফুট ও ৩ বেডরুমের একটি বাড়ির মূল্য কত হবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Substitute values: Price = 50,000 + (150 * 1500) + (10,000 * 3).',
              bn: 'মান বসান: মূল্য = ৫০,০০০ + (১৫০ * ১৫০০) + (১০,০০০ * ৩)।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute intermediate terms: 150 * 1500 = 225,000; 10,000 * 3 = 30,000.',
              bn: 'গুণফল: ১৫০ * ১৫০০ = ২,২৫,০০০; ১০,০০০ * ৩ = ৩০,০০০।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Sum components: 50,000 + 225,000 + 30,000 = $305,000.',
              bn: 'মোট যোগফল: ৫০,০০০ + ২,২৫,০০০ + ৩০,০০০ = ৩,০৫,০০০ টাকা বা ডলার।',
            },
          },
        ],
        finalAnswer: {
          en: 'The predicted house price is $305,000.',
          bn: 'বাড়িটির আনুমানিক বাজারমূল্য ৩,০৫,০০০ টাকা বা ডলার।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Financial Asset Valuation & Risk Modeling', bn: 'ফাইন্যান্স ও ঝুঁকি মূল্যায়ন' },
        example: {
          en: 'Fama-French Multi-Factor models estimating expected stock returns based on market risk, firm size, and book-to-market ratio.',
          bn: 'বাজারের ঝুঁকি, কোম্পানির আকার ও অন্যান্য সূচকের ভিত্তিতে শেয়ারের সম্ভাব্য মুনাফা পূর্বাভাস।',
        },
      },
    ],
    pythonCode: `import statsmodels.api as sm
import pandas as pd
import numpy as np

# Synthetic real-estate data
np.random.seed(42)
n = 100
sqft = np.random.uniform(800, 2500, n)
bedrooms = np.random.randint(1, 5, n)
noise = np.random.normal(0, 15000, n)
price = 50000 + 150 * sqft + 10000 * bedrooms + noise

df = pd.DataFrame({'SqFt': sqft, 'Bedrooms': bedrooms, 'Price': price})

# Add intercept and fit OLS model
X = sm.add_constant(df[['SqFt', 'Bedrooms']])
y = df['Price']
model = sm.OLS(y, X).fit()

print(model.summary().tables[1])
print(f"R-squared: {model.rsquared:.4f}, Adj R-squared: {model.rsquared_adj:.4f}")`,
    rCode: `model <- lm(Price ~ SqFt + Bedrooms, data = df)
summary(model)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Relying solely on standard R^2: standard R^2 mathematically increases whenever you add ANY new variable, even pure random noise.',
          bn: 'শুধুমাত্র সাধারণ R-স্কয়ার্ড দেখে মডেল বিচার করা; মডেলে যেকোনো অপ্রাসঙ্গিক সংখ্যা যোগ করলেও সাধারণ R-স্কয়ার্ড বাড়ে।',
        },
        correct: {
          en: 'Always inspect Adjusted R^2, AIC/BIC, or cross-validation test scores when comparing models with different numbers of predictors.',
          bn: 'সর্বদা সমন্বিত R-স্কয়ার্ড (Adjusted R²) এবং ক্রস-ভ্যালিডেশন দেখে সিদ্ধান্ত নিন।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Multiple regression coefficients estimate the marginal effect of each predictor while controlling for all others.',
        bn: 'বহুধা রিগ্রেশন সহগগুলো অন্যান্য চলক স্থির রেখে প্রতিটি চলকের একক অবদান পরিমাপ করে।',
      },
      {
        en: 'Severe multicollinearity destabilizes coefficient estimates, making p-values misleading.',
        bn: 'উচ্চ মাল্টিকোলিনিয়ারিটি থাকলে সহগগুলোর মান অস্থিতিশীল হয়ে যায় এবং মডেলের নির্ভরযোগ্যতা কমে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q27-1',
        question: {
          en: 'Why is Adjusted R-squared preferred over standard R-squared when evaluating multiple regression models with many predictors?',
          bn: 'অনেকগুলো চলক সম্বলিত মডেলে সাধারণ R-স্কয়ার্ডের চেয়ে সমন্বিত R-স্কয়ার্ড কেন গ্রহণযোগ্য?',
        },
        options: [
          { en: 'Adjusted R-squared can never be negative', bn: 'সমন্বিত R-স্কয়ার্ড কখনো ঋণাত্মক হতে পারে না' },
          { en: 'Adjusted R-squared penalizes adding irrelevant features that do not genuinely improve fit', bn: 'সমন্বিত R-স্কয়ার্ড এমন অপ্রয়োজনীয় চলক যোগ করলে পেনাল্টি আরোপ করে যা বাস্তবে মডেলের মান বাড়ায় না' },
          { en: 'Standard R-squared is only valid for simple linear regression', bn: 'সাধারণ R-স্কয়ার্ড কেবল সরল রিগ্রেশনেই ব্যবহার করা যায়' },
          { en: 'Adjusted R-squared ignores residual error', bn: 'সমন্বিত R-স্কয়ার্ড রেসিডুয়াল ভুলকে উপেক্ষা করে' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Standard R² automatically climbs with every added predictor. Adjusted R² includes a degrees-of-freedom penalty (n-1)/(n-p-1), only increasing if the new variable improves the model beyond chance.',
          bn: 'সাধারণ R² যেকোনো চলক যোগ করলেই বৃদ্ধি পায়। পক্ষান্তরে অ্যাডজাস্টেড R² স্বাধীনতার মাত্রার ভিত্তিতে পেনাল্টি প্রয়োগ করে, ফলে চলকটি সত্যিই কার্যকর না হলে এটি কমে যায়।',
        },
      },
    ],
    relatedLessonIds: ['simple-linear-regression', 'correlation', 'exploratory-data-analysis'],
  },

  // 28. Time Series Analysis & Forecasting
  {
    id: 'time-series-analysis',
    categoryId: 'advanced-stats',
    order: 28,
    title: {
      en: 'Time Series Analysis & Forecasting',
      bn: 'কালীন সারি বিশ্লেষণ ও পূর্বাভাস (Time Series Analysis)',
    },
    shortDescription: {
      en: 'Decompose time-ordered sequential data into trend, seasonality, and residual noise, and master stationarity and autoregressive models.',
      bn: 'সময়ের ধারায় সাজানো উপাত্তকে ট্রেন্ড, ঋতুগত প্রভাব ও রেসিডুয়াল নয়েজে বিভক্ত করুন এবং এআরআইএমএ (ARIMA) মডেলিং আয়ত্ত করুন।',
    },
    definition: {
      en: 'A Time Series is an ordered sequence of data points recorded at uniform successive time intervals. Time Series Analysis comprises methods for extracting meaningful statistics and characteristics, while forecasting projects future values using past behavior.',
      bn: 'কালীন সারি হলো নির্দিষ্ট সময় পরপর ক্রমানুসারে সংগৃহীত তথ্যের একটি ধারাবাহিক ধারা। কালীন সারি বিশ্লেষণ অতীতের ধারার অভ্যন্তরীণ বৈশিষ্ট্য ও ঋতুগত চক্র উদঘাটন করে এবং ভবিষ্যতের জন্য নির্ভুল পূর্বাভাস প্রদান করে।',
    },
    whyItMatters: {
      en: 'Virtually all business forecasting operates on time series: stock prices, quarterly revenues, retail holiday inventory planning, climate change temperature shifts, and website daily active users.',
      bn: 'শেয়ার বাজারের গতিপ্রকৃতি, আবহাওয়ার পরিবর্তন, কোম্পানির বার্ষিক আয়ের প্রক্ষেপণ এবং ছুটির দিনে পণ্যের চাহিদা পূর্বাভাসের ক্ষেত্রে কালীন সারি বিশ্লেষণ বিশ্বজুড়ে ব্যবহৃত হয়।',
    },
    level: 'advanced',
    prerequisites: ['variance-and-std-dev', 'simple-linear-regression'],
    keyTerms: [
      {
        term: { en: 'Trend & Seasonality', bn: 'ট্রেন্ড ও ঋতুগত প্রভাব' },
        definition: {
          en: 'Trend is long-term underlying direction (upward/downward); Seasonality is periodic recurring patterns at fixed calendar intervals.',
          bn: 'ট্রেন্ড হলো দীর্ঘমেয়াদী ঊর্ধ্বমুখী বা নিম্নমুখী গতি; ঋতুগত প্রভাব হলো নির্দিষ্ট ক্যালেন্ডার সময় পরপর পুনরাবৃত্ত হওয়া আচরণ।',
        },
      },
      {
        term: { en: 'Stationarity', bn: 'স্থিতিশীলতা (Stationarity)' },
        definition: {
          en: 'A time series is weakly stationary if its mean, variance, and autocovariance remain constant over time.',
          bn: 'একটি কালীন সারি তখনই স্থিতিশীল হয় যখন সময়ের সাথে সাথে এর গড়, ভেদাঙ্ক ও অটো-কোভ্যারিয়েন্স অপরিবর্তিত থাকে।',
        },
      },
      {
        term: { en: 'ARIMA (p, d, q)', bn: 'এআরআইএমএ মডেল' },
        definition: {
          en: 'AutoRegressive (p) Integrated (d differences to achieve stationarity) Moving Average (q lagged errors).',
          bn: 'অটোরিগ্রেসিভ (p), ইন্টিগ্রেটেড (d পার্থকীকরণ) এবং মুভিং অ্যাভারেজ (q ত্রুটি ল্যাগ) এর সমন্বিত মডেল।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Additive Time Series Decomposition', bn: 'যোজনশীল কালীন সারি বিভাজন' },
        latex: 'Y_t = T_t + S_t + C_t + R_t',
        explanation: {
          en: 'Observed value Y_t decomposed into Trend (T), Seasonality (S), Cycle (C), and Irregular Residuals (R).',
          bn: 'পর্যবেক্ষণকৃত মানকে ট্রেন্ড, ঋতুগত প্রভাব, চক্রাকার পরিবর্তন ও অবশিষ্টাংশে বিভক্ত করার সমীকরণ।',
        },
      },
      {
        label: { en: 'First-Order Autoregressive AR(1) Model', bn: 'প্রথম-মাত্রার অটো-রিগ্রেসিভ AR(1) মডেল' },
        latex: 'Y_t = c + \\phi_1 Y_{t-1} + \\epsilon_t',
        explanation: {
          en: 'Today value Y_t depends linearly on yesterday value Y_(t-1) plus white noise error epsilon_t.',
          bn: 'আজকের মান Y_t নির্ভর করে পূর্ববর্তী দিনের মান Y_(t-1) এবং নতুন দৈব ত্রুটির ওপর।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Detecting Non-Stationarity via Differencing', bn: 'পার্থক্যকরণ (Differencing) দিয়ে স্থিতিশীলতা অর্জন' },
        problem: {
          en: 'A stock price series is: [100, 102, 105, 109, 114]. The series shows an upward trend (non-stationary mean). Calculate the first difference series (d=1).',
          bn: 'শেয়ারের দাম: [১০০, ১০২, ১০৫, ১০৯, ১১৪]। এখানে ঊর্ধ্বমুখী ট্রেন্ড রয়েছে। প্রথম পার্থক্যের ধারা (d=১) হিসাব করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Difference each consecutive term: Delta Y_t = Y_t - Y_(t-1).',
              bn: 'প্রতিটি পদ থেকে পূর্ববর্তী পদ বিয়োগ: ১০২ - ১০০ = ২।',
            },
            math: "\\Delta Y_1 = 102 - 100 = 2",
          },
          {
            step: 2,
            text: {
              en: 'Continue for remaining terms: 105 - 102 = 3; 109 - 105 = 4; 114 - 109 = 5.',
              bn: 'পরবর্তী পদগুলো: ১০৫ - ১০২ = ৩; ১০৯ - ১০৫ = ৪; ১১৪ - ১০৯ = ৫।',
            },
          },
        ],
        finalAnswer: {
          en: 'The first difference series is [2, 3, 4, 5], transforming absolute price levels into stationary day-to-day changes.',
          bn: 'প্রথম পার্থক্যের ধারা হলো [২, ৩, ৪, ৫], যা মূল্যের পরম মানকে দৈনিক পরিবর্তনে রূপান্তর করে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Energy Grid Demand Forecasting', bn: 'বিদ্যুৎ গ্রিড ও জ্বালানি চাহিদা' },
        example: {
          en: 'National electric grids forecasting hourly megawatt load 24 hours in advance using seasonal ARIMA models.',
          bn: 'আবহাওয়া ও পূর্ববর্তী ব্যবহারের ওপর ভিত্তি করে জাতীয় গ্রিডে আগামী ২৪ ঘণ্টার বিদ্যুৎ চাহিদা প্রাক্কলন।',
        },
      },
    ],
    pythonCode: `import numpy as np
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.stattools import adfuller

# Generate synthetic daily data with trend and weekly seasonality
np.random.seed(42)
days = 180
t = np.arange(days)
trend = 0.5 * t
seasonality = 10 * np.sin(2 * np.pi * t / 7)
noise = np.random.normal(0, 2, days)
series = pd.Series(trend + seasonality + noise, index=pd.date_range('2024-01-01', periods=days))

# Augmented Dickey-Fuller Test for Stationarity
adf_result = adfuller(series)
print(f"ADF Statistic: {adf_result[0]:.4f}")
print(f"p-value: {adf_result[1]:.4f}")
print("Stationary?" , "Yes" if adf_result[1] < 0.05 else "No (Needs differencing)")`,
    rCode: `data <- ts(rnorm(180), frequency = 7)
decomp <- decompose(data)
plot(decomp)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Fitting standard regression directly onto non-stationary time series, causing "Spurious Regression" with false high R-squared.',
          bn: 'অস্থিতিশীল উপাত্তে সরাসরি সাধারণ রিগ্রেশন চালানো, যার ফলে কোনো সম্পর্ক না থাকা সত্ত্বেও মিথ্যা উচ্চ R² দেখা যায় (Spurious Regression)।',
        },
        correct: {
          en: 'Always check stationarity (ADF test) and difference the series (d in ARIMA) to remove unit root trends first.',
          bn: 'সর্বদা ADF টেস্ট দিয়ে যাচাই করে পার্থক্যকরণের (Differencing) মাধ্যমে উপাত্তকে স্থিতিশীল করে নিন।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Time series observations are ordered by time and inherently autocorrelated (violating standard independent and identically distributed assumptions).',
        bn: 'কালীন সারির তথ্যে পারস্পরিক ধারাবাহিক নির্ভরতা থাকে, যা সাধারণ স্বাধীন উপাত্তের শর্তকে অতিক্রম করে।',
      },
      {
        en: 'Decomposing time series into trend, seasonality, and residuals isolates repeatable cycles for accurate forecasting.',
        bn: 'ট্রেন্ড ও ঋতুগত চক্র আলাদা করে নিলে দীর্ঘমেয়াদী নির্ভুল পূর্বাভাস দেওয়া সম্ভব হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q28-1',
        question: {
          en: 'What mathematical property does a stationary time series maintain over time?',
          bn: 'একটি স্থিতিশীল (Stationary) কালীন সারি সময়ের সাথে সাথে কোন বৈশিষ্ট্যটি অপরিবর্তিত রাখে?',
        },
        options: [
          { en: 'Constant mean and constant variance over time', bn: 'সময়ের সাথে সাথে স্থির গড় এবং স্থির ভেদাঙ্ক' },
          { en: 'Strictly increasing exponential growth', bn: 'ধারাবাহিক সূচকীয় প্রবৃদ্ধি' },
          { en: 'Zero variance and identical data points', bn: 'শূন্য ভেদাঙ্ক এবং হুবহু একই মান' },
          { en: 'Constant negative slope', bn: 'স্থির ঋণাত্মক ঢাল' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'Weak stationarity requires that the expected value (mean) and variance are constant over time and autocovariance depends only on the time lag, not the calendar date.',
          bn: 'স্থিতিশীলতার প্রধান শর্ত হলো সময়ের পরিবর্তনের সাথে সাথে উপাত্তের গড় ও ভেদাঙ্ক স্থির থাকবে।',
        },
      },
    ],
    relatedLessonIds: ['exploratory-data-analysis', 'simple-linear-regression', 'multiple-linear-regression'],
  },

  // 29. Principal Component Analysis (PCA)
  {
    id: 'principal-component-analysis',
    categoryId: 'advanced-stats',
    order: 29,
    title: {
      en: 'Principal Component Analysis (PCA)',
      bn: 'প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (পিসিএ)',
    },
    shortDescription: {
      en: 'Compress dozens or hundreds of correlated variables into a handful of orthogonal principal components that retain maximum variance.',
      bn: 'শতাধিক পারস্পরিক সম্পর্কযুক্ত চলককে মাত্র কয়েকটি প্রধান উপাদানে রূপান্তর করুন যা উপাত্তের মূল বৈচিত্র্য বা তথ্যের সিংহভাগ ধরে রাখে।',
    },
    definition: {
      en: 'Principal Component Analysis (PCA) is an unsupervised statistical technique for dimensionality reduction. It linearly transforms high-dimensional data onto a new orthogonal coordinate system such that the greatest variance lies on the first coordinate (PC1), the second greatest variance on the second (PC2), and so on.',
      bn: 'প্রিন্সিপাল কম্পোনেন্ট অ্যানালাইসিস (পিসিএ) হলো একটি আনসুপারভাইজড ডাইমেনশনালিটি রিডাকশন বা মাত্রা সংকোচন কৌশল। এটি বহুমাত্রিক উপাত্তকে এমন একটি নতুন অক্ষে রৈখিকভাবে রূপান্তর করে যেখানে প্রথম উপাদানটি (PC1) উপাত্তের সর্বাধিক বৈচিত্র্য প্রকাশ করে।',
    },
    whyItMatters: {
      en: 'High-dimensional data suffers from the "Curse of Dimensionality" and is impossible to visualize. PCA compresses genomic datasets with 20,000 genes or image datasets with millions of pixels into 2 or 3 interpretable dimensions.',
      bn: 'হাজার হাজার চলক থাকলে ডেটা অ্যানালাইসিস ধীরগতির হয় এবং চিত্রায়ন অসম্ভব হয়ে পড়ে (Curse of Dimensionality)। পিসিএ হাজার হাজার ভ্যারিয়েবলকে মাত্র ২ বা ৩টি মাত্রায় নামিয়ে এনে সহজবোধ্য করে তোলে।',
    },
    level: 'advanced',
    prerequisites: ['linear-algebra-data-science', 'variance-and-std-dev'],
    keyTerms: [
      {
        term: { en: 'Covariance Matrix', bn: 'কোভ্যারিয়েন্স ম্যাট্রিক্স' },
        definition: {
          en: 'A square matrix giving the pairwise covariance between each pair of features in the dataset.',
          bn: 'একটি বর্গ ম্যাট্রিক্স যা প্রতিটি চলকের মধ্যকার পারস্পরিক সহ-ভেদাঙ্ক প্রদর্শন করে।',
        },
        latex: '\\Sigma = \\frac{1}{n-1} X^T X',
      },
      {
        term: { en: 'Eigenvectors & Eigenvalues', bn: 'আইগেনভেক্টর ও আইগেনমান' },
        definition: {
          en: 'Eigenvectors define the principal axes of variance; eigenvalues quantify the amount of variance explained along each axis.',
          bn: 'আইগেনভেক্টর নতুন অক্ষের দিক নির্দেশ করে এবং আইগেনমান সেই অক্ষে ধারণকৃত তথ্যের পরিমাণের পরিমাপ দেয়।',
        },
        latex: '\\Sigma \\mathbf{v} = \\lambda \\mathbf{v}',
      },
      {
        term: { en: 'Explained Variance Ratio', bn: 'ব্যাখ্যাকৃত বৈচিত্র্যের অনুপাত' },
        definition: {
          en: 'The proportion of total dataset variance captured by the k-th principal component.',
          bn: 'সংশ্লিষ্ট উপাদানটি সমগ্র উপাত্তের মোট বৈচিত্র্যের শতকরা কত অংশ ধারণ করে তার অনুপাত।',
        },
        latex: '\\text{EVR}_k = \\frac{\\lambda_k}{\\sum \\lambda_j}',
      },
    ],
    equations: [
      {
        label: { en: 'Eigendecomposition of Covariance Matrix', bn: 'কোভ্যারিয়েন্সের আইগেন-বিশ্লেষণ' },
        latex: '\\Sigma \\mathbf{v}_i = \\lambda_i \\mathbf{v}_i, \\quad \\text{where } \\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0',
        explanation: {
          en: 'Each eigenvector v_i is a principal component direction; its eigenvalue lambda_i represents its captured variance.',
          bn: 'প্রতিটি আইগেনভেক্টর v_i একটি প্রধান উপাদানের দিক এবং আইগেনমান lambda_i সেই অক্ষের ভেদাঙ্ক।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Explained Variance Ratio', bn: 'ব্যাখ্যাকৃত বৈচিত্র্য শতকরা হার নির্ণয়' },
        problem: {
          en: 'A 3-feature dataset produces eigenvalues: lambda1 = 6.0, lambda2 = 3.0, lambda3 = 1.0. What percentage of total variance is captured by the first two principal components (PC1 + PC2)?',
          bn: 'তিনটি চলকের আইগেনমান হলো: lambda1 = ৬.০, lambda2 = ৩.০, lambda3 = ১.০। প্রথম দুটি উপাদান (PC1 + PC2) একত্রে মোট তথ্যের শতকরা কত অংশ ধরে রাখে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Compute total variance (sum of eigenvalues): 6.0 + 3.0 + 1.0 = 10.0.',
              bn: 'মোট ভেদাঙ্ক (আইগেনমানের সমষ্টি): ৬.০ + ৩.০ + ১.০ = ১০.০।',
            },
            math: "\\sum \\lambda = 6.0 + 3.0 + 1.0 = 10.0",
          },
          {
            step: 2,
            text: {
              en: 'PC1 explained variance: 6.0 / 10.0 = 60%.',
              bn: 'PC1 এর অবদান: ৬.০ / ১০.০ = ৬০%।',
            },
            math: "\\text{EVR}_1 = \\frac{6.0}{10.0} = 60\\%",
          },
          {
            step: 3,
            text: {
              en: 'Cumulative variance of PC1 + PC2: (6.0 + 3.0) / 10.0 = 9.0 / 10.0 = 90%.',
              bn: 'PC1 ও PC2 এর যৌথ অবদান: (৬.০ + ৩.০) / ১০.০ = ৯.০ / ১০.০ = ৯০%।',
            },
            math: "\\text{Cumulative} = \\frac{9.0}{10.0} = 90\\%",
          },
        ],
        finalAnswer: {
          en: 'The first two principal components capture 90% of the entire information in the dataset while reducing dimensions by 33%.',
          bn: 'প্রথম দুটি উপাদান একত্রে সমগ্র উপাত্তের ৯০% তথ্য নিখুঁতভাবে ধারণ করে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Genomic Microarrays & Disease Subtypes', bn: 'জিনোমিক্স ও রোগ শনাক্তকরণ' },
        example: {
          en: 'Compressing expression levels across 25,000 genes into a 2D PCA scatterplot to instantly isolate cancer subtypes.',
          bn: '২৫,০০০ জিনের জটিল তথ্যকে দ্বিমাত্রিক পিসিএ গ্রাফে নামিয়ে এনে ক্যান্সারের উপধরন দ্রুত পৃথকীকরণ।',
        },
      },
    ],
    pythonCode: `from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import numpy as np

# Synthetic correlated 4-dimensional data
np.random.seed(42)
X = np.random.randn(100, 4)
X[:, 1] = X[:, 0] * 0.8 + np.random.randn(100) * 0.2  # correlated feature

# 1. Standardize features (crucial for PCA!)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# 2. Fit PCA with 2 components
pca = PCA(n_components=2)
X_projected = pca.fit_transform(X_scaled)

print("Explained variance ratio per component:", pca.explained_variance_ratio_)
print(f"Total variance retained: {pca.explained_variance_ratio_.sum() * 100:.2f}%")
print("Projected shape (compressed):", X_projected.shape)`,
    rCode: `data <- scale(iris[, 1:4])
pca_res <- prcomp(data)
summary(pca_res)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Running PCA without first standardizing (scaling) features to zero mean and unit variance.',
          bn: 'উপাত্তকে স্ট্যান্ডার্ডাইজ (Standardize) না করে সরাসরি পিসিএ পরিচালনা করা।',
        },
        correct: {
          en: 'Variables measured in large units (e.g. Income in dollars) will artificially dominate the first principal component over small units (e.g. Age in years) unless scaled.',
          bn: 'স্কেলিং না করলে বড় এককের চলকগুলো (যেমন বেতন) ছোট এককের চলককে (যেমন বয়স) অন্যায়ভাবে চেপে ধরে বিভ্রান্তিকর ফলাফল দেবে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'PCA identifies the perpendicular axes of maximum variance and projects data onto fewer dimensions with minimal information loss.',
        bn: 'পিসিএ সর্বাধিক বৈচিত্র্যের লম্ব অক্ষগুলো খুঁজে বের করে এবং সর্বনিম্ন তথ্য হারিয়ে মাত্রা সংকোচন করে।',
      },
      {
        en: 'Standardizing features beforehand is an absolute prerequisite for meaningful PCA decomposition.',
        bn: 'পিসিএ চালানোর আগে উপাত্তের পরিমাপ স্কেল সমান করা (Standardization) বাধ্যতামূলক।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q29-1',
        question: {
          en: 'What happens if you run PCA on unstandardized data where Feature A is measured in millimeters (1 to 5) and Feature B is measured in annual income (10,000 to 100,000)?',
          bn: 'ফিচার A যদি মিলিমিটারে (১-৫) এবং ফিচার B যদি বার্ষিক আয়ে (১০,০০০-১০০,০০০) থাকে এবং স্কেলিং না করে পিসিএ চালানো হয়, তবে কী ঘটবে?',
        },
        options: [
          { en: 'The algorithm crashes with a division by zero error', bn: 'অ্যালগরিদম ক্র্যাশ করবে' },
          { en: 'Feature B will falsely dominate the first principal component simply because of its numerical scale', bn: 'সংখ্যাগত স্কেলের কারণে ফিচার B অন্যায্যভাবে প্রথম উপাদানটির প্রায় ১০০% দখল করে ফেলবে' },
          { en: 'PCA automatically converts all features to percentages', bn: 'পিসিএ স্বয়ংক্রিয়ভাবে সব মানকে শতকরা হারে রূপান্তর করে' },
          { en: 'Feature A will become the only component', bn: 'ফিচার A একমাত্র উপাদানে পরিণত হবে' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Because variance is scale-dependent, the large variance of income (measured in tens of thousands) overwhelms the millimeters, misleading the PCA.',
          bn: 'যেহেতু ভেদাঙ্ক এককের আকারের ওপর সরাসরি নির্ভরশীল, তাই স্কেল না করলে আয়ের বিশালাকার ভেদাঙ্ক প্রথম অক্ষকে একচেটিয়া প্রভাবিত করবে।',
        },
      },
    ],
    relatedLessonIds: ['linear-algebra-data-science', 'exploratory-data-analysis', 'intro-to-machine-learning'],
  },

  // 30. SQL for Statistical Aggregation & Data Science
  {
    id: 'sql-data-science',
    categoryId: 'coding-labs',
    order: 30,
    title: {
      en: 'SQL for Statistical Aggregation & Data Science',
      bn: 'পরিসংখ্যান ও ডেটা সায়েন্সে এসকিউএল (SQL)',
    },
    shortDescription: {
      en: 'Write high-performance relational queries to compute group summaries, rolling averages, percentiles, and statistical distributions directly inside the database.',
      bn: 'সরাসরি ডাটাবেজের ভেতরে গড়, পরিমিত ব্যবধান, মুভিং অ্যাভারেজ ও পারসেন্টাইল নির্ণয়ে উচ্চক্ষমতাসম্পন্ন এসকিউএল কোয়েরি তৈরি করুন।',
    },
    definition: {
      en: 'SQL (Structured Query Language) is the domain-specific language used in programming and designed for managing data held in a relational database management system. In modern data science, analysts write statistical aggregations directly in SQL engines (PostgreSQL, BigQuery, Snowflake) before training models.',
      bn: 'এসকিউএল (স্ট্রাকচার্ড কোয়েরি ল্যাঙ্গুয়েজ) হলো রিলেশনাল ডাটাবেজ ব্যবস্থাপনার প্রধান ভাষা। আধুনিক ডেটা সায়েন্সে মডেল প্রশিক্ষণের পূর্বে ডাটাবেজের ভেতরেই যাবতীয় পরিসংখ্যানিক গড়, ফিল্টারিং ও গ্রুপ সামারি এসকিউএল দিয়ে সম্পন্ন করা হয়।',
    },
    whyItMatters: {
      en: 'Enterprise datasets reside in terabyte-scale data warehouses. You cannot load 500 million rows into a Python Pandas dataframe; computing statistical aggregations directly in SQL is essential for production data pipelines.',
      bn: 'প্রতিষ্ঠানের বিশাল আকারের উপাত্ত (টেরাবাইট স্কেল) সরাসরি পাইথন মেমরিতে নেওয়া অসম্ভব। এসকিউএল ব্যবহার করে ডাটাবেজের শক্তিশালী ইঞ্জিনে তাৎক্ষণিকভাবে পরিসংখ্যান তৈরি করা প্রতিটি ডেটা সায়েন্টিস্টের অন্যতম প্রধান দক্ষতা।',
    },
    level: 'intermediate',
    prerequisites: ['intro-to-statistics', 'mean-median-mode'],
    keyTerms: [
      {
        term: { en: 'Aggregate Functions', bn: 'অ্যাগ্রিগেট ফাংশন' },
        definition: {
          en: 'Functions that operate across multiple rows to return a single summarized metric: AVG(), SUM(), STDDEV(), COUNT().',
          bn: 'একাধিক সারির ওপর হিসাব করে একক পরিসংখ্যান প্রদানকারী ফাংশন: AVG(), SUM(), STDDEV(), COUNT()।',
        },
      },
      {
        term: { en: 'GROUP BY & HAVING', bn: 'গ্রুপ বাই ও হ্যাভিং' },
        definition: {
          en: 'GROUP BY segments rows into distinct cohorts; HAVING filters cohorts based on aggregated conditions.',
          bn: 'GROUP BY উপাত্তকে বিভিন্ন দলে ভাগ করে; HAVING সেই দলগুলোর সামগ্রিক বৈশিষ্ট্যের ভিত্তিতে ফিল্টার করে।',
        },
      },
      {
        term: { en: 'Window Functions (OVER)', bn: 'উইন্ডো ফাংশন (OVER)' },
        definition: {
          en: 'Performs calculations across a set of table rows related to the current row without collapsing them into a single row.',
          bn: 'সারিগুলোকে একত্রিত বা সংকুচিত না করে সংশ্লিষ্ট সারির প্রেক্ষাপটে চলমান গড় বা র‍্যাংক হিসাব করার পদ্ধতি।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Rolling 7-Day Moving Average in SQL', bn: 'এসকিউএলে ৭ দিনের চলমান গড়' },
        latex: '\\text{AVG}(amount) \\text{ OVER } (\\text{PARTITION BY } user\\_id \\text{ ORDER BY } date \\text{ ROWS BETWEEN 6 PRECEDING AND CURRENT ROW})',
        explanation: {
          en: 'Calculates the 7-day trailing average for each user chronologically.',
          bn: 'প্রতিটি ব্যবহারকারীর জন্য পূর্ববর্তী ৬ দিন ও আজকের দিনের মোট ৭ দিনের চলমান গড় হিসাব করে।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Conversion Rate and Variance per Category', bn: 'ক্যাটাগরিভিত্তিক বিক্রয় গড় ও পরিমিত ব্যবধান নির্ণয়' },
        problem: {
          en: 'Write a SQL query to compute the number of transactions, average revenue, and sample standard deviation of revenue for product categories with at least 100 sales.',
          bn: 'কমপক্ষে ১০০টি বিক্রয় সম্পন্ন হওয়া প্রতিটি ক্যাটাগরির জন্য মোট লেনদেন, গড় আয় এবং আয়ের পরিমিত ব্যবধান বের করার এসকিউএল কোড লিখুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Select category, COUNT(id), AVG(revenue), and STDDEV(revenue).',
              bn: 'category, COUNT(id), AVG(revenue), এবং STDDEV(revenue) নির্বাচন করুন।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Group by category, and apply HAVING COUNT(id) >= 100 to filter small groups.',
              bn: 'GROUP BY category প্রয়োগ করুন এবং HAVING COUNT(id) >= 100 শর্ত দিয়ে ছোট দল বাদ দিন।',
            },
          },
        ],
        finalAnswer: {
          en: 'SELECT category, COUNT(id) AS sales_count, ROUND(AVG(revenue), 2) AS mean_rev, ROUND(STDDEV(revenue), 2) AS sd_rev FROM transactions GROUP BY category HAVING COUNT(id) >= 100 ORDER BY mean_rev DESC;',
          bn: 'কোয়েরি: SELECT category, COUNT(id) AS sales_count, ROUND(AVG(revenue), 2) AS mean_rev, ROUND(STDDEV(revenue), 2) AS sd_rev FROM transactions GROUP BY category HAVING COUNT(id) >= 100 ORDER BY mean_rev DESC;',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'E-Commerce User Cohort Retention', bn: 'ই-কমার্স ও গ্রাহক ধারণ বিশ্লেষণ' },
        example: {
          en: 'Running SQL window functions to calculate day-30 customer retention rates across millions of mobile app signups.',
          bn: 'লক্ষ লক্ষ নতুন গ্রাহকের মধ্যে কত শতাংশ ৩০ দিন পর পুনরায় ফিরে আসে তা উইন্ডো ফাংশন দিয়ে পরিমাপ।',
        },
      },
    ],
    pythonCode: `import sqlite3
import pandas as pd
import numpy as np

# Connect to in-memory SQLite database
conn = sqlite3.connect(':memory:')

# Generate sample sales data
np.random.seed(42)
df = pd.DataFrame({
    'category': np.random.choice(['Electronics', 'Books', 'Clothing'], 200),
    'revenue': np.random.exponential(scale=50, size=200).round(2)
})
df.to_sql('orders', conn, index=False)

# SQL Query computing statistical metrics
query = """
SELECT 
    category,
    COUNT(*) as total_orders,
    ROUND(AVG(revenue), 2) as mean_revenue,
    ROUND(MIN(revenue), 2) as min_revenue,
    ROUND(MAX(revenue), 2) as max_revenue
FROM orders
GROUP BY category
ORDER BY mean_revenue DESC;
"""
result = pd.read_sql(query, conn)
print(result)`,
    rCode: `library(sqldf)
result <- sqldf("SELECT category, AVG(revenue) as avg_rev FROM df GROUP BY category")
print(result)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Using WHERE to filter on aggregated values like `WHERE AVG(revenue) > 100` instead of HAVING.',
          bn: 'অ্যাগ্রিগেট করা মানের ওপর ফিল্টার করতে HAVING-এর বদলে WHERE ব্যবহার করা (যেমন `WHERE AVG(revenue) > 100`)।',
        },
        correct: {
          en: '`WHERE` filters individual rows BEFORE grouping; `HAVING` filters aggregated cohorts AFTER grouping.',
          bn: '`WHERE` সারিগুলোকে দলভুক্ত করার আগেই ফিল্টার করে; আর `HAVING` দলভুক্ত করার পর সার্বিক মানের ওপর ফিল্টার করে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'SQL allows statistical aggregations to execute directly at scale inside high-performance database engines.',
        bn: 'এসকিউএল কোটি কোটি তথ্যের ওপর সরাসরি ডাটাবেজ সার্ভারেই দ্রুততম সময়ে পরিসংখ্যান প্রস্তুত করে।',
      },
      {
        en: 'Window functions calculate cumulative statistics and rankings without collapsing individual rows.',
        bn: 'উইন্ডো ফাংশন মূল উপাত্তের আকার নষ্ট না করেই চলমান গড় ও অন্যান্য সূচক হিসাব করে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q30-1',
        question: {
          en: 'Which SQL clause is strictly required when you want to filter groups based on the result of an aggregate function such as COUNT() or AVG()?',
          bn: 'COUNT() বা AVG() এর মতো অ্যাগ্রিগেট ফাংশনের ফলাফলের ওপর শর্ত আরোপ করতে কোন এসকিউএল ক্লজ বাধ্যতামূলক?',
        },
        options: [
          { en: 'WHERE', bn: 'WHERE' },
          { en: 'HAVING', bn: 'HAVING' },
          { en: 'ORDER BY', bn: 'ORDER BY' },
          { en: 'LIMIT', bn: 'LIMIT' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'HAVING is designed specifically to filter summary metrics produced by aggregate functions after GROUP BY has partitioned the dataset.',
          bn: 'HAVING ক্লজটি বিশেষভাবে গ্রুপ বাই এর পর অ্যাগ্রিগেট করা মান ফিল্টার করার জন্যই তৈরি।',
        },
      },
    ],
    relatedLessonIds: ['python-statistical-analysis', 'r-statistical-analysis', 'exploratory-data-analysis'],
  },
];
