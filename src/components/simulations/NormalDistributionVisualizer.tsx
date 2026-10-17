import React, { useState, useMemo } from 'react';
import { calculateNormalPDF, calculateZScore } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';

interface Props {
  language: Language;
}

export const NormalDistributionVisualizer: React.FC<Props> = ({ language }) => {
  const [mean, setMean] = useState<number>(0);
  const [stdDev, setStdDev] = useState<number>(1);
  const [mode, setMode] = useState<'empirical' | 'interval' | 'left-tail' | 'right-tail'>('empirical');
  const [boundA, setBoundA] = useState<number>(-1);
  const [boundB, setBoundB] = useState<number>(1);
  const [tailValue, setTailValue] = useState<number>(1.5);

  // Normal cumulative approximation function (Abramowitz and Stegun)
  const normCDF = (z: number): number => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    let p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    if (z > 0) p = 1 - p;
    return p;
  };

  // Generate SVG curve points
  const points = useMemo(() => {
    const pts: Array<{ x: number; y: number; val: number }> = [];
    const minX = mean - 4 * stdDev;
    const maxX = mean + 4 * stdDev;
    const step = (maxX - minX) / 200;

    const width = 600;
    const height = 240;
    const maxDensity = 1 / (stdDev * Math.sqrt(2 * Math.PI));

    for (let i = 0; i <= 200; i++) {
      const val = minX + i * step;
      const density = calculateNormalPDF(val, mean, stdDev);
      const svgX = ((val - minX) / (maxX - minX)) * width;
      const svgY = height - (density / (maxDensity * 1.15)) * (height - 30) - 20;
      pts.push({ x: svgX, y: svgY, val });
    }
    return pts;
  }, [mean, stdDev]);

  // Compute live shaded probability
  const probability = useMemo(() => {
    if (mode === 'empirical') return 0.6827;
    if (mode === 'left-tail') {
      const z = calculateZScore(tailValue, mean, stdDev);
      return Number(normCDF(z).toFixed(4));
    }
    if (mode === 'right-tail') {
      const z = calculateZScore(tailValue, mean, stdDev);
      return Number((1 - normCDF(z)).toFixed(4));
    }
    if (mode === 'interval') {
      const low = Math.min(boundA, boundB);
      const high = Math.max(boundA, boundB);
      const zLow = calculateZScore(low, mean, stdDev);
      const zHigh = calculateZScore(high, mean, stdDev);
      return Number((normCDF(zHigh) - normCDF(zLow)).toFixed(4));
    }
    return 0;
  }, [mode, mean, stdDev, boundA, boundB, tailValue]);

  // Generate shaded path
  const shadedPath = useMemo(() => {
    const minX = mean - 4 * stdDev;
    const maxX = mean + 4 * stdDev;
    const height = 240;

    let filterFn: (val: number) => boolean = () => false;

    if (mode === 'empirical') {
      filterFn = (val) => Math.abs(val - mean) <= stdDev;
    } else if (mode === 'left-tail') {
      filterFn = (val) => val <= tailValue;
    } else if (mode === 'right-tail') {
      filterFn = (val) => val >= tailValue;
    } else if (mode === 'interval') {
      const low = Math.min(boundA, boundB);
      const high = Math.max(boundA, boundB);
      filterFn = (val) => val >= low && val <= high;
    }

    const filtered = points.filter((p) => filterFn(p.val));
    if (filtered.length < 2) return '';

    const first = filtered[0];
    const last = filtered[filtered.length - 1];

    let d = `M ${first.x} ${height - 20} L ${first.x} ${first.y} `;
    for (let i = 1; i < filtered.length; i++) {
      d += `L ${filtered[i].x} ${filtered[i].y} `;
    }
    d += `L ${last.x} ${height - 20} Z`;
    return d;
  }, [points, mode, mean, stdDev, boundA, boundB, tailValue]);

  const curveLine = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
    return d;
  }, [points]);

  const t = {
    title: language === 'bn' ? 'স্বাভাবিক বণ্টন ও সম্ভাব্যতা কার্ভ' : 'Normal Distribution & Bell Curve Visualizer',
    subtitle:
      language === 'bn'
        ? 'গড় (μ) ও পরিমিত ব্যবধান (σ) পরিবর্তন করে ক্ষেত্রফল ও সম্ভাবনা পর্যবেক্ষণ করুন।'
        : 'Adjust mean (μ) and standard deviation (σ) to observe bell shape and probabilities.',
    meanLabel: language === 'bn' ? 'গড় (μ)' : 'Mean (μ)',
    sdLabel: language === 'bn' ? 'পরিমিত ব্যবধান (σ)' : 'Standard Deviation (σ)',
    empiricalTab: language === 'bn' ? 'এম্পিরিক্যাল নীতি (৬৮-৯৫-৯৯.৭)' : 'Empirical Rule',
    intervalTab: language === 'bn' ? 'ব্যবধান P(a ≤ X ≤ b)' : 'Interval Area P(a ≤ X ≤ b)',
    leftTailTab: language === 'bn' ? 'বাম প্রান্ত P(X ≤ x)' : 'Left Tail P(X ≤ x)',
    rightTailTab: language === 'bn' ? 'ডান প্রান্ত P(X ≥ x)' : 'Right Tail P(X ≥ x)',
    probLabel: language === 'bn' ? 'গণনাকৃত সম্ভাব্যতা (ক্ষেত্রফল):' : 'Calculated Probability (Area):',
    zScore: language === 'bn' ? 'জেড-স্কোর (Z):' : 'Z-Score (Z):',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <div className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 text-right">
          <div className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
            {t.probLabel}
          </div>
          <div className="text-2xl font-black text-indigo-600 dark:text-indigo-300">
            {(probability * 100).toFixed(2)}% <span className="text-sm font-medium">({probability})</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl text-xs font-semibold">
        {(
          [
            ['empirical', t.empiricalTab],
            ['interval', t.intervalTab],
            ['left-tail', t.leftTailTab],
            ['right-tail', t.rightTailTab],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setMode(key)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              mode === key
                ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Interactive Bell Curve SVG Canvas */}
      <div className="relative w-full bg-slate-50 dark:bg-slate-800/40 rounded-xl p-4 border border-slate-200 dark:border-slate-700 overflow-hidden">
        <svg viewBox="0 0 600 240" className="w-full h-56">
          {/* Shaded Area */}
          {shadedPath && <path d={shadedPath} className="fill-indigo-500/35 transition-all duration-200" />}

          {/* Bell Curve Stroke */}
          <path d={curveLine} fill="none" className="stroke-indigo-600 dark:stroke-indigo-400 stroke-2" />

          {/* Bottom baseline */}
          <line x1="0" y1="220" x2="600" y2="220" className="stroke-slate-300 dark:stroke-slate-600 stroke-1" />

          {/* Center line (Mean) */}
          <line x1="300" y1="20" x2="300" y2="220" strokeDasharray="3,3" className="stroke-slate-400 stroke-1" />
          <text x="300" y="235" textAnchor="middle" className="text-[10px] fill-slate-500 font-mono">
            μ = {mean}
          </text>

          {/* +/- 1, 2, 3 SD Ticks */}
          {[-3, -2, -1, 1, 2, 3].map((sdMult) => {
            const xVal = 300 + (sdMult / 4) * 300;
            const actualVal = (mean + sdMult * stdDev).toFixed(1);
            return (
              <g key={sdMult}>
                <line x1={xVal} y1="216" x2={xVal} y2="220" className="stroke-slate-400 stroke-1" />
                <text x={xVal} y="235" textAnchor="middle" className="text-[9px] fill-slate-400 font-mono">
                  {actualVal}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Parameters & Range Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mean slider */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-600 dark:text-slate-400">{t.meanLabel}</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">{mean}</span>
          </div>
          <input
            type="range"
            min="-10"
            max="10"
            step="0.5"
            value={mean}
            onChange={(e) => setMean(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>

        {/* Standard Deviation slider */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-600 dark:text-slate-400">{t.sdLabel}</span>
            <span className="font-mono text-indigo-600 dark:text-indigo-400">{stdDev}</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.25"
            value={stdDev}
            onChange={(e) => setStdDev(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Mode-Specific Range Controls */}
      {mode === 'interval' && (
        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-900 space-y-3">
          <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
            {language === 'bn' ? 'ব্যবধানের নিম্ন ও ঊর্ধ্ব সীমা নির্ধারণ:' : 'Set Interval Boundaries:'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Lower Bound (a):</span>
                <span className="font-mono font-bold">{boundA}</span>
              </div>
              <input
                type="range"
                min={mean - 3 * stdDev}
                max={mean + 3 * stdDev}
                step="0.1"
                value={boundA}
                onChange={(e) => setBoundA(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Upper Bound (b):</span>
                <span className="font-mono font-bold">{boundB}</span>
              </div>
              <input
                type="range"
                min={mean - 3 * stdDev}
                max={mean + 3 * stdDev}
                step="0.1"
                value={boundB}
                onChange={(e) => setBoundB(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      {(mode === 'left-tail' || mode === 'right-tail') && (
        <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-200 dark:border-indigo-900 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-indigo-700 dark:text-indigo-300">
            <span>
              {mode === 'left-tail'
                ? language === 'bn'
                  ? 'মান নির্ধারণ x (P(X ≤ x)):'
                  : 'Threshold x (P(X ≤ x)):'
                : language === 'bn'
                ? 'মান নির্ধারণ x (P(X ≥ x)):'
                : 'Threshold x (P(X ≥ x)): '}
            </span>
            <span className="font-mono text-sm">{tailValue}</span>
          </div>
          <input
            type="range"
            min={mean - 3.5 * stdDev}
            max={mean + 3.5 * stdDev}
            step="0.1"
            value={tailValue}
            onChange={(e) => setTailValue(parseFloat(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />
          <div className="text-xs text-slate-500 font-mono">
            {t.zScore} Z = {calculateZScore(tailValue, mean, stdDev)}
          </div>
        </div>
      )}

      {mode === 'empirical' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-medium">
          <div className="p-2.5 rounded-lg bg-indigo-100/70 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-200">
            <span className="font-bold">± 1σ:</span> [{(mean - stdDev).toFixed(1)}, {(mean + stdDev).toFixed(1)}]
            <div className="text-[11px] font-bold mt-0.5">68.27% Area</div>
          </div>
          <div className="p-2.5 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200">
            <span className="font-bold">± 2σ:</span> [{(mean - 2 * stdDev).toFixed(1)}, {(mean + 2 * stdDev).toFixed(1)}]
            <div className="text-[11px] font-bold mt-0.5">95.45% Area</div>
          </div>
          <div className="p-2.5 rounded-lg bg-indigo-100/30 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200">
            <span className="font-bold">± 3σ:</span> [{(mean - 3 * stdDev).toFixed(1)}, {(mean + 3 * stdDev).toFixed(1)}]
            <div className="text-[11px] font-bold mt-0.5">99.73% Area</div>
          </div>
        </div>
      )}
    </div>
  );
};
