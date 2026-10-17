import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMean,
  calculateMedian,
  calculateMode,
  calculateVariance,
  calculateStandardDeviation,
  calculateQuartiles,
  calculateLinearRegression,
  calculateNormalPDF,
  calculateBinomialPMF,
  calculatePoissonPMF,
  calculateZScore,
  calculateBayes,
  calculateConfidenceInterval,
} from './statistics.ts';

test('calculateMean computes correct arithmetic mean', () => {
  assert.equal(calculateMean([10, 20, 30, 40, 50]), 30);
  assert.equal(calculateMean([2, 4, 6]), 4);
  assert.equal(calculateMean([]), 0);
});

test('calculateMedian handles odd and even sized datasets', () => {
  assert.equal(calculateMedian([5, 1, 3]), 3);
  assert.equal(calculateMedian([1, 2, 3, 4]), 2.5);
  assert.equal(calculateMedian([10]), 10);
});

test('calculateMode finds single and multiple modes', () => {
  assert.deepEqual(calculateMode([1, 2, 2, 3]), [2]);
  assert.deepEqual(calculateMode([1, 1, 2, 2, 3]), [1, 2]);
  assert.deepEqual(calculateMode([1, 2, 3]), []);
});

test('calculateVariance and StandardDeviation compute sample and population metrics', () => {
  const data = [2, 4, 4, 4, 5, 5, 7, 9];
  // Sample variance of [2,4,4,4,5,5,7,9], mean = 5, sum of sq = (9+1+1+1+0+0+4+16)=32, 32 / 7 = 4.5714
  assert.equal(calculateVariance(data, true), 4.5714);
  assert.equal(calculateStandardDeviation(data, true), 2.1381);
  // Population variance: 32 / 8 = 4
  assert.equal(calculateVariance(data, false), 4);
  assert.equal(calculateStandardDeviation(data, false), 2);
});

test('calculateQuartiles computes Q1, Q2, Q3 and IQR', () => {
  const data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
  const q = calculateQuartiles(data);
  assert.equal(q.q2, 40);
  assert.equal(q.iqr > 0, true);
});

test('calculateLinearRegression computes slope, intercept, r, and r2', () => {
  const x = [1, 2, 3, 4, 5];
  const y = [2, 4, 5, 4, 5];
  const res = calculateLinearRegression(x, y);
  assert.equal(res.slope > 0, true);
  assert.equal(res.intercept > 0, true);
  assert.equal(res.r2 >= 0 && res.r2 <= 1, true);
});

test('calculateNormalPDF matches standard normal peak at 0', () => {
  const peak = calculateNormalPDF(0, 0, 1);
  // 1 / sqrt(2 * pi) approx 0.39894
  assert.equal(peak, 0.39894);
});

test('calculateBinomialPMF calculates binomial probability', () => {
  // Flipping 2 coins, getting 1 head: 2 * 0.5 * 0.5 = 0.5
  assert.equal(calculateBinomialPMF(1, 2, 0.5), 0.5);
});

test('calculatePoissonPMF calculates Poisson probability', () => {
  // lambda = 2, k = 0 => e^-2 = approx 0.13534
  assert.equal(calculatePoissonPMF(0, 2), 0.13534);
});

test('calculateZScore computes correct standard score', () => {
  assert.equal(calculateZScore(85, 75, 5), 2);
  assert.equal(calculateZScore(65, 75, 5), -2);
});

test('calculateBayes computes posterior probability', () => {
  // Classic medical test problem:
  // Disease prevalence (priorA) = 0.01
  // Sensitivity (probBGivenA) = 0.99
  // False positive (probBGivenNotA) = 0.05
  const res = calculateBayes(0.01, 0.99, 0.05);
  // probB = 0.99 * 0.01 + 0.05 * 0.99 = 0.0099 + 0.0495 = 0.0594
  // posterior = 0.0099 / 0.0594 = approx 0.1667
  assert.equal(res.posterior, 0.1667);
  assert.equal(res.probB, 0.0594);
});

test('calculateConfidenceInterval computes bounds with 95% confidence', () => {
  const ci = calculateConfidenceInterval(100, 15, 36, 0.95);
  // SE = 15 / 6 = 2.5, margin = 1.96 * 2.5 = 4.9
  assert.equal(ci.marginOfError, 4.9);
  assert.equal(ci.lower, 95.1);
  assert.equal(ci.upper, 104.9);
});
