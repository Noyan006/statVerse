import { Lesson } from '../types/index.ts';
import { MORE_LESSONS } from './moreLessons.ts';

const INITIAL_LESSONS: Lesson[] = [
  // 1. Introduction to Statistics
  {
    id: 'intro-to-statistics',
    categoryId: 'stats-fundamentals',
    order: 1,
    title: {
      en: 'Introduction to Statistics',
      bn: 'পরিসংখ্যান পরিচিতি ও গুরুত্ব',
    },
    shortDescription: {
      en: 'Discover what statistics is, why it matters, and how data-driven decisions power modern society and data science.',
      bn: 'পরিসংখ্যান কী, কেন এটি অপরিহার্য, এবং কীভাবে উপাত্ত-ভিত্তিক সিদ্ধান্ত বর্তমান বিশ্ব ও ডেটা সায়েন্স পরিচালনা করছে।',
    },
    definition: {
      en: 'Statistics is the scientific discipline that deals with the collection, organization, analysis, interpretation, and presentation of data to make informed decisions under uncertainty.',
      bn: 'পরিসংখ্যান হলো বিজ্ঞানের এমন একটি শাখা যা অনিশ্চয়তার মধ্যে সঠিক সিদ্ধান্ত গ্রহণের লক্ষ্যে উপাত্ত সংগ্রহ, বিন্যাস, প্রক্রিয়াকরণ, বিশ্লেষণ ও ব্যাখ্যার সাথে জড়িত।',
    },
    whyItMatters: {
      en: 'Without statistics, data is merely meaningless noise. Statistics provides the mathematical foundation for medical clinical trials, economic forecasting, artificial intelligence, and everyday scientific discoveries.',
      bn: 'পরিসংখ্যান ছাড়া যেকোনো উপাত্ত বা ডেটা কেবলই অর্থহীন সংখ্যামাত্র। চিকিৎসা বিজ্ঞানে ক্লিনিক্যাল ট্রায়াল, অর্থনৈতিক পূর্বাভাস, কৃত্রিম বুদ্ধিমত্তা এবং বৈজ্ঞানিক গবেষণায় সঠিক সিদ্ধান্ত নিতে পরিসংখ্যানই মূল চালিকাশক্তি।',
    },
    level: 'beginner',
    prerequisites: [],
    keyTerms: [
      {
        term: { en: 'Descriptive Statistics', bn: 'বর্ণনামূলক পরিসংখ্যান' },
        definition: {
          en: 'Methods for summarizing, organizing, and describing features of a specific dataset using tables, graphs, and summary metrics.',
          bn: 'যে পদ্ধতিতে কোনো নির্দিষ্ট উপাত্তের বৈশিষ্ট্যগুলোকে সারণি, লেখচিত্র ও সংক্ষিপ্ত সাংখ্যিক মানের মাধ্যমে উপস্থাপন করা হয়।',
        },
      },
      {
        term: { en: 'Inferential Statistics', bn: 'অনুমানমূলক বা সংশ্লেষণমূলক পরিসংখ্যান' },
        definition: {
          en: 'Techniques that use a smaller sample of data to draw generalizations, make predictions, and test hypotheses about an entire population.',
          bn: 'যে পদ্ধতিতে নমুনার উপাত্ত ব্যবহার করে সমগ্র সমগ্রক সম্পর্কে সিদ্ধান্ত গ্রহণ, ভবিষ্যদ্বাণী এবং প্রকল্প যাচাই করা হয়।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'General Data Notation', bn: 'সাধারণ উপাত্ত প্রতীকায়ন' },
        latex: 'X = \\{x_1, x_2, x_3, \\dots, x_n\\}',
        explanation: {
          en: 'A dataset $X$ containing $n$ individual observations, where $x_i$ represents the $i$-th measurement.',
          bn: '$n$ সংখ্যক পর্যবেক্ষণ সম্বলিত একটি উপাত্ত সেট $X$, যেখানে $x_i$ হলো $i$-তম পর্যবেক্ষণ।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Identifying Statistical Branches', bn: 'পরিসংখ্যানের শাখা চিহ্নিতকরণ' },
        problem: {
          en: 'A hospital calculates the average recovery time of 100 patient records (7.4 days) and uses it to infer the expected recovery time for all future patients in the country. Identify the descriptive and inferential components.',
          bn: 'একটি হাসপাতাল ১০০ জন রোগীর গড় সুস্থতার সময় ৭.৪ দিন হিসাব করে এবং এর ভিত্তিতে সারা দেশের সব ভবিষ্যৎ রোগীর সুস্থতার সম্ভাব্য সময় অনুমান করে। এখানে কোন অংশটি বর্ণনামূলক এবং কোনটি অনুমানমূলক?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Calculating the exact average (7.4 days) of the observed 100 patients is Descriptive Statistics.',
              bn: 'পর্যবেক্ষণকৃত ১০০ জন রোগীর সঠিক গড় (৭.৪ দিন) হিসাব করা হলো বর্ণনামূলক পরিসংখ্যান।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Extrapolating this sample finding to conclude something about all future national patients with a confidence margin is Inferential Statistics.',
              bn: 'এই ১০০ জনের ফলাফল থেকে সমগ্র দেশের ভবিষ্যৎ সকল রোগীর জন্য সাধারণ সিদ্ধান্ত টানা হলো অনুমানমূলক পরিসংখ্যান।',
            },
          },
        ],
        finalAnswer: {
          en: 'Summary metric of 7.4 days = Descriptive; Generalizing to all future countrywide patients = Inferential.',
          bn: '৭.৪ দিনের গড় হিসাব = বর্ণনামূলক; দেশের সকল ভবিষ্যৎ রোগীর জন্য সিদ্ধান্ত গ্রহণ = অনুমানমূলক।',
        },
      },
      {
        title: { en: 'Determining Variable Characteristics', bn: 'চলকের বৈশিষ্ট্য নির্ধারণ' },
        problem: {
          en: 'In an educational study, researchers record student exam scores (0 to 100), student gender, and study hours per week. Classify which branches of statistics would be used to report overall grades versus predicting future pass rates.',
          bn: 'একটি শিক্ষামূলক গবেষণায় শিক্ষার্থীদের পরীক্ষার নম্বর (০-১০০), লিঙ্গ এবং সাপ্তাহিক পড়ার সময় নথিভুক্ত করা হয়। সামগ্রিক ফলাফল প্রকাশ বনাম ভবিষ্যৎ পাসের হার অনুমানে পরিসংখ্যানের কোন শাখা ব্যবহৃত হবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Displaying mean score, score distributions, and frequency histograms represents descriptive analysis.',
              bn: 'গড় নম্বর, নম্বরের বণ্টন ও হিস্টোগ্রাম প্রকাশ করা হলো বর্ণনামূলক বিশ্লেষণ।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Using study hours to model and predict the probability of future students passing represents statistical inference.',
              bn: 'পড়ার সময় দিয়ে মডেল তৈরি করে ভবিষ্যৎ শিক্ষার্থীদের পাসের সম্ভাব্যতা নির্ণয় করা হলো পরিসংখ্যানিক অনুমান।',
            },
          },
        ],
        finalAnswer: {
          en: 'Exam score summaries = Descriptive; Predictive pass-rate modeling = Inferential.',
          bn: 'পরীক্ষার নম্বরের সংক্ষিপ্ত সারণি = বর্ণনামূলক; ভবিষ্যৎ পাসের সম্ভাবনা পূর্বাভাস = অনুমানমূলক।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Public Health & Medicine', bn: 'জনস্বাস্থ্য ও চিকিৎসা বিজ্ঞান' },
        example: {
          en: 'Evaluating whether a newly developed vaccine reduces hospitalizations compared to a placebo group.',
          bn: 'নতুন কোনো টিকা প্লাসিবো গ্রুপের তুলনায় হাসপাতালে ভর্তির হার কার্যকরভাবে হ্রাস করে কি না তা নিরূপণ।',
        },
      },
      {
        field: { en: 'Machine Learning & Tech', bn: 'মেশিন লার্নিং ও প্রযুক্তি' },
        example: {
          en: 'Training recommender systems on streaming platforms by analyzing millions of user interaction frequencies.',
          bn: 'লক্ষ লক্ষ ব্যবহারকারীর পছন্দ ও আচরণের পরিসংখ্যান বিশ্লেষণ করে ওটিটি প্ল্যাটফর্মে কন্টেন্ট সুপারিশ করা।',
        },
      },
    ],
    pythonCode: `# Basic descriptive summary with Python
import numpy as np
import pandas as pd

# Sample exam scores
scores = np.array([78, 85, 92, 65, 88, 72, 95, 81, 79, 90])

print(f"Number of observations (n): {len(scores)}")
print(f"Mean Score: {np.mean(scores):.2f}")
print(f"Standard Deviation: {np.std(scores, ddof=1):.2f}")
print(f"Min: {np.min(scores)}, Max: {np.max(scores)}")`,
    rCode: `# Basic descriptive summary with R
scores <- c(78, 85, 92, 65, 88, 72, 95, 81, 79, 90)

cat("Number of observations (n):", length(scores), "\\n")
cat("Mean Score:", mean(scores), "\\n")
cat("Standard Deviation:", sd(scores), "\\n")
summary(scores)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming statistics can prove absolute certainty in any real-world phenomenon.',
          bn: 'মনে করা যে পরিসংখ্যান যেকোনো বাস্তব ঘটনায় শতভাগ ধ্রুব সত্য বা নিশ্চিত প্রমাণ দিতে পারে।',
        },
        correct: {
          en: 'Statistics quantifies uncertainty and likelihood; it provides probabilistic confidence rather than absolute mathematical proof.',
          bn: 'পরিসংখ্যান মূলত অনিশ্চয়তা পরিমাপ করে; এটি শতভাগ ধ্রুব প্রমাণের পরিবর্তে সম্ভাব্যতাভিত্তিক আস্থা ও সিদ্ধান্ত নির্দেশ করে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Descriptive statistics summarizes the data you have; inferential statistics draws conclusions about the wider population you do not have.',
        bn: 'বর্ণনামূলক পরিসংখ্যান আপনার হাতের উপাত্তকে সংক্ষেপ করে; অনুমানমূলক পরিসংখ্যান বৃহত্তর সমগ্রক সম্পর্কে সিদ্ধান্ত গ্রহণ করে।',
      },
      {
        en: 'Statistics is the foundational language of artificial intelligence, experimental science, and data engineering.',
        bn: 'পরিসংখ্যান হলো কৃত্রিম বুদ্ধিমত্তা, গবেষণা বিজ্ঞান এবং ডেটা ইঞ্জিনিয়ারিংয়ের মৌলিক ভিত্তি।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q1-1',
        question: {
          en: 'A researcher collects data from 200 voters in a city and calculates that 54% support a new transit bill. Then they conclude that between 50% and 58% of all 500,000 citizens in the city support it. What type of statistics is this conclusion?',
          bn: 'একজন গবেষক একটি শহরের ২০০ জন ভোটারের মধ্যে জরিপ চালিয়ে দেখেন ৫৪% ভোটার নতুন ট্রানজিট বিল সমর্থন করেন। এরপর তিনি সিদ্ধান্তে আসেন যে পুরো শহরের ৫,০০,০০০ নাগরিকের মধ্যে ৫০% থেকে ৫৮% এটি সমর্থন করবেন। এই সিদ্ধান্তটি কোন ধরনের পরিসংখ্যান?',
        },
        options: [
          { en: 'Descriptive Statistics only', bn: 'কেবলমাত্র বর্ণনামূলক পরিসংখ্যান' },
          { en: 'Inferential Statistics', bn: 'অনুমানমূলক বা সংশ্লেষণমূলক পরিসংখ্যান' },
          { en: 'Pure Mathematics', bn: 'বিশুদ্ধ গণিত' },
          { en: 'Measurement Error', bn: 'পরিমাপজনিত ত্রুটি' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Inferential statistics takes a sample statistic (54% from 200 voters) and projects confidence intervals for the broader population (500,000 citizens).',
          bn: 'নমুনার তথ্য (২০০ জনের ৫৪%) ব্যবহার করে সম্পূর্ণ সমগ্রকের (৫,০০,০০০ মানুষ) জন্য সিদ্ধান্ত গ্রহণ করা হলো অনুমানমূলক পরিসংখ্যান।',
        },
      },
    ],
    relatedLessonIds: ['population-vs-sample', 'data-types-and-scales', 'mean-median-mode'],
  },

  // 2. Population vs Sample
  {
    id: 'population-vs-sample',
    categoryId: 'stats-fundamentals',
    order: 2,
    title: {
      en: 'Population vs Sample',
      bn: 'সমগ্রক বনাম নমুনা (Population vs Sample)',
    },
    shortDescription: {
      en: 'Understand the critical difference between the complete target group (population) and the subset studied (sample), parameters vs statistics.',
      bn: 'সমগ্র লক্ষ্যভিত্তিক গোষ্ঠী (সমগ্রক) এবং নির্বাচিত অংশ (নমুনা)-এর পার্থক্য, প্যারামিটার বনাম পরিসংখ্যানের ধারণা।',
    },
    definition: {
      en: 'A population is the complete collection of all elements, individuals, or measurements of interest. A sample is a representative subset selected from that population to conduct research.',
      bn: 'সমগ্রক (Population) হলো নির্দিষ্ট গবেষণার আওতাভুক্ত সকল উপাদান বা ব্যক্তির সামগ্রিক সেট। নমুনা (Sample) হলো সমগ্রক থেকে বৈজ্ঞানিক নিয়মে নির্বাচিত একটি প্রতিনিধিত্বমূলক উপসেট।',
    },
    whyItMatters: {
      en: 'Studying every single item in a population is usually impossible due to time, cost, or physical constraints. Proper sampling allows us to learn about millions of units by inspecting only a few hundred.',
      bn: 'সময়, অর্থ ও সম্পদের সীমাবদ্ধতার কারণে একটি সমগ্রকের প্রতিটি একক পরিমাপ করা প্রায় অসম্ভব। বিজ্ঞানসম্মত নমুনায়নের মাধ্যমে মাত্র কয়েকশ উপাদান পরীক্ষা করে লক্ষ লক্ষ উপাদানের সঠিক স্বভাব জানা সম্ভব।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'Parameter', bn: 'পরামিতি (Parameter)' },
        definition: {
          en: 'A numerical characteristic that describes an entire population (typically denoted by Greek letters like $\\mu$ and $\\sigma$).',
          bn: 'সমগ্রকের কোনো সাংখ্যিক বৈশিষ্ট্য (সাধারণত গ্রিক অক্ষর যেমন $\\mu$ এবং $\\sigma$ দ্বারা চিহ্নিত করা হয়)।',
        },
      },
      {
        term: { en: 'Statistic', bn: 'নমুনাজ মান বা পরিসংখ্যান (Statistic)' },
        definition: {
          en: 'A numerical measure computed from sample data to estimate an unknown population parameter (e.g., $\\bar{x}$, $s$).',
          bn: 'নমুনার উপাত্ত থেকে গণনাকৃত মান যা সমগ্রকের অজানা পরামিতি অনুমান করতে ব্যবহৃত হয় (যেমন $\\bar{x}$, $s$)।',
        },
      },
      {
        term: { en: 'Sampling Bias', bn: 'নমুনায়ন পক্ষপাত (Sampling Bias)' },
        definition: {
          en: 'A systematic tendency for some members of the population to be less likely to be included than others, leading to inaccurate results.',
          bn: 'এমন কোনো প্রণালীবদ্ধ ত্রুটি যার ফলে সমগ্রকের কিছু নির্দিষ্ট উপাদান অন্যদের চেয়ে অন্তর্ভুক্ত হওয়ার সম্ভাবনা কম থাকে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Population Mean vs Sample Mean', bn: 'সমগ্রক গড় বনাম নমুনা গড়' },
        latex: '\\mu = \\frac{1}{N}\\sum_{i=1}^{N} X_i \\quad \\text{vs} \\quad \\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i',
        explanation: {
          en: '$\\mu$ uses population size $N$; sample mean $\\bar{x}$ uses sample size $n$.',
          bn: 'সমগ্রকের গড় $\\mu$ সমগ্রকের আকার $N$ ব্যবহার করে; নমুনা গড় $\\bar{x}$ নমুনার আকার $n$ ব্যবহার করে।',
        },
      },
      {
        label: { en: 'Degrees of Freedom Correction for Variance', bn: 'নমুনা ভেদাঙ্কের স্বাধীনতা মাত্রা সংশোধন' },
        latex: '\\sigma^2 = \\frac{\\sum_{i=1}^{N}(X_i - \\mu)^2}{N} \\quad \\text{vs} \\quad s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}',
        explanation: {
          en: 'Division by $n-1$ in sample variance Bessel\'s correction yields an unbiased estimator of $\\sigma^2$.',
          bn: 'নমুনার ক্ষেত্রে $n-1$ দিয়ে ভাগ করাকে বেসেলের সংশোধন বলা হয়, যা $\\sigma^2$-এর একটি নিরপেক্ষ আকলক দেয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Distinguishing Parameter vs Statistic', bn: 'পরামিতি বনাম পরিসংখ্যান পার্থক্যকরণ' },
        problem: {
          en: 'A company has 5,000 employees. The HR director pulls the full database and computes the exact average salary to be $62,400. Simultaneously, an intern interviews 50 employees and finds their average salary is $59,800. Identify the parameter and statistic.',
          bn: 'একটি প্রতিষ্ঠানে ৫,০০০ কর্মচারী আছেন। এইচআর ডিরেক্টর ডেটাবেস থেকে সব কর্মচারীর সঠিক গড় বেতন হিসাব করে পেলেন ৬২,৪০০ ডলার। একই সময়ে একজন ইন্টার্ন ৫০ জন কর্মীর সাক্ষাৎকার নিয়ে গড় বেতন পেলেন ৫৯,৮০০ ডলার। এখানে কোনটি পরামিতি এবং কোনটি পরিসংখ্যান?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'The $62,400 figure comes from all $N = 5,000$ employees in the entire population. Hence, it is a population parameter: $\\mu = 62,400$.',
              bn: '৬২,৪০০ ডলার মানটি প্রতিষ্ঠানের সকল $N = ৫,০০০$ কর্মীর উপাত্ত থেকে নেওয়া হয়েছে, তাই এটি সমগ্রক পরামিতি: $\\mu = ৬২,৪০০$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'The $59,800 figure comes from a subset of $n = 50$ employees. Hence, it is a sample statistic: $\\bar{x} = 59,800$.',
              bn: '৫৯,৮০০ ডলার মানটি মাত্র $n = ৫০$ জন কর্মীর উপসেট থেকে পাওয়া, তাই এটি নমুনাজ মান বা পরিসংখ্যান: $\\bar{x} = ৫৯,৮০০$।',
            },
          },
        ],
        finalAnswer: {
          en: '$\\mu = \\$62,400$ is the Parameter; $\\bar{x} = \\$59,800$ is the Statistic.',
          bn: '$\\mu = \\$৬২,৪০০$ হলো প্যারামিটার; $\\bar{x} = \\$৫৯,৮০০$ হলো স্ট্যাটিস্টিক।',
        },
      },
      {
        title: { en: 'Calculating Unbiased Sample Variance', bn: 'নিরপেক্ষ নমুনা ভেদাঙ্ক গণনা' },
        problem: {
          en: 'A quality control engineer selects a sample of 4 items with weights: 10g, 12g, 14g, 16g. Calculate the sample mean $\\bar{x}$ and sample variance $s^2$.',
          bn: 'একজন কোয়ালিটি কন্ট্রোল ইঞ্জিনিয়ার ৪টি পণ্যের একটি নমুনা নেন যার ওজন: ১০ গ্রাম, ১২ গ্রাম, ১৪ গ্রাম, ১৬ গ্রাম। নমুনা গড় $\\bar{x}$ এবং নমুনা ভেদাঙ্ক $s^2$ নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Calculate the sample mean: $\\bar{x} = \\frac{10 + 12 + 14 + 16}{4} = \\frac{52}{4} = 13$.',
              bn: 'নমুনা গড় বের করি: $\\bar{x} = \\frac{১০ + ১২ + ১৪ + ১৬}{৪} = \\frac{৫২}{৪} = ১৩$ গ্রাম।',
            },
            math: '\\bar{x} = 13',
          },
          {
            step: 2,
            text: {
              en: 'Compute squared deviations from mean: $(10-13)^2 = 9$, $(12-13)^2 = 1$, $(14-13)^2 = 1$, $(16-13)^2 = 9$. Sum = $9+1+1+9 = 20$.',
              bn: 'গড় থেকে বিচ্যুতির বর্গ বের করি: $(১০-১৩)^২ = ৯$, $(১২-১৩)^২ = ১$, $(১৪-১৩)^২ = ১$, $(১৬-১৩)^২ = ৯$। সমষ্টি = ২০।',
            },
            math: '\\sum (x_i - \\bar{x})^2 = 20',
          },
          {
            step: 3,
            text: {
              en: 'Divide by $n - 1 = 4 - 1 = 3$: $s^2 = \\frac{20}{3} \\approx 6.6667$.',
              bn: '$n - ১ = ৪ - ১ = ৩$ দিয়ে ভাগ করি: $s^2 = \\frac{২০}{৩} \\approx ৬.৬৬৬৭$।',
            },
            math: 's^2 = \\frac{20}{3} = 6.6667',
          },
        ],
        finalAnswer: {
          en: 'Sample mean $\\bar{x} = 13$, Sample variance $s^2 = 6.67$.',
          bn: 'নমুনা গড় $\\bar{x} = ১৩$, নমুনা ভেদাঙ্ক $s^2 = ৬.৬৭$।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Election Polling', bn: 'নির্বাচনী জনমত জরিপ' },
        example: {
          en: 'Surveying 1,500 registered voters to forecast the voting behavior of 160 million citizens.',
          bn: '১৬ কোটি ভোটারের মানসিকতা বুঝতে মাত্র ১,৫০০ জন নিবন্ধিত ভোটারের ওপর বিজ্ঞানসম্মত জরিপ চালানো।',
        },
      },
      {
        field: { en: 'Industrial Manufacturing', bn: 'শিল্প উৎপাদন ও মান নিয়ন্ত্রণ' },
        example: {
          en: 'Testing 20 microchips from every production batch of 100,000 to verify tensile strength.',
          bn: 'প্রতি ১,০০,০০০ মাইক্রোচিপ ব্যাচ থেকে দৈবচয়ন পদ্ধতিতে ২০টি চিপের কার্যক্ষমতা যাচাই করা।',
        },
      },
    ],
    pythonCode: `import numpy as np

# Population of 10,000 citizens heights (cm)
np.random.seed(42)
population = np.random.normal(loc=170, scale=8, size=10000)

# True Population Parameter (mu)
mu = np.mean(population)
sigma = np.std(population)

# Take a random sample of size n = 50
sample = np.random.choice(population, size=50, replace=False)
x_bar = np.mean(sample)
s = np.std(sample, ddof=1) # ddof=1 uses n-1

print(f"Population Mean (mu): {mu:.2f}")
print(f"Sample Mean (x_bar): {x_bar:.2f}")
print(f"Estimation Error: {abs(mu - x_bar):.2f}")`,
    rCode: `set.seed(42)
# Population of 10,000 citizens
population <- rnorm(10000, mean = 170, sd = 8)

# True parameter
mu <- mean(population)

# Sample of size 50
sample_data <- sample(population, size = 50)
x_bar <- mean(sample_data)

