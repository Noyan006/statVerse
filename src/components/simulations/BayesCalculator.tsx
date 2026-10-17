import React, { useState, useMemo } from 'react';
import { calculateBayes } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { ShieldAlert, Users, CheckCircle, XCircle } from 'lucide-react';

interface Props {
  language: Language;
}

export const BayesCalculator: React.FC<Props> = ({ language }) => {
  const [priorPercent, setPriorPercent] = useState<number>(1.0); // 1%
  const [sensitivityPercent, setSensitivityPercent] = useState<number>(99.0); // 99%
  const [falsePositivePercent, setFalsePositivePercent] = useState<number>(5.0); // 5%

  const prior = priorPercent / 100;
  const sensitivity = sensitivityPercent / 100;
  const falsePositive = falsePositivePercent / 100;

  const { posterior, probB } = useMemo(() => {
    return calculateBayes(prior, sensitivity, falsePositive);
  }, [prior, sensitivity, falsePositive]);

  // Natural Frequency out of 10,000 people
  const totalPeople = 10000;
  const sick = Math.round(totalPeople * prior);
  const healthy = totalPeople - sick;
  const truePositives = Math.round(sick * sensitivity);
  const falseNegatives = sick - truePositives;
  const falsePositives = Math.round(healthy * falsePositive);
  const trueNegatives = healthy - falsePositives;
  const totalPositives = truePositives + falsePositives;

  const t = {
    title: language === 'bn' ? "বেইজের উপপাদ্য ক্যালকুলেটর" : "Bayes' Theorem & Screening Calculator",
    subtitle:
      language === 'bn'
        ? 'মেডিকেল টেস্ট ৯৯% নির্ভুল হলেও কেন পজিটিভ ফলাফলের পরেও রোগী সুস্থ হওয়ার ঝুঁকি থাকে তা জানুন!'
        : 'Understand why a 99% accurate test still yields a high false alarm rate when the base condition is rare!',
    priorLabel: language === 'bn' ? 'রোগের পূর্ব সম্ভাব্যতা / প্রাদুর্ভাব (Prior P(D)):' : 'Disease Prevalence (Prior P(D)):',
    sensLabel: language === 'bn' ? 'টেস্টের সংবেদনশীলতা / ট্রু পজিটিভ (P(+|D)):' : 'Sensitivity / True Positive (P(+|D)):',
    fpLabel: language === 'bn' ? 'ফলস পজিটিভ হার (P(+|¬D)):' : 'False Positive Rate (P(+|¬D)):',
    posteriorResult: language === 'bn' ? 'টেস্ট পজিটিভ আসলে সত্যি রোগ থাকার সম্ভাবনা:' : 'Probability of Disease Given Positive Test P(D|+):',
    natFreqTitle: language === 'bn' ? '১০,০০০ জন মানুষের মধ্যে বাস্তব ভাগ:' : 'Natural Frequency Breakdown (Per 10,000 People):',
    tp: language === 'bn' ? 'আসল পজিটিভ (অসুস্থ ও টেস্ট +):' : 'True Positives (Sick & Test +):',
    fp: language === 'bn' ? 'ভুল অ্যালার্ম (সুস্থ কিন্তু টেস্ট +):' : 'False Positives (Healthy but Test +):',
    fn: language === 'bn' ? 'ফলস নেগেটিভ (অসুস্থ কিন্তু টেস্ট -):' : 'False Negatives (Sick & Test -):',
    tn: language === 'bn' ? 'ট্রু নেগেটিভ (সুস্থ ও টেস্ট -):' : 'True Negatives (Healthy & Test -):',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-indigo-500" />
          {t.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
      </div>

      {/* Hero Result Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 dark:border-indigo-900/60 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <div className="text-xs uppercase font-bold text-indigo-700 dark:text-indigo-300 tracking-wider">
            {t.posteriorResult}
          </div>
          <div className="text-3xl sm:text-4xl font-black text-indigo-600 dark:text-indigo-400 mt-1">
            {(posterior * 100).toFixed(2)}%
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            P(D|+) = True Positives / Total Positives = {truePositives} / {totalPositives}
          </div>
        </div>

        <div className="text-right text-xs text-slate-600 dark:text-slate-400 max-w-xs">
          {language === 'bn'
            ? `${totalPositives} জন পজিটিভ টেস্ট ফলাফলের মধ্যে মাত্র ${truePositives} জন সত্যি অসুস্থ; বাকি ${falsePositives} জন সম্পূর্ণ সুস্থ!`
            : `Out of ${totalPositives} total positive tests, only ${truePositives} people are actually sick; ${falsePositives} are false alarms!`}
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{t.priorLabel}</span>
            <span className="font-mono text-indigo-600 font-bold">{priorPercent}%</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="15"
            step="0.1"
            value={priorPercent}
            onChange={(e) => setPriorPercent(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{t.sensLabel}</span>
            <span className="font-mono text-indigo-600 font-bold">{sensitivityPercent}%</span>
          </div>
          <input
            type="range"
            min="60"
            max="100"
            step="0.5"
            value={sensitivityPercent}
            onChange={(e) => setSensitivityPercent(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{t.fpLabel}</span>
            <span className="font-mono text-rose-600 font-bold">{falsePositivePercent}%</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="20"
            step="0.5"
            value={falsePositivePercent}
            onChange={(e) => setFalsePositivePercent(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Natural Frequency Breakdown Cards */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          {t.natFreqTitle}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
            <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-300 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              {t.tp}
            </div>
            <div className="text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">{truePositives}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
            <div className="flex items-center gap-1.5 text-xs text-rose-700 dark:text-rose-300 font-semibold">
              <XCircle className="w-3.5 h-3.5" />
              {t.fp}
            </div>
            <div className="text-2xl font-black text-rose-700 dark:text-rose-300 mt-1">{falsePositives}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 font-semibold">{t.fn}</div>
            <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mt-1">{falseNegatives}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
            <div className="text-xs text-slate-500 font-semibold">{t.tn}</div>
            <div className="text-2xl font-bold text-slate-700 dark:text-slate-300 mt-1">{trueNegatives}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
