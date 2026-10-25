// ============================================================
// GERMAN LANGUAGE ACADEMY – CURRICULUM DATA
// A1 Complete + Sample modules for A2–C2
// ============================================================

import type { Module, Lesson, CEFRLevel } from '../types';

// ——— A1 MODULE 1: ALPHABET & PRONUNCIATION ———
const A1_MODULE_1: Module = {
  id: 'm-a1-01',
  level: 'A1',
  title: 'Alphabet & Pronunciation',
  titleHinglish: 'Akshar aur Uccharan',
  description: 'Learn the German alphabet, special characters, and basic pronunciation rules.',
  descriptionHinglish: 'German alphabet, special characters (ä, ö, ü, ß) aur basic pronunciation sikho.',
  skills: ['listening', 'speaking'],
  order: 1,
  isComplete: false,
  lessons: [
    {
      id: 'l-a1-01-01',
      level: 'A1',
      moduleId: 'm-a1-01',
      title: 'The German Alphabet',
      titleHinglish: 'German Akshar Mala',
      objective: 'Name and recognize all 26 letters plus umlauts and ß',
      objectiveHinglish: 'Saarey 26 akshar aur umlauts (ä, ö, ü) aur ß pahchaan sako aur bol sako',
      estimatedMinutes: 15,
      skillFocus: ['listening', 'speaking'],
      prerequisites: [],
      order: 1,
      grammarPoints: [],
      vocabulary: [],
      content: {
        explanation: `The German alphabet has 26 letters — just like English — but with 4 extra characters: **ä**, **ö**, **ü** (called Umlauts), and **ß** (Eszett).

**Key pronunciation differences from English:**
- **W** sounds like English "V" → Wolf = "Volf"
- **V** sounds like English "F" → Vater = "Fater"
- **J** sounds like English "Y" → Ja = "Ya"
- **Z** sounds like "TS" → Zug = "Tsug"
- **ß** is like a double "S" → Straße = "Strasse"`,
        explanationHinglish: `German alphabet mein 26 letters hote hain — bilkul English ki tarah — lekin 4 extra characters bhi hain: **ä**, **ö**, **ü** (inhe Umlauts kehte hain) aur **ß** (Eszett).

**English se alag pronunciation:**
- **W** English ke "V" jaisa bolta hai → Wolf = "Volf"
- **V** English ke "F" jaisa bolta hai → Vater = "Fater"  
- **J** English ke "Y" jaisa bolta hai → Ja = "Ya"
- **Z** "TS" jaisa bolta hai → Zug = "Tsug"
- **ß** double "S" jaisa hota hai → Straße = "Strasse"`,
        examples: [
          {
            german: 'Das Alphabet: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
            english: 'The alphabet: A through Z',
            hinglish: 'Alphabet: A se Z tak',
            audioText: 'Das Alphabet: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
          },
          {
            german: 'Sonderbuchstaben: Ä (ae), Ö (oe), Ü (ue), ß (ss)',
            english: 'Special characters: Ä, Ö, Ü, and ß',
            hinglish: 'Special characters: Ä, Ö, Ü aur ß',
            audioText: 'Sonderbuchstaben: Ä wie in Äpfel, Ö wie in Öl, Ü wie in über, ß wie in Straße',
          },
          {
            german: 'Wie buchstabieren Sie Ihren Namen?',
            english: 'How do you spell your name?',
            hinglish: 'Aap apna naam kaise spell karte hain?',
            breakdown: [
              { word: 'Wie', role: 'question word', meaning: 'How' },
              { word: 'buchstabieren', role: 'verb', meaning: 'to spell' },
              { word: 'Sie', role: 'formal pronoun', meaning: 'you (formal)' },
              { word: 'Ihren', role: 'possessive (accusative)', meaning: 'your' },
              { word: 'Namen', role: 'noun (accusative)', meaning: 'name' },
            ],
            audioText: 'Wie buchstabieren Sie Ihren Namen?',
          },
        ],
        realLifeContext: 'When you fill out forms (like Anmeldeformular or Visa form) in Germany, the officer often asks you to spell your name: "Buchstabieren Sie bitte Ihren Namen." Knowing the alphabet helps you reply correctly.',
        pronunciationGuide: [
          { word: 'Ä', phonetic: 'like "e" in "bed"', syllables: 'Ä', tips: 'Open your mouth wide, say "e" but with lips more open.' },
          { word: 'Ö', phonetic: 'like "u" in "burn" (British)', syllables: 'Ö', tips: 'Say "e" but round your lips as if saying "o".' },
          { word: 'Ü', phonetic: 'no exact English equivalent', syllables: 'Ü', tips: 'Say "ee" but round your lips forward.' },
          { word: 'ß', phonetic: '"ss" (sharp S)', syllables: 'ß', tips: 'Always pronounced as "ss" — never as "z".' },
        ],
        culturalNote: 'In Germany, when you register your address (Anmeldung), open a bank account, or visit a doctor, you will often need to spell your name. Germans are very precise about spelling.',
        summary: [
          'German has 26 letters + 4 special characters (ä, ö, ü, ß)',
          'W = V sound, V = F sound, J = Y sound, Z = TS sound',
          'ß is always "ss" — never "z"',
          'Umlauts (ä, ö, ü) change the vowel sound significantly',
          'You can write ae, oe, ue when umlauts are unavailable (e.g., on old keyboards)',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-01-01-01',
          type: 'multiple-choice',
          question: 'How is the German letter "W" pronounced?',
          questionHinglish: 'German mein "W" letter kaise bolta hai?',
          options: ['Like English "W" (wet)', 'Like English "V" (vet)', 'Like English "B" (bet)', 'Like English "F" (felt)'],
          correctAnswer: 'Like English "V" (vet)',
          explanation: 'German "W" is always pronounced like the English "V" sound. Example: "Wasser" = "Vasser"',
          explanationHinglish: 'German mein "W" hamesha English ke "V" jaisa bolta hai. Jaise: "Wasser" = "Vasser"',
          difficulty: 1,
          xpReward: 5,
          tags: ['pronunciation', 'alphabet'],
        },
        {
          id: 'ex-a1-01-01-02',
          type: 'multiple-choice',
          question: 'Which of these is a German special character (Sonderbuchstabe)?',
          questionHinglish: 'Inme se kaun sa German special character (Sonderbuchstabe) hai?',
          options: ['é', 'ü', 'ñ', 'ç'],
          correctAnswer: 'ü',
          explanation: 'ü is a German umlaut. The others (é, ñ, ç) belong to French and Spanish.',
          explanationHinglish: 'ü ek German umlaut hai. Baaki (é, ñ, ç) French aur Spanish mein use hote hain.',
          difficulty: 1,
          xpReward: 5,
          tags: ['alphabet', 'umlauts'],
        },
        {
          id: 'ex-a1-01-01-03',
          type: 'multiple-choice',
          question: 'How do you spell "ß" when you cannot type it?',
          questionHinglish: 'Jab aap "ß" type nahi kar sakte, to kaise likhte hain?',
          options: ['b', 'sz', 'ss', 'zz'],
          correctAnswer: 'ss',
          explanation: '"ß" is written as "ss" when the special character is unavailable. Example: Straße → Strasse',
          explanationHinglish: '"ß" ko "ss" se replace karte hain jab special character available nahi hota. Jaise: Straße → Strasse',
          difficulty: 1,
          xpReward: 5,
          tags: ['alphabet', 'spelling'],
        },
        {
          id: 'ex-a1-01-01-04',
          type: 'multiple-choice',
          question: 'How is the German "J" pronounced?',
          questionHinglish: 'German mein "J" kaise bolta hai?',
          options: ['Like English "J" (jump)', 'Like English "Y" (yes)', 'Like English "G" (go)', 'Like English "H" (hat)'],
          correctAnswer: 'Like English "Y" (yes)',
          explanation: 'German "J" sounds like English "Y". Example: "Ja" (yes) = "Ya", "Jahr" (year) = "Yaar"',
          explanationHinglish: 'German "J" English ke "Y" jaisa bolta hai. Jaise: "Ja" (yes) = "Ya"',
          difficulty: 1,
          xpReward: 5,
          tags: ['pronunciation', 'alphabet'],
        },
        {
          id: 'ex-a1-01-01-05',
          type: 'fill-blank',
          question: 'Complete: German "Z" is pronounced like ___.',
          questionHinglish: 'Complete karo: German "Z" ___ jaisa bolta hai.',
          options: [],
          correctAnswer: 'TS',
          explanation: 'German "Z" is always "TS". Example: "Zug" (train) = "Tsug", "Zehn" (ten) = "Tsayn"',
          explanationHinglish: 'German "Z" hamesha "TS" bolta hai. Jaise: "Zug" (train) = "Tsug"',
          difficulty: 1,
          xpReward: 8,
          tags: ['pronunciation', 'alphabet'],
        },
      ],
    },
    {
      id: 'l-a1-01-02',
      level: 'A1',
      moduleId: 'm-a1-01',
      title: 'Basic Pronunciation Rules',
      titleHinglish: 'Basic Uccharan Ke Niyam',
      objective: 'Pronounce common German sounds, vowels, and consonant combinations correctly',
      objectiveHinglish: 'Common German sounds, vowels aur consonant combinations sahi tarah se bolo',
      estimatedMinutes: 20,
      skillFocus: ['listening', 'speaking'],
      prerequisites: ['l-a1-01-01'],
      order: 2,
      grammarPoints: [],
      vocabulary: [],
      content: {
        warmUp: [
          'How is the German "W" pronounced? (Answer: Like "V")',
          'What does "ß" become when written on a normal keyboard? (Answer: "ss")',
        ],
        explanation: `German pronunciation is very **consistent** — words are almost always pronounced exactly as they are spelled. This is easier than English!

**Key vowel sounds:**
- **a** = "ah" (like in "father") → Tag (day) = "Tahg"
- **e** = "eh" (like in "bed") → Bett (bed) = "Bet"
- **i** = "ee" (like in "see") → Kind (child) = "Kint"
- **o** = "oh" (like in "go") → rot (red) = "Roht"
- **u** = "oo" (like in "food") → Hund (dog) = "Hoont"

**Long vs. Short vowels:**
A double vowel or vowel followed by 'h' is usually long: Boot (boat) = "Boht"
A vowel followed by double consonant is usually short: Butter = "BOOTter"

**Important consonant rules:**
- **ch** after a/o/u = throat sound (like Scottish "loch") → Buch, Koch
- **ch** after e/i = soft hissing sound → ich, nicht, Mädchen
- **sch** = "sh" → Schule (school) = "Shoo-le"
- **sp** at start = "shp" → Sprache = "Shpra-khe"
- **st** at start = "sht" → Straße = "Shtrah-se"`,
        explanationHinglish: `German pronunciation bahut **consistent** hai — words almost hamesha waise hi bolte hain jaise likhte hain. Yeh English se bahut aasaan hai!

**Key vowel sounds:**
- **a** = "aah" (jaise "father" mein) → Tag (din) = "Tahg"
- **e** = "eh" (jaise "bed" mein) → Bett (palang) = "Bet"
- **i** = "ee" (jaise "see" mein) → Kind (baccha) = "Kint"
- **o** = "oh" (jaise "go" mein) → rot (laal) = "Roht"
- **u** = "oo" (jaise "food" mein) → Hund (kutta) = "Hoont"

**Zaruri consonant rules:**
- **ch** a/o/u ke baad = gale ki awaaz (Scottish "loch" jaisi) → Buch, Koch
- **ch** e/i ke baad = halki si seeti jaisi awaaz → ich, nicht
- **sch** = "sh" → Schule (school) = "Shoo-le"
- **sp** shuru mein = "shp" → Sprechen = "Shpre-khen"
- **st** shuru mein = "sht" → Straße = "Shtrah-se"`,
        examples: [
          {
            german: 'Ich spreche Deutsch.',
            english: 'I speak German.',
            hinglish: 'Main German bolta hoon.',
            breakdown: [
              { word: 'Ich', role: 'personal pronoun', meaning: 'I' },
              { word: 'spreche', role: 'verb (1st person singular)', meaning: 'speak' },
              { word: 'Deutsch', role: 'noun', meaning: 'German (language)' },
            ],
            audioText: 'Ich spreche Deutsch.',
          },
          {
            german: 'Die Schule ist groß.',
            english: 'The school is big.',
            hinglish: 'School bada hai.',
            audioText: 'Die Schule ist groß.',
          },
        ],
        realLifeContext: 'When you arrive at a German office or Ausbildung interview, saying "Ich spreche ein bisschen Deutsch" (I speak a little German) with correct pronunciation makes a great first impression!',
        pronunciationGuide: [
          { word: 'ich', phonetic: '"ikh" (soft ch)', syllables: 'ich', tips: 'Put your tongue near the roof of your mouth and breathe out softly — like a soft "h".' },
          { word: 'Schule', phonetic: '"SHOO-le"', syllables: 'Schu-le', tips: '"Sch" = always "sh" in German.' },
          { word: 'sprechen', phonetic: '"SHPRE-khen"', syllables: 'spre-chen', tips: '"Sp" at start = "shp"; "ch" after e = soft hissing sound.' },
        ],
        summary: [
          'German spelling and pronunciation are very consistent',
          'Vowels: a="ah", e="eh", i="ee", o="oh", u="oo"',
          'sch = "sh", sp/st at word start = "shp"/"sht"',
          'ch = throat sound after a/o/u; soft hiss after e/i',
          'German words always follow the same pronunciation rules',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-01-02-01',
          type: 'multiple-choice',
          question: 'How is "Schule" (school) pronounced?',
          questionHinglish: '"Schule" (school) kaise bolta hai?',
          options: ['"SKOO-le"', '"SHOO-le"', '"CHOO-le"', '"ZOO-le"'],
          correctAnswer: '"SHOO-le"',
          explanation: '"Sch" in German is always pronounced "sh". So "Schule" = "SHOO-le"',
          explanationHinglish: 'German mein "Sch" hamesha "sh" bolta hai. Isliye "Schule" = "SHOO-le"',
          difficulty: 1,
          xpReward: 5,
          tags: ['pronunciation', 'consonants'],
        },
        {
          id: 'ex-a1-01-02-02',
          type: 'multiple-choice',
          question: 'How is "Straße" pronounced?',
          questionHinglish: '"Straße" kaise bolta hai?',
          options: ['"STRAH-se"', '"SHTRAH-se"', '"SKRAH-se"', '"ZRAH-se"'],
          correctAnswer: '"SHTRAH-se"',
          explanation: '"St" at the beginning of a German word is pronounced "Sht". "Straße" = "SHTRAH-se"',
          explanationHinglish: 'German word ke shuru mein "St" = "Sht" bolta hai. "Straße" = "SHTRAH-se"',
          difficulty: 2,
          xpReward: 8,
          tags: ['pronunciation', 'consonants'],
        },
      ],
    },
  ],
};

