// ============================================================
// ONBOARDING FLOW — Multi-step wizard
// ============================================================

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { ChevronRight, ChevronLeft, Check, GraduationCap } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import type { CEFRLevel, ExamProvider, ExplanationLanguage, LearningGoal, SkillType } from '../types';
import { ProgressBar } from '../components/shared';

const LEVELS: { id: CEFRLevel; label: string; desc: string }[] = [
  { id: 'A1', label: 'A1 — Absolute Beginner', desc: 'I know very little or no German' },
  { id: 'A2', label: 'A2 — Elementary', desc: 'I know basic greetings and simple sentences' },
  { id: 'B1', label: 'B1 — Intermediate', desc: 'I can handle everyday situations' },
  { id: 'B2', label: 'B2 — Upper Intermediate', desc: 'I can discuss complex topics' },
  { id: 'C1', label: 'C1 — Advanced', desc: 'I can read and write complex texts' },
  { id: 'C2', label: 'C2 — Proficiency', desc: 'Near-native speaker' },
];

const GOALS: { id: LearningGoal; emoji: string; label: string; labelHi: string }[] = [
  { id: 'exam', emoji: '📜', label: 'Pass a German exam', labelHi: 'German exam pass karna' },
  { id: 'ausbildung', emoji: '🏭', label: 'Ausbildung in Germany', labelHi: 'Germany mein Ausbildung' },
  { id: 'work', emoji: '💼', label: 'Work in Germany', labelHi: 'Germany mein kaam karna' },
  { id: 'travel', emoji: '✈️', label: 'Travel to Germany', labelHi: 'Germany mein travel' },
  { id: 'communication', emoji: '💬', label: 'Everyday communication', labelHi: 'Roz ki baat-cheet' },
  { id: 'study', emoji: '📚', label: 'Study in Germany', labelHi: 'Germany mein padhna' },
];

const EXAMS: { id: ExamProvider; label: string; desc: string }[] = [
  { id: 'Goethe', label: 'Goethe-Zertifikat', desc: 'Most internationally recognized' },
  { id: 'telc', label: 'telc Deutsch', desc: 'Popular for work and immigration' },
  { id: 'ÖSD', label: 'ÖSD', desc: 'Austrian exam, widely accepted' },
  { id: 'None', label: 'No specific exam', desc: 'General language learning' },
];

const DIFFICULTIES: { id: SkillType; emoji: string; label: string }[] = [
  { id: 'speaking', emoji: '🗣️', label: 'Speaking' },
  { id: 'grammar', emoji: '📐', label: 'Grammar' },
  { id: 'vocabulary', emoji: '📖', label: 'Vocabulary' },
  { id: 'listening', emoji: '👂', label: 'Listening' },
  { id: 'reading', emoji: '📄', label: 'Reading' },
  { id: 'writing', emoji: '✍️', label: 'Writing' },
];

const LANG_OPTIONS: { id: ExplanationLanguage; label: string; desc: string }[] = [
  { id: 'Both', label: 'Hinglish + English', desc: 'Best of both worlds (Recommended)' },
  { id: 'Hinglish', label: 'Hinglish only', desc: 'Hindi in Roman script' },
  { id: 'English', label: 'English only', desc: 'Standard English explanations' },
];

const TIME_OPTIONS = [15, 30, 45, 60, 90, 120];

interface OnboardingData {
  name: string;
  currentLevel: CEFRLevel;
  targetLevel: CEFRLevel;
  goals: LearningGoal[];
  targetExam: ExamProvider;
  targetExamLevel: CEFRLevel;
  examDate: string;
  dailyStudyMinutes: number;
  explanationLanguage: ExplanationLanguage;
  weakestSkills: SkillType[];
}

