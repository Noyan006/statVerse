import React, { useState, useMemo } from 'react';
import { calculateMean, calculateVariance, calculateStandardDeviation } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { RotateCcw, Shuffle } from 'lucide-react';

interface Props {
  language: Language;
}

export const VarianceExplorer: React.FC<Props> = ({ language }) => {
  const [data, setData] = useState<number[]>([4, 6, 8, 12, 15]);
  const [isSample, setIsSample] = useState<boolean>(true);

  const mean = useMemo(() => calculateMean(data), [data]);
  const variance = useMemo(() => calculateVariance(data, isSample), [data, isSample]);
  const stdDev = useMemo(() => calculateStandardDeviation(data, isSample), [data, isSample]);

  const deviations = useMemo(() => {
    return data.map((val) => {
      const dev = val - mean;
      return {
        val,
        dev: Number(dev.toFixed(2)),
        devSq: Number((dev * dev).toFixed(2)),
      };
    });
  }, [data, mean]);

  const sumSquares = useMemo(() => {
    return Number(deviations.reduce((sum, item) => sum + item.devSq, 0).toFixed(2));
  }, [deviations]);

  const handleRandomize = () => {
    const randomSet = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1);
    setData(randomSet.sort((a, b) => a - b));
  };

  const handlePointChange = (index: number, newVal: number) => {
    setData((prev) => {
      const updated = [...prev];
      updated[index] = newVal;
      return updated;
    });
  };

  const t = {
    title: language === 'bn' ? 'ভেদাঙ্ক ও পরিমিত ব্যবধান পরিদর্শক' : 'Variance & Standard Deviation Explorer',
    subtitle:
      language === 'bn'
        ? 'গড় থেকে প্রতিটি মানের দূরত্ব ও তাদের বর্গের ক্ষেত্রফল কীভাবে ভেদাঙ্ক তৈরি করে তা দেখুন।'
        : 'Visualize how deviations from the mean square to generate variance and standard deviation.',
    sample: language === 'bn' ? 'নমুনা (Sample, n - 1)' : 'Sample (n - 1)',
    population: language === 'bn' ? 'সমগ্রক (Population, N)' : 'Population (N)',
    randomize: language === 'bn' ? 'নতুন উপাত্ত তৈরি' : 'Randomize',
    mean: language === 'bn' ? 'গড় (Mean, x̄)' : 'Mean (x̄)',
    sumSq: language === 'bn' ? 'দূরত্বের বর্গের সমষ্টি (SS)' : 'Sum of Squares (SS)',
    variance: language === 'bn' ? 'ভেদাঙ্ক (Variance, s²)' : 'Variance (s²)',
    stdDev: language === 'bn' ? 'পরিমিত ব্যবধান (Std Dev, s)' : 'Standard Deviation (s)',
    tableVal: language === 'bn' ? 'মান (x)' : 'Value (x)',
    tableDev: language === 'bn' ? 'বিচ্যুতি (x - x̄)' : 'Deviation (x - x̄)',
    tableDevSq: language === 'bn' ? 'বর্গ (x - x̄)²' : 'Squared Dev (x - x̄)²',
  };

  const minVal = Math.min(0, ...data);
  const maxVal = Math.max(25, ...data);
  const range = maxVal - minVal || 1;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Sample vs Population Toggle */}
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setIsSample(true)}
              className={`px-3 py-1 rounded-md transition-colors ${
                isSample ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t.sample}
            </button>
            <button
              onClick={() => setIsSample(false)}
              className={`px-3 py-1 rounded-md transition-colors ${
                !isSample ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {t.population}
            </button>
          </div>

          <button
            onClick={handleRandomize}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
          >
            <Shuffle className="w-3.5 h-3.5" />
            {t.randomize}
          </button>
        </div>
      </div>

      {/* Numerical Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="text-xs font-medium text-slate-500">{t.mean}</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{mean}</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
          <div className="text-xs font-medium text-slate-500">{t.sumSq}</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-1">{sumSquares}</div>
        </div>

        <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
          <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{t.variance}</div>
          <div className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300 mt-1">{variance}</div>
          <div className="text-[10px] text-indigo-600/70 mt-0.5">
            {isSample ? `SS / (${data.length} - 1)` : `SS / ${data.length}`}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900">
          <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{t.stdDev}</div>
          <div className="text-2xl font-extrabold text-emerald-700 dark:text-emerald-300 mt-1">{stdDev}</div>
          <div className="text-[10px] text-emerald-600/70 mt-0.5">√{variance}</div>
        </div>
      </div>

      {/* Dynamic Graph showing distance from mean */}
      <div className="space-y-2">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
          {language === 'bn' ? 'গড় থেকে বিচ্যুতির রৈখিক চিত্র' : 'Visual Deviations From Mean'}
        </div>
        <div className="relative h-44 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Mean reference vertical line */}
          <div
            className="absolute top-2 bottom-6 w-0.5 bg-rose-500 z-10"
            style={{
              left: `calc(32px + (100% - 64px) * ${(mean - minVal) / range})`,
            }}
          >
            <span className="absolute -top-1 -translate-x-1/2 -translate-y-full px-1.5 py-0.5 bg-rose-500 text-white rounded text-[10px] font-bold">
              Mean: {mean}
            </span>
          </div>

          {/* Each point and its deviation bar to mean */}
          <div className="relative w-full h-full pt-6 px-8 flex flex-col justify-between">
            {deviations.map((item, idx) => {
              const xPos = ((item.val - minVal) / range) * 100;
              const meanPos = ((mean - minVal) / range) * 100;
              const leftPos = Math.min(xPos, meanPos);
              const width = Math.abs(xPos - meanPos);

              return (
                <div key={idx} className="relative h-5 flex items-center">
                  {/* Horizontal distance line */}
                  <div
                    className="absolute h-1.5 bg-indigo-300 dark:bg-indigo-700/80 rounded-full"
                    style={{
                      left: `${leftPos}%`,
                      width: `${Math.max(width, 0.5)}%`,
                    }}
                  />
                  {/* Point */}
                  <div
                    className="absolute w-4 h-4 -ml-2 rounded-full bg-indigo-600 border-2 border-white dark:border-slate-900 shadow z-20 flex items-center justify-center text-[8px] text-white font-mono"
                    style={{ left: `${xPos}%` }}
                  >
                    {item.val}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Sliders for each point */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          {language === 'bn' ? 'মান পরিবর্তন করে বিস্তার পর্যবেক্ষণ করুন:' : 'Adjust Individual Data Points:'}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {data.map((val, idx) => (
            <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-500">x_{idx + 1}:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{val}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={val}
                onChange={(e) => handlePointChange(idx, Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="text-[10px] text-slate-500 font-mono">
                (x - x̄) = {(val - mean).toFixed(1)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step by Step Breakdown Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
            <tr>
              <th className="p-2.5 rounded-l-lg">{t.tableVal}</th>
              <th className="p-2.5">{t.tableDev}</th>
              <th className="p-2.5 rounded-r-lg">{t.tableDevSq}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-mono">
            {deviations.map((d, i) => (
              <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                <td className="p-2 font-medium text-slate-800 dark:text-slate-200">{d.val}</td>
                <td className="p-2 text-slate-600 dark:text-slate-400">{d.dev}</td>
                <td className="p-2 text-indigo-600 dark:text-indigo-400 font-semibold">{d.devSq}</td>
              </tr>
            ))}
            <tr className="bg-slate-50 dark:bg-slate-800/50 font-bold">
              <td className="p-2">{language === 'bn' ? 'যোগফল (Sum):' : 'Sum:'}</td>
              <td className="p-2 text-slate-500">0 (Always)</td>
              <td className="p-2 text-indigo-600 dark:text-indigo-300">SS = {sumSquares}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
