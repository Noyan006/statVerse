import { CategoryInfo } from '../types/index.ts';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'math-foundations',
    title: {
      en: 'Mathematical Foundations',
      bn: 'গাণিতিক ভিত্তি',
    },
    subtitle: {
      en: 'Calculus, Linear Algebra & Optimization',
      bn: 'ক্যালকুলাস, লিনিয়ার অ্যালজেব্রা ও অপ্টিমাইজেশন',
    },
    description: {
      en: 'Essential mathematical building blocks: functions, derivatives, integrals, vectors, and matrix algebra for data science.',
      bn: 'ডেটা সায়েন্সের ভিত্তিপ্রস্তর: ফাংশন, অন্তরীকরণ, সমাকলন, ভেক্টর এবং ম্যাট্রিক্স বীজগণিত।',
    },
    iconName: 'Binary',
    accentColor: 'indigo',
    totalLessons: 13,
  },
  {
    id: 'stats-fundamentals',
    title: {
      en: 'Fundamentals of Statistics',
      bn: 'পরিসংখ্যানের মৌলিক বিষয়',
    },
    subtitle: {
      en: 'Data types, Central Tendency & Dispersion',
      bn: 'উপাত্তের ধরন, কেন্দ্রীয় প্রবণতা ও বিস্তার পরিমাপ',
    },
    description: {
      en: 'Understand populations, samples, measurement scales, mean, median, mode, variance, skewness, and data representation.',
      bn: 'সমগ্রক, নমুনা, পরিমাপের স্কেল, গড়, মধ্যমা, প্রচুরক, ভেদাঙ্ক, প্রতিসাম্য ও উপাত্ত উপস্থাপন পদ্ধতি।',
    },
    iconName: 'BarChart2',
    accentColor: 'blue',
    totalLessons: 15,
  },
  {
    id: 'probability-theory',
    title: {
      en: 'Probability Theory',
      bn: 'সম্ভাব্যতা তত্ত্ব',
    },
    subtitle: {
      en: 'Sample space, Bayes Theorem & Random Variables',
      bn: 'নমুনা ক্ষেত্র, বেইজের উপপাদ্য ও দৈব চলক',
    },
    description: {
      en: 'Master random experiments, conditional probability, independence, Bayes theorem, expected values, and joint distributions.',
      bn: 'দৈব পরীক্ষা, শর্তাধীন সম্ভাব্যতা, স্বাধীন ঘটনা, বেইজের উপপাদ্য, প্রত্যাশিত মান ও যুগ্ম সম্ভাব্যতা।',
    },
    iconName: 'Dice5',
    accentColor: 'emerald',
    totalLessons: 16,
  },
  {
    id: 'prob-distributions',
    title: {
      en: 'Probability Distributions',
      bn: 'সম্ভাব্যতা বণ্টনসমূহ',
    },
    subtitle: {
      en: 'Normal, Binomial, Poisson, t & F Distributions',
      bn: 'স্বাভাবিক, দ্বিপদী, পয়সোঁ, টি এবং এফ বণ্টন',
    },
    description: {
      en: 'Discrete and continuous probability functions, their parameters, real-world behaviors, and mathematical properties.',
      bn: 'বিচ্ছিন্ন ও অবিচ্ছিন্ন সম্ভাব্যতা অপেক্ষক, পরামিতি, বাস্তব আচরণ এবং গাণিতিক বৈশিষ্ট্যসমূহ।',
    },
    iconName: 'Activity',
    accentColor: 'cyan',
    totalLessons: 14,
  },
  {
    id: 'inference',
    title: {
      en: 'Statistical Inference',
      bn: 'পরিসংখ্যানিক অনুমান ও সিদ্ধান্ত',
    },
    subtitle: {
      en: 'Estimation, Hypothesis Testing, p-values & CI',
      bn: 'আকলন, প্রকল্প যাচাই, পি-মান ও আস্থা ব্যবধি',
    },
    description: {
      en: 'Learn point estimation, maximum likelihood, confidence intervals, null & alternative hypotheses, z-test, t-test, and ANOVA.',
      bn: 'বিন্দু আকলন, গুরুতম সম্ভাবনা পদ্ধতি, আস্থা ব্যবধি, নাস্তিক ও বিকল্প প্রকল্প, জেড-টেস্ট, টি-টেস্ট ও পি-মান।',
    },
    iconName: 'Compass',
    accentColor: 'violet',
    totalLessons: 18,
  },
  {
    id: 'regression',
    title: {
      en: 'Correlation & Regression',
      bn: 'সহসংশ্লেষ ও নির্ভরণ',
    },
    subtitle: {
      en: 'Pearson r, OLS Regression, Assumptions & Diagnostics',
      bn: 'পিয়ারসন r, OLS নির্ভরণ, শর্তাবলী ও মডেল বিশ্লেষণ',
    },
    description: {
      en: 'Quantify relationships between variables, build ordinary least squares models, evaluate residuals, and diagnose multicollinearity.',
      bn: 'চলকসমূহের পারস্পরিক সম্পর্ক নিরূপণ, সরল ও বহুধা রৈখিক নির্ভরণ, রেসিডুয়াল বিশ্লেষণ ও মাল্টিকোলিনিয়ারিটি।',
    },
    iconName: 'TrendingUp',
    accentColor: 'amber',
    totalLessons: 15,
  },
  {
    id: 'advanced-stats',
    title: {
      en: 'Advanced Statistics',
      bn: 'উন্নত পরিসংখ্যান',
    },
    subtitle: {
      en: 'ANOVA, Time Series, Nonparametric & PCA',
      bn: 'অ্যানোভা, কালীন সারি, অপ্যারামেট্রিক ও পিসিএ',
    },
    description: {
      en: 'Experimental design, ANOVA, Bayesian statistics, multivariate analysis, survival analysis, and time-series decomposition.',
      bn: 'পরীক্ষণ নকশা, ভ্যারিয়েন্স বিশ্লেষণ (ANOVA), বায়েসিয়ান পরিসংখ্যান, বহুমাত্রিক বিশ্লেষণ ও সময় ধারা।',
    },
    iconName: 'Cpu',
    accentColor: 'purple',
    totalLessons: 18,
  },
  {
    id: 'data-science',
    title: {
      en: 'Data Science & Machine Learning',
      bn: 'ডেটা সায়েন্স ও মেশিন লার্নিং',
    },
    subtitle: {
      en: 'EDA, Supervised & Unsupervised Algorithms',
      bn: 'ই-ডি-এ, সুপারভাইজড ও আনসুপারভাইজড অ্যালগরিদম',
    },
    description: {
      en: 'Data wrangling, feature engineering, classification, decision trees, random forests, evaluation metrics, and model tuning.',
      bn: 'উপাত্ত প্রক্রিয়াকরণ, এক্সপ্লোরেটরি ডেটা অ্যানালাইসিস, ক্লাসিফিকেশন, ডিসিশন ট্রি, র্যান্ডম ফরেস্ট ও মূল্যায়ন।',
    },
    iconName: 'Layers',
    accentColor: 'rose',
    totalLessons: 17,
  },
  {
    id: 'coding-labs',
    title: {
      en: 'Practical Coding Labs',
      bn: 'ব্যবহারিক কোডিং ল্যাব',
    },
    subtitle: {
      en: 'Python, R, SQL & Excel for Statistics',
      bn: 'পরিসংখ্যানের জন্য পাইথন, আর, এসকিউএল ও এক্সেল',
    },
    description: {
      en: 'Hands-on coding exercises with executable code, expected outputs, datasets, and step-by-step programming workflows.',
      bn: 'বাস্তব কোডিং অনুশীলন, প্রত্যাশিত আউটপুট, নমুনা ডেটাসেট এবং ধাপে ধাপে ডেটা অ্যানালাইসিস কোড।',
    },
    iconName: 'Terminal',
    accentColor: 'teal',
    totalLessons: 12,
  },
];
