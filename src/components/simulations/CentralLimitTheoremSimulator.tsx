import React, { useState, useMemo } from 'react';
import { calculateMean, calculateStandardDeviation } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { Play, RotateCcw, FastForward } from 'lucide-react';

interface Props {
  language: Language;
}

type PopulationType = 'skewed' | 'uniform' | 'bimodal';

export const CentralLimitTheoremSimulator: React.FC<Props> = ({ language }) => {
  const [popType, setPopType] = useState<PopulationType>('skewed');
  const [sampleSize, setSampleSize] = useState<number>(30);
  const [sampleMeans, setSampleMeans] = useState<number[]>([]);

  // Generator for population samples
  const drawPopulationValue = (type: PopulationType): number => {
    if (type === 'uniform') {
      return Math.random() * 20; // Uniform [0, 20], mean = 10
    }
    if (type === 'skewed') {
      // Exponential approximation
      return -Math.log(1 - Math.random()) * 5; // mean = 5, skewed right
    }
    // Bimodal
    return Math.random() > 0.5 ? 4 + Math.random() * 4 : 14 + Math.random() * 4;
  };

  const theoreticalMetrics = useMemo(() => {
    if (popType === 'uniform') return { mu: 10, sigma: 20 / Math.sqrt(12) };
    if (popType === 'skewed') return { mu: 5, sigma: 5 };
    return { mu: 11, sigma: 5.5 };
  }, [popType]);

  const theoreticalSE = useMemo(() => {
    return Number((theoreticalMetrics.sigma / Math.sqrt(sampleSize)).toFixed(3));
  }, [theoreticalMetrics, sampleSize]);

  const drawSamples = (numBatches: number) => {
    const newMeans: number[] = [];
    for (let b = 0; b < numBatches; b++) {
      let sum = 0;
      for (let i = 0; i < sampleSize; i++) {
        sum += drawPopulationValue(popType);
      }
      newMeans.push(sum / sampleSize);
    }
    setSampleMeans((prev) => [...prev, ...newMeans]);
  };

  const handleReset = () => {
    setSampleMeans([]);
  };

  const empiricalMean = useMemo(() => calculateMean(sampleMeans), [sampleMeans]);
  const empiricalSE = useMemo(() => calculateStandardDeviation(sampleMeans, true), [sampleMeans]);

  // Histogram bins (20 bins)
  const histogram = useMemo(() => {
    if (sampleMeans.length === 0) return [];
    const min = Math.min(...sampleMeans);
    const max = Math.max(...sampleMeans);
    const numBins = 20;
    const binWidth = (max - min) / numBins || 1;

    const bins = Array.from({ length: numBins }, (_, i) => ({
      x0: min + i * binWidth,
      x1: min + (i + 1) * binWidth,
      count: 0,
    }));

    for (const val of sampleMeans) {
      let idx = Math.floor((val - min) / binWidth);
      if (idx >= numBins) idx = numBins - 1;
      if (idx >= 0) bins[idx].count++;
    }

    const maxCount = Math.max(...bins.map((b) => b.count), 1);
    return bins.map((b) => ({
      ...b,
      heightPercent: (b.count / maxCount) * 100,
    }));
  }, [sampleMeans]);

  const t = {
    title: language === 'bn' ? 'কেন্দ্রীয় সীমাস্থ উপপাদ্য (CLT) সিমুলেটর' : 'Central Limit Theorem (CLT) Simulator',
    subtitle:
      language === 'bn'
        ? 'মূল জনসংখ্যা যেকোনো আকৃতির (বঙ্কিম, সুষম বা দুই-চুলা) হলেও নমুনা গড়গুলো কীভাবে নিখুঁত বেল কার্ভ তৈরি করে দেখুন!'
        : 'Watch sample averages transform into a smooth normal bell curve, no matter how non-normal the parent population is!',
    popLabel: language === 'bn' ? 'মূল জনসংখ্যার ধরন:' : 'Parent Population Distribution:',
    skewed: language === 'bn' ? 'তীব্র বঙ্কিম (Skewed/Exponential)' : 'Heavily Skewed',
    uniform: language === 'bn' ? 'সুষম (Uniform / Flat)' : 'Uniform (Flat)',
    bimodal: language === 'bn' ? 'দ্বি-শীর্ষ (Bimodal / Two Peaks)' : 'Bimodal (Two Peaks)',
    sampleSizeLabel: language === 'bn' ? 'নমুনার আকার (n):' : 'Sample Size (n):',
    draw1: language === 'bn' ? '+১ টি নমুনা' : '+1 Sample',
    draw100: language === 'bn' ? '+১০০ টি নমুনা' : '+100 Samples',
    draw1000: language === 'bn' ? '+১,০০০ টি নমুনা' : '+1,000 Samples',
    reset: language === 'bn' ? 'রিসেট' : 'Reset',
    totalSamples: language === 'bn' ? 'সংগৃহীত মোট নমুনা গড়:' : 'Total Samples Drawn:',
    empMean: language === 'bn' ? 'নমুনা গড়ের গড়:' : 'Empirical Mean of Means:',
    empSE: language === 'bn' ? 'বাস্তব স্ট্যান্ডার্ড এরর:' : 'Empirical Std Error (SE):',
    theoSE: language === 'bn' ? 'তাত্ত্বিক স্ট্যান্ডার্ড এরর (σ/√n):' : 'Theoretical SE (σ/√n):',
    emptyMsg:
      language === 'bn'
        ? 'শুরু করতে উপরের "+১০০ টি নমুনা" বাটনে ক্লিক করুন!'
        : 'Click "+100 Samples" or "+1,000 Samples" above to witness the theorem in action!',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
      </div>

      {/* Population Type Selector */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.popLabel}</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            ['skewed', t.skewed],
            ['uniform', t.uniform],
            ['bimodal', t.bimodal],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setPopType(key as PopulationType);
                setSampleMeans([]);
              }}
              className={`px-3 py-2 text-xs font-semibold rounded-xl border text-left transition-all ${
                popType === key
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Sample Size (n) Slider & Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{t.sampleSizeLabel}</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400 font-bold text-sm">n = {sampleSize}</span>
          </div>
          <input
            type="range"
            min="2"
            max="60"
            step="1"
            value={sampleSize}
            onChange={(e) => {
              setSampleSize(parseInt(e.target.value));
              setSampleMeans([]);
            }}
            className="w-full accent-indigo-600 cursor-pointer"
          />
          <div className="text-[11px] text-slate-500">
            {sampleSize >= 30 ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">✓ n ≥ 30: CLT fully guarantees normal approximation</span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400 font-medium">n &lt; 30: Slight parent skewness may linger</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => drawSamples(1)}
            className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 text-indigo-500" />
            {t.draw1}
          </button>
          <button
            onClick={() => drawSamples(100)}
            className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
          >
            <FastForward className="w-3.5 h-3.5" />
            {t.draw100}
          </button>
          <button
            onClick={() => drawSamples(1000)}
            className="px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-xs"
          >
            <FastForward className="w-3.5 h-3.5" />
            {t.draw1000}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <div className="text-[11px] text-slate-500">{t.totalSamples}</div>
          <div className="text-xl font-black text-slate-900 dark:text-slate-100 mt-0.5">
            {sampleMeans.length.toLocaleString()}
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <div className="text-[11px] text-slate-500">{t.empMean}</div>
          <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
            {sampleMeans.length > 0 ? empiricalMean : '--'}
            <span className="text-xs text-slate-400 font-normal ml-1.5">(μ = {theoreticalMetrics.mu})</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <div className="text-[11px] text-slate-500">{t.theoSE}</div>
          <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">{theoreticalSE}</div>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400">{t.empSE}</div>
          <div className="text-xl font-extrabold text-emerald-700 dark:text-emerald-300 mt-0.5">
            {sampleMeans.length > 1 ? empiricalSE : '--'}
          </div>
        </div>
      </div>

      {/* Dynamic Histogram of Sample Means */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
          <span>{language === 'bn' ? 'নমুনা গড়ের বণ্টন (Sampling Distribution of Means)' : 'Sampling Distribution of Means'}</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-mono">
            {sampleMeans.length > 0 && `Bell-curve convergence: ${sampleMeans.length >= 500 ? 'High' : 'Moderate'}`}
          </span>
        </div>

        <div className="relative h-56 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 flex items-end gap-1 overflow-hidden">
          {sampleMeans.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center text-sm text-slate-400 italic">
              {t.emptyMsg}
            </div>
          ) : (
            histogram.map((bin, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                {/* Tooltip */}
                <div className="absolute -top-7 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-[9px] px-1.5 py-0.5 rounded pointer-events-none transition-opacity whitespace-nowrap z-20">
                  {bin.count} samples ({bin.x0.toFixed(1)} - {bin.x1.toFixed(1)})
                </div>
                {/* Bar */}
                <div
                  className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm transition-all duration-300"
                  style={{ height: `${Math.max(bin.heightPercent, 2)}%` }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
