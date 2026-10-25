// ============================================================
// EXAM PREP PAGE — Mock tests for Goethe / telc / ÖSD
// ============================================================

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import {
  Trophy, Clock,
  Play, RotateCcw, Star, FileText, BarChart2, Zap, Volume2,
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { speak } from '../lib/speech';
import { SectionHeader, TabBar, ProgressBar, LevelBadge, EmptyState } from '../components/shared';
import type { CEFRLevel, MockExamResult, SectionResult, SkillType } from '../types';
import { saveExamResult, loadExamResults } from '../lib/db';

// ——— Mock Exam Data ———
const MOCK_EXAMS = {
  'A1': [
    {
      id: 'exam-a1-1',
      title: 'Goethe A1 — Full Mock Test',
      duration: 25,
      sections: [
        {
          id: 'read-1',
          title: 'Reading Comprehension',
          type: 'reading',
          text: `**Steckbrief:**\nName: Maria Schneider\nAlter: 28 Jahre\nBeruf: Lehrerin\nWohnort: München\nHobbys: Lesen, Schwimmen, Kochen\nSprachen: Deutsch (Muttersprache), Englisch, ein bisschen Spanisch`,
          questions: [
            { id: 'q1', text: 'Wie alt ist Maria?', options: ['22 Jahre', '25 Jahre', '28 Jahre', '30 Jahre'], answer: '28 Jahre' },
            { id: 'q2', text: 'Was ist Marias Beruf?', options: ['Ärztin', 'Lehrerin', 'Ingenieurin', 'Sekretärin'], answer: 'Lehrerin' },
            { id: 'q3', text: 'Wo wohnt Maria?', options: ['Berlin', 'Hamburg', 'München', 'Frankfurt'], answer: 'München' },
          ],
        },
        {
          id: 'listen-1',
          title: 'Listening Comprehension',
          type: 'listening',
          audioText: 'Guten Tag! Mein Name ist Thomas. Ich komme aus Österreich. Ich bin 35 Jahre alt und arbeite als Arzt in Wien. Ich spreche Deutsch und Englisch.',
          questions: [
            { id: 'q4', text: 'Woher kommt Thomas?', options: ['Deutschland', 'Schweiz', 'Österreich', 'Bayern'], answer: 'Österreich' },
            { id: 'q5', text: 'Wie alt ist Thomas?', options: ['25', '30', '35', '40'], answer: '35' },
          ],
        },
        {
          id: 'grammar-1',
          title: 'Language in Use',
          type: 'grammar',
          questions: [
            { id: 'q6', text: 'Ich ___ aus Indien. (kommen)', options: ['kommen', 'kommt', 'komme', 'kommst'], answer: 'komme' },
            { id: 'q7', text: '___ Buch ist interessant.', options: ['Der', 'Die', 'Das', 'Den'], answer: 'Das' },
            { id: 'q8', text: 'Wie ___ du? (heißen)', options: ['heißt', 'heiße', 'heißen', 'heißte'], answer: 'heißt' },
            { id: 'q9', text: 'Er wohnt ___ Berlin.', options: ['auf', 'in', 'an', 'bei'], answer: 'in' },
            { id: 'q10', text: 'Wir ___ drei Kinder. (haben)', options: ['haben', 'habe', 'hat', 'habt'], answer: 'haben' },
          ],
        },
      ],
    },
  ],
  'A2': [
    {
      id: 'exam-a2-1',
      title: 'Goethe A2 — Full Mock Test',
      duration: 30,
      sections: [
        {
          id: 'read-a2',
          title: 'Reading — Ads & Notices',
          type: 'reading',
          text: `**Zimmer zu vermieten:**\nSchönes Zimmer, 20 m², in 3er-WG. Miete: 450€ warm. Zentrale Lage, Bus und U-Bahn in der Nähe. Ideal für Studenten. Kontakt: Tel. 089-123456`,
          questions: [
            { id: 'qa1', text: 'Wie groß ist das Zimmer?', options: ['15 m²', '20 m²', '25 m²', '30 m²'], answer: '20 m²' },
            { id: 'qa2', text: 'Wie viel kostet die Miete?', options: ['400€', '450€', '500€', '550€'], answer: '450€' },
            { id: 'qa3', text: 'Für wen ist das Zimmer ideal?', options: ['Familien', 'Rentner', 'Studenten', 'Geschäftsleute'], answer: 'Studenten' },
          ],
        },
        {
          id: 'grammar-a2',
          title: 'Language in Use',
          type: 'grammar',
          questions: [
            { id: 'qa4', text: 'Ich ___ gestern ins Kino gegangen. (sein)', options: ['bin', 'habe', 'war', 'ist'], answer: 'bin' },
            { id: 'qa5', text: 'Sie hat das Buch ___. (lesen, Perfekt)', options: ['gelesen', 'liest', 'las', 'gelest'], answer: 'gelesen' },
          ],
        },
      ],
    },
  ],
  'B1': [
    {
      id: 'exam-b1-1',
      title: 'Goethe B1 — Full Mock Test',
      duration: 45,
      sections: [
        {
          id: 'read-b1',
          title: 'Reading — Article',
          type: 'reading',
          text: `**Klimawandel und Alltagsleben**\nImmer mehr Deutsche ändern ihren Lebensstil wegen des Klimawandels. Viele kaufen regional produzierte Lebensmittel, verzichten auf Flugreisen und nutzen öffentliche Verkehrsmittel. Eine Umfrage zeigt: 67% der Deutschen sind bereit, für den Klimaschutz auf Komfort zu verzichten.`,
          questions: [
            { id: 'qb1', text: 'Warum ändern Deutsche ihren Lebensstil?', options: ['Wegen der Wirtschaft', 'Wegen des Klimawandels', 'Wegen der Politik', 'Wegen der Gesundheit'], answer: 'Wegen des Klimawandels' },
            { id: 'qb2', text: 'Wie viele Prozent verzichten auf Komfort?', options: ['57%', '63%', '67%', '73%'], answer: '67%' },
          ],
        },
        {
          id: 'grammar-b1',
          title: 'Language in Use',
          type: 'grammar',
          questions: [
            { id: 'qb3', text: 'Wenn ich Zeit ___, würde ich mehr reisen. (haben, Konjunktiv II)', options: ['hätte', 'habe', 'hatte', 'haben'], answer: 'hätte' },
            { id: 'qb4', text: 'Das Buch ___ von Goethe geschrieben. (Passiv)', options: ['wurde', 'wird', 'worden', 'war'], answer: 'wurde' },
            { id: 'qb5', text: 'Sie sagte, sie ___ krank. (Konjunktiv I, indirect speech)', options: ['sei', 'ist', 'war', 'wäre'], answer: 'sei' },
          ],
        },
      ],
    },
  ],
  'B2': [], 'C1': [], 'C2': [],
};

// ——— Exam Timer ———
function ExamTimer({ seconds, onEnd }: { seconds: number; onEnd: () => void }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) { onEnd(); return; }
    const t = setTimeout(() => setRemaining(r => r - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining, onEnd]);

  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;

  return (
    <div className={clsx(
      'flex items-center gap-2 px-3 py-2 rounded-xl font-mono font-bold',
      remaining < 60 ? 'text-danger-600 bg-danger-50 dark:bg-danger-900/20 animate-pulse' : 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/30',
    )}>
      <Clock className="h-4 w-4" />
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  );
}

