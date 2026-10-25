// ============================================================
// GRAMMAR LAB PAGE
// ============================================================

import { useState } from 'react';
import { clsx } from 'clsx';
import { FlaskConical, ChevronRight, BookOpen, Shuffle, RotateCcw } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { SectionHeader, TabBar, AudioButton, LevelBadge } from '../components/shared';

// ——— Grammar topics with full data ———
const GRAMMAR_CONTENT = [
  {
    id: 'articles',
    level: 'A1',
    title: 'German Articles — der, die, das',
    titleHinglish: 'German Articles — der, die, das',
    category: 'Nouns & Gender',
    explanation: `Every German noun has a grammatical gender: **masculine (der)**, **feminine (die)**, or **neuter (das)**. Unlike English, the gender does not always match the natural gender.\n\n**Key rule:** Always learn the article WITH the noun. Never learn a noun without its article!\n\n**Plural:** All nouns, regardless of gender, use **die** in plural form.`,
    explanationHinglish: `Har German noun ka ek grammatical gender hota hai: **masculine (der)**, **feminine (die)**, ya **neuter (das)**. English ke ulta, gender hamesha natural gender se match nahi karta.\n\n**Key rule:** Noun ke saath HAMESHA article seekho. Kabhi bhi article ke bina noun mat seekho!\n\n**Plural:** Sab nouns, chahe gender kuch bhi ho, plural mein **die** use karte hain.`,
    table: {
      title: 'Definite Articles (the)',
      headers: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'],
      rows: [
        ['Nominative', 'der', 'die', 'das', 'die'],
        ['Accusative', 'den', 'die', 'das', 'die'],
        ['Dative', 'dem', 'der', 'dem', 'den'],
        ['Genitive', 'des', 'der', 'des', 'der'],
      ],
    },
    table2: {
      title: 'Indefinite Articles (a/an)',
      headers: ['Case', 'Masculine', 'Feminine', 'Neuter'],
      rows: [
        ['Nominative', 'ein', 'eine', 'ein'],
        ['Accusative', 'einen', 'eine', 'ein'],
        ['Dative', 'einem', 'einer', 'einem'],
        ['Genitive', 'eines', 'einer', 'eines'],
      ],
    },
    examples: [
      { german: 'Der Mann ist groß.', english: 'The man is tall.', hinglish: 'Aadmi lamba hai.' },
      { german: 'Die Frau arbeitet hier.', english: 'The woman works here.', hinglish: 'Aurat yahan kaam karti hai.' },
      { german: 'Das Kind spielt.', english: 'The child plays.', hinglish: 'Baccha khelta hai.' },
      { german: 'Die Männer, Frauen und Kinder — alle mit "die"!', english: 'The men, women and children — all with "die" in plural!', hinglish: 'Plural mein hamesha "die"!' },
    ],
    commonErrors: [
      { wrong: 'Das Mädchen → die Mädchen (gender)', correct: 'das Mädchen (neuter!)', explanation: 'Mädchen ends in -chen, which is always neuter even though it means girl!', explanationHinglish: '"Mädchen" "-chen" se khatam hota hai isliye hamesha neuter hai, chahe matlab "girl" ho!' },
      { wrong: 'Ich lerne ein Deutsch.', correct: 'Ich lerne Deutsch.', explanation: 'Languages, subjects, and sports in German do not use articles!', explanationHinglish: 'German mein languages, subjects aur sports ke saath articles nahi lagate!' },
    ],
    exercises: [
      { id: 'g-ex-1', question: 'Which article does "Wohnung" (apartment) use?', options: ['der', 'die', 'das', 'ein'], answer: 'die', explanation: '"Wohnung" ends in -ung → always feminine (die).' },
      { id: 'g-ex-2', question: 'What article does "Brötchen" (bread roll) use?', options: ['der', 'die', 'das', 'einen'], answer: 'das', explanation: '"Brötchen" ends in -chen → always neuter (das).' },
      { id: 'g-ex-3', question: 'The plural of "der Mann" uses which article?', options: ['der', 'die', 'das', 'den'], answer: 'die', explanation: 'ALL plural nouns use "die" regardless of their singular gender.' },
      { id: 'g-ex-4', question: 'Fill in: ___ Buch ist interessant.', options: ['Der', 'Die', 'Das', 'Ein'], answer: 'Das', explanation: '"Buch" (book) is neuter → das Buch.' },
    ],
  },
  {
    id: 'verb-conj',
    level: 'A1',
    title: 'Present Tense Verb Conjugation',
    titleHinglish: 'Present Tense Verb Conjugation',
    category: 'Verbs',
    explanation: `German verbs change their ending based on the subject (who is doing the action). This is called **conjugation**.\n\n**Regular verbs (-en ending):**\nRemove -en from the infinitive to get the stem, then add endings:\n- ich → **-e** (ich lerne)\n- du → **-st** (du lernst)\n- er/sie/es → **-t** (er lernt)\n- wir → **-en** (wir lernen)\n- ihr → **-t** (ihr lernt)\n- sie/Sie → **-en** (sie lernen)\n\n**Irregular verbs** like sein (to be) and haben (to have) must be memorized separately.`,
    explanationHinglish: `German verbs subject ke hisaab se apna ending change karte hain (kaun kaam kar raha hai). Ise **conjugation** kehte hain.\n\n**Regular verbs (-en ending):**\nInfinitive se -en hatao → stem milega, phir endings lagao:\n- ich → **-e** (ich lerne)\n- du → **-st** (du lernst)\n- er/sie/es → **-t** (er lernt)\n- wir → **-en** (wir lernen)\n- ihr → **-t** (ihr lernt)\n- sie/Sie → **-en** (sie lernen)\n\n**Irregular verbs** jaise sein (hona) aur haben (rakhna) alag yaad karne padte hain.`,
    table: {
      title: 'Conjugation of "lernen" (to learn)',
      headers: ['Pronoun', 'German', 'English', 'Hinglish'],
      rows: [
        ['ich', 'lerne', 'I learn', 'main seekhta hoon'],
        ['du', 'lernst', 'you learn', 'tu seekhta hai'],
        ['er/sie/es', 'lernt', 'he/she/it learns', 'woh seekhta hai'],
        ['wir', 'lernen', 'we learn', 'hum seekhte hain'],
        ['ihr', 'lernt', 'you (all) learn', 'tum sab seekhte ho'],
        ['sie/Sie', 'lernen', 'they/you (formal) learn', 'woh/aap seekhte hain'],
      ],
    },
    table2: {
      title: 'SEIN (to be) — Irregular',
      headers: ['Pronoun', 'Sein', 'English'],
      rows: [
        ['ich', 'bin', 'I am'],
        ['du', 'bist', 'you are'],
        ['er/sie/es', 'ist', 'he/she/it is'],
        ['wir', 'sind', 'we are'],
        ['ihr', 'seid', 'you (all) are'],
        ['sie/Sie', 'sind', 'they/you are'],
      ],
    },
    examples: [
      { german: 'Ich lerne Deutsch. Du lernst auch Deutsch!', english: 'I learn German. You also learn German!', hinglish: 'Main German seekhta hoon. Tu bhi German seekhta hai!' },
      { german: 'Er ist Student. Sie ist Ärztin.', english: 'He is a student. She is a doctor (female).', hinglish: 'Woh student hai. Woh (female) doctor hai.' },
    ],
    commonErrors: [
      { wrong: 'Ich lernst Deutsch.', correct: 'Ich lerne Deutsch.', explanation: '"ich" always uses the "-e" ending, not "-st".', explanationHinglish: '"ich" ke saath hamesha "-e" ending aata hai, "-st" nahi.' },
      { wrong: 'Er sind Student.', correct: 'Er ist Student.', explanation: '"er/sie/es" uses "ist" with sein, not "sind".', explanationHinglish: '"er/sie/es" ke saath "sind" nahi, "ist" aata hai.' },
    ],
    exercises: [
      { id: 'g-vc-1', question: 'Fill in: Wir ___ in Berlin. (wohnen)', options: ['wohne', 'wohnst', 'wohnt', 'wohnen'], answer: 'wohnen', explanation: '"wir" always takes the full -en ending.' },
      { id: 'g-vc-2', question: 'Which is correct? "Er ___ Student."', options: ['bin', 'bist', 'ist', 'sind'], answer: 'ist', explanation: '"er" uses "ist" (3rd person singular of sein).' },
      { id: 'g-vc-3', question: 'Fill in: Du ___ gut Deutsch. (sprechen)', options: ['spreche', 'sprichst', 'spricht', 'sprechen'], answer: 'sprichst', explanation: '"sprechen" is irregular: du sprichst (e→i stem change).' },
    ],
  },
  {
    id: 'word-order',
    level: 'A1',
    title: 'German Word Order — The V2 Rule',
    titleHinglish: 'German Word Order — V2 Rule',
    category: 'Sentence Structure',
    explanation: `The most important rule in German grammar: **The verb ALWAYS comes in second position** in a main clause.\n\n**Standard order:** Subject(1) + Verb(2) + Rest\n- Ich(1) lerne(2) Deutsch. ✓\n\n**Inverted order:** If anything other than the subject starts the sentence, the verb STILL stays in position 2, and the subject moves after the verb:\n- Heute(1) lerne(2) ich(3) Deutsch. ✓\n- Heute ich lerne Deutsch. ✗ (WRONG!)\n\nThis is called the **V2 (verb-second) rule** — the most important rule in German!`,
    explanationHinglish: `German grammar ka sabse zaroori rule: **Main clause mein verb HAMESHA doosre position par aata hai**.\n\n**Standard order:** Subject(1) + Verb(2) + Baaki sab\n- Ich(1) lerne(2) Deutsch. ✓\n\n**Inverted order:** Agar kuch aur subject se pehle aaye, verb PHIR BHI doosre position par rahega:\n- Heute(1) lerne(2) ich(3) Deutsch. ✓\n- Heute ich lerne Deutsch. ✗ (GALAT!)\n\nIse **V2 (verb-second) rule** kehte hain — German ka sabse zaroori rule!`,
    table: {
      title: 'Word Order Examples',
      headers: ['Position 1', 'Position 2 (Verb)', 'Rest of Sentence'],
      rows: [
        ['Ich', 'lerne', 'Deutsch.'],
        ['Du', 'wohnst', 'in Berlin.'],
        ['Heute', 'gehe', 'ich in die Schule.'],
        ['Morgen', 'fahren', 'wir nach München.'],
        ['Am Montag', 'hat', 'er einen Termin.'],
      ],
    },
    examples: [
      { german: 'Ich lerne jeden Tag Deutsch.', english: 'I learn German every day.', hinglish: 'Main roz German seekhta hoon.' },
      { german: 'Jeden Tag lerne ich Deutsch.', english: 'Every day I learn German.', hinglish: 'Roz main German seekhta hoon.' },
      { german: 'Morgen fahre ich nach Berlin.', english: 'Tomorrow I am going to Berlin.', hinglish: 'Kal main Berlin jaa raha hoon.' },
    ],
    commonErrors: [
      { wrong: 'Heute ich gehe in die Schule.', correct: 'Heute gehe ich in die Schule.', explanation: 'After "Heute" (position 1), the VERB must come immediately (position 2), then the subject.', explanationHinglish: '"Heute" (position 1) ke baad VERB aana chahiye (position 2), phir subject.' },
    ],
    exercises: [
      { id: 'g-wo-1', question: 'Which sentence has correct word order? (after "Morgen")', options: ['Morgen ich lerne Deutsch.', 'Morgen lerne ich Deutsch.', 'Morgen Deutsch ich lerne.', 'Ich Morgen lerne Deutsch.'], answer: 'Morgen lerne ich Deutsch.', explanation: '"Morgen" is position 1 → verb "lerne" is position 2 → then "ich".' },
      { id: 'g-wo-2', question: 'Arrange: "Berlin / wohne / in / ich" (standard order)', options: ['Berlin ich wohne in.', 'Ich wohne in Berlin.', 'Wohne ich Berlin in.', 'In ich wohne Berlin.'], answer: 'Ich wohne in Berlin.', explanation: 'Standard order: Subject + Verb + Rest → Ich + wohne + in Berlin.' },
    ],
  },
];

