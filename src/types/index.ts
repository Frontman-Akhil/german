// ============================================================
// GERMAN LANGUAGE LEARNING APP — CORE TYPE DEFINITIONS
// ============================================================

// ——— User Profile & Settings ———
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export type SkillType = 'listening' | 'speaking' | 'reading' | 'writing' | 'grammar' | 'vocabulary';
export type ExamProvider = 'Goethe' | 'telc' | 'ÖSD' | 'None';
export type ExplanationLanguage = 'Hinglish' | 'English' | 'Both';
export type LearningGoal =
  | 'exam'
  | 'ausbildung'
  | 'travel'
  | 'communication'
  | 'work'
  | 'study'
  | 'other';
export type Theme = 'light' | 'dark';

export interface UserProfile {
  id: string;
  name: string;
  currentLevel: CEFRLevel;
  targetLevel: CEFRLevel;
  targetExam: ExamProvider;
  targetExamLevel: CEFRLevel;
  examDate: string | null;
  goals: LearningGoal[];
  explanationLanguage: ExplanationLanguage;
  dailyStudyMinutes: number;
  weakestSkills: SkillType[];
  theme: Theme;
  onboardingCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

// ——— Learning Progress ———
export interface SkillProgress {
  skill: SkillType;
  score: number; // 0-100
  lessonsCompleted: number;
  exercisesCompleted: number;
  lastActivity: string;
}

export interface LevelProgress {
  level: CEFRLevel;
  overallPercent: number;
  unitsCompleted: number;
  totalUnits: number;
  skills: Record<SkillType, SkillProgress>;
  unlocked: boolean;
  completed: boolean;
}

export interface UserProgress {
  userId: string;
  currentLevel: CEFRLevel;
  xp: number;
  streak: number;
  lastStudyDate: string;
  levels: Record<CEFRLevel, LevelProgress>;
  totalStudyMinutes: number;
  badgesEarned: string[];
  weeklyStudyMinutes: number[];
  quizAccuracy: number;
}

// ——— Curriculum Data ———
export type ExerciseType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'true-false'
  | 'matching'
  | 'ordering'
  | 'typing'
  | 'speaking'
  | 'listening'
  | 'flashcard'
  | 'sentence-build';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  questionHinglish?: string;
  questionEnglish?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  explanationHinglish?: string;
  explanationEnglish?: string;
  audioText?: string;
  imageUrl?: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  xpReward: number;
  tags: string[];
}

export interface Lesson {
  id: string;
  level: CEFRLevel;
  moduleId: string;
  title: string;
  titleHinglish: string;
  objective: string;
  objectiveHinglish: string;
  estimatedMinutes: number;
  skillFocus: SkillType[];
  content: LessonContent;
  exercises: Exercise[];
  vocabulary: VocabWord[];
  grammarPoints: string[];
  prerequisites: string[];
  order: number;
  completed?: boolean;
}

export interface LessonContent {
  warmUp?: string[];
  explanation: string;
  explanationHinglish: string;
  examples: GermanExample[];
  realLifeContext: string;
  pronunciationGuide?: PronunciationGuide[];
  culturalNote?: string;
  summary: string[];
}

export interface GermanExample {
  german: string;
  english: string;
  hinglish?: string;
  breakdown?: WordBreakdown[];
  audioText?: string;
}

export interface WordBreakdown {
  word: string;
  role: string;
  meaning: string;
}

export interface PronunciationGuide {
  word: string;
  phonetic: string;
  syllables: string;
  tips: string;
}

export interface Module {
  id: string;
  level: CEFRLevel;
  title: string;
  titleHinglish: string;
  description: string;
  descriptionHinglish: string;
  skills: SkillType[];
  lessons: Lesson[];
  order: number;
  isComplete: boolean;
  isSample?: boolean;
}

// ——— Vocabulary ———
export type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'conjunction' | 'pronoun' | 'article' | 'numeral' | 'interjection' | 'phrase';

