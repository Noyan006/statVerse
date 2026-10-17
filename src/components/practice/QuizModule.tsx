import React, { useState, useEffect } from 'react';
import { PracticeQuestion, Language } from '../../types/index.ts';
import { FormattedContent } from '../math/MathView.tsx';
import {
  calculateQuizEvaluation,
  calculateCurrentStreak,
  saveQuizProgress,
  loadQuizProgress,
} from '../../utils/quiz.ts';
import {
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  Flame,
  HelpCircle,
  Eye,
  Check,
  X,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export interface QuizModuleProps {
  questions: PracticeQuestion[];
  language: Language;
  lessonId?: string;
  lessonTitle?: string;
  onComplete?: (score: number, total: number, passed: boolean) => void;
  onScoreChange?: (score: number, total: number) => void;
  showTitle?: boolean;
  className?: string;
}

export const QuizModule: React.FC<QuizModuleProps> = ({
  questions,
  language,
  lessonId,
  lessonTitle,
  onComplete,
  onScoreChange,
  showTitle = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [results, setResults] = useState<(boolean | undefined)[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [previousAttempt, setPreviousAttempt] = useState<{
    score: number;
    total: number;
    percentage: number;
    updatedAt: string;
  } | null>(null);

  // Load previous best attempt from localStorage if lessonId is provided
  useEffect(() => {
    if (lessonId) {
      const prev = loadQuizProgress(lessonId);
      if (prev) {
        setPreviousAttempt(prev);
      }
    }
  }, [lessonId]);

  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;
  const correctIndices = questions.map((q) => q.correctIndex);
  const evaluation = calculateQuizEvaluation(answers, correctIndices);
  const streak = calculateCurrentStreak(results);

  const t = {
    title: language === 'bn' ? 'অনুশীলন ও কুইজ মডিউল' : 'Practice & Concept Quiz',
    subtitle:
      language === 'bn'
        ? 'তত্ত্বীয় জ্ঞান যাচাই করুন এবং প্রতিটি ভুলের জন্য তাত্ক্ষণিক বিশদ সমাধান দেখুন।'
        : 'Test your understanding with instant validation and conceptual explanations.',
    qNum:
      language === 'bn'
        ? `প্রশ্ন ${currentIndex + 1} / ${totalQuestions}`
        : `Question ${currentIndex + 1} of ${totalQuestions}`,
    scoreBadge: language === 'bn' ? 'স্কোর' : 'Score',
    streakBadge: language === 'bn' ? 'ধারাবাহিক সঠিক' : 'Streak',
    checkAnswer: language === 'bn' ? 'উত্তর যাচাই করুন' : 'Check Answer',
    nextQuestion: language === 'bn' ? 'পরবর্তী প্রশ্ন' : 'Next Question',
    viewSummary: language === 'bn' ? 'ফলাফল দেখুন' : 'Complete & View Results',
    correctVerdict:
      language === 'bn'
        ? 'অসাধারণ! আপনার উত্তর সঠিক হয়েছে।'
        : 'Correct! Outstanding conceptual reasoning.',
    incorrectVerdict:
      language === 'bn'
        ? 'উত্তরটি সঠিক নয়। কেন এই বিকল্পটি ভুল এবং সঠিক উত্তরের ব্যাখ্যা নিচে দেখুন:'
        : 'Not quite. Here is why this choice is incorrect and how to think about the correct solution:',
    correctChoiceBadge: language === 'bn' ? 'সঠিক উত্তর' : 'Correct Answer',
    yourChoiceBadge: language === 'bn' ? 'আপনার নির্বাচন' : 'Your Choice',
    explanationHeader: language === 'bn' ? 'বিশদ গাণিতিক ও ধারণাগত ব্যাখ্যা' : 'Detailed Explanation & Solution',
    whyWrongHeader: language === 'bn' ? 'কেন আপনার উত্তরটি বিভ্রান্তিকর ছিল?' : 'Common Misconception Alert:',
    resultTitle: language === 'bn' ? 'কুইজ সম্পন্ন হয়েছে!' : 'Quiz Completed!',
    scoreLabel: language === 'bn' ? 'চূড়ান্ত স্কোর' : 'Final Score',
    accuracyLabel: language === 'bn' ? 'সঠিকতার হার' : 'Accuracy',
    tryAgain: language === 'bn' ? 'পুনরায় চেষ্টা করুন' : 'Retake Quiz',
    reviewAnswers: language === 'bn' ? 'সব প্রশ্ন ও ব্যাখ্যা পর্যালোচনা করুন' : 'Review All Answers',
    hideReview: language === 'bn' ? 'পর্যালোচনা লুকান' : 'Hide Review',
    previousScore: language === 'bn' ? 'পূর্ববর্তী ফলাফল:' : 'Previous attempt:',
    masteryMsg:
      language === 'bn'
        ? 'দারুণ পাণ্ডিত্য! আপনি এই অধ্যায়ের মূল ধারণাগুলো সফলভাবে আয়ত্ত করেছেন।'
        : 'Mastery achieved! You have thoroughly grasped the core concepts of this lesson.',
    proficientMsg:
      language === 'bn'
        ? 'উত্তম প্রচেষ্টা! অধিকাংশ ধারণা পরিষ্কার, তবে সামান্য পর্যালোচনার সুযোগ রয়েছে।'
        : 'Good job! Solid foundation with a few minor areas to review.',
    needsPracticeMsg:
      language === 'bn'
        ? 'পুনরায় পাঠটি পড়ুন এবং আরও অনুশীলনের মাধ্যমে দুর্বলতাগুলো কাটিয়ে উঠুন।'
        : 'Review the lesson explanations and retake the quiz to build solid confidence.',
  };

  const handleSelect = (idx: number) => {
    if (!isSubmitted) {
      setSelectedOption(idx);
    }
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctIndex;
    const newAnswers = { ...answers, [currentIndex]: selectedOption };
    const newResults = [...results];
    newResults[currentIndex] = isCorrect;

    setAnswers(newAnswers);
    setResults(newResults);
    setIsSubmitted(true);

    const newEval = calculateQuizEvaluation(newAnswers, correctIndices);
    if (onScoreChange) {
      onScoreChange(newEval.score, totalQuestions);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      if (lessonId) {
        saveQuizProgress(lessonId, evaluation.score, totalQuestions);
      }
      if (onComplete) {
        onComplete(evaluation.score, totalQuestions, evaluation.passed);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setAnswers({});
    setResults([]);
    setIsFinished(false);
    setShowReview(false);
    if (lessonId) {
      const prev = loadQuizProgress(lessonId);
      if (prev) setPreviousAttempt(prev);
    }
  };

  // Completion / Results View
  if (isFinished) {
    return (
      <div
        className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 max-w-2xl mx-auto ${className}`}
      >
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-2xs">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {t.resultTitle}
            </h3>
            {lessonTitle && (
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                {lessonTitle}
              </p>
            )}
          </div>
        </div>

        {/* Score Card */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-center space-y-3">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
            {t.scoreLabel}
          </div>
          <div className="text-5xl font-black text-indigo-600 dark:text-indigo-400">
            {evaluation.score}{' '}
            <span className="text-2xl text-slate-400 font-normal">/ {totalQuestions}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span>
              {t.accuracyLabel}: {evaluation.percentage}%
            </span>
            <span>•</span>
            <span
              className={
                evaluation.gradeLevel === 'mastery'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : evaluation.gradeLevel === 'proficient'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-amber-600 dark:text-amber-400'
              }
            >
              {evaluation.gradeLevel === 'mastery'
                ? '🏆 ' + (language === 'bn' ? 'দক্ষ' : 'Mastery')
                : evaluation.gradeLevel === 'proficient'
                ? '⭐ ' + (language === 'bn' ? 'উন্নত' : 'Proficient')
                : '📖 ' + (language === 'bn' ? 'অনুশীলন কাম্য' : 'Practice Needed')}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto pt-1 leading-relaxed">
            {evaluation.gradeLevel === 'mastery'
              ? t.masteryMsg
              : evaluation.gradeLevel === 'proficient'
              ? t.proficientMsg
              : t.needsPracticeMsg}
          </p>

          {previousAttempt && (
            <div className="text-[11px] text-slate-400 dark:text-slate-500 pt-1">
              {t.previousScore} {previousAttempt.score}/{previousAttempt.total} ({previousAttempt.percentage}%)
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-2xs cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            {t.tryAgain}
          </button>

          <button
            onClick={() => setShowReview(!showReview)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4 text-slate-400" />
            {showReview ? t.hideReview : t.reviewAnswers}
          </button>
        </div>

        {/* Detailed Question Review List */}
        {showReview && (
          <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-500" />
              {language === 'bn' ? 'সকল প্রশ্নের বিশদ পর্যালোচনা:' : 'Comprehensive Questions Review:'}
            </h4>

            {questions.map((q, qIndex) => {
              const userAns = answers[qIndex];
              const isUserCorrect = userAns === q.correctIndex;
              return (
                <div
                  key={qIndex}
                  className={`p-4 rounded-xl border space-y-3 ${
                    isUserCorrect
                      ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60'
                      : 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs font-bold text-slate-500">
                      {language === 'bn' ? `প্রশ্ন ${qIndex + 1}` : `Question ${qIndex + 1}`}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        isUserCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200'
                          : 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200'
                      }`}
                    >
                      {isUserCorrect ? (
                        <>
                          <Check className="w-3 h-3" /> {language === 'bn' ? 'সঠিক' : 'Correct'}
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3" /> {language === 'bn' ? 'ভুল' : 'Incorrect'}
                        </>
                      )}
                    </span>
                  </div>

                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    <FormattedContent text={q.question[language]} />
                  </div>

                  {/* Options */}
                  <div className="space-y-1.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctIndex;
                      const isChosen = optIdx === userAns;
                      return (
                        <div
                          key={optIdx}
                          className={`text-xs p-2.5 rounded-lg border flex items-center justify-between ${
                            isCorrect
                              ? 'border-emerald-500 bg-emerald-100/70 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-100 font-semibold'
                              : isChosen
                              ? 'border-rose-400 bg-rose-100/70 dark:bg-rose-950/50 text-rose-900 dark:text-rose-100 line-through'
                              : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 opacity-70'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] w-4 h-4 rounded-full border border-current flex items-center justify-center shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt[language]}</span>
                          </div>
                          {isCorrect && (
                            <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 ml-2 shrink-0">
                              ✓ {t.correctChoiceBadge}
                            </span>
                          )}
                          {isChosen && !isCorrect && (
                            <span className="text-[10px] font-bold text-rose-700 dark:text-rose-300 ml-2 shrink-0">
                              ✗ {t.yourChoiceBadge}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <div className="font-bold text-indigo-600 dark:text-indigo-400 text-[11px] uppercase tracking-wider flex items-center gap-1">
                      <HelpCircle className="w-3 h-3" />
                      {t.explanationHeader}
                    </div>
                    <div>
                      <FormattedContent text={q.explanation[language]} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Active Quiz View
  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-7 shadow-sm space-y-6 ${className}`}
    >
      {/* Header with Title and Stats */}
      {showTitle && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              {t.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{t.subtitle}</p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            {streak > 1 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {streak} {t.streakBadge}
              </span>
            )}
            <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700">
              {t.scoreBadge}: {evaluation.score}
            </span>
          </div>
        </div>
      )}

      {/* Segmented Question Progress Tracker */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
          <span>{t.qNum}</span>
          <span>{Math.round(((currentIndex + (isSubmitted ? 1 : 0)) / totalQuestions) * 100)}%</span>
        </div>

        {/* Step indicator pills */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1.5">
          {questions.map((_, idx) => {
            const hasResult = results[idx] !== undefined;
            const isCorrect = results[idx] === true;
            const isCurrent = idx === currentIndex;

            let pillStyle = 'bg-slate-100 dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700';
            if (isCurrent && !hasResult) {
              pillStyle = 'bg-indigo-600 text-white border-indigo-600 ring-2 ring-indigo-200 dark:ring-indigo-900';
            } else if (hasResult) {
              if (isCorrect) {
                pillStyle = 'bg-emerald-500 text-white border-emerald-600';
              } else {
                pillStyle = 'bg-rose-500 text-white border-rose-600';
              }
            }

            return (
              <button
                key={idx}
                disabled={!hasResult && idx !== currentIndex}
                onClick={() => {
                  if (hasResult) {
                    setCurrentIndex(idx);
                    setSelectedOption(answers[idx]);
                    setIsSubmitted(true);
                  }
                }}
                className={`h-2.5 rounded-full transition-all border ${pillStyle} ${
                  hasResult ? 'cursor-pointer' : 'cursor-default'
                }`}
                title={`Question ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Question Content */}
      <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
        <FormattedContent text={currentQ.question[language]} />
      </div>

      {/* Multiple Choice Options */}
      <div className="space-y-2.5">
        {currentQ.options.map((opt, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === currentQ.correctIndex;

          let optionContainerStyles =
            'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200';

          if (isSelected && !isSubmitted) {
            optionContainerStyles =
              'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 ring-2 ring-indigo-500/20';
          }

          if (isSubmitted) {
            if (isCorrect) {
              optionContainerStyles =
                'border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-semibold ring-2 ring-emerald-500/30';
            } else if (isSelected) {
              optionContainerStyles =
                'border-rose-500 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 line-through ring-2 ring-rose-500/30';
            } else {
              optionContainerStyles = 'opacity-60 border-slate-200 dark:border-slate-800';
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={isSubmitted}
              className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all text-xs sm:text-sm flex items-start justify-between gap-3 ${optionContainerStyles} cursor-pointer`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`w-6 h-6 rounded-full border border-current shrink-0 flex items-center justify-center text-xs font-mono mt-0.5 ${
                    isSubmitted && isCorrect
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : isSubmitted && isSelected
                      ? 'bg-rose-600 text-white border-rose-600'
                      : ''
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-relaxed">
                  <FormattedContent text={opt[language]} />
                </span>
              </div>

              {/* Immediate Validation Badges */}
              {isSubmitted && (
                <div className="shrink-0 flex items-center gap-1">
                  {isCorrect && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t.correctChoiceBadge}
                    </span>
                  )}
                  {isSelected && !isCorrect && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded-md">
                      <XCircle className="w-3.5 h-3.5" />
                      {t.yourChoiceBadge}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Validation Feedback & Explanations */}
      {isSubmitted && (
        <div
          className={`p-4 sm:p-5 rounded-xl border space-y-3 transition-all animate-in fade-in-50 duration-200 ${
            selectedOption === currentQ.correctIndex
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-100'
              : 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-100'
          }`}
        >
          {/* Verdict Header */}
          <div className="flex items-center gap-2 font-bold text-sm sm:text-base">
            {selectedOption === currentQ.correctIndex ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{t.correctVerdict}</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>{t.incorrectVerdict}</span>
              </>
            )}
          </div>

          {/* Detailed Conceptual Explanation */}
          <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm leading-relaxed space-y-1.5 text-slate-800 dark:text-slate-200 shadow-2xs">
            <div className="font-bold text-indigo-600 dark:text-indigo-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              {t.explanationHeader}:
            </div>
            <div>
              <FormattedContent text={currentQ.explanation[language]} />
            </div>
          </div>
        </div>
      )}

      {/* Action Controls */}
      <div className="flex items-center justify-between pt-2">
        <div className="text-xs text-slate-400">
          {isSubmitted ? (
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
              {currentIndex + 1 < totalQuestions ? '✓ Answer registered' : '🏁 Last question'}
            </span>
          ) : (
            <span>Select an answer to proceed</span>
          )}
        </div>

        <div>
          {!isSubmitted ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className={`px-6 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs ${
                selectedOption !== null
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer active:scale-98'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              {t.checkAnswer}
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-xs cursor-pointer active:scale-98"
            >
              {currentIndex + 1 < totalQuestions ? t.nextQuestion : t.viewSummary}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
