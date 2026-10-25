// ============================================================
// SPEAKING STUDIO PAGE
// ============================================================

import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import {
  Mic, Square, RotateCcw, Headphones, Timer, BookOpen,
} from 'lucide-react';
import {
  startSpeechRecognition, stopSpeechRecognition,
  isTTSSupported, isSTTSupported, compareTranscript,
} from '../lib/speech';
import { useAppStore } from '../store/useAppStore';
import { SectionHeader, TabBar, ProgressBar, AudioButton, LevelBadge } from '../components/shared';

const SPEAKING_PROMPTS = {
  A1: [
    { id: 'sp-a1-1', type: 'introduction', title: 'Self Introduction', text: 'Introduce yourself in German: name, country, age, and language.', prompt: 'Ich heiße [Name]. Ich komme aus Indien. Ich bin [Alter] Jahre alt. Ich spreche Hindi und lerne Deutsch.', audioGuide: 'Ich heiße Rajesh. Ich komme aus Indien. Ich bin 25 Jahre alt. Ich spreche Hindi und lerne Deutsch.' },
    { id: 'sp-a1-2', type: 'repeat', title: 'Greetings Practice', text: 'Repeat each greeting after hearing it.', prompt: 'Guten Morgen! Wie geht es Ihnen?', audioGuide: 'Guten Morgen! Wie geht es Ihnen?' },
    { id: 'sp-a1-3', type: 'answer', title: 'Answer Questions', text: 'Answer in German: Woher kommen Sie?', prompt: 'Ich komme aus Indien.', audioGuide: 'Ich komme aus Indien.' },
    { id: 'sp-a1-4', type: 'repeat', title: 'Numbers Practice', text: 'Say the price: Das kostet achtundzwanzig Euro.', prompt: 'Das kostet achtundzwanzig Euro.', audioGuide: 'Das kostet achtundzwanzig Euro.' },
  ],
  A2: [
    { id: 'sp-a2-1', type: 'description', title: 'Daily Routine', text: 'Describe your morning routine in German.', prompt: 'Ich stehe um sieben Uhr auf. Dann dusche ich mich. Danach frühstücke ich und fahre zur Arbeit.', audioGuide: 'Ich stehe um sieben Uhr auf. Dann dusche ich mich. Danach frühstücke ich und fahre zur Arbeit.' },
  ],
  B1: [
    { id: 'sp-b1-1', type: 'presentation', title: 'Ausbildung Presentation', text: 'Present yourself for an Ausbildung interview.', prompt: 'Guten Tag! Mein Name ist [Name]. Ich bewerbe mich um den Ausbildungsplatz als Kaufmann. Ich komme aus Indien und lebe seit einem Jahr in Deutschland. Meine Stärken sind Zuverlässigkeit und Teamfähigkeit.', audioGuide: 'Guten Tag! Mein Name ist Rajesh Kumar. Ich bewerbe mich um den Ausbildungsplatz als Kaufmann.' },
  ],
  B2: [
    { id: 'sp-b2-1', type: 'discussion', title: 'Opinion Discussion', text: 'Give your opinion on digitalization in education.', prompt: 'Meiner Meinung nach hat die Digitalisierung viele Vorteile für die Bildung. Einerseits ermöglicht sie flexibles Lernen, andererseits birgt sie auch Risiken.', audioGuide: 'Meiner Meinung nach hat die Digitalisierung viele Vorteile für die Bildung.' },
  ],
  C1: [
    { id: 'sp-c1-1', type: 'argument', title: 'Complex Argument', text: 'Discuss the demographic change in Germany.', prompt: 'Der demografische Wandel stellt Deutschland vor erhebliche Herausforderungen. Besonders der Fachkräftemangel und die Überalterung der Gesellschaft erfordern innovative Lösungsansätze.', audioGuide: 'Der demografische Wandel stellt Deutschland vor erhebliche Herausforderungen.' },
  ],
  C2: [
    { id: 'sp-c2-1', type: 'rhetoric', title: 'Rhetorical Speech', text: 'Discuss the role of language in identity formation.', prompt: 'Sprache ist mehr als ein Kommunikationsmittel – sie ist ein Spiegel der Identität, ein Träger von Kultur und Geschichte.', audioGuide: 'Sprache ist mehr als ein Kommunikationsmittel – sie ist ein Spiegel der Identität.' },
  ],
};