cat("Population Mean (mu):", round(mu, 2), "\\n")
cat("Sample Mean (x_bar):", round(x_bar, 2), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Using $n$ instead of $n-1$ when calculating sample variance.',
          bn: 'নমুনা ভেদাঙ্ক নির্ণয়ের সময় $n-১$ এর বদলে $n$ ব্যবহার করা।',
        },
        correct: {
          en: 'Dividing by $n$ underestimates true variance. Bessel\'s correction ($n-1$) accounts for estimating $\\mu$ with $\\bar{x}$.',
          bn: '$n$ দিয়ে ভাগ করলে প্রকৃত ভেদাঙ্ক অবমূল্যায়িত হয়। বেসেলের সংশোধন ($n-১$) ব্যবহারের ফলে মানটি পক্ষপাতহীন হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'A parameter belongs to a population (fixed, usually unknown); a statistic belongs to a sample (random variable, known).',
        bn: 'পরামিতি হলো সমগ্রকের বৈশিষ্ট্য (ধ্রুবক কিন্তু সচরাচর অজানা); পরিসংখ্যান হলো নমুনার বৈশিষ্ট্য (গণনাযোগ্য ও জানা)।',
      },
      {
        en: 'Random sampling prevents selection bias and allows rigorous mathematical inference.',
        bn: 'দৈব নমুনায়ন বা র‍্যান্ডম স্যাম্পলিং নির্বাচন পক্ষপাত দূর করে এবং নির্ভরযোগ্য সিদ্ধান্ত গ্রহণে সাহায্য করে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q2-1',
        question: {
          en: 'Why is $n-1$ used in the denominator of the sample variance $s^2$ instead of $n$?',
          bn: 'নমুনা ভেদাঙ্ক $s^2$ গণনার সময় হরে $n$ এর পরিবর্তে $n-১$ ব্যবহার করা হয় কেন?',
        },
        options: [
          { en: 'Because one observation is always discarded as an outlier', bn: 'কারণ একটি পর্যবেক্ষণ সবসময় অস্বাভাবিক মান হিসেবে বাদ দেওয়া হয়' },
          { en: 'To make the sample variance an unbiased estimator of population variance', bn: 'নমুনা ভেদাঙ্ককে সমগ্রক ভেদাঙ্কের একটি পক্ষপাতহীন (unbiased) আকলক বানানোর জন্য' },
          { en: 'To make calculations faster by reducing the denominator', bn: 'গণনা দ্রুত করার স্বার্থে হর ছোট করার জন্য' },
          { en: 'Because the sample mean is always smaller than population mean', bn: 'কারণ নমুনা গড় সবসময় সমগ্রক গড়ের চেয়ে ছোট হয়' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Bessel\'s correction divides by $n-1$ degrees of freedom to eliminate negative bias when estimating population variance from sample deviations.',
          bn: 'নমুনার গড় ব্যবহারের ফলে যে পক্ষপাত তৈরি হয় তা দূর করে সঠিক সমগ্রক ভেদাঙ্ক প্রাক্কলন করতে $n-১$ ডিগ্রি অব ফ্রিডম ব্যবহার করা হয়।',
        },
      },
    ],
    relatedLessonIds: ['intro-to-statistics', 'data-types-and-scales', 'variance-and-std-dev'],
  },

  // 3. Types of Data and Measurement Scales
  {
    id: 'data-types-and-scales',
    categoryId: 'stats-fundamentals',
    order: 3,
    title: {
      en: 'Types of Data & Measurement Scales',
      bn: 'উপাত্তের প্রকারভেদ ও পরিমাপের স্কেল',
    },
    shortDescription: {
      en: 'Master qualitative vs quantitative variables, discrete vs continuous data, and Nominal, Ordinal, Interval, and Ratio (NOIR) scales.',
      bn: 'গুণবাচক বনাম পরিমাণবাচক চলক, বিচ্ছিন্ন বনাম অবিচ্ছিন্ন উপাত্ত এবং নোইর (NOIR) পরিমাপ স্কেলের পুঙ্খানুপুঙ্খ ব্যাখ্যা।',
    },
    definition: {
      en: 'Data types categorize the mathematical nature of observations. Measurement scales (Nominal, Ordinal, Interval, Ratio) define the permissible arithmetic and statistical operations on those values.',
      bn: 'উপাত্তের প্রকারভেদ পর্যবেক্ষণের গাণিতিক রূপ শ্রেণিবদ্ধ করে। পরিমাপের স্কেল (নামসূচক, ক্রমসূচক, ব্যবধানসূচক ও আনুপাতিক) নির্দেশ করে ওই উপাত্তে কোন কোন গাণিতিক ক্রিয়া বৈধ।',
    },
    whyItMatters: {
      en: 'Performing an arithmetic mean on an ordinal or nominal variable (such as phone numbers or satisfaction rankings) produces mathematically invalid conclusions. Choosing the correct test begins with the data scale.',
      bn: 'ক্রমসূচক বা নামসূচক উপাত্তে (যেমন ফোন নম্বর বা সন্তুষ্টির রেটিং) গাণিতিক গড় নির্ণয় করলে ভুল সিদ্ধান্ত তৈরি হয়। সঠিক পরিসংখ্যানিক টেস্ট নির্বাচন সম্পূর্ণ নির্ভর করে পরিমাপের স্কেলের ওপর।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'Nominal Scale', bn: 'নামসূচক স্কেল (Nominal)' },
        definition: {
          en: 'Categories with no intrinsic mathematical order (e.g., Blood type A, B, AB, O; Eye color; Gender).',
          bn: 'কোনো অন্তর্নিহিত গাণিতিক ক্রমবিহীন শ্রেণি বা নাম (যেমন রক্তের গ্রুপ, চোখের রঙ, বসবাসের শহর)।',
        },
      },
      {
        term: { en: 'Ordinal Scale', bn: 'ক্রমসূচক স্কেল (Ordinal)' },
        definition: {
          en: 'Categories with an orderly ranking, but differences between ranks are not uniform (e.g., Customer satisfaction: Poor, OK, Good).',
          bn: 'যেখানে মানগুলোর মধ্যে স্পষ্ট ক্রম বা পর্যায় থাকে, কিন্তু মধ্যবর্তী ব্যবধান সমান বা নিশ্চিত নয় (যেমন ১ম, ২য়, ৩য় স্থান; অসন্তুষ্ট, সন্তুষ্ট)।',
        },
      },
      {
        term: { en: 'Interval Scale', bn: 'ব্যবধানসূচক স্কেল (Interval)' },
        definition: {
          en: 'Ordered numerical data with equal intervals between values, but no true absolute zero (e.g., Temperature in Celsius or Fahrenheit).',
          bn: 'সমান ব্যবধানযুক্ত সাংখ্যিক মান, কিন্তু কোনো পরম শূন্য (True Zero) থাকে না (যেমন সেলসিয়াস বা ফারেনহাইট তাপমাত্রা)।',
        },
      },
      {
        term: { en: 'Ratio Scale', bn: 'আনুপাতিক স্কেল (Ratio)' },
        definition: {
          en: 'Numerical data with equal intervals and an absolute true zero point where zero represents the total absence of the attribute (e.g., Height, Weight, Income, Time).',
          bn: 'সমান ব্যবধান এবং একটি বাস্তব পরম শূন্য (True Zero) যুক্ত স্কেল, যেখানে শূন্য মানে ওই পরিমাপের সম্পূর্ণ অনুপস্থিতি (যেমন উচ্চতা, ওজন, আয়)।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Temperature Interval Conversion (No Absolute Zero)', bn: 'ব্যবধান স্কেলের রূপান্তর (পরম শূন্য অনুপস্থিত)' },
        latex: 'F = \\frac{9}{5}C + 32',
        explanation: {
          en: '$0^\\circ C$ does not mean "absence of heat", hence $40^\\circ C$ is not twice as hot as $20^\\circ C$.',
          bn: '$0^\\circ C$ মানে তাপের সম্পূর্ণ অনুপস্থিতি নয়, তাই $40^\\circ C$ মানে $20^\\circ C$ এর দ্বিগুণ গরম নয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Classifying Variables into Scales', bn: 'চলকসমূহকে স্কেলে শ্রেণিবিন্যাস' },
        problem: {
          en: 'Classify each variable into Nominal, Ordinal, Interval, or Ratio: (a) Monthly salary in USD, (b) University letter grades (A, B, C, F), (c) Car colors, (d) Calendar year (e.g., 2026).',
          bn: 'নিম্নোক্ত চলকগুলোকে নামসূচক, ক্রমসূচক, ব্যবধানসূচক বা আনুপাতিক স্কেলে ভাগ করুন: (ক) মাসিক বেতন, (খ) বিশ্ববিদ্যালয়ের গ্রেড (A, B, C, F), (গ) গাড়ির রঙ, (ঘ) ক্যালেন্ডার বর্ষ (যেমন ২০২৬)।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: '(a) Monthly salary has a true zero ($0 means no income) and meaningful ratios ($4000 is double $2000) -> Ratio scale.',
              bn: '(ক) মাসিক বেতনের একটি পরম শূন্য আছে ($০ মানে কোনো আয় নেই) এবং অনুপাত অর্থবহ -> আনুপাতিক স্কেল (Ratio)।',
            },
          },
          {
            step: 2,
            text: {
              en: '(b) Grades have ordered hierarchy (A > B > C), but difference between A and B is not mathematically identical to C and F -> Ordinal scale.',
              bn: '(খ) গ্রেডের মধ্যে ক্রম আছে (A > B), তবে মধ্যবর্তী ব্যবধান সুনির্দিষ্টভাবে সমান নয় -> ক্রমসূচক স্কেল (Ordinal)।',
            },
          },
          {
            step: 3,
            text: {
              en: '(c) Car colors (Red, Blue, Silver) are descriptive categories without hierarchy -> Nominal scale.',
              bn: '(গ) গাড়ির রঙে কোনো ঊর্ধ্ব বা অধঃক্রম নেই, কেবল নাম বা শ্রেণি -> নামসূচক স্কেল (Nominal)।',
            },
          },
          {
            step: 4,
            text: {
              en: '(d) Calendar year 2026 has equal intervals (each year is 365 days), but Year 0 is arbitrary and does not mean absence of time -> Interval scale.',
              bn: '(ঘ) ক্যালেন্ডার বর্ষের ব্যবধান সমান, কিন্তু বছর ০ মানে সময়ের অনুপস্থিতি নয় -> ব্যবধানসূচক স্কেল (Interval)।',
            },
          },
        ],
        finalAnswer: {
          en: 'Salary = Ratio; Letter grade = Ordinal; Car color = Nominal; Calendar year = Interval.',
          bn: 'বেতন = Ratio; গ্রেড = Ordinal; গাড়ির রঙ = Nominal; ক্যালেন্ডার বর্ষ = Interval।',
        },
      },
      {
        title: { en: 'Discrete vs Continuous Distinctions', bn: 'বিচ্ছিন্ন বনাম অবিচ্ছিন্ন উপাত্ত নির্ধারণ' },
        problem: {
          en: 'Identify whether the following are discrete or continuous: (1) Number of customers visiting a store daily, (2) Exact time spent waiting in a checkout line.',
          bn: 'বিচ্ছিন্ন ও অবিচ্ছিন্ন হিসেবে চিহ্নিত করুন: (১) দোকানে প্রতিদিন আসা গ্রাহকের সংখ্যা, (২) ক্যাশ কাউন্টারে অপেক্ষার সঠিক সময়।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Customer count must be whole integers (1, 2, 3... cannot have 2.37 customers). Hence it is Discrete.',
              bn: 'গ্রাহকের সংখ্যা পূর্ণসংখ্যা হতে হবে (১, ২, ৩... ২.৩৭ জন মানুষ হতে পারে না)। সুতরাং এটি বিচ্ছিন্ন (Discrete)।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Waiting time can take any real value on a continuum (e.g. 4.312 minutes). Hence it is Continuous.',
              bn: 'অপেক্ষার সময় যেকোনো বাস্তব ভগ্নাংশ মান নিতে পারে (যেমন ৪.৩১২ মিনিট)। সুতরাং এটি অবিচ্ছিন্ন (Continuous)।',
            },
          },
        ],
        finalAnswer: {
          en: 'Customer count = Discrete Quantitative; Waiting time = Continuous Quantitative.',
          bn: 'গ্রাহক সংখ্যা = বিচ্ছিন্ন পরিমাণবাচক; অপেক্ষার সময় = অবিচ্ছিন্ন পরিমাণবাচক।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'UX & Survey Design', bn: 'ইউজার এক্সপেরিয়েন্স ও জরিপ নকশা' },
        example: {
          en: 'Using Likert scales (1-Strongly Disagree to 5-Strongly Agree) properly as ordinal data rather than assuming equal mathematical intervals.',
          bn: 'লাইকার্ট স্কেলের জরিপ ফলাফলকে অর্ডিনাল উপাত্ত হিসেবে মূল্যায়ন করে মধ্যমা বা মোড ব্যবহার করা।',
        },
      },
      {
        field: { en: 'Data Science Feature Engineering', bn: 'ডেটা সায়েন্স ফিচার ইঞ্জিনিয়ারিং' },
        example: {
          en: 'Encoding nominal categorical columns with One-Hot Encoding and ordinal columns with Integer Rank Encoding.',
          bn: 'মেশিন লার্নিং মডেলে নামসূচক চলককে ওয়ান-হট এনকোডিং এবং ক্রমসূচক চলককে র্যাঙ্ক এনকোডিং করা।',
        },
      },
    ],
    pythonCode: `import pandas as pd

# Creating a DataFrame with mixed measurement scales
df = pd.DataFrame({
    'CustomerID': [101, 102, 103, 104],                 # Nominal (identifier)
    'Gender': ['Male', 'Female', 'Female', 'Male'],      # Nominal
    'Satisfaction': ['Medium', 'High', 'Low', 'High'],  # Ordinal
    'Temperature_C': [22.5, 23.0, 21.8, 24.1],          # Interval
    'AnnualSpend_USD': [1200.50, 4300.00, 450.25, 3100] # Ratio
})

# Display summary statistics of ratio columns only
print(df[['AnnualSpend_USD']].describe())`,
    rCode: `# R data frames with factors
customer_data <- data.frame(
  CustomerID = factor(c(101, 102, 103, 104)),
  Satisfaction = factor(c("Medium", "High", "Low", "High"), 
                        levels = c("Low", "Medium", "High"), 
                        ordered = TRUE),
  AnnualSpend = c(1200.5, 4300.0, 450.25, 3100.0)
)
print(customer_data$Satisfaction > "Low")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Calculating the arithmetic mean of an ordinal scale (e.g. saying the average satisfaction is 3.4 on a 1-5 scale) without realizing distances are subjective.',
          bn: 'ক্রমসূচক স্কেলের গাণিতিক গড় নির্ণয় করে চূড়ান্ত সিদ্ধান্ত নেওয়া।',
        },
        correct: {
          en: 'For ordinal data, median and mode are statistically sound measures of central tendency, as differences between ranks are not equal.',
          bn: 'ক্রমসূচক উপাত্তের ক্ষেত্রে মধ্যমা (Median) ও প্রচুরক (Mode) ব্যবহার করাই পরিসংখ্যানসম্মত।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The NOIR hierarchy (Nominal < Ordinal < Interval < Ratio) dictates what mathematical operations (counting, ordering, adding, multiplying) are valid.',
        bn: 'NOIR কাঠামো নির্দেশ করে কোন উপাত্তে গণনা, ক্রম, যোগ বা অনুপাত করা বৈধ।',
      },
      {
        en: 'Ratio scales possess a true absolute zero, enabling meaningful statements like "twice as much".',
        bn: 'আনুপাতিক স্কেলে বাস্তব পরম শূন্য থাকে, যার ফলে "দ্বিগুণ" বা "অর্ধেক" বলা অর্থবহ হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q3-1',
        question: {
          en: 'Which measurement scale is the ONLY one that allows you to meaningfully state that one value is "twice as large" as another?',
          bn: 'নিচের কোন পরিমাপের স্কেলটি একমাত্র স্কেল যেখানে একটি মান অপরটির "দ্বিগুণ" বলা অর্থবহ?',
        },
        options: [
          { en: 'Nominal Scale', bn: 'নামসূচক স্কেল (Nominal)' },
          { en: 'Ordinal Scale', bn: 'ক্রমসূচক স্কেল (Ordinal)' },
          { en: 'Interval Scale', bn: 'ব্যবধানসূচক স্কেল (Interval)' },
          { en: 'Ratio Scale', bn: 'আনুপাতিক স্কেল (Ratio)' },
        ],
        correctIndex: 3,
        explanation: {
          en: 'Only ratio scales have an absolute true zero point where 0 indicates complete absence of the property, permitting valid division and multiplicative ratios.',
          bn: 'কেবলমাত্র আনুপাতিক স্কেলে পরম শূন্য (True Zero) বিদ্যমান থাকায় গুণ ও ভাগের অনুপাত যথার্থ হয়।',
        },
      },
    ],
    relatedLessonIds: ['intro-to-statistics', 'population-vs-sample', 'mean-median-mode'],
  },

  // 4. Mean, Median, and Mode
  {
    id: 'mean-median-mode',
    categoryId: 'stats-fundamentals',
    order: 4,
    title: {
      en: 'Measures of Central Tendency: Mean, Median, Mode',
      bn: 'কেন্দ্রীয় প্রবণতার পরিমাপ: গড়, মধ্যমা ও প্রচুরক',
    },
    shortDescription: {
      en: 'Master arithmetic mean, median, and mode, their mathematical definitions, sensitivity to outliers, and when to use each.',
      bn: 'গড়, মধ্যমা এবং প্রচুরকের গাণিতিক সূত্র, চরম মান বা আউটলায়ারের প্রভাব এবং কোন পরিস্থিতিতে কোনটি ব্যবহার করতে হবে।',
    },
    definition: {
      en: 'Measures of central tendency are single summary numbers that identify the central, typical, or representative value of an entire distribution of data.',
      bn: 'কেন্দ্রীয় প্রবণতার পরিমাপ হলো এমন একটি একক প্রতিনিধিত্বমূলক মান, যার চারপাশে সমগ্র উপাত্তের মানগুলো পুঞ্জীভূত হওয়ার প্রবণতা দেখায়।',
    },
    whyItMatters: {
      en: 'When analyzing house prices or incomes, a few billionaires skew the mean to absurd levels, while the median reveals what a typical family actually earns. Choosing the right measure is essential for honest reporting.',
      bn: 'আবাসন বা আয়ের ক্ষেত্রে কয়েকজন শীর্ষ ধনকুবেরের আয় গড়কে অবাস্তব পর্যায়ে বাড়িয়ে দেয়, যেখানে মধ্যমা সাধারণ মানুষের বাস্তব অবস্থা প্রকাশ করে। সঠিক চিত্র তুলে ধরতে উপযুক্ত পরিমাপ নির্বাচন অত্যাবশ্যক।',
    },
    level: 'beginner',
    prerequisites: ['data-types-and-scales'],
    keyTerms: [
      {
        term: { en: 'Arithmetic Mean ($\\bar{x}$)', bn: 'গাণিতিক গড় ($\\bar{x}$)' },
        definition: {
          en: 'The mathematical center of gravity: the sum of all values divided by the total number of observations.',
          bn: 'উপাত্তের সকল মানের সমষ্টিকে মোট পর্যবেক্ষণ সংখ্যা দিয়ে ভাগ করলে যে মান পাওয়া যায়।',
        },
      },
      {
        term: { en: 'Median', bn: 'মধ্যমা (Median)' },
        definition: {
          en: 'The middle value that divides an ordered dataset into two equal halves (50% above, 50% below). Robust to outliers.',
          bn: 'উপাত্তের মানগুলোকে মানের ক্রমানুসারে সাজালে ঠিক মাঝামাঝি যে মানটি থাকে এবং যা উপাত্তকে সমান দুই ভাগে বিভক্ত করে।',
        },
      },
      {
        term: { en: 'Mode', bn: 'প্রচুরক (Mode)' },
        definition: {
          en: 'The most frequently occurring value in the dataset. A dataset can be unimodal, bimodal, multimodal, or have no mode.',
          bn: 'কোনো তথ্যসারিতে যে মানটি সর্বাধিকবার উপস্থিত থাকে তাকে প্রচুরক বলে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Sample Arithmetic Mean', bn: 'নমুনা গাণিতিক গড়' },
        latex: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^{n} x_i = \\frac{x_1 + x_2 + \\dots + x_n}{n}',
        explanation: {
          en: 'Sum of all $n$ data points divided by the sample size $n$.',
          bn: 'সকল $n$ মানের যোগফলকে উপাত্ত সংখ্যা $n$ দিয়ে ভাগ।',
        },
      },
      {
        label: { en: 'Median Position Formula', bn: 'মধ্যমার অবস্থান নির্ণয় সূত্র' },
        latex: '\\text{Median} = \\begin{cases} x_{\\frac{n+1}{2}} & \\text{if } n \\text{ is odd} \\\\[6pt] \\frac{x_{\\frac{n}{2}} + x_{\\frac{n}{2}+1}}{2} & \\text{if } n \\text{ is even} \\end{cases}',
        explanation: {
          en: 'For sorted values $x_{(1)} \\le x_{(2)} \\le \\dots \\le x_{(n)}$.',
          bn: 'ছোট থেকে বড় ক্রমে সাজানো মানের ক্ষেত্রে বিজোড় এবং জোড় সংখ্যার মধ্যমা নির্ধারণ।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Computing All Three Measures on an Odd Dataset', bn: 'বিজোড় উপাত্ত সেটে তিনটি পরিমাপ নির্ণয়' },
        problem: {
          en: 'Find the mean, median, and mode for student quiz marks: 4, 8, 7, 4, 9, 10, 7, 4, 6.',
          bn: 'শিক্ষার্থীদের কুইজের নম্বরের গড়, মধ্যমা ও প্রচুরক বের করুন: ৪, ৮, ৭, ৪, ৯, ১০, ৭, ৪, ৬।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Sum the values: $4 + 8 + 7 + 4 + 9 + 10 + 7 + 4 + 6 = 59$. Divide by $n = 9$: $\\bar{x} = \\frac{59}{9} \\approx 6.56$.',
              bn: 'সকল মান যোগ করি: ৪ + ৮ + ৭ + ৪ + ৯ + ১০ + ৭ + ৪ + ৬ = ৫৯। পদসংখ্যা $n = ৯$ দিয়ে ভাগ: $\\bar{x} = \\frac{৫৯}{৯} \\approx ৬.৫৬$।',
            },
            math: '\\bar{x} = 6.56',
          },
          {
            step: 2,
            text: {
              en: 'Sort the dataset in ascending order: 4, 4, 4, 6, 7, 7, 8, 9, 10. Since $n = 9$ is odd, the middle position is $\\frac{9+1}{2} = 5$-th element, which is 7.',
              bn: 'ছোট থেকে বড় সাজাই: ৪, ৪, ৪, ৬, ৭, ৭, ৮, ৯, ১০। যেহেতু $n = ৯$ বিজোড়, মধ্যম অবস্থান $\\frac{৯+১}{২} = ৫$-তম পদ, যা হলো ৭।',
            },
            math: '\\text{Median} = 7',
          },
          {
            step: 3,
            text: {
              en: 'Count frequencies: 4 appears 3 times, 7 appears 2 times, others appear once. The most frequent value is 4.',
              bn: 'পৌনঃপুনিকতা গণনা: ৪ আছে ৩ বার, ৭ আছে ২ বার। সবচেয়ে বেশি বার এসেছে ৪। সুতরাং প্রচুরক হলো ৪।',
            },
            math: '\\text{Mode} = 4',
          },
        ],
        finalAnswer: {
          en: 'Mean = 6.56, Median = 7, Mode = 4.',
          bn: 'গড় = ৬.৫৬, মধ্যমা = ৭, প্রচুরক = ৪।',
        },
      },
      {
        title: { en: 'Impact of an Outlier on Central Tendency', bn: 'চরম মান বা আউটলায়ারের তীব্র প্রভাব' },
        problem: {
          en: 'Consider 5 salaries: 30k, 32k, 35k, 40k, 45k. Suppose a CEO joins earning 1,000k. How do the mean and median change?',
          bn: '৫ জন কর্মচারীর বেতন: ৩০ হাজার, ৩২ হাজার, ৩৫ হাজার, ৪০ হাজার, ৪৫ হাজার। এখন একজন প্রধান নির্বাহী ১,০০০ হাজার বেতন নিয়ে যোগ দিলে গড় ও মধ্যমার কী পরিবর্তন হবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Original Mean = $\\frac{30+32+35+40+45}{5} = \\frac{182}{5} = 36.4$k. Original Median = 35k.',
              bn: 'আগের গড় = $\\frac{১৮২}{৫} = ৩৬.৪$ হাজার। আগের মধ্যমা = ৩৫ হাজার।',
            },
          },
          {
            step: 2,
            text: {
              en: 'New Dataset: 30, 32, 35, 40, 45, 1000. New Mean = $\\frac{1182}{6} = 197$k. New Median = $\\frac{35+40}{2} = 37.5$k.',
              bn: 'নতুন উপাত্ত: ৩০, ৩২, ৩৫, ৪০, ৪৫, ১০০০। নতুন গড় = $\\frac{১১৮২}{৬} = ১৯৭$ হাজার। নতুন মধ্যমা = $\\frac{৩৫+৪০}{২} = ৩৭.৫$ হাজার।',
            },
          },
        ],
        finalAnswer: {
          en: 'Mean jumped drastically from 36.4k to 197k (outlier sensitivity), while median only shifted moderately from 35k to 37.5k (robustness).',
          bn: 'গড় ৩৬.৪ হাজার থেকে একলাফে ১৯৭ হাজারে চলে গেল (আউটলায়ার সংবেদনশীল), কিন্তু মধ্যমা কেবল ৩৫ থেকে ৩৭.৫ হাজারে পরিবর্তিত হলো (দৃঢ় বা রোবাস্ট)।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Real Estate & Housing', bn: 'রিয়েল এস্টেট ও আবাসন খাত' },
        example: {
          en: 'Reporting median home prices rather than average home prices to avoid distortions from luxury mansions.',
          bn: 'বিলাসবহুল মহলের অবাস্তব প্রভাব এড়াতে গড় বাড়ির দামের বদলে মধ্যমা দাম প্রকাশ করা।',
        },
      },
      {
        field: { en: 'Retail & Inventory Management', bn: 'খুচরা বাণিজ্য ও মজুদ নিয়ন্ত্রণ' },
        example: {
          en: 'A shoe manufacturer stocks inventory according to the mode (most common shoe size purchased) rather than average size.',
          bn: 'জুতার কোম্পানি গড়ের ওপর নির্ভর না করে প্রচুরক বা সর্বাধিক বিক্রিত সাইজ অনুযায়ী উৎপাদন করে।',
        },
      },
    ],
    interactiveToolId: 'mean-median-mode-explorer',
    pythonCode: `import numpy as np
from scipy import stats

data = [4, 8, 7, 4, 9, 10, 7, 4, 6]

mean_val = np.mean(data)
median_val = np.median(data)
mode_res = stats.mode(data, keepdims=True)

print(f"Mean: {mean_val:.2f}")
print(f"Median: {median_val}")
print(f"Mode: {mode_res.mode[0]} (Count: {mode_res.count[0]})")`,
    rCode: `data <- c(4, 8, 7, 4, 9, 10, 7, 4, 6)

cat("Mean:", mean(data), "\\n")
cat("Median:", median(data), "\\n")
# Mode function in R
get_mode <- function(v) {
  uniqv <- unique(v)
  uniqv[which.max(tabulate(match(v, uniqv)))]
}
cat("Mode:", get_mode(data), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming that mean, median, and mode are always close to each other.',
          bn: 'মনে করা যে গড়, মধ্যমা ও প্রচুরক সবসময় কাছাকাছি মানের হবে।',
        },
        correct: {
          en: 'They only coincide in perfectly symmetric distributions. In skewed distributions (like income or website visits), they diverge significantly.',
          bn: 'কেবলমাত্র সম্পূর্ণ প্রতিসম বণ্টনেই তারা একই বিন্দুতে মিলিত হয়। অসম বা বঙ্কিম বণ্টনে এদের মধ্যে প্রচুর ফারাক থাকে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The mean is the algebraic balance point, but it is heavily sensitive to extreme outliers.',
        bn: 'গড় হলো বীজগাণিতিক ভারসাম্য কেন্দ্র, কিন্তু এটি চরম মানের প্রভাবে অত্যন্ত সংবেদনশীল।',
      },
      {
        en: 'The median is resistant (robust) to extreme values and is preferred for skewed data.',
        bn: 'মধ্যমা চরম মানের প্রতি অপ্রভাবিত বা রোবাস্ট এবং বঙ্কিম উপাত্তে ব্যবহারের জন্য শ্রেষ্ঠ।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q4-1',
        question: {
          en: 'In a heavily right-skewed distribution of national incomes, which relationship typically holds true?',
          bn: 'জাতীয় আয়ের তীব্র ধনাত্মক বা ডান-বঙ্কিম বণ্টনে নিচের কোন সম্পর্কটি সাধারণত সত্য হয়?',
        },
        options: [
          { en: 'Mean < Median < Mode', bn: 'গড় < মধ্যমা < প্রচুরক' },
          { en: 'Mode < Median < Mean', bn: 'প্রচুরক < মধ্যমা < গড়' },
          { en: 'Mean = Median = Mode', bn: 'গড় = মধ্যমা = প্রচুরক' },
          { en: 'Median > Mean > Mode', bn: 'মধ্যমা > গড় > প্রচুরক' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'In right-skewed data, extreme high incomes pull the mean to the right the furthest, while the mode stays near the peak: Mode < Median < Mean.',
          bn: 'ডান-বঙ্কিম বণ্টনে চরম উচ্চ মানগুলো গড়কে সবচেয়ে ডানে টেনে নিয়ে যায়: প্রচুরক < মধ্যমা < গড়।',
        },
      },
    ],
    relatedLessonIds: ['data-types-and-scales', 'variance-and-std-dev', 'normal-distribution'],
  },

  // 5. Variance and Standard Deviation
  {
    id: 'variance-and-std-dev',
    categoryId: 'stats-fundamentals',
    order: 5,
    title: {
      en: 'Measures of Dispersion: Variance & Standard Deviation',
      bn: 'বিস্তার পরিমাপ: ভেদাঙ্ক ও পরিমিত ব্যবধান',
    },
    shortDescription: {
      en: 'Understand how spread out data is, why standard deviation restores the original units, and how to compute sample vs population variance.',
      bn: 'উপাত্তের বিস্তার কীভাবে পরিমাপ করা হয়, কেন পরিমিত ব্যবধান মূল এককে ফিরে আসে এবং বেসেলের সংশোধনের তাৎপর্য।',
    },
    definition: {
      en: 'Variance measures the average squared deviation of data points from their mean. Standard deviation is the positive square root of variance, expressing data dispersion in the original units of measurement.',
      bn: 'ভেদাঙ্ক হলো গড় থেকে উপাত্তের প্রতিটি মানের দূরত্বের বর্গের গড়। আর ভেদাঙ্কের ধনাত্মক বর্গমূলকে পরিমিত ব্যবধান বলে, যা মূল পরিমাপের এককে উপাত্তের বিস্তার প্রকাশ করে।',
    },
    whyItMatters: {
      en: 'Two financial investments might have the exact same 10% average return, but one fluctuates wildly with high volatility while the other is stable. Standard deviation quantifies risk and consistency.',
      bn: 'দুটি বিনিয়োগের গড় লাভ সমান ১০% হতে পারে, কিন্তু একটিতে ঝুঁকি ও উঠানামা অনেক বেশি এবং অন্যটি স্থিতিশীল। পরিমিত ব্যবধান এই ঝুঁকি ও অনিশ্চয়তাকে সাংখ্যিকভাবে পরিমাপ করে।',
    },
    level: 'beginner',
    prerequisites: ['mean-median-mode'],
    keyTerms: [
      {
        term: { en: 'Deviation', bn: 'বিচ্যুতি (Deviation)' },
        definition: {
          en: 'The directed distance of an individual observation from the mean: $(x_i - \\bar{x})$. The sum of deviations always equals zero.',
          bn: 'গড় থেকে কোনো নির্দিষ্ট পর্যবেক্ষণের দূরত্ব: $(x_i - \\bar{x})$। এদের যোগফল সর্বদাই শূন্য হয়।',
        },
      },
      {
        term: { en: 'Variance ($s^2$ or $\\sigma^2$)', bn: 'ভেদাঙ্ক ($s^2$ বা $\\sigma^2$)' },
        definition: {
          en: 'The average of squared differences from the mean, expressed in squared units (e.g. $dollars^2$).',
          bn: 'গড় থেকে মানগুলোর দূরত্বের বর্গের সমষ্টির গড়, যার একক মূল এককের বর্গ (যেমন টাকা$^২$)।',
        },
      },
      {
        term: { en: 'Standard Deviation ($s$ or $\\sigma$)', bn: 'পরিমিত ব্যবধান ($s$ বা $\\sigma$)' },
        definition: {
          en: '$\\sqrt{\\text{Variance}}$, returning spread back to natural original units (e.g. dollars, cm).',
          bn: 'ভেদাঙ্কের বর্গমূল, যা বিস্তারকে পুনরায় স্বাভাবিক এককে (যেমন টাকা, কেজি) প্রকাশ করে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Sample Variance Formula', bn: 'নমুনা ভেদাঙ্কের সূত্র' },
        latex: 's^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2',
        explanation: {
          en: 'Divide by $n-1$ degrees of freedom to avoid underestimating population spread.',
          bn: 'সমগ্রকের বিস্তার যাতে অবমূল্যায়িত না হয় সে জন্য $n-১$ দিয়ে ভাগ করা হয়।',
        },
      },
      {
        label: { en: 'Sample Standard Deviation', bn: 'নমুনা পরিমিত ব্যবধান' },
        latex: 's = \\sqrt{s^2} = \\sqrt{\\frac{1}{n-1} \\sum_{i=1}^{n} (x_i - \\bar{x})^2}',
        explanation: {
          en: 'Square root converts squared units back into standard original units.',
          bn: 'বর্গমূল করে বর্গের একককে পুনরায় মূল পরিমাপের এককে রূপান্তর করা হয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Step-by-Step Sample Standard Deviation', bn: 'ধাপে ধাপে নমুনা পরিমিত ব্যবধান নির্ণয়' },
        problem: {
          en: 'Calculate the sample variance and sample standard deviation for the dataset: 6, 8, 10, 12, 14.',
          bn: 'উপাত্ত সেটটির নমুনা ভেদাঙ্ক ও পরিমিত ব্যবধান বের করুন: ৬, ৮, ১০, ১২, ১৪।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Find the sample mean: $\\bar{x} = \\frac{6 + 8 + 10 + 12 + 14}{5} = \\frac{50}{5} = 10$.',
              bn: 'নমুনা গড় বের করি: $\\bar{x} = \\frac{৬ + ৮ + ১০ + ১২ + ১৪}{৫} = \\frac{৫০}{৫} = ১০$।',
            },
            math: '\\bar{x} = 10',
          },
          {
            step: 2,
            text: {
              en: 'Compute $(x_i - \\bar{x})^2$: $(6-10)^2 = 16$, $(8-10)^2 = 4$, $(10-10)^2 = 0$, $(12-10)^2 = 4$, $(14-10)^2 = 16$. Sum = $16+4+0+4+16 = 40$.',
              bn: 'দূরত্বের বর্গ নির্ণয় করি: $(৬-১০)^২ = ১৬$, $(৮-১০)^২ = ৪$, $(১০-১০)^২ = ০$, $(১২-১০)^২ = ৪$, $(১৪-১০)^২ = ১৬$। যোগফল = ৪০।',
            },
            math: '\\sum (x_i - \\bar{x})^2 = 40',
          },
          {
            step: 3,
            text: {
              en: 'Divide by $n - 1 = 5 - 1 = 4$: $s^2 = \\frac{40}{4} = 10$. Take square root: $s = \\sqrt{10} \\approx 3.162$.',
              bn: '$n - ১ = ৫ - ১ = ৪$ দিয়ে ভাগ: $s^2 = \\frac{৪০}{৪} = ১০$। বর্গমূল করি: $s = \\sqrt{১০} \\approx ৩.১৬২$।',
            },
            math: 's^2 = 10, \\quad s = \\sqrt{10} \\approx 3.162',
          },
        ],
        finalAnswer: {
          en: 'Sample variance $s^2 = 10$, Sample standard deviation $s \\approx 3.16$.',
          bn: 'নমুনা ভেদাঙ্ক $s^2 = ১০$, নমুনা পরিমিত ব্যবধান $s \\approx ৩.১৬$।',
        },
      },
      {
        title: { en: 'Comparing Two Manufacturing Processes', bn: 'দুটি উৎপাদন কারখানার মানের তুলনা' },
        problem: {
          en: 'Factory A produces bolts with mean length 50mm and $s = 0.5$mm. Factory B produces bolts with mean 50mm and $s = 2.5$mm. Which factory is more consistent?',
          bn: 'কারখানা A এর তৈরি নাট-বল্টুর গড় দৈর্ঘ্য ৫০ মিমি এবং $s = ০.৫$ মিমি। কারখানা B এর তৈরি বল্টুর গড় ৫০ মিমি এবং $s = ২.৫$ মিমি। কোন কারখানার উৎপাদন বেশি ধারাবাহিক ও মানসম্মত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Both factories have the exact same mean (50mm).',
              bn: 'উভয় কারখানার গড় উৎপাদন দৈর্ঘ্য হুবহু এক (৫০ মিমি)।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Factory A has a much smaller standard deviation ($0.5$ vs $2.5$), meaning 95% of its bolts will be within $50 \\pm 1$mm, whereas Factory B fluctuates widely within $50 \\pm 5$mm.',
              bn: 'কারখানা A-এর পরিমিত ব্যবধান অনেক কম ($০.৫$ বনাম $২.৫$), যার অর্থ কারখানা A এর পণ্যগুলোর মান অনেক বেশি সুষম ও ত্রুটিমুক্ত।',
            },
          },
        ],
        finalAnswer: {
          en: 'Factory A is significantly more consistent and dependable due to its lower standard deviation.',
          bn: 'কম পরিমিত ব্যবধানের কারণে কারখানা A উল্লেখযোগ্যভাবে বেশি সামঞ্জস্যপূর্ণ ও নির্ভরযোগ্য।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Finance & Investing', bn: 'ফাইন্যান্স ও শেয়ার বাজার' },
        example: {
          en: 'The standard deviation of an asset price return measures its market volatility and risk.',
          bn: 'শেয়ার বা সম্পদের দামের রিটার্নের পরিমিত ব্যবধান হলো তার ভোলাটিলিটি বা বিনিয়োগ ঝুঁকির পরিমাপক।',
        },
      },
      {
        field: { en: 'Industrial Six Sigma', bn: 'শিল্প উৎপাদনে সিক্স সিগমা' },
        example: {
          en: 'Engineering tolerances ensure defective parts occur at fewer than 3.4 parts per million by controlling process $\\sigma$.',
          bn: 'সিক্স সিগমা পদ্ধতিতে $\\sigma$ নিয়ন্ত্রণ করে প্রতি দশ লক্ষে ত্রুটি ৩.৪ টির নিচে নামিয়ে আনা হয়।',
        },
      },
    ],
    interactiveToolId: 'variance-explorer',
    pythonCode: `import numpy as np

data = np.array([6, 8, 10, 12, 14])

# Population variance and std
var_pop = np.var(data, ddof=0)
std_pop = np.std(data, ddof=0)

# Sample variance and std (Bessel's correction n-1)
var_sample = np.var(data, ddof=1)
std_sample = np.std(data, ddof=1)

print(f"Sample Variance (s^2): {var_sample:.2f}")
print(f"Sample Std Dev (s): {std_sample:.4f}")`,
    rCode: `data <- c(6, 8, 10, 12, 14)

# In R, var() and sd() automatically compute sample metrics (n-1)
cat("Sample Variance:", var(data), "\\n")
cat("Sample SD:", sd(data), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Thinking that a standard deviation can be negative.',
          bn: 'মনে করা যে পরিমিত ব্যবধান ঋণাত্মক হতে পারে।',
        },
        correct: {
          en: 'Since deviations are squared and then square-rooted, variance and standard deviation are always $\\ge 0$. A value of 0 means all data points are identical.',
          bn: 'দূরত্বকে বর্গ করে পরে বর্গমূল করায় ভেদাঙ্ক এবং পরিমিত ব্যবধান সর্বদাই অঋণাত্মক ($\\ge ০$)। মান ০ হওয়ার অর্থ সব উপাত্ত সমান।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Variance expresses spread in squared units, while standard deviation brings it back into intuitive original units.',
        bn: 'ভেদাঙ্ক বিস্তার প্রকাশ করে বর্গীয় এককে, আর পরিমিত ব্যবধান তাকে নিয়ে আসে চেনা মূল এককে।',
      },
      {
        en: 'A low standard deviation means data clusters closely around the mean; a high standard deviation indicates wide spread.',
        bn: 'কম পরিমিত ব্যবধান মানে উপাত্ত গড়ের কাছাকাছি ঘনীভূত; বেশি পরিমিত ব্যবধান মানে উপাত্ত বহুদূর পর্যন্ত ছড়ানো।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q5-1',
        question: {
          en: 'If every observation in a dataset is multiplied by 3, what happens to the standard deviation and variance?',
          bn: 'যদি কোনো উপাত্ত সেটের প্রতিটি পর্যবেক্ষণকে ৩ দিয়ে গুণ করা হয়, তবে তার পরিমিত ব্যবধান ও ভেদাঙ্কের কী পরিবর্তন হবে?',
        },
        options: [
          { en: 'Both remain completely unchanged', bn: 'উভয়টিই অপরিবর্তিত থাকবে' },
          { en: 'SD is multiplied by 3, Variance is multiplied by 9', bn: 'পরিমিত ব্যবধান ৩ গুণ এবং ভেদাঙ্ক ৯ গুণ বৃদ্ধি পাবে' },
          { en: 'SD is multiplied by 9, Variance is multiplied by 3', bn: 'পরিমিত ব্যবধান ৯ গুণ এবং ভেদাঙ্ক ৩ গুণ বৃদ্ধি পাবে' },
          { en: 'Both increase by adding 3', bn: 'উভয়টির সাথে ৩ যোগ হবে' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Multiplying by a constant $c$ scales standard deviation by $|c| = 3$, and variance by $c^2 = 9$.',
          bn: 'কোনো ধ্রুবক $c$ দ্বারা গুণ করলে পরিমিত ব্যবধান $|c| = ৩$ গুণ হয় এবং ভেদাঙ্ক $c^২ = ৯$ গুণ হয়।',
        },
      },
    ],
    relatedLessonIds: ['mean-median-mode', 'normal-distribution', 'hypothesis-testing'],
  },

  // 6. Probability Fundamentals
  {
    id: 'probability-fundamentals',
    categoryId: 'probability-theory',
    order: 6,
    title: {
      en: 'Probability Fundamentals',
      bn: 'সম্ভাব্যতার মৌলিক নীতি ও স্বতঃসিদ্ধ',
    },
    shortDescription: {
      en: 'Random experiments, sample spaces, Kolmogorov axioms, and the addition and multiplication rules of probability.',
      bn: 'দৈব পরীক্ষা, নমুনা ক্ষেত্র, কোলমোগোরোভের স্বতঃসিদ্ধ এবং সম্ভাবনার যোগ ও গুণন বিধি।',
    },
    definition: {
      en: 'Probability is a mathematical measure quantified between 0 and 1 that expresses the likelihood of a specific event occurring in a random experiment.',
      bn: 'সম্ভাব্যতা হলো ০ থেকে ১ এর মধ্যে এমন একটি গাণিতিক পরিমাপ যা কোনো দৈব পরীক্ষায় কোনো নির্দিষ্ট ঘটনা ঘটার নিশ্চয়তার মাত্রা প্রকাশ করে।',
    },
    whyItMatters: {
      en: 'Everyday life and scientific inquiry are filled with randomness. Probability theory transforms vague uncertainty into rigorous mathematical risk calculation, underlying everything from weather forecasts to poker and quantum mechanics.',
      bn: 'বাস্তব জীবন এবং বৈজ্ঞানিক গবেষণা অনিশ্চয়তায় ভরপুর। সম্ভাব্যতা তত্ত্ব এই অনিশ্চয়তাকে সুস্পষ্ট গাণিতিক হিসাব ও ঝুঁকিতে রূপান্তর করে, যা আবহাওয়ার পূর্বাভাস থেকে শুরু করে কোয়ান্টাম বলবিদ্যা পর্যন্ত বিস্তৃত।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'Sample Space ($S$)', bn: 'নমুনা ক্ষেত্র ($S$)' },
        definition: {
          en: 'The complete set of all possible distinct outcomes of a random experiment.',
          bn: 'কোনো দৈব পরীক্ষার সম্ভাব্য সকল ফলাফলের সামগ্রিক সেট।',
        },
      },
      {
        term: { en: 'Mutually Exclusive Events', bn: 'পরস্পর বর্জনশীল ঘটনা' },
        definition: {
          en: 'Two events that cannot occur simultaneously; their intersection is empty: $P(A \\cap B) = 0$.',
          bn: 'দুটি ঘটনা যদি একই সাথে ঘটতে না পারে; অর্থাৎ তাদের কোনো সাধারণ উপাদান না থাকে: $P(A \\cap B) = ০$।',
        },
      },
      {
        term: { en: 'Independent Events', bn: 'স্বাধীন ঘটনা' },
        definition: {
          en: 'The occurrence of event $A$ provides zero information about and does not affect the probability of event $B$: $P(A \\cap B) = P(A)P(B)$.',
          bn: 'একটি ঘটনা ঘটার বা না ঘটার সম্ভাবনা যদি অন্য ঘটনার ওপর কোনো প্রভাব না ফেলে: $P(A \\cap B) = P(A)P(B)$।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Kolmogorov Probability Axioms', bn: 'কোলমোগোরোভের সম্ভাবনার স্বতঃসিদ্ধ' },
        latex: '0 \\le P(A) \\le 1, \\quad P(S) = 1',
        explanation: {
          en: 'The probability of any event is non-negative and $\\le 1$. The entire sample space has probability 1.',
          bn: 'যেকোনো ঘটনার সম্ভাবনা ০ থেকে ১ এর মধ্যে থাকে এবং সমগ্র নমুনা ক্ষেত্রের সম্ভাবনা ১।',
        },
      },
      {
        label: { en: 'General Addition Rule', bn: 'সাধারণ যোগ বিধি' },
        latex: 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
        explanation: {
          en: 'To avoid double counting outcomes where both $A$ and $B$ occur, subtract the intersection.',
          bn: 'উভয় ঘটনা ঘটার সাধারণ অংশ যাতে দুইবার যোগ না হয়, সেজন্য তাদের ছেদ অংশ বাদ দেওয়া হয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Addition Rule with Playing Cards', bn: 'তাসের খেলায় যোগবিধির প্রয়োগ' },
        problem: {
          en: 'A standard deck has 52 cards. What is the probability of drawing a King ($A$) OR a Heart ($B$)?',
          bn: 'একটি ৫২ তাসের প্যাকেটে একটি রাজা ($A$) অথবা একটি হরতন ($B$) পাওয়ার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'There are 4 Kings in a deck: $P(A) = \\frac{4}{52}$.',
              bn: 'প্যাকেটে মোট ৪টি রাজা থাকে: $P(A) = \\frac{৪}{৫২}$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'There are 13 Hearts in a deck: $P(B) = \\frac{13}{52}$.',
              bn: 'প্যাকেটে মোট ১৩টি হরতন থাকে: $P(B) = \\frac{১৩}{৫২}$।',
            },
          },
          {
            step: 3,
            text: {
              en: 'There is exactly 1 King of Hearts: $P(A \\cap B) = \\frac{1}{52}$.',
              bn: 'একটি হরতন ও রাজা উভয়ই (King of Hearts): $P(A \\cap B) = \\frac{১}{৫২}$।',
            },
          },
          {
            step: 4,
            text: {
              en: 'Apply addition rule: $P(A \\cup B) = \\frac{4}{52} + \\frac{13}{52} - \\frac{1}{52} = \\frac{16}{52} = \\frac{4}{13} \\approx 0.3077$.',
              bn: 'যোগ বিধি প্রয়োগ করি: $P(A \\cup B) = \\frac{৪}{৫২} + \\frac{১৩}{৫২} - \\frac{১}{৫২} = \\frac{১৬}{৫২} = \\frac{৪}{১৩} \\approx ০.৩০৭৭$।',
            },
            math: 'P(A \\cup B) = \\frac{16}{52} = \\frac{4}{13} \\approx 0.3077',
          },
        ],
        finalAnswer: {
          en: 'Probability = $\\frac{4}{13} \\approx 30.77\\%$.',
          bn: 'সম্ভাব্যতা = $\\frac{৪}{১৩} \\approx ৩০.৭৭\\%$।',
        },
      },
      {
        title: { en: 'Multiplication Rule for Independent Coin Flips', bn: 'স্বাধীন মুদ্রাক্ষেপে গুণন বিধি' },
        problem: {
          en: 'You flip a fair coin 3 times. What is the probability of getting Heads on all three flips?',
          bn: 'একটি নিখুঁত মুদ্রা ৩ বার নিক্ষেপ করা হলো। প্রতিবারই হেড (H) আসার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Each toss is independent: $P(H_1) = 0.5, P(H_2) = 0.5, P(H_3) = 0.5$.',
              bn: 'প্রতিটি মুদ্রা নিক্ষেপ সম্পূর্ণ স্বাধীন: $P(H_১) = ০.৫, P(H_২) = ০.৫, P(H_৩) = ০.৫$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Apply multiplication rule for independent events: $P(H_1 \\cap H_2 \\cap H_3) = 0.5 \\times 0.5 \\times 0.5 = 0.125 = \\frac{1}{8}$.',
              bn: 'স্বাধীন ঘটনার গুণন বিধি প্রয়োগ: $P(H_১ \\cap H_২ \\cap H_৩) = ০.৫ \\times ০.৫ \\times ০.৫ = ০.১২৫ = \\frac{১}{৮}$।',
            },
            math: 'P(\\text{all 3 heads}) = \\frac{1}{8} = 0.125',
          },
        ],
        finalAnswer: {
          en: 'Probability is $\\frac{1}{8} = 12.5\\%$.',
          bn: 'সম্ভাব্যতা হলো $\\frac{১}{৮} = ১২.৫\\%$।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Insurance Actuarial Science', bn: 'বীমা ও অ্যাকচুয়ারিয়াল বিজ্ঞান' },
        example: {
          en: 'Estimating claim probabilities across thousands of policies to price auto insurance premiums sustainably.',
          bn: 'গাড়ি দুর্ঘটনার সম্ভাব্যতা বিশ্লেষণ করে বীমার প্রিমিয়াম ন্যায্য ও লাভজনকভাবে নির্ধারণ করা।',
        },
      },
      {
        field: { en: 'Network Reliability Engineering', bn: 'নেটওয়ার্ক নির্ভরযোগ্যতা ও সাইবার নিরাপত্তা' },
        example: {
          en: 'Calculating the joint availability of redundant backup servers running in parallel.',
          bn: 'একাধিক সার্ভার সমান্তরালে চালিয়ে সিস্টেমের ডাউনটাইমের সম্ভাবনা শূন্যের কাছাকাছি নামিয়ে আনা।',
        },
      },
    ],
    interactiveToolId: 'law-of-large-numbers-visualizer',
    pythonCode: `# Simulating 100,000 coin tosses
