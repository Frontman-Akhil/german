// ============================================================
// RULE-BASED AI TUTOR ENGINE
// Works 100% offline — no API key required
// ============================================================

import type { CEFRLevel, TutorMode, Correction, ExplanationLanguage } from '../types';

// ——— Common Mistake Patterns ———
interface MistakePattern {
  pattern: RegExp;
  wrong: string;
  correct: string;
  explanation: string;
  explanationHinglish: string;
}

const MISTAKE_PATTERNS: MistakePattern[] = [
  {
    pattern: /\bich bin \d+ jahre haben\b/i,
    wrong: 'Ich habe 25 Jahre.',
    correct: 'Ich bin 25 Jahre alt.',
    explanation: 'Age in German uses "sein" (to be), not "haben" (to have). Always say "Ich bin X Jahre alt."',
    explanationHinglish: 'German mein umar ke liye "sein" (hona) use hota hai, "haben" (rakhna) nahi. Hamesha kaho "Ich bin X Jahre alt."',
  },
  {
    pattern: /\bich bin \d+ jahre\b(?!\s+alt)/i,
    wrong: 'Ich bin 25 Jahre.',
    correct: 'Ich bin 25 Jahre alt.',
    explanation: 'Do not forget "alt" (old) at the end: "Ich bin 25 Jahre ALT."',
    explanationHinglish: '"alt" (purana/old) bhoolna mat: "Ich bin 25 Jahre ALT."',
  },
  {
    pattern: /\bich heisse\b/i,
    wrong: 'Ich heisse',
    correct: 'Ich heiße',
    explanation: '"heissen" is spelled with "ß" (Eszett): "heiße". The ß represents a sharp "ss" sound after a long vowel.',
    explanationHinglish: '"heissen" ko "ß" (Eszett) se likhte hain: "heiße". ß long vowel ke baad sharp "ss" sound represent karta hai.',
  },
  {
    pattern: /\bauf wiedersehen\b(?! !)/i,
    wrong: 'auf Wiedersehen',
    correct: 'Auf Wiedersehen',
    explanation: 'In German, "Auf Wiedersehen" starts with a capital letter at the beginning of a sentence.',
    explanationHinglish: 'German mein sentence ke shuru mein "Auf Wiedersehen" capital letter se shuru hota hai.',
  },
];

// ——— Role-play Scenarios ———
const SCENARIOS: Record<string, { setup: string; setupHinglish: string; prompts: string[] }> = {
  shopkeeper: {
    setup: 'You are shopping at a German supermarket. The shopkeeper greets you.',
    setupHinglish: 'Tum ek German supermarket mein shopping kar rahe ho. Shopkeeper tumhe greet karta hai.',
    prompts: ['Guten Tag! Was kann ich für Sie tun?', 'Haben Sie noch Wünsche?', 'Das macht zusammen 12,50 Euro.'],
  },
  doctor: {
    setup: 'You are at a German doctor\'s appointment. The doctor asks about your symptoms.',
    setupHinglish: 'Tum ek German doctor ke paas appointment ke liye gaye ho. Doctor tumse symptoms ke baare mein poochh raha hai.',
    prompts: ['Guten Tag! Was fehlt Ihnen?', 'Seit wann haben Sie diese Beschwerden?', 'Ich verschreibe Ihnen ein Medikament.'],
  },
  ausbildung: {
    setup: 'You are in an Ausbildung interview. The interviewer asks about your motivation.',
    setupHinglish: 'Tum Ausbildung interview mein ho. Interviewer tumse tumhari motivation ke baare mein poochh raha hai.',
    prompts: [
      'Guten Tag! Bitte stellen Sie sich kurz vor.',
      'Warum möchten Sie diese Ausbildung machen?',
      'Was sind Ihre Stärken und Schwächen?',
      'Haben Sie Erfahrungen in diesem Bereich?',
      'Wo sehen Sie sich in fünf Jahren?',
    ],
  },
  stranger: {
    setup: 'You are at a train station and meet someone who wants to practice German with you.',
    setupHinglish: 'Tum train station par ho aur kisi aaise se milte ho jo tumhare saath German practice karna chahta hai.',
    prompts: ['Entschuldigung, sprechen Sie Deutsch?', 'Wohin fahren Sie?', 'Kommen Sie aus Deutschland?'],
  },
};

