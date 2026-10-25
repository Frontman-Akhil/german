// ============================================================
// VOCABULARY PAGE — Flashcards + SRS + Browse
// ============================================================

import React, { useState, useMemo, useCallback } from 'react';
import { clsx } from 'clsx';
import {
  Search, RotateCcw, BookMarked, Star,
  ChevronDown, Layers, Zap,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import type { VocabWord, SRSResponse, CEFRLevel } from '../types';
import { VOCAB_TOPICS } from '../data/vocabulary';
import {
  SectionHeader, TabBar, AudioButton, LevelBadge,
  EmptyState, ProgressBar,
} from '../components/shared';
import { getDueCards, getNextReviewLabel } from '../lib/srs';

// ——— Flashcard Flip Component ———
function Flashcard({ word, lang, onResponse }: {
  word: VocabWord;
  lang: string;
  onResponse: (r: SRSResponse) => void;
}) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped(f => !f);

  return (
    <div className="max-w-md mx-auto">
      {/* Card */}
      <div className="flashcard-scene h-64 mb-4 cursor-pointer" onClick={handleFlip} role="button" aria-label="Flip card">
        <div className={clsx('flashcard-inner h-full', flipped && 'flipped')}>
          {/* Front */}
          <div className="flashcard-face card flex flex-col items-center justify-center p-8 text-center">
            <div className="flex items-center gap-3 mb-4">
              {word.article && (
                <span className={clsx(
                  'text-lg font-bold',
                  word.article === 'der' ? 'text-blue-500' :
                  word.article === 'die' ? 'text-pink-500' :
                  'text-green-500'
                )}>{word.article}</span>
              )}
              <span className="text-3xl font-bold text-slate-900 dark:text-white">{word.german}</span>
              <AudioButton text={word.german} size="sm" />
            </div>
            {word.plural && <p className="text-slate-400 text-sm">Pl: {word.plural}</p>}
            {word.verbForms && (
              <p className="text-slate-400 text-xs mt-1">
                {word.verbForms.present3rd} • {word.verbForms.pastParticiple}
              </p>
            )}
            <p className="text-slate-400 text-sm mt-3 italic">[{word.phonetic}]</p>
            <div className="mt-4 bg-brand-50 dark:bg-brand-950/30 rounded-xl px-3 py-1.5">
              <p className="text-brand-600 dark:text-brand-400 text-xs font-medium">{word.partOfSpeech}</p>
            </div>
            <p className="text-slate-400 text-xs mt-4">Tap to reveal meaning</p>
          </div>

          {/* Back */}
          <div className="flashcard-face flashcard-back card flex flex-col items-center justify-center p-6 text-center bg-brand-600 dark:bg-brand-900">
            <p className="text-2xl font-bold text-white mb-1">{word.english}</p>
            {lang !== 'English' && (
              <p className="text-brand-200 text-lg">{word.hinglish}</p>
            )}
            <div className="mt-4 border-t border-brand-500 pt-4 w-full">
              <p className="text-brand-100 text-xs italic mb-1">{word.example}</p>
              <p className="text-brand-200 text-xs">{word.exampleEnglish}</p>
              {lang !== 'English' && (
                <p className="text-brand-300 text-xs italic">{word.exampleHinglish}</p>
              )}
            </div>
            {word.usageNote && (
              <div className="mt-3 bg-brand-700/50 rounded-lg px-3 py-2 text-xs text-brand-200">
                ⚠️ {word.usageNote}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SRS Response Buttons */}
      {flipped && (
        <div className="grid grid-cols-4 gap-2 animate-slide-up">
          {([
            { id: 'again' as SRSResponse, label: 'Again', color: 'bg-danger-500 hover:bg-danger-600 text-white', emoji: '❌' },
            { id: 'hard' as SRSResponse, label: 'Hard', color: 'bg-orange-500 hover:bg-orange-600 text-white', emoji: '😓' },
            { id: 'good' as SRSResponse, label: 'Good', color: 'bg-brand-600 hover:bg-brand-700 text-white', emoji: '👍' },
            { id: 'easy' as SRSResponse, label: 'Easy', color: 'bg-success-500 hover:bg-success-600 text-white', emoji: '⭐' },
          ]).map(({ id, label, color, emoji }) => (
            <button
              key={id}
              onClick={() => { setFlipped(false); onResponse(id); }}
              className={clsx('btn rounded-xl py-3 flex-col gap-1 text-xs font-bold', color)}
            >
              <span className="text-base">{emoji}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ——— Word Card (browse mode) ———
function WordCard({ word, lang, onStudy }: {
  word: VocabWord;
  lang: string;
  onStudy: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const familiarityColor = {
    new: 'chip-neutral',
    learning: 'chip-brand',
    reviewing: 'chip-gold',
    mastered: 'chip-success',
  };

  return (
    <div className="card p-4 card-hover" onClick={() => setExpanded(e => !e)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <AudioButton text={word.german} size="sm" onClick={(e: React.MouseEvent) => e.stopPropagation()} />
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {word.article && (
                <span className={clsx(
                  'text-sm font-semibold',
                  word.article === 'der' ? 'text-blue-500' :
                  word.article === 'die' ? 'text-pink-500' : 'text-green-500'
                )}>{word.article}</span>
              )}
              <span className="font-bold text-slate-900 dark:text-white">{word.german}</span>
              {word.plural && <span className="text-slate-400 text-xs">({word.plural})</span>}
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm truncate">{word.english}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={familiarityColor[word.familiarity]}>{word.familiarity}</span>
          <ChevronDown className={clsx('h-4 w-4 text-slate-400 transition-transform', expanded && 'rotate-180')} />
        </div>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 space-y-3 animate-slide-down">
          {lang !== 'English' && <p className="text-slate-500 italic text-sm">{word.hinglish}</p>}
          <div className="bg-brand-50 dark:bg-brand-950/30 rounded-xl p-3">
            <p className="text-brand-700 dark:text-brand-300 text-sm italic">{word.example}</p>
            <p className="text-slate-500 text-xs mt-1">{word.exampleEnglish}</p>
            {lang !== 'English' && <p className="text-slate-500 text-xs italic">{word.exampleHinglish}</p>}
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex gap-2 flex-wrap">
              <span className="chip-neutral">{word.partOfSpeech}</span>
              <span className="chip-neutral">{word.topic}</span>
              <LevelBadge level={word.level} size="xs" />
            </div>
            <span>{getNextReviewLabel(word.nextReview)}</span>
          </div>
          {word.usageNote && (
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2 text-xs text-amber-700 dark:text-amber-300">
              ⚠️ {word.usageNote}
            </div>
          )}
          {word.familiarity === 'new' && (
            <button onClick={(e) => { e.stopPropagation(); onStudy(); }} className="btn-brand btn-sm w-full">
              <Zap className="h-3.5 w-3.5" /> Add to Study
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ——— Main Vocabulary Page ———
export function Vocabulary() {
  const { vocabulary, progress, reviewVocabCard, addWordToStudy, profile } = useAppStore();
  const [tab, setTab] = useState<'flashcards' | 'browse' | 'stats'>('flashcards');
  const [search, setSearch] = useState('');
  const [filterLevel, setFilterLevel] = useState<CEFRLevel | 'all'>('all');
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const lang = profile.explanationLanguage;

  // Due cards for SRS review
  const dueCards = useMemo(() => getDueCards(vocabulary), [vocabulary]);

  // New cards to learn (always some available)
  const newCards = useMemo(() =>
    vocabulary.filter(w => w.familiarity === 'new' && w.level === progress.currentLevel).slice(0, 10),
    [vocabulary, progress.currentLevel]
  );

  const flashcardDeck = useMemo(() =>
    dueCards.length > 0 ? dueCards : newCards,
    [dueCards, newCards]
  );

  const safeCardIndex = Math.min(currentCardIndex, Math.max(flashcardDeck.length - 1, 0));
  const currentCard = flashcardDeck[safeCardIndex];

  const handleSRSResponse = useCallback(async (response: SRSResponse) => {
    if (!currentCard) return;
    await reviewVocabCard(currentCard.id, response);
    setCurrentCardIndex(safeCardIndex + 1);
  }, [currentCard, safeCardIndex, reviewVocabCard]);

  // Browseable filtered words
  const filteredWords = useMemo(() => {
    let words = vocabulary;
    if (filterLevel !== 'all') words = words.filter(w => w.level === filterLevel);
    if (filterTopic !== 'all') words = words.filter(w => w.topic === filterTopic);
    if (search.trim()) {
      const q = search.toLowerCase();
      words = words.filter(w =>
        w.german.toLowerCase().includes(q) ||
        w.english.toLowerCase().includes(q) ||
        w.hinglish.toLowerCase().includes(q)
      );
    }
    return words;
  }, [vocabulary, filterLevel, filterTopic, search]);

  const stats = useMemo(() => ({
    total: vocabulary.length,
    new: vocabulary.filter(w => w.familiarity === 'new').length,
    learning: vocabulary.filter(w => w.familiarity === 'learning').length,
    reviewing: vocabulary.filter(w => w.familiarity === 'reviewing').length,
    mastered: vocabulary.filter(w => w.familiarity === 'mastered').length,
    due: dueCards.length,
  }), [vocabulary, dueCards]);

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader
        title="Vocabulary"
        subtitle={`${stats.total} words • ${stats.due} due for review`}
        action={
          <div className="flex items-center gap-2">
            <span className="chip-brand">{stats.mastered} mastered</span>
            <span className={stats.due > 0 ? 'chip-danger' : 'chip-success'}>
              {stats.due} due
            </span>
          </div>
        }
      />

      <TabBar
        tabs={[
          { id: 'flashcards' as const, label: 'Flashcards', icon: <Layers className="h-4 w-4" /> },
          { id: 'browse' as const, label: 'Browse', icon: <BookMarked className="h-4 w-4" /> },
          { id: 'stats' as const, label: 'Progress', icon: <Star className="h-4 w-4" /> },
        ]}
        active={tab}
        onChange={setTab}
      />

      {/* FLASHCARDS TAB */}
      {tab === 'flashcards' && (
        <div className="space-y-4">
          {flashcardDeck.length === 0 ? (
            <EmptyState
              icon="🎉"
              title="All caught up!"
              description="No cards due for review right now. Come back later or browse new words."
              action={<button onClick={() => setTab('browse')} className="btn-brand">Browse Vocabulary</button>}
            />
          ) : (
            <>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>
                  {dueCards.length > 0
                    ? `${dueCards.length} cards due for review`
                    : `Learning ${newCards.length} new ${newCards.length === 1 ? 'word' : 'words'}`}
                </span>
                <span>{safeCardIndex + 1} / {flashcardDeck.length}</span>
              </div>
              <ProgressBar value={safeCardIndex + 1} max={flashcardDeck.length} color="brand" />
              {currentCard && <Flashcard word={currentCard} lang={lang} onResponse={handleSRSResponse} />}
              <div className="text-center">
                <button
                  onClick={() => setCurrentCardIndex(0)}
                  className="btn-ghost btn-sm"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Restart deck
                </button>
              </div>

              {/* SRS Guide */}
              <div className="card p-4 bg-slate-50 dark:bg-slate-800/50">
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">How to use flashcards:</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-500">
                  <p>❌ <strong>Again</strong> — Forgot completely, review today</p>
                  <p>😓 <strong>Hard</strong> — Remembered with difficulty, review in 1 day</p>
                  <p>👍 <strong>Good</strong> — Remembered correctly, review in a few days</p>
                  <p>⭐ <strong>Easy</strong> — Very easy, review in a week+</p>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* BROWSE TAB */}
      {tab === 'browse' && (
        <div className="space-y-4">
          {/* Search & Filter */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search words..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input pl-9"
              />
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            <select
              value={filterLevel}
              onChange={e => setFilterLevel(e.target.value as CEFRLevel | 'all')}
              className="input !w-auto text-sm"
            >
              <option value="all">All Levels</option>
              {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map(l => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <select
              value={filterTopic}
              onChange={e => setFilterTopic(e.target.value)}
              className="input !w-auto text-sm"
            >
              <option value="all">All Topics</option>
              {VOCAB_TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <p className="text-sm text-slate-500">{filteredWords.length} words found</p>

          <div className="space-y-2">
            {filteredWords.slice(0, 50).map(word => (
              <WordCard
                key={word.id}
                word={word}
                lang={lang}
                onStudy={() => { void addWordToStudy(word.id); }}
              />
            ))}
            {filteredWords.length > 50 && (
              <p className="text-center text-sm text-slate-400 py-4">
                Showing first 50 results. Use search to narrow down.
              </p>
            )}
          </div>
        </div>
      )}

      {/* STATS TAB */}
      {tab === 'stats' && (
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4">Vocabulary Progress</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Words', value: stats.total, color: 'text-slate-800 dark:text-white' },
                { label: 'New (not started)', value: stats.new, color: 'text-slate-500' },
                { label: 'Learning', value: stats.learning, color: 'text-brand-600' },
                { label: 'Reviewing', value: stats.reviewing, color: 'text-gold-600' },
                { label: 'Mastered', value: stats.mastered, color: 'text-success-600' },
                { label: 'Due for Review', value: stats.due, color: stats.due > 0 ? 'text-danger-600' : 'text-success-600' },
              ].map(({ label, value, color }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <p className={clsx('text-2xl font-bold', color)}>{value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">Mastery Breakdown</h3>
            <div className="space-y-3">
              {[
                { label: 'Mastered', value: stats.mastered, max: stats.total, color: 'success' as const },
                { label: 'Reviewing', value: stats.reviewing, max: stats.total, color: 'gold' as const },
                { label: 'Learning', value: stats.learning, max: stats.total, color: 'brand' as const },
              ].map(({ label, value, max, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>{label}</span>
                    <span>{value} / {max}</span>
                  </div>
                  <ProgressBar value={value} max={max} color={color} animated={false} />
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">Words by Level</h3>
            {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map(level => {
              const count = vocabulary.filter(w => w.level === level).length;
              const learned = vocabulary.filter(w => w.level === level && w.familiarity !== 'new').length;
              return (
                <div key={level} className="flex items-center gap-3 mb-2">
                  <LevelBadge level={level} size="xs" />
                  <ProgressBar value={learned} max={count || 1} color="brand" className="flex-1" animated={false} />
                  <span className="text-xs text-slate-400 w-12 text-right">{learned}/{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
