export type Language = 'en' | 'bn';
export type Theme = 'light' | 'dark';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type CategoryId =
  | 'math-foundations'
  | 'stats-fundamentals'
  | 'probability-theory'
  | 'prob-distributions'
  | 'inference'
  | 'regression'
  | 'advanced-stats'
  | 'data-science'
  | 'coding-labs';

export interface BilingualText {
  en: string;
  bn: string;
}

export interface KeyTerm {
  term: BilingualText;
  definition: BilingualText;
  latex?: string;
}

export interface EquationItem {
  label: BilingualText;
  latex: string;
  explanation: BilingualText;
}

export interface DerivationStep {
  step: number;
  title: BilingualText;
  latex?: string;
  text: BilingualText;
}

export interface WorkedExample {
  title: BilingualText;
  problem: BilingualText;
  solutionSteps: Array<{
    step: number;
    text: BilingualText;
    math?: string;
  }>;
  finalAnswer: BilingualText;
}

export interface RealLifeApplication {
  field: BilingualText;
  example: BilingualText;
}

export interface CommonMistake {
  mistake: BilingualText;
  correct: BilingualText;
}

export interface PracticeQuestion {
  id: string;
  question: BilingualText;
  options: BilingualText[];
  correctIndex: number;
  explanation: BilingualText;
}

export interface Lesson {
  id: string;
  categoryId: CategoryId;
  order: number;
  title: BilingualText;
  shortDescription: BilingualText;
  definition: BilingualText;
  whyItMatters: BilingualText;
  level: DifficultyLevel;
  prerequisites: string[];
  keyTerms: KeyTerm[];
  equations: EquationItem[];
  derivationStepByStep?: DerivationStep[];
  workedExamples: WorkedExample[];
  realLifeApplications: RealLifeApplication[];
  interactiveToolId?: string;
  pythonCode?: string;
  rCode?: string;
  commonMistakes: CommonMistake[];
  keyTakeaways: BilingualText[];
  practiceQuestions: PracticeQuestion[];
  relatedLessonIds: string[];
}

export interface CategoryInfo {
  id: CategoryId;
  title: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  iconName: string;
  accentColor: string;
  totalLessons: number;
}

export interface UserProgress {
  completedLessons: string[];
  bookmarkedLessons: string[];
  recentLessons: string[];
  quizScores: Record<string, { score: number; total: number; date: string }>;
}
