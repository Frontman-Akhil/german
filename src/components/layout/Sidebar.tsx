// ============================================================
// SIDEBAR NAVIGATION COMPONENT
// ============================================================

import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  LayoutDashboard, Route, BookOpen, BookMarked, FlaskConical,
  Mic, Headphones, FileText, PenLine, Trophy, Bot, RefreshCw,
  BarChart2, Settings, X, Zap, GraduationCap, ChevronRight,
} from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { StreakBadge, XPBadge, ProgressBar, LevelBadge } from '../shared';

const NAV_ITEMS = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/learning-path', icon: Route, label: 'Learning Path' },
  { path: '/daily-lesson', icon: BookOpen, label: 'Daily Lesson' },
  { path: '/vocabulary', icon: BookMarked, label: 'Vocabulary' },
  { path: '/grammar', icon: FlaskConical, label: 'Grammar Lab' },
  { path: '/speaking', icon: Mic, label: 'Speaking Studio' },
  { path: '/listening', icon: Headphones, label: 'Listening Lab' },
  { path: '/reading', icon: FileText, label: 'Reading Practice' },
  { path: '/writing', icon: PenLine, label: 'Writing Coach' },
  { path: '/exam', icon: Trophy, label: 'Exam Prep' },
  { path: '/tutor', icon: Bot, label: 'AI Tutor' },
  { path: '/revision', icon: RefreshCw, label: 'Revision Centre' },
  { path: '/analytics', icon: BarChart2, label: 'Progress & Analytics' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

function daysUntilExam(examDate: string): number {
  return Math.ceil((new Date(examDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

export function Sidebar({ onClose }: { onClose?: () => void }) {
  const { profile, progress } = useAppStore();
  const location = useLocation();

  const levelProgress = progress.levels[progress.currentLevel];
  const levelPercent = levelProgress?.overallPercent ?? 0;

  return (
    <aside className="sidebar-panel flex flex-col h-full bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center text-white text-base font-bold shadow-brand">
            D
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-display font-bold text-slate-900 dark:text-white text-sm leading-none">DeutschMeister</h1>
              <span className="pro-badge">PRO</span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">German Language Academy</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="btn-ghost btn-icon lg:hidden" aria-label="Close sidebar">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* User info */}
      <div className="px-4 py-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-800 dark:text-slate-100 text-sm truncate">{profile.name}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <LevelBadge level={progress.currentLevel} size="xs" />
              <span className="text-[10px] text-slate-500 dark:text-slate-400">→ {profile.targetLevel}</span>
            </div>
          </div>
        </div>
        {/* Level progress */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500 dark:text-slate-400">{progress.currentLevel} Progress</span>
            <span className="font-medium text-brand-600 dark:text-brand-400">{levelPercent}%</span>
          </div>
          <ProgressBar value={levelPercent} color="brand" />
        </div>
        {/* Stats */}
        <div className="flex items-center gap-2 mt-3">
          <StreakBadge streak={progress.streak} />
          <XPBadge xp={progress.xp} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide py-2 px-2" aria-label="Main navigation">
        {NAV_ITEMS.map(({ path, icon: Icon, label }) => {
          const isActive = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
          return (
            <NavLink
              key={path}
              to={path}
              onClick={onClose}
              className={clsx('nav-item mb-0.5', isActive && 'nav-item-active')}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight className="h-3 w-3 opacity-50" />}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Exam: {profile.targetExam} {profile.targetExamLevel}</span>
        </div>
        {profile.examDate && (
          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600 mt-1">
            <Zap className="h-3.5 w-3.5" />
            <span>
              {daysUntilExam(profile.examDate)} days to exam
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