// ——— Sentence Builder ———
function SentenceBuilder() {
  const SENTENCES = [
    { parts: ['Ich', 'lerne', 'jeden', 'Tag', 'Deutsch'], correct: 'Ich lerne jeden Tag Deutsch' },
    { parts: ['Guten', 'Morgen', '!', 'Wie', 'heißen', 'Sie', '?'], correct: 'Guten Morgen ! Wie heißen Sie ?' },
    { parts: ['Heute', 'gehe', 'ich', 'in', 'die', 'Schule'], correct: 'Heute gehe ich in die Schule' },
  ];

  const [current, setCurrent] = useState(0);
  const sentence = SENTENCES[current];
  const [arrangement, setArrangement] = useState<string[]>([]);
  const [available, setAvailable] = useState([...sentence.parts]);
  const [result, setResult] = useState<'correct' | 'wrong' | null>(null);

  const nextSentence = () => {
    const next = (current + 1) % SENTENCES.length;
    setCurrent(next);
    setArrangement([]);
    setAvailable([...SENTENCES[next].parts]);
    setResult(null);
  };

  const reset = () => {
    setArrangement([]);
    setAvailable([...sentence.parts]);
    setResult(null);
  };

  const addWord = (word: string, idx: number) => {
    if (result) return;
    setArrangement(a => [...a, word]);
    setAvailable(av => { const copy = [...av]; copy.splice(idx, 1); return copy; });
  };

  const removeWord = (word: string, idx: number) => {
    if (result) return;
    setArrangement(a => { const copy = [...a]; copy.splice(idx, 1); return copy; });
    setAvailable(av => [...av, word]);
  };

  const check = () => {
    const built = arrangement.join(' ');
    setResult(built === sentence.correct ? 'correct' : 'wrong');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-slate-800 dark:text-white text-sm">Sentence {current + 1} / {SENTENCES.length}</p>
        <button onClick={nextSentence} className="btn-ghost btn-sm">
          <Shuffle className="h-3.5 w-3.5" /> Next
        </button>
      </div>

      {/* Answer area */}
      <div className="min-h-12 flex flex-wrap gap-2 p-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50">
        {arrangement.map((w, i) => (
          <button key={`${w}-${i}`} onClick={() => removeWord(w, i)} className="word-block word-block-active">
            {w}
          </button>
        ))}
        {arrangement.length === 0 && (
          <p className="text-slate-400 text-sm">Click words below to build the sentence...</p>
        )}
      </div>

      {/* Available words */}
      <div className="flex flex-wrap gap-2">
        {available.map((w, i) => (
          <button key={`${w}-${i}`} onClick={() => addWord(w, i)} className="word-block">
            {w}
          </button>
        ))}
      </div>

      {/* Actions */}
      {!result ? (
        <button onClick={check} disabled={arrangement.length === 0} className="btn-brand w-full">
          Check Order
        </button>
      ) : (
        <div className={clsx('rounded-2xl p-4 border-2 animate-slide-up', result === 'correct' ? 'border-success-400 bg-success-50 dark:bg-success-900/20' : 'border-danger-400 bg-danger-50 dark:bg-danger-900/20')}>
          <p className="font-bold mb-1">{result === 'correct' ? '🎉 Perfect!' : '❌ Not quite right'}</p>
          {result === 'wrong' && <p className="text-sm text-slate-600 dark:text-slate-300">Correct: <strong>{sentence.correct}</strong></p>}
          <button onClick={reset} className="btn-ghost btn-sm mt-2"><RotateCcw className="h-3.5 w-3.5" /> Try Again</button>
        </div>
      )}
    </div>
  );
}

