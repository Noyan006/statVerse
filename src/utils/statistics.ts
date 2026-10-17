/**
 * Pure statistical calculation and simulation utility functions for StatVerse.
 */

export function calculateMean(data: number[]): number {
  if (data.length === 0) return 0;
  const sum = data.reduce((acc, val) => acc + val, 0);
  return Number((sum / data.length).toFixed(4));
}

export function calculateMedian(data: number[]): number {
  if (data.length === 0) return 0;
  const sorted = [...data].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[mid];
  }
  return Number(((sorted[mid - 1] + sorted[mid]) / 2).toFixed(4));
}

export function calculateMode(data: number[]): number[] {
  if (data.length === 0) return [];
  const freq = new Map<number, number>();
  let maxCount = 0;

  for (const num of data) {
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);
    if (count > maxCount) maxCount = count;
  }

  if (maxCount === 1 && data.length > 1) {
    // If every element appears once, no distinct mode
    return [];
  }

  const modes: number[] = [];
  for (const [key, val] of freq.entries()) {
    if (val === maxCount) {
      modes.push(key);
    }
  }
  return modes.sort((a, b) => a - b);
}

export function calculateVariance(data: number[], isSample = true): number {
  if (data.length <= 1 && isSample) return 0;
  if (data.length === 0) return 0;
  const mean = calculateMean(data);
  const sumSquares = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
  const divisor = isSample ? data.length - 1 : data.length;
  return Number((sumSquares / divisor).toFixed(4));
}

export function calculateStandardDeviation(data: number[], isSample = true): number {
  const variance = calculateVariance(data, isSample);
  return Number(Math.sqrt(variance).toFixed(4));
}

export function calculateQuartiles(data: number[]): { q1: number; q2: number; q3: number; iqr: number } {
  if (data.length === 0) return { q1: 0, q2: 0, q3: 0, iqr: 0 };
  const sorted = [...data].sort((a, b) => a - b);
  const q2 = calculateMedian(sorted);
  const mid = Math.floor(sorted.length / 2);

  const lowerHalf = sorted.length % 2 === 0 ? sorted.slice(0, mid) : sorted.slice(0, mid);
  const upperHalf = sorted.length % 2 === 0 ? sorted.slice(mid) : sorted.slice(mid + 1);

  const q1 = calculateMedian(lowerHalf);
  const q3 = calculateMedian(upperHalf);
  const iqr = Number((q3 - q1).toFixed(4));

  return { q1, q2, q3, iqr };
}

export function calculateLinearRegression(x: number[], y: number[]): {
  slope: number;
  intercept: number;
  r: number;
  r2: number;
} {
  const n = Math.min(x.length, y.length);
  if (n <= 1) return { slope: 0, intercept: 0, r: 0, r2: 0 };

  const xMean = calculateMean(x.slice(0, n));
  const yMean = calculateMean(y.slice(0, n));

  let num = 0;
  let denX = 0;
  let denY = 0;

  for (let i = 0; i < n; i++) {
    const dx = x[i] - xMean;
    const dy = y[i] - yMean;
    num += dx * dy;
    denX += dx * dx;
    denY += dy * dy;
  }

  if (denX === 0) return { slope: 0, intercept: yMean, r: 0, r2: 0 };

  const slope = Number((num / denX).toFixed(4));
  const intercept = Number((yMean - slope * xMean).toFixed(4));
  const denom = Math.sqrt(denX * denY);
  const r = denom === 0 ? 0 : Number((num / denom).toFixed(4));
  const r2 = Number((r * r).toFixed(4));

  return { slope, intercept, r, r2 };
}

export function calculateNormalPDF(x: number, mean = 0, stdDev = 1): number {
  if (stdDev <= 0) return 0;
  const factor = 1 / (stdDev * Math.sqrt(2 * Math.PI));
  const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
  return Number((factor * Math.exp(exponent)).toFixed(5));
}

function factorial(n: number): number {
  if (n <= 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}

export function calculateBinomialPMF(k: number, n: number, p: number): number {
  if (k < 0 || k > n || p < 0 || p > 1) return 0;
  const comb = factorial(n) / (factorial(k) * factorial(n - k));
  const prob = comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
  return Number(prob.toFixed(5));
}

export function calculatePoissonPMF(k: number, lambda: number): number {
  if (k < 0 || lambda <= 0) return 0;
  const prob = (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  return Number(prob.toFixed(5));
}

export function calculateZScore(x: number, mean: number, stdDev: number): number {
  if (stdDev === 0) return 0;
  return Number(((x - mean) / stdDev).toFixed(4));
}

export function calculateBayes(
  priorA: number,
  probBGivenA: number,
  probBGivenNotA: number
): { posterior: number; probB: number } {
  const priorNotA = 1 - priorA;
  const probB = probBGivenA * priorA + probBGivenNotA * priorNotA;
  if (probB === 0) return { posterior: 0, probB: 0 };
  const posterior = (probBGivenA * priorA) / probB;
  return {
    posterior: Number(posterior.toFixed(4)),
    probB: Number(probB.toFixed(4)),
  };
}

export function calculateConfidenceInterval(
  mean: number,
  stdDev: number,
  n: number,
  confidenceLevel: 0.90 | 0.95 | 0.99 = 0.95
): { lower: number; upper: number; marginOfError: number } {
  if (n <= 0) return { lower: mean, upper: mean, marginOfError: 0 };
  const zScores = { 0.90: 1.645, 0.95: 1.96, 0.99: 2.576 };
  const z = zScores[confidenceLevel];
  const standardError = stdDev / Math.sqrt(n);
  const marginOfError = Number((z * standardError).toFixed(4));
  return {
    lower: Number((mean - marginOfError).toFixed(4)),
    upper: Number((mean + marginOfError).toFixed(4)),
    marginOfError,
  };
}
