// ============================================================
// DASHBOARD — Main home page
// ============================================================

import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  BookOpen, Zap, Clock, Star, ChevronRight, BookMarked, Bot,
  Headphones, Mic, Trophy, ArrowRight,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { ProgressRing, ProgressBar, StatCard, LevelBadge } from '../components/shared';
import { CURRICULUM, LEVEL_INFO } from '../data/curriculum';
import { getDueCount } from '../lib/srs';

const DAILY_PHRASE = {
  german: 'Übung macht den Meister.',
  english: 'Practice makes perfect.',
  hinglish: 'Abhyaas hi safalta ki chaabi hai.',
};

const QUICK_ACTIONS = [
  { to: '/daily-lesson', icon: BookOpen, label: 'Continue Lesson', sublabel: 'Start today\'s lesson', color: 'bg-gradient-brand text-white shadow-brand' },
  { to: '/vocabulary', icon: BookMarked, label: 'Flashcards', sublabel: 'Review vocabulary', color: 'bg-gradient-gold text-white shadow-md' },
  { to: '/tutor', icon: Bot, label: 'Ask Tutor', sublabel: 'Get instant help', color: 'bg-gradient-to-br from-violet-600 to-purple-700 text-white shadow-lg' },
  { to: '/exam', icon: Trophy, label: 'Exam Prep', sublabel: 'Practice tests', color: 'bg-gradient-to-br from-rose-600 to-pink-700 text-white shadow-lg' },
];

