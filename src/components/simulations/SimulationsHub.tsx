import React, { useState } from 'react';
import { Language } from '../../types/index.ts';
import { MeanMedianModeExplorer } from './MeanMedianModeExplorer.tsx';
import { VarianceExplorer } from './VarianceExplorer.tsx';
import { NormalDistributionVisualizer } from './NormalDistributionVisualizer.tsx';
import { CentralLimitTheoremSimulator } from './CentralLimitTheoremSimulator.tsx';
import { LawOfLargeNumbersVisualizer } from './LawOfLargeNumbersVisualizer.tsx';
import { BayesCalculator } from './BayesCalculator.tsx';
import { ConfidenceIntervalVisualizer } from './ConfidenceIntervalVisualizer.tsx';
import { HypothesisTestVisualizer } from './HypothesisTestVisualizer.tsx';
import { RegressionExplorer } from './RegressionExplorer.tsx';
import { Sparkles, Activity, Layers, ArrowLeft } from 'lucide-react';

interface Props {
  language: Language;
}

export const SimulationsHub: React.FC<Props> = ({ language }) => {
  const [activeSim, setActiveSim] = useState<string>('mean-median-mode');

  const tools = [
    {
      id: 'mean-median-mode',
      title: { en: 'Mean, Median & Mode Explorer', bn: 'গড়, মধ্যমা ও প্রচুরক সিমুলেটর' },
      desc: {
        en: 'Drag data points and outliers to observe how central tendency metrics shift.',
        bn: 'উপাত্ত ও চরম আউটলায়ার নাড়িয়ে দেখুন কীভাবে বিভিন্ন কেন্দ্র পরিমাপ স্থানান্তরিত হয়।',
      },
    },
    {
      id: 'variance',
      title: { en: 'Variance & Standard Deviation', bn: 'ভেদাঙ্ক ও পরিমিত ব্যবধান পরিদর্শক' },
      desc: {
        en: 'Inspect squared deviations from the mean and understand Bessel\'s n-1 correction.',
        bn: 'গড় থেকে প্রতিটি মানের দূরত্বের বর্গ এবং বেসেলের n - ১ সংশোধনীর বাস্তব রূপ।',
      },
    },
    {
      id: 'normal',
      title: { en: 'Normal Distribution & Bell Curve', bn: 'স্বাভাবিক বণ্টন ও ঘণ্টা বক্ররেখা' },
      desc: {
        en: 'Adjust μ and σ, explore 68-95-99.7 empirical rule and calculate Z-scores.',
        bn: 'গড় ও পরিমিত ব্যবধান পরিবর্তন করে এম্পিরিক্যাল নীতি ও জেড-স্কোর পর্যবেক্ষণ করুন।',
      },
    },
    {
      id: 'clt',
      title: { en: 'Central Limit Theorem (CLT)', bn: 'কেন্দ্রীয় সীমাস্থ উপপাদ্য (CLT)' },
      desc: {
        en: 'Simulate drawing thousands of samples from skewed distributions to see normal convergence.',
        bn: 'বঙ্কিম বা সুষম জনসংখ্যা হতে হাজার হাজার নমুনা তুলে ঘণ্টা কার্ভ তৈরি হতে দেখুন।',
      },
    },
    {
      id: 'lln',
      title: { en: 'Law of Large Numbers (LLN)', bn: 'বৃহৎ সংখ্যার বিধি (LLN)' },
      desc: {
        en: 'Flip coins or roll dice up to 1,000 times to see sample mean converge to expected value.',
        bn: 'মুদ্রা বা ছক্কার পুনরাবৃত্তিতে কীভাবে ক্রমযোজিত গড় তাত্ত্বিক মানে স্থিতিশীল হয়।',
      },
    },
    {
      id: 'bayes',
      title: { en: "Bayes' Theorem & Disease Screening", bn: 'বেইজের উপপাদ্য ও স্ক্রিনিং ক্যালকুলেটর' },
      desc: {
        en: 'Solve the false positive screening paradox with natural frequency tree diagrams.',
        bn: 'মেডিকেল টেস্ট ও ফলস পজিটিভের বিখ্যাত ধাঁধা প্রাকৃতিক গণনার মাধ্যমে সমাধান।',
      },
    },
    {
      id: 'ci',
      title: { en: 'Confidence Interval Visualizer', bn: 'আস্থা ব্যবধি (CI) কাভারেজ সিমুলেটর' },
      desc: {
        en: 'Generate 50 independent confidence intervals and observe green/red coverage rates.',
        bn: '৫০টি স্বাধীন আস্থা ব্যবধি তৈরি করে ৯৫% বা ৯৯% সফল কাভারেজ হার পরীক্ষা করুন।',
      },
    },
    {
      id: 'ht',
      title: { en: 'Hypothesis Testing & p-Values', bn: 'প্রকল্প যাচাই ও পি-মান টেস্ট' },
      desc: {
        en: 'Visualize critical rejection regions, alpha levels, and test statistics.',
        bn: 'সংকট প্রত্যাখ্যান অঞ্চল, তাৎপর্য মাত্রা এবং জেড টেস্ট স্ট্যাটিস্টিক প্রদর্শন।',
      },
    },
    {
      id: 'regression',
      title: { en: 'Linear Regression & Correlation', bn: 'সরল রৈখিক নির্ভরণ ও সহসংশ্লেষ' },
      desc: {
        en: 'Click on the canvas to place points and see OLS line, Pearson r, and R² update.',
        bn: 'ক্লিক করে বিন্দু যোগ করুন এবং OLS নির্ভরণ রেখা, r ও R² তাৎক্ষণিক পরিবর্তিত হতে দেখুন।',
      },
    },
  ];

  const t = {
    title: language === 'bn' ? 'ইন্টারেক্টিভ সিমুলেশন ও ল্যাবরেটরি' : 'Interactive Simulations & Statistical Labs',
    subtitle:
      language === 'bn'
        ? 'তত্ত্বীয় সূত্রকে জীবন্ত দৃশ্যে রূপান্তর করতে নিচের যেকোনো সিমুলেটর বেছে নিন।'
        : 'Explore live, mathematical simulators with real-time sliders and dynamic SVG rendering.',
  };

  const renderCurrentSimulator = () => {
    switch (activeSim) {
      case 'mean-median-mode':
        return <MeanMedianModeExplorer language={language} />;
      case 'variance':
        return <VarianceExplorer language={language} />;
      case 'normal':
        return <NormalDistributionVisualizer language={language} />;
      case 'clt':
        return <CentralLimitTheoremSimulator language={language} />;
      case 'lln':
        return <LawOfLargeNumbersVisualizer language={language} />;
      case 'bayes':
        return <BayesCalculator language={language} />;
      case 'ci':
        return <ConfidenceIntervalVisualizer language={language} />;
      case 'ht':
        return <HypothesisTestVisualizer language={language} />;
      case 'regression':
        return <RegressionExplorer language={language} />;
      default:
        return <MeanMedianModeExplorer language={language} />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Sparkles className="w-7 h-7 text-indigo-500" />
          {t.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </div>

      {/* Simulator Switcher Carousel / Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveSim(tool.id)}
            className={`p-3 text-left rounded-xl border transition-all flex flex-col justify-between ${
              activeSim === tool.id
                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-xs'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            <div className="font-bold text-xs leading-tight line-clamp-2">{tool.title[language]}</div>
          </button>
        ))}
      </div>

      {/* Render Selected Simulator */}
      <div>{renderCurrentSimulator()}</div>
    </div>
  );
};