// ——— A1 MODULE 2: GREETINGS & INTRODUCTIONS ———
const A1_MODULE_2: Module = {
  id: 'm-a1-02',
  level: 'A1',
  title: 'Greetings & Introductions',
  titleHinglish: 'Abhivaadan aur Parichay',
  description: 'Learn how to greet people, introduce yourself, and ask basic questions in German.',
  descriptionHinglish: 'Seekho log-on ko kaise greet karo, apna parichay do aur basic sawal karo.',
  skills: ['speaking', 'listening'],
  order: 2,
  isComplete: false,
  lessons: [
    {
      id: 'l-a1-02-01',
      level: 'A1',
      moduleId: 'm-a1-02',
      title: 'Greetings — Formal and Informal',
      titleHinglish: 'Abhivaadan — Formal aur Informal',
      objective: 'Greet people correctly in formal and informal situations',
      objectiveHinglish: 'Formal aur informal situations mein sahi tarah se greet karna seekho',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-01-01'],
      order: 1,
      grammarPoints: ['du vs. Sie distinction'],
      vocabulary: [],
      content: {
        warmUp: [
          'What are 3 German greetings you already know?',
          'When would you use a formal greeting vs an informal one?',
        ],
        explanation: `German has an important distinction between **formal** and **informal** address:

**Formal (Sie):** Used with strangers, older people, officials, and in professional settings. Always capitalize "Sie" when it means "you" (formal).

**Informal (du):** Used with friends, family, children, and peers of the same age.

**Greetings by time of day:**
| Time | Greeting | Meaning |
|------|----------|---------|
| Morning (6am–11am) | Guten Morgen! | Good morning! |
| Daytime (11am–6pm) | Guten Tag! | Good day! |
| Evening (6pm+) | Guten Abend! | Good evening! |
| Informal (anytime) | Hallo! | Hello! |
| Very casual | Hey! / Hi! | Hey! / Hi! |

**Goodbyes:**
- Auf Wiedersehen (formal) — literally "until we see each other again"
- Tschüss (informal) — casual bye
- Tschau (informal) — like Italian "ciao"
- Bis bald — "see you soon"
- Bis morgen — "see you tomorrow"`,
        explanationHinglish: `German mein ek important distinction hai — **formal** aur **informal** address:

**Formal (Sie):** Strangers, bade log, officials, aur professional settings mein use karo. "Sie" (aap) ko hamesha capital letter se likho jab yeh "you" formal ho.

**Informal (du):** Dost, parivaar, bachche aur same age ke log ke saath use karo.

**Time ke hisaab se greetings:**
| Time | Greeting | Matlab |
|------|----------|--------|
| Subah (6am–11am) | Guten Morgen! | Subah ki namskar! |
| Din mein (11am–6pm) | Guten Tag! | Din ki namskar! |
| Shaam (6pm+) | Guten Abend! | Shaam ki namskar! |
| Informal (kabhi bhi) | Hallo! | Helo! |

**Vidaai:**
- Auf Wiedersehen (formal) — "Phir milenge"
- Tschüss (informal) — casual bye
- Bis bald — "Jaldi milenge"`,
        examples: [
          {
            german: 'Guten Morgen! Wie geht es Ihnen?',
            english: 'Good morning! How are you? (formal)',
            hinglish: 'Subah ki namskar! Aap kaise hain? (formal)',
            breakdown: [
              { word: 'Guten', role: 'adjective (accusative)', meaning: 'good' },
              { word: 'Morgen', role: 'noun', meaning: 'morning' },
              { word: 'Wie', role: 'question word', meaning: 'how' },
              { word: 'geht', role: 'verb (3rd person)', meaning: 'goes' },
              { word: 'es', role: 'pronoun', meaning: 'it' },
              { word: 'Ihnen', role: 'dative (formal you)', meaning: 'you (formal, dative)' },
            ],
            audioText: 'Guten Morgen! Wie geht es Ihnen?',
          },
          {
            german: 'Hallo! Wie geht\'s?',
            english: 'Hi! How\'s it going? (informal)',
            hinglish: 'Helo! Kya haal hai? (informal)',
            breakdown: [
              { word: 'Hallo', role: 'interjection', meaning: 'hello (informal)' },
              { word: 'Wie', role: 'question word', meaning: 'how' },
              { word: 'geht\'s', role: 'verb + pronoun contraction', meaning: 'goes it (short for "geht es")' },
            ],
            audioText: 'Hallo! Wie geht\'s?',
          },
          {
            german: 'Mir geht es sehr gut, danke schön!',
            english: 'I am doing very well, thank you very much!',
            hinglish: 'Main bahut theek hoon, bahut shukriya!',
            audioText: 'Mir geht es sehr gut, danke schön!',
          },
          {
            german: 'Auf Wiedersehen! Bis morgen!',
            english: 'Goodbye! See you tomorrow!',
            hinglish: 'Alvida! Kal milenge!',
            audioText: 'Auf Wiedersehen! Bis morgen!',
          },
        ],
        realLifeContext: 'In Germany, it is polite to greet shopkeepers when you enter a shop — "Guten Tag!" and to say "Auf Wiedersehen!" or "Tschüss!" when leaving. Not doing so can seem rude. At a doctor\'s office or government office, always use "Guten Tag" and "Sie" (formal).',
        culturalNote: 'Germans take the formal/informal distinction (Du vs. Sie) very seriously. Using "du" with someone you should address as "Sie" can be offensive. In a professional setting, wait for the other person to suggest switching to "du".',
        summary: [
          'Formal = Sie (capitalize always when meaning "you")',
          'Informal = du (friends, family, same age)',
          'Guten Morgen / Guten Tag / Guten Abend by time',
          'Hallo / Hi for informal situations',
          'Auf Wiedersehen (formal farewell), Tschüss (informal)',
          '"Mir geht es gut" = I am fine',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-02-01-01',
          type: 'multiple-choice',
          question: 'You are at a government office in Germany. How do you greet the officer at 2pm?',
          questionHinglish: 'Tum Germany ke ek government office mein ho. Dopahar 2 baje officer ko kaise greet karte ho?',
          options: ['Hallo! Wie geht\'s?', 'Hey!', 'Guten Tag!', 'Guten Abend!'],
          correctAnswer: 'Guten Tag!',
          explanation: 'In a formal setting like a government office at 2pm, use "Guten Tag!" (formal, daytime greeting). "Hallo" and "Hey" are too informal.',
          explanationHinglish: 'Government office jaisi formal jagah par dopahar 2 baje "Guten Tag!" use karo. "Hallo" aur "Hey" bahut casual hain.',
          difficulty: 1,
          xpReward: 10,
          tags: ['greetings', 'formal', 'culture'],
        },
        {
          id: 'ex-a1-02-01-02',
          type: 'multiple-choice',
          question: 'How do you say "How are you?" formally in German?',
          questionHinglish: 'German mein formal tarike se "Aap kaise hain?" kaise kehte hain?',
          options: ['Wie geht\'s?', 'Wie geht es dir?', 'Wie geht es Ihnen?', 'Wie bist du?'],
          correctAnswer: 'Wie geht es Ihnen?',
          explanation: '"Wie geht es Ihnen?" uses "Ihnen" (formal dative of Sie). "dir" is informal. "Wie geht\'s?" is the most casual short form.',
          explanationHinglish: '"Wie geht es Ihnen?" mein "Ihnen" formal dative hai. "dir" informal hai. "Wie geht\'s?" sabse casual short form hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['greetings', 'formal', 'pronouns'],
        },
        {
          id: 'ex-a1-02-01-03',
          type: 'multiple-choice',
          question: 'Your friend says "Tschüss!" to you. How do you respond?',
          questionHinglish: 'Tumhara dost tumhe "Tschüss!" kehta hai. Tum kya kehte ho?',
          options: ['Guten Morgen!', 'Auf Wiedersehen!', 'Tschüss! Bis bald!', 'Entschuldigung!'],
          correctAnswer: 'Tschüss! Bis bald!',
          explanation: '"Tschüss!" is informal. A matching informal response is "Tschüss! Bis bald!" (Bye! See you soon!). "Auf Wiedersehen" is more formal.',
          explanationHinglish: '"Tschüss!" informal hai. Iske jawab mein "Tschüss! Bis bald!" kaho (Bye! Jaldi milenge!). "Auf Wiedersehen" zyada formal hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['greetings', 'informal', 'farewells'],
        },
        {
          id: 'ex-a1-02-01-04',
          type: 'ordering',
          question: 'Arrange these words into a correct German sentence: "es / geht / Ihnen / Wie / ?"',
          questionHinglish: 'Inhe sahi German sentence banane ke liye arrange karo: "es / geht / Ihnen / Wie / ?"',
          options: ['Wie', 'geht', 'es', 'Ihnen', '?'],
          correctAnswer: 'Wie geht es Ihnen ?',
          explanation: 'The correct order is: question word + verb + subject + object → Wie geht es Ihnen?',
          explanationHinglish: 'Sahi order hai: question word + verb + subject + object → Wie geht es Ihnen?',
          difficulty: 2,
          xpReward: 12,
          tags: ['word-order', 'greetings', 'sentence-building'],
        },
      ],
    },
    {
      id: 'l-a1-02-02',
      level: 'A1',
      moduleId: 'm-a1-02',
      title: 'Introducing Yourself',
      titleHinglish: 'Apna Parichay Dena',
      objective: 'Introduce yourself with name, origin, age, and occupation',
      objectiveHinglish: 'Apna naam, jagah, umar aur kaam batake apna parichay do',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'grammar'],
      prerequisites: ['l-a1-02-01'],
      order: 2,
      grammarPoints: ['ich bin', 'ich heiße', 'ich komme aus', 'ich wohne in', 'ich bin ... Jahre alt', 'sein (to be)'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "Hello, how are you?" formally in German?',
          'What is the difference between "du" and "Sie" in German?',
        ],
        explanation: `When you introduce yourself in German, you use a few key phrases:

**Basic introduction template:**
1. **Name:** Ich heiße [Name]. / Mein Name ist [Name].
2. **Origin:** Ich komme aus [country/city].
3. **Residence:** Ich wohne in [city/place].
4. **Age:** Ich bin [number] Jahre alt.
5. **Occupation/Status:** Ich bin [occupation/student].
6. **Language:** Ich spreche [language].

**The verb SEIN (to be):**
| Pronoun | Conjugation | Meaning |
|---------|------------|---------|
| ich | **bin** | I am |
| du | **bist** | you are (informal) |
| er/sie/es | **ist** | he/she/it is |
| wir | **sind** | we are |
| ihr | **seid** | you all are |
| sie/Sie | **sind** | they/you are |

This is an **irregular** verb — you must memorize it!`,
        explanationHinglish: `Jab tum apna parichay dete ho, kuch key phrases use karte ho:

**Basic introduction template:**
1. **Naam:** Ich heiße [Naam]. / Mein Name ist [Naam].
2. **Jagah:** Ich komme aus [desh/sheher].
3. **Rehne ki jagah:** Ich wohne in [sheher].
4. **Umar:** Ich bin [number] Jahre alt.
5. **Kaam/Padhhai:** Ich bin [kaam/student].
6. **Bhaasha:** Ich spreche [bhaasha].

**SEIN (hona) verb ka conjugation:**
| Pronoun | Conjugation | Matlab |
|---------|------------|--------|
| ich | **bin** | main hoon |
| du | **bist** | tu hai |
| er/sie/es | **ist** | woh hai |
| wir | **sind** | hum hain |
| ihr | **seid** | tum sab ho |
| sie/Sie | **sind** | woh hain/aap hain |

Yeh ek **irregular** verb hai — ise yaad karna zaroori hai!`,
        examples: [
          {
            german: 'Guten Tag! Ich heiße Rajesh. Ich komme aus Indien und wohne jetzt in Berlin.',
            english: 'Good day! My name is Rajesh. I come from India and now live in Berlin.',
            hinglish: 'Din ki namskar! Mera naam Rajesh hai. Main India se hoon aur abhi Berlin mein rehta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject pronoun', meaning: 'I' },
              { word: 'heiße', role: 'verb (heißen, 1st person)', meaning: 'am called / my name is' },
              { word: 'komme', role: 'verb (kommen, 1st person)', meaning: 'come' },
              { word: 'aus', role: 'preposition + dative', meaning: 'from' },
              { word: 'Indien', role: 'noun (proper)', meaning: 'India' },
              { word: 'wohne', role: 'verb (wohnen, 1st person)', meaning: 'live / reside' },
              { word: 'jetzt', role: 'adverb', meaning: 'now' },
              { word: 'in', role: 'preposition + dative', meaning: 'in' },
              { word: 'Berlin', role: 'noun (proper)', meaning: 'Berlin' },
            ],
            audioText: 'Guten Tag! Ich heiße Rajesh. Ich komme aus Indien und wohne jetzt in Berlin.',
          },
          {
            german: 'Ich bin 25 Jahre alt und bin Student. Ich lerne Deutsch.',
            english: 'I am 25 years old and am a student. I am learning German.',
            hinglish: 'Main 25 saal ka hoon aur student hoon. Main German seekh raha hoon.',
            audioText: 'Ich bin 25 Jahre alt und bin Student. Ich lerne Deutsch.',
          },
          {
            german: 'Ich spreche Hindi und ein bisschen Deutsch.',
            english: 'I speak Hindi and a little German.',
            hinglish: 'Main Hindi bolta hoon aur thoda Deutsch bolta hoon.',
            audioText: 'Ich spreche Hindi und ein bisschen Deutsch.',
          },
        ],
        realLifeContext: 'In an Ausbildung interview or when meeting your German teacher or employer for the first time, you will be expected to give a short self-introduction (Vorstellung). Practice saying it out loud every day!',
        culturalNote: 'Germans often shake hands when meeting for the first time. A firm (but not crushing) handshake while making eye contact is expected. Saying your full name while shaking hands is common in professional settings.',
        summary: [
          'Ich heiße [Name] = My name is [Name]',
          'Ich komme aus [country] = I come from [country]',
          'Ich wohne in [city] = I live in [city]',
          'Ich bin [age] Jahre alt = I am [age] years old',
          'Ich bin [occupation] = I am a [occupation]',
          'SEIN (to be): bin, bist, ist, sind, seid, sind',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-02-02-01',
          type: 'multiple-choice',
          question: 'How do you say "I come from India" in German?',
          questionHinglish: '"Main India se hoon" ko German mein kaise kehte hain?',
          options: ['Ich bin aus Indien.', 'Ich komme aus Indien.', 'Ich wohne Indien.', 'Aus Indien ich komme.'],
          correctAnswer: 'Ich komme aus Indien.',
          explanation: '"Ich komme aus Indien" is the correct way. Note: "aus" (from) goes before the country, and the verb "komme" comes in second position.',
          explanationHinglish: '"Ich komme aus Indien" sahi hai. Dhyan do: "aus" (se) country ke pehle aata hai, aur verb "komme" doosre position par hota hai.',
          difficulty: 1,
          xpReward: 10,
          tags: ['introductions', 'sentence-structure'],
        },
        {
          id: 'ex-a1-02-02-02',
          type: 'fill-blank',
          question: 'Fill in the correct form of SEIN: "Er ___ Student."',
          questionHinglish: 'SEIN ka sahi form bharein: "Er ___ Student."',
          options: ['bin', 'bist', 'ist', 'sind'],
          correctAnswer: 'ist',
          explanation: '"Er" (he) uses "ist" as the verb form of "sein". The forms are: ich bin, du bist, er/sie/es IST.',
          explanationHinglish: '"Er" (woh - male) ke saath "ist" use hota hai. Forms hain: ich bin, du bist, er/sie/es IST.',
          difficulty: 1,
          xpReward: 8,
          tags: ['grammar', 'sein', 'verb-conjugation'],
        },
        {
          id: 'ex-a1-02-02-03',
          type: 'multiple-choice',
          question: 'Which sentence correctly means "I am 22 years old"?',
          questionHinglish: '"Main 22 saal ka hoon" ke liye kaun sa sentence sahi hai?',
          options: ['Ich habe 22 Jahre.', 'Ich bin 22 Jahre alt.', 'Ich heiße 22 Jahre.', 'Mir sind 22 Jahre.'],
          correctAnswer: 'Ich bin 22 Jahre alt.',
          explanation: 'In German, age is expressed with "sein" (to be): "Ich bin [number] Jahre alt." Do NOT use "haben" (to have) for age as in some other languages.',
          explanationHinglish: 'German mein umar ke liye "sein" use hota hai: "Ich bin [number] Jahre alt." Age ke liye "haben" mat use karo jaise kuch aur languages mein hota hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['age', 'grammar', 'sein'],
        },
        {
          id: 'ex-a1-02-02-04',
          type: 'matching',
          question: 'Match each German phrase with its correct meaning:',
          questionHinglish: 'Har German phrase ko uske sahi meaning se milao:',
          options: [
            'Ich heiße Priya | My name is Priya',
            'Ich komme aus Indien | I come from India',
            'Ich wohne in Berlin | I live in Berlin',
            'Ich spreche Hindi | I speak Hindi',
          ],
          correctAnswer: 'Ich heiße Priya | My name is Priya',
          explanation: 'All four phrases are key parts of a German self-introduction.',
          explanationHinglish: 'Yeh charon phrases German self-introduction ke key parts hain.',
          difficulty: 1,
          xpReward: 15,
          tags: ['introductions', 'vocabulary'],
        },
      ],
    },
  ],
};

