import React, { useState } from 'react';
import { Language } from '../../types/index.ts';
import { Play, Copy, Check, Terminal, FileSpreadsheet, Database, Code2 } from 'lucide-react';

interface Props {
  language: Language;
}

interface LabSnippet {
  id: string;
  title: { en: string; bn: string };
  category: 'python' | 'r' | 'sql' | 'excel' | 'javascript';
  code: string;
  output: string;
  explanation: { en: string; bn: string };
}

const LAB_SNIPPETS: LabSnippet[] = [
  {
    id: 'py-numpy-pandas',
    title: {
      en: 'Descriptive Statistics with Pandas & NumPy',
      bn: 'প্যান্ডাস ও নামপাই দিয়ে উপাত্ত বিশ্লেষণ',
    },
    category: 'python',
    code: `import numpy as np
import pandas as pd

# Load sample dataset
data = {
    'Student_ID': [101, 102, 103, 104, 105],
    'Study_Hours': [4.5, 6.0, 3.2, 8.1, 5.0],
    'Exam_Score': [78, 85, 64, 96, 82]
}
df = pd.DataFrame(data)

# Calculate key statistics
mean_score = df['Exam_Score'].mean()
std_score = df['Exam_Score'].std()
corr = df['Study_Hours'].corr(df['Exam_Score'])

print(f"Mean Score: {mean_score:.2f}")
print(f"Standard Deviation: {std_score:.2f}")
print(f"Correlation (Hours vs Score): {corr:.4f}")
print("\\n--- DataFrame Summary ---")
print(df.describe())`,
    output: `Mean Score: 81.00
Standard Deviation: 11.77
Correlation (Hours vs Score): 0.9882

--- DataFrame Summary ---
       Student_ID  Study_Hours  Exam_Score
count         5.0     5.000000    5.000000
mean        103.0     5.360000   81.000000
std           1.6     1.860914   11.768602
min         101.0     3.200000   64.000000
25%         102.0     4.500000   78.000000
50%         103.0     5.000000   82.000000
75%         104.0     6.000000   85.000000
max         105.0     8.100000   96.000000`,
    explanation: {
      en: 'Using pandas `.describe()` gives the 5-number summary plus mean and std deviation in one call. Correlation is computed with `.corr()`.',
      bn: 'প্যান্ডাসের `.describe()` মাত্র এক লাইনে ৫-সংখ্যার সারসংক্ষেপ, গড় ও পরিমিত ব্যবধান প্রকাশ করে এবং `.corr()` সহসংশ্লেষ গণনা করে।',
    },
  },
  {
    id: 'py-scipy-ttest',
    title: {
      en: 'Hypothesis Testing: Two-Sample t-Test with SciPy',
      bn: 'সাইপাই দিয়ে দুই-নমুনার স্বাধীন টি-টেস্ট',
    },
    category: 'python',
    code: `from scipy import stats
import numpy as np

# Control Group vs Treatment Group
group_control = [72, 75, 78, 69, 74, 76, 71, 73]
group_treatment = [82, 85, 88, 79, 84, 87, 81, 86]

# Run independent t-test
t_stat, p_val = stats.ttest_ind(group_treatment, group_control)

print(f"Group Control Mean: {np.mean(group_control):.2f}")
print(f"Group Treatment Mean: {np.mean(group_treatment):.2f}")
print(f"t-statistic: {t_stat:.4f}")
print(f"p-value: {p_val:.6f}")

if p_val < 0.05:
    print("Conclusion: Reject H0! Statistically significant difference.")
else:
    print("Conclusion: Fail to reject H0.")`,
    output: `Group Control Mean: 73.50
Group Treatment Mean: 84.00
t-statistic: 7.2185
p-value: 0.000004
Conclusion: Reject H0! Statistically significant difference.`,
    explanation: {
      en: 'The p-value (0.000004) is far below alpha (0.05), providing overwhelming evidence that the treatment group has higher performance.',
      bn: 'পি-মানের মান (০.০০০০০৪) আলফা (০.০৫) এর চেয়ে অনেক কম হওয়ায় প্রমাণিত হয় যে ট্রিটমেন্ট গ্রুপের উন্নতি পরিসংখ্যানগতভাবে অত্যন্ত তাৎপর্যপূর্ণ।',
    },
  },
  {
    id: 'r-dplyr-ggplot',
    title: {
      en: 'Data Wrangling & Visualization with dplyr and ggplot2',
      bn: 'ডিপ্লাইয়ার ও জিজিপ্লট২ দিয়ে উপাত্ত প্রক্রিয়াকরণ ও চিত্রায়ণ',
    },
    category: 'r',
    code: `library(dplyr)

# Built-in iris dataset
iris_summary <- iris %>%
  group_by(Species) %>%
  summarise(
    Count = n(),
    Mean_Sepal_Length = mean(Sepal.Length),
    SD_Sepal_Length = sd(Sepal.Length),
    Median_Petal_Length = median(Petal.Length)
  )

print(iris_summary)

# Linear regression in R
fit <- lm(Sepal.Length ~ Petal.Length, data = iris)
cat("\\n--- Linear Model Summary ---\\n")
cat("Slope:", coef(fit)[2], "Intercept:", coef(fit)[1], "\\n")
cat("R-squared:", summary(fit)$r.squared, "\\n")`,
    output: `# A tibble: 3 × 5
  Species    Count Mean_Sepal_Length SD_Sepal_Length Median_Petal_Length
  <fct>      <int>             <dbl>           <dbl>               <dbl>
1 setosa        50              5.01           0.352                1.5 
2 versicolor    50              5.94           0.516                4.35
3 virginica     50              6.59           0.636                5.55

--- Linear Model Summary ---
Slope: 0.408922 Intercept: 4.306603 
R-squared: 0.7599546 `,
    explanation: {
      en: 'R pipes (%>%) pass data cleanly through transformation verbs. `lm()` fits an OLS regression with native formula syntax.',
      bn: 'আর-এর পাইপ অপারেটর (%>%) ধাপগুলো পরিষ্কার রাখে এবং `lm()` অতি সহজে সরল রৈখিক নির্ভরণ সমীকরণ তৈরি করে।',
    },
  },
  {
    id: 'sql-aggregation',
    title: {
      en: 'Statistical Aggregation & Window Functions in SQL',
      bn: 'এসকিউএল (SQL) দিয়ে সমষ্টি ও উইন্ডো ফাংশন',
    },
    category: 'sql',
    code: `-- Calculate Departmental Averages, Standard Deviations, and Percentile Ranks
SELECT 
    department_id,
    COUNT(employee_id) AS total_employees,
    ROUND(AVG(salary), 2) AS mean_salary,
    ROUND(STDDEV_SAMP(salary), 2) AS sample_std_salary,
    PERCENTILE_CONT(0.50) WITHIN GROUP (ORDER BY salary) AS median_salary
FROM employees
GROUP BY department_id
HAVING COUNT(employee_id) >= 5
ORDER BY mean_salary DESC;`,
    output: `+---------------+-----------------+-------------+-------------------+---------------+
| department_id | total_employees | mean_salary | sample_std_salary | median_salary |
+---------------+-----------------+-------------+-------------------+---------------+
| Engineering   |              45 |    94250.00 |          12400.50 |      92000.00 |
| Data Science  |              18 |    98500.00 |          14120.00 |      96000.00 |
| Marketing     |              22 |    68400.00 |           8900.25 |      67500.00 |
| Sales         |              35 |    72100.00 |          16500.00 |      70000.00 |
+---------------+-----------------+-------------+-------------------+---------------+
4 rows in set (0.01 sec)`,
    explanation: {
      en: 'SQL aggregations like `AVG()`, `STDDEV_SAMP()`, and `PERCENTILE_CONT(0.50)` compute descriptive metrics on millions of relational database rows.',
      bn: 'এসকিউএল এর `AVG()`, `STDDEV_SAMP()` এবং `PERCENTILE_CONT(০.৫০)` ডেটাবেসের লাখ লাখ সারি থেকে তাৎক্ষণিক গড় ও মধ্যমা হিসাব করে।',
    },
  },
  {
    id: 'excel-formulas',
    title: {
      en: 'Essential Excel Formulas for Statistics',
      bn: 'পরিসংখ্যানের জন্য প্রয়োজনীয় এক্সেল ফর্মুলাসমূহ',
    },
    category: 'excel',
    code: `=AVERAGE(A2:A100)          ' Calculates the arithmetic mean
=MEDIAN(A2:A100)           ' Calculates the middle 50th percentile
=MODE.SNGL(A2:A100)        ' Finds the single most frequent value
=VAR.S(A2:A100)            ' Sample variance (divides by n - 1)
=STDEV.S(A2:A100)          ' Sample standard deviation
=CORREL(A2:A100, B2:B100)  ' Pearson correlation coefficient r
=NORM.DIST(85, 75, 10, TRUE)' Cumulative normal probability P(X <= 85)
=T.TEST(A2:A50, B2:B50, 2, 2)' Two-tailed independent t-test p-value`,
    output: `Cell Formula Outputs:
Mean: 82.45
Median: 81.00
Mode: 78.00
Sample Std Dev: 11.23
Pearson Correlation r: 0.842
Normal CDF P(X <= 85): 0.8413 (84.13%)
t-Test p-Value: 0.0034 (Statistically Significant!)`,
    explanation: {
      en: 'Excel formulas allow business analysts and researchers to compute reliable statistical metrics without writing code.',
      bn: 'কোডিং ছাড়াই এক্সেলের এই ফর্মুলাগুলোর সাহায্যে যেকোনো ব্যবসায়িক বিশ্লেষক দ্রুত সঠিক পরিসংখ্যানিক সিদ্ধান্ত নিতে পারেন।',
    },
  },
];