export interface VocabWord {
  id: string;
  german: string;
  english: string;
  hinglish: string;
  partOfSpeech: PartOfSpeech;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  verbForms?: { infinitive: string; present3rd: string; pastParticiple: string; auxiliary: string };
  phonetic: string;
  example: string;
  exampleEnglish: string;
  exampleHinglish: string;
  level: CEFRLevel;
  topic: string;
  tags: string[];
  usageNote?: string;
  audioAvailable: boolean;
  // SRS fields
  familiarity: 'new' | 'learning' | 'reviewing' | 'mastered';
  nextReview: string | null;
  interval: number; // days
  easeFactor: number;
  repetitions: number;
  lastReviewDate: string | null;
}

// ——— SRS (Spaced Repetition) ———
export type SRSResponse = 'again' | 'hard' | 'good' | 'easy';

export interface SRSCard {
  wordId: string;
  response: SRSResponse;
  reviewedAt: string;
}

// ——— Grammar ———
export interface GrammarTopic {
  id: string;
  level: CEFRLevel;
  title: string;
  titleHinglish: string;
  category: string;
  explanation: string;
  explanationHinglish: string;
  tables?: GrammarTable[];
  examples: GermanExample[];
  commonErrors: CommonError[];
  exercises: Exercise[];
  order: number;
}

export interface GrammarTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface CommonError {
  wrong: string;
  correct: string;
  explanation: string;
  explanationHinglish?: string;
}

// ——— Reading ———
export interface ReadingPassage {
  id: string;
  level: CEFRLevel;
  title: string;
  type: 'dialogue' | 'email' | 'notice' | 'article' | 'report' | 'essay' | 'letter';
  text: string;
  translation: string;
  questions: Exercise[];
  vocabulary: string[];
  estimatedMinutes: number;
  topic: string;
}

// ——— Exam ———
export interface ExamTemplate {
  id: string;
  provider: ExamProvider;
  level: CEFRLevel;
  sections: ExamSection[];
  totalMinutes: number;
  passingScore: number;
}

export interface ExamSection {
  id: string;
  skill: SkillType;
  title: string;
  instructions: string;
  tasks: ExamTask[];
  timeMinutes: number;
  maxScore: number;
}

export interface ExamTask {
  id: string;
  type: ExerciseType;
  prompt: string;
  content?: string;
  questions: Exercise[];
  timeMinutes?: number;
}

export interface MockExamResult {
  id: string;
  examId: string;
  completedAt: string;
  sectionResults: SectionResult[];
  totalScore: number;
  maxScore: number;
  passed: boolean;
  skillBreakdown: Record<SkillType, number>;
  weakAreas: string[];
}

export interface SectionResult {
  sectionId: string;
  score: number;
  maxScore: number;
  answersGiven: Record<string, string>;
  timeUsed: number;
}

// ——— AI Tutor ———
export type TutorMode =
  | 'explain'
  | 'conversation'
  | 'correct'
  | 'translate'
  | 'quiz'
  | 'hint'
  | 'oral-exam'
  | 'ausbildung-interview'
  | 'why-wrong';

export interface TutorMessage {
  id: string;
  role: 'user' | 'tutor';
  content: string;
  timestamp: string;
  mode?: TutorMode;
  corrections?: Correction[];
}

export interface Correction {
  original: string;
  corrected: string;
  explanation: string;
  explanationHinglish: string;
  example: string;
}

// ——— Achievements ———
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  condition: string;
  earnedAt?: string;
}

// ——— Daily Study Session ———
export interface StudySession {
  id: string;
  date: string;
  plannedMinutes: number;
  actualMinutes: number;
  activitiesCompleted: SessionActivity[];
  xpEarned: number;
  vocabularyReviewed: string[];
  grammarCovered: string[];
  correctAnswers: number;
  incorrectAnswers: number;
  mistakesToRevise: string[];
}

export interface SessionActivity {
  type: SkillType;
  duration: number;
  itemsCompleted: number;
  score: number;
}