// ——— Question Banks ———
const QUIZ_QUESTIONS: Record<CEFRLevel, { q: string; a: string; hint: string }[]> = {
  A1: [
    { q: 'How do you say "Good morning" in German?', a: 'Guten Morgen', hint: 'Think about what "Morgen" means...' },
    { q: 'What is the German word for "water"?', a: 'Wasser', hint: 'It sounds similar to English "vasser"...' },
    { q: 'How do you say "I come from India" in German?', a: 'Ich komme aus Indien', hint: 'Use "kommen aus" for origin...' },
    { q: 'What article does "Mädchen" (girl) use?', a: 'das', hint: 'Think about the -chen ending rule...' },
    { q: 'How do you say "I am 20 years old" in German?', a: 'Ich bin 20 Jahre alt', hint: 'Use "sein" (to be) not "haben" for age...' },
  ],
  A2: [
    { q: 'How do you form the Perfekt of "lernen" (ich)?', a: 'Ich habe gelernt', hint: 'Most verbs use haben + ge-[stem]-t...' },
    { q: 'What does "seit" mean when used with time?', a: 'since / for (ongoing)', hint: 'Seit + present tense = started in past, still ongoing...' },
  ],
  B1: [
    { q: 'What is the Konjunktiv II form of "können" (ich)?', a: 'Ich könnte', hint: 'Modal verbs in Konjunktiv II use umlaut on the Präteritum stem...' },
  ],
  B2: [
    { q: 'What connector means "although" and introduces a subordinate clause?', a: 'obwohl', hint: 'This connector shows a contradiction...' },
  ],
  C1: [
    { q: 'What is the nominalized form of "entscheiden" (to decide)?', a: 'die Entscheidung', hint: 'The noun has the -ung suffix...' },
  ],
  C2: [
    { q: 'In which mood does German journalism report what someone said?', a: 'Konjunktiv I', hint: 'Not the same as Konjunktiv II for wishes/politeness...' },
  ],
};

// ——— Tutor Response Generator ———
export interface TutorResponse {
  text: string;
  corrections?: Correction[];
  followUp?: string;
  germanExample?: string;
}

export function generateTutorResponse(
  userMessage: string,
  mode: TutorMode,
  level: CEFRLevel,
  lang: ExplanationLanguage,
): TutorResponse {
  switch (mode) {
    case 'correct':
      return correctSentence(userMessage, lang);
    case 'explain':
      return explainConcept(userMessage, lang);
    case 'translate':
      return translateAndExplain(userMessage, lang);
    case 'quiz':
      return generateQuizQuestion(level, lang);
    case 'hint':
      return giveHint(userMessage, level, lang);
    case 'conversation':
      return conductConversation(userMessage, level, lang);
    case 'oral-exam':
      return oralExamQuestion(level, lang);
    case 'ausbildung-interview':
      return ausbildungInterview(userMessage, lang);
    case 'why-wrong':
      return explainWrong(userMessage, lang);
    default:
      return explainConcept(userMessage, lang);
  }
}

function correctSentence(sentence: string, lang: ExplanationLanguage): TutorResponse {
  const corrections: Correction[] = [];

  for (const pattern of MISTAKE_PATTERNS) {
    if (pattern.pattern.test(sentence)) {
      corrections.push({
        original: pattern.wrong,
        corrected: pattern.correct,
        explanation: lang !== 'Hinglish' ? pattern.explanation : '',
        explanationHinglish: lang !== 'English' ? pattern.explanationHinglish : '',
        example: pattern.correct,
      });
    }
  }

  if (corrections.length === 0) {
    const response = lang === 'Hinglish'
      ? `✅ Yeh sentence German mein sahi lag raha hai! Bilkul theek likha.\n\nAapne likha: **"${sentence}"**\n\nAgar tum nischit nahi ho, toh please apna poora sentence share karo.`
      : `✅ This sentence looks correct in German! Well done.\n\nYou wrote: **"${sentence}"**\n\nIf you are unsure about a specific part, share the full sentence and I'll check every word.`;
    return {
      text: response,
      followUp: 'Try writing another sentence and I will check it for you.',
    };
  }

  const corrText = corrections.map((c, i) => {
    const parts = [];
    parts.push(`**Correction ${i + 1}:**`);
    parts.push(`❌ Your sentence: *${c.original}*`);
    parts.push(`✅ Correct form: *${c.corrected}*`);
    if (lang !== 'Hinglish' && c.explanation) parts.push(`📖 Explanation: ${c.explanation}`);
    if (lang !== 'English' && c.explanationHinglish) parts.push(`📖 Samajhao: ${c.explanationHinglish}`);
    return parts.join('\n');
  }).join('\n\n');

  return {
    text: `I found ${corrections.length} correction${corrections.length > 1 ? 's' : ''} in your sentence:\n\n${corrText}`,
    corrections,
    followUp: 'Now try rewriting the corrected sentence from memory!',
  };
}

