// ============================================================
// REMAINING PAGES: Learning Path, Listening, Reading, Writing,
//                  Revision, Analytics, Settings
// ============================================================

import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  Lock, Check, ChevronRight, Headphones,
  FileText, PenLine, RefreshCw,
  Moon, Sun, Globe, Clock, Trash2,
  CheckCircle, Star, Zap,
  Award, User, Trophy, Save,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, LEVEL_INFO } from '../data/curriculum';
import { getDueCards } from '../lib/srs';
import type { CEFRLevel, ExplanationLanguage, Theme } from '../types';
import {
  SectionHeader, ProgressBar, LevelBadge,
  StatCard, AudioButton, EmptyState,
} from '../components/shared';

// ============================================================
// LEARNING PATH
// ============================================================
export function LearningPath() {
  const { progress, lessonProgress } = useAppStore();
  const [searchParams] = useSearchParams();
  const activeLevel = (searchParams.get('level') as CEFRLevel) || progress.currentLevel;
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(activeLevel);
  const LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const modules = CURRICULUM[selectedLevel] ?? [];
  const levelProg = progress.levels[selectedLevel];

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Learning Path" subtitle="Your complete CEFR journey from A1 to C2" />

      {/* Level Selector */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
        {LEVELS.map(level => {
          const lp = progress.levels[level];
          const isLocked = !lp?.unlocked;
          const isCurrent = level === progress.currentLevel;
          const info = LEVEL_INFO[level];
          return (
            <button
              key={level}
              onClick={() => !isLocked && setSelectedLevel(level)}
              className={clsx(
                'flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-2xl border-2 transition-all min-w-[70px]',
                selectedLevel === level ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' :
                isCurrent ? 'border-brand-300 dark:border-brand-700' :
                isLocked ? 'border-slate-200 dark:border-slate-800 opacity-40 cursor-not-allowed' :
                'border-slate-200 dark:border-slate-700 hover:border-slate-300',
              )}
            >
              <span className="text-xl">{isLocked ? '🔒' : info.emoji}</span>
              <LevelBadge level={level} size="xs" />
              <div className="w-full mt-1">
                <ProgressBar value={lp?.overallPercent ?? 0} color="brand" animated={false} />
              </div>
              <p className="text-[9px] text-slate-400">{lp?.overallPercent ?? 0}%</p>
            </button>
          );
        })}
      </div>

      {/* Level Info */}
      <div className="card p-5 bg-gradient-to-br from-brand-50 dark:from-brand-950/30 to-slate-50 dark:to-slate-800/30">
        <div className="flex items-start gap-4">
          <span className="text-4xl">{LEVEL_INFO[selectedLevel].emoji}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <LevelBadge level={selectedLevel} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {LEVEL_INFO[selectedLevel].name}
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm">{LEVEL_INFO[selectedLevel].description}</p>
            <p className="text-slate-500 text-xs italic mt-1">{LEVEL_INFO[selectedLevel].descriptionHinglish}</p>
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-500">Level Progress</span>
                <span className="text-brand-600 dark:text-brand-400 font-medium">{levelProg?.overallPercent ?? 0}%</span>
              </div>
              <ProgressBar value={levelProg?.overallPercent ?? 0} color="brand" />
            </div>
          </div>
        </div>
      </div>

      {/* Modules */}
      {modules.length === 0 ? (
        <EmptyState icon="🚀" title="Coming soon" description="Content for this level is being prepared." />
      ) : (
        <div className="space-y-4">
          {modules.map((module, mIdx) => {
            const moduleLessons = module.lessons.length;
            const moduleDone = module.lessons.filter(l => lessonProgress[l.id]?.completed).length;
            const isModuleDone = moduleDone === moduleLessons;

            return (
              <div key={module.id} className="card overflow-hidden">
                {/* Module Header */}
                <div className={clsx(
                  'flex items-center gap-3 px-5 py-4',
                  isModuleDone ? 'bg-success-50 dark:bg-success-900/20' : 'bg-white dark:bg-slate-900',
                )}>
                  <div className={clsx(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                    isModuleDone ? 'bg-success-500 text-white' : 'bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300',
                  )}>
                    {isModuleDone ? <Check className="h-5 w-5" /> : mIdx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 dark:text-white">{module.title}</h3>
                    <p className="text-slate-500 text-xs">{module.titleHinglish}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <ProgressBar value={moduleDone} max={moduleLessons} className="w-24" animated={false} />
                      <span className="text-xs text-slate-400">{moduleDone}/{moduleLessons} lessons</span>
                    </div>
                  </div>
                  {module.isSample && <span className="chip-neutral text-[10px]">Sample</span>}
                </div>

                {/* Lessons */}
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {module.lessons.map((lesson, lIdx) => {
                    const done = lessonProgress[lesson.id]?.completed;
                    const score = lessonProgress[lesson.id]?.score;
                    const prevDone = lIdx === 0 || lessonProgress[module.lessons[lIdx - 1]?.id]?.completed;
                    const isUnlocked = Boolean(levelProg?.unlocked) && prevDone;

                    return (
                      <Link
                        key={lesson.id}
                        to={isUnlocked || done ? `/daily-lesson/${lesson.id}` : '#'}
                        className={clsx(
                          'flex items-center gap-3 px-5 py-3 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors',
                          !isUnlocked && !done && 'opacity-50 cursor-not-allowed hover:bg-transparent',
                        )}
                      >
                        <div className={clsx(
                          'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
                          done ? 'bg-success-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500',
                        )}>
                          {done ? <Check className="h-3.5 w-3.5" /> : `${mIdx + 1}.${lIdx + 1}`}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-800 dark:text-white truncate">{lesson.title}</p>
                          <p className="text-xs text-slate-400 truncate">{lesson.titleHinglish}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {done && score !== undefined && (
                            <span className="chip-success text-[10px]">{score}%</span>
                          )}
                          <span className="text-xs text-slate-400">{lesson.estimatedMinutes}m</span>
                          {!done && !isUnlocked && <Lock className="h-3.5 w-3.5 text-slate-400" />}
                          {(done || isUnlocked) && (
                            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// LISTENING LAB
// ============================================================
const LISTENING_EXERCISES = [
  {
    id: 'l1', level: 'A1', title: 'Personal Introduction',
    text: 'Guten Tag! Ich heiße Klaus Müller. Ich komme aus Hamburg. Ich bin 32 Jahre alt und arbeite als Ingenieur. Meine Hobbys sind Fußball und Musik.',
    questions: [
      { id: 'lq1', text: 'Where is Klaus from?', options: ['Berlin', 'Hamburg', 'Munich', 'Frankfurt'], answer: 'Hamburg' },
      { id: 'lq2', text: 'How old is Klaus?', options: ['28', '30', '32', '35'], answer: '32' },
      { id: 'lq3', text: 'What is Klaus\'s job?', options: ['Doctor', 'Teacher', 'Engineer', 'Manager'], answer: 'Engineer' },
    ],
  },
  {
    id: 'l2', level: 'A1', title: 'At the Café',
    text: 'Guten Morgen! Ich hätte gerne einen Kaffee und ein Croissant, bitte. Wie viel kostet das? — Das macht drei Euro fünfzig.',
    questions: [
      { id: 'lq4', text: 'What does the person order?', options: ['Tea and cake', 'Coffee and croissant', 'Juice and bread', 'Water and cake'], answer: 'Coffee and croissant' },
      { id: 'lq5', text: 'How much does it cost?', options: ['€2.50', '€3.00', '€3.50', '€4.00'], answer: '€3.50' },
    ],
  },
  {
    id: 'l3', level: 'A2', title: 'Weather Forecast',
    text: 'Und nun die Wettervorhersage für morgen: In Berlin wird es sonnig und warm, etwa 22 Grad. Im Süden regnet es, besonders in Bayern und Baden-Württemberg.',
    questions: [
      { id: 'lq6', text: 'What will the weather be in Berlin?', options: ['Rainy and cold', 'Sunny and warm', 'Cloudy and mild', 'Windy and cool'], answer: 'Sunny and warm' },
      { id: 'lq7', text: 'Where will it rain?', options: ['Berlin', 'Hamburg', 'Bayern', 'Hannover'], answer: 'Bayern' },
    ],
  },
];

export function ListeningLab() {
  const { awardXP } = useAppStore();
  const [selected, setSelected] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [plays, setPlays] = useState(0);

  const handleAnswer = (qId: string, ans: string) => {
    if (!submitted) setAnswers(prev => ({ ...prev, [qId]: ans }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const correct = selected.questions.filter((q: any) => answers[q.id] === q.answer).length;
    const pct = Math.round((correct / selected.questions.length) * 100);
    awardXP(pct >= 70 ? 15 : 5);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Listening Lab" subtitle="Train your German ear with audio exercises" />

      {!selected ? (
        <div className="space-y-3">
          {LISTENING_EXERCISES.map(ex => (
            <button key={ex.id} onClick={() => { setSelected(ex); setAnswers({}); setSubmitted(false); setPlays(0); }}
              className="w-full card card-hover p-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
                  <Headphones className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <LevelBadge level={ex.level as any} size="xs" />
                    <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{ex.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs">{ex.questions.length} questions</p>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 ml-auto" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          <button onClick={() => setSelected(null)} className="btn-ghost btn-sm">← Back</button>
          <div className="card p-5 space-y-4">
            <h2 className="font-bold text-slate-900 dark:text-white">{selected.title}</h2>

            {/* Audio player */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-5 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center shadow-lg">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <AudioButton text={selected.text} label="Play listening exercise" size="lg" onClick={() => setPlays(count => count + 1)} />
              <p className="text-xs text-teal-600 dark:text-teal-400">
                🔊 Played {plays} {plays === 1 ? 'time' : 'times'} • Listen carefully before answering
              </p>
              <p className="text-[10px] text-slate-400 text-center">
                ℹ️ Using browser text-to-speech. German language voices recommended.
              </p>
            </div>

            {/* Transcript (after submission) */}
            {submitted && (
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                <p className="text-xs font-semibold text-slate-500 mb-2">📄 Transcript:</p>
                <p className="german-text text-sm leading-relaxed">{selected.text}</p>
              </div>
            )}

            {/* Questions */}
            <div className="space-y-4">
              {selected.questions.map((q: any, i: number) => (
                <div key={q.id}>
                  <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">Q{i + 1}. {q.text}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt: string) => (
                      <button key={opt} onClick={() => handleAnswer(q.id, opt)}
                        className={clsx('px-3 py-2 rounded-xl border-2 text-sm text-left transition-all',
                          !submitted ? answers[q.id] === opt ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                          : opt === q.answer ? 'border-success-500 bg-success-50 dark:bg-success-900/20' : answers[q.id] === opt ? 'border-danger-500 bg-danger-50 dark:bg-danger-900/20' : 'border-slate-200 dark:border-slate-700 opacity-50',
                        )}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!submitted ? (
              <button onClick={handleSubmit} disabled={Object.keys(answers).length < selected.questions.length} className="btn-brand w-full">
                Submit Answers
              </button>
            ) : (
              <div>
                <div className={clsx('rounded-2xl p-4 border-2', (() => {
                  const c = selected.questions.filter((q: any) => answers[q.id] === q.answer).length;
                  return c / selected.questions.length >= 0.7 ? 'border-success-400 bg-success-50 dark:bg-success-900/20' : 'border-danger-400 bg-danger-50 dark:bg-danger-900/20';
                })())}>
                  <p className="font-bold text-slate-800 dark:text-white">
                    Score: {selected.questions.filter((q: any) => answers[q.id] === q.answer).length}/{selected.questions.length}
                  </p>
                </div>
                <button onClick={() => setSelected(null)} className="btn-ghost w-full mt-3">Back to exercises</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// READING PRACTICE
// ============================================================
const READING_TEXTS = [
  {
    id: 'r1', level: 'A1', title: 'Ein Brief von Maria',
    text: `Liebe Anna,

wie geht es dir? Ich bin jetzt in Berlin. Die Stadt ist wirklich schön! Ich wohne in einer kleinen Wohnung in Mitte. Ich lerne jeden Tag Deutsch — es ist schwer, aber interessant.

Mein Deutschkurs beginnt um neun Uhr morgens. Dann esse ich zu Mittag in einem Café. Am Nachmittag gehe ich spazieren oder lerne zu Hause.

Berlin hat viele Museen, Parks und Restaurants. Am Wochenende besuche ich den Tiergarten — das ist ein großer Park. Es gibt viele Menschen und Hunde dort!

Bitte schreib mir bald!
Liebe Grüße,
Maria`,
    questions: [
      { id: 'rq1', text: 'Where is Maria now?', options: ['Munich', 'Berlin', 'Hamburg', 'Vienna'], answer: 'Berlin' },
      { id: 'rq2', text: 'When does her German course begin?', options: ['8:00', '9:00', '10:00', '11:00'], answer: '9:00' },
      { id: 'rq3', text: 'What does she do on weekends?', options: ['Visits museums', 'Goes to restaurants', 'Visits the Tiergarten', 'Learns at home'], answer: 'Visits the Tiergarten' },
      { id: 'rq4', text: 'How does Maria describe the city?', options: ['Boring', 'Expensive', 'Very beautiful', 'Very loud'], answer: 'Very beautiful' },
    ],
    vocabHelp: [
      { word: 'wirklich', meaning: 'really / waqai mein' },
      { word: 'schwer', meaning: 'difficult / mushkil' },
      { word: 'beginnt', meaning: 'begins / shuru hota hai' },
      { word: 'besuche', meaning: 'visit / jaata hoon' },
    ],
  },
];

export function ReadingPractice() {
  const { awardXP } = useAppStore();
  const [selected, setSelected] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Reading Practice" subtitle="Graded German texts with comprehension questions" />

      {!selected ? (
        <div className="space-y-3">
          {READING_TEXTS.map(text => (
            <button key={text.id} onClick={() => { setSelected(text); setAnswers({}); setSubmitted(false); }}
              className="w-full card card-hover p-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-900/30 text-rose-600">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <LevelBadge level={text.level as any} size="xs" />
                    <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{text.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs">{text.questions.length} questions</p>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 ml-auto" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-5">
          <button onClick={() => setSelected(null)} className="btn-ghost btn-sm">← Back</button>
          <div className="card p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-slate-900 dark:text-white">{selected.title}</h2>
              <AudioButton text={selected.text} label="Listen to text" size="sm" />
            </div>

            {/* Text */}
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 border border-slate-200 dark:border-slate-700">
              <p className="german-text text-sm leading-relaxed whitespace-pre-line">{selected.text}</p>
            </div>

            {/* Vocab Help */}
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 Vocabulary Help:</p>
              <div className="grid grid-cols-2 gap-2">
                {selected.vocabHelp.map((v: any) => (
                  <div key={v.word} className="flex gap-2">
                    <span className="german-text text-amber-800 dark:text-amber-200 text-xs font-semibold">{v.word}</span>
                    <span className="text-amber-700 dark:text-amber-300 text-xs">= {v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {selected.questions.map((q: any, i: number) => (
                <div key={q.id}>
                  <p className="font-medium text-slate-800 dark:text-white text-sm mb-2">Q{i + 1}. {q.text}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {q.options.map((opt: string) => (
                      <button key={opt} onClick={() => !submitted && setAnswers(prev => ({ ...prev, [q.id]: opt }))}
                        className={clsx('px-3 py-2 rounded-xl border-2 text-sm text-left transition-all',
                          !submitted ? answers[q.id] === opt ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                          : opt === q.answer ? 'border-success-500 bg-success-50 dark:bg-success-900/20' : answers[q.id] === opt ? 'border-danger-500 bg-danger-50 dark:bg-danger-900/20' : 'border-slate-200 dark:border-slate-700 opacity-50',
                        )}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {!submitted ? (
              <button onClick={() => { setSubmitted(true); const c = selected.questions.filter((q: any) => answers[q.id] === q.answer).length; awardXP(c * 5); }} className="btn-brand w-full">Submit</button>
            ) : (
              <div>
                <p className="font-bold text-slate-800 dark:text-white">
                  Score: {selected.questions.filter((q: any) => answers[q.id] === q.answer).length}/{selected.questions.length}
                </p>
                <button onClick={() => setSelected(null)} className="btn-ghost w-full mt-3">Back to texts</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// WRITING COACH
// ============================================================
export function WritingCoach() {
  const { awardXP, sendTutorMessage } = useAppStore();
  const [selected, setSelected] = useState<any>(null);
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [awardedPrompts, setAwardedPrompts] = useState<Record<string, boolean>>({});
  const alreadyAwarded = selected ? Boolean(awardedPrompts[selected.id]) : false;

  const prompts = [
    { id: 'w1', level: 'A1', title: 'Self Introduction', prompt: 'Write a short self-introduction in German (3–5 sentences). Include: name, where you are from, age, and what you are learning.', example: 'Ich heiße [Name]. Ich komme aus Indien. Ich bin [Alter] Jahre alt. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.', wordCount: '30-50 words' },
    { id: 'w2', level: 'A1', title: 'Fill in a form', prompt: 'Fill in the Anmeldeformular (registration form) with your personal details.', example: 'Vorname: [Name]\nNachname: [Nachname]\nGeburtsdatum: [Date]\nAdresse: [Address]\nNationalität: Indisch', wordCount: 'Form fields' },
    { id: 'w3', level: 'A2', title: 'Email to a friend', prompt: 'Write an email to your German friend inviting them to a dinner at your home.', example: 'Liebe/r [Name],\nichich möchte dich zu einem Abendessen einladen. Es findet am Samstag statt. Ich koche indisches Essen.\n\nLiebe Grüße,\n[Name]', wordCount: '60-80 words' },
    { id: 'w4', level: 'B1', title: 'Motivation Letter (Ausbildung)', prompt: 'Write a short motivation letter (Motivationsschreiben) for an Ausbildung position. Explain why you want this Ausbildung and what makes you a good candidate.', example: 'Sehr geehrte Damen und Herren,\n\nhiermit bewerbe ich mich um den Ausbildungsplatz als [Beruf]...\n\nMit freundlichen Grüßen,\n[Name]', wordCount: '100-150 words' },
  ];

  const checkWithTutor = () => {
    if (!text.trim() || !selected || alreadyAwarded) return;
    sendTutorMessage(`Please check my German writing and correct any mistakes:\n\n"${text}"`, 'correct');
    setFeedback('Feedback sent to AI Tutor! Check the Tutor page for corrections.');
    setAwardedPrompts(prev => ({ ...prev, [selected.id]: true }));
    awardXP(15);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Writing Coach" subtitle="Practice German writing with expert feedback" />

      {!selected ? (
        <div className="space-y-3">
          {prompts.map(p => (
            <button key={p.id} onClick={() => { setSelected(p); setText(''); setFeedback(null); }}
              className="w-full card card-hover p-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-50 dark:bg-violet-900/30 text-violet-600">
                  <PenLine className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <LevelBadge level={p.level as any} size="xs" />
                    <h3 className="font-semibold text-slate-800 dark:text-white text-sm">{p.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs">{p.wordCount}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 ml-auto" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <button onClick={() => { setSelected(null); setFeedback(null); }} className="btn-ghost btn-sm">← Back</button>
          <div className="card p-5 space-y-4">
            <div className="flex items-center gap-2">
              <LevelBadge level={selected.level} size="xs" />
              <h2 className="font-bold text-slate-900 dark:text-white">{selected.title}</h2>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-200 font-medium mb-2">📝 Task:</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{selected.prompt}</p>
              <p className="text-xs text-slate-400 mt-2">Target: {selected.wordCount}</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">💡 Example structure:</p>
              <p className="german-text text-xs leading-relaxed whitespace-pre-line text-amber-800 dark:text-amber-200">{selected.example}</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Your Writing:</p>
                <span className="text-xs text-slate-400">{text.split(/\s+/).filter(Boolean).length} words</span>
              </div>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Schreiben Sie hier auf Deutsch... (Write here in German...)"
                className="textarea min-h-[200px]"
              />
            </div>

            <div className="flex gap-2">
              <button onClick={checkWithTutor} disabled={text.trim().length < 10 || alreadyAwarded} className="btn-brand flex-1">
                <CheckCircle className="h-4 w-4" /> {alreadyAwarded ? 'Sent' : 'Check with Tutor'}
              </button>
              <button onClick={() => { setText(''); setFeedback(null); }} className="btn-ghost">Clear</button>
            </div>

            {feedback && (
              <div className="bg-success-50 dark:bg-success-900/20 border border-success-400 rounded-xl p-3 text-sm text-success-700 dark:text-success-300">
                ✅ {feedback}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// REVISION CENTRE
// ============================================================
export function RevisionCentre() {
  const { vocabulary } = useAppStore();

  const dueCards = useMemo(() => getDueCards(vocabulary), [vocabulary]);

  const weakWords = useMemo(() =>
    vocabulary.filter(w => w.easeFactor < 1.8 && w.familiarity !== 'new').slice(0, 10),
    [vocabulary]
  );

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Revision Centre" subtitle="Review what you know and strengthen weak areas" />

      <div className="grid grid-cols-3 gap-3">
        <StatCard icon={<RefreshCw className="h-5 w-5" />} label="Due Cards" value={dueCards.length} color={dueCards.length > 0 ? 'danger' : 'success'} />
        <StatCard icon={<Star className="h-5 w-5" />} label="Weak Words" value={weakWords.length} color="gold" />
        <StatCard icon={<CheckCircle className="h-5 w-5" />} label="Mastered" value={vocabulary.filter(v => v.familiarity === 'mastered').length} color="success" />
      </div>

      {dueCards.length > 0 && (
        <Link to="/vocabulary" className="card card-hover p-5 flex items-center gap-4 block">
          <div className="p-3 rounded-xl bg-danger-50 dark:bg-danger-900/30 text-danger-600"><RefreshCw className="h-6 w-6" /></div>
          <div>
            <p className="font-bold text-slate-800 dark:text-white">{dueCards.length} cards due for review</p>
            <p className="text-sm text-slate-500">Review now to maintain your streak</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400 ml-auto" />
        </Link>
      )}

      {weakWords.length > 0 && (
        <div className="card p-5">
          <h3 className="font-bold text-slate-800 dark:text-white mb-3">⚠️ Words to Strengthen</h3>
          <div className="space-y-2">
            {weakWords.map(w => (
              <div key={w.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3">
                  <AudioButton text={w.german} size="sm" />
                  <div>
                    <p className="german-text font-bold text-sm">{w.article ? `${w.article} ` : ''}{w.german}</p>
                    <p className="text-slate-500 text-xs">{w.english}</p>
                  </div>
                </div>
                <span className="chip-danger text-[10px]">Ease: {w.easeFactor.toFixed(1)}</span>
              </div>
            ))}
          </div>
          <Link to="/vocabulary" className="btn-brand btn-sm mt-4 w-full text-center block">
            Review All in Flashcards →
          </Link>
        </div>
      )}

      {dueCards.length === 0 && weakWords.length === 0 && (
        <EmptyState icon="🎉" title="All caught up!" description="You have no cards due and no weak words. Keep learning!" />
      )}
    </div>
  );
}

// ============================================================
// ANALYTICS
// ============================================================
export function Analytics() {
  const { progress, vocabulary } = useAppStore();

  const skillScores = Object.entries(progress.levels[progress.currentLevel]?.skills ?? {});
  const vocabStats = {
    new: vocabulary.filter(v => v.familiarity === 'new').length,
    learning: vocabulary.filter(v => v.familiarity === 'learning').length,
    reviewing: vocabulary.filter(v => v.familiarity === 'reviewing').length,
    mastered: vocabulary.filter(v => v.familiarity === 'mastered').length,
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Progress & Analytics" subtitle="Track your German learning journey" />

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={<Star className="h-5 w-5" />} label="Total XP" value={progress.xp.toLocaleString()} color="gold" subtitle="experience points" />
        <StatCard icon={<Zap className="h-5 w-5" />} label="Day Streak" value={progress.streak} color="brand" subtitle="days in a row" />
        <StatCard icon={<Clock className="h-5 w-5" />} label="Total Study" value={`${Math.round(progress.totalStudyMinutes / 60)}h`} color="teal" subtitle="total hours" />
        <StatCard icon={<Award className="h-5 w-5" />} label="Badges" value={progress.badgesEarned.length} color="success" subtitle="earned" />
      </div>

      {/* Current Level */}
      <div className="card p-5">
        <h3 className="font-bold text-slate-800 dark:text-white mb-4">Current Level: {progress.currentLevel}</h3>
        <div className="space-y-3">
          {skillScores.map(([skill, data]: [string, any]) => (
            <div key={skill}>
              <div className="flex justify-between text-xs mb-1">
                <span className="capitalize text-slate-600 dark:text-slate-300">{skill}</span>
                <span className="text-brand-600 dark:text-brand-400 font-medium">{data.score}%</span>
              </div>
              <ProgressBar value={data.score} color="brand" animated={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Breakdown */}
      <div className="card p-5">
        <h3 className="font-bold text-slate-800 dark:text-white mb-4">Vocabulary Mastery</h3>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'New', value: vocabStats.new, color: 'text-slate-500' },
            { label: 'Learning', value: vocabStats.learning, color: 'text-brand-600 dark:text-brand-400' },
            { label: 'Reviewing', value: vocabStats.reviewing, color: 'text-gold-600' },
            { label: 'Mastered', value: vocabStats.mastered, color: 'text-success-600' },
          ].map(({ label, value, color }) => (
            <div key={label} className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50">
              <p className={clsx('text-3xl font-bold', color)}>{value}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Level Progress */}
      <div className="card p-5">
        <h3 className="font-bold text-slate-800 dark:text-white mb-3">CEFR Journey</h3>
        {(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as CEFRLevel[]).map(level => {
          const lp = progress.levels[level];
          return (
            <div key={level} className="flex items-center gap-3 mb-2">
              <LevelBadge level={level} size="xs" />
              <ProgressBar value={lp?.overallPercent ?? 0} className="flex-1" animated={false} />
              <span className="text-xs text-slate-400 w-10 text-right">{lp?.overallPercent ?? 0}%</span>
              {lp?.completed && <CheckCircle className="h-4 w-4 text-success-500" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// SETTINGS
// ============================================================
export function Settings() {
  const { profile, updateProfile, clearTutorHistory, resetAllData } = useAppStore();
  const [name, setName] = useState(profile.name);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await updateProfile({ name, dailyStudyMinutes: profile.dailyStudyMinutes });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-5 animate-fade-in max-w-lg">
      <SectionHeader title="Settings" subtitle="Customize your learning experience" />

      {/* Profile */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <User className="h-5 w-5 text-brand-600" /> Profile
        </h2>
        <div>
          <label className="label-text">Your Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="input" />
        </div>
        <div>
          <label className="label-text">Daily Study Goal (minutes)</label>
          <div className="grid grid-cols-3 gap-2">
            {[15, 30, 45, 60, 90, 120].map(m => (
              <button key={m} onClick={() => updateProfile({ dailyStudyMinutes: m })}
                className={clsx('py-2 rounded-xl border-2 text-sm font-medium transition-all',
                  profile.dailyStudyMinutes === m ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300' : 'border-slate-200 dark:border-slate-700')}>
                {m} min
              </button>
            ))}
          </div>
        </div>
        <button onClick={handleSave} className="btn-brand">
          <Save className="h-4 w-4" /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      {/* Appearance */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          {profile.theme === 'dark' ? <Moon className="h-5 w-5 text-brand-600" /> : <Sun className="h-5 w-5 text-gold-500" />} Appearance
        </h2>
        <div className="flex gap-2">
          {([
            { id: 'dark', label: 'Dark Mode', icon: <Moon className="h-4 w-4" /> },
            { id: 'light', label: 'Light Mode', icon: <Sun className="h-4 w-4" /> },
          ] as const).map(({ id, label, icon }) => (
            <button key={id} onClick={() => updateProfile({ theme: id as Theme })}
              className={clsx('flex items-center gap-2 flex-1 py-2.5 rounded-xl border-2 text-sm font-medium transition-all',
                profile.theme === id ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300' : 'border-slate-200 dark:border-slate-700')}>
              {icon} {label}
            </button>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="card p-5 space-y-3">
        <h2 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Globe className="h-5 w-5 text-teal-600" /> Explanation Language
        </h2>
        {([
          { id: 'Both', label: 'Hinglish + English', desc: 'Best of both worlds' },
          { id: 'Hinglish', label: 'Hinglish only', desc: 'Hindi in Roman script' },
          { id: 'English', label: 'English only', desc: 'Standard English' },
        ] as const).map(({ id, label, desc }) => (
          <button key={id} onClick={() => updateProfile({ explanationLanguage: id as ExplanationLanguage })}
            className={clsx('w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
              profile.explanationLanguage === id ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' : 'border-slate-200 dark:border-slate-700')}>
            <p className="font-semibold text-slate-800 dark:text-white text-sm">{label}</p>
            <p className="text-slate-500 text-xs">{desc}</p>
          </button>
        ))}
      </div>

      {/* Exam Settings */}
      <div className="card p-5 space-y-3">
        <h2 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-gold-500" /> Exam Settings
        </h2>
        <div>
          <label className="label-text">Target Exam</label>
          <select value={profile.targetExam} onChange={e => updateProfile({ targetExam: e.target.value as any })} className="input">
            {['Goethe', 'telc', 'ÖSD', 'None'].map(e => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>
        <div>
          <label className="label-text">Target Level</label>
          <select value={profile.targetLevel} onChange={e => updateProfile({ targetLevel: e.target.value as CEFRLevel })} className="input">
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        {profile.targetExam !== 'None' && (
          <div>
            <label className="label-text">Exam Date (optional)</label>
            <input type="date" value={profile.examDate ?? ''} onChange={e => updateProfile({ examDate: e.target.value || null })} className="input" />
          </div>
        )}
      </div>

      {/* Data Management */}
      <div className="card p-5 space-y-3">
        <h2 className="font-bold text-slate-800 dark:text-white flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-danger-600" /> Data Management
        </h2>
        <button onClick={() => { if (confirm('Clear tutor conversation history?')) clearTutorHistory(); }}
          className="btn-outline w-full text-danger-600 dark:text-danger-400 border-danger-300 dark:border-danger-700">
          <Trash2 className="h-4 w-4" /> Clear Tutor History
        </button>
        <button
          onClick={() => {
            if (confirm('Reset ALL progress, vocabulary, exam results, and settings? This cannot be undone.')) {
              void resetAllData();
            }
          }}
          className="btn-outline w-full text-danger-600 dark:text-danger-400 border-danger-300 dark:border-danger-700"
        >
          <Trash2 className="h-4 w-4" /> Reset All Progress
        </button>
        <p className="text-xs text-slate-400">Your vocabulary and lesson progress are stored locally in your browser and never sent to any server.</p>
      </div>

      {/* About */}
      <div className="card p-4 text-center">
        <p className="text-xs text-slate-500">DeutschMeister v1.0 • Built for German Language Learners</p>
        <p className="text-xs text-slate-400 mt-0.5">Works offline • No account required • Free forever</p>
      </div>
    </div>
  );
}

// lucide-react icons used above
