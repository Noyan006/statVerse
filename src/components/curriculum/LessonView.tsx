import React, { useState } from 'react';
import { Lesson, Language } from '../../types/index.ts';
import { MathView, FormattedContent } from '../math/MathView.tsx';
import { QuizModule } from '../practice/QuizModule.tsx';
import { MeanMedianModeExplorer } from '../simulations/MeanMedianModeExplorer.tsx';
import { VarianceExplorer } from '../simulations/VarianceExplorer.tsx';
import { NormalDistributionVisualizer } from '../simulations/NormalDistributionVisualizer.tsx';
import { CentralLimitTheoremSimulator } from '../simulations/CentralLimitTheoremSimulator.tsx';
import { LawOfLargeNumbersVisualizer } from '../simulations/LawOfLargeNumbersVisualizer.tsx';
import { BayesCalculator } from '../simulations/BayesCalculator.tsx';
import { ConfidenceIntervalVisualizer } from '../simulations/ConfidenceIntervalVisualizer.tsx';
import { HypothesisTestVisualizer } from '../simulations/HypothesisTestVisualizer.tsx';
import { RegressionExplorer } from '../simulations/RegressionExplorer.tsx';
import {
  Bookmark,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Share2,
  Copy,
  Check,
} from 'lucide-react';

interface Props {
  lesson: Lesson;
  language: Language;
  isBookmarked: boolean;
  isCompleted: boolean;
  onToggleBookmark: (id: string) => void;
  onToggleComplete: (id: string) => void;
  onNavigateLesson: (id: string) => void;
  onOpenStatBot: () => void;
  previousLessonId?: string;
  nextLessonId?: string;
}