import numpy as np

n_sims = 100000
flips = np.random.choice(['H', 'T'], size=(n_sims, 3))
all_heads = np.all(flips == 'H', axis=1)

empirical_p = np.mean(all_heads)
print(f"Empirical P(3 Heads): {empirical_p:.4f}")
print(f"Theoretical P: {1/8:.4f}")`,
    rCode: `n <- 100000
# Simulate 3 coin flips
flips <- matrix(sample(c(0, 1), n * 3, replace = TRUE), ncol = 3)
all_heads <- rowSums(flips) == 3
cat("Simulated Probability:", mean(all_heads), "\\n")
cat("Theoretical Probability:", 1/8, "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Confusing "mutually exclusive" with "independent".',
          bn: '"পরস্পর বর্জনশীল" এবং "স্বাধীন" ঘটনাকে এক মনে করা।',
        },
        correct: {
          en: 'If two events are mutually exclusive and have non-zero probability, they CANNOT be independent because if one happens, the other is guaranteed NOT to happen!',
          bn: 'দুটি ঘটনা যদি বর্জনশীল হয় তবে তারা কখনোই স্বাধীন হতে পারে না, কারণ একটি ঘটলে অন্যটি যে ঘটবে না তা পুরোপুরি নিশ্চিত হয়ে যায়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Probabilities always sum to 1 over the complete sample space.',
        bn: 'সম্পূর্ণ নমুনা ক্ষেত্রের সকল ঘটনার সম্ভাবনার যোগফল সর্বদাই ১ হয়।',
      },
      {
        en: 'For general events, always subtract the overlap $P(A \\cap B)$ to prevent double-counting.',
        bn: 'যেকোনো ঘটনার সংযোগে দ্বৈত গণনা এড়াতে সর্বদা সাধারণ ছেদ অংশ $P(A \\cap B)$ বিয়োগ করতে হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q6-1',
        question: {
          en: 'If events A and B are mutually exclusive with $P(A) = 0.3$ and $P(B) = 0.4$, what is $P(A \\cap B)$?',
          bn: 'যদি ঘটনা A এবং B পরস্পর বর্জনশীল হয় এবং $P(A) = ০.৩, P(B) = ০.৪$, তবে $P(A \\cap B)$ এর মান কত?',
        },
        options: [
          { en: '0.12', bn: '০.১২' },
          { en: '0.70', bn: '০.৭০' },
          { en: '0', bn: '০' },
          { en: '0.10', bn: '০.১০' },
        ],
        correctIndex: 2,
        explanation: {
          en: 'By definition, mutually exclusive events cannot happen at the same time, so the probability of their intersection is exactly 0.',
          bn: 'বর্জনশীল ঘটনার সংজ্ঞানুযায়ী তারা একসাথে ঘটা অসম্ভব, তাই তাদের ছেদের সম্ভাব্যতা ঠিক ০।',
        },
      },
    ],
    relatedLessonIds: ['conditional-probability', 'bayes-theorem', 'random-variables'],
  },

  // 7. Conditional Probability
  {
    id: 'conditional-probability',
    categoryId: 'probability-theory',
    order: 7,
    title: {
      en: 'Conditional Probability & Independence',
      bn: 'শর্তাধীন সম্ভাব্যতা ও স্বাধীনতা',
    },
    shortDescription: {
      en: 'Learn how new information shrinks the sample space and updates probabilities: definition, multiplication rule, and tree diagrams.',
      bn: 'নতুন তথ্যের আগমনে কীভাবে নমুনা ক্ষেত্র সংকুচিত হয় এবং সম্ভাব্যতা হালনাগাদ হয়: শর্তাধীন সূত্র ও শাখাচিত্র।',
    },
    definition: {
      en: 'Conditional probability $P(A|B)$ is the probability that event $A$ occurs given that event $B$ has already occurred, effectively restricting the sample space to $B$.',
      bn: 'শর্তাধীন সম্ভাব্যতা $P(A|B)$ হলো ঘটনা $B$ ইতোমধ্যে সংঘটিত হয়েছে এই শর্তের ওপর ভিত্তি করে ঘটনা $A$ ঘটার সম্ভাব্যতা, যা নমুনা ক্ষেত্রকে কেবল $B$ তে সংকুচিত করে দেয়।',
    },
    whyItMatters: {
      en: 'We almost never make decisions in a vacuum. A doctor assesses cancer probability conditional on a patient smoking; an autonomous car predicts collision conditional on sudden braking.',
      bn: 'বাস্তব জীবনের কোনো সিদ্ধান্তই তথ্যহীন অবস্থায় নেওয়া হয় না। একজন চিকিৎসক ধূমপানের শর্তে ক্যানসারের ঝুঁকি যাচাই করেন; স্বচালিত গাড়ি হঠাৎ ব্রেকের শর্তে দুর্ঘটনার সম্ভাব্যতা গণনা করে।',
    },
    level: 'intermediate',
    prerequisites: ['probability-fundamentals'],
    keyTerms: [
      {
        term: { en: 'Conditional Probability ($P(A|B)$)', bn: 'শর্তাধীন সম্ভাব্যতা ($P(A|B)$)' },
        definition: {
          en: 'Read as "Probability of A given B". Computed as the joint probability divided by the probability of the condition $B$.',
          bn: 'পড়া হয় "B ঘটার শর্তে A এর সম্ভাব্যতা"। যুগ্ম সম্ভাবনাকে প্রদত্ত ঘটনা $B$ এর সম্ভাবনা দিয়ে ভাগ করে এটি নির্ণীত হয়।',
        },
      },
      {
        term: { en: 'Multiplication Rule of Probability', bn: 'সম্ভাব্যতার গুণন সূত্র' },
        latex: 'P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)',
        definition: {
          en: 'The probability of both events occurring is the probability of the first multiplied by the conditional probability of the second.',
          bn: 'উভয় ঘটনা ঘটার যৌথ সম্ভাবনা হলো প্রথমটির সম্ভাবনা এবং প্রথমটির সাপেক্ষে দ্বিতীয়টির শর্তাধীন সম্ভাবনার গুণফল।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Formal Definition of Conditional Probability', bn: 'শর্তাধীন সম্ভাব্যতার আনুষ্ঠানিক সূত্র' },
        latex: 'P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad \\text{where } P(B) > 0',
        explanation: {
          en: 'The proportion of event $B$ that also belongs to event $A$.',
          bn: 'ঘটনা $B$ এর যতটুকু অংশ একই সাথে ঘটনা $A$ এর ভেতরেও বিদ্যমান তার অনুপাত।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Two Marble Draws Without Replacement', bn: 'পুনঃস্থাপন ছাড়া দুটি মার্বেল তোলার শর্তাধীন সম্ভাব্যতা' },
        problem: {
          en: 'A bag contains 5 Red and 3 Blue marbles. You draw two marbles consecutively without replacement. What is the probability that both are Red?',
          bn: 'একটি থলিতে ৫টি লাল এবং ৩টি নীল মার্বেল আছে। আপনি পুনঃস্থাপন না করে পরপর দুটি মার্বেল তুললেন। দুটি মার্বেলই লাল হওয়ার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Probability first marble is Red ($R_1$): $P(R_1) = \\frac{5}{8}$.',
              bn: 'প্রথম মার্বেলটি লাল হওয়ার সম্ভাবনা ($R_১$): $P(R_১) = \\frac{৫}{৮}$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Conditioned on $R_1$, 4 Red and 3 Blue remain (total 7). So $P(R_2|R_1) = \\frac{4}{7}$.',
              bn: 'প্রথমটি লাল ওঠার পর থলিতে ৪টি লাল ও ৩টি নীল (মোট ৭টি) মার্বেল বাকি থাকে। সুতরাং $P(R_২|R_১) = \\frac{৪}{৭}$।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Apply general multiplication rule: $P(R_1 \\cap R_2) = P(R_1) \\times P(R_2|R_1) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0.3571$.',
              bn: 'গুণন বিধি প্রয়োগ করি: $P(R_১ \\cap R_২) = \\frac{৫}{৮} \\times \\frac{৪}{৭} = \\frac{২০}{৫৬} = \\frac{৫}{১৪} \\approx ০.৩৫৭১$।',
            },
            math: 'P(R_1 \\cap R_2) = \\frac{5}{14} \\approx 0.3571',
          },
        ],
        finalAnswer: {
          en: 'Probability both marbles are Red is $\\frac{5}{14} \\approx 35.71\\%$.',
          bn: 'উভয় মার্বেল লাল হওয়ার সম্ভাবনা $\\frac{৫}{১৪} \\approx ৩৫.৭১\\%$।',
        },
      },
      {
        title: { en: 'Rolling a Die with Given Condition', bn: 'শর্তসাপেক্ষে ছক্কার চালের সম্ভাব্যতা' },
        problem: {
          en: 'A fair 6-sided die is rolled. What is the probability of getting a number greater than 4, given that the roll resulted in an even number?',
          bn: 'একটি নিখুঁত ছক্কা নিক্ষেপ করা হলো। প্রাপ্ত সংখ্যাটি জোড় উঠেছে জেনে, সংখ্যাটি ৪ এর চেয়ে বড় হওয়ার শর্তাধীন সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Event B = Even number = {2, 4, 6}. $P(B) = \\frac{3}{6} = 0.5$.',
              bn: 'ঘটনা B = জোড় সংখ্যা = {২, ৪, ৬}। সুতরাং $P(B) = \\frac{৩}{৬} = ০.৫$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Event A = Greater than 4 = {5, 6}.',
              bn: 'ঘটনা A = ৪ এর চেয়ে বড় = {৫, ৬}।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Intersection $A \\cap B = \\{6\\}$. Probability $P(A \\cap B) = \\frac{1}{6}$.',
              bn: 'সাধারণ উপাদান $A \\cap B = \\{৬\\}$। সুতরাং $P(A \\cap B) = \\frac{১}{৬}$।',
            },
          },
          {
            step: 4,
            text: {
              en: '$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{1/6}{3/6} = \\frac{1}{3} \\approx 0.3333$.',
              bn: '$P(A|B) = \\frac{১/৬}{৩/৬} = \\frac{১}{৩} \\approx ০.৩৩৩৩$।',
            },
            math: 'P(A|B) = \\frac{1}{3}',
          },
        ],
        finalAnswer: {
          en: 'Conditional probability is $\\frac{1}{3} \\approx 33.33\\%$.',
          bn: 'শর্তাধীন সম্ভাব্যতা হলো $\\frac{১}{৩} \\approx ৩৩.৩৩\\%$।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Medical Diagnostics', bn: 'মেডিকেল ডায়াগনস্টিকস' },
        example: {
          en: 'Evaluating the probability that a patient has a condition given that their blood test returned positive.',
          bn: 'রক্তের টেস্ট পজিটিভ আসার শর্তে রোগীর সত্যি রোগ থাকার প্রকৃত সম্ভাব্যতা নির্ধারণ।',
        },
      },
      {
        field: { en: 'Spam Filtering', bn: 'ইমেল স্প্যাম ফিল্টারিং' },
        example: {
          en: 'Calculating the conditional probability that an email is spam given the occurrence of specific keywords like "FREE".',
          bn: 'ইমেলে নির্দিষ্ট কিছু শব্দ (যেমন "বিনামূল্যে") উপস্থিত থাকার শর্তে ইমেলটি স্প্যাম হওয়ার সম্ভাবনা যাচাই।',
        },
      },
    ],
    pythonCode: `# Conditional probability calculation with Pandas
import pandas as pd

# Contingency table of 100 people
df = pd.DataFrame({
    'Smoker': ['Yes', 'Yes', 'No', 'No'],
    'Disease': ['Yes', 'No', 'Yes', 'No'],
    'Count': [20, 30, 10, 140]
})

# P(Disease | Smoker)
total_smokers = df[df['Smoker'] == 'Yes']['Count'].sum() # 50
smoker_with_disease = df[(df['Smoker'] == 'Yes') & (df['Disease'] == 'Yes')]['Count'].sum() # 20

p_disease_given_smoker = smoker_with_disease / total_smokers
print(f"P(Disease | Smoker) = {p_disease_given_smoker:.2f}")`,
    rCode: `# R conditional probability
smokers_count <- 50
smoker_and_disease <- 20
p_cond <- smoker_and_disease / smokers_count
cat("P(Disease | Smoker) =", p_cond, "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming that $P(A|B)$ equals $P(B|A)$ (The Prosecutor\'s Fallacy).',
          bn: '$P(A|B)$ এবং $P(B|A)$ কে একই মনে করা (প্রসিকিউটর্স ফ্যালাসি)।',
        },
        correct: {
          en: '$P(\\text{Cloudy} | \\text{Rain}) \\approx 1.0$, but $P(\\text{Rain} | \\text{Cloudy}) \\approx 0.2$. Inverting conditions changes the probability completely!',
          bn: 'বৃষ্টি হলে আকাশ মেঘলা থাকার সম্ভাবনা প্রায় ১০০%, কিন্তু মেঘলা দিনে বৃষ্টি হওয়ার সম্ভাবনা অনেক কম। শর্ত উল্টে দিলে ফলাফল সম্পূর্ণ বদলে যায়!',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Conditional probability restricts the sample space from the entire universe $S$ strictly to the conditioning event $B$.',
        bn: 'শর্তাধীন সম্ভাব্যতা নমুনা ক্ষেত্রকে সমগ্র মহাবিশ্ব থেকে সংকুচিত করে কেবল নির্দিষ্ট শর্তযুক্ত ঘটনায় সীমাবদ্ধ করে।',
      },
      {
        en: 'If $P(A|B) = P(A)$, then events $A$ and $B$ are independent.',
        bn: 'যদি $P(A|B) = P(A)$ হয়, তবে ঘটনা A এবং B পরস্পর স্বাধীন।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q7-1',
        question: {
          en: 'If $P(A) = 0.5$, $P(B) = 0.4$, and $P(A \\cap B) = 0.2$, what is $P(A|B)$?',
          bn: 'যদি $P(A) = ০.৫, P(B) = ০.৪$, এবং $P(A \\cap B) = ০.২$ হয়, তবে $P(A|B)$ এর মান কত?',
        },
        options: [
          { en: '0.40', bn: '০.৪০' },
          { en: '0.50', bn: '০.৫০' },
          { en: '0.20', bn: '০.২০' },
          { en: '0.80', bn: '০.৮০' },
        ],
        correctIndex: 1,
        explanation: {
          en: '$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.4} = 0.5$. Notice that here $P(A|B) = P(A)$, proving $A$ and $B$ are independent!',
          bn: '$P(A|B) = \\frac{০.২}{০.৪} = ০.৫$। লক্ষ্য করুন এখানে $P(A|B) = P(A)$, অর্থাৎ ঘটনাদ্বয় স্বাধীন!',
        },
      },
    ],
    relatedLessonIds: ['probability-fundamentals', 'bayes-theorem', 'random-variables'],
  },

  // 8. Bayes' Theorem
  {
    id: 'bayes-theorem',
    categoryId: 'probability-theory',
    order: 8,
    title: {
      en: "Bayes' Theorem",
      bn: "বেইজের উপপাদ্য (Bayes' Theorem)",
    },
    shortDescription: {
      en: 'The mathematical engine for updating beliefs based on evidence: prior, likelihood, marginal evidence, and posterior probability.',
      bn: 'প্রমাণের ভিত্তিতে পূর্ব ধারণা হালনাগাদ করার মূল গাণিতিক স্তম্ভ: প্রায়র, লাইকলিহুড এবং পোস্টেরিয়র সম্ভাব্যতা।',
    },
    definition: {
      en: "Bayes' Theorem describes the probability of an event based on prior knowledge of conditions that might be related to the event, providing the exact mathematical rule for updating hypotheses upon observing new evidence.",
      bn: 'বেইজের উপপাদ্য হলো এমন একটি গাণিতিক পদ্ধতি যার মাধ্যমে কোনো নতুন তথ্য বা প্রমাণ পাওয়ার সাথে সাথে পূর্ববর্তী বিশ্বাসের বা অনুমানের সম্ভাব্যতাকে বিজ্ঞানসম্মতভাবে হালনাগাদ করা হয়।',
    },
    whyItMatters: {
      en: "Bayes' Theorem solves counterintuitive real-world puzzles: why a test that is 99% accurate can still yield more false positives than true positives when a disease is rare. It powers spam filters, machine learning classifiers, and Bayesian statistics.",
      bn: 'বেইজের উপপাদ্য বাস্তব জীবনের চমকপ্রদ ধাঁধার সমাধান দেয়: কেন ৯৯% নির্ভুল মেডিকেল টেস্টেও বিরল রোগের ক্ষেত্রে পজিটিভ রেজাল্ট আসার পরেও রোগ থাকার সম্ভাবনা কম হতে পারে! এটি আধুনিক কৃত্রিম বুদ্ধিমত্তা ও ডেটা সায়েন্সের প্রাণ।',
    },
    level: 'intermediate',
    prerequisites: ['conditional-probability'],
    keyTerms: [
      {
        term: { en: 'Prior Probability ($P(A)$)', bn: 'পূর্ব সম্ভাব্যতা বা প্রায়র ($P(A)$)' },
        definition: {
          en: 'Initial degree of belief in hypothesis $A$ before seeing current evidence.',
          bn: 'নতুন কোনো প্রমাণ দেখার পূর্বে অনুকল্প বা ঘটনা $A$ সম্পর্কে আমাদের আদি বিশ্বাস বা প্রচলিত সম্ভাবনা।',
        },
      },
      {
        term: { en: 'Likelihood ($P(B|A)$)', bn: 'সম্ভাবনাময়তা বা লাইকলিহুড ($P(B|A)$)' },
        definition: {
          en: 'Probability that evidence $B$ would be observed if hypothesis $A$ is true.',
          bn: 'অনুকল্প $A$ সত্য হলে প্রাপ্ত প্রমাণ $B$ দেখা যাওয়ার সম্ভাব্যতা।',
        },
      },
      {
        term: { en: 'Posterior Probability ($P(A|B)$)', bn: 'উত্তর সম্ভাব্যতা বা পোস্টেরিয়র ($P(A|B)$)' },
        definition: {
          en: 'Updated probability of hypothesis $A$ after observing evidence $B$.',
          bn: 'নতুন তথ্য বা প্রমাণ $B$ দেখার পর ঘটনা $A$ এর সংশোধিত বা হালনাগাদকৃত সম্ভাব্যতা।',
        },
      },
    ],
    equations: [
      {
        label: { en: "Bayes' Theorem Formula", bn: 'বেইজের উপপাদ্যের সাধারণ সূত্র' },
        latex: 'P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} = \\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|\\neg A)P(\\neg A)}',
        explanation: {
          en: 'Posterior equals (Likelihood times Prior) divided by Total Marginal Probability of the evidence.',
          bn: 'উত্তর সম্ভাব্যতা = (লাইকলিহুড $\\times$ প্রায়র) / প্রমাণের সামগ্রিক সম্ভাব্যতা।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'The Classic Rare Disease Screening Paradox', bn: 'বিরল রোগের মেডিকেল টেস্টের বিখ্যাত প্যারাডক্স' },
        problem: {
          en: 'A disease affects 1% of the population ($P(D) = 0.01$). A diagnostic test has 99% sensitivity ($P(T+|D) = 0.99$) and 5% false positive rate ($P(T+|\\neg D) = 0.05$). If a random person tests positive, what is the probability they actually have the disease?',
          bn: 'একটি রোগ দেশের ১% মানুষের মাঝে বিদ্যমান ($P(D) = ০.০১$)। একটি ডায়াগনস্টিক টেস্টের সেনসিটিভিটি ৯৯% ($P(T+|D) = ০.৯৯$) এবং ফলস পজিটিভ হার ৫% ($P(T+|\\neg D) = ০.০৫$)। দৈবচয়নে একজন ব্যক্তির টেস্ট রেজাল্ট পজিটিভ আসলে তার সত্যি সত্যি রোগ থাকার সম্ভাবনা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Identify the Priors: $P(D) = 0.01$, and $P(\\neg D) = 0.99$.',
              bn: 'প্রায়র বা পূর্ব সম্ভাব্যতা: $P(D) = ০.০১$, এবং সুস্থ থাকার সম্ভাবনা $P(\\neg D) = ০.৯৯$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Calculate total probability of a positive test $P(T+)$: $P(T+) = P(T+|D)P(D) + P(T+|\\neg D)P(\\neg D) = (0.99 \\times 0.01) + (0.05 \\times 0.99) = 0.0099 + 0.0495 = 0.0594$.',
              bn: 'পজিটিভ টেস্টের সামগ্রিক সম্ভাবনা নির্ণয়: $P(T+) = (০.৯৯ \\times ০.০১) + (০.০৫ \\times ০.৯৯) = ০.০০৯৯ + ০.০৪৯৫ = ০.০৫৯৪$।',
            },
            math: 'P(T+) = 0.0594',
          },
          {
            step: 3,
            text: {
              en: 'Apply Bayes\' formula: $P(D|T+) = \\frac{0.0099}{0.0594} \\approx 0.1667$.',
              bn: 'বেইজের সূত্রে মান বসাই: $P(D|T+) = \\frac{০.০০৯৯}{০.০৫৯৪} \\approx ০.১৬৬৭$।',
            },
            math: 'P(D|T+) = \\frac{0.0099}{0.0594} \\approx 16.67\\%',
          },
        ],
        finalAnswer: {
          en: 'Even with a 99% accurate test, because the disease is rare, a positive test means only a 16.67% chance of actually having the disease!',
          bn: 'টেস্ট ৯৯% নিখুঁত হওয়া সত্ত্বেও রোগটি বিরল হওয়ায় পজিটিভ টেস্ট আসার পরেও সত্যি রোগ থাকার সম্ভাবনা মাত্র ১৬.৬৭%!',
        },
      },
      {
        title: { en: 'Naive Bayes Spam Classification', bn: 'স্প্যাম ফিল্টারিংয়ে বেইজের উপপাদ্য' },
        problem: {
          en: 'Suppose 40% of incoming emails are Spam ($S$), and 60% are Ham ($H$). The word "Lottery" appears in 80% of Spam emails ($P(W|S) = 0.8$) and only 1% of Ham emails ($P(W|H) = 0.01$). If an email contains "Lottery", what is the probability it is Spam?',
          bn: '৪০% ইমেল স্প্যাম ($S$) এবং ৬০% স্বাভাবিক ($H$)। "Lottery" শব্দটি ৮০% স্প্যাম ইমেলে থাকে ($P(W|S) = ০.৮$) এবং মাত্র ১% সাধারণ ইমেলে থাকে ($P(W|H) = ০.০১$)। একটি ইমেলে "Lottery" শব্দ থাকলে সেটি স্প্যাম হওয়ার সম্ভাবনা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Calculate marginal probability of the word "Lottery": $P(W) = (0.8 \\times 0.4) + (0.01 \\times 0.6) = 0.32 + 0.006 = 0.326$.',
              bn: '"Lottery" শব্দটি উপস্থিত থাকার সামগ্রিক সম্ভাবনা: $P(W) = (০.৮ \\times ০.৪) + (০.০১ \\times ০.৬) = ০.৩২ + ০.০০৬ = ০.৩২৬$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute posterior: $P(S|W) = \\frac{P(W|S)P(S)}{P(W)} = \\frac{0.32}{0.326} \\approx 0.9816$.',
              bn: 'পোস্টেরিয়র গণনা করি: $P(S|W) = \\frac{০.৩২}{০.৩২৬} \\approx ০.৯৮১৬$।',
            },
            math: 'P(S|W) = \\frac{0.32}{0.326} \\approx 98.16\\%',
          },
        ],
        finalAnswer: {
          en: 'The probability that the email is Spam is 98.16%.',
          bn: 'ইমেলটি স্প্যাম হওয়ার সম্ভাব্যতা ৯৮.১৬%।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Spam Detection (Naive Bayes)', bn: 'ইমেল স্প্যাম ফিল্টার' },
        example: {
          en: 'Classifying incoming emails by computing posterior spam probability over all word tokens.',
          bn: 'ইমেলের প্রতিটি শব্দের উপস্থিতির ওপর ভিত্তি করে যৌথ বেইজিয়ান সম্ভাব্যতা নির্ণয়ের মাধ্যমে স্প্যাম শনাক্তকরণ।',
        },
      },
      {
        field: { en: 'Autonomous Robotics & Self-Driving Cars', bn: 'স্বচালিত গাড়ি ও রোবোটিক্স' },
        example: {
          en: 'Bayes filters (Kalman filters) constantly update vehicle position estimates combining noisy GPS and wheel sensor inputs.',
          bn: 'ত্রুটিযুক্ত জিপিএস সংকেত ও সেন্সরের ডেটা সমন্বয় করে বেইজ ফিল্টারের মাধ্যমে গাড়ির নিখুঁত অবস্থান নির্ণয়।',
        },
      },
    ],
    interactiveToolId: 'bayes-calculator',
    pythonCode: `def bayes_posterior(prior, sensitivity, false_positive):
    p_evidence = (sensitivity * prior) + (false_positive * (1 - prior))
    posterior = (sensitivity * prior) / p_evidence
    return posterior, p_evidence