function explainConcept(topic: string, lang: ExplanationLanguage): TutorResponse {
  const t = topic.toLowerCase();

  if (t.includes('artikel') || t.includes('article') || t.includes('gender') || t.includes('der die das')) {
    return {
      text: lang === 'Hinglish'
        ? `**German Articles (der, die, das) ke baare mein:**\n\nGerman mein har noun ka ek gender hota hai:\n- **der** = Masculine (purushlinga) → der Mann, der Vater, der Bahnhof\n- **die** = Feminine (streelinga) → die Frau, die Stadt, die Zeitung\n- **das** = Neuter (napunsaka) → das Kind, das Buch, das Auto\n\n**Helpful rules:**\n- -ung ending → hamesha **die** (die Wohnung, die Meinung)\n- -chen/-lein ending → hamesha **das** (das Mädchen, das Brötchen)\n- Male people → mostly **der** (der Arzt, der Lehrer)\n\n**Golden rule:** Article ke saath noun seekho: "der Tisch" na ki sirf "Tisch"`
        : `**About German Articles (der, die, das):**\n\nEvery German noun has a grammatical gender:\n- **der** = Masculine → der Mann, der Vater, der Bahnhof\n- **die** = Feminine → die Frau, die Stadt, die Zeitung\n- **das** = Neuter → das Kind, das Buch, das Auto\n\n**Helpful rules:**\n- Nouns ending in -ung → always **die** (die Wohnung, die Meinung)\n- Nouns ending in -chen/-lein → always **das** (das Mädchen, das Brötchen)\n- Male people → mostly **der** (der Arzt, der Lehrer)\n\n**Golden rule:** Always learn the article with the noun: "der Tisch" not just "Tisch"`,
      followUp: 'Which noun\'s gender would you like to practise?',
      germanExample: 'der Tisch (table) • die Lampe (lamp) • das Fenster (window)',
    };
  }

  if (t.includes('verb') || t.includes('conjugat') || t.includes('sein') || t.includes('haben')) {
    return {
      text: lang === 'Hinglish'
        ? `**Verb Conjugation ke baare mein:**\n\nGerman mein verbs subject ke hisaab se change hote hain.\n\n**SEIN (hona):**\ních bin | du bist | er/sie/es ist\nwir sind | ihr seid | sie/Sie sind\n\n**HABEN (rakhna/hona):**\ních habe | du hast | er/sie/es hat\nwir haben | ihr habt | sie/Sie haben\n\n**Regular verbs (-en):**\nBasic rule: ich + [stem] + e\nExample: lernen → ich lerne, du lernst, er lernt`
        : `**About Verb Conjugation:**\n\nGerman verbs change their form according to the subject.\n\n**SEIN (to be):**\ních bin | du bist | er/sie/es ist\nwir sind | ihr seid | sie/Sie sind\n\n**HABEN (to have):**\ních habe | du hast | er/sie/es hat\nwir haben | ihr habt | sie/Sie haben\n\n**Regular verbs (-en):**\nBasic rule: ich + [stem] + e\nExample: lernen → ich lerne, du lernst, er lernt`,
      followUp: 'Which verb would you like me to conjugate for you?',
    };
  }

  if (t.includes('word order') || t.includes('wortstellung') || t.includes('v2')) {
    return {
      text: lang === 'Hinglish'
        ? `**German Word Order (Wortstellung):**\n\n**Main Rule: Verb always comes SECOND!**\n\nNormal order: Subject → Verb → Rest\nIch (1) lerne (2) Deutsch (3). ✓\n\nIf anything comes first (adverb, time, place):\nTime/Place (1) → Verb (2) → Subject (3)\nHeute (1) lerne (2) ich (3) Deutsch. ✓\nHeute ich lerne Deutsch. ✗\n\nThis is called "verb-second" (V2) rule — the most important rule in German!`
        : `**German Word Order:**\n\n**Main Rule: The verb always comes SECOND!**\n\nNormal order: Subject → Verb → Rest\nIch (1) lerne (2) Deutsch (3). ✓\n\nIf something else starts the sentence (adverb, time, place):\nTime/Place (1) → Verb (2) → Subject (3)\nHeute (1) lerne (2) ich (3) Deutsch. ✓\nHeute ich lerne Deutsch. ✗\n\nThis is the "verb-second" (V2) rule — the most important rule in German sentence structure!`,
      followUp: 'Can you try making a sentence that starts with "Morgen" (tomorrow)?',
    };
  }

  // Default response
  return {
    text: lang === 'Hinglish'
      ? `Main tumhara sawal samajh gaya! Main "${topic}" explain karta hoon.\n\nYeh topic German mein bahut zaroori hai. Seedha poochho — jaise:\n- "der/die/das explain karo"\n- "verb conjugation batao"\n- "word order explain karo"\n- "Konjunktiv II kya hai"\n\nMain turat jawab doonga!`
      : `I understand your question! I am here to explain "${topic}".\n\nFor best results, try asking specifically, such as:\n- "Explain der/die/das"\n- "How do I conjugate verbs?"\n- "What is word order in German?"\n- "Explain the Perfekt tense"\n\nI will answer immediately!`,
    followUp: 'What specific aspect of German would you like to explore?',
  };
}

