// ============================================================
// SHARED UI COMPONENTS
// ============================================================

import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { Volume2, VolumeX, Loader2, Check, X, ChevronDown } from 'lucide-react';
import { speak, stopSpeaking, isTTSSupported } from '../../lib/speech';

// ——— Loading Spinner ———
export function Spinner({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const sizes = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-10 w-10' };
  return (
    <Loader2 className={clsx('animate-spin text-brand-500', sizes[size], className)} />
  );
}

// ——— Progress Ring ———
export function ProgressRing({
  percent,
  size = 80,
  strokeWidth = 8,
  color = '#6272f1',
  children,
}: {
  percent: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  children?: React.ReactNode;
}) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-700"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring-circle"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

// ——— Progress Bar ———
export function ProgressBar({
  value,
  max = 100,
  className,
  color = 'brand',
  showLabel = false,
  animated = true,
}: {
  value: number;
  max?: number;
  className?: string;
  color?: 'brand' | 'gold' | 'success' | 'danger';
  showLabel?: boolean;
  animated?: boolean;
}) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  const colorMap = {
    brand: 'bg-brand-600',
    gold: 'bg-gold-500',
    success: 'bg-success-500',
    danger: 'bg-danger-500',
  };

  return (
    <div className={clsx('relative', className)}>
      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          className={clsx('h-full rounded-full', colorMap[color], animated && 'progress-bar-fill transition-all duration-700')}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <span className="absolute right-0 -top-5 text-xs text-slate-500 dark:text-slate-400">{percent}%</span>
      )}
    </div>
  );
}

// ——— Audio Play Button ———
export function AudioButton({
  text,
  label,
  slow = false,
  size = 'md',
  className,
  onClick,
}: {
  text: string;
  label?: string;
  slow?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const supported = isTTSSupported();

  const handlePlay = async (e: React.MouseEvent) => {
    onClick?.(e);
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
      return;
    }
    setError(null);
    setIsPlaying(true);
    try {
      await speak(text, { slow });
    } catch {
      setError('Audio unavailable');
    } finally {
      setIsPlaying(false);
    }
  };

  if (!supported) {
    return (
      <span className="chip-neutral text-xs" title="Audio not supported in this browser">
        <VolumeX className="h-3 w-3" /> No audio
      </span>
    );
  }

  const sizeMap = {
    sm: 'h-7 w-7 !p-1',
    md: 'h-9 w-9 !p-2',
    lg: 'h-11 w-11 !p-2.5',
  };

  return (
    <button
      type="button"
      onClick={handlePlay}
      className={clsx(
        'btn-icon rounded-full transition-all',
        isPlaying
          ? 'bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400'
          : 'btn-ghost',
        sizeMap[size],
        className,
      )}
      title={error ?? (slow ? 'Play slowly' : 'Play audio')}
      aria-label={label ?? `Listen: ${text}`}
    >
      {error && <span className="sr-only" role="alert">{error}</span>}
      {isPlaying
        ? <Volume2 className={clsx('animate-pulse', size === 'sm' ? 'h-3 w-3' : 'h-4 w-4')} />
        : <Volume2 className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      }
    </button>
  );
}

// ——— Level Badge ———
export function LevelBadge({ level, size = 'sm' }: { level: string; size?: 'xs' | 'sm' | 'md' }) {
  const classMap: Record<string, string> = {
    A1: 'level-a1',
    A2: 'level-a2',
    B1: 'level-b1',
    B2: 'level-b2',
    C1: 'level-c1',
    C2: 'level-c2',
  };
  const sizeMap = { xs: 'text-[10px] px-1.5 py-px', sm: '', md: 'text-sm px-3 py-1' };
  return (
    <span className={clsx(classMap[level] ?? 'chip-neutral', sizeMap[size])}>
      {level}
    </span>
  );
}