# Medical screening example
post, ev = bayes_posterior(prior=0.01, sensitivity=0.99, false_positive=0.05)
print(f"Total Positive Rate: {ev:.4f}")
print(f"Posterior Probability P(Disease|Positive): {post*100:.2f}%")`,
    rCode: `bayes_calc <- function(prior, sens, fp) {
  p_ev <- (sens * prior) + (fp * (1 - prior))
  post <- (sens * prior) / p_ev
  return(post)
}
cat("Posterior Probability:", bayes_calc(0.01, 0.99, 0.05) * 100, "%\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Ignoring the base rate (prior probability) — known as the Base Rate Fallacy.',
          bn: 'মূল বেইস রেট বা পূর্ব সম্ভাবনাকে অবহেলা করা (বেইজ রেট ফ্যালাসি)।',
        },
        correct: {
          en: 'Even with high test sensitivity, when an event is extremely rare, the false positives in the healthy majority can far outnumber true positives in the sick minority.',
          bn: 'টেস্ট যতই নিখুঁত হোক, বিরল ঘটনার ক্ষেত্রে বিপুল সুস্থ জনসংখ্যার ক্ষুদ্র ভুলের সংখ্যা আসল অসুস্থ মানুষের চেয়ে অনেক বেশি হয়ে দাঁড়ায়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Bayes\' Theorem is the mathematically proven optimal method for rational belief revision in the presence of new evidence.',
        bn: 'নতুন প্রমাণের উপস্থিতিতে পূর্ব ধারণাকে যৌক্তিক ও সর্বোত্তম উপায়ে হালনাগাদ করার প্রমাণিত সূত্রই হলো বেইজের উপপাদ্য।',
      },
      {
        en: 'Posterior is directly proportional to Prior multiplied by Likelihood.',
        bn: 'উত্তর সম্ভাব্যতা (Posterior) হলো পূর্ব সম্ভাব্যতা (Prior) এবং সম্ভাব্যনাময়তার (Likelihood) গুণফলের সমানুপাতিক।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q8-1',
        question: {
          en: 'In Bayes\' formula, what is the term $P(B|A)$ called?',
          bn: 'বেইজের সূত্রে $P(B|A)$ পদটিকে কী বলা হয়?',
        },
        options: [
          { en: 'Prior probability', bn: 'পূর্ব সম্ভাব্যতা (Prior)' },
          { en: 'Likelihood', bn: 'লাইকলিহুড বা সম্ভাবনাময়তা (Likelihood)' },
          { en: 'Posterior probability', bn: 'উত্তর সম্ভাব্যতা (Posterior)' },
          { en: 'Marginal probability', bn: 'প্রান্তীয় সম্ভাব্যতা (Marginal)' },
        ],
        correctIndex: 1,
        explanation: {
          en: '$P(B|A)$ is the Likelihood — the probability of observing evidence $B$ given that hypothesis $A$ holds true.',
          bn: '$P(B|A)$ হলো লাইকলিহুড — যা অনুকল্প $A$ সত্য হলে প্রমাণ $B$ পাওয়ার সম্ভাবনা নির্দেশ করে।',
        },
      },
    ],
    relatedLessonIds: ['conditional-probability', 'random-variables', 'probability-distributions-intro'],
  },

  // 9. Random Variables
  {
    id: 'random-variables',
    categoryId: 'probability-theory',
    order: 9,
    title: {
      en: 'Random Variables: Discrete & Continuous',
      bn: 'দৈব চলক: বিচ্ছিন্ন ও অবিচ্ছিন্ন (Random Variables)',
    },
    shortDescription: {
      en: 'Explore random variables, probability mass functions (PMF), probability density functions (PDF), and expected value.',
      bn: 'দৈব চলকের ধারণা, বিচ্ছিন্ন সম্ভাব্যতা অপেক্ষক (PMF), সম্ভাব্যতা ঘনত্ব অপেক্ষক (PDF) এবং প্রত্যাশিত মান।',
    },
    definition: {
      en: 'A random variable is a mathematical function that maps the outcomes of a random experiment to real numbers. It translates qualitative events (like Heads or Tails) into quantitative numerical variables.',
      bn: 'দৈব চলক হলো এমন একটি গাণিতিক অপেক্ষক বা ফাংশন যা দৈব পরীক্ষার প্রতিটি ফলাফলকে বাস্তব সংখ্যার সাথে সংশ্লিষ্ট করে। এটি গুণবাচক ঘটনাকে সংখ্যায় রূপান্তর করে।',
    },
    whyItMatters: {
      en: 'Without random variables, probability would be stuck counting abstract coins and dice. Random variables allow us to apply algebra, calculus, and machine learning to uncertain events.',
      bn: 'দৈব চলক ছাড়া সম্ভাব্যতা কেবল মুদ্রা ও ছক্কার গণনায় সীমাবদ্ধ থাকত। দৈব চলকের মাধ্যমেই অনিশ্চয়তার ওপর বীজগণিত, ক্যালকুলাস এবং মেশিন লার্নিং প্রয়োগ করা সম্ভব হয়।',
    },
    level: 'intermediate',
    prerequisites: ['probability-fundamentals'],
    keyTerms: [
      {
        term: { en: 'Discrete Random Variable', bn: 'বিচ্ছিন্ন দৈব চলক' },
        definition: {
          en: 'A random variable that takes countable values (e.g. 0, 1, 2, 3), described by a Probability Mass Function (PMF).',
          bn: 'যে দৈব চলক কেবল নির্দিষ্ট বিচ্ছিন্ন বা গণনাযোগ্য মান গ্রহণ করে, যা সম্ভাব্যতা ভর অপেক্ষক (PMF) দ্বারা বর্ণিত।',
        },
      },
      {
        term: { en: 'Continuous Random Variable', bn: 'অবিচ্ছিন্ন দৈব চলক' },
        definition: {
          en: 'A random variable that can take any value within a continuous interval (e.g. time, weight, height), described by a Probability Density Function (PDF).',
          bn: 'যে দৈব চলক নির্দিষ্ট সীমার মধ্যে যেকোনো বাস্তব মান গ্রহণ করতে পারে, যা সম্ভাব্যতা ঘনত্ব অপেক্ষক (PDF) দ্বারা বর্ণিত।',
        },
      },
      {
        term: { en: 'Expected Value ($E[X]$)', bn: 'প্রত্যাশিত মান বা গাণিতিক প্রত্যাশা' },
        definition: {
          en: 'The probability-weighted long-run average value of the random variable: $\\sum x \\cdot P(x)$ or $\\int x f(x) dx$.',
          bn: 'দৈব চলকের সকল সম্ভাব্য মানের তাদের নিজ নিজ সম্ভাবনার ভারযুক্ত দীর্ঘমেয়াদী গড় মান।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Expected Value for Discrete Variable', bn: 'বিচ্ছিন্ন চলকের প্রত্যাশিত মান' },
        latex: 'E[X] = \\mu = \\sum_{i} x_i P(X = x_i)',
        explanation: {
          en: 'Each value $x_i$ weighted by its individual probability.',
          bn: 'প্রতিটি মান $x_i$ কে তার নিজস্ব সম্ভাব্যতা দিয়ে গুণ করে যোগ।',
        },
      },
      {
        label: { en: 'Variance of a Random Variable', bn: 'দৈব চলকের ভেদাঙ্ক' },
        latex: 'Var(X) = E[(X - \\mu)^2] = E[X^2] - (E[X])^2',
        explanation: {
          en: 'The expected squared deviation from the theoretical mean.',
          bn: 'তাত্ত্বিক গড় থেকে দূরত্বের বর্গের প্রত্যাশিত মান।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Expected Value of a Lottery Ticket', bn: 'লটারি টিকিটের প্রত্যাশিত মান নির্ণয়' },
        problem: {
          en: 'A raffle ticket costs $10. Out of 1,000 tickets sold, there is one grand prize of $5,000, and two runner-up prizes of $1,000 each. Find the expected net gain $E[X]$ per ticket.',
          bn: 'একটি লটারির টিকিটের মূল্য ১০ টাকা। মোট ১,০০০ টিকিট বিক্রি হয়েছে। ১ম পুরস্কার ৫,০০০ টাকা (১টি) এবং ২য় পুরস্কার ১,০০০ টাকা (২টি)। প্রতিটি টিকিটের প্রত্যাশিত লাভ বা ক্ষতি $E[X]$ নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Grand prize net gain = $5,000 - $10 = $4,990 with prob $\\frac{1}{1000}$.',
              bn: '১ম পুরস্কারে প্রকৃত লাভ = ৫,০০০ - ১০ = ৪,৯৯০ টাকা, সম্ভাবনা $\\frac{১}{১০০০}$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Runner-up net gain = $1,000 - $10 = $990 with prob $\\frac{2}{1000}$.',
              bn: '২য় পুরস্কারে প্রকৃত লাভ = ১,০০০ - ১০ = ৯৯০ টাকা, সম্ভাবনা $\\frac{২}{১০০০}$।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Losing tickets (997 tickets): net loss = -$10 with prob $\\frac{997}{1000}$.',
              bn: 'হেরে যাওয়া টিকিট (৯৯৭টি): ক্ষতি = -১০ টাকা, সম্ভাবনা $\\frac{৯৯৭}{১০০০}$।',
            },
          },
          {
            step: 4,
            text: {
              en: '$E[X] = (4990 \\times 0.001) + (990 \\times 0.002) + (-10 \\times 0.997) = 4.99 + 1.98 - 9.97 = -3.00$.',
              bn: '$E[X] = (৪৯৯০ \\times ০.০০১) + (৯৯০ \\times ০.০০২) + (-১০ \\times ০.৯৯৭) = ৪.৯৯ + ১.৯৮ - ৯.৯৭ = -৩.০০$ টাকা।',
            },
            math: 'E[X] = -\\$3.00',
          },
        ],
        finalAnswer: {
          en: 'On average, a player loses $3.00 per ticket purchased.',
          bn: 'গড়ে প্রতি টিকিটে একজন খেলোয়াড়ের ৩.০০ টাকা ক্ষতি হয়।',
        },
      },
      {
        title: { en: 'Variance of Rolling a Fair Die', bn: 'ছক্কা নিক্ষেপের প্রত্যাশিত মান ও ভেদাঙ্ক' },
        problem: {
          en: 'Let $X$ be the outcome of rolling a fair 6-sided die. Calculate $E[X]$ and $Var(X)$.',
          bn: 'একটি নিখুঁত ছক্কার প্রাপ্ত সংখ্যা $X$ হলে, $E[X]$ এবং $Var(X)$ এর মান নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: '$E[X] = \\sum_{i=1}^6 i \\times \\frac{1}{6} = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5$.',
              bn: '$E[X] = \\frac{১+২+৩+৪+৫+৬}{৬} = \\frac{২১}{৬} = ৩.৫$।',
            },
            math: 'E[X] = 3.5',
          },
          {
            step: 2,
            text: {
              en: '$E[X^2] = \\sum_{i=1}^6 i^2 \\times \\frac{1}{6} = \\frac{1+4+9+16+25+36}{6} = \\frac{91}{6} \\approx 15.1667$.',
              bn: '$E[X^২] = \\frac{১+৪+৯+১৬+২৫+৩৬}{৬} = \\frac{৯১}{৬} \\approx ১৫.১৬৬৭$।',
            },
          },
          {
            step: 3,
            text: {
              en: '$Var(X) = E[X^2] - (E[X])^2 = \\frac{91}{6} - (3.5)^2 = 15.1667 - 12.25 = 2.9167 = \\frac{35}{12}$.',
              bn: '$Var(X) = E[X^২] - (E[X])^২ = ১৫.১৬৬৭ - ১২.২৫ = ২.৯১৬৭ = \\frac{৩৫}{১২}$।',
            },
            math: 'Var(X) = \\frac{35}{12} \\approx 2.9167',
          },
        ],
        finalAnswer: {
          en: 'Expected value $E[X] = 3.5$, Variance $Var(X) \\approx 2.92$.',
          bn: 'প্রত্যাশিত মান $E[X] = ৩.৫$, ভেদাঙ্ক $Var(X) \\approx ২.৯২$।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Casino & Gambling Design', bn: 'ক্যাসিনো ও গেম ডিজাইন' },
        example: {
          en: 'Designing roulette and slot payout tables so that the casino holds a positive expected value on every bet.',
          bn: 'ক্যাসিনো ও লটারির পে-আউট টেবিল এমনভাবে ডিজাইন করা যাতে প্রতিটি গেমে হাউজের প্রত্যাশিত মান ধনাত্মক থাকে।',
        },
      },
      {
        field: { en: 'Algorithmic Trading', bn: 'অ্যালগরিদমিক স্টক ট্রেডিং' },
        example: {
          en: 'Calculating risk-adjusted expected returns of quantitative trading strategies based on probability distributions.',
          bn: 'সম্ভাব্যতা বণ্টনের ওপর ভিত্তি করে ট্রেডিং স্ট্র্যাটেজির প্রত্যাশিত রিটার্ন এবং ডাউনসাইড ঝুঁকি নিরূপণ।',
        },
      },
    ],
    pythonCode: `import numpy as np

# Fair die outcomes
outcomes = np.array([1, 2, 3, 4, 5, 6])
probs = np.array([1/6]*6)

# Expected value: sum(x * P(x))
e_x = np.sum(outcomes * probs)
e_x2 = np.sum((outcomes**2) * probs)
var_x = e_x2 - (e_x**2)

print(f"E[X]: {e_x:.2f}")
print(f"Var(X): {var_x:.4f}")`,
    rCode: `x <- 1:6
p <- rep(1/6, 6)
e_x <- sum(x * p)
var_x <- sum(x^2 * p) - e_x^2
cat("E[X]:", e_x, "\\nVar(X):", var_x, "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Thinking that $P(X = x) > 0$ for a continuous random variable.',
          bn: 'অবিচ্ছিন্ন দৈব চলকের কোনো নির্দিষ্ট একক মানের সম্ভাব্যতা $P(X = x) > ০$ মনে করা।',
        },
        correct: {
          en: 'For any continuous random variable, the probability of hitting any exact point is 0 ($P(X = 5.00000...) = 0$). Probabilities only exist across intervals: $P(a \\le X \\le b) = \\int_a^b f(x) dx$.',
          bn: 'যেকোনো অবিচ্ছিন্ন দৈব চলকের ঠিক একটি নির্দিষ্ট একক বিন্দুতে থাকার সম্ভাবনা ০। সম্ভাব্যতা কেবল নির্দিষ্ট ব্যবধান বা ক্ষেত্রফলের ওপর নির্ভর করে: $\\int_a^b f(x)dx$।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The expected value is the long-term weighted average; the variance measures how far values disperse around this average.',
        bn: 'প্রত্যাশিত মান হলো দীর্ঘমেয়াদী সম্ভাব্যতা-ভারযুক্ত গড়; ভেদাঙ্ক হলো এই গড়ের চারপাশে মানগুলোর ছড়ানোর পরিমাপ।',
      },
      {
        en: 'Expectation is linear: $E[aX + b] = aE[X] + b$, and $E[X + Y] = E[X] + E[Y]$ even if $X$ and $Y$ are dependent.',
        bn: 'প্রত্যাশা রৈখিক: $E[aX + b] = aE[X] + b$, এবং চলকদ্বয় নির্ভরশীল হলেও $E[X + Y] = E[X] + E[Y]$।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q9-1',
        question: {
          en: 'For a continuous random variable $X$ with PDF $f(x)$, what is the exact probability $P(X = 5)$?',
          bn: 'একটি অবিচ্ছিন্ন দৈব চলক $X$ এর ক্ষেত্রে নির্দিষ্ট একক বিন্দুতে সম্ভাব্যতা $P(X = ৫)$ এর মান কত?',
        },
        options: [
          { en: 'f(5)', bn: 'f(৫)' },
          { en: '0', bn: '০' },
          { en: '1', bn: '১' },
          { en: '0.5', bn: '০.৫' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The area under a continuous curve at a single infinitesimal point width $dx = 0$ is zero. In continuous probability, individual points have probability 0.',
          bn: 'অবিচ্ছিন্ন কার্ভের একটি একক বিন্দুর প্রস্থ শূন্য হওয়ায় এর ক্ষেত্রফল বা সম্ভাব্যতা ঠিক ০।',
        },
      },
    ],
    relatedLessonIds: ['bayes-theorem', 'probability-distributions-intro', 'normal-distribution'],
  },

  // 10. Probability Distributions
  {
    id: 'probability-distributions-intro',
    categoryId: 'prob-distributions',
    order: 10,
    title: {
      en: 'Overview of Probability Distributions',
      bn: 'সম্ভাব্যতা বণ্টন পরিচিতি (Probability Distributions)',
    },
    shortDescription: {
      en: 'A tour of discrete (Bernoulli, Binomial, Poisson) and continuous (Uniform, Exponential, Normal) probability distributions.',
      bn: 'বিচ্ছিন্ন (বার্নৌলি, দ্বিপদী, পয়সোঁ) এবং অবিচ্ছিন্ন (সুষম, সূচকীয়, স্বাভাবিক) সম্ভাব্যতা বণ্টনের তুলনামূলক পর্যালোচনা।',
    },
    definition: {
      en: 'A probability distribution is a mathematical model that describes the probabilities of all possible values that a random variable can take.',
      bn: 'সম্ভাব্যতা বণ্টন হলো এমন একটি গাণিতিক মডেল যা কোনো দৈব চলকের সম্ভাব্য সকল মানের জন্য সংশ্লিষ্ট সম্ভাব্যতা কেমন হবে তা সামগ্রিকভাবে বর্ণনা করে।',
    },
    whyItMatters: {
      en: 'Real-world phenomena follow distinct distribution shapes: website clicks follow Poisson, human heights follow Normal, customer waiting times follow Exponential. Knowing the distribution unlocks predictive power.',
      bn: 'বাস্তব বিশ্বের ঘটনাগুলো নির্দিষ্ট বণ্টনের প্যাটার্ন মেনে চলে: ওয়েবসাইটের ভিজিটর আগমন পয়সোঁ বণ্টন, মানুষের উচ্চতা স্বাভাবিক বণ্টন, কাস্টমার সেবায় অপেক্ষার সময় সূচকীয় বণ্টন মেনে চলে। সঠিক বণ্টন জানলে নির্ভুল পূর্বাভাস দেওয়া যায়।',
    },
    level: 'intermediate',
    prerequisites: ['random-variables'],
    keyTerms: [
      {
        term: { en: 'Binomial Distribution ($B(n, p)$)', bn: 'দ্বিপদী বণ্টন ($B(n, p)$)' },
        definition: {
          en: 'Number of successes in $n$ independent yes/no trials, each with constant success probability $p$.',
          bn: '$n$ সংখ্যক স্বাধীন পরীক্ষায় সফলতার সংখ্যা, যেখানে প্রতিবার সফলতার সম্ভাবনা $p$ অপরিবর্তিত থাকে।',
        },
      },
      {
        term: { en: 'Poisson Distribution ($Poi(\\lambda)$)', bn: 'পয়সোঁ বণ্টন ($Poi(\\lambda)$)' },
        definition: {
          en: 'Number of discrete occurrences in a fixed interval of time or space, with constant average rate $\\lambda$.',
          bn: 'নির্দিষ্ট সময় বা স্থানের ব্যবধানে কোনো ঘটনার পৌনঃপুনিকতার সংখ্যা, যেখানে গড় হার $\\lambda$ ধ্রুব থাকে।',
        },
      },
      {
        term: { en: 'Cumulative Distribution Function (CDF)', bn: 'ক্রমযোজিত সম্ভাব্যতা অপেক্ষক (CDF)' },
        definition: {
          en: '$F(x) = P(X \\le x)$, representing accumulated probability up to value $x$. Ranges from 0 to 1.',
          bn: '$F(x) = P(X \\le x)$, যা $x$ মান পর্যন্ত মোট পুঞ্জীভূত সম্ভাব্যতা নির্দেশ করে। এর মান ০ থেকে ১।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Binomial Probability Mass Function', bn: 'দ্বিপদী সম্ভাব্যতা ভর অপেক্ষক' },
        latex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\dots, n',
        explanation: {
          en: '$\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ counts ways to choose $k$ successes out of $n$ trials.',
          bn: '$\\binom{n}{k}$ হলো $n$ টি পরীক্ষার মধ্যে $k$ টি সফলতা বেছে নেওয়ার সম্ভাব্য উপায়।',
        },
      },
      {
        label: { en: 'Poisson Probability Mass Function', bn: 'পয়সোঁ সম্ভাব্যতা ভর অপেক্ষক' },
        latex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\dots',
        explanation: {
          en: '$\\lambda$ is both the mean and variance ($E[X] = \\lambda, Var(X) = \\lambda$).',
          bn: 'পয়সোঁ বণ্টনের গড় এবং ভেদাঙ্ক উভয়ই সমান: $E[X] = \\lambda, Var(X) = \\lambda$।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Binomial Probability of Quality Defects', bn: 'দ্বিপদী বণ্টনে পণ্যের ত্রুটির সম্ভাব্যতা' },
        problem: {
          en: 'A factory machine has a 10% defect rate ($p = 0.1$). In a random sample of 5 items, what is the probability of getting exactly 2 defective items?',
          bn: 'একটি মেশিনে উৎপাদিত পণ্যের ১০% ত্রুটিপূর্ণ ($p = ০.১$)। দৈবচয়নে নির্বাচিত ৫টি পণ্যের মধ্যে ঠিক ২টি ত্রুটিপূর্ণ হওয়ার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Parameters: $n = 5, k = 2, p = 0.1, 1-p = 0.9$.',
              bn: 'প্যারামিটার: $n = ৫, k = ২, p = ০.১, ১-p = ০.৯$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Combinations: $\\binom{5}{2} = \\frac{5 \\times 4}{2 \\times 1} = 10$.',
              bn: 'সমাবেশ: $\\binom{৫}{২} = \\frac{৫ \\times ৪}{২ \\times ১} = ১০$।',
            },
          },
          {
            step: 3,
            text: {
              en: '$P(X = 2) = 10 \\times (0.1)^2 \\times (0.9)^{5-2} = 10 \\times 0.01 \\times 0.729 = 0.0729$.',
              bn: '$P(X = ২) = ১০ \\times (০.১)^২ \\times (০.৯)^৩ = ১০ \\times ০.০১ \\times ০.৭২৯ = ০.০৭২৯$।',
            },
            math: 'P(X = 2) = 0.0729',
          },
        ],
        finalAnswer: {
          en: 'The probability is 0.0729 (or 7.29%).',
          bn: 'সম্ভাব্যতা হলো ০.০৭২৯ বা ৭.২৯%।',
        },
      },
      {
        title: { en: 'Poisson Server Traffic', bn: 'সার্ভারে রিকোয়েস্টের পয়সোঁ বণ্টন' },
        problem: {
          en: 'A web server receives an average of 3 requests per second ($\\lambda = 3$). What is the probability of receiving exactly 0 requests in a given second?',
          bn: 'একটি ওয়েব সার্ভারে প্রতি সেকেন্ডে গড়ে ৩টি রিকোয়েস্ট আসে ($\\lambda = ৩$)। কোনো নির্দিষ্ট এক সেকেন্ডে ঠিক ০টি রিকোয়েস্ট আসার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Use Poisson formula with $k = 0, \\lambda = 3$: $P(X = 0) = \\frac{3^0 e^{-3}}{0!} = \\frac{1 \\times e^{-3}}{1} = e^{-3}$.',
              bn: 'পয়সোঁ সূত্রে মান বসাই $k = ০, \\lambda = ৩$: $P(X = ০) = \\frac{৩^০ e^{-৩}}{০!} = e^{-৩}$।',
            },
          },
          {
            step: 2,
            text: {
              en: '$e^{-3} \\approx 0.04979$.',
              bn: '$e^{-৩} \\approx ০.০৪৯৭৯$।',
            },
            math: 'P(X = 0) = e^{-3} \\approx 0.0498',
          },
        ],
        finalAnswer: {
          en: 'Probability of zero requests is approximately 4.98%.',
          bn: 'কোনো রিকোয়েস্ট না আসার সম্ভাবনা প্রায় ৪.৯৮%।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Call Center Management', bn: 'কল সেন্টার ব্যবস্থাপনা' },
        example: {
          en: 'Modeling customer call arrival rates using Poisson distributions to determine required staffing levels.',
          bn: 'পয়সোঁ বণ্টন দিয়ে গ্রাহকদের ফোন আসার হার হিসাব করে পর্যাপ্ত কাস্টমার সার্ভিস প্রতিনিধি নিয়োগ নিশ্চিত করা।',
        },
      },
      {
        field: { en: 'A/B Testing in Tech', bn: 'টেক ইন্ডাস্ট্রিতে এ/বি টেস্টিং' },
        example: {
          en: 'Using Binomial distributions to evaluate user conversion rates on website redesign variants.',
          bn: 'দ্বিপদী বণ্টন ব্যবহার করে ওয়েবসাইটে ব্যবহারকারীদের সাইন-আপ বা ক্রয়ের রূপান্তর হার তুলনা করা।',
        },
      },
    ],
    pythonCode: `from scipy import stats

# Binomial: n=5 trials, p=0.1
binom_prob = stats.binom.pmf(k=2, n=5, p=0.1)
print(f"Binomial P(X=2): {binom_prob:.4f}")

# Poisson: lambda=3
poisson_prob = stats.poisson.pmf(k=0, mu=3)
print(f"Poisson P(X=0): {poisson_prob:.4f}")`,
    rCode: `# Binomial and Poisson in R