export function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding } = useAppStore();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<OnboardingData>({
    name: '',
    currentLevel: 'A1',
    targetLevel: 'B1',
    goals: ['ausbildung'],
    targetExam: 'Goethe',
    targetExamLevel: 'B1',
    examDate: '',
    dailyStudyMinutes: 60,
    explanationLanguage: 'Both',
    weakestSkills: ['speaking'],
  });

  const totalSteps = 7;
  const progress = ((step + 1) / totalSteps) * 100;

  const update = <K extends keyof OnboardingData>(key: K, value: OnboardingData[K]) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const toggleGoal = (goal: LearningGoal) => {
    setData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const toggleSkill = (skill: SkillType) => {
    setData(prev => ({
      ...prev,
      weakestSkills: prev.weakestSkills.includes(skill)
        ? prev.weakestSkills.filter(s => s !== skill)
        : [...prev.weakestSkills, skill],
    }));
  };

  const handleFinish = async () => {
    await completeOnboarding({
      name: data.name || 'Student',
      currentLevel: data.currentLevel,
      targetLevel: data.targetLevel,
      goals: data.goals,
      targetExam: data.targetExam,
      targetExamLevel: data.targetExamLevel,
      examDate: data.examDate || null,
      dailyStudyMinutes: data.dailyStudyMinutes,
      explanationLanguage: data.explanationLanguage,
      weakestSkills: data.weakestSkills,
    });
    navigate('/');
  };

  const canProceed = () => {
    if (step === 0) return data.name.trim().length > 0;
    if (step === 3) return data.goals.length > 0;
    return true;
  };

  return (
    <div className="min-h-dvh bg-gradient-to-br from-brand-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white text-2xl font-bold shadow-brand-lg">
              D
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-white">DeutschMeister</h1>
          <p className="text-slate-400 text-sm mt-1">Your Personal German Academy</p>
        </div>

        {/* Card */}
        <div className="card glass p-6 shadow-2xl">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Step {step + 1} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <ProgressBar value={progress} color="brand" animated />
          </div>

          {/* Steps */}
          <div className="animate-fade-in">
            {step === 0 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Welcome! What's your name?</h2>
                <p className="text-slate-500 text-sm mb-5">Main aapka naam jaanna chahta hoon 🙂</p>
                <input
                  id="onboarding-name"
                  type="text"
                  placeholder="Your name (e.g., Rajesh, Priya...)"
                  value={data.name}
                  onChange={e => update('name', e.target.value)}
                  className="input text-lg"
                  autoFocus
                />
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">What is your current German level?</h2>
                <p className="text-slate-500 text-sm mb-5">Abhi tumhara German kitna hai? 🎯</p>
                <div className="space-y-2">
                  {LEVELS.map(({ id, label, desc }) => (
                    <button
                      key={id}
                      onClick={() => update('currentLevel', id)}
                      className={clsx(
                        'w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
                        data.currentLevel === id
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white text-sm">{label}</p>
                          <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                        </div>
                        {data.currentLevel === id && <Check className="h-5 w-5 text-brand-600" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">What is your target level?</h2>
                <p className="text-slate-500 text-sm mb-5">Tum German mein kahan tak jaana chahte ho? 🏆</p>
                <div className="grid grid-cols-3 gap-2">
                  {LEVELS.slice(1).map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => update('targetLevel', id)}
                      className={clsx(
                        'px-3 py-3 rounded-xl border-2 transition-all text-center',
                        data.targetLevel === id
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
                      )}
                    >
                      <p className="font-bold text-slate-900 dark:text-white text-lg">{id}</p>
                      <p className="text-slate-500 text-[10px]">{label.split('—')[1].trim()}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Why are you learning German?</h2>
                <p className="text-slate-500 text-sm mb-5">Ek ya zyaada choose kar sakte ho 🌟</p>
                <div className="grid grid-cols-2 gap-2">
                  {GOALS.map(({ id, emoji, label, labelHi }) => (
                    <button
                      key={id}
                      onClick={() => toggleGoal(id)}
                      className={clsx(
                        'px-3 py-3 rounded-xl border-2 transition-all text-left',
                        data.goals.includes(id)
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700',
                      )}
                    >
                      <span className="text-xl">{emoji}</span>
                      <p className="text-xs font-semibold text-slate-800 dark:text-white mt-1 leading-tight">{label}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{labelHi}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Which exam are you targeting?</h2>
                <p className="text-slate-500 text-sm mb-5">Kaun sa exam dena chahte ho? 📜</p>
                <div className="space-y-2 mb-4">
                  {EXAMS.map(({ id, label, desc }) => (
                    <button
                      key={id}
                      onClick={() => update('targetExam', id)}
                      className={clsx(
                        'w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
                        data.targetExam === id
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700',
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white text-sm">{label}</p>
                          <p className="text-slate-500 text-xs">{desc}</p>
                        </div>
                        {data.targetExam === id && <Check className="h-5 w-5 text-brand-600" />}
                      </div>
                    </button>
                  ))}
                </div>
                {data.targetExam !== 'None' && (
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">
                      Target exam date (optional)
                    </label>
                    <input
                      type="date"
                      value={data.examDate}
                      onChange={e => update('examDate', e.target.value)}
                      className="input"
                    />
                  </div>
                )}
              </div>
            )}

            {step === 5 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">How much time to study daily?</h2>
                <p className="text-slate-500 text-sm mb-5">Roz kitna time German seekhne mein de sakte ho? ⏰</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {TIME_OPTIONS.map(mins => (
                    <button
                      key={mins}
                      onClick={() => update('dailyStudyMinutes', mins)}
                      className={clsx(
                        'px-3 py-4 rounded-xl border-2 transition-all text-center',
                        data.dailyStudyMinutes === mins
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700',
                      )}
                    >
                      <p className="font-bold text-xl text-slate-900 dark:text-white">{mins}</p>
                      <p className="text-[10px] text-slate-500">min/day</p>
                    </button>
                  ))}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2 block">
                    Explanation language / Samjhane ki bhaasha
                  </label>
                  <div className="space-y-2">
                    {LANG_OPTIONS.map(({ id, label, desc }) => (
                      <button
                        key={id}
                        onClick={() => update('explanationLanguage', id)}
                        className={clsx(
                          'w-full text-left px-4 py-3 rounded-xl border-2 transition-all',
                          data.explanationLanguage === id
                            ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                            : 'border-slate-200 dark:border-slate-700',
                        )}
                      >
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">{label}</p>
                        <p className="text-slate-500 text-xs">{desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 6 && (
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">What's your biggest challenge?</h2>
                <p className="text-slate-500 text-sm mb-5">Sabse mushkil kya lagta hai? (Multiple select) 🤔</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {DIFFICULTIES.map(({ id, emoji, label }) => (
                    <button
                      key={id}
                      onClick={() => toggleSkill(id)}
                      className={clsx(
                        'px-3 py-3 rounded-xl border-2 transition-all text-left flex items-center gap-2',
                        data.weakestSkills.includes(id)
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                          : 'border-slate-200 dark:border-slate-700',
                      )}
                    >
                      <span className="text-xl">{emoji}</span>
                      <span className="text-sm font-medium text-slate-800 dark:text-white">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Summary */}
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">Your learning plan summary:</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-500">Name:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Current:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.currentLevel}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Target:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.targetLevel}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Exam:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.targetExam}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Daily:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.dailyStudyMinutes} min</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Language:</span>
                      <span className="ml-1 font-medium text-slate-800 dark:text-white">{data.explanationLanguage}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setStep(s => Math.max(0, s - 1))}
              className={clsx('btn-ghost', step === 0 && 'invisible')}
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
            {step < totalSteps - 1 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="btn-brand"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button onClick={handleFinish} className="btn-brand btn-lg">
                <GraduationCap className="h-5 w-5" />
                Start Learning!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
