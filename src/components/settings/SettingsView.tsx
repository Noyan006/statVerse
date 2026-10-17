import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../../types/index.ts';
import {
  Settings,
  Moon,
  Sun,
  Globe,
  Trash2,
  Key,
  ShieldCheck,
  CheckCircle,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

interface Props {
  language: Language;
  onSetLanguage: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onResetProgress: () => void;
}

export const SettingsView: React.FC<Props> = ({
  language,
  onSetLanguage,
  theme,
  onToggleTheme,
  onResetProgress,
}) => {
  const [resetConfirm, setResetConfirm] = useState<boolean>(false);
  const [aiStatus, setAiStatus] = useState<{ configured: boolean; checking: boolean }>({
    configured: false,
    checking: true,
  });

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        setAiStatus({ configured: !!data.aiConfigured, checking: false });
      })
      .catch(() => {
        setAiStatus({ configured: false, checking: false });
      });
  }, []);

  const handleReset = () => {
    if (resetConfirm) {
      onResetProgress();
      setResetConfirm(false);
    } else {
      setResetConfirm(true);
      setTimeout(() => setResetConfirm(false), 4000);
    }
  };

  const t = {
    title: language === 'bn' ? 'সেটিংস ও প্ল্যাটফর্ম তথ্য' : 'Settings & About StatVerse',
    subtitle:
      language === 'bn'
        ? 'ভাষা নির্বাচন, থিম পরিবর্তন, ডেটা রিসেট এবং ফ্রি ব্যবহারের স্বচ্ছ নীতিমালা।'
        : 'Language preferences, appearance theme, data resets, and zero-budget transparency roadmap.',
    appearance: language === 'bn' ? 'ডিসপ্লে ও থিম' : 'Appearance & Theme',
    themeDesc: language === 'bn' ? 'ডার্ক মোড ও লাইট মোডের মধ্যে পরিবর্তন করুন।' : 'Switch between Dark and Light mode theme.',
    languageSec: language === 'bn' ? 'ভাষা নির্বাচন (Language)' : 'Learning Language',
    languageDesc:
      language === 'bn'
        ? 'বাংলা অথবা ইংরেজিতে সম্পূর্ণ পাঠ্যক্রম, সিমুলেটর ও এআই ব্যাখ্যা উপভোগ করুন।'
        : 'Toggle between natural English and academic Bengali throughout lessons and tools.',
    resetSec: language === 'bn' ? 'অগ্রগতি ও ডেটা রিসেট' : 'Reset Learning Progress',
    resetDesc:
      language === 'bn'
        ? 'সম্পন্ন করা পাঠ, সংরক্ষিত বুকমার্ক এবং কুইজের স্কোর মুছে ফেলুন।'
        : 'Clear all marked completed lessons, saved bookmarks, and recorded quiz scores.',
    resetBtn: language === 'bn' ? 'সকল অগ্রগতি মুছে ফেলুন' : 'Reset All Progress',
    resetSure: language === 'bn' ? 'আপনি কি নিশ্চিত? আবার ক্লিক করুন!' : 'Are you sure? Click again to confirm!',
    aiConfig: language === 'bn' ? 'এআই স্ট্যাটবট কনফিগারেশন' : 'StatBot AI Configuration',
    aiDesc:
      language === 'bn'
        ? 'StatVerse সার্ভার-সাইড প্রক্সির মাধ্যমে Google Gemini 3.8 Flash মডেল ব্যবহার করে।'
        : 'StatBot connects securely through the server Express proxy to Google Gemini 3.8 Flash.',
    zeroBudgetTitle: language === 'bn' ? 'শূন্য বাজেট ও ফ্রি ব্যবহারের অঙ্গীকার' : 'Zero-Budget Transparency & Deployment Guide',
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 flex items-center gap-3">
          <Settings className="w-7 h-7 text-indigo-500" />
          {t.title}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{t.subtitle}</p>
      </div>

      <div className="space-y-6">
        {/* Language Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-base text-slate-900 dark:text-slate-100">
            <Globe className="w-5 h-5 text-indigo-500" />
            {t.languageSec}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.languageDesc}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => onSetLanguage('bn')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm border transition-all flex items-center justify-center gap-2 ${
                language === 'bn'
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-xs'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              বাংলা (Bengali)
            </button>
            <button
              onClick={() => onSetLanguage('en')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm border transition-all flex items-center justify-center gap-2 ${
                language === 'en'
                  ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 shadow-xs'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Theme Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-base text-slate-900 dark:text-slate-100">
            {theme === 'dark' ? <Moon className="w-5 h-5 text-indigo-400" /> : <Sun className="w-5 h-5 text-amber-500" />}
            {t.appearance}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {t.themeDesc}
          </p>

          <button
            onClick={onToggleTheme}
            className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 inline-flex items-center gap-2 hover:bg-slate-100 transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-amber-500" />
                Switch to Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-500" />
                Switch to Dark Mode
              </>
            )}
          </button>
        </div>

        {/* AI & Gemini Status Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-4">
          <div className="flex items-center gap-2.5 font-bold text-base text-slate-900 dark:text-slate-100">
            <Key className="w-5 h-5 text-purple-500" />
            {t.aiConfig}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.aiDesc}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className={`w-2.5 h-2.5 rounded-full ${aiStatus.configured ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span className="text-slate-700 dark:text-slate-300">
                {aiStatus.configured ? 'Gemini 3.8 Flash Connected (Live Generative AI active)' : 'Offline Curriculum AI Fallback (100% Functional)'}
              </span>
            </div>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              {aiStatus.configured ? 'Live API' : 'Self-Contained'}
            </span>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed space-y-1">
            <p>
              💡 <strong>Zero-Key Guarantee:</strong> Even without an API key, all 20 lessons, interactive formulas, simulations, quizzes, search, and StatBot's local curriculum guidance are 100% operational.
            </p>
            <p>
              To attach live unlimited custom generative AI, configure <code className="font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">GEMINI_API_KEY</code> in the <strong>Settings &gt; Secrets</strong> panel.
            </p>
          </div>
        </div>

        {/* Free Usage & Hosting Roadmap (Section 15 from user request) */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700 space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-slate-100">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            {t.zeroBudgetTitle}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
            <p>
              • <strong>100% Free Core Learning:</strong> No account required, no paywalls. All student lessons, calculations, and simulations run locally in the client browser with zero infrastructure cost.
            </p>
            <p>
              • <strong>Free Hosting Options:</strong> The applet can be built using <code className="font-mono bg-slate-200 dark:bg-slate-700 px-1 rounded">npm run build</code> and hosted completely free on Vercel, Netlify, GitHub Pages, or Cloud Run free tier.
            </p>
            <p>
              • <strong>Custom Domain:</strong> Once deployed to free providers like Vercel or Cloudflare Pages, you can connect your own custom domain (e.g. <code className="font-mono bg-slate-200 dark:bg-slate-700 px-1 rounded">statverse.org</code>) by adding CNAME DNS records at no hosting surcharge.
            </p>
          </div>
        </div>

        {/* Progress Reset */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 font-bold text-sm text-rose-600">
            <Trash2 className="w-4 h-4" />
            {t.resetSec}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {t.resetDesc}
          </p>
          <button
            onClick={handleReset}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              resetConfirm
                ? 'bg-rose-600 text-white'
                : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900 hover:bg-rose-100'
            }`}
          >
            {resetConfirm ? t.resetSure : t.resetBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
