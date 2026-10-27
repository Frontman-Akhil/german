// ============================================================
// MAIN LAYOUT — SHELL WITH SIDEBAR + MOBILE NAV
// ============================================================

import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import { Menu, LayoutDashboard, BookOpen, Bot, BookMarked, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { XPToast } from '../shared';
import { useAppStore } from '../../store/useAppStore';

const MOBILE_NAV = [
  { path: '/', icon: LayoutDashboard, label: 'Home' },
  { path: '/daily-lesson', icon: BookOpen, label: 'Lesson' },
  { path: '/vocabulary', icon: BookMarked, label: 'Vocab' },
  { path: '/tutor', icon: Bot, label: 'Tutor' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export function AppLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { xpToast } = useAppStore();

  return (
    <div className="app-shell min-h-dvh bg-slate-50 dark:bg-slate-950 flex overflow-x-clip">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-[280px] lg:flex-shrink-0 lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:p-3">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative w-72 flex flex-col h-full">
            <Sidebar onClose={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-[280px] min-w-0">
        {/* Mobile Header */}
        <header className="mobile-header lg:hidden sticky top-0 z-20 glass safe-top border-b border-slate-200 dark:border-slate-700/50 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="btn-ghost btn-icon"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-brand flex items-center justify-center text-white text-xs font-bold">D</div>
            <span className="font-display font-bold text-slate-900 dark:text-white text-sm">DeutschMeister</span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 pb-28 lg:pb-8">
            <Outlet />
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <nav className="mobile-nav lg:hidden fixed bottom-0 inset-x-0 z-20 glass border-t border-slate-200 dark:border-slate-700/50 safe-bottom" aria-label="Mobile navigation">
          <div className="flex items-center justify-around px-2 py-2">
            {MOBILE_NAV.map(({ path, icon: Icon, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  clsx(
                    'flex flex-1 min-w-0 flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl text-[10px] font-medium transition-all',
                    isActive
                      ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/40'
                      : 'text-slate-500 dark:text-slate-400',
                  )
                }
                aria-label={label}
              >
                {({ isActive }) => (
                  <>
                    <Icon className={clsx('h-5 w-5', isActive && 'text-brand-600 dark:text-brand-400')} />
                    {label}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* Global XP Toast */}
      <XPToast amount={xpToast.amount} visible={xpToast.show} />
    </div>
  );
}
