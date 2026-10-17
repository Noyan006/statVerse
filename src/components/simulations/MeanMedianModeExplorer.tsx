import React, { useState, useMemo } from 'react';
import { calculateMean, calculateMedian, calculateMode } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { RotateCcw, Plus, Trash2, Zap } from 'lucide-react';

interface Props {
  language: Language;
}

export const MeanMedianModeExplorer: React.FC<Props> = ({ language }) => {
  const [data, setData] = useState<number[]>([4, 8, 7, 4, 9, 10, 7, 4, 6]);
  const [newValue, setNewValue] = useState<string>('');
  const [outlier, setOutlier] = useState<number>(10);

  const mean = useMemo(() => calculateMean(data), [data]);
  const median = useMemo(() => calculateMedian(data), [data]);
  const mode = useMemo(() => calculateMode(data), [data]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newValue);
    if (!isNaN(val) && val >= -100 && val <= 500) {
      setData((prev) => [...prev, val]);
      setNewValue('');
    }
  };

  const handleRemove = (index: number) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setData([4, 8, 7, 4, 9, 10, 7, 4, 6]);
    setOutlier(10);
  };

  const applyOutlier = (val: number) => {
    setOutlier(val);
    setData((prev) => {
      const base = [4, 8, 7, 4, 9, 7, 4, 6];
      return [...base, val];
    });
  };

  const minVal = Math.min(0, ...data);
  const maxVal = Math.max(12, ...data);
  const range = maxVal - minVal || 1;

  const t = {
    title: language === 'bn' ? 'গড়, মধ্যমা ও প্রচুরক সিমুলেটর' : 'Mean, Median & Mode Explorer',
    subtitle:
      language === 'bn'
        ? 'উপাত্ত পরিবর্তন করুন অথবা আউটলায়ারের তীব্র প্রভাব স্বচক্ষে পর্যবেক্ষণ করুন।'
        : 'Modify data points or inject extreme outliers to witness real-time behavioral differences.',
    addBtn: language === 'bn' ? 'যোগ করুন' : 'Add',
    resetBtn: language === 'bn' ? 'রিসেট' : 'Reset',
    outlierLabel:
      language === 'bn'
        ? 'চরম মান (Outlier) স্লাইডার: একটি সংখ্যাকে বহুদূরে টেনে দেখুন গড়ের কী দশা হয়!'
        : 'Outlier Stress Slider: Drag one data point to extreme values to observe sensitivity!',
    meanLabel: language === 'bn' ? 'গড় (Mean)' : 'Mean',
    medianLabel: language === 'bn' ? 'মধ্যমা (Median)' : 'Median',
    modeLabel: language === 'bn' ? 'প্রচুরক (Mode)' : 'Mode',
    noMode: language === 'bn' ? 'কোনো প্রচুরক নেই' : 'No distinct mode',
    sortedView: language === 'bn' ? 'ছোট থেকে বড় ক্রমানুসারে উপাত্ত:' : 'Sorted Dataset:',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-500" />
            {t.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.resetBtn}
        </button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{t.meanLabel}</div>
          <div className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mt-1">{mean}</div>
          <div className="text-xs text-blue-600/80 dark:text-blue-400/80 mt-1">
            {language === 'bn' ? 'সকল মানের যোগফল / মোট পদ' : 'Sum of elements / n'}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{t.medianLabel}</div>
          <div className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-300 mt-1">{median}</div>
          <div className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mt-1">
            {language === 'bn' ? '৫০তম পার্সেন্টাইল (মাঝের মান)' : '50th percentile (middle point)'}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900">
          <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{t.modeLabel}</div>
          <div className="text-3xl font-extrabold text-purple-700 dark:text-purple-300 mt-1">
            {mode.length > 0 ? mode.join(', ') : t.noMode}
          </div>
          <div className="text-xs text-purple-600/80 dark:text-purple-400/80 mt-1">
            {language === 'bn' ? 'সর্বাধিক পৌনঃপুনিক মান' : 'Most frequent observation'}
          </div>
        </div>
      </div>

      {/* Visual Dot Plot */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-medium text-slate-500">
          <span>{minVal}</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            {language === 'bn' ? 'উপাত্ত ডট প্লট ও কেন্দ্র নির্দেশক' : 'Data Points & Centers'}
          </span>
          <span>{maxVal}</span>
        </div>

        <div className="relative h-28 bg-slate-100 dark:bg-slate-800/60 rounded-xl p-3 flex items-center overflow-hidden border border-slate-200 dark:border-slate-700">
          {/* Baseline axis */}
          <div className="absolute left-6 right-6 top-1/2 h-0.5 bg-slate-300 dark:bg-slate-600" />

          {/* Mean marker line */}
          <div
            className="absolute top-2 bottom-2 w-0.5 bg-blue-500 z-10 transition-all duration-300"
            style={{
              left: `calc(24px + (100% - 48px) * ${(mean - minVal) / range})`,
            }}
          >
            <span className="absolute -top-1 -translate-x-1/2 -translate-y-full px-1.5 py-0.5 bg-blue-500 text-white rounded text-[10px] font-bold">
              Mean: {mean}
            </span>
          </div>

          {/* Median marker line */}
          <div
            className="absolute top-2 bottom-2 w-0.5 bg-emerald-500 z-10 transition-all duration-300"
            style={{
              left: `calc(24px + (100% - 48px) * ${(median - minVal) / range})`,
            }}
          >
            <span className="absolute -bottom-1 -translate-x-1/2 translate-y-full px-1.5 py-0.5 bg-emerald-500 text-white rounded text-[10px] font-bold">
              Median: {median}
            </span>
          </div>

          {/* Dots */}
          <div className="relative w-full h-full flex items-center px-6">
            {data.map((val, idx) => {
              const posPercent = ((val - minVal) / range) * 100;
              return (
                <div
                  key={idx}
                  title={`Value: ${val}`}
                  className="absolute w-5 h-5 -ml-2.5 rounded-full bg-indigo-500/80 hover:bg-indigo-600 border-2 border-white dark:border-slate-900 shadow transition-all duration-200 flex items-center justify-center text-[9px] text-white font-mono"
                  style={{ left: `${posPercent}%` }}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Outlier Slider */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
        <div className="flex justify-between items-center text-sm font-semibold text-slate-800 dark:text-slate-200">
          <span>{t.outlierLabel}</span>
          <span className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-mono text-xs">
            {outlier}
          </span>
        </div>
        <input
          type="range"
          min="10"
          max="200"
          step="1"
          value={outlier}
          onChange={(e) => applyOutlier(Number(e.target.value))}
          className="w-full accent-indigo-600 cursor-pointer"
        />
        <div className="text-xs text-slate-500 dark:text-slate-400">
          {language === 'bn'
            ? 'স্লাইডারটি ডানে টানলে দেখুন কীভাবে গড় দ্রুত বৃদ্ধি পায়, অথচ মধ্যমা প্রায় অপরিবর্তিত থাকে!'
            : 'Notice how the mean rapidly increases as you slide right, while the median remains virtually anchored!'}
        </div>
      </div>

      {/* Add & manage points */}
      <div className="space-y-3">
        <form onSubmit={handleAdd} className="flex gap-2">
          <input
            type="number"
            placeholder={language === 'bn' ? 'নতুন সংখ্যা (যেমন ১২)' : 'Add a number (e.g. 12)'}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="flex-1 px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            {t.addBtn}
          </button>
        </form>

        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.sortedView}</span>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[...data]
              .sort((a, b) => a - b)
              .map((val, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 group border border-slate-200 dark:border-slate-700"
                >
                  {val}
                  <button
                    onClick={() => handleRemove(idx)}
                    title="Remove"
                    className="text-slate-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
