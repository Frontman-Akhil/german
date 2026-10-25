// ============================================================
// SPACED REPETITION SYSTEM (SM-2 Algorithm)
// ============================================================

import type { VocabWord, SRSResponse } from '../types';
import { saveVocabWord } from './db';

/**
 * SM-2 spaced repetition algorithm.
 * Based on the original SuperMemo SM-2 algorithm.
 */
export function calculateNextReview(word: VocabWord, response: SRSResponse): VocabWord {
  const now = new Date();
  let { interval, easeFactor, repetitions } = word;

  // Map response to quality score (0–5)
  const quality: Record<SRSResponse, number> = {
    again: 0,
    hard: 2,
    good: 4,
    easy: 5,
  };
  const q = quality[response];

  if (q < 3) {
    // Failed — restart
    repetitions = 0;
    interval = 1;
  } else {
    // Passed
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Update ease factor (min 1.3)
  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

  const nextReview = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

  // Determine familiarity
  let familiarity: VocabWord['familiarity'] = word.familiarity;
  if (q < 3) {
    familiarity = 'learning';
  } else if (repetitions >= 5 && easeFactor >= 2.0) {
    familiarity = 'mastered';
  } else if (repetitions >= 2) {
    familiarity = 'reviewing';
  } else {
    familiarity = 'learning';
  }

  return {
    ...word,
    interval,
    easeFactor,
    repetitions,
    familiarity,
    nextReview: nextReview.toISOString(),
    lastReviewDate: now.toISOString(),
  };
}

export async function reviewCard(word: VocabWord, response: SRSResponse): Promise<VocabWord> {
  const updated = calculateNextReview(word, response);
  await saveVocabWord(updated);
  return updated;
}

export function getNextReviewLabel(nextReview: string | null): string {
  if (!nextReview) return 'New';
  const diff = new Date(nextReview).getTime() - Date.now();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  if (days <= 0) return 'Due now';
  if (days === 1) return 'Tomorrow';
  if (days < 7) return `In ${days} days`;
  if (days < 30) return `In ${Math.floor(days / 7)} week${days >= 14 ? 's' : ''}`;
  return `In ${Math.floor(days / 30)} month${days >= 60 ? 's' : ''}`;
}

export function getDueCards(words: VocabWord[]): VocabWord[] {
  const now = new Date();
  return words.filter(w => {
    if (w.familiarity === 'new') return false;
    if (!w.nextReview) return true;
    return new Date(w.nextReview) <= now;
  });
}

export function getDueCount(words: VocabWord[]): number {
  return getDueCards(words).length;
}
