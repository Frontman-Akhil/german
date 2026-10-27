// ============================================================
// A1 MODULE 6 – QUESTIONS, NEGATION & WORD ORDER
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_QUESTIONS: Module = {
  id: 'm-a1-06',
  level: 'A1',
  title: 'Questions, Negation & Word Order',
  titleHinglish: 'Sawaal, Negation aur Word Order',
  description: 'Ask yes/no and W-questions, say no correctly, and build natural German sentences.',
  descriptionHinglish: 'Yes/no aur W-questions puchna, sahi tarah "nahi" bolna, aur natural German sentences banana seekho.',
  skills: ['grammar', 'speaking', 'listening'],
  order: 6,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-06-01',
      level: 'A1',
      moduleId: 'm-a1-06',
      title: 'Yes/No Questions & W-Questions',
      titleHinglish: 'Yes/No Sawaal aur W-Sawaal',
      objective: 'Ask and answer simple questions using correct German word order',
      objectiveHinglish: 'Sahi German word order ke saath simple sawaal pucho aur jawab do',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-05-03'],
      order: 1,
      grammarPoints: ['yes/no questions', 'W-questions', 'question word order'],
      vocabulary: [],
      content: {
        warmUp: [
          'What question words do you already know in German? (Wie, Wo, Was...)',
          'How do you turn "Du kommst aus Indien" into a question?',
        ],
        explanation: `**Yes/No questions** are easy: move the verb to the **first position**.
- Du **kommst** aus Indien. → **Kommst** du aus Indien?
- Sie **wohnen** in Berlin. → **Wohnen** Sie in Berlin?
- Er **hat** Zeit. → **Hat** er Zeit?

Answer with **Ja** (yes) or **Nein** (no). If the question is negative, use **Doch** to correct it:
- "Kommst du nicht?" – "Doch, ich komme." (Yes, I am coming — contrary to the negative question.)

**W-questions** start with a question word. The verb stays in **second position**.
| W-word | Meaning | Example |
|--------|---------|---------|
| Wer | who | Wer ist das? |
| Was | what | Was machst du? |
| Wo | where (location) | Wo wohnst du? |
| Woher | from where | Woher kommst du? |
| Wohin | to where | Wohin gehst du? |
| Wann | when | Wann beginnt der Kurs? |
| Wie | how | Wie heißt du? |
| Warum | why | Warum lernst du Deutsch? |
| Wie viel | how much | Wie viel kostet das? |
| Welcher | which | Welcher Bus fährt zum Bahnhof? |

**Key difference:** **Wo** = location, **Woher** = origin, **Wohin** = destination.
- **Wo** wohnst du? (Where do you live?)
- **Woher** kommst du? (Where do you come from?)
- **Wohin** gehst du? (Where are you going?)

**Common mistakes:**
- ❌ Wo kommst du? (for origin) → ✅ Woher kommst du?
- ❌ Du kommst aus Indien? (question intonation only) → ✅ Kommst du aus Indien? (verb first)`,
        explanationHinglish: `**Yes/No questions** bahut aasaan hain: verb ko **pehle position** par le aao.
- Du **kommst** aus Indien. → **Kommst** du aus Indien?
- Sie **wohnen** in Berlin. → **Wohnen** Sie in Berlin?
- Er **hat** Zeit. → **Hat** er Zeit?

Jawab **Ja** (haan) ya **Nein** (nahi). Negative question ka jawab contradict karna ho to **Doch**:
- "Kommst du nicht?" – "Doch, ich komme." (Haan, main aa raha hoon — negative sawaal ke ulta.)

**W-questions** question word se shuru hote hain. Verb **doosre position** par rehta hai.
| W-word | Matlab | Example |
|--------|--------|---------|
| Wer | kaun | Wer ist das? |
| Was | kya | Was machst du? |
| Wo | kahan (location) | Wo wohnst du? |
| Woher | kahan se | Woher kommst du? |
| Wohin | kahan tak | Wohin gehst du? |
| Wann | kab | Wann beginnt der Kurs? |
| Wie | kaise | Wie heißt du? |
| Warum | kyun | Warum lernst du Deutsch? |
| Wie viel | kitna | Wie viel kostet das? |
| Welcher | kaun sa | Welcher Bus fährt zum Bahnhof? |

**Farq:** **Wo** = location, **Woher** = origin, **Wohin** = destination.
- **Wo** wohnst du? (Kahan rehte ho?)
- **Woher** kommst du? (Kahan se aaye ho?)
- **Wohin** gehst du? (Kahan jaa rahe ho?)

**Common mistakes:**
- ❌ Wo kommst du? (origin ke liye) → ✅ Woher kommst du?
- ❌ Du kommst aus Indien? (sirf intonation se sawaal) → ✅ Kommst du aus Indien? (verb pehle)`,
        examples: [
          {
            german: 'Woher kommst du?',
            english: 'Where do you come from?',
            hinglish: 'Tum kahan se ho?',
            breakdown: [
              { word: 'Woher', role: 'question word', meaning: 'from where' },
              { word: 'kommst', role: 'verb (2nd position)', meaning: 'come' },
              { word: 'du', role: 'subject', meaning: 'you' },
            ],
            audioText: 'Woher kommst du?',
          },
          {
            german: 'Wohnst du in Berlin?',
            english: 'Do you live in Berlin?',
            hinglish: 'Kya tum Berlin mein rehte ho?',
            audioText: 'Wohnst du in Berlin?',
          },
          {
            german: 'Wann beginnt der Kurs?',
            english: 'When does the course begin?',
            hinglish: 'Course kab shuru hota hai?',
            audioText: 'Wann beginnt der Kurs?',
          },
          {
            german: 'Wie viel kostet das?',
            english: 'How much does that cost?',
            hinglish: 'Yeh kitne ka hai?',
            audioText: 'Wie viel kostet das?',
          },
        ],
        realLifeContext: 'Questions are the fastest way to keep a conversation going. At a train station you ask "Wo ist der Bahnhof?", at a shop "Wie viel kostet das?", and when meeting someone "Woher kommst du?".',
        summary: [
          'Yes/No questions: verb moves to position 1',
          'W-questions: W-word + verb + subject',
          'Wo = where, Woher = from where, Wohin = to where',
          'Wann = when, Wie = how, Warum = why',
          'Doch answers a negative question positively',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-06-01-01',
          type: 'multiple-choice',
          question: 'Complete: "___ kommst du?" (Where do you come from?)',
          questionHinglish: 'Complete karo: "___ kommst du?" (Tum kahan se ho?)',
          options: ['Wo', 'Woher', 'Wohin', 'Wann'],
          correctAnswer: 'Woher',
          explanation: '"Woher" means "from where". For origin, use "Woher kommst du?"',
          explanationHinglish: '"Woher" ka matlab "kahan se". Origin ke liye "Woher kommst du?" use karo.',
          difficulty: 1,
          xpReward: 8,
          tags: ['questions', 'woher'],
        },
        {
          id: 'ex-a1-06-01-02',
          type: 'multiple-choice',
          question: 'Complete: "___ wohnst du?" (Where do you live?)',
          questionHinglish: 'Complete karo: "___ wohnst du?" (Tum kahan rehte ho?)',
          options: ['Wo', 'Woher', 'Wohin', 'Wer'],
          correctAnswer: 'Wo',
          explanation: '"Wo" asks about a location: Wo wohnst du?',
          explanationHinglish: '"Wo" location ke baare mein puchta hai: Wo wohnst du?',
          difficulty: 1,
          xpReward: 8,
          tags: ['questions', 'wo'],
        },
        {
          id: 'ex-a1-06-01-03',
          type: 'multiple-choice',
          question: 'Complete: "___ heißt du?" (What is your name?)',
          questionHinglish: 'Complete karo: "___ heißt du?" (Tumhara naam kya hai?)',
          options: ['Was', 'Wie', 'Wer', 'Wann'],
          correctAnswer: 'Wie',
          explanation: 'The fixed phrase is "Wie heißt du?" — literally "How are you called?"',
          explanationHinglish: 'Fixed phrase hai "Wie heißt du?" — literally "Tumhe kaise bulate hain?"',
          difficulty: 1,
          xpReward: 8,
          tags: ['questions', 'introductions'],
        },
        {
          id: 'ex-a1-06-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct yes/no question: "du / Wohnst / in Berlin / ?"',
          questionHinglish: 'Sahi yes/no question banao: "du / Wohnst / in Berlin / ?"',
          options: ['du', 'Wohnst', 'in', 'Berlin', '?'],
          correctAnswer: 'Wohnst du in Berlin ?',
          explanation: 'In a yes/no question the verb comes first: Wohnst du in Berlin?',
          explanationHinglish: 'Yes/no question mein verb pehle aata hai: Wohnst du in Berlin?',
          difficulty: 2,
          xpReward: 10,
          tags: ['questions', 'word-order'],
        },
        {
          id: 'ex-a1-06-01-05',
          type: 'typing',
          question: 'Translate: "Where do you live?"',
          questionHinglish: 'Translate karo: "Where do you live?"',
          correctAnswer: 'Wo wohnst du?',
          explanation: 'Use "Wo" for location and put the verb second: Wo wohnst du?',
          explanationHinglish: 'Location ke liye "Wo" use karo aur verb doosre position par: Wo wohnst du?',
          difficulty: 2,
          xpReward: 12,
          tags: ['questions', 'typing'],
        },
        {
          id: 'ex-a1-06-01-06',
          type: 'multiple-choice',
          question: 'What does "Wann beginnt der Kurs?" mean?',
          questionHinglish: '"Wann beginnt der Kurs?" ka matlab kya hai?',
          options: ['Where is the course?', 'When does the course begin?', 'Why is the course?', 'How is the course?'],
          correctAnswer: 'When does the course begin?',
          explanation: '"Wann" = when, "beginnt" = begins, "der Kurs" = the course.',
          explanationHinglish: '"Wann" = kab, "beginnt" = shuru hota hai, "der Kurs" = course.',
          difficulty: 1,
          xpReward: 8,
          tags: ['questions', 'meaning'],
        },
      ],
    },
    {
      id: 'l-a1-06-02',
      level: 'A1',
      moduleId: 'm-a1-06',
      title: 'Negation with nicht and kein',
      titleHinglish: 'nicht aur kein se Negation',
      objective: 'Say no correctly using nicht and kein',
      objectiveHinglish: 'nicht aur kein ka sahi use karke "nahi" bolna seekho',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-06-01'],
      order: 2,
      grammarPoints: ['nicht', 'kein/keine', 'negative questions'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "no" in German?',
          'Do you know the difference between "nicht" and "kein"?',
        ],
        explanation: `German has two main ways to say "not": **nicht** and **kein**.

**nicht** negates verbs, adjectives, adverbs, and whole sentences. It usually goes near the end:
- Ich verstehe **nicht**. (I don't understand.)
- Das ist **nicht** gut. (That is not good.)
- Ich kann **nicht** kommen. (I cannot come.)
- Das ist **nicht** mein Buch. (That is not my book.)

**kein** negates nouns that have **ein** or **no article**. It takes the same endings as ein:
| | Masculine | Feminine | Neuter | Plural |
|-|-----------|----------|--------|--------|
| Nominative | kein | keine | kein | keine |
| Accusative | keinen | keine | kein | keine |

- Ich habe **kein** Auto. (neuter)
- Ich habe **keine** Zeit. (feminine)
- Ich habe **keinen** Bruder. (masculine, accusative)
- Ich habe **keine** Kinder. (plural)

**nicht vs kein:**
- Das ist **nicht** mein Buch. = It is not my book. (nicht negates "mein")
- Das ist **kein** Buch. = It is not a book. (kein negates the noun)

**Negative questions:** Answer "Doch" when you disagree with the negative:
- "Hast du keinen Hunger?" – "Doch, ich habe Hunger." (Yes, I am hungry.)

**Common mistakes:**
- ❌ Ich habe nicht Auto. → ✅ Ich habe kein Auto.
- ❌ Ich verstehe kein. → ✅ Ich verstehe nicht.`,
        explanationHinglish: `German mein "not" ke liye do main tarike hain: **nicht** aur **kein**.

**nicht** verbs, adjectives, adverbs aur poore sentence ko negate karta hai. Yeh aksar end ke paas aata hai:
- Ich verstehe **nicht**. (Mujhe samajh nahi aata.)
- Das ist **nicht** gut. (Yeh achha nahi hai.)
- Ich kann **nicht** kommen. (Main aa nahi sakta.)
- Das ist **nicht** mein Buch. (Yeh meri kitaab nahi hai.)

**kein** un nouns ko negate karta hai jinme **ein** hai ya koi article nahi. Iske endings ein jaise hain:
| | Masculine | Feminine | Neuter | Plural |
|-|-----------|----------|--------|--------|
| Nominative | kein | keine | kein | keine |
| Accusative | keinen | keine | kein | keine |

- Ich habe **kein** Auto. (neuter)
- Ich habe **keine** Zeit. (feminine)
- Ich habe **keinen** Bruder. (masculine, accusative)
- Ich habe **keine** Kinder. (plural)

**nicht vs kein:**
- Das ist **nicht** mein Buch. = Yeh meri kitaab nahi hai. (nicht "mein" ko negate karta hai)
- Das ist **kein** Buch. = Yeh kitaab nahi hai. (kein noun ko negate karta hai)

**Negative questions:** Negative sawaal se disagree karna ho to "Doch":
- "Hast du keinen Hunger?" – "Doch, ich habe Hunger." (Haan, mujhe bhookh hai.)

**Common mistakes:**
- ❌ Ich habe nicht Auto. → ✅ Ich habe kein Auto.
- ❌ Ich verstehe kein. → ✅ Ich verstehe nicht.`,
        examples: [
          {
            german: 'Ich habe kein Auto.',
            english: 'I do not have a car.',
            hinglish: 'Mere paas gaadi nahi hai.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'verb', meaning: 'have' },
              { word: 'kein', role: 'negative article (neuter accusative)', meaning: 'no / not a' },
              { word: 'Auto', role: 'noun (neuter)', meaning: 'car' },
            ],
            audioText: 'Ich habe kein Auto.',
          },
          {
            german: 'Ich habe keine Zeit.',
            english: 'I do not have time.',
            hinglish: 'Mere paas time nahi hai.',
            audioText: 'Ich habe keine Zeit.',
          },
          {
            german: 'Das ist nicht mein Buch.',
            english: 'That is not my book.',
            hinglish: 'Yeh meri kitaab nahi hai.',
            audioText: 'Das ist nicht mein Buch.',
          },
          {
            german: 'Ich verstehe das nicht.',
            english: 'I do not understand that.',
            hinglish: 'Mujhe yeh samajh nahi aata.',
            audioText: 'Ich verstehe das nicht.',
          },
        ],
        realLifeContext: 'Negation is essential for real communication: saying you do not understand, do not have something, do not eat certain food, or cannot come. "Ich verstehe nicht" is one of the most useful sentences for a beginner.',
        culturalNote: 'Answering a negative question can confuse learners. If someone asks "Kommst du nicht?" (Aren\'t you coming?) and you ARE coming, answer "Doch" — not "Ja".',
        summary: [
          'nicht negates verbs, adjectives, and whole sentences',
          'kein negates nouns with ein or no article',
          'kein endings: kein (m/n), keine (f/pl), keinen (m accusative)',
          'Ich habe kein Auto / keine Zeit / keinen Bruder',
          'Doch contradicts a negative question',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-06-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe ___ Auto." (I do not have a car.)',
          questionHinglish: 'Complete karo: "Ich habe ___ Auto." (Mere paas gaadi nahi hai.)',
          options: ['nicht', 'kein', 'keine', 'keinen'],
          correctAnswer: 'kein',
          explanation: '"Auto" is neuter, so the negative article is "kein": Ich habe kein Auto.',
          explanationHinglish: '"Auto" neuter hai, isliye negative article "kein" hai: Ich habe kein Auto.',
          difficulty: 1,
          xpReward: 8,
          tags: ['negation', 'kein'],
        },
        {
          id: 'ex-a1-06-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe ___ Zeit." (I do not have time.)',
          questionHinglish: 'Complete karo: "Ich habe ___ Zeit." (Mere paas time nahi hai.)',
          options: ['nicht', 'kein', 'keine', 'keinen'],
          correctAnswer: 'keine',
          explanation: '"Zeit" is feminine, so the negative article is "keine": Ich habe keine Zeit.',
          explanationHinglish: '"Zeit" feminine hai, isliye negative article "keine" hai: Ich habe keine Zeit.',
          difficulty: 1,
          xpReward: 8,
          tags: ['negation', 'kein'],
        },
        {
          id: 'ex-a1-06-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe ___ Bruder." (I do not have a brother.)',
          questionHinglish: 'Complete karo: "Ich habe ___ Bruder." (Mera koi bhai nahi hai.)',
          options: ['nicht', 'kein', 'keine', 'keinen'],
          correctAnswer: 'keinen',
          explanation: '"Bruder" is masculine and the direct object is accusative, so use "keinen": Ich habe keinen Bruder.',
          explanationHinglish: '"Bruder" masculine hai aur direct object accusative hai, isliye "keinen": Ich habe keinen Bruder.',
          difficulty: 2,
          xpReward: 10,
          tags: ['negation', 'kein', 'accusative'],
        },
        {
          id: 'ex-a1-06-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ mein Buch." (That is not my book.)',
          questionHinglish: 'Complete karo: "Das ist ___ mein Buch." (Yeh meri kitaab nahi hai.)',
          options: ['nicht', 'kein', 'keine', 'keinen'],
          correctAnswer: 'nicht',
          explanation: 'Here "mein" is being negated, not the noun. Use "nicht": Das ist nicht mein Buch.',
          explanationHinglish: 'Yahan "mein" negate ho raha hai, noun nahi. "nicht" use karo: Das ist nicht mein Buch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['negation', 'nicht'],
        },
        {
          id: 'ex-a1-06-02-05',
          type: 'multiple-choice',
          question: 'Complete: "Ich verstehe ___." (I do not understand.)',
          questionHinglish: 'Complete karo: "Ich verstehe ___." (Mujhe samajh nahi aata.)',
          options: ['nicht', 'kein', 'keine', 'keinen'],
          correctAnswer: 'nicht',
          explanation: 'A verb is negated with "nicht": Ich verstehe nicht.',
          explanationHinglish: 'Verb ko "nicht" se negate karte hain: Ich verstehe nicht.',
          difficulty: 1,
          xpReward: 8,
          tags: ['negation', 'nicht'],
        },
        {
          id: 'ex-a1-06-02-06',
          type: 'typing',
          question: 'Translate: "I do not have a sister." (die Schwester)',
          questionHinglish: 'Translate karo: "I do not have a sister." (die Schwester)',
          correctAnswer: 'Ich habe keine Schwester.',
          explanation: '"Schwester" is feminine, so use "keine": Ich habe keine Schwester.',
          explanationHinglish: '"Schwester" feminine hai, isliye "keine" use karo: Ich habe keine Schwester.',
          difficulty: 2,
          xpReward: 12,
          tags: ['negation', 'kein', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-06-03',
      level: 'A1',
      moduleId: 'm-a1-06',
      title: 'Word Order: Verb Second & Time–Manner–Place',
      titleHinglish: 'Word Order: Verb Second aur Time–Manner–Place',
      objective: 'Build natural German sentences with correct word order',
      objectiveHinglish: 'Sahi word order ke saath natural German sentences banao',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'writing'],
      prerequisites: ['l-a1-06-02'],
      order: 3,
      grammarPoints: ['verb second', 'inversion', 'time-manner-place'],
      vocabulary: [],
      content: {
        warmUp: [
          'In "Heute lerne ich Deutsch", why is the verb not third?',
          'What order feels natural: time, manner, place — or place, time, manner?',
        ],
        explanation: `German word order has one golden rule: in a **statement**, the verb is the **second element**.

**Normal order:** Subject + Verb + Rest
- Ich **lerne** Deutsch.
- Wir **wohnen** in Berlin.

**Inversion:** If you start with a time or place expression, the verb stays second and the subject moves after it.
- **Heute** lerne **ich** Deutsch.
- **In Berlin** wohne **ich**.
- **Am Montag** arbeite **ich**.

**Time – Manner – Place (TMP):** When several details appear, the most natural order is:
1. **Time** (when?)
2. **Manner** (how?)
3. **Place** (where?)
- Ich fahre **morgen** (time) **mit dem Bus** (manner) **nach Berlin** (place).
- Wir treffen uns **um acht Uhr** (time) **im Café** (place).

**Questions:**
- Yes/No: verb first → **Kommst** du heute?
- W-question: W-word + verb → **Wann** kommst du?

**Common mistakes:**
- ❌ Ich fahre nach Berlin morgen mit dem Bus. (unnatural)
- ✅ Ich fahre morgen mit dem Bus nach Berlin.
- ❌ Heute ich lerne Deutsch. → ✅ Heute lerne ich Deutsch.`,
        explanationHinglish: `German word order ka ek golden rule: **statement** mein verb **doosre element** par hota hai.

**Normal order:** Subject + Verb + Rest
- Ich **lerne** Deutsch.
- Wir **wohnen** in Berlin.

**Inversion:** Agar time ya place expression se shuru karo, verb doosre par rehta hai aur subject uske baad aata hai.
- **Heute** lerne **ich** Deutsch.
- **In Berlin** wohne **ich**.
- **Am Montag** arbeite **ich**.

**Time – Manner – Place (TMP):** Jab kai details hon, sabse natural order:
1. **Time** (kab?)
2. **Manner** (kaise?)
3. **Place** (kahan?)
- Ich fahre **morgen** (time) **mit dem Bus** (manner) **nach Berlin** (place).
- Wir treffen uns **um acht Uhr** (time) **im Café** (place).

**Questions:**
- Yes/No: verb pehle → **Kommst** du heute?
- W-question: W-word + verb → **Wann** kommst du?

**Common mistakes:**
- ❌ Ich fahre nach Berlin morgen mit dem Bus. (unnatural)
- ✅ Ich fahre morgen mit dem Bus nach Berlin.
- ❌ Heute ich lerne Deutsch. → ✅ Heute lerne ich Deutsch.`,
        examples: [
          {
            german: 'Heute lerne ich Deutsch.',
            english: 'Today I am learning German.',
            hinglish: 'Aaj main German seekh raha hoon.',
            breakdown: [
              { word: 'Heute', role: 'time expression (position 1)', meaning: 'today' },
              { word: 'lerne', role: 'verb (position 2)', meaning: 'learn' },
              { word: 'ich', role: 'subject (after verb)', meaning: 'I' },
              { word: 'Deutsch', role: 'object', meaning: 'German' },
            ],
            audioText: 'Heute lerne ich Deutsch.',
          },
          {
            german: 'Ich fahre morgen mit dem Bus nach Berlin.',
            english: 'Tomorrow I am going to Berlin by bus.',
            hinglish: 'Kal main bus se Berlin jaa raha hoon.',
            audioText: 'Ich fahre morgen mit dem Bus nach Berlin.',
          },
          {
            german: 'Am Montag arbeite ich.',
            english: 'On Monday I work.',
            hinglish: 'Somvaar ko main kaam karta hoon.',
            audioText: 'Am Montag arbeite ich.',
          },
        ],
        realLifeContext: 'Correct word order makes you sound natural and understandable. It matters most in writing (emails, applications) and in exams, where word order is explicitly tested.',
        summary: [
          'In statements, the verb is always the second element',
          'Starting with time/place causes inversion: Heute lerne ich',
          'Neutral order is Time → Manner → Place',
          'Yes/No questions put the verb first',
          'W-questions put the W-word first and the verb second',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-06-03-01',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "heute / ich / lerne / Deutsch / ."',
          questionHinglish: 'Sahi sentence banao: "heute / ich / lerne / Deutsch / ."',
          options: ['heute', 'ich', 'lerne', 'Deutsch', '.'],
          correctAnswer: 'Heute lerne ich Deutsch .',
          explanation: 'When the sentence starts with "Heute", the verb stays second: Heute lerne ich Deutsch.',
          explanationHinglish: 'Jab sentence "Heute" se shuru hota hai, verb doosre par rehta hai: Heute lerne ich Deutsch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'inversion'],
        },
        {
          id: 'ex-a1-06-03-02',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "in Berlin / wohne / ich / ."',
          questionHinglish: 'Sahi sentence banao: "in Berlin / wohne / ich / ."',
          options: ['in', 'Berlin', 'wohne', 'ich', '.'],
          correctAnswer: 'In Berlin wohne ich .',
          explanation: 'Starting with a place expression also causes inversion: In Berlin wohne ich.',
          explanationHinglish: 'Place expression se shuru karne par bhi inversion hota hai: In Berlin wohne ich.',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'inversion'],
        },
        {
          id: 'ex-a1-06-03-03',
          type: 'multiple-choice',
          question: 'Which sentence sounds most natural?',
          questionHinglish: 'Kaun sa sentence sabse natural lagta hai?',
          options: [
            'Ich fahre morgen mit dem Bus nach Berlin.',
            'Ich fahre nach Berlin morgen mit dem Bus.',
            'Ich fahre mit dem Bus nach Berlin morgen.',
            'Morgen nach Berlin ich fahre mit dem Bus.',
          ],
          correctAnswer: 'Ich fahre morgen mit dem Bus nach Berlin.',
          explanation: 'The neutral order is Time → Manner → Place: morgen (time) → mit dem Bus (manner) → nach Berlin (place).',
          explanationHinglish: 'Neutral order Time → Manner → Place hai: morgen (time) → mit dem Bus (manner) → nach Berlin (place).',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'time-manner-place'],
        },
        {
          id: 'ex-a1-06-03-04',
          type: 'multiple-choice',
          question: 'Complete: "Am Montag ___ ich." (arbeiten)',
          questionHinglish: 'Complete karo: "Am Montag ___ ich." (arbeiten)',
          options: ['arbeite', 'arbeiten', 'arbeitest', 'arbeitet'],
          correctAnswer: 'arbeite',
          explanation: 'The subject is "ich", so the verb is "arbeite". It stays in position 2 after "Am Montag": Am Montag arbeite ich.',
          explanationHinglish: 'Subject "ich" hai, isliye verb "arbeite". "Am Montag" ke baad verb position 2 par: Am Montag arbeite ich.',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'verbs'],
        },
        {
          id: 'ex-a1-06-03-05',
          type: 'multiple-choice',
          question: 'Which sentence is wrong?',
          questionHinglish: 'Kaun sa sentence galat hai?',
          options: [
            'Heute lerne ich Deutsch.',
            'Ich lerne heute Deutsch.',
            'Heute ich lerne Deutsch.',
            'Deutsch lerne ich heute.',
          ],
          correctAnswer: 'Heute ich lerne Deutsch.',
          explanation: 'After "Heute", the verb must come before the subject: Heute lerne ich Deutsch. The other sentences keep the verb in position 2.',
          explanationHinglish: '"Heute" ke baad verb subject se pehle aana chahiye: Heute lerne ich Deutsch. Baaki sentences mein verb position 2 par hai.',
          difficulty: 3,
          xpReward: 12,
          tags: ['word-order', 'inversion', 'common-mistakes'],
        },
      ],
    },
  ],
};