function translateAndExplain(text: string, lang: ExplanationLanguage): TutorResponse {
  const translations: Record<string, { en: string; hi: string; note?: string }> = {
    'ich bin': { en: 'I am', hi: 'Main hoon', note: 'From verb "sein" (to be). 1st person singular.' },
    'wie heißen sie': { en: 'What is your name? (formal)', hi: 'Aapka naam kya hai? (formal)', note: 'heißen = to be called. Sie = formal you.' },
    'ich verstehe nicht': { en: 'I don\'t understand', hi: 'Mujhe samajh nahi aaya', note: 'Key phrase! Use this often.' },
    'entschuldigung': { en: 'Excuse me / Sorry', hi: 'Maaf kijiye', note: 'Also used to get attention.' },
    'bitte': { en: 'Please / You\'re welcome', hi: 'Kripaya / Koi baat nahi', note: 'Context-dependent.' },
    'danke': { en: 'Thank you', hi: 'Shukriya / Dhanyavaad', note: '"Danke schön" = Thank you very much.' },
  };

  const key = text.toLowerCase().trim();
  const found = Object.entries(translations).find(([k]) => key.includes(k));

  if (found) {
    const [phrase, trans] = found;
    return {
      text: `**Translation of "${phrase}":**\n\n🇬🇧 English: ${trans.en}\n${lang !== 'English' ? `🇮🇳 Hindi: ${trans.hi}\n` : ''}${trans.note ? `\n📝 Note: ${trans.note}` : ''}`,
      germanExample: phrase,
    };
  }

  return {
    text: `I can help you translate! Please write the German word or phrase you want translated.\n\nExample: Type "Guten Morgen" and I'll explain what it means and how it's used.`,
  };
}

function generateQuizQuestion(level: CEFRLevel, _lang: ExplanationLanguage): TutorResponse {
  const questions = QUIZ_QUESTIONS[level] || QUIZ_QUESTIONS.A1;
  const q = questions[Math.floor(Math.random() * questions.length)];

  return {
    text: `**Quiz Time! 🎯**\n\n${q.q}\n\nTake your time and type your answer. I'll let you know if you're right!`,
    followUp: `Hint: ${q.hint}`,
    germanExample: q.a,
  };
}

function giveHint(context: string, _level: CEFRLevel, lang: ExplanationLanguage): TutorResponse {
  return {
    text: lang === 'Hinglish'
      ? `**Hint time! 💡**\n\nAapke sawal ke liye ek hint:\n\n"${context}" ke baare mein sochte waqt, yeh yaad rakhna:\n- German mein verb hamesha doosre position par hota hai\n- Articles (der/die/das) noun ke saath seekho\n- Ending se gender pata chal sakta hai (-ung → die)\n\nKya ab answer dhundh sakte ho?`
      : `**Here's a hint! 💡**\n\nWhen thinking about "${context}":\n- Remember the verb-second (V2) rule\n- Learn articles together with nouns\n- Word endings often reveal the gender (-ung → die)\n\nCan you find the answer now?`,
    followUp: 'Try answering and I\'ll give you feedback!',
  };
}

function conductConversation(message: string, _level: CEFRLevel, lang: ExplanationLanguage): TutorResponse {
  const scenario = SCENARIOS.stranger;
  const prompt = scenario.prompts[Math.floor(Math.random() * scenario.prompts.length)];

  return {
    text: `🗣️ **German Conversation Practice:**\n\n${lang !== 'English' ? `*${scenario.setupHinglish}*\n\n` : `*${scenario.setup}*\n\n`}**My reply to "${message}":**\n\nDanke! Das ist interessant. ${prompt}\n\n*(Try replying in German! I'll help if you get stuck.)*`,
    followUp: 'Don\'t worry about mistakes — just try! Write something in German.',
  };
}