// ——— Answer Feedback ———
export function AnswerFeedback({
  correct,
  explanation,
  explanationHinglish,
  lang = 'Both',
  onNext,
}: {
  correct: boolean;
  explanation: string;
  explanationHinglish?: string;
  lang?: string;
  onNext?: () => void;
}) {
  return (
    <div className={clsx(
      'rounded-2xl p-4 border-2 animate-slide-up',
      correct
        ? 'bg-success-50 dark:bg-success-900/20 border-success-400'
        : 'bg-danger-50 dark:bg-danger-900/20 border-danger-400',
    )}>
      <div className="flex items-center gap-2 mb-2">
        {correct
          ? <Check className="h-5 w-5 text-success-600" />
          : <X className="h-5 w-5 text-danger-600" />
        }
        <span className={clsx('font-semibold', correct ? 'text-success-700 dark:text-success-300' : 'text-danger-700 dark:text-danger-300')}>
          {correct ? 'Correct! 🎉' : 'Not quite — let\'s review!'}
        </span>
      </div>
      {(lang !== 'Hinglish') && explanation && (
        <p className="text-sm text-slate-700 dark:text-slate-200 mb-1">📖 {explanation}</p>
      )}
      {(lang !== 'English') && explanationHinglish && (
        <p className="text-sm text-slate-600 dark:text-slate-300 italic">🇮🇳 {explanationHinglish}</p>
      )}
      {onNext && (
        <button onClick={onNext} className="btn-brand btn-sm mt-3">
          Continue →
        </button>
      )}
    </div>
  );
}

// ——— Streak Display ———
export function StreakBadge({ streak }: { streak: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
      <span className="text-lg streak-flame">🔥</span>
      <span className="font-bold text-orange-600 dark:text-orange-400 text-sm">{streak}</span>
    </div>
  );
}

// ——— XP Display ———
export function XPBadge({ xp }: { xp: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-50 dark:bg-yellow-900/20 border border-gold-200 dark:border-yellow-800">
      <span className="text-sm">⭐</span>
      <span className="font-bold text-gold-600 dark:text-yellow-400 text-sm">{xp.toLocaleString()} XP</span>
    </div>
  );
}

// ——— XP Toast ———
export function XPToast({ amount, visible }: { amount: number; visible: boolean }) {
  if (!visible || amount === 0) return null;
  return (
    <div className="xp-toast animate-bounce-soft">
      +{amount} XP ⭐
    </div>
  );
}

// ——— Stat Card ———
export function StatCard({
  icon,
  label,
  value,
  color = 'brand',
  subtitle,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color?: 'brand' | 'gold' | 'success' | 'danger' | 'teal';
  subtitle?: string;
}) {
  const colorMap = {
    brand: 'text-brand-600 bg-brand-50 dark:bg-brand-950/40',
    gold: 'text-gold-600 bg-gold-50 dark:bg-yellow-950/40',
    success: 'text-success-600 bg-success-50 dark:bg-success-950/40',
    danger: 'text-danger-600 bg-danger-50 dark:bg-danger-950/40',
    teal: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40',
  };

  return (
    <div className="card p-4">
      <div className="flex items-start gap-3">
        <div className={clsx('p-2.5 rounded-xl', colorMap[color])}>
          {icon}
        </div>
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
          <p className="text-xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">{value}</p>
          {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

// ——— Section Header ———
export function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="section-title">{title}</h1>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

// ——— Empty State ———
export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-2">{title}</h3>
      {description && <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

// ——— Modal ———
export function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const sizeMap = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={ref}
        className={clsx(
          'relative w-full rounded-3xl card p-6 shadow-2xl animate-slide-up',
          sizeMap[size],
        )}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 id="modal-title" className="text-lg font-bold text-slate-900 dark:text-slate-50">{title}</h2>
            <button onClick={onClose} className="btn-ghost btn-icon" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// ——— Tab Bar ———
export function TabBar<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: T; label: string; icon?: React.ReactNode }[];
  active: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1" role="tablist">
      {tabs.map(tab => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={active === tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium flex-1 justify-center transition-all duration-150',
            active === tab.id
              ? 'bg-white dark:bg-slate-700 text-brand-700 dark:text-brand-300 shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200',
          )}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

// ——— Accordion ———
export function Accordion({ title, children, defaultOpen = false }: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-sm text-slate-700 dark:text-slate-200">{title}</span>
        <ChevronDown className={clsx('h-4 w-4 text-slate-400 transition-transform duration-200', open && 'rotate-180')} />
      </button>
      {open && (
        <div className="px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 animate-slide-down">
          {children}
        </div>
      )}
    </div>
  );
}

// ——— German Text with audio ———
export function GermanPhrase({
  german,
  english,
  hinglish,
  showHinglish = true,
  size = 'md',
}: {
  german: string;
  english: string;
  hinglish?: string;
  showHinglish?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) {
  const textSize = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' };
  return (
    <div className="flex items-start gap-3">
      <AudioButton text={german} size="sm" />
      <div>
        <p className={clsx('german-text', textSize[size])}>{german}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{english}</p>
        {showHinglish && hinglish && (
          <p className="text-slate-500 dark:text-slate-500 text-xs italic">{hinglish}</p>
        )}
      </div>
    </div>
  );
}
