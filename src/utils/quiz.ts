/**
 * Pure quiz evaluation, score calculations, and progress tracking utilities.
 */

export interface QuizEvaluationResult {
  score: number;
  total: number;
  percentage: number;
  passed: boolean;
  gradeLevel: 'mastery' | 'proficient' | 'needs-practice';
}

export function calculateQuizEvaluation(
  answers: Record<number, number>,
  correctIndices: number[]
): QuizEvaluationResult {
  const total = correctIndices.length;
  if (total === 0) {
    return {
      score: 0,
      total: 0,
      percentage: 0,
      passed: false,
      gradeLevel: 'needs-practice',
    };
  }

  let score = 0;
  correctIndices.forEach((correctIdx, qIdx) => {
    if (answers[qIdx] === correctIdx) {
      score += 1;
    }
  });

  const percentage = Math.round((score / total) * 100);
  const passed = percentage >= 70;

  let gradeLevel: 'mastery' | 'proficient' | 'needs-practice' = 'needs-practice';
  if (percentage >= 85) {
    gradeLevel = 'mastery';
  } else if (percentage >= 60) {
    gradeLevel = 'proficient';
  }

  return {
    score,
    total,
    percentage,
    passed,
    gradeLevel,
  };
}

export function calculateCurrentStreak(results: (boolean | undefined)[]): number {
  let streak = 0;
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i] === true) {
      streak += 1;
    } else if (results[i] === false) {
      break;
    }
  }
  return streak;
}

export function saveQuizProgress(lessonId: string, score: number, total: number): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const data = {
        score,
        total,
        percentage: Math.round((score / total) * 100),
        updatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(`statverse_quiz_${lessonId}`, JSON.stringify(data));
    }
  } catch {
    // Graceful fallback for non-browser or sandbox environments
  }
}

export function loadQuizProgress(lessonId: string): { score: number; total: number; percentage: number; updatedAt: string } | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = window.localStorage.getItem(`statverse_quiz_${lessonId}`);
      if (saved) {
        return JSON.parse(saved);
      }
    }
  } catch {
    // Ignore error
  }
  return null;
}