// ——— A1 MODULE 3: NUMBERS, TIME & DATES ———
const A1_MODULE_3: Module = {
  id: 'm-a1-03',
  level: 'A1',
  title: 'Numbers, Time & Dates',
  titleHinglish: 'Sankhyaayein, Samay aur Tithi',
  description: 'Count in German, tell the time, and talk about days, months, and dates.',
  descriptionHinglish: 'German mein girna, time batana, aur din, mahine aur tarikh ke baare mein bolna seekho.',
  skills: ['listening', 'speaking', 'vocabulary'],
  order: 3,
  isComplete: false,
  lessons: [
    {
      id: 'l-a1-03-01',
      level: 'A1',
      moduleId: 'm-a1-03',
      title: 'Numbers 1–100',
      titleHinglish: '1 se 100 tak Ginana',
      objective: 'Count from 1 to 100 in German',
      objectiveHinglish: 'German mein 1 se 100 tak ginna',
      estimatedMinutes: 20,
      skillFocus: ['vocabulary', 'listening'],
      prerequisites: ['l-a1-02-01'],
      order: 1,
      grammarPoints: [],
      vocabulary: [],
      content: {
        explanation: `German numbers are very logical once you learn the basics!

**1–12 (Memorize these):**
1=eins, 2=zwei, 3=drei, 4=vier, 5=fünf, 6=sechs, 7=sieben, 8=acht, 9=neun, 10=zehn, 11=elf, 12=zwölf

**13–19:** Add "-zehn" (teen) to the base number
- 13=dreizehn, 14=vierzehn, 15=fünfzehn, 16=sechzehn*, 17=siebzehn*, 18=achtzehn, 19=neunzehn
*(Note: sechzehn drops the 's'; siebzehn drops 'en')

**Tens (20, 30, etc.):**
20=zwanzig, 30=dreißig*, 40=vierzig, 50=fünfzig, 60=sechzig, 70=siebzig, 80=achtzig, 90=neunzig
*(dreißig has -ßig, not -zig)

**21–99:** Say the ones digit FIRST, then "und", then the tens digit
- 21 = einundzwanzig (one-and-twenty)
- 35 = fünfunddreißig (five-and-thirty)
- 47 = siebenundvierzig (seven-and-forty)

**100 = hundert**`,
        explanationHinglish: `German numbers ek baar basic sikhne ke baad bahut logical hain!

**1–12 (Yaad karo inhe):**
1=eins, 2=zwei, 3=drei, 4=vier, 5=fünf, 6=sechs, 7=sieben, 8=acht, 9=neun, 10=zehn, 11=elf, 12=zwölf

**13–19:** Base number ke saath "-zehn" (teen) lagao
- 13=dreizehn, 14=vierzehn, 15=fünfzehn...

**Tens:**
20=zwanzig, 30=dreißig, 40=vierzig, 50=fünfzig...

**21–99:** Pehle ONES digit bolo, phir "und", phir tens digit
- 21 = einundzwanzig (ek-aur-bees)
- 35 = fünfunddreißig (paanch-aur-tees)
- 47 = siebenundvierzig (saat-aur-chalees)

⚠️ **Zaruri:** German mein ones pehle aata hai! "47" ko "siebenundvierzig" (7-aur-40) bolte hain!`,
        examples: [
          { german: 'Das kostet vierundzwanzig Euro.', english: 'That costs twenty-four euros.', hinglish: 'Yeh chaubees euro ka hai.', audioText: 'Das kostet vierundzwanzig Euro.' },
          { german: 'Ich bin dreiunddreißig Jahre alt.', english: 'I am thirty-three years old.', hinglish: 'Main taintees saal ka hoon.', audioText: 'Ich bin dreiunddreißig Jahre alt.' },
          { german: 'Der Zug fährt um zwanzig Uhr ab.', english: 'The train departs at eight pm (20:00).', hinglish: 'Train raat ke aath baje (20:00) chalti hai.', audioText: 'Der Zug fährt um zwanzig Uhr ab.' },
        ],
        realLifeContext: 'Numbers are used everywhere: prices in shops, bus numbers, phone numbers, your apartment number. Practice saying your phone number and address in German!',
        summary: [
          '1-12: Unique words (eins, zwei, drei... zwölf)',
          '13-19: base + zehn (but sechzehn, siebzehn are shortened)',
          '20-90: zwanzig, dreißig, vierzig... neunzig',
          '21-99: ones + und + tens (einundzwanzig for 21)',
          '100 = hundert',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-03-01-01',
          type: 'multiple-choice',
          question: 'How do you say "47" in German?',
          questionHinglish: 'German mein "47" kaise kehte hain?',
          options: ['vierzigsieben', 'siebenundvierzig', 'vierundsiebzig', 'siebenzig'],
          correctAnswer: 'siebenundvierzig',
          explanation: 'In German, the ones digit comes FIRST: 7 (sieben) + und + 40 (vierzig) = siebenundvierzig',
          explanationHinglish: 'German mein ones digit PEHLE aata hai: 7 (sieben) + und + 40 (vierzig) = siebenundvierzig',
          difficulty: 2,
          xpReward: 10,
          tags: ['numbers', 'vocabulary'],
        },
        {
          id: 'ex-a1-03-01-02',
          type: 'multiple-choice',
          question: 'What is "dreiunddreißig" in numbers?',
          questionHinglish: '"dreiunddreißig" kaunsa number hai?',
          options: ['23', '33', '313', '30'],
          correctAnswer: '33',
          explanation: 'drei (3) + und + dreißig (30) = dreiunddreißig = 33',
          explanationHinglish: 'drei (3) + und + dreißig (30) = dreiunddreißig = 33',
          difficulty: 2,
          xpReward: 10,
          tags: ['numbers'],
        },
      ],
    },
  ],
};

