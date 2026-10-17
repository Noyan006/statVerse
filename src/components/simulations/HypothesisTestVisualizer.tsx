import React, { useState, useMemo } from 'react';
import { calculateZScore } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { CheckCircle2, AlertOctagon } from 'lucide-react';

interface Props {
  language: Language;
}

export const HypothesisTestVisualizer: React.FC<Props> = ({ language }) => {
  const [testType, setTestType] = useState<'two-tailed' | 'left-tailed' | 'right-tailed'>('two-tailed');
  const [nullMean, setNullMean] = useState<number>(50);
  const [sampleMean, setSampleMean] = useState<number>(52.5);
  const [sigma, setSigma] = useState<number>(10);
  const [sampleSize, setSampleSize] = useState<number>(36);
  const [alpha, setAlpha] = useState<number>(0.05);

  // Standard Error
  const se = useMemo(() => {
    return sigma / Math.sqrt(sampleSize);
  }, [sigma, sampleSize]);

  // Z-statistic
  const zStat = useMemo(() => {
    return Number(((sampleMean - nullMean) / se).toFixed(3));
  }, [sampleMean, nullMean, se]);

  // Critical values for Standard Normal
  const criticalZ = useMemo(() => {
    if (testType === 'two-tailed') {
      if (alpha === 0.01) return 2.576;
      if (alpha === 0.05) return 1.96;
      return 1.645; // 0.10
    }
    // One-tailed
    if (alpha === 0.01) return 2.326;
    if (alpha === 0.05) return 1.645;
    return 1.282; // 0.10
  }, [testType, alpha]);

  // Normal CDF approximation
  const normCDF = (z: number): number => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (z > 0) p = 1 - p;
    return p;
  };

  // p-Value
  const pValue = useMemo(() => {
    if (testType === 'two-tailed') {
      return Number((2 * (1 - normCDF(Math.abs(zStat)))).toFixed(4));
    }
    if (testType === 'left-tailed') {
      return Number(normCDF(zStat).toFixed(4));
    }
    // right-tailed
    return Number((1 - normCDF(zStat)).toFixed(4));
  }, [testType, zStat]);

  const isRejected = pValue <= alpha;

  const t = {
    title: language === 'bn' ? 'প্রকল্প যাচাই (Hypothesis Testing) ভিজ্যুয়ালাইজার' : 'Hypothesis Testing & p-Value Visualizer',
    subtitle:
      language === 'bn'
        ? 'নাস্তিক প্রকল্প (H₀) বনাম বিকল্প প্রকল্প (H₁), সংকট অঞ্চল (Critical Region) ও পি-মানের সম্পর্ক বুঝুন।'
        : 'Explore critical rejection regions, test statistics, and exact p-values for Z-tests.',
    twoTailed: language === 'bn' ? 'দ্বিমুখী (H₁: μ ≠ μ₀)' : 'Two-Tailed (H₁: μ ≠ μ₀)',
    leftTailed: language === 'bn' ? 'বাম প্রান্তিক (H₁: μ < μ₀)' : 'Left-Tailed (H₁: μ < μ₀)',
    rightTailed: language === 'bn' ? 'ডান প্রান্তিক (H₁: μ > μ₀)' : 'Right-Tailed (H₁: μ > μ₀)',
    nullMeanLabel: language === 'bn' ? 'নাস্তিক প্রস্তাবিত গড় (μ₀):' : 'Null Mean (μ₀):',
    sampleMeanLabel: language === 'bn' ? 'পর্যবেক্ষিত নমুনা গড় (x̄):' : 'Observed Sample Mean (x̄):',
    sigmaLabel: language === 'bn' ? 'পরিমিত ব্যবধান (σ):' : 'Std Dev (σ):',
    sampleSizeLabel: language === 'bn' ? 'নমুনার আকার (n):' : 'Sample Size (n):',
    alphaLabel: language === 'bn' ? 'তাৎপর্য মাত্রা (α):' : 'Significance Level (α):',
    verdictReject: language === 'bn' ? 'H₀ প্রত্যাখ্যাত (পরিসংখ্যানগতভাবে তাৎপর্যপূর্ণ)' : 'Reject H₀ (Statistically Significant)',
    verdictFail: language === 'bn' ? 'H₀ প্রত্যাখ্যান করতে ব্যর্থ (পর্যাপ্ত প্রমাণ নেই)' : 'Fail to Reject H₀ (Insufficient Evidence)',
  };

  // Normal curve SVG points
  const points = useMemo(() => {
    const pts: Array<{ x: number; y: number; z: number }> = [];
    const width = 600;
    const height = 200;
    for (let i = 0; i <= 200; i++) {
      const z = -3.8 + (i / 200) * 7.6;
      const density = (1 / Math.sqrt(2 * Math.PI)) * Math.exp((-z * z) / 2);
      const svgX = (i / 200) * width;
      const svgY = height - (density / 0.42) * (height - 30) - 20;
      pts.push({ x: svgX, y: svgY, z });
    }
    return pts;
  }, []);

  // Shaded critical regions
  const criticalPath = useMemo(() => {
    const height = 200;
    const filterFn = (z: number) => {
      if (testType === 'two-tailed') return Math.abs(z) >= criticalZ;
      if (testType === 'left-tailed') return z <= -criticalZ;
      return z >= criticalZ;
    };

    // May have 1 or 2 segments
    const leftSegment = points.filter((p) => (testType === 'two-tailed' || testType === 'left-tailed') && p.z <= -criticalZ);
    const rightSegment = points.filter((p) => (testType === 'two-tailed' || testType === 'right-tailed') && p.z >= criticalZ);

    let d = '';
    if (leftSegment.length > 1) {
      d += `M ${leftSegment[0].x} ${height - 20} `;
      for (const p of leftSegment) d += `L ${p.x} ${p.y} `;
      d += `L ${leftSegment[leftSegment.length - 1].x} ${height - 20} Z `;
    }
    if (rightSegment.length > 1) {
      d += `M ${rightSegment[0].x} ${height - 20} `;
      for (const p of rightSegment) d += `L ${p.x} ${p.y} `;
      d += `L ${rightSegment[rightSegment.length - 1].x} ${height - 20} Z`;
    }
    return d;
  }, [points, testType, criticalZ]);

  const curveLine = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) d += ` L ${points[i].x} ${points[i].y}`;
    return d;
  }, [points]);

  // Position of calculated zStat on SVG
  const zStatSvgX = Math.max(10, Math.min(590, ((zStat + 3.8) / 7.6) * 600));

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        {/* Test Type Select */}
        <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          {[
            ['two-tailed', t.twoTailed],
            ['left-tailed', t.leftTailed],
            ['right-tailed', t.rightTailed],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTestType(key as any)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                testType === key
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Verdict Alert Banner */}
      <div
        className={`p-4 rounded-xl border flex items-center justify-between gap-4 ${
          isRejected
            ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200'
            : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200'
        }`}
      >
        <div className="flex items-center gap-3">
          {isRejected ? (
            <AlertOctagon className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
          )}
          <div>
            <div className="font-bold text-base">{isRejected ? t.verdictReject : t.verdictFail}</div>
            <div className="text-xs opacity-90 font-mono mt-0.5">
              p-value = {pValue} {isRejected ? `≤ α (${alpha})` : `> α (${alpha})`} | Z = {zStat}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Normal Distribution with Rejection Regions */}
      <div className="relative w-full bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700 overflow-hidden">
        <svg viewBox="0 0 600 200" className="w-full h-52">
          {/* Critical rejection area in red */}
          {criticalPath && <path d={criticalPath} className="fill-rose-500/40 transition-all duration-200" />}

          {/* Normal Curve */}
          <path d={curveLine} fill="none" className="stroke-slate-700 dark:stroke-slate-300 stroke-2" />

          {/* Axis line */}
          <line x1="0" y1="180" x2="600" y2="180" className="stroke-slate-300 dark:stroke-slate-600 stroke-1" />

          {/* Center line (Z = 0) */}
          <line x1="300" y1="20" x2="300" y2="180" strokeDasharray="3,3" className="stroke-slate-400 stroke-1" />
          <text x="300" y="195" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
            Z = 0
          </text>

          {/* Observed Z-statistic Marker */}
          <line
            x1={zStatSvgX}
            y1="10"
            x2={zStatSvgX}
            y2="180"
            className="stroke-indigo-600 dark:stroke-indigo-400 stroke-2"
          />
          <polygon
            points={`${zStatSvgX - 5},10 ${zStatSvgX + 5},10 ${zStatSvgX},20`}
            className="fill-indigo-600 dark:fill-indigo-400"
          />
          <text
            x={zStatSvgX}
            y="8"
            textAnchor="middle"
            className="text-[10px] font-bold fill-indigo-600 dark:fill-indigo-400 font-mono"
          >
            Z = {zStat}
          </text>
        </svg>

        <div className="flex justify-between items-center text-xs text-slate-500 mt-2 px-2">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-rose-500/40 border border-rose-500 inline-block" />
            {language === 'bn' ? 'সংকট প্রত্যাখ্যান অঞ্চল (Rejection Region)' : 'Rejection Region (α)'}
          </span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400">
            Critical Z = ±{criticalZ}
          </span>
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Null Mean */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-600 dark:text-slate-400">{t.nullMeanLabel}</span>
            <span className="font-mono text-indigo-600 font-bold">{nullMean}</span>
          </div>
          <input
            type="range"
            min="30"
            max="70"
            value={nullMean}
            onChange={(e) => setNullMean(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Sample Mean */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-600 dark:text-slate-400">{t.sampleMeanLabel}</span>
            <span className="font-mono text-indigo-600 font-bold">{sampleMean}</span>
          </div>
          <input
            type="range"
            min="30"
            max="70"
            step="0.5"
            value={sampleMean}
            onChange={(e) => setSampleMean(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Alpha Selector */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
          <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">{t.alphaLabel}</div>
          <div className="grid grid-cols-3 gap-1.5">
            {[0.01, 0.05, 0.1].map((a) => (
              <button
                key={a}
                onClick={() => setAlpha(a)}
                className={`py-1 text-xs font-mono font-bold rounded-lg border transition-all ${
                  alpha === a
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
