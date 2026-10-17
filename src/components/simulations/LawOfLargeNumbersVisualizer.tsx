import React, { useState, useMemo } from 'react';
import { Language } from '../../types/index.ts';
import { Play, RotateCcw, FastForward, Activity } from 'lucide-react';

interface Props {
  language: Language;
}

export const LawOfLargeNumbersVisualizer: React.FC<Props> = ({ language }) => {
  const [experiment, setExperiment] = useState<'coin' | 'die'>('coin');
  const [history, setHistory] = useState<Array<{ trial: number; val: number; runningAvg: number }>>([]);

  const theoreticalMean = experiment === 'coin' ? 0.5 : 3.5;

  const runSimulation = (count: number) => {
    let currentSum = history.length > 0 ? history[history.length - 1].runningAvg * history.length : 0;
    const startIdx = history.length;
    const newItems: Array<{ trial: number; val: number; runningAvg: number }> = [];

    for (let i = 1; i <= count; i++) {
      const trialNum = startIdx + i;
      let outcome = 0;
      if (experiment === 'coin') {
        outcome = Math.random() < 0.5 ? 1 : 0; // 1 for Head, 0 for Tail
      } else {
        outcome = Math.floor(Math.random() * 6) + 1; // 1..6
      }
      currentSum += outcome;
      newItems.push({
        trial: trialNum,
        val: outcome,
        runningAvg: Number((currentSum / trialNum).toFixed(4)),
      });
    }

    setHistory((prev) => [...prev, ...newItems]);
  };

  const handleReset = () => {
    setHistory([]);
  };

  const currentAverage = history.length > 0 ? history[history.length - 1].runningAvg : theoreticalMean;
  const currentError = Math.abs(currentAverage - theoreticalMean);

  // SVG Line Chart coordinates
  const svgLine = useMemo(() => {
    if (history.length < 2) return '';
    const width = 600;
    const height = 200;
    const minY = experiment === 'coin' ? 0 : 1;
    const maxY = experiment === 'coin' ? 1 : 6;
    const yRange = maxY - minY;

    const maxTrials = Math.max(history.length, 50);

    let path = `M 0 ${height - ((history[0].runningAvg - minY) / yRange) * height}`;
    for (let i = 1; i < history.length; i++) {
      const x = (history[i].trial / maxTrials) * width;
      const y = height - ((history[i].runningAvg - minY) / yRange) * height;
      path += ` L ${x} ${y}`;
    }
    return path;
  }, [history, experiment]);

  const t = {
    title: language === 'bn' ? 'বৃহৎ সংখ্যার বিধি (Law of Large Numbers) সিমুলেটর' : 'Law of Large Numbers (LLN) Simulator',
    subtitle:
      language === 'bn'
        ? 'পরীক্ষার সংখ্যা বৃদ্ধির সাথে সাথে কীভাবে নমুনা গড় তাত্ত্বিক প্রত্যাশিত মানে স্থির হয় তা পর্যবেক্ষণ করুন।'
        : 'Watch how the cumulative average stabilizes and converges to the theoretical expected value as trials accumulate.',
    coin: language === 'bn' ? 'মুদ্রা নিক্ষেপ (E = ০.৫)' : 'Coin Toss (E = 0.5)',
    die: language === 'bn' ? 'ছক্কা নিক্ষেপ (E = ৩.৫)' : 'Die Roll (E = 3.5)',
    totalTrials: language === 'bn' ? 'মোট পরীক্ষা সংখ্যা:' : 'Total Trials:',
    currentAvg: language === 'bn' ? 'বর্তমান ক্রমযোজিত গড়:' : 'Current Running Average:',
    error: language === 'bn' ? 'তাত্ত্বিক মান হতে বিচ্যুতি:' : 'Error from Expected:',
    roll10: language === 'bn' ? '+১০ বার' : '+10 Trials',
    roll100: language === 'bn' ? '+১০০ বার' : '+100 Trials',
    roll500: language === 'bn' ? '+৫০০ বার' : '+500 Trials',
    reset: language === 'bn' ? 'রিসেট' : 'Reset',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" />
            {t.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => {
              setExperiment('coin');
              setHistory([]);
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              experiment === 'coin'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {t.coin}
          </button>
          <button
            onClick={() => {
              setExperiment('die');
              setHistory([]);
            }}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              experiment === 'die'
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {t.die}
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500">{t.totalTrials}</div>
          <div className="text-3xl font-black text-slate-900 dark:text-slate-100 mt-1">{history.length}</div>
        </div>

        <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
          <div className="text-xs text-indigo-600 dark:text-indigo-400">{t.currentAvg}</div>
          <div className="text-3xl font-black text-indigo-600 dark:text-indigo-300 mt-1">
            {history.length > 0 ? currentAverage : '--'}
          </div>
          <div className="text-[11px] text-indigo-500 mt-0.5">Target E[X] = {theoreticalMean}</div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
          <div className="text-xs text-emerald-600 dark:text-emerald-400">{t.error}</div>
          <div className="text-3xl font-black text-emerald-600 dark:text-emerald-300 mt-1">
            {history.length > 0 ? currentError.toFixed(4) : '0.0000'}
          </div>
          <div className="text-[11px] text-emerald-500 mt-0.5">Approaches 0 as n → ∞</div>
        </div>
      </div>

      {/* Convergence Line Chart */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-slate-500 font-mono">
          <span>Trial 1</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
            {language === 'bn' ? 'ক্রমযোজিত গড়ের রেখাচিত্র' : 'Running Mean Trajectory'}
          </span>
          <span>Trial {Math.max(history.length, 50)}</span>
        </div>

        <div className="relative h-56 bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700 overflow-hidden">
          <svg viewBox="0 0 600 200" className="w-full h-full">
            {/* Target Expected Value Red Dashed Line */}
            {experiment === 'coin' ? (
              <line x1="0" y1="100" x2="600" y2="100" className="stroke-rose-500 stroke-2" strokeDasharray="4,4" />
            ) : (
              <line x1="0" y1="100" x2="600" y2="100" className="stroke-rose-500 stroke-2" strokeDasharray="4,4" />
            )}

            {/* Label for Expected value */}
            <text x="590" y="95" textAnchor="end" className="text-[10px] fill-rose-500 font-mono font-bold">
              E[X] = {theoreticalMean}
            </text>

            {/* Running Mean Path */}
            {svgLine && <path d={svgLine} fill="none" className="stroke-indigo-600 dark:stroke-indigo-400 stroke-2 transition-all duration-150" />}
          </svg>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => runSimulation(10)}
          className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
        >
          <Play className="w-3.5 h-3.5 text-indigo-500" />
          {t.roll10}
        </button>
        <button
          onClick={() => runSimulation(100)}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
        >
          <FastForward className="w-3.5 h-3.5" />
          {t.roll100}
        </button>
        <button
          onClick={() => runSimulation(500)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
        >
          <FastForward className="w-3.5 h-3.5" />
          {t.roll500}
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