cat("Binomial P(X=2):", dbinom(2, size=5, prob=0.1), "\\n")
cat("Poisson P(X=0):", dpois(0, lambda=3), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Using Binomial distribution when trials are NOT independent or when sampling without replacement from a small population.',
          bn: 'ছোট জনসংখ্যা থেকে পুনঃস্থাপন ছাড়া নমুনা নেওয়ার সময় দ্বিপদী বণ্টন প্রয়োগ করা।',
        },
        correct: {
          en: 'When sampling without replacement from a finite population, the probability changes each draw; use the Hypergeometric distribution instead.',
          bn: 'পুনঃস্থাপন ছাড়া নমুনা নিলে প্রতিটি ধাপে সম্ভাবনা পরিবর্তিত হয়; এ ক্ষেত্রে হাইপার-জ্যামিতিক বণ্টন ব্যবহার করতে হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Binomial models successes in $n$ fixed trials; Poisson models event counts in continuous intervals.',
        bn: 'দ্বিপদী বণ্টন $n$ টি নির্দিষ্ট পরীক্ষায় সফলতার সংখ্যা নির্দেশ করে; পয়সোঁ বণ্টন সময় বা স্থানের পরিসরে মোট ঘটনার সংখ্যা বোঝায়।',
      },
      {
        en: 'When $n$ is very large and $p$ is very small, Binomial converges to Poisson with $\\lambda = np$.',
        bn: 'যখন $n$ অনেক বড় এবং $p$ খুব ক্ষুদ্র হয়, তখন দ্বিপদী বণ্টন পয়সোঁ বণ্টনে রূপ নেয় যেখানে $\\lambda = np$।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q10-1',
        question: {
          en: 'Which distribution is characterized by having its mean equal to its variance ($E[X] = Var(X)$)?',
          bn: 'নিচের কোন সম্ভাব্যতা বণ্টনের গড় এবং ভেদাঙ্ক পরস্পর সমান ($E[X] = Var(X)$)?',
        },
        options: [
          { en: 'Binomial Distribution', bn: 'দ্বিপদী বণ্টন' },
          { en: 'Poisson Distribution', bn: 'পয়সোঁ বণ্টন' },
          { en: 'Uniform Distribution', bn: 'সুষম বণ্টন' },
          { en: 'Bernoulli Distribution', bn: 'বার্নৌলি বণ্টন' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'A defining mathematical property of the Poisson distribution is that both its expected value and its variance equal $\\lambda$.',
          bn: 'পয়সোঁ বণ্টনের অন্যতম প্রধান গাণিতিক বৈশিষ্ট্য হলো এর গড় এবং ভেদাঙ্ক উভয়ই পরামিতি $\\lambda$-এর সমান।',
        },
      },
    ],
    relatedLessonIds: ['random-variables', 'normal-distribution', 'central-limit-theorem'],
  },

  // 11. Normal Distribution
  {
    id: 'normal-distribution',
    categoryId: 'prob-distributions',
    order: 11,
    title: {
      en: 'The Normal (Gaussian) Distribution',
      bn: 'স্বাভাবিক বণ্টন (The Normal Distribution)',
    },
    shortDescription: {
      en: 'The quintessential bell curve: properties, parameters, the empirical rule (68-95-99.7), standard normal distribution, and Z-scores.',
      bn: 'পরিসংখ্যানের সবচেয়ে গুরুত্বপূর্ণ ঘণ্টাকৃতির কার্ভ: বৈশিষ্ট্য, এম্পিরিক্যাল নীতি (৬৮-৯৫-৯৯.৭), আদর্শ স্বাভাবিক বণ্টন এবং জেড-স্কোর।',
    },
    definition: {
      en: 'The Normal distribution is a symmetric, continuous probability distribution characterized by a bell-shaped curve completely defined by its mean $\\mu$ (location) and standard deviation $\\sigma$ (spread).',
      bn: 'স্বাভাবিক বণ্টন হলো একটি প্রতিসম, অবিচ্ছিন্ন ঘণ্টাকৃতির সম্ভাব্যতা বণ্টন যা তার গড় $\\mu$ (অবস্থান) এবং পরিমিত ব্যবধান $\\sigma$ (বিস্তার) দ্বারা সম্পূর্ণরূপে নির্ধারিত হয়।',
    },
    whyItMatters: {
      en: 'The Normal distribution is the undisputed king of statistics. Human heights, blood pressures, measurement errors, IQ scores, and stock log-returns all naturally approximate the bell curve due to the Central Limit Theorem.',
      bn: 'স্বাভাবিক বণ্টনকে পরিসংখ্যানের রাজা বলা হয়। মানবদেহের উচ্চতা, রক্তচাপ, পরিমাপের ত্রুটি, পরীক্ষার ফলাফল কিংবা অর্থনৈতিক রিটার্ন—প্রকৃতির প্রায় সব জটিল ব্যবস্থার সমষ্টি কেন্দ্রীয় সীমাস্থ উপপাদ্যের কারণে এই স্বাভাবিক বণ্টন মেনে চলে।',
    },
    level: 'intermediate',
    prerequisites: ['variance-and-std-dev', 'probability-distributions-intro'],
    keyTerms: [
      {
        term: { en: 'Standard Normal Distribution ($Z$)', bn: 'আদর্শ স্বাভাবিক বণ্টন ($Z$)' },
        definition: {
          en: 'A normal distribution with mean $\\mu = 0$ and standard deviation $\\sigma = 1$: $Z \\sim \\mathcal{N}(0, 1)$.',
          bn: 'এমন একটি স্বাভাবিক বণ্টন যার গড় $\\mu = ০$ এবং পরিমিত ব্যবধান $\\sigma = ১$: $Z \\sim \\mathcal{N}(০, ১)$।',
        },
      },
      {
        term: { en: 'Z-Score (Standard Score)', bn: 'জেড-স্কোর (Z-Score)' },
        definition: {
          en: 'The number of standard deviations a data point lies above or below the mean: $Z = \\frac{x - \\mu}{\\sigma}$.',
          bn: 'কোনো নির্দিষ্ট মান গড় থেকে কত পরিমিত ব্যবধান ডানে বা বামে অবস্থিত তা নির্দেশক মান: $Z = \\frac{x - \\mu}{\\sigma}$।',
        },
      },
      {
        term: { en: 'Empirical Rule (68-95-99.7)', bn: 'এম্পিরিক্যাল নীতি (৬৮-৯৫-৯৯.৭)' },
        definition: {
          en: 'In a normal curve: ~68.3% falls within $\\pm 1\\sigma$, ~95.4% within $\\pm 2\\sigma$, and ~99.7% within $\\pm 3\\sigma$.',
          bn: 'স্বাভাবিক বক্ররেখায়: প্রায় ৬৮.৩% মান $\\pm ১\\sigma$-এর মধ্যে, ৯৫.৪% মান $\\pm ২\\sigma$-এর মধ্যে এবং ৯৯.৭% মান $\\pm ৩\\sigma$-এর মধ্যে থাকে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Normal Probability Density Function (PDF)', bn: 'স্বাভাবিক সম্ভাব্যতা ঘনত্ব অপেক্ষক' },
        latex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} \\exp\\left( -\\frac{(x - \\mu)^2}{2\\sigma^2} \\right), \\quad -\\infty < x < \\infty',
        explanation: {
          en: 'Symmetric around $\\mu$. Total area under the curve equals 1.',
          bn: '$\\mu$-এর সাপেক্ষে সম্পূর্ণ প্রতিসম এবং সমগ্র বক্ররেখার নিচের ক্ষেত্রফল ঠিক ১।',
        },
      },
      {
        label: { en: 'Standardization (Z-Score Transformation)', bn: 'প্রমিতকরণ রূপান্তর (Z-Score)' },
        latex: 'Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)',
        explanation: {
          en: 'Allows looking up probabilities for any normal distribution in a standard Z-table.',
          bn: 'যেকোনো সাধারণ স্বাভাবিক বণ্টনকে আদর্শ Z-সারণির মাধ্যমে সমাধান করার সার্বজনীন রূপান্তর।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Standardizing Exam Scores with Z-Scores', bn: 'জেড-স্কোরের মাধ্যমে পরীক্ষার নম্বরের প্রমিতকরণ' },
        problem: {
          en: 'Student exam scores follow a normal distribution with mean $\\mu = 75$ and $\\sigma = 10$. If Sarah scored 95, what is her Z-score, and what percentage of students scored below her?',
          bn: 'শিক্ষার্থীদের পরীক্ষার নম্বর স্বাভাবিক বণ্টন মেনে চলে যার গড় $\\mu = ৭৫$ এবং $\\sigma = ১০$। সারা ৯৫ নম্বর পেলে তার জেড-স্কোর কত এবং কত শতাংশ শিক্ষার্থী তার চেয়ে কম নম্বর পেয়েছে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Calculate Z-score: $Z = \\frac{95 - 75}{10} = \\frac{20}{10} = 2.0$.',
              bn: 'জেড-স্কোর নির্ণয় করি: $Z = \\frac{৯৫ - ৭৫}{১০} = \\frac{২০}{১০} = ২.০$।',
            },
            math: 'Z = 2.0',
          },
          {
            step: 2,
            text: {
              en: 'Using the standard normal CDF $\\Phi(2.0)$, the cumulative probability is $0.9772$.',
              bn: 'আদর্শ Z-সারণি হতে $\\Phi(২.০)$ এর মান পাই ০.৯৭৭২ বা ৯৭.৭২%।',
            },
            math: 'P(X \\le 95) = \\Phi(2.0) = 0.9772',
          },
        ],
        finalAnswer: {
          en: 'Sarah is 2 standard deviations above the mean ($Z = 2.0$). 97.72% of students scored lower than her (she is in the 98th percentile).',
          bn: 'সারার নম্বর গড় থেকে ২ পরিমিত ব্যবধান উপরে ($Z = ২.০$)। ৯৭.৭২% শিক্ষার্থী তার চেয়ে কম নম্বর পেয়েছে।',
        },
      },
      {
        title: { en: 'Using the Empirical Rule for Quality Control', bn: 'মান নিয়ন্ত্রণে এম্পিরিক্যাল নীতির ব্যবহার' },
        problem: {
          en: 'A beverage bottling plant fills soda bottles with mean $\\mu = 500$mL and $\\sigma = 5$mL. Between what two volumes will approximately 95% of the bottles contain?',
          bn: 'একটি পানীয় উৎপাদন কারখানায় বোতলে কোমল পানীয় ভরার গড় $\\mu = ৫০০$ মিলি এবং $\\sigma = ৫$ মিলি। প্রায় ৯৫% বোতলের ধারণক্ষমতা কোন দুটি মানের মধ্যে থাকবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'The empirical rule states that 95.4% of data falls within $\\mu \\pm 2\\sigma$.',
              bn: 'এম্পিরিক্যাল নীতি অনুসারে প্রায় ৯৫% মান $\\mu \\pm ২\\sigma$ সীমার মধ্যে অবস্থান করে।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Lower bound: $500 - 2(5) = 500 - 10 = 490$mL. Upper bound: $500 + 2(5) = 500 + 10 = 510$mL.',
              bn: 'নিম্নসীমা: ৫০০ - ২(৫) = ৪৯০ মিলি। ঊর্ধ্বসীমা: ৫০০ + ২(৫) = ৫১০ মিলি।',
            },
            math: '[\\mu - 2\\sigma, \\mu + 2\\sigma] = [490\\text{ mL}, 510\\text{ mL}]',
          },
        ],
        finalAnswer: {
          en: 'Approximately 95% of bottles will contain between 490 mL and 510 mL.',
          bn: 'প্রায় ৯৫% বোতলে ৪৯০ মিলি থেকে ৫১০ মিলি পানীয় থাকবে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Standardized Educational Testing', bn: 'মানসম্মত ভর্তি পরীক্ষা (SAT/GRE/IELTS)' },
        example: {
          en: 'Raw scores on standardized exams are fitted to normal curves to establish universal percentiles.',
          bn: 'ভর্তি পরীক্ষার মোট নম্বরকে স্বাভাবিক বণ্টনে রূপান্তর করে শিক্ষার্থীদের পার্সেন্টাইল নির্ধারণ করা।',
        },
      },
      {
        field: { en: 'Financial Risk Management', bn: 'ফাইন্যান্সিয়াল রিস্ক ম্যানেজমেন্ট (VaR)' },
        example: {
          en: 'Value at Risk (VaR) calculations use normal quantiles ($Z = 1.645$ for 95%) to estimate maximum daily investment losses.',
          bn: 'পোর্টফোলিওতে সম্ভাব্য সর্বোচ্চ দৈনিক লোকসান প্রাক্কলন করতে স্বাভাবিক বণ্টনের কোয়ান্টাইল ব্যবহার।',
        },
      },
    ],
    interactiveToolId: 'normal-distribution-visualizer',
    pythonCode: `from scipy import stats

mu, sigma = 75, 10
sarah_score = 95

# Calculate Z-score
z = (sarah_score - mu) / sigma

# Cumulative probability P(X <= 95)
percentile = stats.norm.cdf(z)
print(f"Z-Score: {z:.2f}")
print(f"Percentile: {percentile * 100:.2f}%")`,
    rCode: `mu <- 75
sigma <- 10
score <- 95
z <- (score - mu) / sigma
percentile <- pnorm(z)
cat("Z-score:", z, "\\nPercentile:", round(percentile * 100, 2), "%\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming all symmetrical distributions are normal.',
          bn: 'সকল প্রতিসম বণ্টনকেই স্বাভাবিক বণ্টন মনে করা।',
        },
        correct: {
          en: 'Student\'s t, Uniform, and Cauchy distributions are also symmetric, but have vastly different kurtosis (tail thickness). Normal is uniquely specified by its exponential quadratic form.',
          bn: 'টি-বণ্টন বা সুষম বণ্টনও প্রতিসম, কিন্তু তাদের প্রান্তীয় বিস্তার সম্পূর্ণ ভিন্ন। স্বাভাবিক বণ্টন তার সুনির্দিষ্ট সূচকীয় আকারের জন্য অনন্য।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The normal curve is completely determined by two parameters: mean $\\mu$ (center) and variance $\\sigma^2$ (width).',
        bn: 'স্বাভাবিক বক্ররেখা কেবল দুটি প্যারামিটার দ্বারা নির্ধারিত হয়: গড় $\\mu$ (কেন্দ্র) এবং ভেদাঙ্ক $\\sigma^২$ (প্রস্থ)।',
      },
      {
        en: 'Any normal variable can be converted to standard normal $Z \\sim \\mathcal{N}(0, 1)$ via $Z = (X - \\mu)/\\sigma$.',
        bn: 'যেকোনো স্বাভাবিক চলককে $Z = (X - \\mu)/\\sigma$ সূত্রের মাধ্যমে আদর্শ স্বাভাবিক চলকে রূপান্তর করা যায়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q11-1',
        question: {
          en: 'According to the Empirical Rule, what percentage of values in a normal distribution fall within 1 standard deviation of the mean?',
          bn: 'এম্পিরিক্যাল নীতি অনুসারে স্বাভাবিক বণ্টনের কত শতাংশ মান গড়ের ১ পরিমিত ব্যবধানের মধ্যে থাকে?',
        },
        options: [
          { en: '50%', bn: '৫০%' },
          { en: '68.3%', bn: '৬৮.৩%' },
          { en: '95.4%', bn: '৯৫.৪%' },
          { en: '99.7%', bn: '৯৯.৭%' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The empirical rule (68-95-99.7) states that approximately 68.27% of all observations in a normal distribution fall in $[\\mu - \\sigma, \\mu + \\sigma]$.',
          bn: 'স্বাভাবিক বণ্টনে গড়ের উভয় পাশে ১ পরিমিত ব্যবধানের ($[\\mu - \\sigma, \\mu + \\sigma]$) মধ্যে প্রায় ৬৮.২৭% উপাত্ত বিদ্যমান থাকে।',
        },
      },
    ],
    relatedLessonIds: ['variance-and-std-dev', 'central-limit-theorem', 'confidence-intervals'],
  },

  // 12. Central Limit Theorem
  {
    id: 'central-limit-theorem',
    categoryId: 'inference',
    order: 12,
    title: {
      en: 'The Central Limit Theorem (CLT)',
      bn: 'কেন্দ্রীয় সীমাস্থ উপপাদ্য (Central Limit Theorem)',
    },
    shortDescription: {
      en: 'The crown jewel of statistics: why sample means become normally distributed regardless of the shape of the population distribution.',
      bn: 'পরিসংখ্যানের মহিমান্বিত স্তম্ভ: মূল সমগ্রক যেকোনো আকৃতির হলেও কেন নমুনা গড়ের বণ্টন সর্বদা স্বাভাবিক বণ্টনের রূপ নেয়।',
    },
    definition: {
      en: 'The Central Limit Theorem states that as sample size $n$ increases (typically $n \\ge 30$), the sampling distribution of the sample mean $\\bar{X}$ approaches a normal distribution with mean $\\mu$ and standard error $\\frac{\\sigma}{\\sqrt{n}}$, regardless of the parent population\'s original distribution shape.',
      bn: 'কেন্দ্রীয় সীমাস্থ উপপাদ্য অনুসারে, নমুনার আকার $n$ যথেষ্ট বড় হলে (সাধারণত $n \\ge ৩০$), মূল সমগ্রকের রূপ যেমনই হোক না কেন (বঙ্কিম, সুষম বা সূচকীয়), নমুনা গড়ের বণ্টন সর্বদাই স্বাভাবিক বণ্টনে রূপান্তরিত হবে যার গড় $\\mu$ এবং পরিমিত ভুল $\\frac{\\sigma}{\\sqrt{n}}$।',
    },
    whyItMatters: {
      en: 'Without CLT, inferential statistics would collapse! We would need to know the exact unknown distribution of every population on Earth. CLT guarantees that we can use normal distribution formulas on sample averages from almost any process.',
      bn: 'কেন্দ্রীয় সীমাস্থ উপপাদ্য ছাড়া আধুনিক পরিসংখ্যান অচল হয়ে যেত! আমাদের পৃথিবীর সব জনসংখ্যার নিখুঁত বণ্টন জানার প্রয়োজন হতো। কিন্তু CLT নিশ্চিত করে যে যেকোনো উপাত্তের নমুনা গড়ের ওপর আমরা স্বাভাবিক বণ্টনের শক্তিশালী সূত্র প্রয়োগ করতে পারি।',
    },
    level: 'intermediate',
    prerequisites: ['normal-distribution'],
    keyTerms: [
      {
        term: { en: 'Sampling Distribution of the Mean', bn: 'নমুনা গড়ের বণ্টন' },
        definition: {
          en: 'The probability distribution of sample means obtained from repeatedly drawing independent samples of size $n$.',
          bn: 'সমগ্রক থেকে বারবার $n$ আকারের নমুনা তুলে প্রতিটি নমুনার যে গড় পাওয়া যায়, সেই গড়গুলোর সামগ্রিক বণ্টন।',
        },
      },
      {
        term: { en: 'Standard Error ($SE = \\frac{\\sigma}{\\sqrt{n}}$)', bn: 'পরিমিত ভুল বা স্ট্যান্ডার্ড এরর ($SE$)' },
        definition: {
          en: 'The standard deviation of the sampling distribution of sample means. Shrinks as $n$ grows.',
          bn: 'নমুনা গড়ের বণ্টনের পরিমিত ব্যবধান। নমুনার আকার $n$ যত বাড়ে, পরিমিত ভুল তত কমে।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Sampling Distribution of the Mean', bn: 'নমুনা গড়ের বণ্টন ও স্ট্যান্ডার্ড এরর' },
        latex: '\\bar{X} \\xrightarrow{d} \\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right), \\quad SE = \\frac{\\sigma}{\\sqrt{n}}',
        explanation: {
          en: 'As $n \\to \\infty$, the spread of sample means shrinks by a factor of $\\frac{1}{\\sqrt{n}}$.',
          bn: 'নমুনার আকার $n$ বৃদ্ধির সাথে সাথে নমুনা গড়ের বিস্তার $\\frac{১}{\\sqrt{n}}$ অনুপাতে কমে আসে।',
        },
      },
      {
        label: { en: 'Z-statistic for Sample Mean', bn: 'নমুনা গড়ের Z-অনুপাত' },
        latex: 'Z = \\frac{\\bar{x} - \\mu}{\\frac{\\sigma}{\\sqrt{n}}}',
        explanation: {
          en: 'Measures how many standard errors the observed sample mean is from the true population mean.',
          bn: 'পর্যবেক্ষণকৃত নমুনা গড় আসল সমগ্রক গড় থেকে কত স্ট্যান্ডার্ড এরর দূরে অবস্থিত তা নির্দেশ করে।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Probability of Sample Mean Exceeding a Value', bn: 'নমুনা গড়ের নির্দিষ্ট মান অতিক্রমের সম্ভাব্যতা' },
        problem: {
          en: 'A skewed distribution of lightbulb lifespans has mean $\\mu = 1000$ hours and $\\sigma = 200$ hours. If a random sample of $n = 64$ bulbs is tested, what is the probability that the sample mean lifespan exceeds 1040 hours?',
          bn: 'একটি বঙ্কিম বণ্টনের বৈদ্যুতিক বাল্বের গড় আয়ু $\\mu = ১০০০$ ঘণ্টা এবং $\\sigma = ২০০$ ঘণ্টা। দৈবচয়নে $n = ৬৪$ টি বাল্বের একটি নমুনা পরীক্ষা করা হলে, নমুনা গড় ১০৪০ ঘণ্টার বেশি হওয়ার সম্ভাব্যতা কত?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'By CLT, since $n = 64 \\ge 30$, $\\bar{X}$ is approximately normally distributed.',
              bn: 'CLT অনুসারে, যেহেতু $n = ৬৪ \\ge ৩০$, নমুনা গড় $\\bar{X}$ স্বাভাবিক বণ্টন মেনে চলবে।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Calculate Standard Error: $SE = \\frac{\\sigma}{\\sqrt{n}} = \\frac{200}{\\sqrt{64}} = \\frac{200}{8} = 25$ hours.',
              bn: 'পরিমিত ভুল নির্ণয়: $SE = \\frac{২০০}{\\sqrt{৬৪}} = \\frac{২০০}{৮} = ২৫$ ঘণ্টা।',
            },
            math: 'SE = \\frac{200}{8} = 25',
          },
          {
            step: 3,
            text: {
              en: 'Calculate Z-score: $Z = \\frac{\\bar{x} - \\mu}{SE} = \\frac{1040 - 1000}{25} = \\frac{40}{25} = 1.60$.',
              bn: 'জেড-স্কোর নির্ণয়: $Z = \\frac{১০৪০ - ১০০০}{২৫} = \\frac{৪০}{২৫} = ১.৬০$।',
            },
            math: 'Z = 1.60',
          },
          {
            step: 4,
            text: {
              en: 'Find upper tail probability: $P(\\bar{X} > 1040) = 1 - \\Phi(1.60) = 1 - 0.9452 = 0.0548$.',
              bn: 'ডান প্রান্তীয় সম্ভাব্যতা: $P(\\bar{X} > ১০৪০) = ১ - ০.৯৪৫২ = ০.০৫৪৮$ বা ৫.৪৮%।',
            },
            math: 'P(\\bar{X} > 1040) = 0.0548',
          },
        ],
        finalAnswer: {
          en: 'There is only a 5.48% probability that the average lifespan of 64 bulbs will exceed 1040 hours.',
          bn: '৬৪টি বাল্বের গড় আয়ু ১০৪০ ঘণ্টা ছাড়িয়ে যাওয়ার সম্ভাবনা মাত্র ৫.৪৮%।',
        },
      },
      {
        title: { en: 'Why Quadrupling Sample Size Halves Standard Error', bn: 'নমুনার আকার ৪ গুণ করলে ত্রুটি অর্ধেক হওয়ার ব্যাখ্যা' },
        problem: {
          en: 'If a researcher wants to reduce the standard error of an estimate from 10 units down to 5 units, by what factor must the sample size increase?',
          bn: 'একজন গবেষক যদি তার আকলনের পরিমিত ভুল ১০ একক থেকে কমিয়ে ৫ এককে নামিয়ে আনতে চান, তবে নমুনার আকার কতগুণ বাড়াতে হবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Standard error formula is $SE = \\frac{\\sigma}{\\sqrt{n}}$. To achieve $\\frac{SE}{2}$, we need $\\sqrt{n_{new}} = 2 \\sqrt{n_{old}}$.',
              bn: 'পরিমিত ভুলের সূত্র $SE = \\frac{\\sigma}{\\sqrt{n}}$। ভুলকে অর্ধেক করতে হলে হর দ্বিগুণ হতে হবে, অর্থাৎ $\\sqrt{n_{নতুন}} = ২ \\sqrt{n_{পুরাতন}}$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Squaring both sides: $n_{new} = 4 n_{old}$.',
              bn: 'উভয়পাশে বর্গ করলে: $n_{নতুন} = ৪ \\times n_{পুরাতন}$।',
            },
          },
        ],
        finalAnswer: {
          en: 'The sample size must be quadrupled ($4\\times$) to cut the standard error in half.',
          bn: 'পরিমিত ভুল অর্ধেক করতে হলে নমুনার আকার ঠিক ৪ গুণ করতে হবে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Public Opinion Polling', bn: 'জনমত জরিপ' },
        example: {
          en: 'Predicting national election margins of error across millions of voters using sample sizes of 1,000 to 2,000.',
          bn: 'লক্ষ লক্ষ ভোটারের মনোভাব জরিপে মাত্র ১,০০০ জনের নমুনার মাধ্যমে $\\pm ৩\\%$ মার্জিন অব এরর নিশ্চিত করা।',
        },
      },
      {
        field: { en: 'Financial Portfolio Theory', bn: 'ফাইন্যান্সিয়াল পোর্টফোলিও তত্ত্ব' },
        example: {
          en: 'Aggregating hundreds of non-normal asset risks causes total portfolio returns to approach normal distributions.',
          bn: 'বহু ভিন্নধর্মী শেয়ার একসাথে যুক্ত করলে সামগ্রিক পোর্টফোলিও রিটার্ন স্বাভাবিক বণ্টনের মতো আচরণ করে।',
        },
      },
    ],
    interactiveToolId: 'clt-simulator',
    pythonCode: `import numpy as np

# Parent population: Heavily skewed Exponential distribution
pop = np.random.exponential(scale=5, size=100000)
mu_pop = np.mean(pop)

# Draw 1,000 samples of size n=50
sample_means = [np.mean(np.random.choice(pop, size=50)) for _ in range(1000)]

print(f"Population Mean: {mu_pop:.2f}")
print(f"Mean of Sample Means: {np.mean(sample_means):.2f}")
print(f"Standard Error: {np.std(sample_means):.2f}")`,
    rCode: `# CLT Simulation in R