export function Dashboard() {
  const { profile, progress, vocabulary, lessonProgress } = useAppStore();

  const levelData = CURRICULUM[progress.currentLevel] ?? [];
  const completedLessons = Object.keys(lessonProgress).filter(k => lessonProgress[k]?.completed).length;
  const currentLevelLessons = levelData.flatMap(module => module.lessons);
  const totalLessons = currentLevelLessons.length;
  const completedCurrentLevel = currentLevelLessons.filter(lesson => lessonProgress[lesson.id]?.completed).length;
  const levelPercent = totalLessons > 0 ? Math.round((completedCurrentLevel / totalLessons) * 100) : 0;

  const dueVocab = useMemo(() => getDueCount(vocabulary), [vocabulary]);
  const learnedVocab = vocabulary.filter(v => v.familiarity !== 'new').length;
  const masteredVocab = vocabulary.filter(v => v.familiarity === 'mastered').length;

  const currentModule = levelData[0];
  const currentLesson = currentModule?.lessons[0];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-6 shadow-brand-lg">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-brand-200 text-sm font-medium mb-1">Welcome back,</p>
            <h1 className="font-display text-2xl font-bold text-white mb-3">
              {profile.name}! 👋
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <span className="text-lg streak-flame">🔥</span>
                <span className="text-white font-bold text-sm">{progress.streak} day streak</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                <Star className="h-4 w-4 text-yellow-300" />
                <span className="text-white font-bold text-sm">{progress.xp.toLocaleString()} XP</span>
              </div>
            </div>
          </div>
          <ProgressRing percent={levelPercent} size={84} strokeWidth={7} color="#ffffff">
            <div className="text-center">
              <span className="text-white font-bold text-lg">{levelPercent}%</span>
            </div>
          </ProgressRing>
        </div>

        <div className="relative mt-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
          <p className="text-brand-100 text-[10px] font-medium mb-1">📖 German Wisdom of the Day</p>
          <p className="text-white font-semibold text-sm italic">„{DAILY_PHRASE.german}"</p>
          <p className="text-brand-200 text-xs mt-0.5">{DAILY_PHRASE.english} • {DAILY_PHRASE.hinglish}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUICK_ACTIONS.map(({ to, icon: Icon, label, sublabel, color }) => (
            <Link
              key={to}
              to={to}
              className={clsx(
                'rounded-2xl p-4 flex flex-col gap-2 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.97]',
                color,
              )}
            >
              <Icon className="h-5 w-5" />
              <div>
                <p className="font-bold text-sm">{label}</p>
                <p className="text-xs opacity-80">{sublabel}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Today's Study Plan */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-semibold text-slate-800 dark:text-white text-sm">Today's Study Plan</h2>
              <p className="text-slate-500 text-xs">{profile.dailyStudyMinutes} minutes • Aaj ka plan</p>
            </div>
          </div>
          <Link to="/daily-lesson" className="btn-outline btn-sm">Start →</Link>
        </div>

        <div className="space-y-2.5">
          {[
            { icon: BookMarked, label: 'Vocabulary Review', subLabel: `${dueVocab} cards due`, minutes: 10, color: 'text-gold-600 bg-gold-50 dark:bg-yellow-950/30', to: '/vocabulary' },
            { icon: BookOpen, label: 'Grammar & Lesson', subLabel: 'A1 · Articles (der/die/das)', minutes: 15, color: 'text-brand-600 bg-brand-50 dark:bg-brand-950/30', to: '/daily-lesson' },
            { icon: Headphones, label: 'Listening Practice', subLabel: 'Audio comprehension', minutes: 10, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/30', to: '/listening' },
            { icon: Mic, label: 'Speaking Studio', subLabel: 'Pronunciation & speaking', minutes: 10, color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/30', to: '/speaking' },
            { icon: BookOpen, label: 'Reading Practice', subLabel: 'Graded text', minutes: 10, color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/30', to: '/reading' },
          ].map(({ icon: Icon, label, subLabel, minutes, color, to }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
            >
              <div className={clsx('p-2 rounded-xl flex-shrink-0', color)}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 dark:text-white truncate">{label}</p>
                <p className="text-xs text-slate-500 truncate">{subLabel}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-slate-400">{minutes}m</span>
                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatCard
          icon={<BookMarked className="h-5 w-5" />}
          label="Words Learned"
          value={learnedVocab}
          subtitle={`${masteredVocab} mastered`}
          color="gold"
        />
        <StatCard
          icon={<BookOpen className="h-5 w-5" />}
          label="Lessons Done"
          value={completedLessons}
          subtitle={`of ${totalLessons} total`}
          color="brand"
        />
        <StatCard
          icon={<Zap className="h-5 w-5" />}
          label="Review Due"
          value={dueVocab}
          subtitle="words to review"
          color={dueVocab > 5 ? 'danger' : 'success'}
        />
        <StatCard
          icon={<Clock className="h-5 w-5" />}
          label="Study Time"
          value={`${Math.round(progress.totalStudyMinutes / 60)}h`}
          subtitle="total hours"
          color="teal"
        />
      </div>

      {/* Current Learning Path */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-800 dark:text-white">Learning Path Progress</h2>
          <Link to="/learning-path" className="text-brand-600 dark:text-brand-400 text-xs hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const).map(level => {
            const levelProg = progress.levels[level];
            const info = LEVEL_INFO[level];
            const isCurrent = level === progress.currentLevel;
            const isLocked = !levelProg?.unlocked;

            return (
              <Link
                key={level}
                to={`/learning-path?level=${level}`}
                className={clsx(
                  'flex-shrink-0 w-32 rounded-2xl p-3 border-2 transition-all text-center',
                  isCurrent
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                    : isLocked
                    ? 'border-slate-200 dark:border-slate-800 opacity-50 cursor-default'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300',
                )}
              >
                <div className="text-2xl mb-1">{info.emoji}</div>
                <LevelBadge level={level} size="xs" />
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">{info.description}</p>
                <ProgressBar
                  value={levelProg?.overallPercent ?? 0}
                  className="mt-2"
                  color="brand"
                  animated={false}
                />
                <p className="text-[10px] font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {levelProg?.overallPercent ?? 0}%
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Current Lesson Preview */}
      {currentLesson && (
        <div className="card p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-slate-800 dark:text-white">Continue Learning</h2>
            <LevelBadge level={progress.currentLevel} />
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400 flex-shrink-0">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-800 dark:text-white">{currentLesson.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{currentLesson.titleHinglish}</p>
              <p className="text-xs text-slate-400 mt-1">📖 {currentLesson.objective}</p>
              <div className="flex items-center gap-3 mt-3">
                <Link to={`/daily-lesson/${currentLesson.id}`} className="btn-brand btn-sm">
                  Start Lesson →
                </Link>
                <span className="text-xs text-slate-400">~{currentLesson.estimatedMinutes} min</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Preview */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-800 dark:text-white">Achievements</h2>
          <span className="chip-brand">{progress.badgesEarned.length} earned</span>
        </div>
        <div className="flex gap-3 flex-wrap">
          {[
            { emoji: '🌱', name: 'First Step', id: 'first-step', desc: 'Complete first lesson' },
            { emoji: '📚', name: 'Scholar', id: 'scholar', desc: 'Learn 50 words' },
            { emoji: '🔥', name: 'On Fire', id: 'on-fire', desc: '7-day streak' },
            { emoji: '⭐', name: '1000 XP', id: 'xp-1000', desc: 'Earn 1000 XP' },
            { emoji: '🎯', name: 'Perfectionist', id: 'perfectionist', desc: '100% on a quiz' },
            { emoji: '🏆', name: 'A1 Graduate', id: 'a1-graduate', desc: 'Complete A1' },
          ].map(({ emoji, name, id, desc }) => {
            const earned = progress.badgesEarned.includes(id);
            return (
            <div
              key={name}
              title={desc}
              className={clsx(
                'flex flex-col items-center gap-1 p-3 rounded-2xl border-2 w-20 text-center transition-all',
                earned
                  ? 'border-gold-400 bg-gold-50 dark:bg-yellow-950/30'
                  : 'border-slate-200 dark:border-slate-700 opacity-40 grayscale',
              )}
            >
              <span className="text-2xl">{emoji}</span>
              <p className="text-[10px] font-bold text-slate-800 dark:text-white leading-tight">{name}</p>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