// ——— A1 MODULE 4: GRAMMAR — ARTICLES & GENDER ———
const A1_MODULE_4: Module = {
  id: 'm-a1-04',
  level: 'A1',
  title: 'German Gender & Articles',
  titleHinglish: 'German Gender aur Articles (der, die, das)',
  description: 'Understand grammatical gender in German and learn der, die, das with nouns.',
  descriptionHinglish: 'German mein grammatical gender aur der, die, das (articles) seekho.',
  skills: ['grammar', 'vocabulary'],
  order: 4,
  isComplete: false,
  lessons: [
    {
      id: 'l-a1-04-01',
      level: 'A1',
      moduleId: 'm-a1-04',
      title: 'Nouns & Grammatical Gender',
      titleHinglish: 'Nouns aur Grammatical Gender',
      objective: 'Understand grammatical gender (der/die/das) and common gender rules',
      objectiveHinglish: 'Grammatical gender (der/die/das) aur common gender rules samajhna',
      estimatedMinutes: 25,
      skillFocus: ['grammar'],
      prerequisites: ['l-a1-02-02'],
      order: 1,
      grammarPoints: ['der/die/das', 'grammatical gender', 'noun capitalization'],
      vocabulary: [],
      content: {
        explanation: `In German, every noun has a **grammatical gender**: masculine (der), feminine (die), or neuter (das). This is different from natural gender!

**Important rule:** ALL German nouns are CAPITALIZED, regardless of their position in a sentence.

**The three genders:**
| Gender | Article | Example |
|--------|---------|---------|
| Masculine | **der** | der Mann (the man), der Bahnhof (the station) |
| Feminine | **die** | die Frau (the woman), die Stadt (the city) |
| Neuter | **das** | das Kind (the child), das Buch (the book) |
| Plural (all) | **die** | die Männer (the men) |

**Some helpful gender rules (not 100%, but useful):**
- Male people → usually der: der Mann, der Vater, der Bruder
- Female people → usually die: die Frau, die Mutter, die Schwester
- Words ending in **-ung** → always die: die Zeitung, die Wohnung, die Meinung
- Words ending in **-heit / -keit / -schaft** → always die
- Words ending in **-chen / -lein** → always das: das Mädchen, das Brötchen
- Words ending in **-er** (person/agent) → usually der: der Lehrer, der Arzt

**IMPORTANT:** There is no perfect system. The best strategy is to **always learn the article with the noun**: der Tisch, die Lampe, das Buch.`,
        explanationHinglish: `German mein har noun ka ek **grammatical gender** hota hai: masculine (der), feminine (die), ya neuter (das). Yeh natural gender se alag hota hai!

**Zaruri rule:** Saare German nouns CAPITAL letter se likhte hain, sentence mein chahe kahi bhi hon.

**Teen genders:**
| Gender | Article | Example |
|--------|---------|---------|
| Masculine | **der** | der Mann (aadmi), der Bahnhof (station) |
| Feminine | **die** | die Frau (aurat), die Stadt (sheher) |
| Neuter | **das** | das Kind (baccha), das Buch (kitaab) |
| Plural (sab) | **die** | die Männer (aadmi - plural) |

**Helpful gender rules (perfect nahi, lekin helpful):**
- Male log → mostly der: der Mann, der Vater, der Bruder
- Female log → mostly die: die Frau, die Mutter, die Schwester
- **-ung** ending → hamesha die: die Zeitung, die Wohnung
- **-chen / -lein** ending → hamesha das: das Mädchen (ladki!), das Brötchen

**IMPORTANT:** Koi perfect system nahi hai. Sabse achhi strategy: **article ke saath noun seekho**: der Tisch, die Lampe, das Buch.`,
        examples: [
          {
            german: 'Der Vater kommt. Die Mutter kommt. Das Kind kommt.',
            english: 'The father comes. The mother comes. The child comes.',
            hinglish: 'Pitaji aate hain. Maa aati hai. Baccha aata hai.',
            breakdown: [
              { word: 'Der', role: 'definite article (masculine, nominative)', meaning: 'the' },
              { word: 'Vater', role: 'noun (masculine)', meaning: 'father' },
              { word: 'Die', role: 'definite article (feminine/plural, nominative)', meaning: 'the' },
              { word: 'Das', role: 'definite article (neuter, nominative)', meaning: 'the' },
            ],
            audioText: 'Der Vater kommt. Die Mutter kommt. Das Kind kommt.',
          },
          {
            german: 'Das Mädchen ist intelligent. (NOT: die Mädchen)',
            english: 'The girl is intelligent. (Note: Mädchen is neuter despite meaning girl!)',
            hinglish: 'Ladki hoshiyaar hai. (Dhyan do: Mädchen neuter hai, chahe uski meaning girl hai!)',
            audioText: 'Das Mädchen ist intelligent.',
          },
        ],
        realLifeContext: 'When filling in German forms (like a rental application or medical form), you will see "der/die/das" before nouns. Learning articles helps you understand forms and write correctly.',
        summary: [
          'Every German noun has a gender: der (m), die (f), das (n)',
          'Plural = always die (but the noun itself changes)',
          'ALL German nouns are capitalized',
          'Gender rules: -ung → die; -chen/-lein → das; male people → der',
          'Always learn the ARTICLE with the NOUN — never just the noun alone!',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-04-01-01',
          type: 'multiple-choice',
          question: 'What is the correct article for "Mädchen" (girl)?',
          questionHinglish: '"Mädchen" (girl) ke liye sahi article kaun sa hai?',
          options: ['der', 'die', 'das', 'ein'],
          correctAnswer: 'das',
          explanation: '"Mädchen" ends in "-chen", which is always neuter in German → das Mädchen. Even though "Mädchen" means "girl", grammatically it is neuter!',
          explanationHinglish: '"Mädchen" "-chen" se khatam hota hai, jo hamesha neuter hota hai German mein → das Mädchen. Chahe "Mädchen" ki meaning "girl" hai, grammatically yeh neuter hai!',
          difficulty: 2,
          xpReward: 10,
          tags: ['gender', 'grammar', 'articles'],
        },
        {
          id: 'ex-a1-04-01-02',
          type: 'multiple-choice',
          question: 'Which article do ALL German plural nouns use?',
          questionHinglish: 'Saare German plural nouns kaun sa article use karte hain?',
          options: ['der', 'die', 'das', 'ein'],
          correctAnswer: 'die',
          explanation: 'In German, regardless of gender, the definite article for ALL plural nouns is "die". Example: der Mann → die Männer; das Kind → die Kinder',
          explanationHinglish: 'German mein chahe gender kuch bhi ho, saare plural nouns ke liye definite article "die" hota hai. Jaise: der Mann → die Männer; das Kind → die Kinder',
          difficulty: 1,
          xpReward: 8,
          tags: ['plural', 'grammar', 'articles'],
        },
        {
          id: 'ex-a1-04-01-03',
          type: 'multiple-choice',
          question: 'A word ending in "-ung" is always which gender?',
          questionHinglish: '"-ung" se khatam hone wala word hamesha kaun se gender ka hota hai?',
          options: ['Masculine (der)', 'Feminine (die)', 'Neuter (das)', 'It varies'],
          correctAnswer: 'Feminine (die)',
          explanation: 'Words ending in "-ung" are ALWAYS feminine in German. Examples: die Zeitung (newspaper), die Meinung (opinion), die Wohnung (apartment)',
          explanationHinglish: '"-ung" se khatam hone wale words hamesha feminine hote hain German mein. Jaise: die Zeitung (akhbaar), die Meinung (raay), die Wohnung (ghar)',
          difficulty: 2,
          xpReward: 10,
          tags: ['gender', 'grammar', 'word-endings'],
        },
      ],
    },
  ],
};