export const LessonView: React.FC<Props> = ({
  lesson,
  language,
  isBookmarked,
  isCompleted,
  onToggleBookmark,
  onToggleComplete,
  onNavigateLesson,
  onOpenStatBot,
  previousLessonId,
  nextLessonId,
}) => {
  const [copiedCodeType, setCopiedCodeType] = useState<'py' | 'r' | null>(null);

  const handleCopyCode = (code: string, type: 'py' | 'r') => {
    navigator.clipboard.writeText(code);
    setCopiedCodeType(type);
    setTimeout(() => setCopiedCodeType(null), 2000);
  };

  const renderInteractiveSimulation = () => {
    switch (lesson.interactiveToolId) {
      case 'mean-median-mode-explorer':
        return <MeanMedianModeExplorer language={language} />;
      case 'variance-explorer':
        return <VarianceExplorer language={language} />;
      case 'normal-distribution-visualizer':
        return <NormalDistributionVisualizer language={language} />;
      case 'clt-simulator':
        return <CentralLimitTheoremSimulator language={language} />;
      case 'law-of-large-numbers-visualizer':
        return <LawOfLargeNumbersVisualizer language={language} />;
      case 'bayes-calculator':
        return <BayesCalculator language={language} />;
      case 'confidence-interval-visualizer':
        return <ConfidenceIntervalVisualizer language={language} />;
      case 'hypothesis-test-visualizer':
        return <HypothesisTestVisualizer language={language} />;
      case 'regression-explorer':
        return <RegressionExplorer language={language} />;
      default:
        return null;
    }
  };

  const t = {
    defHeader: language === 'bn' ? 'সংজ্ঞা ও মূল ধারণা' : 'Core Definition',
    whyMattersHeader: language === 'bn' ? 'কেন এটি গুরুত্বপূর্ণ?' : 'Why It Matters',
    termsHeader: language === 'bn' ? 'গুরুত্বপূর্ণ পরিভাষা' : 'Key Terminology',
    equationsHeader: language === 'bn' ? 'গাণিতিক সূত্র ও প্রতিপাদন' : 'Mathematical Formulation & Equations',
    derivationHeader: language === 'bn' ? 'ধাপে ধাপে প্রতিপাদন' : 'Step-by-Step Derivation',
    examplesHeader: language === 'bn' ? 'বাস্তব সংখ্যাগত উদাহরণ' : 'Worked Numerical Examples',
    applicationsHeader: language === 'bn' ? 'বাস্তব জীবনের প্রয়োগ' : 'Real-Life Applications',
    simulationHeader: language === 'bn' ? 'ইন্টারেক্টিভ সিমুলেশন ও ভিজ্যুয়ালাইজেশন' : 'Interactive Simulation & Visualization',
    codeHeader: language === 'bn' ? 'প্রোগ্রামিং কোড টিউটোরিয়াল (Python & R)' : 'Practical Programming Implementation',
    mistakesHeader: language === 'bn' ? 'সাধারণ ভুল ও ভ্রান্ত ধারণা' : 'Common Mistakes & Misconceptions',
    takeawaysHeader: language === 'bn' ? 'সারসংক্ষেপ ও প্রধান শিক্ষণীয় বিষয়' : 'Key Takeaways',
    quizHeader: language === 'bn' ? 'অনুশীলন ও কুইজ প্রশ্নাবলী' : 'Concept Mastery Quiz',
    prereqHeader: language === 'bn' ? 'পূর্বশর্ত ও সম্পর্কিত বিষয়' : 'Related Lessons & Prerequisites',
    markDone: language === 'bn' ? 'সম্পন্ন চিহ্নিত করুন' : 'Mark as Completed',
    completed: language === 'bn' ? 'সম্পন্ন হয়েছে' : 'Completed',
    askStatBot: language === 'bn' ? 'StatBot-কে এই বিষয়ে জিজ্ঞাসা করুন' : 'Ask StatBot about this',
    prev: language === 'bn' ? 'পূর্ববর্তী অধ্যায়' : 'Previous Lesson',
    next: language === 'bn' ? 'পরবর্তী অধ্যায়' : 'Next Lesson',
    solution: language === 'bn' ? 'সমাধান:' : 'Solution:',
    finalAnswer: language === 'bn' ? 'চূড়ান্ত উত্তর:' : 'Final Answer:',
  };

  return (
    <article className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <button
          onClick={() => onNavigateLesson('all-topics')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {language === 'bn' ? 'সকল অধ্যায়ে ফিরে যান' : 'Back to Curriculum'}
        </button>

        <div className="flex items-center gap-2">
          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(lesson.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isBookmarked
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            {isBookmarked ? (language === 'bn' ? 'বুকমার্কড' : 'Bookmarked') : (language === 'bn' ? 'বুকমার্ক' : 'Bookmark')}
          </button>

          {/* Complete Button */}
          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isCompleted
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white border-transparent'
            }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 ${isCompleted ? 'fill-current' : ''}`} />
            {isCompleted ? t.completed : t.markDone}
          </button>

          {/* Ask AI button */}
          <button
            onClick={onOpenStatBot}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            StatBot
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
            {lesson.level}
          </span>
          <span className="text-xs text-slate-400 font-mono">Lesson #{lesson.order}</span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            {lesson.title[language]}
          </h1>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            {language === 'bn' ? lesson.title.en : lesson.title.bn}
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          {lesson.shortDescription[language]}
        </p>
      </header>

      {/* 2. Definition & 3. Why It Matters (Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-indigo-800 dark:text-indigo-300">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            {t.defHeader}
          </div>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {lesson.definition[language]}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900/60 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-800 dark:text-amber-300">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            {t.whyMattersHeader}
          </div>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
            {lesson.whyItMatters[language]}
          </p>
        </div>
      </section>

      {/* 10. Interactive Simulation (If present) */}
      {lesson.interactiveToolId && (
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-4 h-4" />
            {t.simulationHeader}
          </div>
          {renderInteractiveSimulation()}
        </section>
      )}

      {/* 5. Key Terminology */}
      {lesson.keyTerms.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t.termsHeader}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lesson.keyTerms.map((term, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1.5"
              >
                <div className="font-bold text-sm text-indigo-600 dark:text-indigo-400">
                  {term.term[language]}
                  <span className="text-xs font-normal text-slate-400 ml-1.5">
                    ({language === 'bn' ? term.term.en : term.term.bn})
                  </span>
                </div>
                {term.latex && (
                  <div className="py-1 overflow-x-auto text-xs">
                    <MathView math={term.latex} />
                  </div>
                )}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {term.definition[language]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Mathematical Equations */}
      {lesson.equations.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t.equationsHeader}
          </h2>
          <div className="space-y-4">
            {lesson.equations.map((eq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3"
              >
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {eq.label[language]}
                </div>
                <MathView math={eq.latex} block />
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {eq.explanation[language]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Worked Numerical Examples */}
      {lesson.workedExamples.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t.examplesHeader}
          </h2>
          <div className="space-y-6">
            {lesson.workedExamples.map((ex, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-4"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-600 font-mono tracking-wider">
                    Example #{i + 1}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                    {ex.title[language]}
                  </h3>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {ex.problem[language]}
                </div>

                {/* Steps */}
                <div className="space-y-3 pl-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{t.solution}</div>
                  {ex.solutionSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                        {step.step}
                      </span>
                      <div className="space-y-1">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{step.text[language]}</p>
                        {step.math && <MathView math={step.math} block />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final Answer */}
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs text-emerald-900 dark:text-emerald-200 font-medium">
                  <span className="font-bold mr-1.5">{t.finalAnswer}</span>
                  {ex.finalAnswer[language]}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 9. Real-Life Applications */}
      {lesson.realLifeApplications.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t.applicationsHeader}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lesson.realLifeApplications.map((app, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-1"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  {app.field[language]}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {app.example[language]}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 11. Code Tutorials (Python & R) */}
      {(lesson.pythonCode || lesson.rCode) && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-500" />
            {t.codeHeader}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Python Box */}
            {lesson.pythonCode && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">Python (NumPy / SciPy)</span>
                  <button
                    onClick={() => handleCopyCode(lesson.pythonCode!, 'py')}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 inline-flex items-center gap-1"
                  >
                    {copiedCodeType === 'py' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono bg-slate-950 text-slate-100 overflow-x-auto leading-relaxed">
                  <code>{lesson.pythonCode}</code>
                </pre>
              </div>
            )}

            {/* R Box */}
            {lesson.rCode && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs">
                <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400">R Programming</span>
                  <button
                    onClick={() => handleCopyCode(lesson.rCode!, 'r')}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 inline-flex items-center gap-1"
                  >
                    {copiedCodeType === 'r' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-4 text-xs font-mono bg-slate-950 text-slate-100 overflow-x-auto leading-relaxed">
                  <code>{lesson.rCode}</code>
                </pre>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 12. Common Mistakes */}
      {lesson.commonMistakes.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            {t.mistakesHeader}
          </h2>
          <div className="space-y-3">
            {lesson.commonMistakes.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-2 text-xs sm:text-sm"
              >
                <div className="font-bold text-rose-800 dark:text-rose-300">
                  ❌ {item.mistake[language]}
                </div>
                <div className="text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-emerald-500">
                  <span className="font-bold text-emerald-700 dark:text-emerald-400 mr-1">✓ Correct Understanding:</span>
                  {item.correct[language]}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 13. Key Takeaways */}
      {lesson.keyTakeaways.length > 0 && (
        <section className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 space-y-3">
          <h3 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-indigo-600" />
            {t.takeawaysHeader}
          </h3>
          <ul className="space-y-2">
            {lesson.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                <span>{takeaway[language]}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 14. Practice Questions & Quiz */}
      {lesson.practiceQuestions.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-2">
            {t.quizHeader}
          </h2>
          <QuizModule
            questions={lesson.practiceQuestions}
            language={language}
            lessonId={lesson.id}
            lessonTitle={lesson.title[language]}
            onComplete={(score, total, passed) => {
              if (passed) {
                onToggleComplete(lesson.id);
              }
            }}
          />
        </section>
      )}

      {/* 15. Related Lessons */}
      {lesson.relatedLessonIds.length > 0 && (
        <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {t.prereqHeader}
          </div>
          <div className="flex flex-wrap gap-2">
            {lesson.relatedLessonIds.map((relId) => (
              <button
                key={relId}
                onClick={() => onNavigateLesson(relId)}
                className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-400 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{relId.replace(/-/g, ' ')}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <footer className="pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center gap-4">
        {previousLessonId ? (
          <button
            onClick={() => onNavigateLesson(previousLessonId)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.prev}
          </button>
        ) : <div />}

        {nextLessonId && (
          <button
            onClick={() => onNavigateLesson(nextLessonId)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            {t.next}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </footer>
    </article>
  );
};