// ——— Mixed Practice ———
function PracticeQuiz({
  awardXP,
  currentLevel,
}: {
  awardXP: (amount: number) => void;
  currentLevel: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const levels: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
  const exercises = GRAMMAR_CONTENT
    .filter(topic => levels[topic.level] <= levels[currentLevel])
    .flatMap(topic => topic.exercises.map(exercise => ({
      ...exercise,
      topicTitle: topic.title,
      topicLevel: topic.level,
    })));

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">Mixed grammar practice from all topics you've studied.</p>
      {exercises.map(exercise => {
        const selected = answers[exercise.id];
        const answered = selected !== undefined;
        const correct = selected === exercise.answer;
        return (
          <div key={exercise.id} className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <LevelBadge level={exercise.topicLevel as 'A1'} size="xs" />
              <span className="text-xs text-slate-500">{exercise.topicTitle}</span>
            </div>
            <p className="text-sm font-medium text-slate-800 dark:text-white mb-3">{exercise.question}</p>
            <div className="grid grid-cols-2 gap-2">
              {exercise.options.map(option => (
                <button
                  key={option}
                  disabled={answered}
                  onClick={() => {
                    setAnswers(prev => ({ ...prev, [exercise.id]: option }));
                    if (option === exercise.answer) awardXP(10);
                  }}
                  className={clsx(
                    'px-3 py-2 rounded-xl border-2 text-sm text-left transition-all',
                    !answered
                      ? 'border-slate-200 dark:border-slate-700 hover:border-brand-400'
                      : option === exercise.answer
                      ? 'border-success-500 bg-success-50 dark:bg-success-900/20'
                      : option === selected
                      ? 'border-danger-500 bg-danger-50 dark:bg-danger-900/20'
                      : 'border-slate-200 dark:border-slate-700 opacity-50',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered && (
              <p className={clsx('text-xs mt-3', correct ? 'text-success-600' : 'text-danger-600')}>
                {correct ? 'Correct! ' : `Correct answer: ${exercise.answer}. `}
                {exercise.explanation}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ——— Main Grammar Lab ———
export function GrammarLab() {
  const { progress, profile, awardXP } = useAppStore();
  const [tab, setTab] = useState<'topics' | 'builder' | 'practice'>('topics');
  const [selectedTopic, setSelectedTopic] = useState<any>(null);
  const [exIdx, setExIdx] = useState(0);
  const [selAnswer, setSelAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const lang = profile.explanationLanguage;

  const filteredTopics = GRAMMAR_CONTENT.filter(t => {
    const levels: Record<string, number> = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6 };
    return levels[t.level] <= levels[progress.currentLevel];
  });

  const handleSubmitEx = () => {
    if (!selAnswer || submitted) return;
    setSubmitted(true);
    const ex = selectedTopic?.exercises[exIdx];
    if (selAnswer === ex?.answer) awardXP(10);
  };

  const nextEx = () => {
    const exs = selectedTopic?.exercises ?? [];
    if (exIdx < exs.length - 1) { setExIdx(i => i + 1); setSelAnswer(null); setSubmitted(false); }
    else { setExIdx(0); setSelAnswer(null); setSubmitted(false); }
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader title="Grammar Lab" subtitle="Interactive grammar reference and practice • Grammar ke baare mein seekho" />

      <TabBar
        tabs={[
          { id: 'topics' as const, label: 'Topics', icon: <BookOpen className="h-4 w-4" /> },
          { id: 'builder' as const, label: 'Sentence Builder', icon: <Shuffle className="h-4 w-4" /> },
          { id: 'practice' as const, label: 'Practice', icon: <FlaskConical className="h-4 w-4" /> },
        ]}
        active={tab}
        onChange={t => { setTab(t); setSelectedTopic(null); }}
      />

      {tab === 'topics' && !selectedTopic && (
        <div className="space-y-3">
          {filteredTopics.map(topic => (
            <button
              key={topic.id}
              onClick={() => { setSelectedTopic(topic); setExIdx(0); setSelAnswer(null); setSubmitted(false); }}
              className="w-full card card-hover p-4 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <LevelBadge level={topic.level as any} size="xs" />
                    <span className="chip-neutral text-[10px]">{topic.category}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{topic.title}</h3>
                  {lang !== 'English' && <p className="text-slate-500 text-xs mt-0.5">{topic.titleHinglish}</p>}
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400" />
              </div>
            </button>
          ))}
        </div>
      )}

      {tab === 'topics' && selectedTopic && (
        <div className="space-y-5">
          <button onClick={() => setSelectedTopic(null)} className="btn-ghost btn-sm">← Back to Topics</button>

          <div className="card p-5">
            <div className="flex items-center gap-2 mb-3">
              <LevelBadge level={selectedTopic.level} size="xs" />
              <span className="chip-neutral text-[10px]">{selectedTopic.category}</span>
            </div>
            <h2 className="font-bold text-slate-900 dark:text-white text-lg mb-4">{selectedTopic.title}</h2>

            {/* Explanation */}
            <div className="mb-5">
              {lang !== 'Hinglish' && (
                <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 mb-3"
                  dangerouslySetInnerHTML={{
                    __html: selectedTopic.explanation.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>'),
                  }}
                />
              )}
              {lang !== 'English' && (
                <div className="prose prose-sm dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 italic pt-3 border-t border-slate-200 dark:border-slate-700"
                  dangerouslySetInnerHTML={{
                    __html: selectedTopic.explanationHinglish.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>'),
                  }}
                />
              )}
            </div>

            {/* Tables */}
            {[selectedTopic.table, selectedTopic.table2].filter(Boolean).map((table: any, ti: number) => (
              <div key={ti} className="mb-5 overflow-x-auto">
                <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-2">{table.title}</p>
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-brand-600 text-white">
                      {table.headers.map((h: string) => <th key={h} className="px-3 py-2 text-left font-semibold">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row: string[], i: number) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                        {row.map((cell, j) => (
                          <td key={j} className={clsx('px-3 py-2 border-b border-slate-100 dark:border-slate-700', j > 0 && 'german-text')}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}

            {/* Examples */}
            <div className="mb-5">
              <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">Examples:</p>
              <div className="space-y-2">
                {selectedTopic.examples.map((ex: any, i: number) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-brand-50 dark:bg-brand-950/30">
                    <AudioButton text={ex.german} size="sm" />
                    <div>
                      <p className="german-text">{ex.german}</p>
                      <p className="text-slate-500 text-xs">{ex.english}</p>
                      {lang !== 'English' && <p className="text-slate-400 text-xs italic">{ex.hinglish}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Errors */}
            <div className="mb-5">
              <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">⚠️ Common Mistakes:</p>
              <div className="space-y-2">
                {selectedTopic.commonErrors.map((err: any, i: number) => (
                  <div key={i} className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                    <p className="text-danger-700 dark:text-danger-300 text-sm">❌ {err.wrong}</p>
                    <p className="text-success-700 dark:text-success-300 text-sm mt-1">✅ {err.correct}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-xs mt-1">{lang !== 'Hinglish' ? err.explanation : err.explanationHinglish}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Exercises */}
            {selectedTopic.exercises && selectedTopic.exercises.length > 0 && (
              <div>
                <p className="font-semibold text-slate-700 dark:text-slate-200 text-sm mb-3">🎯 Practice ({exIdx + 1}/{selectedTopic.exercises.length}):</p>
                {(() => {
                  const ex = selectedTopic.exercises[exIdx];
                  return (
                    <div className="space-y-3">
                      <p className="text-slate-800 dark:text-white text-sm font-medium">{ex.question}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {ex.options.map((opt: string) => (
                          <button key={opt} onClick={() => !submitted && setSelAnswer(opt)}
                            className={clsx('px-3 py-2 rounded-xl border-2 text-sm text-left transition-all',
                              !submitted ? selAnswer === opt ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                              : opt === ex.answer ? 'border-success-500 bg-success-50 dark:bg-success-900/20' : selAnswer === opt ? 'border-danger-500 bg-danger-50 dark:bg-danger-900/20' : 'border-slate-200 dark:border-slate-700 opacity-50',
                            )}>
                            {opt}
                          </button>
                        ))}
                      </div>
                      {!submitted ? (
                        <button onClick={handleSubmitEx} disabled={!selAnswer} className="btn-brand w-full">Check</button>
                      ) : (
                        <div className={clsx('rounded-xl p-3 border-2', selAnswer === ex.answer ? 'border-success-400 bg-success-50 dark:bg-success-900/20' : 'border-danger-400 bg-danger-50 dark:bg-danger-900/20')}>
                          <p className="font-semibold text-sm">{selAnswer === ex.answer ? '✅ Correct!' : '❌ Incorrect'}</p>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{ex.explanation}</p>
                          <button onClick={nextEx} className="btn-ghost btn-sm mt-2">Next →</button>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      )}

      {tab === 'builder' && (
        <div className="card p-5">
          <h2 className="font-bold text-slate-900 dark:text-white mb-1">Sentence Builder</h2>
          <p className="text-slate-500 text-sm mb-5">Arrange the words in the correct German order</p>
          <SentenceBuilder />
        </div>
      )}

      {tab === 'practice' && (
        <PracticeQuiz awardXP={awardXP} currentLevel={progress.currentLevel} />
      )}
    </div>
  );
}

// lucide-react icons used above