function oralExamQuestion(level: CEFRLevel, _lang: ExplanationLanguage): TutorResponse {
  const questions: Record<CEFRLevel, string[]> = {
    A1: [
      'Bitte stellen Sie sich vor. (Please introduce yourself.)',
      'Woher kommen Sie? (Where do you come from?)',
      'Was machen Sie beruflich? (What do you do for work?)',
    ],
    A2: [
      'Beschreiben Sie Ihren Alltag. (Describe your daily routine.)',
      'Was haben Sie gestern gemacht? (What did you do yesterday?)',
    ],
    B1: [
      'Welche Pläne haben Sie für die Zukunft? (What are your plans for the future?)',
      'Beschreiben Sie Ihre Heimatstadt. (Describe your home city.)',
    ],
    B2: [
      'Was sind Ihrer Meinung nach die Vorteile und Nachteile der Digitalisierung? (What are the advantages and disadvantages of digitalization in your opinion?)',
    ],
    C1: [
      'Diskutieren Sie die Auswirkungen des demografischen Wandels auf den deutschen Arbeitsmarkt.',
    ],
    C2: [
      'Analysieren Sie die rhetorischen Mittel in einem modernen politischen Diskurs.',
    ],
  };

  const qs = questions[level] || questions.A1;
  const q = qs[Math.floor(Math.random() * qs.length)];

  return {
    text: `🎓 **Oral Exam Practice (${level} Level):**\n\n**Question:** *${q}*\n\nYou have **2 minutes** to prepare your answer mentally, then type it in German.\n\n**Tip:** Aim for 3–5 sentences. Use connectors like "erstens", "außerdem", "deshalb".`,
    followUp: 'When ready, type your answer in German and I\'ll give you feedback.',
  };
}

function ausbildungInterview(_message: string, lang: ExplanationLanguage): TutorResponse {
  const interviewQuestions = SCENARIOS.ausbildung.prompts;
  const q = interviewQuestions[Math.floor(Math.random() * interviewQuestions.length)];

  return {
    text: `💼 **Ausbildung Interview Simulation:**\n\n${lang !== 'English' ? `*Tum ek German company mein Ausbildung interview de rahe ho.*\n\n` : `*You are in an Ausbildung interview at a German company.*\n\n`}**Interviewer:** *${q}*\n\n*(Apna jawab German mein likho! Main feedback dunga.)*`,
    followUp: 'Remember: Speak formally using "Sie" not "du". Start with "Guten Tag, mein Name ist..."',
  };
}

function explainWrong(sentence: string, lang: ExplanationLanguage): TutorResponse {
  const corrResult = correctSentence(sentence, lang);

  if (!corrResult.corrections || corrResult.corrections.length === 0) {
    return {
      text: lang === 'Hinglish'
        ? `Main bilkul samajh sakta hoon kyon tum confused hoge! Tumhara sentence dekhne mein sahi lagta hai.\n\nKya tum bata sakte ho konsa specific rule ya galti ke baare mein jaanna chahte ho?`
        : `I understand you might be confused! Your sentence actually appears correct to me.\n\nCan you tell me which specific rule or mistake you'd like explained?`,
    };
  }

  return {
    ...corrResult,
    text: `**Why your sentence needs correction:**\n\n${corrResult.text}\n\n**My corrected version → Try rewriting it!**`,
  };
}

// ——— Grammar Topic Quick Reference ———
export const GRAMMAR_TOPICS_QUICK = [
  { id: 'articles', label: 'Articles (der/die/das)', level: 'A1' as CEFRLevel },
  { id: 'verb-conj', label: 'Verb Conjugation', level: 'A1' as CEFRLevel },
  { id: 'word-order', label: 'Word Order (V2 Rule)', level: 'A1' as CEFRLevel },
  { id: 'negation', label: 'Negation (nicht/kein)', level: 'A1' as CEFRLevel },
  { id: 'pronouns', label: 'Personal Pronouns', level: 'A1' as CEFRLevel },
  { id: 'perfekt', label: 'Perfekt (Past Tense)', level: 'A2' as CEFRLevel },
  { id: 'dative', label: 'Dative Case', level: 'A2' as CEFRLevel },
  { id: 'konjunktiv2', label: 'Konjunktiv II', level: 'B1' as CEFRLevel },
  { id: 'passive', label: 'Passive Voice', level: 'B1' as CEFRLevel },
  { id: 'konjunktiv1', label: 'Konjunktiv I', level: 'B2' as CEFRLevel },
  { id: 'nominalization', label: 'Nominalization', level: 'C1' as CEFRLevel },
];
