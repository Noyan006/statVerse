import React from 'react';
import { CATEGORIES } from '../../data/categories.ts';
import { LESSONS } from '../../data/lessons.ts';
import { Language } from '../../types/index.ts';
import {
  Compass,
  Sparkles,
  BookOpen,
  ArrowRight,
  Bot,
  Terminal,
  Activity,
  Layers,
  CheckCircle,
  TrendingUp,
  Cpu,
  Binary,
  BarChart2,
  Dice5,
} from 'lucide-react';

interface Props {
  language: Language;
  onNavigateTab: (tab: string) => void;
  onNavigateCategory?: (categoryId: string) => void;
  onSelectLesson: (id: string) => void;
  onOpenStatBot: () => void;
  onOpenSearch: () => void;
}

export const HomeView: React.FC<Props> = ({
  language,
  onNavigateTab,
  onNavigateCategory,
  onSelectLesson,
  onOpenStatBot,
  onOpenSearch,
}) => {
  const featuredLessonIds = [
    'intro-to-statistics',
    'linear-algebra-data-science',
    'bayes-theorem',
    'normal-distribution',
    'two-sample-t-test',
    'principal-component-analysis',
  ];
  const featuredLessons = featuredLessonIds
    .map((id) => LESSONS.find((l) => l.id === id))
    .filter((l): l is (typeof LESSONS)[0] => Boolean(l));

  const t = {
    badge: language === 'bn' ? 'পরিসংখ্যান ও ডেটা সায়েন্সের ইন্টারেক্টিভ প্ল্যাটফর্ম' : 'Interactive Statistics & Data Science Platform',
    heroTitle: language === 'bn' ? 'পরিসংখ্যান শিখুন সহজে, দৃশ্যমান ও বাস্তবিক উপায়ে' : 'Master Statistics & Data Science with Intuition & Rigor',
    heroSubtitle:
      language === 'bn'
        ? 'বাংলা ও ইংরেজিতে সহজবোধ্য ব্যাখ্যা, জীবন্ত গাণিতিক সমীকরণ, সিমুলেশন ল্যাবরেটরি এবং এআই টিউটর StatBot-এর সার্বক্ষণিক সহায়তা।'
        : 'Explore comprehensive bilingual explanations, step-by-step mathematical proofs, live interactive simulations, and AI tutor assistance.',
    startLearning: language === 'bn' ? 'পাঠ্যক্রম শুরু করুন' : 'Start Learning',
    trySimulations: language === 'bn' ? 'সিমুলেটর দেখুন' : 'Explore Simulators',
    askStatBot: language === 'bn' ? 'StatBot এআই টিউটর' : 'StatBot AI Tutor',
    categoriesTitle: language === 'bn' ? 'পাঠ্যক্রমের বিষয়সমূহ' : 'Curriculum Modules',
    categoriesSubtitle:
      language === 'bn'
        ? 'মৌলিক গণিত থেকে শুরু করে উচ্চতর ডেটা সায়েন্স পর্যন্ত ৯টি সমৃদ্ধ মডিউল'
        : '9 comprehensive modules spanning foundational mathematics to advanced machine learning',
    featuredTitle: language === 'bn' ? 'জনপ্রিয় ও মৌলিক পাঠসমূহ' : 'Featured Foundational Lessons',
    viewAllLessons: language === 'bn' ? 'সবগুলো ২০টি পাঠ দেখুন' : 'View all 20 lessons',
    whyStatVerseTitle: language === 'bn' ? 'কেন StatVerse অনন্য?' : 'Why Learn on StatVerse?',
    feature1Title: language === 'bn' ? 'দ্বিভাষিক শিক্ষা (বাংলা ও English)' : 'Fully Bilingual Experience',
    feature1Desc:
      language === 'bn'
        ? 'প্রতিটি ধারণা, সূত্র ও ব্যাখ্যা বাংলা এবং ইংরেজিতে সমান্তরালভাবে উপলব্ধ।'
        : 'Natural academic English paired with fluent, rigorous Bengali explanations throughout.',
    feature2Title: language === 'bn' ? 'ইন্টারেক্টিভ সিমুলেশন' : 'Interactive Visual Labs',
    feature2Desc:
      language === 'bn'
        ? 'স্লাইডার নাড়িয়ে স্বাভাবিক বণ্টন, CLT, ভেদাঙ্ক ও রিগ্রেশন সরাসরি চোখে দেখুন।'
        : 'Real-time SVG plots and mathematical sliders bring abstract equations to life.',
    feature3Title: language === 'bn' ? 'বাস্তব কোডিং (Python & R)' : 'Practical Coding Labs',
    feature3Desc:
      language === 'bn'
        ? 'NumPy, Pandas, SciPy, ggplot2, SQL এবং Excel-এর রেডিমেড কোড ও আউটপুট।'
        : 'Executable syntax-highlighted code snippets with expected terminal outputs and datasets.',
    feature4Title: language === 'bn' ? 'কনটেক্সট-সচেতন এআই টিউটর' : 'Context-Aware AI Tutor',
    feature4Desc:
      language === 'bn'
        ? 'StatBot আপনার প্রশ্ন বুঝে সরাসরি সঠিক অধ্যায় নির্দেশ করে ও ধাপে ধাপে সমাধান দেয়।'
        : 'StatBot answers inquiries and seamlessly links to indexed StatVerse curriculum pages.',
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-5 h-5 text-indigo-500" />;
      case 'BarChart2':
        return <BarChart2 className="w-5 h-5 text-blue-500" />;
      case 'Dice5':
        return <Dice5 className="w-5 h-5 text-emerald-500" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-500" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-violet-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-teal-500" />;
      default:
        return <BookOpen className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-16 text-center space-y-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>{t.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {t.heroTitle}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {t.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
          <button
            onClick={() => onNavigateTab('curriculum')}
            className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-indigo-500/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            {t.startLearning}
          </button>

          <button
            onClick={() => onNavigateTab('simulations')}
            className="px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-800 dark:text-slate-200 font-bold text-sm rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            {t.trySimulations}
          </button>

          <button
            onClick={onOpenStatBot}
            className="px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <Bot className="w-4 h-4" />
            {t.askStatBot}
          </button>
        </div>

        {/* Live Metrics Pill Strip */}
        <div className="pt-6 flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{LESSONS.length} In-Depth Lessons</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span>9 Interactive Simulations</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>KaTeX Math Notation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Python, R, SQL & Excel</span>
          </div>
        </div>
      </section>

      {/* Curriculum Categories Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
            {t.categoriesTitle}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t.categoriesSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => {
            const count = LESSONS.filter((l) => l.categoryId === cat.id).length;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  if (onNavigateCategory) {
                    onNavigateCategory(cat.id);
                  } else {
                    onNavigateTab('curriculum');
                  }
                }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-indigo-400 dark:hover:border-indigo-600 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {getCategoryIcon(cat.iconName)}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {cat.title[language]}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium">{cat.subtitle[language]}</div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cat.description[language]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  <span>{count} {count === 1 ? 'Lesson' : 'Lessons'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Lessons */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
              {t.featuredTitle}
            </h2>
          </div>
          <button
            onClick={() => onNavigateTab('curriculum')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1 hover:underline"
          >
            {t.viewAllLessons}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-indigo-400 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] uppercase font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Lesson #{lesson.order}
                  </span>
                  <span className="text-[10px] uppercase font-mono text-slate-400">{lesson.level}</span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 text-sm sm:text-base leading-snug">
                  {lesson.title[language]}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {lesson.shortDescription[language]}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <span>Start Reading</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why StatVerse Feature Cards */}
      <section className="space-y-6 pt-6">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 text-center">
          {t.whyStatVerseTitle}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center font-bold text-sm">
              বাংলা
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.feature1Title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{t.feature1Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.feature2Title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{t.feature2Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center font-bold">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.feature3Title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{t.feature3Desc}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.feature4Title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{t.feature4Desc}</p>
          </div>
        </div>
      </section>

      {/* AI Tutor Callout Banner */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            StatBot AI Assistant
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">
            {language === 'bn' ? 'যেকোনো গাণিতিক সমস্যা বুঝতে আটকে গেছেন?' : 'Stuck on a tricky formula or coding error?'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {language === 'bn'
              ? 'StatBot আপনার যেকোনো প্রশ্নের বিস্তারিত ব্যাখ্যা দেবে, সমীকরণের ধাপ দেখাবে এবং প্রয়োজনীয় পাইথন বা আর কোড তৈরি করবে।'
              : 'StatBot gives step-by-step mathematical reasoning, clarifies statistical tests, and generates code snippets on demand.'}
          </p>
        </div>

        <button
          onClick={onOpenStatBot}
          className="px-6 py-3.5 rounded-xl bg-white text-indigo-950 font-bold text-sm hover:bg-slate-100 transition-colors shadow-lg shrink-0 cursor-pointer"
        >
          {t.askStatBot}
        </button>
      </section>
    </div>
  );
};
