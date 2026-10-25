// ============================================================
// GLOBAL STATE STORE — ZUSTAND
// ============================================================

import { create } from 'zustand';
import type {
  UserProfile, UserProgress, VocabWord, TutorMessage,
  CEFRLevel, TutorMode, SRSResponse, Theme,
  StudySession, SessionActivity, SkillType,
} from '../types';
import { ALL_VOCABULARY } from '../data/vocabulary';
import { CURRICULUM, getLessonById } from '../data/curriculum';
import {
  saveProfile, loadProfile, saveProgress, loadProgress,
  saveVocabWords, loadAllVocab, markLessonComplete,
  loadLessonProgress, saveSession, saveTutorHistory, loadTutorHistory,
  saveVocabWord, clearAllData,
} from '../lib/db';
import { calculateNextReview } from '../lib/srs';
import { generateTutorResponse } from '../lib/tutor';

// ——— Default profile ———
const DEFAULT_PROFILE: UserProfile = {
  id: 'user-1',
  name: 'Student',
  currentLevel: 'A1',
  targetLevel: 'B1',
  targetExam: 'Goethe',
  targetExamLevel: 'B1',
  examDate: null,
  goals: ['exam', 'ausbildung'],
  explanationLanguage: 'Both',
  dailyStudyMinutes: 60,
  weakestSkills: [],
  theme: 'dark',
  onboardingCompleted: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const CEFR_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function createDefaultProgress(userId: string, startLevel: CEFRLevel = 'A1'): UserProgress {
  const levels: UserProgress['levels'] = {} as UserProgress['levels'];
  const startIndex = Math.max(0, CEFR_LEVELS.indexOf(startLevel));
  CEFR_LEVELS.forEach((level, idx) => {
    levels[level] = {
      level,
      overallPercent: 0,
      unitsCompleted: 0,
      totalUnits: CURRICULUM[level]?.length ?? 0,
      skills: {
        listening: { skill: 'listening', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
        speaking: { skill: 'speaking', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
        reading: { skill: 'reading', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
        writing: { skill: 'writing', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
        grammar: { skill: 'grammar', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
        vocabulary: { skill: 'vocabulary', score: 0, lessonsCompleted: 0, exercisesCompleted: 0, lastActivity: '' },
      },
      unlocked: idx <= startIndex,
      completed: false,
    };
  });
  return {
    userId,
    currentLevel: startLevel,
    xp: 0,
    streak: 0,
    lastStudyDate: '',
    levels,
    totalStudyMinutes: 0,
    badgesEarned: [],
    weeklyStudyMinutes: [0, 0, 0, 0, 0, 0, 0],
    quizAccuracy: 0,
  };
}

function addEarnedBadges(
  progress: UserProgress,
  options: { firstStep?: boolean; perfectScore?: boolean; learnedWords?: number } = {},
): UserProgress {
  const badges = new Set(progress.badgesEarned);
  if (options.firstStep) badges.add('first-step');
  if ((options.learnedWords ?? 0) >= 50) badges.add('scholar');
  if (progress.streak >= 7) badges.add('on-fire');
  if (progress.xp >= 1000) badges.add('xp-1000');
  if (options.perfectScore) badges.add('perfectionist');
  if (progress.levels.A1.completed) badges.add('a1-graduate');
  if (badges.size === progress.badgesEarned.length) return progress;
  return { ...progress, badgesEarned: [...badges] };
}

// ——— Store Interface ———
interface AppStore {
  // Data
  profile: UserProfile;
  progress: UserProgress;
  vocabulary: VocabWord[];
  lessonProgress: Record<string, { completed: boolean; score: number; completedAt: string }>;
  tutorMessages: TutorMessage[];
  currentSession: StudySession | null;

  // UI State
  sidebarOpen: boolean;
  xpToast: { show: boolean; amount: number };
  currentLessonId: string | null;
  tutorMode: TutorMode;
  isInitialized: boolean;

  // Actions — Initialization
  initialize: () => Promise<void>;

  // Actions — Profile
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
  completeOnboarding: (profileData: Partial<UserProfile>) => Promise<void>;
  setTheme: (theme: Theme) => void;

  // Actions — Progress
  awardXP: (amount: number) => void;
  updateStreak: () => void;

  // Actions — Lessons
  completeLessonExercise: (lessonId: string, correct: boolean, xp?: number) => void;
  completeLesson: (lessonId: string, score: number) => Promise<void>;

  // Actions — Vocabulary / SRS
  initVocab: () => Promise<void>;
  reviewVocabCard: (wordId: string, response: SRSResponse) => Promise<void>;
  addWordToStudy: (wordId: string) => Promise<void>;
  resetAllData: () => Promise<void>;

  // Actions — Tutor
  sendTutorMessage: (message: string, mode: TutorMode) => void;
  clearTutorHistory: () => void;
  setTutorMode: (mode: TutorMode) => void;

  // Actions — Session
  startSession: () => void;
  endSession: () => Promise<void>;
  logSessionActivity: (activity: SessionActivity) => void;

  // Actions — UI
  setSidebarOpen: (open: boolean) => void;
  setCurrentLesson: (id: string | null) => void;
  dismissXPToast: () => void;
}

export const useAppStore = create<AppStore>()((set, get) => ({
  profile: DEFAULT_PROFILE,
  progress: createDefaultProgress('user-1'),
  vocabulary: [],
  lessonProgress: {},
  tutorMessages: [],
  currentSession: null,
  sidebarOpen: false,
  xpToast: { show: false, amount: 0 },
  currentLessonId: null,
  tutorMode: 'explain',
  isInitialized: false,

  // ——— Initialize ———
  initialize: async () => {
    try {
      const profile = await loadProfile();
      const progress = profile ? await loadProgress(profile.id) : undefined;
      const vocab = await loadAllVocab();
      const lessonProg = await loadLessonProgress();
      const tutorHistory = await loadTutorHistory('default');

      // Seed vocabulary if empty
      let finalVocab = vocab;
      if (vocab.length === 0) {
        await saveVocabWords(ALL_VOCABULARY);
        finalVocab = ALL_VOCABULARY;
      }

      set({
        profile: profile ?? DEFAULT_PROFILE,
        progress: progress ?? createDefaultProgress(profile?.id ?? 'user-1'),
        vocabulary: finalVocab,
        lessonProgress: lessonProg,
        tutorMessages: tutorHistory,
        isInitialized: true,
      });

      // Apply saved theme
      const savedProfile = profile ?? DEFAULT_PROFILE;
      document.documentElement.classList.toggle('dark', savedProfile.theme === 'dark');
    } catch (err) {
      console.error('Failed to initialize app store:', err);
      set({ isInitialized: true });
    }
  },

  // ——— Profile ———
  updateProfile: async (updates) => {
    const current = get().profile;
    const updated = { ...current, ...updates, updatedAt: new Date().toISOString() };
    set({ profile: updated });
    await saveProfile(updated);
    if (updates.theme) {
      document.documentElement.classList.toggle('dark', updates.theme === 'dark');
    }
  },

  completeOnboarding: async (profileData) => {
    const current = get().profile;
    const updated: UserProfile = {
      ...current,
      ...profileData,
      onboardingCompleted: true,
      updatedAt: new Date().toISOString(),
    };
    set({ profile: updated });
    await saveProfile(updated);
    const progress = createDefaultProgress(updated.id, updated.currentLevel);
    set({ progress });
    await saveProgress(progress);
  },

  setTheme: (theme) => {
    get().updateProfile({ theme });
  },

  // ——— Progress ———
  awardXP: (amount) => {
    if (amount <= 0) return;
    const { progress, currentSession } = get();
    const updated = addEarnedBadges({ ...progress, xp: progress.xp + amount }, {
      learnedWords: get().vocabulary.filter(v => v.familiarity !== 'new').length,
    });
    set({
      progress: updated,
      xpToast: { show: true, amount },
      currentSession: currentSession
        ? { ...currentSession, xpEarned: currentSession.xpEarned + amount }
        : null,
    });
    saveProgress(updated).catch(console.error);
    setTimeout(() => set({ xpToast: { show: false, amount: 0 } }), 2500);
  },

  updateStreak: () => {
    const { progress } = get();
    const today = new Date().toDateString();
    const lastStudy = progress.lastStudyDate ? new Date(progress.lastStudyDate).toDateString() : '';
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let { streak } = progress;
    if (lastStudy === today) return;
    streak = lastStudy === yesterday ? streak + 1 : 1;

    const updated = addEarnedBadges(
      { ...progress, streak, lastStudyDate: new Date().toISOString() },
      { learnedWords: get().vocabulary.filter(v => v.familiarity !== 'new').length },
    );
    set({ progress: updated });
    saveProgress(updated).catch(console.error);
  },

  // ——— Lessons ———
  completeLessonExercise: (_lessonId, correct, xp = 10) => {
    if (correct) get().awardXP(xp);

    const { progress, currentSession } = get();
    const answered = (currentSession?.correctAnswers ?? 0) + (currentSession?.incorrectAnswers ?? 0);
    const quizAccuracy = Math.round(((progress.quizAccuracy * answered) + (correct ? 100 : 0)) / (answered + 1));
    const updatedProgress = { ...progress, quizAccuracy };
    set({
      progress: updatedProgress,
      currentSession: currentSession
        ? {
            ...currentSession,
            correctAnswers: currentSession.correctAnswers + (correct ? 1 : 0),
            incorrectAnswers: currentSession.incorrectAnswers + (correct ? 0 : 1),
          }
        : null,
    });
    saveProgress(updatedProgress).catch(console.error);
  },

  completeLesson: async (lessonId, score) => {
    const { progress, profile, currentSession, vocabulary } = get();
    const lesson = getLessonById(lessonId);
    await markLessonComplete(lessonId, score);
    const lessonProg = await loadLessonProgress();

    if (!lesson) {
      set({ lessonProgress: lessonProg });
      return;
    }

    const now = new Date();
    const levels = { ...progress.levels };
    const levelModules = CURRICULUM[lesson.level] ?? [];
    const levelLessons = levelModules.flatMap(module => module.lessons);
    const completedLessons = levelLessons.filter(item => lessonProg[item.id]?.completed);
    const completedCount = completedLessons.length;
    const totalLessons = levelLessons.length;
    const unitsCompleted = levelModules.filter(module =>
      module.lessons.length > 0 && module.lessons.every(item => lessonProg[item.id]?.completed),
    ).length;

    const skillKeys: SkillType[] = ['listening', 'speaking', 'reading', 'writing', 'grammar', 'vocabulary'];
    const skills = { ...levels[lesson.level].skills };
    for (const skill of skillKeys) {
      const relevant = completedLessons.filter(item => item.skillFocus.includes(skill));
      if (relevant.length === 0) continue;
      skills[skill] = {
        ...skills[skill],
        score: Math.round(relevant.reduce((sum, item) => sum + (lessonProg[item.id]?.score ?? 0), 0) / relevant.length),
        lessonsCompleted: relevant.length,
        exercisesCompleted: relevant.reduce((sum, item) => sum + item.exercises.length, 0),
        lastActivity: lesson.skillFocus.includes(skill) ? now.toISOString() : skills[skill].lastActivity,
      };
    }

    const levelCompleted = totalLessons > 0 && completedCount === totalLessons;
    levels[lesson.level] = {
      ...levels[lesson.level],
      overallPercent: totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0,
      unitsCompleted,
      totalUnits: levelModules.length,
      skills,
      completed: levelCompleted,
    };

    let currentLevel = progress.currentLevel;
    let updatedProfile = profile;
    if (levelCompleted) {
      const nextLevel = CEFR_LEVELS[CEFR_LEVELS.indexOf(lesson.level) + 1];
      if (nextLevel) {
        levels[nextLevel] = { ...levels[nextLevel], unlocked: true };
        if (currentLevel === lesson.level) {
          currentLevel = nextLevel;
          updatedProfile = {
            ...profile,
            currentLevel: nextLevel,
            updatedAt: now.toISOString(),
          };
        }
      }
    }

    const xpEarned = Math.round(score * 0.5);
    const today = now.toDateString();
    const lastStudy = progress.lastStudyDate ? new Date(progress.lastStudyDate).toDateString() : '';
    const yesterday = new Date(now.getTime() - 86400000).toDateString();
    const streak = lastStudy === today ? progress.streak : lastStudy === yesterday ? progress.streak + 1 : 1;
    const weeklyStudyMinutes = [...progress.weeklyStudyMinutes];
    const dayIndex = (now.getDay() + 6) % 7;
    weeklyStudyMinutes[dayIndex] = (weeklyStudyMinutes[dayIndex] ?? 0) + lesson.estimatedMinutes;

    let updatedProgress: UserProgress = {
      ...progress,
      currentLevel,
      xp: progress.xp + xpEarned,
      streak,
      lastStudyDate: now.toISOString(),
      levels,
      totalStudyMinutes: progress.totalStudyMinutes + lesson.estimatedMinutes,
      weeklyStudyMinutes,
    };
    updatedProgress = addEarnedBadges(updatedProgress, {
      firstStep: true,
      perfectScore: score === 100,
      learnedWords: vocabulary.filter(word => word.familiarity !== 'new').length,
    });

    const updatedSession = currentSession
      ? {
          ...currentSession,
          xpEarned: currentSession.xpEarned + xpEarned,
          activitiesCompleted: [
            ...currentSession.activitiesCompleted,
            {
              type: lesson.skillFocus[0] ?? 'vocabulary',
              duration: lesson.estimatedMinutes,
              itemsCompleted: lesson.exercises.length,
              score,
            },
          ],
        }
      : null;

    set({
      progress: updatedProgress,
      profile: updatedProfile,
      lessonProgress: lessonProg,
      currentSession: updatedSession,
      xpToast: xpEarned > 0 ? { show: true, amount: xpEarned } : { show: false, amount: 0 },
    });
    await saveProgress(updatedProgress);
    if (updatedProfile !== profile) await saveProfile(updatedProfile);
    if (xpEarned > 0) setTimeout(() => set({ xpToast: { show: false, amount: 0 } }), 2500);
  },

  // ——— Vocabulary ———
  initVocab: async () => {
    const vocab = await loadAllVocab();
    if (vocab.length === 0) {
      await saveVocabWords(ALL_VOCABULARY);
      set({ vocabulary: ALL_VOCABULARY });
    } else {
      set({ vocabulary: vocab });
    }
  },

  reviewVocabCard: async (wordId, response) => {
    const { vocabulary } = get();
    const word = vocabulary.find(w => w.id === wordId);
    if (!word) return;

    const updated = calculateNextReview(word, response);
    const xpMap: Record<SRSResponse, number> = { again: 0, hard: 3, good: 8, easy: 12 };
    get().awardXP(xpMap[response]);

    const newVocab = vocabulary.map(w => w.id === wordId ? updated : w);
    const learnedWords = newVocab.filter(item => item.familiarity !== 'new').length;
    const updatedProgress = addEarnedBadges(
      { ...get().progress, totalStudyMinutes: get().progress.totalStudyMinutes + 1 },
      { learnedWords },
    );
    set({ vocabulary: newVocab, progress: updatedProgress });
    await Promise.all([saveVocabWord(updated), saveProgress(updatedProgress)]);
  },

  addWordToStudy: async (wordId) => {
    const { vocabulary } = get();
    const word = vocabulary.find(item => item.id === wordId);
    if (!word || word.familiarity !== 'new') return;
    const updatedWord: VocabWord = {
      ...word,
      familiarity: 'learning',
      nextReview: new Date().toISOString(),
    };
    const updated = vocabulary.map(item => item.id === wordId ? updatedWord : item);
    const learnedWords = updated.filter(item => item.familiarity !== 'new').length;
    const updatedProgress = addEarnedBadges(get().progress, { learnedWords });
    set({ vocabulary: updated, progress: updatedProgress });
    await Promise.all([saveVocabWord(updatedWord), saveProgress(updatedProgress)]);
  },

  // ——— Tutor ———
  sendTutorMessage: (message, mode) => {
    const { profile, progress, tutorMessages } = get();

    const userMsg: TutorMessage = {
      id: `msg-${Date.now()}-user`,
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
      mode,
    };

    const response = generateTutorResponse(message, mode, progress.currentLevel, profile.explanationLanguage);

    const tutorMsg: TutorMessage = {
      id: `msg-${Date.now()}-tutor`,
      role: 'tutor',
      content: response.text,
      timestamp: new Date().toISOString(),
      mode,
      corrections: response.corrections,
    };

    const newHistory = [...tutorMessages, userMsg, tutorMsg];
    set({ tutorMessages: newHistory });
    saveTutorHistory('default', newHistory).catch(console.error);
    get().awardXP(2);
  },

  clearTutorHistory: () => {
    set({ tutorMessages: [] });
    saveTutorHistory('default', []).catch(console.error);
  },

  setTutorMode: (mode) => set({ tutorMode: mode }),

  // ——— Session ———
  startSession: () => {
    const session: StudySession = {
      id: `session-${Date.now()}`,
      date: new Date().toISOString(),
      plannedMinutes: get().profile.dailyStudyMinutes,
      actualMinutes: 0,
      activitiesCompleted: [],
      xpEarned: 0,
      vocabularyReviewed: [],
      grammarCovered: [],
      correctAnswers: 0,
      incorrectAnswers: 0,
      mistakesToRevise: [],
    };
    set({ currentSession: session });
    get().updateStreak();
  },

  endSession: async () => {
    const { currentSession } = get();
    if (!currentSession) return;
    const finalSession = {
      ...currentSession,
      actualMinutes: Math.round((Date.now() - new Date(currentSession.date).getTime()) / 60000),
    };
    await saveSession(finalSession);
    set({ currentSession: null });
  },

  logSessionActivity: (activity) => {
    const { currentSession } = get();
    if (!currentSession) return;
    const updated = {
      ...currentSession,
      activitiesCompleted: [...currentSession.activitiesCompleted, activity],
    };
    set({ currentSession: updated });
  },

  resetAllData: async () => {
    await clearAllData();
    const profile = { ...DEFAULT_PROFILE, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    const progress = createDefaultProgress(profile.id);
    set({
      profile,
      progress,
      vocabulary: ALL_VOCABULARY,
      lessonProgress: {},
      tutorMessages: [],
      currentSession: null,
      xpToast: { show: false, amount: 0 },
    });
    await Promise.all([
      saveProfile(profile),
      saveProgress(progress),
      saveVocabWords(ALL_VOCABULARY),
      saveTutorHistory('default', []),
    ]);
    document.documentElement.classList.toggle('dark', profile.theme === 'dark');
  },

  // ——— UI ———
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setCurrentLesson: (id) => set({ currentLessonId: id }),
  dismissXPToast: () => set({ xpToast: { show: false, amount: 0 } }),
}));
