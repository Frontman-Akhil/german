// ============================================================
// INDEXEDDB PERSISTENCE LAYER
// ============================================================

import { openDB } from 'idb';
import type { DBSchema, IDBPDatabase } from 'idb';
import type { UserProfile, UserProgress, VocabWord, StudySession, MockExamResult, TutorMessage } from '../types';

interface GermanAppDB extends DBSchema {
  profile: {
    key: string;
    value: UserProfile;
  };
  progress: {
    key: string;
    value: UserProgress;
  };
  vocabulary: {
    key: string;
    value: VocabWord;
    indexes: { 'by-level': string; 'by-topic': string; 'by-familiarity': string };
  };
  sessions: {
    key: string;
    value: StudySession;
    indexes: { 'by-date': string };
  };
  examResults: {
    key: string;
    value: MockExamResult;
  };
  tutorHistory: {
    key: string;
    value: { id: string; messages: TutorMessage[]; updatedAt: string };
  };
  lessonProgress: {
    key: string;
    value: { lessonId: string; completed: boolean; score: number; completedAt: string };
  };
}

let db: IDBPDatabase<GermanAppDB> | null = null;

export async function getDB(): Promise<IDBPDatabase<GermanAppDB>> {
  if (db) return db;
  db = await openDB<GermanAppDB>('deutsch-meister', 3, {
    upgrade(database, oldVersion) {
      if (oldVersion < 1) {
        database.createObjectStore('profile', { keyPath: 'id' });
        database.createObjectStore('progress', { keyPath: 'userId' });
        const vocabStore = database.createObjectStore('vocabulary', { keyPath: 'id' });
        vocabStore.createIndex('by-level', 'level');
        vocabStore.createIndex('by-topic', 'topic');
        vocabStore.createIndex('by-familiarity', 'familiarity');
        const sessionsStore = database.createObjectStore('sessions', { keyPath: 'id' });
        sessionsStore.createIndex('by-date', 'date');
        database.createObjectStore('examResults', { keyPath: 'id' });
        database.createObjectStore('tutorHistory', { keyPath: 'id' });
      }
      if (oldVersion < 2) {
        database.createObjectStore('lessonProgress', { keyPath: 'lessonId' });
      }
    },
  });
  return db;
}

// ——— Profile ———
export async function saveProfile(profile: UserProfile): Promise<void> {
  const database = await getDB();
  await database.put('profile', profile);
}

export async function loadProfile(): Promise<UserProfile | undefined> {
  const database = await getDB();
  const all = await database.getAll('profile');
  return all[0];
}

// ——— Progress ———
export async function saveProgress(progress: UserProgress): Promise<void> {
  const database = await getDB();
  await database.put('progress', progress);
}

export async function loadProgress(userId: string): Promise<UserProgress | undefined> {
  const database = await getDB();
  return database.get('progress', userId);
}

// ——— Vocabulary (SRS) ———
export async function saveVocabWord(word: VocabWord): Promise<void> {
  const database = await getDB();
  await database.put('vocabulary', word);
}

export async function saveVocabWords(words: VocabWord[]): Promise<void> {
  const database = await getDB();
  const tx = database.transaction('vocabulary', 'readwrite');
  await Promise.all([
    ...words.map(w => tx.store.put(w)),
    tx.done,
  ]);
}

export async function loadAllVocab(): Promise<VocabWord[]> {
  const database = await getDB();
  return database.getAll('vocabulary');
}

export async function loadVocabByLevel(level: string): Promise<VocabWord[]> {
  const database = await getDB();
  return database.getAllFromIndex('vocabulary', 'by-level', level);
}

export async function loadVocabDue(): Promise<VocabWord[]> {
  const all = await loadAllVocab();
  const now = new Date();
  return all.filter(w => {
    if (w.familiarity === 'new') return false;
    if (!w.nextReview) return true;
    return new Date(w.nextReview) <= now;
  });
}

// ——— Sessions ———
export async function saveSession(session: StudySession): Promise<void> {
  const database = await getDB();
  await database.put('sessions', session);
}

export async function loadRecentSessions(limit = 7): Promise<StudySession[]> {
  const database = await getDB();
  const all = await database.getAllFromIndex('sessions', 'by-date');
  return all.slice(-limit).reverse();
}

// ——— Exam Results ———
export async function saveExamResult(result: MockExamResult): Promise<void> {
  const database = await getDB();
  await database.put('examResults', result);
}

export async function loadExamResults(): Promise<MockExamResult[]> {
  const database = await getDB();
  return database.getAll('examResults');
}

// ——— Tutor History ———
export async function saveTutorHistory(id: string, messages: TutorMessage[]): Promise<void> {
  const database = await getDB();
  await database.put('tutorHistory', { id, messages, updatedAt: new Date().toISOString() });
}

export async function loadTutorHistory(id: string): Promise<TutorMessage[]> {
  const database = await getDB();
  const record = await database.get('tutorHistory', id);
  return record?.messages ?? [];
}

// ——— Lesson Progress ———
export async function markLessonComplete(lessonId: string, score: number): Promise<void> {
  const database = await getDB();
  await database.put('lessonProgress', {
    lessonId,
    completed: true,
    score,
    completedAt: new Date().toISOString(),
  });
}

export async function loadLessonProgress(): Promise<Record<string, { completed: boolean; score: number; completedAt: string }>> {
  const database = await getDB();
  const all = await database.getAll('lessonProgress');
  return Object.fromEntries(all.map(l => [l.lessonId, l]));
}

// ——— Clear All (for testing / reset) ———
export async function clearAllData(): Promise<void> {
  const database = await getDB();
  const tx = database.transaction(['profile', 'progress', 'vocabulary', 'sessions', 'examResults', 'tutorHistory', 'lessonProgress'], 'readwrite');
  await Promise.all([
    tx.objectStore('profile').clear(),
    tx.objectStore('progress').clear(),
    tx.objectStore('vocabulary').clear(),
    tx.objectStore('sessions').clear(),
    tx.objectStore('examResults').clear(),
    tx.objectStore('tutorHistory').clear(),
    tx.objectStore('lessonProgress').clear(),
    tx.done,
  ]);
}
