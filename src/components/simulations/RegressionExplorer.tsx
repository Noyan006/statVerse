import React, { useState, useMemo } from 'react';
import { calculateLinearRegression } from '../../utils/statistics.ts';
import { Language } from '../../types/index.ts';
import { RotateCcw, PlusCircle, AlertCircle, Shuffle } from 'lucide-react';

interface Props {
  language: Language;
}

interface Point {
  x: number;
  y: number;
}

export const RegressionExplorer: React.FC<Props> = ({ language }) => {
  const [points, setPoints] = useState<Point[]>([
    { x: 10, y: 15 },
    { x: 20, y: 28 },
    { x: 30, y: 34 },
    { x: 40, y: 48 },
    { x: 50, y: 55 },
    { x: 60, y: 68 },
    { x: 70, y: 72 },
    { x: 80, y: 88 },
  ]);

  const regression = useMemo(() => {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    return calculateLinearRegression(xs, ys);
  }, [points]);

  const handleSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Convert SVG coords (width 600, height 300) to data scale [0, 100]
    const dataX = Number(((clickX / rect.width) * 100).toFixed(1));
    const dataY = Number(((1 - clickY / rect.height) * 100).toFixed(1));

    if (dataX >= 0 && dataX <= 100 && dataY >= 0 && dataY <= 100) {
      setPoints((prev) => [...prev, { x: dataX, y: dataY }]);
    }
  };

  const handleAddOutlier = () => {
    // Add point far off the line: x = 90, y = 10
    setPoints((prev) => [...prev, { x: 90, y: 10 }]);
  };

  const handleGenerateCorrelated = (correlationType: 'positive' | 'negative' | 'random') => {
    const newPoints: Point[] = [];
    for (let i = 0; i < 10; i++) {
      const x = 10 + i * 8;
      let y = 0;
      if (correlationType === 'positive') {
        y = 10 + x * 0.8 + (Math.random() - 0.5) * 15;
      } else if (correlationType === 'negative') {
        y = 90 - x * 0.8 + (Math.random() - 0.5) * 15;
      } else {
        y = 20 + Math.random() * 60;
      }
      newPoints.push({
        x: Math.max(5, Math.min(95, Number(x.toFixed(1)))),
        y: Math.max(5, Math.min(95, Number(y.toFixed(1)))),
      });
    }
    setPoints(newPoints);
  };

  const handleReset = () => {
    setPoints([
      { x: 10, y: 15 },
      { x: 20, y: 28 },
      { x: 30, y: 34 },
      { x: 40, y: 48 },
      { x: 50, y: 55 },
      { x: 60, y: 68 },
      { x: 70, y: 72 },
      { x: 80, y: 88 },
    ]);
  };

  // Regression line endpoints on SVG
  const lineY0 = regression.intercept;
  const lineY100 = regression.intercept + regression.slope * 100;

  // Convert to SVG Y: ySvg = height * (1 - y / 100)
  const svgY0 = 300 * (1 - lineY0 / 100);
  const svgY100 = 300 * (1 - lineY100 / 100);

  const t = {
    title: language === 'bn' ? 'সরল রৈখিক নির্ভরণ ও সহসংশ্লেষ সিমুলেটর' : 'Linear Regression & Correlation Explorer',
    subtitle:
      language === 'bn'
        ? 'গ্রাফে ক্লিক করে নতুন বিন্দু যোগ করুন, অথবা চরম আউটলায়ার যুক্ত করে দেখুন নির্ভরণ রেখা কীভাবে ঘুরে যায়!'
        : 'Click anywhere on the graph to place data points, or inject outliers to observe slope rotation and R² drop!',
    addOutlier: language === 'bn' ? 'আউটলায়ার যোগ করুন' : 'Inject Extreme Outlier',
    posCorr: language === 'bn' ? 'ধনাত্মক সম্পর্ক' : 'Positive Correlation',
    negCorr: language === 'bn' ? 'ঋণাত্মক সম্পর্ক' : 'Negative Correlation',
    randomData: language === 'bn' ? 'যাদৃচ্ছিক উপাত্ত' : 'Random Scatter',
    reset: language === 'bn' ? 'রিসেট' : 'Reset',
    equation: language === 'bn' ? 'নির্ভরণ রেখার সমীকরণ:' : 'Fitted Regression Line:',
    rLabel: language === 'bn' ? 'পিয়ারসন সহসংশ্লেষ (r):' : "Pearson's Correlation (r):",
    r2Label: language === 'bn' ? 'নির্ণায়ক সহগ (R²):' : 'R-Squared (R²):',
    clickTip:
      language === 'bn'
        ? '💡 গ্রাফের যেকোনো স্থানে ক্লিক করে সরাসরি নতুন ডেটা পয়েন্ট যোগ করতে পারেন।'
        : '💡 Click anywhere inside the grid canvas to add new custom data points.',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{t.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={handleAddOutlier}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition-colors"
          >
            <AlertCircle className="w-3.5 h-3.5" />
            {t.addOutlier}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900">
          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{t.equation}</div>
          <div className="text-xl font-black text-indigo-700 dark:text-indigo-300 font-mono mt-1">
            ŷ = {regression.intercept} + {regression.slope}x
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
          <div className="text-xs text-slate-500 font-semibold">{t.rLabel}</div>
          <div className="text-2xl font-black text-slate-900 dark:text-slate-100 font-mono mt-1">
            r = {regression.r}
          </div>
          <div className="text-[11px] text-slate-500">
            {regression.r > 0.7
              ? 'Strong Positive'
              : regression.r < -0.7
              ? 'Strong Negative'
              : Math.abs(regression.r) < 0.3
              ? 'Weak / No Association'
              : 'Moderate Association'}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900">
          <div className="text-xs text-purple-600 dark:text-purple-400 font-semibold">{t.r2Label}</div>
          <div className="text-2xl font-black text-purple-700 dark:text-purple-300 font-mono mt-1">
            {(regression.r2 * 100).toFixed(1)}% <span className="text-xs font-normal">({regression.r2})</span>
          </div>
          <div className="text-[11px] text-purple-600/80 dark:text-purple-400/80">
            {language === 'bn' ? 'y এর মোট বিচ্যুতির ব্যাখ্যা' : 'Variance in y explained by x'}
          </div>
        </div>
      </div>

      {/* Interactive 2D Scatter Canvas */}
      <div className="space-y-1">
        <div className="relative w-full bg-slate-900 rounded-xl p-4 border border-slate-800 overflow-hidden cursor-crosshair">
          <svg
            viewBox="0 0 600 300"
            onClick={handleSvgClick}
            className="w-full h-72 select-none"
          >
            {/* Grid lines */}
            {[20, 40, 60, 80].map((v) => (
              <g key={v}>
                {/* Horizontal */}
                <line
                  x1="0"
                  y1={(v / 100) * 300}
                  x2="600"
                  y2={(v / 100) * 300}
                  stroke="#334155"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
                {/* Vertical */}
                <line
                  x1={(v / 100) * 600}
                  y1="0"
                  x2={(v / 100) * 600}
                  y2="300"
                  stroke="#334155"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              </g>
            ))}

            {/* Residual lines from each point to regression line */}
            {points.map((pt, i) => {
              const svgX = (pt.x / 100) * 600;
              const svgY = 300 * (1 - pt.y / 100);
              const predictedY = regression.intercept + regression.slope * pt.x;
              const svgPredY = 300 * (1 - predictedY / 100);

              return (
                <line
                  key={i}
                  x1={svgX}
                  y1={svgY}
                  x2={svgX}
                  y2={svgPredY}
                  stroke="#f43f5e"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.6"
                />
              );
            })}

            {/* Regression Line */}
            <line
              x1="0"
              y1={svgY0}
              x2="600"
              y2={svgY100}
              stroke="#6366f1"
              strokeWidth="2.5"
              className="transition-all duration-200"
            />

            {/* Data Points */}
            {points.map((pt, i) => {
              const svgX = (pt.x / 100) * 600;
              const svgY = 300 * (1 - pt.y / 100);
              return (
                <circle
                  key={i}
                  cx={svgX}
                  cy={svgY}
                  r="5"
                  className="fill-cyan-400 stroke-white stroke-1 hover:r-7 transition-all duration-150"
                />
              );
            })}
          </svg>

          <div className="text-[11px] text-slate-400 text-center mt-2">{t.clickTip}</div>
        </div>
      </div>

      {/* Preset Generators */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Presets:</span>
        <button
          onClick={() => handleGenerateCorrelated('positive')}
          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-colors"
        >
          {t.posCorr}
        </button>
        <button
          onClick={() => handleGenerateCorrelated('negative')}
          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-colors"
        >
          {t.negCorr}
        </button>
        <button
          onClick={() => handleGenerateCorrelated('random')}
          className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg transition-colors"
        >
          {t.randomData}
        </button>
      </div>
    </div>
  );
};
