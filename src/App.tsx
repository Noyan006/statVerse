import React, { useState, useEffect } from 'react';
import { LESSONS } from './data/lessons.ts';
import { CATEGORIES } from './data/categories.ts';
import { Language, Theme, UserProgress, CategoryId } from './types/index.ts';
import { HomeView } from './components/home/HomeView.tsx';
import { AllTopicsView } from './components/curriculum/AllTopicsView.tsx';
import { LessonView } from './components/curriculum/LessonView.tsx';
import { SimulationsHub } from './components/simulations/SimulationsHub.tsx';
import { CodingLab } from './components/labs/CodingLab.tsx';
import { LearningDashboard } from './components/dashboard/LearningDashboard.tsx';
import { SettingsView } from './components/settings/SettingsView.tsx';
import { SmartSearchModal } from './components/search/SmartSearchModal.tsx';
import { StatBotModal } from './components/ai/StatBotModal.tsx';
import {
  Compass,
  Home,
  BookOpen,
  Sparkles,
  Terminal,
  Trophy,
  Settings,
  Search,
  Bot,
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  Sigma,
} from 'lucide-react';

export default function App() {
  // 1. Language state
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('statverse_lang');
      return saved === 'bn' ? 'bn' : 'en';
    } catch {
      return 'en';
    }
  });

  // 2. Theme state
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('statverse_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  // 3. Navigation state
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<CategoryId | undefined>(undefined);

  // 4. Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isStatBotOpen, setIsStatBotOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // 5. User progress state (localStorage)
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('statverse_progress');
      if (saved) return JSON.parse(saved);
    } catch {}
    return {
      completedLessons: ['intro-to-statistics'],
      bookmarkedLessons: ['bayes-theorem', 'normal-distribution'],
      recentLessons: ['intro-to-statistics', 'mean-median-mode'],
      quizScores: {},
    };
  });

  // Persist settings
  useEffect(() => {
    localStorage.setItem('statverse_lang', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('statverse_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('statverse_progress', JSON.stringify(progress));
  }, [progress]);

  // Handle keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveTab('lesson-view');
    setIsMobileMenuOpen(false);

    // Add to recent lessons
    setProgress((prev) => {
      const filtered = prev.recentLessons.filter((id) => id !== lessonId);
      return {
        ...prev,
        recentLessons: [lessonId, ...filtered].slice(0, 8),
      };
    });
  };

  const handleToggleBookmark = (lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.bookmarkedLessons.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessons: exists
          ? prev.bookmarkedLessons.filter((id) => id !== lessonId)
          : [...prev.bookmarkedLessons, lessonId],
      };
    });
  };

  const handleToggleComplete = (lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      return {
        ...prev,
        completedLessons: exists
          ? prev.completedLessons.filter((id) => id !== lessonId)
          : [...prev.completedLessons, lessonId],
      };
    });
  };

  const handleResetProgress = () => {
    const emptyProgress: UserProgress = {
      completedLessons: [],
      bookmarkedLessons: [],
      recentLessons: [],
      quizScores: {},
    };
    setProgress(emptyProgress);
  };

  const selectedLesson = selectedLessonId ? LESSONS.find((l) => l.id === selectedLessonId) : null;
  const currentLessonIndex = selectedLesson ? LESSONS.findIndex((l) => l.id === selectedLesson.id) : -1;
  const prevLessonId = currentLessonIndex > 0 ? LESSONS[currentLessonIndex - 1].id : undefined;
  const nextLessonId = currentLessonIndex >= 0 && currentLessonIndex < LESSONS.length - 1 ? LESSONS[currentLessonIndex + 1].id : undefined;

  const navItems = [
    { id: 'home', label: { en: 'Home', bn: 'হোম' }, icon: Home },
    { id: 'curriculum', label: { en: 'Curriculum', bn: 'পাঠ্যক্রম' }, icon: Compass },
    { id: 'simulations', label: { en: 'Simulations', bn: 'সিমুলেটর' }, icon: Sparkles },
    { id: 'coding-lab', label: { en: 'Coding Labs', bn: 'কোডিং ল্যাব' }, icon: Terminal },
    { id: 'dashboard', label: { en: 'My Dashboard', bn: 'ড্যাশবোর্ড' }, icon: Trophy },
    { id: 'settings', label: { en: 'Settings', bn: 'সেটিংস' }, icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setActiveTab('home');
                setSelectedLessonId(null);
              }}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Sigma className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-1">
                  Stat<span className="text-indigo-600 dark:text-indigo-400">Verse</span>
                </span>
                <span className="hidden sm:block text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                  {language === 'bn' ? 'পরিসংখ্যান ও ডেটা সায়েন্স' : 'Interactive Statistics'}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-3 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 text-xs w-64 lg:w-80 transition-all shadow-2xs"
          >
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <span className="flex-1 text-left truncate">
              {language === 'bn' ? 'অনুসন্ধান করুন... (স্বাভাবিক বণ্টন)' : 'Search lessons... (e.g. Bayes)'}
            </span>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 text-[10px] font-mono border border-slate-200 dark:border-slate-600 text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Right Toolbar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:border-indigo-500 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
              title="Toggle Bengali / English"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-500" />
              <span>{language === 'bn' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors shadow-2xs"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* StatBot Launch Button */}
            <button
              onClick={() => setIsStatBotOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs transition-all shadow-xs"
            >
              <Bot className="w-4 h-4" />
              <span>StatBot</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-2 animate-in slide-in-from-top-2 duration-150">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id !== 'curriculum') setSelectedLessonId(null);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label[language]}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Container with Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex gap-8 w-full">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-56 shrink-0 space-y-6">
          <nav className="space-y-1.5 sticky top-24">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id !== 'curriculum') setSelectedLessonId(null);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-left ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 shadow-2xs border border-indigo-100 dark:border-indigo-900/40'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  {item.label[language]}
                </button>
              );
            })}

            {/* Quick StatBot Card */}
            <div className="pt-6">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/50 space-y-2.5">
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-xs">
                  <Bot className="w-4 h-4" />
                  <span>StatBot AI</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {language === 'bn'
                    ? 'কোনো সূত্র না বুঝলে StatBot-এর কাছে বিস্তারিত জানতে পারেন।'
                    : 'Get step-by-step help with mathematical derivations and equations.'}
                </p>
                <button
                  onClick={() => setIsStatBotOpen(true)}
                  className="w-full py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-2xs"
                >
                  {language === 'bn' ? 'টিউটর খুলুন' : 'Open Tutor'}
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {activeTab === 'home' && (
            <HomeView
              language={language}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                setSelectedLessonId(null);
                if (tab === 'curriculum') setSelectedCategoryId(undefined);
              }}
              onNavigateCategory={(catId) => {
                setSelectedCategoryId(catId as CategoryId);
                setActiveTab('curriculum');
                setSelectedLessonId(null);
              }}
              onSelectLesson={handleSelectLesson}
              onOpenStatBot={() => setIsStatBotOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}

          {activeTab === 'curriculum' && (
            <AllTopicsView
              language={language}
              onSelectLesson={handleSelectLesson}
              completedLessons={progress.completedLessons}
              bookmarkedLessons={progress.bookmarkedLessons}
              selectedCategoryId={selectedCategoryId}
            />
          )}

          {activeTab === 'lesson-view' && selectedLesson && (
            <LessonView
              lesson={selectedLesson}
              language={language}
              isBookmarked={progress.bookmarkedLessons.includes(selectedLesson.id)}
              isCompleted={progress.completedLessons.includes(selectedLesson.id)}
              onToggleBookmark={handleToggleBookmark}
              onToggleComplete={handleToggleComplete}
              onNavigateLesson={handleSelectLesson}
              onOpenStatBot={() => setIsStatBotOpen(true)}
              previousLessonId={prevLessonId}
              nextLessonId={nextLessonId}
            />
          )}

          {activeTab === 'simulations' && <SimulationsHub language={language} />}

          {activeTab === 'coding-lab' && <CodingLab language={language} />}

          {activeTab === 'dashboard' && (
            <LearningDashboard
              progress={progress}
              language={language}
              onNavigateLesson={handleSelectLesson}
              onOpenStatBot={() => setIsStatBotOpen(true)}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsView
              language={language}
              onSetLanguage={setLanguage}
              theme={theme}
              onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              onResetProgress={handleResetProgress}
            />
          )}
        </main>
      </div>

      {/* Floating Action Button for StatBot (Mobile and All Views) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsStatBotOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-105"
        >
          <Bot className="w-5 h-5" />
          <span>StatBot</span>
        </button>
      </div>

      {/* Global Search Modal */}
      <SmartSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        language={language}
        onSelectLesson={handleSelectLesson}
      />

      {/* StatBot AI Tutor Modal */}
      <StatBotModal
        isOpen={isStatBotOpen}
        onClose={() => setIsStatBotOpen(false)}
        language={language}
        currentLessonId={selectedLessonId || undefined}
        onNavigateLesson={handleSelectLesson}
      />
    </div>
  );
}
