import React, { useState } from 'react';
import { LESSONS } from '../../data/lessons.ts';
import { CATEGORIES } from '../../data/categories.ts';
import { Language, CategoryId, DifficultyLevel } from '../../types/index.ts';
import {
  Compass,
  ArrowRight,
  CheckCircle,
  Bookmark,
  Layers,
  Sparkles,
  BookOpen,
} from 'lucide-react';

interface Props {
  language: Language;
  onSelectLesson: (id: string) => void;
  completedLessons: string[];
  bookmarkedLessons: string[];
  selectedCategoryId?: CategoryId;
}

export const AllTopicsView: React.FC<Props> = ({
  language,
  onSelectLesson,
  completedLessons,
  bookmarkedLessons,
  selectedCategoryId,
}) => {
  const [activeCat, setActiveCat] = useState<string>(selectedCategoryId || 'all');
  const [activeLevel, setActiveLevel] = useState<string>('all');

  React.useEffect(() => {
    if (selectedCategoryId) {
      setActiveCat(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const filteredLessons = LESSONS.filter((lesson) => {
    if (activeCat !== 'all' && lesson.categoryId !== activeCat) return false;
    if (activeLevel !== 'all' && lesson.level !== activeLevel) return false;
    return true;
  });

  const t = {
    title: language === 'bn' ? 'সম্পূর্ণ পরিসংখ্যান ও ডেটা সায়েন্স পাঠ্যক্রম' : 'Complete Statistics & Data Science Curriculum',
    subtitle:
      language === 'bn'
        ? 'গাণিতিক ভিত্তি থেকে শুরু করে মেশিন লার্নিং পর্যন্ত ধাপে ধাপে সাজানো সমৃদ্ধ পাঠ।'
        : 'Structured from mathematical foundations to advanced machine learning and practical coding.',
    all: language === 'bn' ? 'সকল বিভাগ' : 'All Categories',
    allLevels: language === 'bn' ? 'সকল স্তর' : 'All Levels',
    beginner: language === 'bn' ? 'প্রাথমিক' : 'Beginner',
    intermediate: language === 'bn' ? 'মধ্যবর্তী' : 'Intermediate',
    advanced: language === 'bn' ? 'উন্নত' : 'Advanced',
    startLesson: language === 'bn' ? 'অধ্যায় শুরু করুন' : 'Start Lesson',
    hasSim: language === 'bn' ? 'ইন্টারেক্টিভ সিমুলেশন অন্তর্ভুক্ত' : 'Interactive Simulation Available',
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Compass className="w-7 h-7 text-indigo-500" />
          {t.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </div>

      {/* Categories Filter Pills */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              activeCat === 'all'
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
            }`}
          >
            {t.all} <span className="opacity-75 font-normal ml-1">({LESSONS.length})</span>
          </button>
          {CATEGORIES.map((cat) => {
            const count = LESSONS.filter((l) => l.categoryId === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all inline-flex items-center gap-1.5 ${
                  activeCat === cat.id
                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <span>{cat.title[language]}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeCat === cat.id ? 'bg-indigo-700 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Level Filter */}
        <div className="flex gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveLevel('all')}
            className={`px-3 py-1 rounded-lg ${
              activeLevel === 'all'
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.allLevels}
          </button>
          <button
            onClick={() => setActiveLevel('beginner')}
            className={`px-3 py-1 rounded-lg ${
              activeLevel === 'beginner'
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.beginner}
          </button>
          <button
            onClick={() => setActiveLevel('intermediate')}
            className={`px-3 py-1 rounded-lg ${
              activeLevel === 'intermediate'
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.intermediate}
          </button>
          <button
            onClick={() => setActiveLevel('advanced')}
            className={`px-3 py-1 rounded-lg ${
              activeLevel === 'advanced'
                ? 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t.advanced}
          </button>
        </div>
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson) => {
          const isDone = completedLessons.includes(lesson.id);
          const isMarked = bookmarkedLessons.includes(lesson.id);
          const cat = CATEGORIES.find((c) => c.id === lesson.categoryId);

          return (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded-md font-semibold text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {cat?.title[language] || lesson.categoryId}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isDone && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                    {isMarked && <Bookmark className="w-4 h-4 text-amber-500 fill-current" />}
                    <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                      {lesson.level}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-slate-100 text-base sm:text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {lesson.title[language]}
                  </h3>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {language === 'bn' ? lesson.title.en : lesson.title.bn}
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {lesson.shortDescription[language]}
                </p>

                {lesson.interactiveToolId && (
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-3 h-3" />
                    {t.hasSim}
                  </div>
                )}
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>{t.startLesson}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
