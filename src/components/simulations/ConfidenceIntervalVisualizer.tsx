import React, { useState, useMemo, useEffect } from 'react';
import { calculateConfidenceInterval } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { Shuffle, CheckCircle, AlertTriangle } from 'lucide-react';

interface Props {
  language: Language;
}

interface SampleInterval {
  id: number;
  mean: number;
  lower: number;
  upper: number;
  captures: boolean;
}

export const ConfidenceIntervalVisualizer: React.FC<Props> = ({ language }) => {
  const [sampleSize, setSampleSize] = useState<number>(36);
  const [confidenceLevel, setConfidenceLevel] = useState<0.9 | 0.95 | 0.99>(0.95);
  const [intervals, setIntervals] = useState<SampleInterval[]>([]);

  const trueMu = 50;
  const trueSigma = 12;

  const generateIntervals = () => {
    const list: SampleInterval[] = [];
    for (let i = 0; i < 50; i++) {
      // Generate sample of size n from Normal(50, 12)
      let sum = 0;
      for (let s = 0; s < sampleSize; s++) {
        // Box-Muller transform for normal variates
        const u1 = Math.random();
        const u2 = Math.random();
        const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
        sum += trueMu + z0 * trueSigma;
      }
      const sampleMean = sum / sampleSize;
      const ci = calculateConfidenceInterval(sampleMean, trueSigma, sampleSize, confidenceLevel);
      const captures = ci.lower <= trueMu && ci.upper >= trueMu;

      list.push({
        id: i + 1,
        mean: sampleMean,
        lower: ci.lower,
        upper: ci.upper,
        captures,
      });
    }
    setIntervals(list);
  };

  useEffect(() => {
    generateIntervals();
  }, [sampleSize, confidenceLevel]);

  const capturedCount = intervals.filter((item) => item.captures).length;
  const missedCount = intervals.length - capturedCount;
  const empiricalRate = intervals.length > 0 ? (capturedCount / intervals.length) * 100 : 0;

  const t = {
    title: language === 'bn' ? 'আস্থা ব্যবধি (Confidence Interval) সিমুলেটর' : 'Confidence Interval Coverage Visualizer',
    subtitle:
      language === 'bn'
        ? '৫০টি স্বাধীন নমুনার আস্থা ব্যবধি দেখুন। সবুজ ব্যবধিগুলো সত্য গড় (৫০) ধারণ করেছে, আর লালগুলো মিস করেছে!'
        : 'Visualize 50 independent confidence intervals. Green bars capture the true mean (μ=50); red bars fail!',
    sampleSizeLabel: language === 'bn' ? 'নমুনার আকার (n):' : 'Sample Size (n):',
    confLevelLabel: language === 'bn' ? 'আস্থা মাত্রা:' : 'Confidence Level:',
    regenerate: language === 'bn' ? 'নতুন ৫০টি নমুনা নিন' : 'Draw 50 New Samples',
    captured: language === 'bn' ? 'সফল ব্যবধি (μ অন্তর্ভুক্ত):' : 'Captured True Mean (μ):',
    missed: language === 'bn' ? 'মিস হওয়া ব্যবধি:' : 'Missed True Mean:',
    empiricalRateLabel: language === 'bn' ? 'বাস্তব কাভারেজ হার:' : 'Empirical Coverage Rate:',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <button
          onClick={generateIntervals}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
        >
          <Shuffle className="w-3.5 h-3.5" />
          {t.regenerate}
        </button>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{t.sampleSizeLabel}</span>
            <span className="font-mono text-indigo-600 font-bold">n = {sampleSize}</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={sampleSize}
            onChange={(e) => setSampleSize(parseInt(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">{t.confLevelLabel}</div>
          <div className="grid grid-cols-3 gap-2">
            {[0.9, 0.95, 0.99].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setConfidenceLevel(lvl as 0.9 | 0.95 | 0.99)}
                className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  confidenceLevel === lvl
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                {Math.round(lvl * 100)}%
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4" />
            {t.captured}
          </div>
          <div className="text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-1">
            {capturedCount} / {intervals.length}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900">
          <div className="text-xs font-semibold text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4" />
            {t.missed}
          </div>
          <div className="text-2xl font-black text-rose-700 dark:text-rose-300 mt-1">
            {missedCount} / {intervals.length}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
          <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300">{t.empiricalRateLabel}</div>
          <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300 mt-1">
            {empiricalRate.toFixed(1)}%
            <span className="text-xs font-normal text-indigo-500 ml-1.5">
              (Target: {Math.round(confidenceLevel * 100)}%)
            </span>
          </div>
        </div>
      </div>

      {/* Visual Canvas of 50 intervals */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-slate-500 font-mono">
          <span>40</span>
          <span className="font-bold text-slate-800 dark:text-slate-200">
            True Population Mean μ = 50
          </span>
          <span>60</span>
        </div>

        <div className="relative h-72 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col justify-between">
          {/* Vertical true mean line at 50% width */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-900 dark:bg-slate-100 z-10 opacity-70" />

          {intervals.map((ci) => {
            // Map [40, 60] to [0%, 100%]
            const leftPercent = Math.max(0, Math.min(100, ((ci.lower - 40) / 20) * 100));
            const rightPercent = Math.max(0, Math.min(100, ((ci.upper - 40) / 20) * 100));
            const widthPercent = Math.max(0.5, rightPercent - leftPercent);
            const meanPercent = ((ci.mean - 40) / 20) * 100;

            return (
              <div key={ci.id} className="relative h-1 w-full">
                {/* Interval bar */}
                <div
                  className={`absolute h-1 rounded-full ${
                    ci.captures ? 'bg-emerald-500' : 'bg-rose-500 shadow-sm'
                  }`}
                  style={{
                    left: `${leftPercent}%`,
                    width: `${widthPercent}%`,
                  }}
                />
                {/* Center dot for sample mean */}
                <div
                  className={`absolute w-1.5 h-1.5 -ml-0.75 -top-0.25 rounded-full ${
                    ci.captures ? 'bg-emerald-700 dark:bg-emerald-300' : 'bg-rose-700 dark:bg-rose-300'
                  }`}
                  style={{ left: `${meanPercent}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