// ——— SAMPLE MODULES FOR A2–C2 ———
const A2_SAMPLE_MODULE: Module = {
  id: 'm-a2-01',
  level: 'A2',
  title: 'Daily Life & Routines',
  titleHinglish: 'Roz Ka Jeevan aur Denaandeen Kaam',
  description: 'Talk about daily activities, work schedules, and personal experiences.',
  descriptionHinglish: 'Roz ke kaam, kaam ke schedule aur personal experiences ke baare mein bolna seekho.',
  skills: ['speaking', 'reading', 'vocabulary', 'grammar'],
  order: 1,
  isComplete: false,
  isSample: true,
  lessons: [
    {
      id: 'l-a2-01-01',
      level: 'A2',
      moduleId: 'm-a2-01',
      title: 'Talking About Daily Routines',
      titleHinglish: 'Roz Ke Kaam Ke Baare Mein Bolna',
      objective: 'Describe your daily schedule using reflexive verbs and time expressions',
      objectiveHinglish: 'Reflexive verbs aur time expressions use karke apna daily schedule batao',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'grammar'],
      prerequisites: [],
      order: 1,
      grammarPoints: ['reflexive verbs', 'Perfekt', 'time expressions'],
      vocabulary: [],
      content: {
        explanation: 'At A2, you learn to describe your daily routine using reflexive verbs (sich waschen, sich anziehen) and the Perfekt tense for past events.',
        explanationHinglish: 'A2 level par tum reflexive verbs (sich waschen, sich anziehen) aur Perfekt tense use karke apna daily routine describe karna seekhte ho.',
        examples: [
          { german: 'Ich stehe um sieben Uhr auf.', english: 'I get up at seven o\'clock.', hinglish: 'Main saat baje uthta hoon.', audioText: 'Ich stehe um sieben Uhr auf.' },
          { german: 'Ich habe mich geduscht und dann gefrühstückt.', english: 'I showered and then had breakfast.', hinglish: 'Maine shower liya aur phir naashta kiya.', audioText: 'Ich habe mich geduscht und dann gefrühstückt.' },
        ],
        realLifeContext: 'In Germany, talking about daily routines is important when meeting new people or in Ausbildung interviews.',
        summary: ['Reflexive verbs: sich waschen, sich anziehen, sich kämmen', 'Perfekt for completed actions', 'Time expressions: um, morgens, dann, danach'],
      },
      exercises: [
        {
          id: 'ex-a2-01-01-01',
          type: 'multiple-choice',
          question: 'Which verb means "to get up" (separable verb)?',
          questionHinglish: '"Uthna" ke liye kaun sa separable verb hai?',
          options: ['aufstehen', 'aufmachen', 'aufgehen', 'aufkommen'],
          correctAnswer: 'aufstehen',
          explanation: '"aufstehen" means "to get up / to stand up". In present tense: "Ich stehe auf." The prefix "auf" separates.',
          explanationHinglish: '"aufstehen" ka matlab hai "uthna". Present tense mein: "Ich stehe auf." Prefix "auf" alag ho jaata hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['separable-verbs', 'daily-routine'],
        },
      ],
    },
  ],
};

