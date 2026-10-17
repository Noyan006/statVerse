import React, { useState, useRef, useEffect, useMemo } from 'react';
import { LESSONS } from '../../data/lessons.ts';
import { Language } from '../../types/index.ts';
import { FormattedContent } from '../math/MathView.tsx';
import {
  Bot,
  Send,
  X,
  Sparkles,
  Copy,
  Check,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Lightbulb,
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currentLessonId?: string;
  onNavigateLesson: (lessonId: string) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  recommendedLessons?: Array<{ id: string; title: string }>;
  source?: 'gemini' | 'local_curriculum';
}

export const StatBotModal: React.FC<Props> = ({
  isOpen,
  onClose,
  language,
  currentLessonId,
  onNavigateLesson,
}) => {
  const currentLesson = useMemoLesson(currentLessonId);

  const initialGreeting: ChatMessage = {
    id: 'msg-0',
    sender: 'bot',
    text:
      language === 'bn'
        ? `স্বাগতম! আমি **StatBot** — আপনার এআই পরিসংখ্যান ও ডেটা সায়েন্স শিক্ষক।
পরিসংখ্যানের যেকোনো সূত্র, গাণিতিক সমস্যা, পাইথন বা আর কোড, কিংবা তত্ত্বীয় প্রশ্ন করুন। আমি আপনাকে ধাপে ধাপে সমাধান করে দেব!`
        : `Welcome! I am **StatBot**, your AI Statistics & Data Science Tutor.
Ask me about mathematical formulas, statistical tests, Python/R code, or real-life data science problems. I'll guide you step by step!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  // Context-aware suggested questions
  const suggestedQuestions = useMemo(() => {
    if (language === 'bn') {
      return [
        'গড় এবং মধ্যমার মূল পার্থক্য কী?',
        'কেন্দ্রীয় সীমাস্থ উপপাদ্য (CLT) সহজ উদাহরণ দিয়ে বোঝাও।',
        'বেইজের উপপাদ্য কোন পরিস্থিতিতে ব্যবহৃত হয়?',
        'p-value এবং তাৎপর্য মাত্রা (α) কীভাবে নির্ধারণ করা হয়?',
      ];
    }
    return [
      'What is the difference between Mean and Median?',
      'Explain the Central Limit Theorem with an analogy.',
      'How does Bayes Theorem work in medical testing?',
      'How do I interpret a p-value in hypothesis testing?',
    ];
  }, [language]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Search curriculum for relevant lessons
    const lowerQuery = text.toLowerCase();
    const matchedLessons = LESSONS.filter((l) => {
      const titleEn = l.title.en.toLowerCase();
      const titleBn = l.title.bn.toLowerCase();
      return (
        lowerQuery.includes(l.id.replace(/-/g, ' ')) ||
        lowerQuery.includes(titleEn) ||
        lowerQuery.includes(titleBn) ||
        l.keyTerms.some((k) => lowerQuery.includes(k.term.en.toLowerCase()) || lowerQuery.includes(k.term.bn.toLowerCase()))
      );
    }).slice(0, 3);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.slice(-5),
          currentLessonTitle: currentLesson ? currentLesson.title[language] : undefined,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        source: data.source,
        recommendedLessons: matchedLessons.map((m) => ({
          id: m.id,
          title: m.title[language],
        })),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback
      const fallbackMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'bot',
        text:
          language === 'bn'
            ? 'আমি দুঃখিত, এই মুহূর্তে সার্ভারে সংযোগ স্থাপন করা সম্ভব হয়নি। দয়া করে আবার চেষ্টা করুন অথবা পাঠ্যক্রমের লেসনগুলো সরাসরি অধ্যয়ন করুন।'
            : 'Sorry, could not connect to the AI tutor server right now. Please explore our direct interactive lessons below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  const t = {
    title: language === 'bn' ? 'StatBot — আপনার এআই টিউটর' : 'StatBot — AI Statistics Tutor',
    subtitle:
      language === 'bn'
        ? 'পরিসংখ্যান ও ডেটা সায়েন্সের যেকোনো প্রশ্ন জিজ্ঞাসা করুন'
        : 'Ask any statistical, mathematical, or coding question',
    placeholder:
      language === 'bn'
        ? 'আপনার প্রশ্ন লিখুন (যেমন: স্বাভাবিক বণ্টন কী?)...'
        : 'Ask StatBot a question (e.g. What is Central Limit Theorem?)...',
    send: language === 'bn' ? 'পাঠান' : 'Send',
    relatedLessons: language === 'bn' ? 'সম্পর্কিত পাঠসমূহ:' : 'Recommended Lessons from StatVerse:',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-2xl h-[85vh] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:px-6 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white flex justify-between items-center shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg">{t.title}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 uppercase tracking-wider">
                  AI
                </span>
              </div>
              <p className="text-xs text-white/80">{t.subtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-xs border border-slate-200/80 dark:border-slate-700/80'
                }`}
              >
                <FormattedContent text={msg.text} />

                {/* Recommendations */}
                {msg.recommendedLessons && msg.recommendedLessons.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 space-y-1.5">
                    <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {t.relatedLessons}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.recommendedLessons.map((rec) => (
                        <button
                          key={rec.id}
                          onClick={() => {
                            onNavigateLesson(rec.id);
                            onClose();
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-200 text-xs font-semibold hover:bg-indigo-50 border border-slate-200 dark:border-slate-600 transition-colors"
                        >
                          {rec.title}
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
                {msg.sender === 'bot' && (
                  <button
                    onClick={() => handleCopy(msg.id, msg.text)}
                    className="text-[10px] text-slate-400 hover:text-indigo-500 inline-flex items-center gap-1"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3 h-3 text-emerald-500" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl w-fit text-xs text-slate-500">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-spin" />
              <span>StatBot is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Pill Container (if conversation short) */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 flex flex-wrap gap-1.5">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="text-left text-[11px] px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition-colors shadow-2xs"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t.placeholder}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className={`p-2.5 rounded-xl text-white font-bold transition-all ${
                inputText.trim() && !isLoading
                  ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer shadow-xs'
                  : 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-50'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

function useMemoLesson(lessonId?: string) {
  return useMemo(() => {
    if (!lessonId) return undefined;
    return LESSONS.find((l) => l.id === lessonId);
  }, [lessonId]);
}