pop <- rexp(100000, rate = 0.2)
sample_means <- replicate(1000, mean(sample(pop, 50)))
cat("Mean of Sample Means:", mean(sample_means), "\\n")
cat("Standard Error:", sd(sample_means), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Believing that as $n$ increases, the population data itself becomes normal.',
          bn: 'মনে করা যে নমুনার আকার বাড়লে মূল সমগ্রকের উপাত্ত নিজে স্বাভাবিক বণ্টনে রূপ নেয়।',
        },
        correct: {
          en: 'The population distribution NEVER changes shape! It is the SAMPLING DISTRIBUTION of sample averages ($\\bar{X}$) that becomes normal.',
          bn: 'মূল সমগ্রক কখনোই পরিবর্তন হয় না! কেবল নমুনা গড়গুলোর বণ্টন (Sampling distribution of means) স্বাভাবিক বণ্টনে রূপান্তরিত হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'The distribution of sample means converges to normal regardless of population shape as $n \\ge 30$.',
        bn: 'মূল উপাত্ত যেমনই হোক, $n \\ge ৩০$ হলে নমুনা গড়ের বণ্টন স্বাভাবিক বণ্টনের দিকে ধাবিত হয়।',
      },
      {
        en: 'Standard error decreases with the square root of sample size ($SE = \\sigma / \\sqrt{n}$).',
        bn: 'পরিমিত ভুল নমুনার আকারের বর্গমূলের ব্যস্তানুপাতে হ্রাস পায়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q12-1',
        question: {
          en: 'If a population has standard deviation $\\sigma = 20$, what is the standard error of the mean for samples of size $n = 100$?',
          bn: 'যদি কোনো সমগ্রকের পরিমিত ব্যবধান $\\sigma = ২০$ হয়, তবে $n = ১০০$ আকারের নমুনার জন্য গড়ের পরিমিত ভুল (Standard Error) কত হবে?',
        },
        options: [
          { en: '20', bn: '২০' },
          { en: '2', bn: '২' },
          { en: '0.2', bn: '০.২' },
          { en: '10', bn: '১০' },
        ],
        correctIndex: 1,
        explanation: {
          en: '$SE = \\frac{\\sigma}{\\sqrt{n}} = \\frac{20}{\\sqrt{100}} = \\frac{20}{10} = 2$.',
          bn: '$SE = \\frac{\\sigma}{\\sqrt{n}} = \\frac{২০}{\\sqrt{১০০}} = \\frac{২০}{১০} = ২$।',
        },
      },
    ],
    relatedLessonIds: ['normal-distribution', 'confidence-intervals', 'hypothesis-testing'],
  },

  // 13. Hypothesis Testing
  {
    id: 'hypothesis-testing',
    categoryId: 'inference',
    order: 13,
    title: {
      en: 'Hypothesis Testing & p-Values',
      bn: 'প্রকল্প যাচাই ও পি-মান (Hypothesis Testing & p-Values)',
    },
    shortDescription: {
      en: 'Null vs alternative hypotheses, Type I and II errors, significance level alpha, test statistics, and interpreting p-values correctly.',
      bn: 'নাস্তিক ও বিকল্প প্রকল্প, ১ম ও ২য় প্রকার ত্রুটি, তাৎপর্য মাত্রা আলফা, টেস্ট স্ট্যাটিস্টিক এবং পি-মানের সঠিক বৈজ্ঞানিক ব্যাখ্যা।',
    },
    definition: {
      en: 'Hypothesis testing is a formal statistical framework for evaluating whether empirical sample data provides sufficient evidence to reject a default null hypothesis ($H_0$) in favor of an alternative hypothesis ($H_1$).',
      bn: 'প্রকল্প যাচাই হলো এমন একটি বিধিবদ্ধ পরিসংখ্যানিক পদ্ধতি যার মাধ্যমে পরীক্ষামূলক নমুনার উপাত্ত ব্যবহার করে যাচাই করা হয় যে কোনো পূর্বনির্ধারিত নাস্তিক প্রকল্প ($H_০$) প্রত্যাখ্যান করে বিকল্প প্রকল্প ($H_১$) গ্রহণ করার পর্যাপ্ত প্রমাণ আছে কি না।',
    },
    whyItMatters: {
      en: 'How do scientists know if a new cancer drug works, or if a website redesign actually increases sales? Hypothesis testing provides the mathematical threshold required to claim a scientific discovery without being fooled by random luck.',
      bn: 'বিজ্ঞানীরা কীভাবে নিশ্চিত হন যে একটি নতুন ক্যানসারের ওষুধ সত্যিই কার্যকর, নাকি কেবল কাকতালীয়ভাবে ভালো ফল এসেছে? প্রকল্প যাচাই এমন একটি গাণিতিক মানদণ্ড দেয় যা নিশ্চিত করে সিদ্ধান্তটি আকস্মিক ভাগ্যের ফল নয়।',
    },
    level: 'intermediate',
    prerequisites: ['central-limit-theorem'],
    keyTerms: [
      {
        term: { en: 'Null Hypothesis ($H_0$)', bn: 'নাস্তিক প্রকল্প ($H_0$)' },
        definition: {
          en: 'The baseline status-quo assumption of "no effect", "no difference", or "no change". Assumed innocent until proven guilty.',
          bn: 'প্রাথমিক বা প্রচলিত ধারণা যেখানে ধরা হয় "কোনো প্রভাব নেই", "কোনো পার্থক্য নেই" বা "সবকিছু স্বাভাবিক"।',
        },
      },
      {
        term: { en: 'Alternative Hypothesis ($H_1$ or $H_a$)', bn: 'বিকল্প প্রকল্প ($H_1$ বা $H_a$)' },
        definition: {
          en: 'The research claim that there is a genuine effect, difference, or relationship.',
          bn: 'গবেষকের নিজস্ব অনুকল্প যেখানে দাবি করা হয় যে বাস্তব কোনো প্রভাব, পার্থক্য বা সম্পর্ক বিদ্যমান।',
        },
      },
      {
        term: { en: 'p-Value', bn: 'পি-মান (p-Value)' },
        definition: {
          en: 'The probability of observing sample results at least as extreme as the current data, assuming the null hypothesis is true.',
          bn: 'নাস্তিক প্রকল্প সত্য ধরে নিয়ে, বর্তমান উপাত্তের সমান বা তার চেয়েও চরম ফলাফল পাওয়ার সম্ভাব্যতা।',
        },
      },
      {
        term: { en: 'Type I Error ($\\alpha$)', bn: 'প্রথম প্রকার ত্রুটি বা ফলস পজিটিভ (Type I)' },
        definition: {
          en: 'Rejecting a true null hypothesis (convicting an innocent person). Set by significance level $\\alpha$ (typically 0.05).',
          bn: 'সত্য নাস্তিক প্রকল্পকে ভুলবশত প্রত্যাখ্যান করা (নির্দোষকে অপরাধী সাব্যস্ত করা)। এর সম্ভাবনা হলো $\\alpha$।',
        },
      },
      {
        term: { en: 'Type II Error ($\\beta$)', bn: 'দ্বিতীয় প্রকার ত্রুটি বা ফলস নেগেটিভ (Type II)' },
        definition: {
          en: 'Failing to reject a false null hypothesis (letting a guilty person go free).',
          bn: 'মিথ্যা নাস্তিক প্রকল্পকে প্রত্যাখ্যান করতে ব্যর্থ হওয়া (প্রকৃত অপরাধীকে খালাস দেওয়া)।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'One-Sample Z-Test Statistic', bn: 'এক-নমুনা জেড-টেস্ট স্ট্যাটিস্টিক' },
        latex: 'Z = \\frac{\\bar{x} - \\mu_0}{\\frac{\\sigma}{\\sqrt{n}}}',
        explanation: {
          en: 'Measures standard errors of deviation from the null mean $\\mu_0$.',
          bn: 'নাস্তিক প্রকল্পের প্রস্তাবিত গড় $\\mu_০$ থেকে পর্যবেক্ষণকৃত নমুনা গড়ের দূরত্ব।',
        },
      },
      {
        label: { en: 'Decision Rule', bn: 'সিদ্ধান্ত গ্রহণের মূল নীতি' },
        latex: '\\text{If } p\\text{-value} \\le \\alpha \\implies \\text{Reject } H_0',
        explanation: {
          en: 'When the observed data is too improbable under $H_0$, reject $H_0$ in favor of $H_1$.',
          bn: 'যদি পি-মান তাৎপর্য মাত্রা $\\alpha$-এর সমান বা ছোট হয়, তবে নাস্তিক প্রকল্প প্রত্যাখ্যান করা হয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Testing Battery Life with a One-Sample Z-Test', bn: 'ব্যাটারির স্থায়িত্ব যাচাইয়ে এক-নমুনা জেড-টেস্ট' },
        problem: {
          en: 'A manufacturer claims its smartphone battery lasts 24 hours ($\\mu_0 = 24, \\sigma = 2$). A consumer group tests $n = 64$ phones and finds a sample mean $\\bar{x} = 23.4$ hours. At $\\alpha = 0.05$, does this provide sufficient evidence that the battery lasts less than 24 hours?',
          bn: 'একটি কোম্পানি দাবি করে তাদের ফোনের ব্যাটারি গড়ে ২৪ ঘণ্টা চলে ($\\mu_০ = ২৪, \\sigma = ২$)। একটি ভোক্তা অধিকার দল $n = ৬৪$ টি ফোন পরীক্ষা করে গড় পেল $\\bar{x} = ২৩.৪$ ঘণ্টা। $\\alpha = ০.০৫$ তাৎপর্য মাত্রায় কোম্পানিটির দাবি ভুল প্রমাণ করার পর্যাপ্ত প্রমাণ আছে কি?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'State hypotheses: $H_0: \\mu = 24$, $H_1: \\mu < 24$ (left-tailed test).',
              bn: 'প্রকল্প গঠন: $H_০: \\mu = ২৪$, $H_১: \\mu < ২৪$ (বাম-প্রান্তিক টেস্ট)।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute Standard Error: $SE = \\frac{2}{\\sqrt{64}} = \\frac{2}{8} = 0.25$.',
              bn: 'পরিমিত ভুল: $SE = \\frac{২}{\\sqrt{৬৪}} = \\frac{২}{৮} = ০.২৫$ ঘণ্টা।',
            },
            math: 'SE = 0.25',
          },
          {
            step: 3,
            text: {
              en: 'Compute Z-test statistic: $Z = \\frac{23.4 - 24}{0.25} = \\frac{-0.6}{0.25} = -2.40$.',
              bn: 'জেড-মান গণনা: $Z = \\frac{২৩.৪ - ২৪}{০.২৫} = \\frac{-০.৬}{০.২৫} = -২.৪০$।',
            },
            math: 'Z = -2.40',
          },
          {
            step: 4,
            text: {
              en: 'Find p-value for $Z = -2.40$: $P(Z < -2.40) = 0.0082$.',
              bn: '$Z = -২.৪০$ এর জন্য পি-মান: $P(Z < -২.৪০) = ০.০০৮২$।',
            },
            math: 'p\\text{-value} = 0.0082',
          },
          {
            step: 5,
            text: {
              en: 'Compare with $\\alpha = 0.05$: Since $p = 0.0082 < 0.05$, reject $H_0$.',
              bn: '$\\alpha = ০.০৫$ এর সাথে তুলনা: যেহেতু $p = ০.০০৮২ < ০.০৫$, তাই $H_০$ প্রত্যাখ্যাত হলো।',
            },
          },
        ],
        finalAnswer: {
          en: 'Reject $H_0$. There is statistically significant evidence ($p = 0.0082$) that the true battery life is less than 24 hours.',
          bn: '$H_০$ প্রত্যাখ্যাত। পরিসংখ্যানগতভাবে তাৎপর্যপূর্ণ প্রমাণ ($p = ০.০০৮২$) আছে যে ব্যাটারি ২৪ ঘণ্টার কম স্থায়ী হয়।',
        },
      },
      {
        title: { en: 'Understanding Two-Tailed vs One-Tailed p-Values', bn: 'দ্বিমুখী বনাম একমুখী পি-মানের পার্থক্য' },
        problem: {
          en: 'If a calculated test statistic is $Z = 2.10$, compare the p-value for a one-tailed test ($H_1: \\mu > \\mu_0$) versus a two-tailed test ($H_1: \\mu \\ne \\mu_0$).',
          bn: 'টেস্ট স্ট্যাটিস্টিক $Z = ২.১০$ হলে, একমুখী টেস্ট ($H_১: \\mu > \\mu_০$) এবং দ্বিমুখী টেস্টের ($H_১: \\mu \\ne \\mu_০$) পি-মানের তুলনা করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'For $Z = 2.10$, the single right-tail area is $P(Z > 2.10) = 1 - 0.9821 = 0.0179$.',
              bn: '$Z = ২.১০$ এর একক ডান প্রান্তের ক্ষেত্রফল $P(Z > ২.১০) = ১ - ০.৯৮২১ = ০.০১৭৯$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'In a two-tailed test, deviations in either direction count, so we multiply by 2: $p\\text{-value} = 2 \\times 0.0179 = 0.0358$.',
              bn: 'দ্বিমুখী টেস্টে উভয় দিকের চরম মান বিবেচিত হওয়ায় ২ দিয়ে গুণ করতে হয়: পি-মান = $২ \\times ০.০১৭৯ = ০.০৩৫৮$।',
            },
            math: 'p_{\\text{two-tailed}} = 2 \\times p_{\\text{one-tailed}} = 0.0358',
          },
        ],
        finalAnswer: {
          en: 'One-tailed p-value = 0.0179; Two-tailed p-value = 0.0358.',
          bn: 'একমুখী পি-মান = ০.০১৭৯; দ্বিমুখী পি-মান = ০.০৩৫৮।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Clinical Drug Trials (FDA)', bn: 'ফার্মাসিউটিক্যাল ও ক্লিনিক্যাল ট্রায়াল' },
        example: {
          en: 'Requiring $p < 0.05$ across randomized controlled trials before approving a new pharmaceutical drug.',
          bn: 'নতুন কোনো ওষুধের কার্যকারিতা নিশ্চিত করতে $p < ০.০৫$ এর মাধ্যমে প্লাসিবোকে বাতিল করা।',
        },
      },
      {
        field: { en: 'Tech A/B Testing', bn: 'ওয়েব প্ল্যাটফর্ম ও টেক এ/বি টেস্ট' },
        example: {
          en: 'Testing whether changing checkout button color significantly improves user purchase completion rate.',
          bn: 'চেকআউট বাটনের রঙ পরিবর্তন ব্যবহারকারীর ক্রয় হার উল্লেখযোগ্যভাবে বাড়ায় কি না তা যাচাই।',
        },
      },
    ],
    interactiveToolId: 'hypothesis-test-visualizer',
    pythonCode: `from scipy import stats

# Battery example: H0: mu=24, n=64, x_bar=23.4, sigma=2
z_stat = (23.4 - 24) / (2 / (64**0.5))
p_val = stats.norm.cdf(z_stat) # Left tail

print(f"Z-Statistic: {z_stat:.2f}")
print(f"p-Value: {p_val:.4f}")
print("Reject H0" if p_val < 0.05 else "Fail to reject H0")`,
    rCode: `z_stat <- (23.4 - 24) / (2 / sqrt(64))
p_val <- pnorm(z_stat)
cat("Z-stat:", z_stat, "\\np-value:", p_val, "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Thinking that a p-value is "the probability that the null hypothesis is true".',
          bn: 'মনে করা যে পি-মান হলো "নাস্তিক প্রকল্প সত্য হওয়ার সম্ভাব্যতা"।',
        },
        correct: {
          en: 'The p-value is $P(\\text{Data} | H_0)$, NOT $P(H_0 | \\text{Data})$. It assumes $H_0$ is true and measures how surprising the sample data is.',
          bn: 'পি-মান হলো $P(\\text{Data} | H_০)$, $P(H_০ | \\text{Data})$ নয়। এটি নাস্তিক প্রকল্পকে সত্য ধরে নিয়ে উপাত্ত কতটা অপ্রত্যাশিত তা নির্দেশ করে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'A small p-value ($p \\le \\alpha$) indicates that the observed sample would be extremely unlikely if $H_0$ were true, justifying its rejection.',
        bn: 'ছোট পি-মান ($p \\le \\alpha$) প্রমাণ করে যে নাস্তিক প্রকল্প সত্য হলে এমন নমুনা ফলাফল ঘটার সম্ভাবনা অতি নগণ্য, যা তাকে প্রত্যাখ্যানের ভিত্তি দেয়।',
      },
      {
        en: 'Statistical significance does not automatically guarantee practical or clinical importance (effect size matters!).',
        bn: 'পরিসংখ্যানিক তাৎপর্য থাকা মানেই তা বাস্তব জীবনেও বিরাট কার্যকরী বা গুরুত্বপূর্ণ হবে তা নয় (ইফেক্ট সাইজ দেখা জরুরি)।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q13-1',
        question: {
          en: 'What occurs when a researcher rejects a null hypothesis that is actually true in reality?',
          bn: 'বাস্তবে সত্য এমন একটি নাস্তিক প্রকল্পকে যখন একজন গবেষক ভুলবশত প্রত্যাখ্যান করেন, তখন কোন ত্রুটি ঘটে?',
        },
        options: [
          { en: 'Type I Error (False Positive)', bn: 'প্রথম প্রকার ত্রুটি বা টাইপ-১ (Type I Error)' },
          { en: 'Type II Error (False Negative)', bn: 'দ্বিতীয় প্রকার ত্রুটি বা টাইপ-২ (Type II Error)' },
          { en: 'Sampling Variance', bn: 'নমুনায়ন ভেদাঙ্ক' },
          { en: 'Statistical Power', bn: 'পরিসংখ্যানিক ক্ষমতা' },
        ],
        correctIndex: 0,
        explanation: {
          en: 'A Type I error is a false positive: concluding there is an effect or difference when in reality none exists.',
          bn: 'টাইপ-১ ত্রুটি হলো একটি ফলস পজিটিভ: বাস্তবে কোনো প্রভাব না থাকা সত্ত্বেও প্রভাব আছে বলে সিদ্ধান্তে আসা।',
        },
      },
    ],
    relatedLessonIds: ['central-limit-theorem', 'confidence-intervals', 'simple-linear-regression'],
  },

  // 14. Confidence Intervals
  {
    id: 'confidence-intervals',
    categoryId: 'inference',
    order: 14,
    title: {
      en: 'Confidence Intervals',
      bn: 'আস্থা ব্যবধি (Confidence Intervals)',
    },
    shortDescription: {
      en: 'Construct and interpret confidence intervals for means and proportions: margin of error, critical values, and true coverage rate.',
      bn: 'গড় ও অনুপাতের জন্য আস্থা ব্যবধি গঠন ও ব্যাখ্যা: মার্জিন অব এরর, সংকট মান এবং প্রকৃত কাভারেজ হার।',
    },
    definition: {
      en: 'A confidence interval is a range of plausible values constructed from sample data that is expected to contain the true unknown population parameter with a specified confidence level (such as 95%).',
      bn: 'আস্থা ব্যবধি হলো নমুনা উপাত্ত থেকে গণনাকৃত এমন একটি সম্ভাব্য মানের ব্যাপ্তি বা পরিসীমা, যা একটি নির্দিষ্ট আস্থা মাত্রায় (যেমন ৯৫%) সামগ্রিক অজানা পরামিতিকে ধারণ করবে বলে প্রত্যাশা করা হয়।',
    },
    whyItMatters: {
      en: 'Point estimates (like "the average recovery is 12 days") hide uncertainty. Confidence intervals ("12 days $\\pm 1.5$ days, 95% CI [10.5, 13.5]") provide an honest, rigorous bound on real-world precision.',
      bn: 'একক বিন্দু মান (যেমন "গড় সুস্থতার সময় ১২ দিন") অনিশ্চয়তাকে গোপন রাখে। কিন্তু আস্থা ব্যবধি ("১০.৫ থেকে ১৩.৫ দিন") বাস্তব অনিশ্চয়তা ও নির্ভুলতার একটি স্বচ্ছ বৈজ্ঞানিক পরিসীমা প্রকাশ করে।',
    },
    level: 'intermediate',
    prerequisites: ['central-limit-theorem', 'normal-distribution'],
    keyTerms: [
      {
        term: { en: 'Confidence Level ($1 - \\alpha$)', bn: 'আস্থা মাত্রা ($1 - \\alpha$)' },
        definition: {
          en: 'The long-run percentage of repeated intervals that will successfully capture the true population parameter (typically 95% or 99%).',
          bn: 'পুনঃপৌনিকভাবে নমুনা নিলে শতকরার কতভাগ ব্যবধি প্রকৃত সমগ্রক পরামিতিকে সফলভাবে অন্তর্ভুক্ত করতে সক্ষম হবে (সাধারণত ৯৫% বা ৯৯%)।',
        },
      },
      {
        term: { en: 'Margin of Error ($ME$)', bn: 'মার্জিন অব এরর বা ভুলের প্রান্তিক সীমা ($ME$)' },
        definition: {
          en: 'The maximum expected difference between the sample statistic and the true parameter: $ME = Z^* \\times \\frac{\\sigma}{\\sqrt{n}}$.',
          bn: 'নমুনা পরিসংখ্যান এবং প্রকৃত পরামিতির মধ্যে সর্বোচ্চ সম্ভাব্য দূরত্বের সীমা: $ME = Z^* \\times \\frac{\\sigma}{\\sqrt{n}}$।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Confidence Interval for the Mean (Known Sigma)', bn: 'গড়ের আস্থা ব্যবধির সূত্র (সিগমা জানা)' },
        latex: '\\text{CI} = \\bar{x} \\pm Z^* \\frac{\\sigma}{\\sqrt{n}} = \\left[ \\bar{x} - Z^* \\frac{\\sigma}{\\sqrt{n}}, \\quad \\bar{x} + Z^* \\frac{\\sigma}{\\sqrt{n}} \\right]',
        explanation: {
          en: 'For 95% confidence, $Z^* = 1.960$. For 99% confidence, $Z^* = 2.576$.',
          bn: '৯৫% আস্থার জন্য সংকট মান $Z^* = ১.৯৬০$; ৯৯% আস্থার জন্য সংকট মান $Z^* = ২.৫৭৬$।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Constructing a 95% Confidence Interval for Employee Salary', bn: 'কর্মচারীদের বেতনের ৯৫% আস্থা ব্যবধি নির্ণয়' },
        problem: {
          en: 'A random sample of $n = 100$ software developers shows an average salary $\\bar{x} = \\$85,000$. The population standard deviation is known to be $\\sigma = \\$10,000$. Construct and interpret a 95% confidence interval for the true mean salary.',
          bn: '$n = ১০০$ জন সফটওয়্যার ইঞ্জিনিয়ারের নমুনার গড় বেতন $\\bar{x} = \\$৮৫,০০০$। সমগ্রকের পরিমিত ব্যবধান $\\sigma = \\$১০,০০০$। প্রকৃত গড় বেতনের জন্য একটি ৯৫% আস্থা ব্যবধি তৈরি করুন ও ব্যাখ্যা করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'For 95% confidence, the critical value $Z^* = 1.96$.',
              bn: '৯৫% আস্থার জন্য সংকট মান $Z^* = ১.৯৬$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Compute standard error: $SE = \\frac{10000}{\\sqrt{100}} = \\frac{10000}{10} = 1000$.',
              bn: 'পরিমিত ভুল: $SE = \\frac{১০,০০০}{\\sqrt{১০০}} = ১,০০০$ ডলার।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Calculate Margin of Error: $ME = 1.96 \\times 1000 = 1960$.',
              bn: 'মার্জিন অব এরর: $ME = ১.৯৬ \\times ১,০০০ = ১,৯৬০$ ডলার।',
            },
            math: 'ME = \\$1,960',
          },
          {
            step: 4,
            text: {
              en: 'Lower bound: $85,000 - 1,960 = 83,040$. Upper bound: $85,000 + 1,960 = 86,960$.',
              bn: 'নিম্নসীমা: ৮৫,০০০ - ১,৯৬০ = ৮৩,০৪০। ঊর্ধ্বসীমা: ৮৫,০০০ + ১,৯৬০ = ৮৬,৯৬০।',
            },
            math: '\\text{95\\% CI} = [\\$83,040, \\; \\$86,960]',
          },
        ],
        finalAnswer: {
          en: 'We are 95% confident that the true population mean developer salary is between $83,040 and $86,960.',
          bn: 'আমরা ৯৫% নিশ্চিত যে প্রকৃত সমগ্রক গড় বেতন ৮৩,০৪০ ডলার থেকে ৮৬,৯৬০ ডলারের মধ্যে অবস্থিত।',
        },
      },
      {
        title: { en: 'Comparing 90%, 95%, and 99% Intervals', bn: '৯০%, ৯৫% ও ৯৯% আস্থা ব্যবধির তুলনা' },
        problem: {
          en: 'Using the same developer data ($\\bar{x} = 85000, SE = 1000$), calculate the Margin of Error for 90% ($Z^* = 1.645$) and 99% ($Z^* = 2.576$) confidence. What is the tradeoff?',
          bn: 'উক্ত উপাত্তে ৯০% ($Z^* = ১.৬৪৫$) এবং ৯৯% ($Z^* = ২.৫৭৬$) আস্থার জন্য ভুলের সীমা বের করুন। এখানে কোন বিষয়টির মধ্যে আপস করতে হয়?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: '90% ME: $1.645 \\times 1000 = \\$1,645$. (Narrower interval [83355, 86645], but lower certainty).',
              bn: '৯০% ME: $১.৬৪৫ \\times ১,০০০ = \\$১,৬৪৫$ (সংকীর্ণ ব্যবধি কিন্তু আস্থার নিশ্চয়তা কম)।',
            },
          },
          {
            step: 2,
            text: {
              en: '99% ME: $2.576 \\times 1000 = \\$2,576$. (Wider interval [82424, 87576], but higher certainty).',
              bn: '৯৯% ME: $২.৫৭৬ \\times ১,০০০ = \\$২,৫৭৬$ (প্রশস্ত ব্যবধি কিন্তু আস্থার নিশ্চয়তা সর্বোচ্চ)।',
            },
          },
        ],
        finalAnswer: {
          en: 'Tradeoff: Higher confidence requires a wider interval. Precision and certainty trade against each other.',
          bn: 'আপস: আস্থার মাত্রা বাড়ালে ব্যবধি প্রশস্ত হয়ে নির্ভুলতার নিখুঁতভাব হ্রাস পায়।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Political Polling', bn: 'নির্বাচনী জনমত সমীক্ষা' },
        example: {
          en: 'A candidate polling at 52% with a $\\pm 3\\%$ margin of error yields a 95% CI of [49%, 55%], indicating a statistical dead heat.',
          bn: 'কোনো প্রার্থীর ভোট ৫২% এবং মার্জিন অব এরর $\\pm ৩\\%$ হলে আস্থা ব্যবধি [৪৯%, ৫৫%], যা তীব্র প্রতিদ্বন্দ্বিতা নির্দেশ করে।',
        },
      },
      {
        field: { en: 'Scientific Replication', bn: 'বৈজ্ঞানিক গবেষণা ও মেটা-অ্যানালাইসিস' },
        example: {
          en: 'Medical meta-analyses display forest plots of confidence intervals across multiple clinical trials to test whether the interval excludes zero effect.',
          bn: 'মেটা-অ্যানালাইসিসে ফরেস্ট প্লটের মাধ্যমে যাচাই করা হয় যে ওষুধের আস্থা ব্যবধি শূন্য প্রভাবকে বাদ দিচ্ছে কি না।',
        },
      },
    ],
    interactiveToolId: 'confidence-interval-visualizer',
    pythonCode: `import scipy.stats as stats
import numpy as np

x_bar = 85000
sigma = 10000
n = 100
confidence = 0.95

se = sigma / np.sqrt(n)
ci = stats.norm.interval(confidence, loc=x_bar, scale=se)

print(f"95% Confidence Interval: [{ci[0]:.2f}, {ci[1]:.2f}]")
print(f"Margin of Error: {ci[1] - x_bar:.2f}")`,
    rCode: `x_bar <- 85000
