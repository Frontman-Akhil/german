// ============================================================
// TEXT-TO-SPEECH & SPEECH RECOGNITION UTILITIES
// Uses browser-native Web Speech API (free, no API key needed)
// ============================================================

// ——— Text-to-Speech (TTS) ———
export function isTTSSupported(): boolean {
  return 'speechSynthesis' in window;
}

export function getGermanVoices(): SpeechSynthesisVoice[] {
  if (!isTTSSupported()) return [];
  return speechSynthesis.getVoices().filter(v =>
    v.lang.startsWith('de') || v.lang.startsWith('de-')
  );
}

export async function waitForVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(resolve => {
    const voices = getGermanVoices();
    if (voices.length > 0) {
      resolve(voices);
      return;
    }
    speechSynthesis.addEventListener('voiceschanged', () => {
      resolve(getGermanVoices());
    }, { once: true });
    // Fallback timeout
    setTimeout(() => resolve([]), 2000);
  });
}

export interface TTSOptions {
  rate?: number; // 0.1–10, default 1
  pitch?: number; // 0–2, default 1
  volume?: number; // 0–1, default 1
  slow?: boolean;
}

export function speak(text: string, options: TTSOptions = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!isTTSSupported()) {
      reject(new Error('Text-to-speech is not supported in this browser.'));
      return;
    }

    // Stop any current speech
    stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = options.slow ? 0.7 : (options.rate ?? 0.9);
    utterance.pitch = options.pitch ?? 1;
    utterance.volume = options.volume ?? 1;

    // Try to find a German voice
    const voices = getGermanVoices();
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }

    utterance.onend = () => {
      resolve();
    };
    utterance.onerror = (event) => {
      if (event.error !== 'interrupted') {
        reject(new Error(`Speech error: ${event.error}`));
      } else {
        resolve();
      }
    };

    speechSynthesis.speak(utterance);
  });
}

export function stopSpeaking(): void {
  if (isTTSSupported()) {
    speechSynthesis.cancel();
  }
}

export function isSpeaking(): boolean {
  return isTTSSupported() && speechSynthesis.speaking;
}

// ——— Speech Recognition (STT) ———
export interface STTResult {
  transcript: string;
  confidence: number;
  isFinal: boolean;
}

export function isSTTSupported(): boolean {
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

type STTCallback = (result: STTResult) => void;
type STTErrorCallback = (error: string) => void;

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  maxAlternatives: number;
  start(): void;
  stop(): void;
}

let recognition: SpeechRecognitionInstance | null = null;

export function startSpeechRecognition(
  onResult: STTCallback,
  onError: STTErrorCallback,
  onEnd?: () => void,
): void {
  if (!isSTTSupported()) {
    onError('Speech recognition is not supported in this browser. Please use Chrome for best results.');
    return;
  }

  stopSpeechRecognition();

  const SpeechRecognitionClass = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const instance: SpeechRecognitionInstance = new SpeechRecognitionClass();
  recognition = instance;
  instance.lang = 'de-DE';
  instance.continuous = false;
  instance.interimResults = true;
  instance.maxAlternatives = 1;

  instance.onresult = (event: SpeechRecognitionEvent) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      onResult({
        transcript: result[0].transcript,
        confidence: result[0].confidence,
        isFinal: result.isFinal,
      });
    }
  };

  instance.onerror = (event: SpeechRecognitionErrorEvent) => {
    const messages: Record<string, string> = {
      'not-allowed': 'Microphone permission denied. Please allow microphone access in your browser settings.',
      'no-speech': 'No speech detected. Please try speaking again.',
      'audio-capture': 'No microphone detected. Please connect a microphone.',
      'network': 'Network error. Speech recognition requires an internet connection.',
      'aborted': 'Speech recognition was stopped.',
    };
    onError(messages[event.error] || `Speech recognition error: ${event.error}`);
  };

  instance.onend = () => {
    if (recognition === instance) recognition = null;
    onEnd?.();
  };

  instance.start();
}

export function stopSpeechRecognition(): void {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
}

// ——— Transcript comparison (simple WER-based) ———
export interface TranscriptComparison {
  expectedWords: string[];
  spokenWords: string[];
  matchedWords: number;
  missedWords: string[];
  extraWords: string[];
  accuracy: number; // 0–100
  feedback: string;
}

export function compareTranscript(expected: string, spoken: string): TranscriptComparison {
  const normalize = (s: string) => s.toLowerCase().replace(/[.,!?;:]/g, '').trim();
  const expectedWords = normalize(expected).split(/\s+/).filter(Boolean);
  const spokenWords = normalize(spoken).split(/\s+/).filter(Boolean);

  const expectedSet = [...expectedWords];
  const matchedWords = spokenWords.filter(w => {
    const idx = expectedSet.indexOf(w);
    if (idx !== -1) { expectedSet.splice(idx, 1); return true; }
    return false;
  }).length;

  const missedWords = expectedWords.filter(w => !spokenWords.includes(w));
  const extraWords = spokenWords.filter(w => !expectedWords.includes(w));
  const accuracy = expectedWords.length > 0 ? Math.round((matchedWords / expectedWords.length) * 100) : 0;

  let feedback: string;
  if (accuracy >= 90) feedback = 'Excellent! Your pronunciation matches the sentence very well.';
  else if (accuracy >= 70) feedback = 'Good job! A few words were different — keep practising.';
  else if (accuracy >= 50) feedback = 'Nice try! Focus on the missed words and try again.';
  else feedback = 'Keep practising! Listen to the audio carefully and repeat.';

  return { expectedWords, spokenWords, matchedWords, missedWords, extraWords, accuracy, feedback };
}
