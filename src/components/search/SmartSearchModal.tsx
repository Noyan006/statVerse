import React, { useState, useMemo, useEffect, useRef } from 'react';
import { LESSONS } from '../../data/lessons.ts';
import { CATEGORIES } from '../../data/categories.ts';
import { Language, Lesson } from '../../types/index.ts';
import { Search, X, BookOpen, ChevronRight, Tag, History } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectLesson: (lessonId: string) => void;
}

export const SmartSearchModal: React.FC<Props> = ({ isOpen, onClose, language, onSelectLesson }) => {
  const [query, setQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('statverse_recent_searches');
      return saved ? JSON.parse(saved) : ['Normal Distribution', 'Bayes Theorem', 'Mean Median Mode'];
    } catch {
      return [];
    }
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const saveRecentSearch = (term: string) => {
    if (!term.trim()) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s.toLowerCase() !== term.toLowerCase());
      const updated = [term, ...filtered].slice(0, 6);
      localStorage.setItem('statverse_recent_searches', JSON.stringify(updated));
      return updated;
    });
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LESSONS.filter((lesson) => {
      if (selectedCategory !== 'all' && lesson.categoryId !== selectedCategory) {
        return false;
      }
      if (selectedLevel !== 'all' && lesson.level !== selectedLevel) {
        return false;
      }

      if (!q) return true;

      // Match English title, Bengali title, definitions, short descriptions, and key terms
      const titleEn = lesson.title.en.toLowerCase();
      const titleBn = lesson.title.bn.toLowerCase();
      const descEn = lesson.shortDescription.en.toLowerCase();
      const descBn = lesson.shortDescription.bn.toLowerCase();
      const defEn = lesson.definition.en.toLowerCase();
      const defBn = lesson.definition.bn.toLowerCase();

      const matchesTerm = lesson.keyTerms.some(
        (kt) =>
          kt.term.en.toLowerCase().includes(q) ||
          kt.term.bn.toLowerCase().includes(q) ||
          kt.definition.en.toLowerCase().includes(q) ||
          kt.definition.bn.toLowerCase().includes(q)
      );

      return (
        titleEn.includes(q) ||
        titleBn.includes(q) ||
        descEn.includes(q) ||
        descBn.includes(q) ||
        defEn.includes(q) ||
        defBn.includes(q) ||
        matchesTerm
      );
    });
  }, [query, selectedCategory, selectedLevel]);

  const handleSelect = (lessonId: string, title: string) => {
    saveRecentSearch(title);
    onSelectLesson(lessonId);
    onClose();
  };

  if (!isOpen) return null;

  const t = {
    searchPlaceholder:
      language === 'bn'
        ? 'বিষয় খুঁজুন... যেমন: স্বাভাবিক বণ্টন, বেইজের উপপাদ্য, ভেদাঙ্ক, p-value...'
        : 'Search lessons... e.g., Normal Distribution, Bayes Theorem, Variance, p-value...',
    allCategories: language === 'bn' ? 'সকল বিভাগ' : 'All Categories',
    allLevels: language === 'bn' ? 'সকল স্তর' : 'All Levels',
    recent: language === 'bn' ? 'সাম্প্রতিক অনুসন্ধান:' : 'Recent Searches:',
    resultsFound: (count: number) =>
      language === 'bn' ? `${count}টি অধ্যায় পাওয়া গেছে` : `${count} matching lessons found`,
    noResults:
      language === 'bn'
        ? 'কোনো ফলাফল পাওয়া যায়নি। সম্পর্কিত বিষয় বা অন্য শব্দ লিখে চেষ্টা করুন।'
        : 'No matching lessons found. Try alternate terms or synonyms.',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full text-base sm:text-lg bg-transparent text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold px-2.5"
          >
            ESC
          </button>
        </div>

        {/* Filter Bar */}
        <div className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800/40 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium focus:outline-none"
            >
              <option value="all">{t.allCategories}</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title[language]}
                </option>
              ))}
            </select>

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium focus:outline-none"
            >
              <option value="all">{t.allLevels}</option>
              <option value="beginner">Beginner (প্রাথমিক)</option>
              <option value="intermediate">Intermediate (মধ্যবর্তী)</option>
              <option value="advanced">Advanced (উন্নত)</option>
            </select>
          </div>

          <div className="text-slate-500 font-medium">{t.resultsFound(results.length)}</div>
        </div>

        {/* Recent Searches (when query empty) */}
        {!query && recentSearches.length > 0 && (
          <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <History className="w-3.5 h-3.5" />
              {t.recent}
            </span>
            {recentSearches.map((term, i) => (
              <button
                key={i}
                onClick={() => setQuery(term)}
                className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 text-xs transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div className="overflow-y-auto p-3 sm:p-4 space-y-2 flex-1">
          {results.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              <p>{t.noResults}</p>
            </div>
          ) : (
            results.map((lesson) => {
              const cat = CATEGORIES.find((c) => c.id === lesson.categoryId);
              return (
                <button
                  key={lesson.id}
                  onClick={() => handleSelect(lesson.id, lesson.title[language])}
                  className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all group flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/40">
                        {cat?.title[language] || lesson.categoryId}
                      </span>
                      <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                        {lesson.level}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-sm sm:text-base transition-colors">
                      {lesson.title[language]}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {lesson.shortDescription[language]}
                    </p>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all mt-3 shrink-0" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