se <- 10000 / sqrt(100)
z <- qnorm(0.975)
ci <- c(x_bar - z * se, x_bar + z * se)
cat("95% CI: [", ci[1], ",", ci[2], "]\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Saying "there is a 95% probability that the true mean lies inside THIS specific calculated interval".',
          bn: 'বলা যে "প্রকৃত গড় এই নির্দিষ্ট ব্যবধির ভেতরে থাকার সম্ভাবনা ৯৫%"।',
        },
        correct: {
          en: 'The true parameter is a fixed constant, not a random variable. It either is in the interval or it isn\'t. The 95% refers to the process: 95% of all intervals constructed this way will capture the parameter.',
          bn: 'আসল সমগ্রক পরামিতি একটি স্থির ধ্রুবক, কোনো চলক নয়। ৯৫% মূলত পদ্ধতির বিশ্বাসযোগ্যতা: এভাবে তৈরি ১০০টি ব্যবধির ৯৫টিই সত্য মানকে ধারণ করবে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'A confidence interval equals point estimate $\\pm$ margin of error.',
        bn: 'আস্থা ব্যবধি = বিন্দু আকলন $\\pm$ মার্জিন অব এরর।',
      },
      {
        en: 'To make an interval twice as narrow without sacrificing confidence, you must quadruple ($4\\times$) the sample size.',
        bn: 'আস্থা না কমিয়ে ব্যবধি অর্ধেক সংকীর্ণ করতে হলে নমুনার আকার ৪ গুণ বাড়াতে হয়।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q14-1',
        question: {
          en: 'What happens to the width of a confidence interval if the confidence level is increased from 90% to 99% while keeping sample size fixed?',
          bn: 'নমুনার আকার স্থির রেখে আস্থা মাত্রা ৯০% থেকে বাড়িয়ে ৯৯% করা হলে আস্থা ব্যবধির প্রস্থের কী ঘটবে?',
        },
        options: [
          { en: 'The interval becomes narrower', bn: 'ব্যবধিটি আরও সংকীর্ণ বা ছোট হবে' },
          { en: 'The interval becomes wider', bn: 'ব্যবধিটি আরও প্রশস্ত বা বড় হবে' },
          { en: 'The interval remains unchanged', bn: 'ব্যবধিটি অপরিবর্তিত থাকবে' },
          { en: 'The margin of error drops to zero', bn: 'মার্জিন অব এরর শূন্যে নেমে আসবে' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Higher confidence requires a larger critical value $Z^*$ (from 1.645 to 2.576), widening the margin of error and expanding the interval.',
          bn: 'বেশি আস্থার নিশ্চয়তা দিতে সংকট মান $Z^*$ বড় হয় (১.৬৪৫ থেকে ২.৫৭৬), যার ফলে ব্যবধি আরও প্রশস্ত হয়।',
        },
      },
    ],
    relatedLessonIds: ['central-limit-theorem', 'hypothesis-testing', 'correlation'],
  },

  // 15. Correlation
  {
    id: 'correlation',
    categoryId: 'regression',
    order: 15,
    title: {
      en: 'Correlation Analysis',
      bn: 'সহসংশ্লেষ বিশ্লেষণ (Correlation Analysis)',
    },
    shortDescription: {
      en: "Pearson's r, Spearman's rank correlation, scatter plots, direction and strength of linear association, and why correlation is not causation.",
      bn: 'পিয়ারসনের r, স্পিয়ারম্যানের ক্রম সহসংশ্লেষ, স্ক্যাটার প্লট, সম্পর্কের তীব্রতা এবং কেন সহসংশ্লেষ কার্যকারণ সম্পর্ক নয়।',
    },
    definition: {
      en: "Correlation measures the strength and direction of a linear relationship between two quantitative variables, normalized between -1.0 (perfect negative) and +1.0 (perfect positive).",
      bn: 'সহসংশ্লেষ হলো দুটি পরিমাণবাচক চলকের মধ্যকার রৈখিক সম্পর্কের দিক ও তীব্রতার এমন একটি মান যা -১.০ (পূর্ণ ঋণাত্মক) থেকে +১.০ (পূর্ণ ধনাত্মক)-এর মধ্যে সীমাবদ্ধ থাকে।',
    },
    whyItMatters: {
      en: 'Are study hours correlated with exam performance? Is advertising spend correlated with revenue? Correlation is the initial exploratory step in discovering predictive patterns in data.',
      bn: 'পড়ার সময় কি পরীক্ষার ফলের সাথে সম্পর্কযুক্ত? বিজ্ঞাপনের খরচ কি বিক্রির সাথে জড়িত? উপাত্তের মধ্যে পারস্পরিক নিদর্শন ও পূর্বাভাস খোঁজার প্রথম ধাপই হলো সহসংশ্লেষ।',
    },
    level: 'intermediate',
    prerequisites: ['variance-and-std-dev'],
    keyTerms: [
      {
        term: { en: "Pearson's Correlation Coefficient ($r$)", bn: 'পিয়ারসনের সহসংশ্লেষাঙ্ক ($r$)' },
        definition: {
          en: 'Parametric measure of linear association between continuous variables: $-1 \\le r \\le 1$.',
          bn: 'দুটি অবিচ্ছিন্ন চলকের রৈখিক সম্পর্কের পরিমাপক যার মান -১ থেকে +১ এর মধ্যে থাকে।',
        },
      },
      {
        term: { en: "Spearman's Rank Correlation ($\\rho$)", bn: 'স্পিয়ারম্যানের ক্রম সহসংশ্লেষাঙ্ক ($\\rho$)' },
        definition: {
          en: 'Nonparametric measure evaluating monotonic relationships using ranked data, resistant to outliers.',
          bn: 'র্যাঙ্ক বা ক্রমভিত্তিক উপাত্তের একমুখী সম্পর্ক পরিমাপক যা আউটলায়ারের প্রভাবে সহজে নষ্ট হয় না।',
        },
      },
      {
        term: { en: 'Correlation vs Causation', bn: 'সহসংশ্লেষ বনাম কার্যকারণ' },
        definition: {
          en: 'A high correlation simply indicates that two variables move together; it does not prove that one causes the other (confounding variables).',
          bn: 'দুটি চলক একসাথে পরিবর্তিত হলেই একটি অপরটির কারণ প্রমাণিত হয় না; নেপথ্যে তৃতীয় কোনো চলক কাজ করতে পারে।',
        },
      },
    ],
    equations: [
      {
        label: { en: "Pearson's r Formula", bn: 'পিয়ারসনের r এর সূত্র' },
        latex: 'r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}} = \\frac{\\text{Cov}(X, Y)}{s_x s_y}',
        explanation: {
          en: 'Covariance normalized by the product of individual standard deviations.',
          bn: 'সহভেদাঙ্ককে (Covariance) চলকদ্বয়ের পরিমিত ব্যবধানের গুণফল দিয়ে ভাগ করে এককহীন করা হয়।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Calculating Pearson Correlation by Hand', bn: 'হাতে কলমে পিয়ারসনের সহসংশ্লেষাঙ্ক গণনা' },
        problem: {
          en: 'Given study hours ($X$) and test scores ($Y$) for 4 students: (1, 60), (2, 70), (3, 80), (4, 90). Find Pearson\'s correlation coefficient $r$.',
          bn: '৪ জন শিক্ষার্থীর পড়ার সময় ($X$) ও পরীক্ষার নম্বর ($Y$): (১, ৬০), (২, ৭০), (৩, ৮০), (৪, ৯০)। পিয়ারসনের সহসংশ্লেষাঙ্ক $r$ নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Means: $\\bar{x} = \\frac{1+2+3+4}{4} = 2.5$, $\\bar{y} = \\frac{60+70+80+90}{4} = 75$.',
              bn: 'গড়: $\\bar{x} = ২.৫$, $\\bar{y} = ৭৫$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Deviations $(x - \\bar{x})$: -1.5, -0.5, 0.5, 1.5. Deviations $(y - \\bar{y})$: -15, -5, 5, 15.',
              bn: '$(x - \\bar{x})$ এর বিচ্যুতি: -১.৫, -০.৫, ০.৫, ১.৫। $(y - \\bar{y})$ এর বিচ্যুতি: -১৫, -৫, ৫, ১৫।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Product sum: $(-1.5)(-15) + (-0.5)(-5) + (0.5)(5) + (1.5)(15) = 22.5 + 2.5 + 2.5 + 22.5 = 50$.',
              bn: 'গুণফলের সমষ্টি: ২২.৫ + ২.৫ + ২.৫ + ২২.৫ = ৫০।',
            },
          },
          {
            step: 4,
            text: {
              en: '$\\sum (x - \\bar{x})^2 = 2.25 + 0.25 + 0.25 + 2.25 = 5$. $\\sum (y - \\bar{y})^2 = 225 + 25 + 25 + 225 = 500$.',
              bn: '$\\sum (x - \\bar{x})^২ = ৫$। $\\sum (y - \\bar{y})^২ = ৫০০$।',
            },
          },
          {
            step: 5,
            text: {
              en: '$r = \\frac{50}{\\sqrt{5 \\times 500}} = \\frac{50}{\\sqrt{2500}} = \\frac{50}{50} = 1.0$.',
              bn: '$r = \\frac{৫০}{\\sqrt{৫ \\times ৫০০}} = \\frac{৫০}{৫০} = ১.০$।',
            },
            math: 'r = 1.0',
          },
        ],
        finalAnswer: {
          en: '$r = 1.0$, indicating a perfect positive linear relationship.',
          bn: '$r = ১.০$, যা একটি নিখুঁত ধনাত্মক রৈখিক সম্পর্ক প্রকাশ করে।',
        },
      },
      {
        title: { en: 'Lurking Confounder: Ice Cream and Drowning', bn: 'লুকানো চলক: আইসক্রিম বিক্রি ও পানিতে ডুবে যাওয়া' },
        problem: {
          en: 'A coastal town finds a high correlation ($r = 0.85$) between monthly ice cream sales and swimming drownings. Does eating ice cream cause drowning?',
          bn: 'একটি সমুদ্র উপকূলীয় শহরে আইসক্রিম বিক্রি এবং পানিতে ডুবে মৃত্যুর মধ্যে উচ্চ সহসংশ্লেষ ($r = ০.৮৫$) দেখা গেল। আইসক্রিম খাওয়া কি মৃত্যুর কারণ?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Both variables are driven by a third confounding variable: Hot Summer Weather.',
              bn: 'উভয় চলকই একটি গোপন তৃতীয় চলক দ্বারা প্রভাবিত: গ্রীষ্মকালের উচ্চ তাপমাত্রা।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Hot weather causes more ice cream consumption AND more people to swim in the ocean, increasing drownings.',
              bn: 'গরম পড়লে মানুষ আইসক্রিমও বেশি খায়, আবার সমুদ্রে সাঁতার কাটতেও বেশি নামে।',
            },
          },
        ],
        finalAnswer: {
          en: 'No causal link exists between ice cream and drowning; summer temperature is the confounding variable.',
          bn: 'তাদের মাঝে কোনো কার্যকারণ নেই; এটি একটি স্পুরিয়াস বা বিভ্রান্তিকর সম্পর্ক যার মূল কারণ আবহাওয়ার তাপমাত্রা।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Genomics & Medicine', bn: 'জিনোমিক্স ও বায়োইনফরমেটিক্স' },
        example: {
          en: 'Computing correlation matrices across 20,000 gene expressions to detect co-expressed disease networks.',
          bn: 'রোগের জিন শনাক্ত করতে হাজার হাজার জিনের অভিব্যক্তির পারস্পরিক সহসংশ্লেষ ম্যাট্রিক্স তৈরি।',
        },
      },
      {
        field: { en: 'Finance & Portfolio Diversification', bn: 'ফাইন্যান্স ও পোর্টফোলিও বৈচিত্র্যকরণ' },
        example: {
          en: 'Holding assets with negative or low correlation (like stocks and gold) to cushion portfolio risk.',
          bn: 'শেয়ার ও স্বর্ণের মতো বিপরীত বা কম সহসংশ্লেষিত সম্পদ একসাথে রেখে বিনিয়োগের ঝুঁকি হ্রাস করা।',
        },
      },
    ],
    interactiveToolId: 'regression-explorer',
    pythonCode: `import numpy as np

hours = np.array([1, 2, 3, 4])
scores = np.array([60, 70, 80, 90])

r = np.corrcoef(hours, scores)[0, 1]
print(f"Pearson Correlation (r): {r:.4f}")`,
    rCode: `hours <- c(1, 2, 3, 4)
scores <- c(60, 70, 80, 90)
cat("Correlation:", cor(hours, scores), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Assuming that $r = 0$ means there is no relationship of any kind between the variables.',
          bn: 'মনে করা যে $r = ০$ হওয়া মানে চলকদ্বয়ের মধ্যে কোনো ধরনের সম্পর্কই নেই।',
        },
        correct: {
          en: 'Pearson\'s $r$ only detects LINEAR relationships! A perfect parabola ($y = x^2$) has $r = 0$, despite being 100% deterministically related.',
          bn: 'পিয়ারসনের $r$ কেবল রৈখিক সম্পর্ক মাপে! একটি নিখুঁত পরাবৃত্তের ($y = x^২$) ক্ষেত্রে $r = ০$ হতে পারে, যদিও তাদের মধ্যে ১০০% দৃঢ় সম্পর্ক বিদ্যমান।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Correlation measures linear association, bounded strictly within $[-1, +1]$.',
        bn: 'সহসংশ্লেষ রৈখিক সংযোগ পরিমাপ করে এবং এর মান строго $[-১, +১]$ সীমার মধ্যে থাকে।',
      },
      {
        en: 'Correlation does not imply causation: always look for lurking confounders.',
        bn: 'সহসংশ্লেষ কখনোই কার্যকারণ প্রমাণ করে না: লুকানো চলকের উপস্থিতি সর্বদা পরীক্ষা করুন।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q15-1',
        question: {
          en: 'If variable X and variable Y have a correlation coefficient $r = -0.92$, which of the following is true?',
          bn: 'যদি চলক X এবং Y এর মধ্যে সহসংশ্লেষাঙ্ক $r = -০.৯২$ হয়, তবে নিচের কোনটি সত্য?',
        },
        options: [
          { en: 'There is a weak positive linear relationship', bn: 'একটি দুর্বল ধনাত্মক রৈখিক সম্পর্ক আছে' },
          { en: 'There is a strong negative linear relationship', bn: 'একটি তীব্র ঋণাত্মক রৈখিক সম্পর্ক আছে' },
          { en: 'There is zero association', bn: 'কোনো সম্পর্ক নেই' },
          { en: 'An increase in X directly causes Y to drop', bn: 'X বৃদ্ধির কারণেই Y সরাসরি হ্রাস পায়' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'An $r$ value close to -1 (-0.92) indicates a strong negative linear association: as one variable rises, the other predictably decreases.',
          bn: '-১ এর কাছাকাছি মান (-০.৯২) নির্দেশ করে যে একটি তীব্র ঋণাত্মক রৈখিক সম্পর্ক রয়েছে: একটি বাড়লে অন্যটি নিয়ম মেনে কমে।',
        },
      },
    ],
    relatedLessonIds: ['variance-and-std-dev', 'simple-linear-regression', 'exploratory-data-analysis'],
  },

  // 16. Simple Linear Regression
  {
    id: 'simple-linear-regression',
    categoryId: 'regression',
    order: 16,
    title: {
      en: 'Simple Linear Regression',
      bn: 'সরল রৈখিক নির্ভরণ (Simple Linear Regression)',
    },
    shortDescription: {
      en: 'Ordinary Least Squares (OLS), slope and intercept, line of best fit, residuals, and coefficient of determination R-squared.',
      bn: 'সর্বনিম্ন বর্গ পদ্ধতি (OLS), ঢাল ও ছেদক, সর্বোত্তম রেখা, অবশিষ্ট বা রেসিডুয়াল এবং নির্ণায়ক সহগ R-স্কয়ার।',
    },
    definition: {
      en: 'Simple Linear Regression models the relationship between a single independent predictor variable ($X$) and a continuous dependent target variable ($Y$) by fitting a straight line: $\\hat{y} = \\beta_0 + \\beta_1 x$.',
      bn: 'সরল রৈখিক নির্ভরণ হলো একটি স্বাধীন চলক ($X$) এবং একটি অবিচ্ছিন্ন নির্ভরশীল চলকের ($Y$) মধ্যকার সম্পর্ককে একটি সরলরেখা $\\hat{y} = \\beta_০ + \\beta_১ x$ দ্বারা প্রকাশ করার গাণিতিক মডেল।',
    },
    whyItMatters: {
      en: 'Regression transitions statistics from describing associations into making quantitative predictions. It is the grandfather of all predictive machine learning and econometric forecasting.',
      bn: 'নির্ভরণ কেবল সম্পর্ক বর্ণনার গণ্ডি পেরিয়ে ভবিষ্যতে নিখুঁত সাংখ্যিক পূর্বাভাস দিতে সক্ষম। এটি মেশিন লার্নিং ও আধুনিক অর্থনৈতিক পূর্বাভাসের মূল ভিত্তি।',
    },
    level: 'intermediate',
    prerequisites: ['correlation'],
    keyTerms: [
      {
        term: { en: 'Slope ($\\beta_1$)', bn: 'ঢাল বা স্লিপ ($\\beta_1$)' },
        definition: {
          en: 'The expected change in $Y$ for every one-unit increase in $X$: $\\beta_1 = r \\frac{s_y}{s_x}$.',
          bn: '$X$-এর মান এক একক বাড়লে $Y$-এর মানে যে প্রত্যাশিত পরিবর্তন ঘটে।',
        },
      },
      {
        term: { en: 'Intercept ($\\beta_0$)', bn: 'ছেদক বা ইন্টারসেপ্ট ($\\beta_0$)' },
        definition: {
          en: 'The expected value of $Y$ when $X = 0$: $\\beta_0 = \\bar{y} - \\beta_1 \\bar{x}$.',
          bn: 'যখন স্বাধীন চলক $X = ০$ হয়, তখন $Y$-এর প্রত্যাশিত ভিত্তি মান।',
        },
      },
      {
        term: { en: 'Coefficient of Determination ($R^2$)', bn: 'নির্ণায়ক সহগ ($R^2$)' },
        definition: {
          en: 'The proportion of total variance in the dependent variable $Y$ that is explained by the regression line: $0 \\le R^2 \\le 1$.',
          bn: 'নির্ভরশীল চলক $Y$-এর মোট পরিবর্তনের কত শতাংশ নির্ভরণ রেখা দ্বারা ব্যাখ্যা করা যায়।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Ordinary Least Squares (OLS) Estimators', bn: 'সর্বনিম্ন বর্গ পদ্ধতির পরামিতি আকলক' },
        latex: '\\hat{\\beta}_1 = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum (x_i - \\bar{x})^2}, \\quad \\hat{\\beta}_0 = \\bar{y} - \\hat{\\beta}_1 \\bar{x}',
        explanation: {
          en: 'Minimizes the sum of squared vertical residuals $\\sum (y_i - \\hat{y}_i)^2$.',
          bn: 'উল্লম্ব অবশিষ্টগুলোর বর্গের সমষ্টি $\\sum (y_i - \\hat{y}_i)^২$ কে সর্বনিম্ন করে।',
        },
      },
      {
        label: { en: 'Prediction Equation', bn: 'পূর্বাভাস সমীকরণ' },
        latex: '\\hat{y} = \\hat{\\beta}_0 + \\hat{\\beta}_1 x',
        explanation: {
          en: 'Used to predict continuous values of $\\hat{y}$ for any input $x$.',
          bn: 'যেকোনো ইনপুট $x$-এর জন্য নির্ভরশীল চলক $\\hat{y}$-এর মান পূর্বাভাস করার সূত্র।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Fitting an OLS Regression Model', bn: 'একটি OLS নির্ভরণ মডেল গঠন' },
        problem: {
          en: 'Data: Years of Experience ($X$) vs Salary in thousands ($Y$): (1, 50), (2, 55), (3, 65), (4, 70). Fit the OLS regression equation and predict the salary for 5 years of experience.',
          bn: 'অভিজ্ঞতার বছর ($X$) এবং বেতন হাজারে ($Y$): (১, ৫০), (২, ৫৫), (৩, ৬৫), (৪, ৭০)। নির্ভরণ সমীকরণ গঠন করুন এবং ৫ বছরের অভিজ্ঞতার জন্য বেতন পূর্বাভাস দিন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: '$\\bar{x} = 2.5, \\bar{y} = 60$.',
              bn: 'গড়: $\\bar{x} = ২.৫, \\bar{y} = ৬০$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Calculate $\\sum (x - \\bar{x})(y - \\bar{y}) = (-1.5)(-10) + (-0.5)(-5) + (0.5)(5) + (1.5)(10) = 15 + 2.5 + 2.5 + 15 = 35$.',
              bn: 'লব: ১৫ + ২.৫ + ২.৫ + ১৫ = ৩৫।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Calculate $\\sum (x - \\bar{x})^2 = 2.25 + 0.25 + 0.25 + 2.25 = 5$.',
              bn: 'হর: ২.২৫ + ০.২৫ + ০.২৫ + ২.২৫ = ৫।',
            },
          },
          {
            step: 4,
            text: {
              en: 'Slope $\\hat{\\beta}_1 = \\frac{35}{5} = 7$. Intercept $\\hat{\\beta}_0 = 60 - (7)(2.5) = 60 - 17.5 = 42.5$.',
              bn: 'ঢাল $\\hat{\\beta}_১ = \\frac{৩৫}{৫} = ৭$। ছেদক $\\hat{\\beta}_০ = ৬০ - ৭(২.৫) = ৪২.৫$।',
            },
            math: '\\hat{y} = 42.5 + 7x',
          },
          {
            step: 5,
            text: {
              en: 'Predict for $x = 5$: $\\hat{y} = 42.5 + 7(5) = 42.5 + 35 = 77.5$k.',
              bn: '$x = ৫$ এর জন্য পূর্বাভাস: $\\hat{y} = ৪২.৫ + ৭(৫) = ৭৭.৫$ হাজার ডলার।',
            },
            math: '\\hat{y}_{x=5} = 77.5',
          },
        ],
        finalAnswer: {
          en: 'Regression line: $\\hat{y} = 42.5 + 7x$. Predicted salary for 5 years = $77,500.',
          bn: 'নির্ভরণ সমীকরণ: $\\hat{y} = ৪২.৫ + ৭x$। ৫ বছরের অভিজ্ঞতায় প্রত্যাশিত বেতন ৭৭,৫০০ ডলার।',
        },
      },
      {
        title: { en: 'Interpreting R-Squared', bn: 'R-স্কয়ারের বাস্তব ব্যাখ্যা' },
        problem: {
          en: 'A regression model predicting house prices from square footage has $R^2 = 0.81$. Interpret this value in plain language.',
          bn: 'বাড়ির আয়তনের ওপর ভিত্তি করে দাম পূর্বাভাসের একটি মডেলে $R^২ = ০.৮১$ পাওয়া গেল। সহজ ভাষায় এর অর্থ ব্যাখ্যা করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: '$R^2 = 0.81$ means that 81% of the variation in house prices is directly explained by square footage.',
              bn: '$R^২ = ০.৮১$ এর অর্থ হলো বাড়ির দামের মোট তারতম্য বা পরিবর্তনের ৮১% সরাসরি বাড়ির আয়তন দ্বারা ব্যাখ্যা করা যায়।',
            },
          },
          {
            step: 2,
            text: {
              en: 'The remaining 19% of variation is due to unmodeled factors like neighborhood, age of house, or random noise.',
              bn: 'বাকি ১৯% তারতম্য অন্যান্য উপাদান যেমন এলাকার অবস্থান, নির্মাণকাল বা অন্য প্রভাবকের কারণে ঘটে।',
            },
          },
        ],
        finalAnswer: {
          en: '81% of the variation in home prices is explained by size; 19% remains unexplained error.',
          bn: 'বাড়ির দামের ৮১% তারতম্য আয়তন দ্বারা ব্যাখ্যাযোগ্য; ১৯% অবশিষ্ট উপাদান দ্বারা প্রভাবিত।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Real Estate Valuation', bn: 'রিয়েল এস্টেট মূল্যায়ন' },
        example: {
          en: 'Automated valuation models (like Zillow Zestimates) predicting property prices based on square footage.',
          bn: 'আয়তন ও অবস্থানের তথ্যের ভিত্তিতে স্বয়ংক্রিয়ভাবে অ্যাপার্টমেন্ট বা ফ্ল্যাটের মূল্য নির্ধারণ।',
        },
      },
      {
        field: { en: 'Sales & Marketing Forecasting', bn: 'বিক্রয় ও বিপণন পূর্বাভাস' },
        example: {
          en: 'Estimating incremental product revenue generated for each additional $1,000 invested in digital marketing.',
          bn: 'বিজ্ঞাপনে প্রতি ১,০০০ ডলার অতিরিক্ত বিনিয়োগে কতটুকু বাড়তি আয় হবে তা মডেল করা।',
        },
      },
    ],
    interactiveToolId: 'regression-explorer',
    pythonCode: `import numpy as np
from sklearn.linear_model import LinearRegression

# Training data
X = np.array([1, 2, 3, 4]).reshape(-1, 1) # Experience
y = np.array([50, 55, 65, 70])             # Salary (k)

model = LinearRegression()
model.fit(X, y)

print(f"Slope (beta_1): {model.coef_[0]:.2f}")
print(f"Intercept (beta_0): {model.intercept_:.2f}")
print(f"R-squared: {model.score(X, y):.4f}")

# Prediction for 5 years
pred = model.predict([[5]])
print("Predicted salary for 5 years: $" + str(round(pred[0], 2)) + "k")`,
    rCode: `x <- c(1, 2, 3, 4)
y <- c(50, 55, 65, 70)
fit <- lm(y ~ x)
summary(fit)
predict(fit, newdata = data.frame(x = 5))`,
    commonMistakes: [
      {
        mistake: {
          en: 'Extrapolating predictions far outside the range of observed data.',
          bn: 'পর্যবেক্ষণকৃত উপাত্তের সীমার অনেক বাইরে অবাস্তব এক্সট্রাপোলেশন বা পূর্বাভাস করা।',
        },
        correct: {
          en: 'A regression line fitted to 1-4 years of experience cannot reliably predict the salary of someone with 35 years of experience, where growth typically levels off.',
          bn: '১ থেকে ৪ বছরের অভিজ্ঞতার মডেলে ৩৫ বছরের অভিজ্ঞতার বেতন পূর্বাভাস দিলে ভুল হওয়ার সম্ভাবনা থাকে, কারণ বাস্তব জীবনে সময়ের সাথে সাথে বৃদ্ধির হার কমে যায়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'OLS finds the best-fit line by minimizing the sum of squared residuals: $\\sum (y - \\hat{y})^2$.',
        bn: 'সর্বনিম্ন বর্গ পদ্ধতি প্রতিটি বিন্দুর দূরত্বের বর্গের সমষ্টিকে সর্বনিম্ন করে সর্বোত্তম সরলরেখা খুঁজে বের করে।',
      },
      {
        en: 'In simple linear regression, $R^2$ is exactly the square of Pearson\'s correlation coefficient ($r^2$).',
        bn: 'সরল রৈখিক নির্ভরণে $R^২$ হলো হুবহু পিয়ারসনের সহসংশ্লেষাঙ্কের বর্গ ($r^২$)।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q16-1',
        question: {
          en: 'If a simple linear regression equation is $\\hat{y} = 10 + 3x$, what is the predicted change in $y$ when $x$ increases by 2 units?',
          bn: 'যদি সরল রৈখিক নির্ভরণ সমীকরণ $\\hat{y} = ১০ + ৩x$ হয়, তবে $x$-এর মান ২ একক বাড়লে $y$-এর মানে কতটুকু পরিবর্তন ঘটবে?',
        },
        options: [
          { en: 'Increases by 3', bn: '৩ বৃদ্ধি পাবে' },
          { en: 'Increases by 6', bn: '৬ বৃদ্ধি পাবে' },
          { en: 'Increases by 16', bn: '১৬ বৃদ্ধি পাবে' },
          { en: 'Decreases by 3', bn: '৩ হ্রাস পাবে' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'The slope is 3, which means $y$ increases by 3 for each single unit of $x$. For 2 units, change = $3 \\times 2 = 6$.',
          bn: 'ঢাল ৩ মানে $x$ প্রতি ১ একক বৃদ্ধিতে $y$ ৩ বাড়ে। সুতরাং ২ একক বাড়লে পরিবর্তন হবে $৩ \\times ২ = ৬$।',
        },
      },
    ],
    relatedLessonIds: ['correlation', 'python-statistical-analysis', 'intro-to-machine-learning'],
  },

  // 17. Python for Statistical Analysis
  {
    id: 'python-statistical-analysis',
    categoryId: 'coding-labs',
    order: 17,
    title: {
      en: 'Python for Statistical Analysis',
      bn: 'পরিসংখ্যানিক বিশ্লেষণে পাইথন (Python for Statistics)',
    },
    shortDescription: {
      en: 'NumPy arrays, Pandas DataFrames, summary statistics, SciPy hypothesis tests, and Seaborn data visualization.',
      bn: 'নামপাই অ্যারে, প্যান্ডাস ডেটাফ্রেম, সংক্ষিপ্ত পরিসংখ্যান, সাইপাই হাইপোথিসিস টেস্টিং এবং সিবর্ন চার্ট তৈরি।',
    },
    definition: {
      en: 'Python is the world\'s leading open-source programming language for data science, equipped with high-performance numerical and statistical libraries like NumPy, Pandas, SciPy, and Statsmodels.',
      bn: 'পাইথন হলো ডেটা সায়েন্স ও পরিসংখ্যানের জন্য বিশ্বের শীর্ষস্থানীয় প্রোগ্রামিং ভাষা, যা নামপাই, প্যান্ডাস, সাইপাই এবং স্ট্যাটসমডেলসের মতো শক্তিশালী লাইব্রেরির সমন্বয়ে গঠিত।',
    },
    whyItMatters: {
      en: 'Calculations on millions of rows can take hours in spreadsheets and crash computers. Python executes vectorized mathematical operations across gigabytes of data in milliseconds with reproducible scripts.',
      bn: 'লাখ লাখ উপাত্ত স্প্রেডশিটে প্রক্রিয়া করতে গেলে কম্পিউটার হ্যাং হতে পারে। পাইথনে মাত্র কয়েক লাইনের ভেক্টরাইজড কোড দিয়ে চোখের পলকে কোটি কোটি উপাত্ত বিশ্লেষণ করা যায়।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'NumPy Array', bn: 'নামপাই অ্যারে (ndarray)' },
        definition: {
          en: 'Homogeneous, n-dimensional array structure optimized in C for ultra-fast vectorized mathematical calculations.',
          bn: 'সি-ভাষায় অপ্টিমাইজ করা সমজাতীয় বহু-মাত্রিক অ্যারে যা দ্রুততম গাণিতিক হিসাব সম্পন্ন করে।',
        },
      },
      {
        term: { en: 'Pandas DataFrame', bn: 'প্যান্ডাস ডেটাফ্রেম (DataFrame)' },
        definition: {
          en: 'Two-dimensional labeled tabular data structure with columns of potentially different types, resembling an SQL table or Excel sheet.',
          bn: 'দ্বিমাত্রিক সারণি উপাত্ত কাঠামো যাতে বিভিন্ন ধরনের কলাম ও সূচক সহজে ফিল্টার ও বিশ্লেষণ করা যায়।',
        },
      },
      {
        term: { en: 'SciPy Stats', bn: 'সাইপাই স্ট্যাটস (scipy.stats)' },
        definition: {
          en: 'Comprehensive scientific module containing probability distributions, hypothesis tests, and statistical functions.',
          bn: 'সম্ভাব্যতা বণ্টন ও হাইপোথিসিস টেস্টের জন্য পাইথনের সমৃদ্ধ বৈজ্ঞানিক সাব-মডিউল।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Vectorized Mean in NumPy', bn: 'নামপাই ভেক্টরাইজড গড়' },
        latex: '\\bar{x} = \\texttt{np.mean(arr)} = \\frac{1}{n} \\sum_{i=1}^n \\text{arr}[i]',
        explanation: {
          en: 'Executes without slow Python for-loops via compiled SIMD instructions.',
          bn: 'লুপ ছাড়াই মেমরিতে সরাসরি দ্রুততম উপায়ে গড় হিসাব সম্পন্ন করে।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'End-to-End Two-Sample t-test in Python', bn: 'পাইথনে দুই-নমুনা টি-টেস্ট সম্পন্নকরণ' },
        problem: {
          en: 'Given test scores of Group A (new teaching method) and Group B (standard method), determine whether Group A scored significantly higher.',
          bn: 'গ্রুপ A (নতুন পাঠদান পদ্ধতি) এবং গ্রুপ B (সাধারণ পদ্ধতি) এর শিক্ষার্থীদের নম্বরের মধ্যে তাৎপর্যপূর্ণ পার্থক্য আছে কি না পাইথনে পরীক্ষা করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Create numpy arrays for both groups.',
              bn: 'উভয় গ্রুপের জন্য নামপাই অ্যারে তৈরি করি।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Call `scipy.stats.ttest_ind(group_a, group_b)`.',
              bn: 'সাইপাই-এর `stats.ttest_ind()` ফাংশন কল করি।',
            },
          },
        ],
        finalAnswer: {
          en: 'Returns t-statistic and p-value. If p < 0.05, Group A is significantly different.',
          bn: 'ফাংশনটি টি-মান ও পি-মান প্রদান করে। পি < ০.০৫ হলে পার্থক্যটি পরিসংখ্যানগতভাবে তাৎপর্যপূর্ণ।',
        },
      },
      {
        title: { en: 'Summary Statistics with Pandas', bn: 'প্যান্ডাসের মাধ্যমে সামগ্রিক পরিসংখ্যান' },
        problem: {
          en: 'How to compute 5-number summaries, mean, standard deviation, and count in one line of Python?',
          bn: 'পাইথনে এক লাইনের কোডে ৫-সংখ্যার সংক্ষিপ্তসার, গড়, পরিমিত ব্যবধান ও উপাত্ত সংখ্যা কীভাবে বের করবেন?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Use `df["column_name"].describe()`.',
              bn: 'প্যান্ডাসের `df["কলাম"].describe()` কমান্ড ব্যবহার করুন।',
            },
          },
        ],
        finalAnswer: {
          en: 'Generates count, mean, std, min, 25%, 50% (median), 75%, and max instantly.',
          bn: 'নিমেষেই গণনা, গড়, পরিমিত ব্যবধান, সর্বনিম্ন, চতুর্থাংশসমূহ ও সর্বোচ্চ মান প্রদর্শিত হয়।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Big Data Pipeline Engineering', bn: 'বিগ ডেটা পাইপলাইন' },
        example: {
          en: 'Cleaning, imputing missing values, and generating descriptive dashboards over millions of records.',
          bn: 'লক্ষ লক্ষ রেকর্ডের মিসিং ডেটা পূরণ ও স্বয়ংক্রিয় পরিসংখ্যানিক ড্যাশবোর্ড তৈরি।',
        },
      },
      {
        field: { en: 'Quantitative Finance', bn: 'কোয়ান্টিটেটিভ ফাইন্যান্স' },
        example: {
          en: 'Backtesting automated trading models and computing rolling Sharpe ratios.',
          bn: 'শেয়ার বাজারের অতীত উপাত্তে ট্রেডিং মডেল যাচাই ও রোলিং শার্প রেশিও নির্ধারণ।',
        },
      },
    ],
    pythonCode: `import numpy as np
import pandas as pd
from scipy import stats

# Generate sample dataset
np.random.seed(42)
control = np.random.normal(loc=70, scale=10, size=50)
treatment = np.random.normal(loc=76, scale=10, size=50)

# Two-sample independent t-test
t_stat, p_val = stats.ttest_ind(treatment, control)

print(f"Treatment Mean: {np.mean(treatment):.2f}")
print(f"Control Mean: {np.mean(control):.2f}")
print(f"t-statistic: {t_stat:.3f}, p-value: {p_val:.5f}")
if p_val < 0.05:
    print("Conclusion: Statistically significant improvement!")`,
    rCode: `# Equivalent in R
set.seed(42)
control <- rnorm(50, mean = 70, sd = 10)
treatment <- rnorm(50, mean = 76, sd = 10)
t.test(treatment, control)`,
    commonMistakes: [
      {
        mistake: {
          en: 'Forgetting that `np.std()` uses `ddof=0` (population) by default, while Pandas uses `ddof=1` (sample).',
          bn: 'নামপাই `np.std()` বাই-ডিফল্ট সমগ্রক ($n$) ব্যবহার করে, আর প্যান্ডাস নমুনা ($n-১$) ব্যবহার করে।',
        },
        correct: {
          en: 'Always pass `ddof=1` in NumPy when computing sample standard deviation: `np.std(data, ddof=1)`.',
          bn: 'নমুনার পরিমিত ব্যবধান বের করার সময় নামপাইতে অবশ্যই `ddof=1` প্যারামিটার ব্যবহার করুন।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'NumPy powers fast vector math; Pandas handles structured tabular data; SciPy provides rigorous statistical tests.',
        bn: 'নামপাই দ্রুততম ভেক্টর গণনায় পারদর্শী, প্যান্ডাস সারণিবদ্ধ উপাত্ত নিয়ন্ত্রণ করে এবং সাইপাই পরিসংখ্যানিক টেস্ট সম্পন্ন করে।',
      },
      {
        en: 'Reproducible script-based statistical analysis ensures auditability in scientific and industry research.',
        bn: 'স্ক্রিপ্ট-ভিত্তিক পাইথন বিশ্লেষণ গবেষণার স্বচ্ছতা ও ফলাফল পুনঃউৎপাদনযোগ্যতা নিশ্চিত করে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q17-1',
        question: {
          en: 'Which Python function from SciPy computes a two-sample independent t-test?',
          bn: 'সাইপাই (SciPy) এর কোন ফাংশনটি দুই-নমুনার স্বাধীন টি-টেস্ট সম্পন্ন করে?',
        },
        options: [
          { en: 'stats.ttest_1samp()', bn: 'stats.ttest_1samp()' },
          { en: 'stats.ttest_ind()', bn: 'stats.ttest_ind()' },
          { en: 'stats.ttest_rel()', bn: 'stats.ttest_rel()' },
          { en: 'stats.chisquare()', bn: 'stats.chisquare()' },
        ],
        correctIndex: 1,
        explanation: {
          en: '`stats.ttest_ind()` performs an independent two-sample t-test, whereas `ttest_1samp` is for one sample and `ttest_rel` is for paired samples.',
          bn: '`stats.ttest_ind()` দুটি স্বাধীন নমুনার টি-টেস্ট করে; `ttest_1samp` এক নমুনার জন্য এবং `ttest_rel` জোড়ায় জোড়ায় নমুনার জন্য ব্যবহৃত হয়।',
        },
      },
    ],
    relatedLessonIds: ['r-statistical-analysis', 'exploratory-data-analysis', 'simple-linear-regression'],
  },

  // 18. R for Statistical Analysis
  {
    id: 'r-statistical-analysis',
    categoryId: 'coding-labs',
    order: 18,
    title: {
      en: 'R for Statistical Analysis',
      bn: 'পরিসংখ্যানিক বিশ্লেষণে আর প্রোগ্রামিং (R Programming)',
    },
    shortDescription: {
      en: 'R vectors, data frames, dplyr data manipulation, ggplot2 publication-grade visualizations, and built-in modeling.',
      bn: 'আর ভেক্টর, ডেটাফ্রেম, ডিপ্লাইয়ার দিয়ে উপাত্ত প্রক্রিয়াকরণ, জিজিপ্লট২ চার্ট এবং বিল্ট-ইন লিনিয়ার মডেল।',
    },
    definition: {
      en: 'R is a specialized programming language and software environment specifically developed by statisticians, for statisticians, renowned for its unparalleled mathematical elegance and ggplot2 visualization grammar.',
      bn: 'আর (R) হলো পরিসংখ্যানবিদদের দ্বারা বিশেষভাবে তৈরি প্রোগ্রামিং ভাষা ও সফটওয়্যার পরিবেশ, যা পরিসংখ্যানিক গণনা, গবেষণা প্রকাশনা এবং জিজিপ্লট২ ভিজ্যুয়ালাইজেশনের জন্য বিশ্বখ্যাত।',
    },
    whyItMatters: {
      en: 'Unlike general-purpose languages where statistical tests require third-party libraries, R has statistics built into its native syntax. It is the language of choice in biostatistics, clinical epidemiology, and academic papers.',
      bn: 'অন্যান্য সাধারণ ভাষার মতো এতে বাড়তি লাইব্রেরি যোগ করার বাধ্যবাধকতা কম; আর-এর মূল সিনট্যাক্সেই পরিসংখ্যানের সব সূত্র সরাসরি গেঁথে দেওয়া আছে। বিশ্বজুড়ে বায়োস্ট্যাটিস্টিক্স ও বৈজ্ঞানিক গবেষণায় এটিই প্রধান মানদণ্ড।',
    },
    level: 'beginner',
    prerequisites: ['intro-to-statistics'],
    keyTerms: [
      {
        term: { en: 'Vector', bn: 'ভেক্টর (Vector)' },
        definition: {
          en: 'The core fundamental 1D data structure in R containing elements of the same basic data type.',
          bn: 'আর প্রোগ্রামিংয়ের মৌলিক এক-মাত্রিক উপাত্ত কাঠামো যাতে একই প্রকার উপাদান থাকে।',
        },
      },
      {
        term: { en: 'dplyr', bn: 'ডিপ্লাইয়ার (dplyr)' },
        definition: {
          en: 'Grammar of data manipulation featuring verbs like filter(), select(), mutate(), summarise(), and group_by().',
          bn: 'উপাত্তকে সহজে ফিল্টার, বাছাই ও গ্রুপিং করে সংক্ষেপ করার জনপ্রিয় লাইব্রেরি।',
        },
      },
      {
        term: { en: 'ggplot2', bn: 'জিজিপ্লট২ (ggplot2)' },
        definition: {
          en: 'Implementation of the Grammar of Graphics, composing plots through aesthetic mappings and geometric layers.',
          bn: 'উপাত্তকে নান্দনিক লেয়ার এবং জ্যামিতিক কাঠামোর মাধ্যমে দৃষ্টিনন্দন চার্টে রূপান্তরের গ্রাফিক্স সিস্টেম।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'R Linear Model Formula Syntax', bn: 'আর লিনিয়ার মডেল সূত্র সিনট্যাক্স' },
        latex: '\\texttt{lm(formula = Y \\sim X_1 + X_2, data = df)}',
        explanation: {
          en: 'Expresses $Y$ as a function of predictors $X_1$ and $X_2$ natively.',
          bn: 'আর-এ প্রাকৃতিক চিহ্নের মাধ্যমে সরাসরি নির্ভরণ মডেল প্রকাশের নিজস্ব ভাষা।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Analyzing the Built-in mtcars Dataset', bn: 'বিল্ট-ইন mtcars ডেটাসেট বিশ্লেষণ' },
        problem: {
          en: 'Fit a linear model predicting miles per gallon (mpg) from car weight (wt) in R.',
          bn: 'আর-এ গাড়ির ওজন (wt) দিয়ে মাইলেজ (mpg) পূর্বাভাসের একটি লিনিয়ার মডেল তৈরি করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Execute `model <- lm(mpg ~ wt, data = mtcars)`.',
              bn: '`model <- lm(mpg ~ wt, data = mtcars)` কোড রান করি।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Call `summary(model)` to inspect t-statistics, p-values, and R-squared.',
              bn: '`summary(model)` এর মাধ্যমে ফলাফল, সহগ ও আর-স্কয়ার পর্যবেক্ষণ করি।',
            },
          },
        ],
        finalAnswer: {
          en: 'Yields slope ~ -5.34 (each 1000lb increase in weight drops fuel economy by 5.34 mpg), p < 0.001.',
          bn: 'প্রতি ১,০০০ পাউন্ড ওজন বৃদ্ধিতে মাইলেজ ৫.৩৪ কমে যায় এবং সম্পর্কটি অত্যন্ত তাৎপর্যপূর্ণ ($p < ০.০০১$)।',
        },
      },
      {
        title: { en: 'Data Wrangling with Pipe (%>%)', bn: 'পাইপ অপারেটর দিয়ে উপাত্ত রূপান্তর' },
        problem: {
          en: 'How to filter high-mileage cars and compute average horsepower by cylinder count?',
          bn: 'বেশি মাইলেজের গাড়ি ফিল্টার করে সিলিন্ডার অনুযায়ী গড় হর্সপাওয়ার কীভাবে বের করবেন?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Use `mtcars %>% filter(mpg > 20) %>% group_by(cyl) %>% summarise(mean_hp = mean(hp))`.',
              bn: 'ডিপ্লাইয়ারের পাইপ লাইন দিয়ে ফিল্টার, গ্রুপিং ও গড়ের কোড লিখি।',
            },
          },
        ],
        finalAnswer: {
          en: 'Clean, pipeline-oriented code produces aggregate summaries instantly.',
          bn: 'পরিচ্ছন্ন পাইপলাইন কাঠামোর মাধ্যমে তাৎক্ষণিক ফলাফল পাওয়া যায়।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Biostatistics & Clinical Trials', bn: 'বায়োস্ট্যাটিস্টিক্স ও ক্লিনিক্যাল ট্রায়াল' },
        example: {
          en: 'Producing regulatory drug submission documents approved by global health organizations.',
          bn: 'ঔষধ প্রশাসন ও বিশ্ব স্বাস্থ্য সংস্থার কাছে ক্লিনিক্যাল গবেষণার তথ্য জমা দিতে আর প্যাকেজের ব্যবহার।',
        },
      },
      {
        field: { en: 'Econometrics & Environmental Studies', bn: 'অর্থনীতি ও পরিবেশ বিজ্ঞান' },
        example: {
          en: 'Time-series spatial analysis of climate temperature deviations across global weather stations.',
          bn: 'আবহাওয়া কেন্দ্রের জলবায়ু পরিবর্তনের কালীন সারি ও স্থানিক উপাত্ত বিশ্লেষণ।',
        },
      },
    ],
    pythonCode: `# Equivalent in Python statsmodels