const ROLE_PLAYS = [
  { id: 'rp-1', title: 'At the Bakery', level: 'A1', scenario: 'You are buying bread at a German bakery.', starterGerman: 'Guten Tag! Was kann ich für Sie tun?', starterEnglish: 'Good day! What can I do for you?' },
  { id: 'rp-2', title: 'Doctor\'s Appointment', level: 'A2', scenario: 'You call to make a doctor\'s appointment.', starterGerman: 'Arztpraxis Schmidt, guten Tag!', starterEnglish: 'Doctor\'s practice Schmidt, good day!' },
  { id: 'rp-3', title: 'Ausbildung Interview', level: 'B1', scenario: 'You are in your Ausbildung job interview.', starterGerman: 'Guten Tag! Bitte setzen Sie sich. Stellen Sie sich kurz vor.', starterEnglish: 'Good day! Please sit down. Please introduce yourself briefly.' },
];

export function SpeakingStudio() {
  const { progress, awardXP } = useAppStore();
  const [tab, setTab] = useState<'practice' | 'roleplay' | 'tips'>('practice');
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [comparison, setComparison] = useState<any>(null);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [typedSubmitted, setTypedSubmitted] = useState(false);
  const [roleplayAnswers, setRoleplayAnswers] = useState<Record<string, string>>({});
  const [roleplaySubmitted, setRoleplaySubmitted] = useState<Record<string, boolean>>({});
  const recognitionAwarded = useRef(false);

  const sttSupported = isSTTSupported();
  const ttsSupported = isTTSSupported();

  const prompts = SPEAKING_PROMPTS[progress.currentLevel] ?? SPEAKING_PROMPTS.A1;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timerActive) {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  const handleStartListening = () => {
    setTranscript('');
    setComparison(null);
    setIsListening(true);
    setTimerActive(true);
    recognitionAwarded.current = false;

    startSpeechRecognition(
      (result) => {
        setTranscript(result.transcript);
        if (result.isFinal && selectedPrompt) {
          const comp = compareTranscript(selectedPrompt.prompt, result.transcript);
          setComparison(comp);
          setIsListening(false);
          setTimerActive(false);
          if (!recognitionAwarded.current) {
            recognitionAwarded.current = true;
            awardXP(comp.accuracy >= 70 ? 15 : 5);
          }
        }
      },
      (error) => {
        setIsListening(false);
        setTimerActive(false);
        setTranscript(`Error: ${error}`);
      },
      () => {
        setIsListening(false);
        setTimerActive(false);
      }
    );
  };

  const handleStopListening = () => {
    stopSpeechRecognition();
    setIsListening(false);
    setTimerActive(false);
    if (transcript && selectedPrompt) {
      const comp = compareTranscript(selectedPrompt.prompt, transcript);
      setComparison(comp);
    }
  };

  const handleCheckTyped = () => {
    if (!selectedPrompt || !typedAnswer.trim() || typedSubmitted) return;
    const comp = compareTranscript(selectedPrompt.prompt, typedAnswer.trim());
    setComparison(comp);
    setTypedSubmitted(true);
    awardXP(comp.accuracy >= 70 ? 10 : 3);
  };

  const reset = () => {
    setTranscript('');
    setComparison(null);
    setTimer(0);
    setTypedAnswer('');
    setTypedSubmitted(false);
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <SectionHeader
        title="Speaking Studio"
        subtitle="Pronunciation, speaking practice, and role-play"
        action={
          <div className="flex gap-2 text-xs text-slate-500 items-center">
            <span className={sttSupported ? 'chip-success' : 'chip-danger'}>
              🎤 {sttSupported ? 'Mic available' : 'No mic'}
            </span>
            <span className={ttsSupported ? 'chip-success' : 'chip-neutral'}>
              🔊 {ttsSupported ? 'Audio available' : 'No audio'}
            </span>
          </div>
        }
      />

      {!sttSupported && (
        <div className="card p-4 border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/20">
          <p className="text-sm text-amber-700 dark:text-amber-300 font-medium">
            ⚠️ Speech recognition is not available in this browser. Use Chrome for the best experience.
            You can still practice using the typed input below.
          </p>
        </div>
      )}

      <TabBar
        tabs={[
          { id: 'practice' as const, label: 'Practice', icon: <Mic className="h-4 w-4" /> },
          { id: 'roleplay' as const, label: 'Role-Play', icon: <BookOpen className="h-4 w-4" /> },
          { id: 'tips' as const, label: 'Tips', icon: <Headphones className="h-4 w-4" /> },
        ]}
        active={tab}
        onChange={setTab}
      />

      {tab === 'practice' && (
        <div className="space-y-4">
          {/* Prompt Selection */}
          <div className="grid gap-2">
            {prompts.map(prompt => (
              <button
                key={prompt.id}
                onClick={() => { setSelectedPrompt(prompt); reset(); }}
                className={clsx(
                  'w-full text-left p-4 rounded-xl border-2 transition-all',
                  selectedPrompt?.id === prompt.id
                    ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/40'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300',
                )}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-slate-800 dark:text-white text-sm">{prompt.title}</p>
                  <span className="chip-neutral text-[10px]">{prompt.type}</span>
                </div>
                <p className="text-slate-500 text-xs">{prompt.text}</p>
              </button>
            ))}
          </div>

          {selectedPrompt && (
            <div className="card p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2">📝 Target sentence:</p>
                <div className="bg-brand-50 dark:bg-brand-950/30 rounded-xl p-4">
                  <p className="german-text text-lg leading-relaxed">{selectedPrompt.prompt}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <AudioButton text={selectedPrompt.audioGuide} label="Listen to example" />
                    <span className="text-xs text-slate-500">Listen first, then speak</span>
                  </div>
                </div>
              </div>

              {/* Timer */}
              {timerActive && (
                <div className="flex items-center justify-center gap-2 text-brand-600 dark:text-brand-400">
                  <Timer className="h-4 w-4 animate-pulse" />
                  <span className="font-mono font-bold">{formatTime(timer)}</span>
                </div>
              )}

              {/* Mic controls */}
              <div className="flex flex-col items-center gap-4">
                {sttSupported ? (
                  <button
                    onClick={isListening ? handleStopListening : handleStartListening}
                    className={clsx(
                      'w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-95',
                      isListening
                        ? 'bg-danger-500 hover:bg-danger-600 animate-pulse'
                        : 'bg-gradient-brand hover:shadow-brand-lg',
                    )}
                    aria-label={isListening ? 'Stop recording' : 'Start recording'}
                  >
                    {isListening
                      ? <Square className="h-8 w-8 text-white" />
                      : <Mic className="h-8 w-8 text-white" />
                    }
                  </button>
                ) : null}

                <p className="text-xs text-slate-500">
                  {isListening ? '🔴 Recording... speak now' : sttSupported ? 'Tap to record' : 'Microphone not available'}
                </p>
              </div>

              {/* Live Transcript */}
              {transcript && (
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-slate-500 mb-2">🎤 What I heard:</p>
                  <p className="text-slate-800 dark:text-white text-sm">{transcript}</p>
                </div>
              )}

              {/* Typed alternative */}
              <div>
                <p className="text-xs font-semibold text-slate-500 mb-2">⌨️ Or type your answer:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={typedAnswer}
                    onChange={e => setTypedAnswer(e.target.value)}
                    placeholder="Type the German sentence..."
                    className="input flex-1"
                    disabled={typedSubmitted}
                    onKeyDown={e => e.key === 'Enter' && handleCheckTyped()}
                  />
                  <button onClick={handleCheckTyped} disabled={!typedAnswer.trim() || typedSubmitted} className="btn-brand">
                    {typedSubmitted ? 'Checked' : 'Check'}
                  </button>
                </div>
              </div>

              {/* Comparison Result */}
              {comparison && (
                <div className={clsx(
                  'rounded-2xl p-4 border-2 animate-slide-up',
                  comparison.accuracy >= 80 ? 'border-success-400 bg-success-50 dark:bg-success-900/20' :
                  comparison.accuracy >= 50 ? 'border-gold-400 bg-gold-50 dark:bg-yellow-900/20' :
                  'border-danger-400 bg-danger-50 dark:bg-danger-900/20',
                )}>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-bold text-slate-800 dark:text-white">
                      {comparison.accuracy >= 80 ? '🎉 Excellent!' : comparison.accuracy >= 50 ? '👍 Good try!' : '📚 Keep practising!'}
                    </p>
                    <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">{comparison.accuracy}%</span>
                  </div>
                  <ProgressBar value={comparison.accuracy} color={comparison.accuracy >= 80 ? 'success' : comparison.accuracy >= 50 ? 'gold' : 'danger'} />
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">{comparison.feedback}</p>
                  {comparison.missedWords.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs text-slate-500">Missed words:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {comparison.missedWords.map((w: string) => (
                          <span key={w} className="chip-danger text-[10px]">{w}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  <p className="text-[10px] text-slate-400 mt-3">
                    ℹ️ Feedback is based on text comparison, not acoustic pronunciation analysis.
                  </p>
                  <button onClick={reset} className="btn-ghost btn-sm mt-2">
                    <RotateCcw className="h-3.5 w-3.5" /> Try Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {tab === 'roleplay' && (
        <div className="space-y-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Practice real-life German conversations in these common scenarios.
          </p>
          {ROLE_PLAYS.map(rp => (
            <div key={rp.id} className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold text-slate-800 dark:text-white">{rp.title}</h3>
                <LevelBadge level={rp.level as any} size="xs" />
              </div>
              <p className="text-slate-500 text-sm mb-4">{rp.scenario}</p>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 mb-4">
                <p className="text-xs text-slate-400 mb-1">Scenario starts:</p>
                <div className="flex items-start gap-2">
                  <AudioButton text={rp.starterGerman} size="sm" />
                  <div>
                    <p className="german-text text-sm">{rp.starterGerman}</p>
                    <p className="text-slate-500 text-xs">{rp.starterEnglish}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <textarea
                  value={roleplayAnswers[rp.id] ?? ''}
                  onChange={e => setRoleplayAnswers(prev => ({ ...prev, [rp.id]: e.target.value }))}
                  placeholder="Type your German response here..."
                  className="textarea"
                  rows={3}
                  disabled={roleplaySubmitted[rp.id]}
                />
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (!roleplayAnswers[rp.id]?.trim() || roleplaySubmitted[rp.id]) return;
                      setRoleplaySubmitted(prev => ({ ...prev, [rp.id]: true }));
                      awardXP(10);
                    }}
                    disabled={!roleplayAnswers[rp.id]?.trim() || roleplaySubmitted[rp.id]}
                    className="btn-brand btn-sm flex-1"
                  >
                    {roleplaySubmitted[rp.id] ? 'Response Submitted' : 'Submit Response'}
                  </button>
                  <AudioButton text={rp.starterGerman} label="Listen" size="sm" />
                </div>
                {roleplaySubmitted[rp.id] && (
                  <p className="text-xs text-success-600">
                    Response recorded. Continue the conversation by speaking the next line aloud.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'tips' && (
        <div className="space-y-4">
          {[
            { title: 'W sounds like V', tip: 'German "W" is always pronounced like English "V". "Wasser" = "Vasser"', example: 'Wasser, Winter, Welt', emoji: '🔤' },
            { title: 'Sch = SH', tip: '"Sch" in German is always "sh". Never "sk" or "sch".', example: 'Schule, Schrank, schön', emoji: '📢' },
            { title: 'Sp/St at start = Shp/Sht', tip: 'When "sp" or "st" starts a word, they sound like "shp" and "sht".', example: 'Sprechen, Straße, Stadt', emoji: '🗣️' },
            { title: 'Ch after e/i = soft hiss', tip: 'After e or i, "ch" sounds like a soft hissing sound (like "huge" in British English).', example: 'ich, nicht, Mädchen', emoji: '💨' },
            { title: 'Ch after a/o/u = guttural', tip: 'After a, o, u, "ch" sounds like the Scottish "loch" — a guttural sound from the back of the throat.', example: 'Buch, Koch, Dach', emoji: '🏔️' },
            { title: 'Always say ALL syllables', tip: 'Unlike English, German does not swallow syllables. Pronounce every letter clearly.', example: 'Danke = DAN-ke (not "danke")', emoji: '🎯' },
          ].map(({ title, tip, example, emoji }) => (
            <div key={title} className="card p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{emoji}</span>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-sm">{title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{tip}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <AudioButton text={example} size="sm" />
                    <p className="german-text text-sm">{example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
