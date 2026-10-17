import React from 'react';
import { LESSONS } from '../../data/lessons.ts';
import { CATEGORIES } from '../../data/categories.ts';
import { UserProgress, Language } from '../../types/index.ts';
import {
  Trophy,
  Bookmark,
  CheckCircle2,
  Clock,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface Props {
  progress: UserProgress;
  language: Language;
  onNavigateLesson: (id: string) => void;
  onOpenStatBot: () => void;
}

export const LearningDashboard: React.FC<Props> = ({
  progress,
  language,
  onNavigateLesson,
  onOpenStatBot,
}) => {
  const totalLessons = LESSONS.length;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);

  const bookmarkedLessons = LESSONS.filter((l) => progress.bookmarkedLessons.includes(l.id));
  const recentLessons = LESSONS.filter((l) => progress.recentLessons.includes(l.id));

  const t = {
    title: language === 'bn' ? 'ব্যক্তিগত লার্নিং ড্যাশবোর্ড' : 'Personal Learning Dashboard',
    subtitle:
      language === 'bn'
        ? 'আপনার অধ্যয়নের অগ্রগতি, সংরক্ষিত বুকমার্ক ও কুইজ ফলাফল এক নজরে দেখুন।'
        : 'Track your curriculum milestones, bookmarked topics, and mastery progress.',
    overallProgress: language === 'bn' ? 'সামগ্রিক অগ্রগতি' : 'Overall Progress',
    completed: language === 'bn' ? 'সম্পন্ন পাঠ' : 'Completed Lessons',
    bookmarks: language === 'bn' ? 'সংরক্ষিত বুকমার্ক' : 'Saved Bookmarks',
    recent: language === 'bn' ? 'সম্প্রতি অধ্যয়নকৃত' : 'Recently Studied',
    noBookmarks: language === 'bn' ? 'কোনো পাঠ এখনও বুকমার্ক করা হয়নি।' : 'No lessons bookmarked yet.',
    noRecent: language === 'bn' ? 'কোনো সাম্প্রতিক পাঠ নেই।' : 'No recent lessons yet.',
    startLearning: language === 'bn' ? 'পাঠ্যক্রম শুরু করুন' : 'Explore Curriculum',
    freeNoticeTitle: language === 'bn' ? 'বিনামূল্যে ব্যবহার ও স্বচ্ছতা নীতি' : 'Zero-Budget Transparency & Free Usage',
    freeNoticeDesc:
      language === 'bn'
        ? 'StatVerse-এর সকল মৌলিক পাঠ, ইন্টারেক্টিভ সিমুলেটর, ক্যালকুলেটর, KaTeX সমীকরণ এবং অফলাইন পাঠ্যক্রম সার্চ সম্পূর্ণ বিনামূল্যে কার্যকর। কোনো পেমেন্ট বা সাইন-আপের বাধ্যবাধকতা নেই। লাইভ জেনারেটিভ এআই সহায়তার জন্য ইচ্ছামতো ফ্রি জেমিনাই কী যুক্ত করতে পারেন।'
        : 'All 20+ comprehensive lessons, interactive simulators, KaTeX math rendering, and search run 100% free with zero required paid subscriptions or logins. Live AI tutoring through StatBot uses the server Gemini API.',
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Trophy className="w-7 h-7 text-amber-500" />
          {t.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </div>

      {/* Progress Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-white/80">{t.overallProgress}</div>
            <div className="text-4xl sm:text-5xl font-black mt-1">
              {progressPercent}%
            </div>
            <div className="text-xs text-white/80 mt-1">
              {completedCount} of {totalLessons} core lessons completed
            </div>
          </div>

          <button
            onClick={() => onNavigateLesson('all-topics')}
            className="px-5 py-2.5 bg-white text-indigo-700 hover:bg-slate-100 font-bold text-xs rounded-xl transition-colors shadow-xs"
          >
            {t.startLearning}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-400 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Grid: Bookmarks & Recent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bookmarks */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-500" />
            {t.bookmarks} ({bookmarkedLessons.length})
          </h3>

          {bookmarkedLessons.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">{t.noBookmarks}</p>
          ) : (
            <div className="space-y-2">
              {bookmarkedLessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => onNavigateLesson(l.id)}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {l.title[language]}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">{l.level}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Recently Viewed */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            {t.recent}
          </h3>

          {recentLessons.length === 0 ? (
            <p className="text-xs text-slate-400 py-6 text-center">{t.noRecent}</p>
          ) : (
            <div className="space-y-2">
              {recentLessons.map((l) => (
                <button
                  key={l.id}
                  onClick={() => onNavigateLesson(l.id)}
                  className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {l.title[language]}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">{l.level}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Free & Open Source Notice Card */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{t.freeNoticeTitle}</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.freeNoticeDesc}
          </p>
        </div>
      </div>
    </div>
  );
};