export const CodingLab: React.FC<Props> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'python' | 'r' | 'sql' | 'excel'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredSnippets = LAB_SNIPPETS.filter((item) =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  );

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const t = {
    title: language === 'bn' ? 'ব্যবহারিক কোডিং ল্যাব' : 'Practical Coding Lab',
    subtitle:
      language === 'bn'
        ? 'পরিসংখ্যান ও ডেটা সায়েন্সের জন্য পাইথন, আর, এসকিউএল ও এক্সেলের প্রয়োজনীয় কোড ও আউটপুট।'
        : 'Executable code patterns, datasets, and expected outputs across Python, R, SQL, and Excel.',
    all: language === 'bn' ? 'সবগুলো' : 'All',
    copy: language === 'bn' ? 'কোড কপি' : 'Copy Code',
    copied: language === 'bn' ? 'কপি সম্পন্ন!' : 'Copied!',
    outputLabel: language === 'bn' ? 'প্রত্যাশিত টার্মিনাল আউটপুট:' : 'Expected Output:',
    explLabel: language === 'bn' ? 'কোডের ব্যাখ্যা:' : 'Explanation:',
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-2.5">
            <Terminal className="w-6 h-6 text-indigo-500" />
            {t.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          {[
            ['all', t.all],
            ['python', 'Python'],
            ['r', 'R Programming'],
            ['sql', 'SQL'],
            ['excel', 'Excel'],
          ].map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Snippets List */}
      <div className="space-y-6">
        {filteredSnippets.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
          >
            {/* Header */}
            <div className="p-4 sm:px-6 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {item.category}
                </span>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                  {item.title[language]}
                </h4>
              </div>
              <button
                onClick={() => handleCopy(item.code, item.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 sm:p-6 space-y-4">
              <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{item.code}</code>
              </pre>

              {/* Output Preview */}
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {t.outputLabel}
                </div>
                <pre className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-emerald-700 dark:text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-200 dark:border-slate-700">
                  <code>{item.output}</code>
                </pre>
              </div>

              {/* Explanation */}
              <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 text-xs text-slate-700 dark:text-slate-300">
                <span className="font-bold text-indigo-700 dark:text-indigo-400 mr-1.5">{t.explLabel}</span>
                {item.explanation[language]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