import statsmodels.api as sm
import statsmodels.formula.api as smf

# Using formula syntax identical to R
# model = smf.ols('mpg ~ wt', data=df).fit()
# print(model.summary())`,
    rCode: `# Complete R statistical workflow
data(mtcars)

# Linear regression
fit <- lm(mpg ~ wt, data = mtcars)
summary_fit <- summary(fit)

cat("Slope (wt effect):", coef(fit)["wt"], "\\n")
cat("R-squared:", summary_fit$r.squared, "\\n")
cat("p-value:", summary_fit$coefficients["wt", "Pr(>|t|)"], "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Confusing 1-based indexing in R with 0-based indexing in Python.',
          bn: 'আর-এর ১-ভিত্তিক ইনডেক্সিং এবং পাইথনের ০-ভিত্তিক ইনডেক্সিংয়ে তালগোল পাকানো।',
        },
        correct: {
          en: 'In R, the first element of vector `v` is `v[1]`. In Python, it is `v[0]`.',
          bn: 'আর-এ প্রথম উপাদান পাওয়া যায় `v[1]` দিয়ে, আর পাইথনে পাওয়া যায় `v[0]` দিয়ে।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'R is purpose-built for statistical computing with native modeling syntax like `y ~ x`.',
        bn: 'আর পরিসংখ্যানিক হিসাবের জন্য বিশেষভাবে তৈরি, যার নিজস্ব সিনট্যাক্স `y ~ x` মডেলিংকে সহজ করে।',
      },
      {
        en: 'The tidyverse suite (dplyr, ggplot2, tidyr) offers an unparalleled data analysis ecosystem.',
        bn: 'টাইডিভার্স ইকোসিস্টেম ডেটা বিশ্লেষণ ও ভিজ্যুয়ালাইজেশনকে অত্যন্ত সহজ ও নান্দনিক করে তোলে।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q18-1',
        question: {
          en: 'In R, what is the index of the FIRST element in a vector?',
          bn: 'আর প্রোগ্রামিংয়ে একটি ভেক্টরের প্রথম উপাদানের সূচক বা ইনডেক্স কত?',
        },
        options: [
          { en: '0', bn: '০' },
          { en: '1', bn: '১' },
          { en: '-1', bn: '-১' },
          { en: 'None', bn: 'কোনোটিই নয়' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Unlike Python, C, or Java, R uses 1-based indexing: the first item is accessed at index 1.',
          bn: 'পাইথন বা সি এর মতো শূন্য নয়, আর প্রোগ্রামিংয়ে ১-ভিত্তিক ইনডেক্সিং ব্যবহৃত হয়; তাই প্রথম উপাদানটির সূচক ১।',
        },
      },
    ],
    relatedLessonIds: ['python-statistical-analysis', 'simple-linear-regression', 'exploratory-data-analysis'],
  },

  // 19. Exploratory Data Analysis
  {
    id: 'exploratory-data-analysis',
    categoryId: 'data-science',
    order: 19,
    title: {
      en: 'Exploratory Data Analysis (EDA)',
      bn: 'অভিজ্ঞতামূলক উপাত্ত বিশ্লেষণ (Exploratory Data Analysis - EDA)',
    },
    shortDescription: {
      en: 'Discover patterns, detect anomalies, check distributions, handle missing values, and test assumptions before modeling.',
      bn: 'উপাত্তের অন্তর্নিহিত প্যাটার্ন আবিষ্কার, অসঙ্গতি শনাক্তকরণ, মিসিং ভ্যালু সমাধান এবং মডেলিংয়ের পূর্বে অনুমান যাচাই।',
    },
    definition: {
      en: 'Exploratory Data Analysis (EDA) is an investigative statistical approach pioneered by John Tukey that uses visual and numerical techniques to maximize insight into a dataset, uncover underlying structure, and test assumptions before formal modeling.',
      bn: 'অভিজ্ঞতামূলক উপাত্ত বিশ্লেষণ (EDA) হলো জন টুকির উদ্ভাবিত এমন একটি পদ্ধতি যা লেখচিত্র ও সাংখ্যিক কৌশলের মাধ্যমে যেকোনো উপাত্তের মূল স্বভাব উদঘাটন, কাঠামোগত অসংগতি দূর এবং মডেল তৈরির পূর্বে সত্যতা যাচাই করতে ব্যবহৃত হয়।',
    },
    whyItMatters: {
      en: 'Jumping straight to complex machine learning algorithms on dirty, unchecked data leads to disastrous "garbage in, garbage out" results. EDA ensures your data is clean, understood, and viable.',
      bn: 'উপাত্ত ভালো করে না দেখে সরাসরি জটিল অ্যালগরিদমে বসিয়ে দিলে "গার্বেজ ইন, গার্বেজ আউট" ঘটে। EDA নিশ্চিত করে যে উপাত্ত নির্ভরযোগ্য, পরিষ্কার এবং বিশ্লেষণের উপযুক্ত।',
    },
    level: 'intermediate',
    prerequisites: ['data-types-and-scales', 'mean-median-mode', 'variance-and-std-dev'],
    keyTerms: [
      {
        term: { en: 'Anscombe\'s Quartet', bn: 'অ্যাসকোম্বের চতুষ্টয় (Anscombe\'s Quartet)' },
        definition: {
          en: 'Four datasets with identical means, variances, and regression lines, but completely different graphical structures, proving the necessity of plotting data.',
          bn: 'চারটি উপাত্ত সেট যাদের গড়, ভেদাঙ্ক ও নির্ভরণ লাইন হুবহু এক, কিন্তু চিত্র আঁকলে দেখা যায় তারা সম্পূর্ণ ভিন্ন স্বভাবের। এটি প্রমাণ করে গ্রাফ আঁকা কতটা অপরিহার্য!',
        },
      },
      {
        term: { en: 'Interquartile Range (IQR) Rule for Outliers', bn: 'আউটলায়ার শনাক্তে IQR পদ্ধতি' },
        definition: {
          en: 'Points lying below $Q_1 - 1.5 \\times IQR$ or above $Q_3 + 1.5 \\times IQR$ are flagged as potential outliers.',
          bn: '$Q_১ - ১.৫ \\times IQR$ এর নিচে অথবা $Q_৩ + ১.৫ \\times IQR$ এর উপরে থাকা মানগুলোকে আউটলায়ার বা চরম মান হিসেবে চিহ্নিত করা হয়।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Tukey Outlier Boundaries', bn: 'টুকির আউটলায়ার সীমানা' },
        latex: '\\text{Lower Fence} = Q_1 - 1.5(IQR), \\quad \\text{Upper Fence} = Q_3 + 1.5(IQR)',
        explanation: {
          en: 'Where $IQR = Q_3 - Q_1$ is the middle 50% spread of the data.',
          bn: 'যেখানে $IQR = Q_৩ - Q_১$ হলো উপাত্তের মধ্যবর্তী ৫০% অংশের বিস্তার।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Detecting Outliers using IQR', bn: 'IQR পদ্ধতিতে আউটলায়ার শনাক্তকরণ' },
        problem: {
          en: 'A dataset has $Q_1 = 20$ and $Q_3 = 35$. Is an observed score of 62 an outlier according to Tukey\'s rule?',
          bn: 'একটি উপাত্ত সেটের $Q_১ = ২০$ এবং $Q_৩ = ৩৫$। টুকির নিয়ম অনুসারে ৬২ মানটি কি আউটলায়ার বা চরম মান?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Calculate $IQR = Q_3 - Q_1 = 35 - 20 = 15$.',
              bn: '$IQR = Q_৩ - Q_১ = ৩৫ - ২০ = ১৫$।',
            },
            math: 'IQR = 15',
          },
          {
            step: 2,
            text: {
              en: 'Upper fence = $Q_3 + 1.5 \\times IQR = 35 + 1.5(15) = 35 + 22.5 = 57.5$.',
              bn: 'উচ্চ সীমানা = $Q_৩ + ১.৫ \\times ১৫ = ৩৫ + ২২.৫ = ৫৭.৫$।',
            },
            math: '\\text{Upper Fence} = 57.5',
          },
          {
            step: 3,
            text: {
              en: 'Since $62 > 57.5$, it lies beyond the upper fence.',
              bn: 'যেহেতু ৬২ > ৫৭.৫, তাই এটি উচ্চ সীমানা অতিক্রম করেছে।',
            },
          },
        ],
        finalAnswer: {
          en: 'Yes, 62 is statistically classified as an outlier.',
          bn: 'হ্যাঁ, ৬২ মানটি পরিসংখ্যানগতভাবে নিশ্চিত একটি আউটলায়ার।',
        },
      },
      {
        title: { en: 'Checking Missing Data Mechanisms', bn: 'মিসিং উপাত্তের প্যাটার্ন নিরীক্ষা' },
        problem: {
          en: 'Explain the difference between Missing Completely at Random (MCAR) and Missing Not at Random (MNAR).',
          bn: 'সম্পূর্ণ দৈবচয়নে অনুপস্থিত (MCAR) এবং দৈবচয়ন ব্যতীত উদ্দেশ্যমূলক অনুপস্থিত (MNAR) এর পার্থক্য কী?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'MCAR: Missingness is purely random, unrelated to observed or unobserved values (e.g. a lab vial accidentally broke). Simple deletion is unbiased.',
              bn: 'MCAR: উপাত্ত হারানোর ঘটনা সম্পূর্ণ আকস্মিক ও পক্ষপাতহীন (যেমন টেস্ট টিউব হাত থেকে পড়ে ভেঙে যাওয়া)।',
            },
          },
          {
            step: 2,
            text: {
              en: 'MNAR: Missingness depends on the value itself (e.g. individuals with extremely high incomes refuse to answer salary survey questions). Deletion creates severe bias.',
              bn: 'MNAR: মান গোপন রাখার কারণে উপাত্ত মিসিং হয় (যেমন অতি ধনীরা আয়ের তথ্য দিতে অস্বীকার করে)। এ ক্ষেত্রে বাদ দিলে গুরুতর পক্ষপাত তৈরি হয়।',
            },
          },
        ],
        finalAnswer: {
          en: 'MCAR can be dropped safely; MNAR requires advanced modeling and domain-specific imputation.',
          bn: 'MCAR থাকলে উপাদান বাদ দেওয়া নিরাপদ; কিন্তু MNAR থাকলে উন্নত মডেলিং ও ইমপ্যুটেশন প্রয়োজন।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Fraud Detection in Banking', bn: 'ব্যাংকিং খাতে জালিয়াতি শনাক্তকরণ' },
        example: {
          en: 'Credit card companies flag transactions that are extreme multidimensional outliers compared to a customer\'s historical spending profile.',
          bn: 'গ্রাহকের স্বাভাবিক খরচের প্যাটার্ন থেকে বিচ্ছিন্ন যেকোনো অস্বাভাবিক লেনদেন তাৎক্ষণিক আটকে দেওয়া।',
        },
      },
      {
        field: { en: 'Predictive Maintenance', bn: 'কারখানার যন্ত্রপাতির স্থায়িত্ব পর্যবেক্ষণ' },
        example: {
          en: 'Detecting sudden spikes or changes in turbine vibration distributions before catastrophic mechanical breakdown occurs.',
          bn: 'যন্ত্রপাতি সম্পূর্ণ বিকল হওয়ার আগেই ঘূর্ণনের কম্পন উপাত্তে অসঙ্গতি খুঁজে আগাম সতর্কতা প্রদান।',
        },
      },
    ],
    pythonCode: `import pandas as pd
import numpy as np

# Sample data with an outlier
data = pd.Series([12, 14, 15, 18, 19, 21, 22, 23, 25, 28, 85])

q1 = data.quantile(0.25)
q3 = data.quantile(0.75)
iqr = q3 - q1

lower = q1 - 1.5 * iqr
upper = q3 + 1.5 * iqr

outliers = data[(data < lower) | (data > upper)]
print(f"IQR: {iqr:.2f}, Fences: [{lower:.2f}, {upper:.2f}]")
print(f"Detected Outliers: {outliers.tolist()}")`,
    rCode: `x <- c(12, 14, 15, 18, 19, 21, 22, 23, 25, 28, 85)
bp <- boxplot.stats(x)
cat("Outliers detected:", bp$out, "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Automatically deleting every detected outlier without investigating its origin.',
          bn: 'কোনো কারণ না জেনেই যেকোনো আউটলায়ারকে উপাত্ত থেকে মুছে ফেলা।',
        },
        correct: {
          en: 'An outlier could be a measurement error (safe to fix/drop), OR it could be the most important discovery in the dataset (e.g. an actual fraudulent transaction or a scientific breakthrough)!',
          bn: 'আউটলায়ার কেবল পরিমাপের ভুল নাও হতে পারে; এটি হতে পারে কোনো মহাজাগতিক আবিষ্কার বা আর্থিক জালিয়াতির সবচেয়ে গুরুত্বপূর্ণ প্রমাণ!',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Never trust summary metrics alone; always visualize your data distribution using histograms, scatter plots, and box plots.',
        bn: 'কেবল সংক্ষিপ্ত সংখ্যার ওপর নির্ভর করবেন না; হিস্টোগ্রাম ও বক্স প্লট এঁকে উপাত্তের চেহারা সরাসরি দেখুন।',
      },
      {
        en: 'Tukey\'s 1.5 IQR rule provides an objective, robust cutoff for flagging anomalies.',
        bn: 'টুকির ১.৫ IQR সূত্রটি অসঙ্গতি ও চরম মান চিহ্নিত করার একটি বৈজ্ঞানিক ও পক্ষপাতহীন মানদণ্ড।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q19-1',
        question: {
          en: 'What famous statistical demonstration shows four datasets with identical means, variances, and correlations, yet completely different visual scatter plots?',
          bn: 'কোন বিখ্যাত পরিসংখ্যানিক উদাহরণটিতে চারটি উপাত্ত সেটের গড়, ভেদাঙ্ক ও সহসংশ্লেষ এক হওয়া সত্ত্বেও তাদের গ্রাফ সম্পূর্ণ ভিন্ন হয়?',
        },
        options: [
          { en: 'Central Limit Theorem', bn: 'কেন্দ্রীয় সীমাস্থ উপপাদ্য' },
          { en: 'Anscombe\'s Quartet', bn: 'অ্যাসকোম্বের চতুষ্টয় (Anscombe\'s Quartet)' },
          { en: 'Simpson\'s Paradox', bn: 'সিম্পসনের প্যারাডক্স (Simpson\'s Paradox)' },
          { en: 'Benford\'s Law', bn: 'বেনফোর্ডের সূত্র (Benford\'s Law)' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Francis Anscombe created Anscombe\'s Quartet in 1973 specifically to emphasize the importance of graphing data before analyzing it.',
          bn: 'ফ্রান্সিস অ্যাসকোম্ব ১৯৭৩ সালে এটি তৈরি করেন যাতে প্রমাণ করা যায় কেবল সূত্রের বদলে গ্রাফ এঁকে দেখা কতটা জরুরি।',
        },
      },
    ],
    relatedLessonIds: ['data-types-and-scales', 'correlation', 'intro-to-machine-learning'],
  },

  // 20. Introduction to Machine Learning
  {
    id: 'intro-to-machine-learning',
    categoryId: 'data-science',
    order: 20,
    title: {
      en: 'Introduction to Machine Learning',
      bn: 'মেশিন লার্নিং পরিচিতি (Introduction to Machine Learning)',
    },
    shortDescription: {
      en: 'Supervised vs unsupervised learning, training/test splits, bias-variance tradeoff, overfitting, and core evaluation metrics.',
      bn: 'সুপারভাইজড ও আনসুপারভাইজড লার্নিং, ট্রেনিং-টেস্টিং বিভাজন, বায়াস-ভ্যারিয়েন্স ভারসাম্য এবং মডেল মূল্যায়ন মেথড।',
    },
    definition: {
      en: 'Machine Learning is the subfield of computer science and artificial intelligence where algorithms learn patterns directly from statistical data to perform predictions or tasks without being explicitly programmed with hardcoded rules.',
      bn: 'মেশিন লার্নিং হলো কম্পিউটার বিজ্ঞান ও কৃত্রিম বুদ্ধিমত্তার এমন একটি শাখা যেখানে অ্যালগরিদমগুলো কোনো বাঁধাধরা নিয়ম ছাড়াই উপাত্তের গাণিতিক পরিসংখ্যান থেকে সরাসরি শিখে স্বয়ংক্রিয় সিদ্ধান্ত ও পূর্বাভাস দিতে সক্ষম হয়।',
    },
    whyItMatters: {
      en: 'Modern applications—from speech recognition and facial unlocking to autonomous vehicles and medical diagnostic scans—are far too complex for manual human rule-writing. Machine learning extracts these rules automatically from data.',
      bn: 'মুখমণ্ডল শনাক্তকরণ, ভয়েস অ্যাসিস্ট্যান্ট কিংবা স্বচালিত গাড়ির মতো জটিল প্রযুক্তির নিয়ম মানুষ হাতে লিখে কোড করতে পারে না। মেশিন লার্নিং লাখ লাখ উপাত্ত বিশ্লেষণ করে সেই নিয়ম নিজ থেকেই তৈরি করে নেয়।',
    },
    level: 'intermediate',
    prerequisites: ['simple-linear-regression', 'exploratory-data-analysis'],
    keyTerms: [
      {
        term: { en: 'Supervised Learning', bn: 'তত্ত্বাবধানাধীন শিক্ষা (Supervised Learning)' },
        definition: {
          en: 'Algorithms trained on input-output pairs $(X, y)$ with known true labels (e.g. Regression and Classification).',
          bn: 'যেখানে অ্যালগরিদমকে লেবেলযুক্ত ইনপুট ও আউটপুট $(X, y)$ দিয়ে শেখানো হয় (যেমন ক্লাসিফিকেশন ও নির্ভরণ)।',
        },
      },
      {
        term: { en: 'Unsupervised Learning', bn: 'তত্ত্বাবধানহীন শিক্ষা (Unsupervised Learning)' },
        definition: {
          en: 'Algorithms that discover hidden structures, groupings, or clusters in unlabeled input data $X$ (e.g. K-Means, PCA).',
          bn: 'যেখানে কোনো পূর্বনির্ধারিত উত্তর থাকে না; অ্যালগরিদম উপাত্তের ভেতরের গোপন মিল ও দল (ক্লাস্টার) নিজে খুঁজে বের করে।',
        },
      },
      {
        term: { en: 'Overfitting', bn: 'ওভারফিটিং (Overfitting)' },
        definition: {
          en: 'When a model memorizes training data noise, achieving near 100% training accuracy but failing disastrously on unseen new test data.',
          bn: 'যখন কোনো মডেল উপাত্তের মূল প্যাটার্ন না শিখে মুখস্থ করে ফেলে; ফলে ট্রেনিংয়ে অসাধারণ ফল দেখালেও নতুন উপাত্তে ভয়াবহ ভুল করে।',
        },
      },
      {
        term: { en: 'Bias-Variance Tradeoff', bn: 'বায়াস-ভ্যারিয়েন্স ভারসাম্য' },
        definition: {
          en: 'Balancing underfitting (high bias, overly simplistic model) versus overfitting (high variance, overly sensitive model).',
          bn: 'অতিরিক্ত সরলীকরণ (হাই বায়াস বা আন্ডারফিটিং) এবং অতিমাত্রায় সংবেদনশীলতার (হাই ভ্যারিয়েন্স বা ওভারফিটিং) মধ্যবর্তী ভারসাম্য।',
        },
      },
    ],
    equations: [
      {
        label: { en: 'Mean Squared Error (MSE) Loss Function', bn: 'গড় বর্গীয় ত্রুটি (MSE)' },
        latex: '\\text{MSE} = \\frac{1}{n} \\sum_{i=1}^n (y_i - \\hat{y}_i)^2',
        explanation: {
          en: 'The standard optimization loss function minimized by regression algorithms.',
          bn: 'নির্ভরণ অ্যালগরিদমগুলোতে অপ্টিমাইজেশনের জন্য এই ত্রুটির মান সর্বনিম্ন করা হয়।',
        },
      },
      {
        label: { en: 'Classification Accuracy and F1-Score', bn: 'ক্লাসিফিকেশন নির্ভুলতা ও F1-স্কোর' },
        latex: '\\text{F1} = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}',
        explanation: {
          en: 'Harmonic mean of Precision and Recall, crucial for imbalanced datasets.',
          bn: 'প্রিসিশন ও রিকলের গুণোত্তর গড়, যা ভারসাম্যহীন উপাত্ত সেটে সঠিক কার্যকারিতা মূল্যায়নে অপরিহার্য।',
        },
      },
    ],
    workedExamples: [
      {
        title: { en: 'Evaluating a Binary Classifier (Confusion Matrix)', bn: 'বাইনারি ক্লাসিফায়ারের মূল্যায়ন (কনফিউশন ম্যাট্রিক্স)' },
        problem: {
          en: 'A model predicts 100 loan defaults: True Positives = 40, False Positives = 10, False Negatives = 10, True Negatives = 40. Calculate Accuracy, Precision, and Recall.',
          bn: 'একটি ক্রেডিট ডিফল্ট মডেলে ১০০টি ক্ষেত্রে: TP = ৪০, FP = ১০, FN = ১০, TN = ৪০। Accuracy, Precision এবং Recall নির্ণয় করুন।',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Accuracy = $\\frac{TP + TN}{\\text{Total}} = \\frac{40 + 40}{100} = \\frac{80}{100} = 80\\%$.',
              bn: 'Accuracy = $\\frac{৪০ + ৪০}{১০০} = ৮০\\%$।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Precision = $\\frac{TP}{TP + FP} = \\frac{40}{40 + 10} = \\frac{40}{50} = 80\\%$.',
              bn: 'Precision = $\\frac{৪০}{৪০ + ১০} = \\frac{৪০}{৫০} = ৮০\\%$।',
            },
          },
          {
            step: 3,
            text: {
              en: 'Recall = $\\frac{TP}{TP + FN} = \\frac{40}{40 + 10} = \\frac{40}{50} = 80\\%$.',
              bn: 'Recall = $\\frac{৪০}{৪০ + ১০} = \\frac{৪০}{৫০} = ৮০\\%$।',
            },
          },
        ],
        finalAnswer: {
          en: 'Accuracy = 80%, Precision = 80%, Recall = 80%.',
          bn: 'অ্যাকুরেসি = ৮০%, প্রিসিশন = ৮০%, রিকল = ৮০%।',
        },
      },
      {
        title: { en: 'Detecting Overfitting via Train vs Test Curves', bn: 'ট্রেন বনাম টেস্ট ফলাফল দেখে ওভারফিটিং শনাক্তকরণ' },
        problem: {
          en: 'Model A has 99% train accuracy and 65% test accuracy. Model B has 88% train accuracy and 86% test accuracy. Which model will generalize better in the real world?',
          bn: 'মডেল A ট্রেনিংয়ে ৯৯% কিন্তু টেস্টে ৬৫% সফল। মডেল B ট্রেনিংয়ে ৮৮% কিন্তু টেস্টে ৮৬% সফল। বাস্তব বিশ্বে কোন মডেলটি ভালো কাজ করবে?',
        },
        solutionSteps: [
          {
            step: 1,
            text: {
              en: 'Model A is severely overfitted: it memorized training noise and fails to generalize to unseen test samples.',
              bn: 'মডেল A চরমভাবে ওভারফিটেড: এটি উপাত্ত মুখস্থ করেছে এবং নতুন উপাত্তে ব্যর্থ হয়েছে।',
            },
          },
          {
            step: 2,
            text: {
              en: 'Model B maintains consistent performance between train (88%) and test (86%), showing strong generalization power.',
              bn: 'মডেল B উভয় ক্ষেত্রে ধারাবাহিক ও কাছাকাছি ফল ধরে রেখেছে (৮৮% ও ৮৬%), যা বাস্তব জীবনে শ্রেষ্ঠ।',
            },
          },
        ],
        finalAnswer: {
          en: 'Model B will perform significantly better and more reliably on future unseen real-world data.',
          bn: 'বাস্তব বিশ্বের নতুন উপাত্তে মডেল B অনেক বেশি নির্ভরযোগ্য ও কার্যকর হবে।',
        },
      },
    ],
    realLifeApplications: [
      {
        field: { en: 'Medical Imaging Diagnostics', bn: 'মেডিকেল ইমেজিং ও এক্স-রে বিশ্লেষণ' },
        example: {
          en: 'Convolutional neural networks detecting lung cancer nodules from CT scans with radiologist-level accuracy.',
          bn: 'সিটি স্ক্যান ও এক্স-রে ইমেজ বিশ্লেষণ করে রেডিওলজিস্টদের সমকক্ষ দক্ষতায় ফুসফুসের টিউমার শনাক্তকরণ।',
        },
      },
      {
        field: { en: 'E-Commerce Recommendations', bn: 'ই-কমার্স রিকমেন্ডেশন সিস্টেম' },
        example: {
          en: 'Amazon and Netflix tailoring product recommendations using collaborative filtering models.',
          bn: 'লক্ষ লক্ষ ভোক্তার অভ্যাসের ওপর ভিত্তি করে অ্যামাজন ও নেটফ্লিক্সে ব্যক্তিকেন্দ্রিক কন্টেন্ট সুপারিশ।',
        },
      },
    ],
    pythonCode: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load Iris dataset
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3, random_state=42)

# Train a Random Forest
clf = RandomForestClassifier(n_estimators=50, random_state=42)
clf.fit(X_train, y_train)

# Evaluate
preds = clf.predict(X_test)
acc = accuracy_score(y_test, preds)
print(f"Test Set Accuracy: {acc * 100:.2f}%")`,
    rCode: `library(randomForest)
data(iris)
set.seed(42)
train_idx <- sample(1:nrow(iris), 0.7 * nrow(iris))
model <- randomForest(Species ~ ., data = iris[train_idx, ])
preds <- predict(model, newdata = iris[-train_idx, ])
cat("Accuracy:", mean(preds == iris[-train_idx, "Species"]), "\\n")`,
    commonMistakes: [
      {
        mistake: {
          en: 'Evaluating a model only on the exact same data it was trained on (Data Leakage / Overfitting).',
          bn: 'যে উপাত্ত দিয়ে মডেলকে শেখানো হয়েছে, ঠিক সেই উপাত্ত দিয়েই মডেলের চূড়ান্ত পরীক্ষা নেওয়া।',
        },
        correct: {
          en: 'Always set aside an untouched test set (or use cross-validation) to evaluate performance on genuinely new, unseen data.',
          bn: 'মডেলের সঠিক যোগ্যতা যাচাইয়ে সর্বদা একটি অদেখা পৃথক টেস্ট সেট (বা ক্রস-ভ্যালিডেশন) ব্যবহার করতে হয়।',
        },
      },
    ],
    keyTakeaways: [
      {
        en: 'Supervised learning predicts targets using labeled data; unsupervised learning uncovers hidden clusters.',
        bn: 'সুপারভাইজড লার্নিং লেবেলযুক্ত উপাত্ত দিয়ে পূর্বাভাস দেয়; আনসুপারভাইজড লার্নিং ক্লাস্টার খুঁজে বের করে।',
      },
      {
        en: 'Generalization to new, unseen data is the ultimate goal of machine learning, managed through the bias-variance tradeoff.',
        bn: 'নতুন অদেখা উপাত্তে সফল হওয়াই মেশিন লার্নিংয়ের মূল লক্ষ্য, যা বায়াস-ভ্যারিয়েন্সের ভারসাম্যের ওপর নির্ভরশীল।',
      },
    ],
    practiceQuestions: [
      {
        id: 'q20-1',
        question: {
          en: 'Which situation represents an overfitted machine learning model?',
          bn: 'কোন পরিস্থিতিটি একটি ওভারফিটেড মেশিন লার্নিং মডেলকে নির্দেশ করে?',
        },
        options: [
          { en: 'High training error and high testing error', bn: 'ট্রেনিংয়েও বেশি ভুল এবং টেস্টেও বেশি ভুল' },
          { en: 'Near-zero training error but high testing error', bn: 'ট্রেনিংয়ে ভুল নেই বললেই চলে কিন্তু টেস্টে প্রচুর ভুল' },
          { en: 'Low training error and low testing error', bn: 'ট্রেনিংয়েও কম ভুল এবং টেস্টেও কম ভুল' },
          { en: 'The model has too few parameters to fit the data', bn: 'উপাত্তের তুলনায় মডেলটিতে পর্যাপ্ত প্যারামিটার নেই' },
        ],
        correctIndex: 1,
        explanation: {
          en: 'Overfitting occurs when a model memorizes training noise: training accuracy is artificially high, but it fails to generalize to unseen test data.',
          bn: 'ওভারফিটিংয়ে মডেল ট্রেনিং ডেটাকে মুখস্থ করে ফেলে; ফলে ট্রেনিং অ্যাকুরেসি আকাশচুম্বী হলেও নতুন উপাত্তে মডেল ব্যর্থ হয়।',
        },
      },
    ],
    relatedLessonIds: ['simple-linear-regression', 'exploratory-data-analysis', 'python-statistical-analysis'],
  },
];

export const LESSONS: Lesson[] = [...INITIAL_LESSONS, ...MORE_LESSONS];
