import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuizEvaluation, calculateCurrentStreak } from './quiz.ts';

test('calculateQuizEvaluation handles perfect score', () => {
  const correct = [0, 1, 2, 3];
  const answers = { 0: 0, 1: 1, 2: 2, 3: 3 };
  const res = calculateQuizEvaluation(answers, correct);
  assert.equal(res.score, 4);
  assert.equal(res.total, 4);
  assert.equal(res.percentage, 100);
  assert.equal(res.passed, true);
  assert.equal(res.gradeLevel, 'mastery');
});

test('calculateQuizEvaluation handles partial passing score', () => {
  const correct = [0, 1, 2, 3];
  const answers = { 0: 0, 1: 1, 2: 2, 3: 1 }; // 3/4 = 75%
  const res = calculateQuizEvaluation(answers, correct);
  assert.equal(res.score, 3);
  assert.equal(res.total, 4);
  assert.equal(res.percentage, 75);
  assert.equal(res.passed, true);
  assert.equal(res.gradeLevel, 'proficient');
});

test('calculateQuizEvaluation handles failing score', () => {
  const correct = [0, 1, 2, 3];
  const answers = { 0: 0, 1: 0, 2: 0, 3: 0 }; // 1/4 = 25%
  const res = calculateQuizEvaluation(answers, correct);
  assert.equal(res.score, 1);
  assert.equal(res.total, 4);
  assert.equal(res.percentage, 25);
  assert.equal(res.passed, false);
  assert.equal(res.gradeLevel, 'needs-practice');
});

test('calculateQuizEvaluation handles empty questions', () => {
  const res = calculateQuizEvaluation({}, []);
  assert.equal(res.score, 0);
  assert.equal(res.total, 0);
  assert.equal(res.percentage, 0);
  assert.equal(res.passed, false);
});

test('calculateCurrentStreak counts consecutive true results from end', () => {
  assert.equal(calculateCurrentStreak([true, true, true]), 3);
  assert.equal(calculateCurrentStreak([true, false, true, true]), 2);
  assert.equal(calculateCurrentStreak([true, true, false]), 0);
  assert.equal(calculateCurrentStreak([]), 0);
});