const B1_SAMPLE_MODULE: Module = {
  id: 'm-b1-01',
  level: 'B1',
  title: 'Work & Ausbildung',
  titleHinglish: 'Kaam aur Ausbildung',
  description: 'Prepare for Ausbildung applications, interviews, and workplace communication.',
  descriptionHinglish: 'Ausbildung ke avedan, interview aur kaam ke communication ke liye taiyaari karo.',
  skills: ['speaking', 'writing', 'reading'],
  order: 1,
  isComplete: false,
  isSample: true,
  lessons: [
    {
      id: 'l-b1-01-01',
      level: 'B1',
      moduleId: 'm-b1-01',
      title: 'Writing an Ausbildung Application',
      titleHinglish: 'Ausbildung Application Likhna',
      objective: 'Write a formal Ausbildung application letter in German',
      objectiveHinglish: 'German mein formal Ausbildung application letter likhna',
      estimatedMinutes: 35,
      skillFocus: ['writing'],
      prerequisites: [],
      order: 1,
      grammarPoints: ['formal letter structure', 'Konjunktiv II for politeness', 'relative clauses'],
      vocabulary: [],
      content: {
        explanation: 'A formal German Ausbildung application (Bewerbung) has a specific structure. Learning this is essential for working in Germany.',
        explanationHinglish: 'Ek formal German Ausbildung application (Bewerbung) ki ek khaas structure hoti hai. Germany mein kaam karne ke liye yeh zaroori hai.',
        examples: [
          { german: 'Mit freundlichen Grüßen', english: 'With friendly greetings (formal closing)', hinglish: 'Adar sahit (formal closing)', audioText: 'Mit freundlichen Grüßen' },
          { german: 'Ich bewerbe mich um den Ausbildungsplatz als Kaufmann für Büromanagement.', english: 'I am applying for the apprenticeship position as office management clerk.', hinglish: 'Main office management clerk ke taur par apprenticeship position ke liye apply kar raha hoon.', audioText: 'Ich bewerbe mich um den Ausbildungsplatz als Kaufmann für Büromanagement.' },
        ],
        realLifeContext: 'This is one of the most practical skills for anyone seeking Ausbildung in Germany.',
        summary: ['Formal letter structure', 'Key phrases for applications', 'Common Ausbildung job titles', 'Professional closing formulas'],
      },
      exercises: [
        {
          id: 'ex-b1-01-01-01',
          type: 'multiple-choice',
          question: 'Which is the correct formal closing for a German letter?',
          questionHinglish: 'German letter ka sahi formal closing kaun sa hai?',
          options: ['Tschüss!', 'Mit freundlichen Grüßen', 'Bis bald!', 'Auf Wiedersehen'],
          correctAnswer: 'Mit freundlichen Grüßen',
          explanation: '"Mit freundlichen Grüßen" (abbreviated MfG) is the standard formal closing in German letters and emails.',
          explanationHinglish: '"Mit freundlichen Grüßen" (abbreviated MfG) German letters aur emails mein standard formal closing hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['formal-writing', 'ausbildung'],
        },
      ],
    },
  ],
};

