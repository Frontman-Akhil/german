// ============================================================
// DAILY LESSON ENGINE — Full interactive lesson player
// ============================================================

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clsx } from 'clsx';
import {
  ChevronRight, BookOpen, Check,
  Star, RotateCcw, CheckCircle, Target, Lightbulb,
  ArrowLeft, List, Play,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { CURRICULUM, getLessonById } from '../data/curriculum';
import type { Exercise } from '../types';
import {
  ProgressBar, AudioButton, AnswerFeedback, LevelBadge,
  SectionHeader, EmptyState, GermanPhrase,
} from '../components/shared';

// ——— Lesson List (pick a lesson) ———
export function DailyLesson() {
  const { progress, lessonProgress } = useAppStore();
  const currentModules = CURRICULUM[progress.currentLevel] ?? [];

  return (
    <div className="space-y-6 animate-fade-in">
      <SectionHeader
        title="Daily Lesson"
        subtitle={`${progress.currentLevel} curriculum • Aaj ka lesson`}
      />

      {currentModules.map(module => (
        <div key={module.id} className="card p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-brand-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-slate-800 dark:text-white">{module.title}</h2>
                {module.isSample && <span className="chip-neutral text-[10px]">Sample</span>}
              </div>
              <p className="text-slate-500 text-xs">{module.titleHinglish}</p>
            </div>
          </div>

          <div className="space-y-2">
            {module.lessons.map((lesson, idx) => {
              const done = lessonProgress[lesson.id]?.completed;
              const score = lessonProgress[lesson.id]?.score;
              const isUnlocked = idx === 0 || lessonProgress[module.lessons[idx - 1]?.id]?.completed;

              return (
                <Link
                  key={lesson.id}
                  to={isUnlocked ? `/daily-lesson/${lesson.id}` : '#'}
                  className={clsx(
                    'flex items-center gap-3 p-3 rounded-xl border-2 transition-all group',
                    done
                      ? 'border-success-400 bg-success-50 dark:bg-success-900/20'
                      : isUnlocked
                      ? 'border-slate-200 dark:border-slate-700 hover:border-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/30'
                      : 'border-slate-200 dark:border-slate-800 opacity-50 cursor-not-allowed',
                  )}
                >
                  <div className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                    done ? 'bg-success-500 text-white' : isUnlocked ? 'bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300' : 'bg-slate-200 dark:bg-slate-700 text-slate-400',
                  )}>
                    {done ? <Check className="h-4 w-4" /> : idx + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-800 dark:text-white text-sm truncate">{lesson.title}</p>
                    <p className="text-slate-500 text-xs truncate">{lesson.titleHinglish}</p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {done && score !== undefined && (
                      <span className="chip-success text-[10px]">{score}%</span>
                    )}
                    <span className="text-xs text-slate-400">{lesson.estimatedMinutes}m</span>
                    {isUnlocked && !done && (
                      <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-brand-500 transition-colors" />
                    )}
                    {!isUnlocked && <span className="text-slate-400">🔒</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ——— Exercise Engine ———
function ExercisePlayer({
  exercise,
  lang,
  onAnswer,
}: {
  exercise: Exercise;
  lang: string;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [typed, setTyped] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [built, setBuilt] = useState<string[]>([]);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [activePhrase, setActivePhrase] = useState<string | null>(null);

  const pairs = (exercise.options ?? []).map(option => {
    const [german, english] = option.split('|').map(part => part.trim());
    return { german, english };
  });
  const meanings = pairs.map(pair => pair.english).reverse();

  const isCorrect = () => {
    const answer = Array.isArray(exercise.correctAnswer)
      ? exercise.correctAnswer[0]
      : exercise.correctAnswer;
    if (exercise.type === 'ordering') {
      return built.join(' ').toLowerCase().replace(/[.,!?]/g, '') === answer.toLowerCase().replace(/[.,!?]/g, '');
    }
    if (exercise.type === 'matching') {
      return pairs.length > 0 && pairs.every(pair => matches[pair.german] === pair.english);
    }
    const given = exercise.type === 'fill-blank' || exercise.type === 'typing' ? typed.trim() : selected;
    return given?.toLowerCase().replace(/[.,!?]/g, '') === answer?.toLowerCase().replace(/[.,!?]/g, '');
  };

  const canSubmit = exercise.type === 'ordering'
    ? built.length > 0
    : exercise.type === 'matching'
    ? Object.keys(matches).length === pairs.length
    : Boolean(selected || typed.trim());

  const handleSubmit = () => {
    if (submitted || !canSubmit) return;
    setSubmitted(true);
    onAnswer(isCorrect());
  };

  const correct = submitted ? isCorrect() : null;

  return (
    <div className="space-y-4">
      {/* Question */}
      <div className="rounded-2xl bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/50 p-4">
        <p className="font-semibold text-slate-800 dark:text-white">{exercise.question}</p>
        {exercise.questionHinglish && lang !== 'English' && (
          <p className="text-slate-500 text-sm italic mt-1">{exercise.questionHinglish}</p>
        )}
      </div>

      {/* Answer input */}
      {exercise.type === 'matching' ? (
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            {pairs.map(pair => (
              <button
                key={pair.german}
                disabled={submitted}
                onClick={() => {
                  if (submitted) return;
                  if (matches[pair.german]) {
                    const next = { ...matches };
                    delete next[pair.german];
                    setMatches(next);
                  }
                  setActivePhrase(pair.german);
                }}
                className={clsx(
                  'w-full min-h-14 rounded-xl border-2 px-3 py-2 text-left text-sm font-medium transition-all',
                  activePhrase === pair.german
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                    : matches[pair.german]
                    ? 'border-success-400 bg-success-50 dark:bg-success-900/20'
                    : 'border-slate-200 dark:border-slate-700',
                )}
              >
                <span className="block">{pair.german}</span>
                {matches[pair.german] && (
                  <span className="block text-[10px] font-normal text-success-600 mt-1">{matches[pair.german]}</span>
                )}
              </button>
            ))}
          </div>
          <div className="space-y-2">
            {meanings.map(meaning => {
              const used = Object.values(matches).includes(meaning);
              return (
                <button
                  key={meaning}
                  disabled={submitted || !activePhrase || used}
                  onClick={() => {
                    if (!activePhrase || submitted) return;
                    setMatches(prev => ({ ...prev, [activePhrase]: meaning }));
                    setActivePhrase(null);
                  }}
                  className={clsx(
                    'w-full min-h-14 rounded-xl border-2 px-3 py-2 text-left text-sm transition-all',
                    used
                      ? 'border-success-400 bg-success-50 dark:bg-success-900/20 opacity-60'
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300',
                  )}
                >
                  {meaning}
                </button>
              );
            })}
          </div>
        </div>
      ) : exercise.type === 'ordering' ? (
        <div className="space-y-3">
          <div className="min-h-14 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 p-3 flex flex-wrap items-center gap-2">
            {built.length === 0 && <span className="text-xs text-slate-400">Tap words in the correct order...</span>}
            {built.map((word, index) => (
              <button
                key={`${word}-${index}`}
                disabled={submitted}
                onClick={() => setBuilt(prev => prev.filter((_, i) => i !== index))}
                className="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-sm font-medium"
              >
                {word}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(exercise.options ?? []).map((option, index) => {
              const used = built.filter(word => word === option).length;
              const available = (exercise.options ?? []).filter(word => word === option).length;
              return (
                <button
                  key={`${option}-${index}`}
                  disabled={submitted || used >= available}
                  onClick={() => setBuilt(prev => [...prev, option])}
                  className="px-3 py-2 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-sm font-medium disabled:opacity-30"
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ) : (exercise.type === 'multiple-choice' || exercise.type === 'fill-blank') && exercise.options && exercise.options.length > 0 ? (
        <div className="grid grid-cols-1 gap-2">
          {exercise.options.map((opt) => (
            <button
              key={opt}
              disabled={submitted}
              onClick={() => { setSelected(opt); setTyped(''); }}
              className={clsx(
                'w-full text-left px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium',
                !submitted
                  ? selected === opt
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-200'
                  : opt === (Array.isArray(exercise.correctAnswer) ? exercise.correctAnswer[0] : exercise.correctAnswer)
                  ? 'border-success-500 bg-success-50 dark:bg-success-900/20 text-success-700 dark:text-success-300'
                  : selected === opt
                  ? 'border-danger-500 bg-danger-50 dark:bg-danger-900/20 text-danger-700 dark:text-danger-300'
                  : 'border-slate-200 dark:border-slate-700 opacity-50 text-slate-500',
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={typed}
            onChange={e => setTyped(e.target.value)}
            disabled={submitted}
            placeholder="Type your answer here..."
            className="input"
            onKeyDown={e => e.key === 'Enter' && !submitted && typed.trim() && handleSubmit()}
          />
        </div>
      )}

      {/* Submit */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="btn-brand w-full"
        >
          Check Answer
        </button>
      ) : (
        <AnswerFeedback
          correct={correct!}
          explanation={exercise.explanation}
          explanationHinglish={exercise.explanationHinglish}
          lang={lang}
        />
      )}
    </div>
  );
}

// ——— Full Lesson Player ———
export function LessonPlayer() {
  const { lessonId } = useParams();
  const {
    profile, completeLesson, completeLessonExercise, startSession, endSession,
  } = useAppStore();

  const lesson = lessonId ? getLessonById(lessonId) : null;
  const [phase, setPhase] = useState<'content' | 'exercises' | 'complete'>('content');
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [exerciseAnswered, setExerciseAnswered] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const lang = profile.explanationLanguage;

  useEffect(() => {
    if (!lesson) return;
    startSession();
    return () => { void endSession(); };
  }, [lesson, startSession, endSession]);

  if (!lesson) {
    return (
      <div className="space-y-6">
        <Link to="/daily-lesson" className="btn-ghost btn-sm inline-flex"><ArrowLeft className="h-4 w-4" /> Back</Link>
        <EmptyState icon="📚" title="Lesson not found" description="This lesson could not be loaded." />
      </div>
    );
  }

  const totalExercises = lesson.exercises.length;
  const currentExercise = lesson.exercises[exerciseIndex];

  const handleExerciseAnswer = (correct: boolean) => {
    setExerciseAnswered(true);
    const reward = currentExercise?.xpReward ?? 10;
    completeLessonExercise(lesson.id, correct, reward);
    if (correct) setEarnedXP(prev => prev + reward);
    setScore(prev => ({ correct: prev.correct + (correct ? 1 : 0), total: prev.total + 1 }));
  };

  const handleNextExercise = () => {
    if (exerciseIndex < totalExercises - 1) {
      setExerciseIndex(prev => prev + 1);
      setExerciseAnswered(false);
    } else {
      const finalScore = Math.round((score.correct / Math.max(score.total, 1)) * 100);
      void completeLesson(lesson.id, finalScore);
      setPhase('complete');
    }
  };

  if (phase === 'complete') {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-6 animate-fade-in py-10">
        <div className="text-7xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚'}</div>
        <div className="card p-6">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1">Lesson Complete!</h2>
          <p className="text-slate-500 text-sm mb-6">{lesson.title}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-600">{pct}%</p>
              <p className="text-xs text-slate-500">Score</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-success-600">{score.correct}</p>
              <p className="text-xs text-slate-500">Correct</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gold-600">+{earnedXP + Math.round(score.correct * 0.5)}</p>
              <p className="text-xs text-slate-500">XP Earned</p>
            </div>
          </div>

          <div className="text-left bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 mb-6">
            <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-2">📝 What you learned:</p>
            <ul className="space-y-1">
              {lesson.content.summary.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle className="h-3.5 w-3.5 text-success-500 flex-shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Link to="/daily-lesson" className="btn-brand w-full">
              Continue to Next Lesson →
            </Link>
            <button onClick={() => {
              setPhase('content');
              setExerciseIndex(0);
              setScore({ correct: 0, total: 0 });
              setExerciseAnswered(false);
              setEarnedXP(0);
            }} className="btn-ghost w-full">
              <RotateCcw className="h-4 w-4" /> Review Lesson
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link to="/daily-lesson" className="btn-ghost btn-icon">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <LevelBadge level={lesson.level} size="xs" />
            <span className="text-xs text-slate-400">~{lesson.estimatedMinutes} min</span>
          </div>
          <h1 className="font-bold text-slate-900 dark:text-white truncate">{lesson.title}</h1>
        </div>
        <button
          onClick={() => setPhase(phase === 'content' ? 'exercises' : 'content')}
          className="btn-outline btn-sm"
        >
          {phase === 'content' ? <><List className="h-4 w-4" /> Exercises</> : <><BookOpen className="h-4 w-4" /> Content</>}
        </button>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>{phase === 'content' ? 'Reading content' : `Exercise ${exerciseIndex + 1} of ${totalExercises}`}</span>
          <span>{phase === 'exercises' ? `${score.correct} correct` : 'Content'}</span>
        </div>
        <ProgressBar
          value={phase === 'content' ? 30 : 30 + (exerciseIndex / totalExercises) * 70}
          color="brand"
        />
      </div>

      {/* Content Phase */}
      {phase === 'content' && (
        <div className="space-y-5">
          {/* Objective */}
          <div className="card p-5 border-l-4 border-brand-500">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white text-sm mb-1">Learning Objective</p>
                <p className="text-slate-700 dark:text-slate-200 text-sm">{lesson.objective}</p>
                {lang !== 'English' && (
                  <p className="text-slate-500 italic text-xs mt-1">{lesson.objectiveHinglish}</p>
                )}
              </div>
            </div>
          </div>

          {/* Warm-up */}
          {lesson.content.warmUp && lesson.content.warmUp.length > 0 && (
            <div className="card p-5 border-l-4 border-gold-400">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-3">🔥 Warm-Up Questions</p>
              <ul className="space-y-2">
                {lesson.content.warmUp.map((q, i) => (
                  <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                    <span className="font-bold text-gold-600 flex-shrink-0">{i + 1}.</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Explanation */}
          <div className="card p-5">
            <p className="font-semibold text-slate-800 dark:text-white text-sm mb-3">📖 Explanation</p>
            {lang !== 'Hinglish' && (
              <div
                className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-200"
                dangerouslySetInnerHTML={{
                  __html: lesson.content.explanation
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n\n/g, '</p><p class="mt-3">')
                    .replace(/\n/g, '<br/>')
                    .replace(/^/, '<p>')
                    .replace(/$/, '</p>'),
                }}
              />
            )}
            {lang !== 'English' && (
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                <p className="text-[10px] text-slate-400 mb-2 font-medium">🇮🇳 Hinglish mein samjhao:</p>
                <div
                  className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 italic"
                  dangerouslySetInnerHTML={{
                    __html: lesson.content.explanationHinglish
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mt-3">')
                      .replace(/\n/g, '<br/>')
                      .replace(/^/, '<p>')
                      .replace(/$/, '</p>'),
                  }}
                />
              </div>
            )}
          </div>

          {/* Examples */}
          <div className="card p-5">
            <p className="font-semibold text-slate-800 dark:text-white text-sm mb-4">💬 German Examples</p>
            <div className="space-y-4">
              {lesson.content.examples.map((ex, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                  <GermanPhrase
                    german={ex.german}
                    english={ex.english}
                    hinglish={ex.hinglish}
                    showHinglish={lang !== 'English'}
                    size="md"
                  />
                  {ex.breakdown && ex.breakdown.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                      <p className="text-[10px] text-slate-400 mb-2 font-medium">Word-by-word breakdown:</p>
                      <div className="flex flex-wrap gap-2">
                        {ex.breakdown.map((b, j) => (
                          <div key={j} className="bg-brand-50 dark:bg-brand-950/30 rounded-lg px-2.5 py-1.5 text-center">
                            <p className="text-brand-700 dark:text-brand-300 font-semibold text-xs">{b.word}</p>
                            <p className="text-slate-500 text-[9px]">{b.role}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-[10px]">{b.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pronunciation Guide */}
          {lesson.content.pronunciationGuide && lesson.content.pronunciationGuide.length > 0 && (
            <div className="card p-5">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-3">🔊 Pronunciation Guide</p>
              <div className="space-y-3">
                {lesson.content.pronunciationGuide.map((pg, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <AudioButton text={pg.word} size="sm" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="german-text font-bold">{pg.word}</span>
                        <span className="phonetic-text">[{pg.phonetic}]</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">✏️ {pg.tips}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Real-Life Context */}
          <div className="card p-5 border-l-4 border-teal-500">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-800 dark:text-white text-sm mb-2">Real-Life Context</p>
                <p className="text-slate-700 dark:text-slate-200 text-sm">{lesson.content.realLifeContext}</p>
              </div>
            </div>
          </div>

          {/* Cultural Note */}
          {lesson.content.culturalNote && (
            <div className="card p-5 border-l-4 border-amber-500">
              <p className="font-semibold text-slate-800 dark:text-white text-sm mb-2">🇩🇪 Cultural Note</p>
              <p className="text-slate-700 dark:text-slate-200 text-sm">{lesson.content.culturalNote}</p>
            </div>
          )}

          {/* Summary */}
          <div className="card p-5">
            <p className="font-semibold text-slate-800 dark:text-white text-sm mb-3">✅ Lesson Summary</p>
            <ul className="space-y-2">
              {lesson.content.summary.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle className="h-4 w-4 text-success-500 flex-shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Go to Exercises */}
          <button onClick={() => setPhase('exercises')} className="btn-brand w-full btn-lg">
            <Play className="h-5 w-5" />
            Start Exercises ({totalExercises} questions)
          </button>
        </div>
      )}

      {/* Exercises Phase */}
      {phase === 'exercises' && currentExercise && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="chip-brand">Exercise {exerciseIndex + 1}/{totalExercises}</span>
            <span className="flex items-center gap-1 text-xs text-gold-600 dark:text-gold-400">
              <Star className="h-3.5 w-3.5" />+{currentExercise.xpReward} XP
            </span>
          </div>

          <ExercisePlayer
            key={currentExercise.id}
            exercise={currentExercise}
            lang={lang}
            onAnswer={handleExerciseAnswer}
          />

          {exerciseAnswered && (
            <button onClick={handleNextExercise} className="btn-brand w-full">
              {exerciseIndex < totalExercises - 1 ? 'Next Exercise →' : '🎉 Complete Lesson'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