// ——— Main Exam Prep Page ———
export function ExamPrep() {
  const { progress, profile, awardXP } = useAppStore();
  const [tab, setTab] = useState<'overview' | 'mock' | 'results'>('overview');
  const [examState, setExamState] = useState<'idle' | 'active' | 'done'>('idle');
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<any>(null);
  const [resultHistory, setResultHistory] = useState<MockExamResult[]>([]);

  const exams = MOCK_EXAMS[progress.currentLevel as CEFRLevel] ?? [];

  useEffect(() => {
    loadExamResults()
      .then(rows => setResultHistory([...rows].sort((a, b) => b.completedAt.localeCompare(a.completedAt))))
      .catch(console.error);
  }, []);

  const startExam = (exam: any) => {
    setSelectedExam(exam);
    setCurrentSection(0);
    setAnswers({});
    setResults(null);
    setExamState('active');
    setTab('mock');
  };

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const submitExam = () => {
    if (!selectedExam) return;
    let correct = 0, total = 0;
    const sectionResults: { title: string; correct: number; total: number }[] = [];
    const skillBreakdown: Record<SkillType, number> = {
      listening: 0, speaking: 0, reading: 0, writing: 0, grammar: 0, vocabulary: 0,
    };
    const storedSections: SectionResult[] = [];
    const weakAreas: string[] = [];

    selectedExam.sections.forEach((section: any) => {
      let secCorrect = 0;
      section.questions.forEach((q: any) => {
        total++;
        if (answers[q.id] === q.answer) { correct++; secCorrect++; }
      });
      const percentage = section.questions.length > 0
        ? Math.round((secCorrect / section.questions.length) * 100)
        : 0;
      sectionResults.push({ title: section.title, correct: secCorrect, total: section.questions.length });
      storedSections.push({
        sectionId: section.id,
        score: secCorrect,
        maxScore: section.questions.length,
        answersGiven: Object.fromEntries(
          section.questions
            .filter((q: any) => answers[q.id] !== undefined)
            .map((q: any) => [q.id, answers[q.id]]),
        ),
        timeUsed: 0,
      });
      if (percentage < 60) weakAreas.push(section.title);
      const skill: SkillType = section.title.toLowerCase().includes('listen')
        ? 'listening'
        : section.title.toLowerCase().includes('speak')
        ? 'speaking'
        : section.title.toLowerCase().includes('writ')
        ? 'writing'
        : section.title.toLowerCase().includes('sprach')
        ? 'grammar'
        : 'reading';
      skillBreakdown[skill] = percentage;
    });

    const score = Math.round((correct / Math.max(total, 1)) * 100);
    const passed = score >= 60;
    setResults({ correct, total, score, passed, sectionResults });
    setExamState('done');
    awardXP(passed ? 100 : 25);

    const storedResult: MockExamResult = {
      id: `exam-${Date.now()}`,
      examId: selectedExam.id,
      completedAt: new Date().toISOString(),
      sectionResults: storedSections,
      totalScore: correct,
      maxScore: total,
      passed,
      skillBreakdown,
      weakAreas,
    };
    setResultHistory(prev => [storedResult, ...prev]);
    saveExamResult(storedResult).catch(console.error);
  };

  const section = selectedExam?.sections[currentSection];
  const allQuestions = selectedExam?.sections.flatMap((s: any) => s.questions) ?? [];
  const totalQ = allQuestions.length;
  const answeredQ = Object.keys(answers).length;

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader
        title="Exam Preparation"
        subtitle="Mock tests for Goethe, telc, and ÖSD exams"
        action={
          <div className="flex items-center gap-2">
            <LevelBadge level={progress.currentLevel} />
            <span className="chip-brand">{profile.targetExam}</span>
          </div>
        }
      />

      {examState === 'idle' && (
        <TabBar
          tabs={[
            { id: 'overview' as const, label: 'Overview', icon: <FileText className="h-4 w-4" /> },
            { id: 'mock' as const, label: 'Mock Tests', icon: <Trophy className="h-4 w-4" /> },
            { id: 'results' as const, label: 'Results', icon: <BarChart2 className="h-4 w-4" /> },
          ]}
          active={tab}
          onChange={setTab}
        />
      )}

      {/* OVERVIEW TAB */}
      {tab === 'overview' && examState === 'idle' && (
        <div className="space-y-4">
          {/* Exam Structure */}
          <div className="card p-5">
            <h2 className="font-bold text-slate-800 dark:text-white mb-4">
              {profile.targetExam} {progress.currentLevel} — Exam Structure
            </h2>
            {[
              { section: 'Reading (Lesen)', duration: '20 min', score: '25 pts', desc: 'Multiple choice, matching, true/false based on texts', emoji: '📖' },
              { section: 'Listening (Hören)', duration: '15 min', score: '25 pts', desc: 'Multiple choice questions based on audio recordings', emoji: '👂' },
              { section: 'Language Use (Sprachbausteine)', duration: '10 min', score: '15 pts', desc: 'Fill-in-the-blank and multiple choice grammar/vocabulary', emoji: '📝' },
              { section: 'Writing (Schreiben)', duration: '20 min', score: '25 pts', desc: 'Write a short email, form, or text in German', emoji: '✍️' },
              { section: 'Speaking (Sprechen)', duration: '15 min', score: '25 pts', desc: 'Introduction, discussion, and role-play with examiner', emoji: '🗣️' },
            ].map(({ section, duration, score, desc, emoji }) => (
              <div key={section} className="flex items-start gap-3 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0">
                <span className="text-xl">{emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800 dark:text-white text-sm">{section}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock className="h-3 w-3" /> {duration}
                      <span>•</span>
                      <Star className="h-3 w-3" /> {score}
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Passing Criteria */}
          <div className="card p-5 border-l-4 border-gold-400 bg-gold-50 dark:bg-yellow-900/10">
            <h3 className="font-bold text-slate-800 dark:text-white mb-2">📊 Passing Requirements</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><p className="text-slate-500 text-xs">Overall</p><p className="font-bold text-slate-800 dark:text-white">60% minimum</p></div>
              <div><p className="text-slate-500 text-xs">Each section</p><p className="font-bold text-slate-800 dark:text-white">No fixed min.</p></div>
              <div><p className="text-slate-500 text-xs">Certificate valid</p><p className="font-bold text-slate-800 dark:text-white">Lifetime</p></div>
              <div><p className="text-slate-500 text-xs">Max attempts</p><p className="font-bold text-slate-800 dark:text-white">Unlimited</p></div>
            </div>
          </div>

          {/* Exam Tips */}
          <div className="card p-5">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">💡 Exam Tips</h3>
            <div className="space-y-2">
              {[
                'Read all questions before reading the text in Reading section.',
                'In Listening, you hear recordings twice — use first listen to understand, second to answer.',
                'For Writing, always check article genders, verb conjugations, and word order.',
                'In Speaking, speak clearly and do not rush — the examiner wants to hear you.',
                'Use connecting words: "außerdem", "deshalb", "obwohl", "weil" to show complex language.',
                'Practice time management: do not spend more than 2 minutes on one question.',
              ].map((tip, i) => (
                <p key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <Zap className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  {tip}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOCK TESTS TAB */}
      {tab === 'mock' && examState === 'idle' && (
        <div className="space-y-4">
          {exams.length === 0 ? (
            <EmptyState
              icon="📝"
              title="Mock tests coming soon"
              description={`Full mock tests for ${progress.currentLevel} are being prepared. Check back soon!`}
              action={<button className="btn-brand" onClick={() => setTab('overview')}>View Exam Guide</button>}
            />
          ) : (
            exams.map(exam => (
              <div key={exam.id} className="card p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">{exam.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500"><Clock className="h-3 w-3 inline" /> {exam.duration} minutes</span>
                      <span className="text-xs text-slate-500">• {exam.sections.reduce((s: number, sec: any) => s + sec.questions.length, 0)} questions</span>
                    </div>
                  </div>
                  <Trophy className="h-6 w-6 text-gold-500" />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {exam.sections.map((s: any) => (
                    <span key={s.id} className="chip-neutral">{s.title}</span>
                  ))}
                </div>
                <button onClick={() => startExam(exam)} className="btn-brand w-full">
                  <Play className="h-4 w-4" /> Start Mock Test
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {/* RESULTS TAB */}
      {tab === 'results' && examState === 'idle' && (
        <div className="space-y-4">
          {resultHistory.length === 0 ? (
            <EmptyState
              icon="📊"
              title="No results yet"
              description="Complete a mock test to track your scores and weak areas."
              action={<button className="btn-brand" onClick={() => setTab('mock')}>Take a Mock Test</button>}
            />
          ) : (
            resultHistory.map(result => {
              const percentage = result.maxScore > 0
                ? Math.round((result.totalScore / result.maxScore) * 100)
                : 0;
              return (
                <div key={result.id} className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white">
                        {result.examId} Mock Test
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {new Date(result.completedAt).toLocaleDateString()} · {result.totalScore}/{result.maxScore} correct
                      </p>
                    </div>
                    <span className={clsx('text-xs', result.passed ? 'chip-success' : 'chip-danger')}>
                      {percentage}%
                    </span>
                  </div>
                  <ProgressBar
                    value={percentage}
                    color={result.passed ? 'success' : 'danger'}
                    className="mt-3"
                    animated={false}
                  />
                  {result.weakAreas.length > 0 && (
                    <p className="text-xs text-danger-600 dark:text-danger-400 mt-2">
                      Review: {result.weakAreas.join(', ')}
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* ACTIVE EXAM */}
      {examState === 'active' && selectedExam && (
        <div className="space-y-5">
          {/* Exam Header */}
          <div className="card p-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-800 dark:text-white text-sm">{selectedExam.title}</p>
              <p className="text-slate-500 text-xs">{answeredQ}/{totalQ} answered</p>
            </div>
            <ExamTimer seconds={selectedExam.duration * 60} onEnd={submitExam} />
          </div>

          <ProgressBar value={answeredQ} max={totalQ} color="brand" />

          {/* Section Navigation */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {selectedExam.sections.map((s: any, i: number) => (
              <button
                key={s.id}
                onClick={() => setCurrentSection(i)}
                className={clsx('btn flex-shrink-0 text-xs', i === currentSection ? 'btn-brand' : 'btn-outline')}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Current Section */}
          {section && (
            <div className="card p-5 space-y-4">
              <h3 className="font-bold text-slate-800 dark:text-white">{section.title}</h3>

              {section.text && (
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                  <p className="text-xs font-semibold text-slate-500 mb-2">📄 Read the following:</p>
                  <div className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: section.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}
                  />
                </div>
              )}

              {section.audioText && (
                <div className="bg-brand-50 dark:bg-brand-950/30 rounded-xl p-4 border border-brand-200 dark:border-brand-800">
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-2">🔊 Listen to the recording:</p>
                  <button
                    onClick={() => speak(section.audioText)}
                    className="btn-brand btn-sm"
                  >
                    <Volume2 className="h-4 w-4" /> Play Audio
                  </button>
                  <p className="text-xs text-slate-500 mt-2">Audio will play twice in the real exam. Click to replay.</p>
                </div>
              )}

              <div className="space-y-4">
                {section.questions.map((q: any, qi: number) => (
                  <div key={q.id} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                    <p className="font-medium text-slate-800 dark:text-white text-sm mb-3">
                      Q{qi + 1}. {q.text}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {q.options.map((opt: string) => (
                        <button
                          key={opt}
                          onClick={() => handleAnswer(q.id, opt)}
                          className={clsx(
                            'px-3 py-2 rounded-lg border-2 text-sm text-left transition-all',
                            answers[q.id] === opt
                              ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                              : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 text-slate-700 dark:text-slate-200',
                          )}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={submitExam}
            className="btn-brand w-full"
          >
            Submit Exam
          </button>
        </div>
      )}

      {/* RESULTS */}
      {examState === 'done' && results && (
        <div className="space-y-5 animate-fade-in">
          <div className={clsx(
            'card p-6 text-center',
            results.passed ? 'border-2 border-success-400' : 'border-2 border-danger-400',
          )}>
            <div className="text-5xl mb-3">{results.passed ? '🎉' : '📚'}</div>
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              {results.passed ? 'Congratulations! You Passed!' : 'Keep Practising!'}
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              {results.passed
                ? 'You are exam-ready! Keep practising to maintain your level.'
                : 'You need 60% to pass. Review the sections you missed and try again.'}
            </p>
            <div className="text-5xl font-display font-bold mt-4 mb-2" style={{ color: results.passed ? '#22c55e' : '#ef4444' }}>
              {results.score}%
            </div>
            <p className="text-slate-500 text-sm">{results.correct} / {results.total} correct</p>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-slate-800 dark:text-white mb-3">Section Breakdown</h3>
            <div className="space-y-3">
              {results.sectionResults.map((sr: any) => {
                const pct = Math.round((sr.correct / sr.total) * 100);
                return (
                  <div key={sr.title}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-700 dark:text-slate-200">{sr.title}</span>
                      <span className={clsx('font-bold', pct >= 60 ? 'text-success-600' : 'text-danger-600')}>{sr.correct}/{sr.total}</span>
                    </div>
                    <ProgressBar value={pct} color={pct >= 60 ? 'success' : 'danger'} animated={false} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => { setExamState('idle'); setTab('mock'); }} className="btn-ghost flex-1">
              <RotateCcw className="h-4 w-4" /> Retake Test
            </button>
            <button onClick={() => { setExamState('idle'); setTab('overview'); }} className="btn-brand flex-1">
              Back to Overview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// lucide-react icons used above