const B2_SAMPLE_MODULE: Module = {
  id: 'm-b2-01',
  level: 'B2',
  title: 'Arguments & Academic Language',
  titleHinglish: 'Arguments aur Academic Bhaasha',
  description: 'Express complex opinions, use advanced connectors, and write structured essays.',
  descriptionHinglish: 'Complex opinions express karna, advanced connectors use karna aur structured essays likhna.',
  skills: ['writing', 'speaking', 'reading'],
  order: 1,
  isComplete: false,
  isSample: true,
  lessons: [
    {
      id: 'l-b2-01-01',
      level: 'B2',
      moduleId: 'm-b2-01',
      title: 'Writing Argumentative Essays',
      titleHinglish: 'Argumentative Essays Likhna',
      objective: 'Write a structured B2-level argumentative essay with thesis, arguments, and conclusion',
      objectiveHinglish: 'B2 level ka structured argumentative essay likhna — thesis, arguments aur conclusion ke saath',
      estimatedMinutes: 40,
      skillFocus: ['writing'],
      prerequisites: [],
      order: 1,
      grammarPoints: ['Konjunktiv II', 'nominalization', 'advanced connectors'],
      vocabulary: [],
      content: {
        explanation: 'B2 writing requires you to present balanced arguments, use advanced connectors like "einerseits...andererseits" and "obwohl", and write in a formal academic register.',
        explanationHinglish: 'B2 writing mein balanced arguments present karna, advanced connectors jaise "einerseits...andererseits" aur "obwohl" use karna, aur formal academic style mein likhna zaroori hai.',
        examples: [
          { german: 'Einerseits ist Digitalisierung vorteilhaft, andererseits birgt sie Risiken.', english: 'On one hand, digitalization is beneficial; on the other hand, it carries risks.', hinglish: 'Ek taraf digitalization faaydemand hai, doosri taraf iske khatare bhi hain.', audioText: 'Einerseits ist Digitalisierung vorteilhaft, andererseits birgt sie Risiken.' },
        ],
        realLifeContext: 'B2 essay writing is required for university applications and professional German exams.',
        summary: ['Essay structure: Einleitung → Hauptteil → Schluss', 'Advanced connectors: einerseits, andererseits, obwohl, dennoch', 'Nominalization for formal style', 'B2 vocabulary for argumentation'],
      },
      exercises: [
        {
          id: 'ex-b2-01-01-01',
          type: 'multiple-choice',
          question: 'Which connector means "on the other hand"?',
          questionHinglish: '"Doosri taraf" ke liye kaun sa connector hai?',
          options: ['deshalb', 'andererseits', 'obwohl', 'während'],
          correctAnswer: 'andererseits',
          explanation: '"Andererseits" means "on the other hand" and is used with "einerseits" (on one hand) to present balanced arguments.',
          explanationHinglish: '"Andererseits" ka matlab hai "doosri taraf" aur yeh "einerseits" ke saath use hota hai.',
          difficulty: 3,
          xpReward: 12,
          tags: ['connectors', 'writing', 'b2'],
        },
      ],
    },
  ],
};

const C1_SAMPLE_MODULE: Module = {
  id: 'm-c1-01',
  level: 'C1',
  title: 'Academic & Professional German',
  titleHinglish: 'Academic aur Professional German',
  description: 'Master complex academic texts, professional presentations, and advanced grammar.',
  descriptionHinglish: 'Complex academic texts, professional presentations aur advanced grammar master karo.',
  skills: ['reading', 'writing', 'speaking', 'grammar'],
  order: 1,
  isComplete: false,
  isSample: true,
  lessons: [
    {
      id: 'l-c1-01-01',
      level: 'C1',
      moduleId: 'm-c1-01',
      title: 'Nominalization & Nominal Style',
      titleHinglish: 'Nominalization aur Nominal Style',
      objective: 'Use nominalization to write in formal German academic and professional style',
      objectiveHinglish: 'Nominalization use karke formal German academic aur professional style mein likhna',
      estimatedMinutes: 35,
      skillFocus: ['writing', 'grammar'],
      prerequisites: [],
      order: 1,
      grammarPoints: ['nominalization', 'Nominalstil', 'verb-to-noun conversion'],
      vocabulary: [],
      content: {
        explanation: 'German academic and official language heavily uses nominalization — converting verbs and adjectives into nouns. This compresses information and creates a formal tone.',
        explanationHinglish: 'German academic aur official language mein nominalization bahut use hoti hai — verbs aur adjectives ko nouns mein convert karna. Yeh information compress karta hai aur formal tone deta hai.',
        examples: [
          { german: 'Die Durchführung der Maßnahmen ist notwendig. (instead of: Es ist notwendig, die Maßnahmen durchzuführen.)', english: 'The implementation of the measures is necessary.', hinglish: 'Yeh kadam uthana zaroori hai.', audioText: 'Die Durchführung der Maßnahmen ist notwendig.' },
        ],
        realLifeContext: 'C1 nominalization is essential for university coursework, official German correspondence, and professional reports.',
        summary: ['Verb → Noun: durchführen → die Durchführung', 'Adjective → Noun: wichtig → die Wichtigkeit', 'Nominalstil creates formal, compressed German', 'Used in official documents, reports, academic writing'],
      },
      exercises: [
        {
          id: 'ex-c1-01-01-01',
          type: 'multiple-choice',
          question: 'What is the nominalized form of "analysieren" (to analyze)?',
          questionHinglish: '"analysieren" (analyze karna) ka nominalized form kya hai?',
          options: ['der Analysist', 'die Analyse', 'das Analysieren', 'die Analysierung'],
          correctAnswer: 'die Analyse',
          explanation: 'The noun from "analysieren" is "die Analyse". Note that many German verbs have established noun forms; "das Analysieren" (gerund) is grammatically possible but "die Analyse" is preferred.',
          explanationHinglish: '"analysieren" se noun "die Analyse" banta hai. "das Analysieren" grammatically possible hai lekin "die Analyse" preferred hai.',
          difficulty: 4,
          xpReward: 15,
          tags: ['nominalization', 'c1', 'grammar'],
        },
      ],
    },
  ],
};

const C2_SAMPLE_MODULE: Module = {
  id: 'm-c2-01',
  level: 'C2',
  title: 'Near-Native Proficiency',
  titleHinglish: 'Near-Native Level Proficiency',
  description: 'Understand implicit meaning, irony, nuance, and produce stylistically excellent German.',
  descriptionHinglish: 'Implicit meaning, irony, nuance samajhna aur stylistically excellent German produce karna.',
  skills: ['reading', 'writing', 'speaking', 'listening'],
  order: 1,
  isComplete: false,
  isSample: true,
  lessons: [
    {
      id: 'l-c2-01-01',
      level: 'C2',
      moduleId: 'm-c2-01',
      title: 'Irony, Register & Rhetorical Style',
      titleHinglish: 'Irony, Register aur Rhetorical Style',
      objective: 'Identify and use irony, rhetorical devices, and register shifts in German',
      objectiveHinglish: 'German mein irony, rhetorical devices aur register shifts identify aur use karna',
      estimatedMinutes: 45,
      skillFocus: ['reading', 'speaking'],
      prerequisites: [],
      order: 1,
      grammarPoints: ['irony', 'register', 'rhetorical devices', 'Konjunktiv I for reported speech'],
      vocabulary: [],
      content: {
        explanation: 'At C2, you understand and use language with precision, recognizing irony, sarcasm, formal vs informal register, and rhetorical techniques used in literature, journalism, and politics.',
        explanationHinglish: 'C2 level par tum language bahut precision se samajhte aur use karte ho — irony, sarcasm, formal vs informal register aur rhetorical techniques jo literature, journalism aur politics mein use hoti hain.',
        examples: [
          { german: '"Natürlich hat er wieder die Prüfung bestanden..." (said sarcastically about someone who failed)', english: '"Of course he passed the exam again..." (ironic)', hinglish: '"Bilkul usne phir se exam pass kar liya..." (ironic — actually he failed)', audioText: 'Natürlich hat er wieder die Prüfung bestanden.' },
        ],
        realLifeContext: 'C2-level comprehension is needed for native German media, literature, political speeches, and complex professional communication.',
        summary: ['Irony detection: context + intonation + contradiction', 'Register: academic vs casual vs official', 'Rhetorical devices: Anaphora, Antithese, Euphemismus', 'Konjunktiv I for journalistic reported speech'],
      },
      exercises: [
        {
          id: 'ex-c2-01-01-01',
          type: 'multiple-choice',
          question: 'In German journalism, which mood is used for indirect/reported speech?',
          questionHinglish: 'German journalism mein indirect/reported speech ke liye kaun sa mood use hota hai?',
          options: ['Indikativ', 'Konjunktiv II', 'Konjunktiv I', 'Imperativ'],
          correctAnswer: 'Konjunktiv I',
          explanation: 'Konjunktiv I is used in German journalism and formal writing to report what someone said without confirming it as true. Example: "Er sagte, er sei unschuldig." (He said he was innocent.)',
          explanationHinglish: 'Konjunktiv I German journalism aur formal writing mein kisi ke bolne ko report karne ke liye use hota hai bina yeh confirm kiye ki woh sach hai.',
          difficulty: 5,
          xpReward: 20,
          tags: ['konjunktiv', 'c2', 'grammar', 'journalism'],
        },
      ],
    },
  ],
};

// ——— EXPORT CURRICULUM ———
export const CURRICULUM: Record<CEFRLevel, Module[]> = {
  A1: [A1_MODULE_1, A1_MODULE_2, A1_MODULE_3, A1_MODULE_4],
  A2: [A2_SAMPLE_MODULE],
  B1: [B1_SAMPLE_MODULE],
  B2: [B2_SAMPLE_MODULE],
  C1: [C1_SAMPLE_MODULE],
  C2: [C2_SAMPLE_MODULE],
};

export const ALL_MODULES: Module[] = Object.values(CURRICULUM).flat();

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const modules of Object.values(CURRICULUM)) {
    for (const module of modules) {
      const lesson = module.lessons.find(l => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}

export function getModuleById(moduleId: string): Module | undefined {
  return ALL_MODULES.find(m => m.id === moduleId);
}

export const LEVEL_INFO: Record<CEFRLevel, { color: string; emoji: string; name: string; description: string; descriptionHinglish: string }> = {
  A1: { color: 'emerald', emoji: '🌱', name: 'Absolute Beginner', description: 'Start from zero — alphabet, greetings, numbers, and basic sentences.', descriptionHinglish: 'Bilkul zero se shuru karo — akshar, namaste, ginti aur basic vaakya.' },
  A2: { color: 'teal', emoji: '🌿', name: 'Elementary', description: 'Daily conversations, past tense, shopping, and travel language.', descriptionHinglish: 'Rozana ki baat-cheet, past tense, shopping aur travel ki German.' },
  B1: { color: 'blue', emoji: '🌊', name: 'Independent', description: 'Complex topics, Ausbildung interviews, opinions, and events.', descriptionHinglish: 'Complex vishay, Ausbildung interview, apne vichaar aur ghatnaayein.' },
  B2: { color: 'violet', emoji: '⚡', name: 'Upper Intermediate', description: 'Abstract arguments, formal writing, nuanced grammar structures.', descriptionHinglish: 'Abstract daleel, formal likhna, nuanced grammar structures.' },
  C1: { color: 'orange', emoji: '🔥', name: 'Advanced', description: 'Spontaneous, fluent speech on complex subjects with near-native precision.', descriptionHinglish: 'Complex vishayon par fluent baat, almost native precision.' },
  C2: { color: 'red', emoji: '🏆', name: 'Proficiency', description: 'Native-level comprehension and expression across all contexts and registers.', descriptionHinglish: 'Har context mein native-level samajh aur expression.' },
};
