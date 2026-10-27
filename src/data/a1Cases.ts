// ============================================================
// A1 MODULE 7 – PLURALS, ARTICLES & THE ACCUSATIVE CASE
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_CASES: Module = {
  id: 'm-a1-07',
  level: 'A1',
  title: 'Plurals, Articles & Accusative',
  titleHinglish: 'Plurals, Articles aur Accusative',
  description: 'Form plural nouns, use ein/eine correctly, and talk about direct objects.',
  descriptionHinglish: 'Plural nouns banana, ein/eine sahi use karna, aur direct objects ke baare mein bolna seekho.',
  skills: ['grammar', 'vocabulary', 'writing'],
  order: 7,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-07-01',
      level: 'A1',
      moduleId: 'm-a1-07',
      title: 'Plural Nouns',
      titleHinglish: 'Plural Nouns',
      objective: 'Form and recognize common German plural nouns',
      objectiveHinglish: 'Common German plural nouns banana aur pehchaanna',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'vocabulary'],
      prerequisites: ['l-a1-06-03'],
      order: 1,
      grammarPoints: ['plural endings', 'die for all plurals', 'umlaut plurals'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you make a noun plural in English?',
          'Do you know the plural of "das Kind" or "der Mann"?',
        ],
        explanation: `In German, the definite article for **all plural nouns is die** — no matter whether the singular is der, die, or das.

| Singular | Plural |
|----------|--------|
| der Tisch | **die** Tische |
| die Frau | **die** Frauen |
| das Kind | **die** Kinder |

**Common plural patterns:**
- **-e**: der Tisch → die Tische, der Stuhl → die Stühle (with umlaut)
- **-er**: das Kind → die Kinder, das Buch → die Bücher (with umlaut)
- **-n / -en**: die Frau → die Frauen, die Lampe → die Lampen, der Student → die Studenten
- **-s**: das Auto → die Autos, das Handy → die Handys
- **no ending**: der Lehrer → die Lehrer, das Fenster → die Fenster
- **umlaut only**: der Mann → die Männer, die Stadt → die Städte

**Important:** There is no single rule that works for every noun. Always learn the plural together with the noun: **das Buch, die Bücher**.

**No plural form of ein/eine:** Use the noun alone or "die":
- Das ist **ein** Kind. → Das sind **Kinder**. (not "eine Kinder")

**Common mistakes:**
- ❌ die Buchs → ✅ die Bücher
- ❌ ein Kinder → ✅ Kinder / die Kinder`,
        explanationHinglish: `German mein **saare plural nouns ka definite article die** hota hai — singular chahe der, die ya das ho.

| Singular | Plural |
|----------|--------|
| der Tisch | **die** Tische |
| die Frau | **die** Frauen |
| das Kind | **die** Kinder |

**Common plural patterns:**
- **-e**: der Tisch → die Tische, der Stuhl → die Stühle (umlaut ke saath)
- **-er**: das Kind → die Kinder, das Buch → die Bücher (umlaut ke saath)
- **-n / -en**: die Frau → die Frauen, die Lampe → die Lampen, der Student → die Studenten
- **-s**: das Auto → die Autos, das Handy → die Handys
- **no ending**: der Lehrer → die Lehrer, das Fenster → die Fenster
- **sirf umlaut**: der Mann → die Männer, die Stadt → die Städte

**Zaruri:** Har noun ke liye ek hi rule nahi hai. Plural hamesha noun ke saath seekho: **das Buch, die Bücher**.

**ein/eine ka plural form nahi hota:** Noun akela ya "die" use karo:
- Das ist **ein** Kind. → Das sind **Kinder**. ("eine Kinder" galat hai)

**Common mistakes:**
- ❌ die Buchs → ✅ die Bücher
- ❌ ein Kinder → ✅ Kinder / die Kinder`,
        examples: [
          {
            german: 'Das Kind spielt. Die Kinder spielen.',
            english: 'The child is playing. The children are playing.',
            hinglish: 'Baccha khel raha hai. Bacche khel rahe hain.',
            breakdown: [
              { word: 'Das', role: 'article (neuter singular)', meaning: 'the' },
              { word: 'Kind', role: 'noun (neuter)', meaning: 'child' },
              { word: 'Die', role: 'article (plural)', meaning: 'the' },
              { word: 'Kinder', role: 'noun (plural)', meaning: 'children' },
            ],
            audioText: 'Das Kind spielt. Die Kinder spielen.',
          },
          {
            german: 'Die Bücher sind neu.',
            english: 'The books are new.',
            hinglish: 'Kitaabein nayi hain.',
            audioText: 'Die Bücher sind neu.',
          },
          {
            german: 'Die Männer arbeiten hier.',
            english: 'The men work here.',
            hinglish: 'Aadmi yahan kaam karte hain.',
            audioText: 'Die Männer arbeiten hier.',
          },
        ],
        realLifeContext: 'Plurals appear in shops (die Äpfel), on signs (die Öffnungszeiten), in family conversations (meine Eltern), and in almost every exam task. Learning the plural with each noun saves you from guessing later.',
        summary: [
          'All plural nouns use the article die',
          'Common endings: -e, -er, -n/-en, -s, or no ending',
          'Some plurals add an umlaut: Mann → Männer, Buch → Bücher',
          'Learn the plural with the noun: das Buch, die Bücher',
          'ein/eine has no plural form: Das sind Kinder',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-07-01-01',
          type: 'multiple-choice',
          question: 'What is the plural of "das Buch"?',
          questionHinglish: '"das Buch" ka plural kya hai?',
          options: ['die Buchs', 'die Bücher', 'die Bucher', 'die Büchen'],
          correctAnswer: 'die Bücher',
          explanation: '"Buch" takes -er and an umlaut in the plural: die Bücher.',
          explanationHinglish: '"Buch" plural mein -er aur umlaut leta hai: die Bücher.',
          difficulty: 2,
          xpReward: 10,
          tags: ['plurals', 'nouns'],
        },
        {
          id: 'ex-a1-07-01-02',
          type: 'multiple-choice',
          question: 'What is the plural of "das Kind"?',
          questionHinglish: '"das Kind" ka plural kya hai?',
          options: ['die Kinde', 'die Kinder', 'die Kinds', 'die Kindern'],
          correctAnswer: 'die Kinder',
          explanation: '"Kind" takes -er in the plural: die Kinder.',
          explanationHinglish: '"Kind" plural mein -er leta hai: die Kinder.',
          difficulty: 1,
          xpReward: 8,
          tags: ['plurals', 'nouns'],
        },
        {
          id: 'ex-a1-07-01-03',
          type: 'multiple-choice',
          question: 'What is the plural of "das Auto"?',
          questionHinglish: '"das Auto" ka plural kya hai?',
          options: ['die Autos', 'die Auten', 'die Autoe', 'die Auter'],
          correctAnswer: 'die Autos',
          explanation: 'Many foreign words, including "Auto", take -s in the plural: die Autos.',
          explanationHinglish: 'Kai foreign words, jaise "Auto", plural mein -s lete hain: die Autos.',
          difficulty: 1,
          xpReward: 8,
          tags: ['plurals', 'nouns'],
        },
        {
          id: 'ex-a1-07-01-04',
          type: 'multiple-choice',
          question: 'What is the plural of "die Frau"?',
          questionHinglish: '"die Frau" ka plural kya hai?',
          options: ['die Fraus', 'die Frauen', 'die Fraue', 'die Fräuen'],
          correctAnswer: 'die Frauen',
          explanation: 'Feminine nouns often add -en: die Frau → die Frauen.',
          explanationHinglish: 'Feminine nouns aksar -en lagate hain: die Frau → die Frauen.',
          difficulty: 1,
          xpReward: 8,
          tags: ['plurals', 'nouns'],
        },
        {
          id: 'ex-a1-07-01-05',
          type: 'multiple-choice',
          question: 'Which article do all German plural nouns use?',
          questionHinglish: 'Saare German plural nouns kaun sa article use karte hain?',
          options: ['der', 'die', 'das', 'ein'],
          correctAnswer: 'die',
          explanation: 'Regardless of the singular gender, every plural noun uses "die": die Tische, die Frauen, die Kinder.',
          explanationHinglish: 'Singular gender kuch bhi ho, har plural noun "die" use karta hai: die Tische, die Frauen, die Kinder.',
          difficulty: 1,
          xpReward: 8,
          tags: ['plurals', 'articles'],
        },
        {
          id: 'ex-a1-07-01-06',
          type: 'typing',
          question: 'Type the plural of "der Mann" with its article.',
          questionHinglish: '"der Mann" ka plural article ke saath type karo.',
          correctAnswer: 'die Männer',
          explanation: '"Mann" adds an umlaut and -er in the plural: die Männer.',
          explanationHinglish: '"Mann" plural mein umlaut aur -er lagata hai: die Männer.',
          difficulty: 2,
          xpReward: 10,
          tags: ['plurals', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-07-02',
      level: 'A1',
      moduleId: 'm-a1-07',
      title: 'Indefinite Articles: ein, eine, ein',
      titleHinglish: 'Indefinite Articles: ein, eine, ein',
      objective: 'Use ein and eine correctly with masculine, feminine, and neuter nouns',
      objectiveHinglish: 'Masculine, feminine aur neuter nouns ke saath ein aur eine sahi use karo',
      estimatedMinutes: 18,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-07-01'],
      order: 2,
      grammarPoints: ['ein/eine', 'nominative articles', 'no plural indefinite article'],
      vocabulary: [],
      content: {
        warmUp: [
          'What is the difference between "der", "die", and "das"?',
          'How do you say "a" in German?',
        ],
        explanation: `The indefinite article ("a/an") has three forms in the **nominative**:

| Gender | Article | Example |
|--------|---------|---------|
| Masculine | **ein** | ein Mann (a man) |
| Feminine | **eine** | eine Frau (a woman) |
| Neuter | **ein** | ein Kind (a child) |

**Plural:** German has **no indefinite article in the plural**. Just use the noun:
- Das ist ein Kind. → Das sind **Kinder**. (These are children.)
- Ich habe ein Buch. → Ich habe **Bücher**. (I have books.)

**ein vs. kein:** "kein" is the negative form of "ein":
- Das ist ein Hund. → Das ist **kein** Hund. (That is not a dog.)
- Das ist eine Katze. → Das ist **keine** Katze. (That is not a cat.)

**Common mistakes:**
- ❌ ein Frau → ✅ eine Frau
- ❌ eine Mann → ✅ ein Mann
- ❌ ein Kinder → ✅ Kinder`,
        explanationHinglish: `Indefinite article ("a/an") ke **nominative** mein teen forms hain:

| Gender | Article | Example |
|--------|---------|---------|
| Masculine | **ein** | ein Mann (ek aadmi) |
| Feminine | **eine** | eine Frau (ek aurat) |
| Neuter | **ein** | ein Kind (ek baccha) |

**Plural:** German mein **plural ka indefinite article nahi hota**. Noun akela use karo:
- Das ist ein Kind. → Das sind **Kinder**. (Yeh bacche hain.)
- Ich habe ein Buch. → Ich habe **Bücher**. (Mere paas kitaabein hain.)

**ein vs. kein:** "kein" "ein" ka negative form hai:
- Das ist ein Hund. → Das ist **kein** Hund. (Yeh kutta nahi hai.)
- Das ist eine Katze. → Das ist **keine** Katze. (Yeh billi nahi hai.)

**Common mistakes:**
- ❌ ein Frau → ✅ eine Frau
- ❌ eine Mann → ✅ ein Mann
- ❌ ein Kinder → ✅ Kinder`,
        examples: [
          {
            german: 'Das ist ein Mann. Das ist eine Frau. Das ist ein Kind.',
            english: 'That is a man. That is a woman. That is a child.',
            hinglish: 'Yeh ek aadmi hai. Yeh ek aurat hai. Yeh ek baccha hai.',
            breakdown: [
              { word: 'ein', role: 'indefinite article (masculine)', meaning: 'a' },
              { word: 'eine', role: 'indefinite article (feminine)', meaning: 'a' },
              { word: 'ein', role: 'indefinite article (neuter)', meaning: 'a' },
            ],
            audioText: 'Das ist ein Mann. Das ist eine Frau. Das ist ein Kind.',
          },
          {
            german: 'Das sind Kinder.',
            english: 'These are children.',
            hinglish: 'Yeh bacche hain.',
            audioText: 'Das sind Kinder.',
          },
          {
            german: 'Ich habe eine Katze.',
            english: 'I have a cat.',
            hinglish: 'Mere paas ek billi hai.',
            audioText: 'Ich habe eine Katze.',
          },
        ],
        realLifeContext: 'You need ein/eine when introducing people and things: "Das ist ein Freund", "Ich habe eine Frage", "Das ist ein Problem". It is one of the first building blocks of A1 speaking.',
        summary: [
          'ein = masculine and neuter nominative',
          'eine = feminine nominative',
          'There is no indefinite article in the plural',
          'kein/keine is the negative form of ein/eine',
          'Das ist ein Mann / eine Frau / ein Kind',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-07-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Mann."',
          questionHinglish: 'Complete karo: "Das ist ___ Mann."',
          options: ['ein', 'eine', 'einen', 'kein'],
          correctAnswer: 'ein',
          explanation: '"Mann" is masculine, and this is the nominative case, so use "ein": ein Mann.',
          explanationHinglish: '"Mann" masculine hai aur yeh nominative case hai, isliye "ein": ein Mann.',
          difficulty: 1,
          xpReward: 8,
          tags: ['articles', 'ein'],
        },
        {
          id: 'ex-a1-07-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Frau."',
          questionHinglish: 'Complete karo: "Das ist ___ Frau."',
          options: ['ein', 'eine', 'einen', 'kein'],
          correctAnswer: 'eine',
          explanation: '"Frau" is feminine, so use "eine": eine Frau.',
          explanationHinglish: '"Frau" feminine hai, isliye "eine": eine Frau.',
          difficulty: 1,
          xpReward: 8,
          tags: ['articles', 'eine'],
        },
        {
          id: 'ex-a1-07-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Kind."',
          questionHinglish: 'Complete karo: "Das ist ___ Kind."',
          options: ['ein', 'eine', 'einen', 'kein'],
          correctAnswer: 'ein',
          explanation: '"Kind" is neuter, so use "ein": ein Kind.',
          explanationHinglish: '"Kind" neuter hai, isliye "ein": ein Kind.',
          difficulty: 1,
          xpReward: 8,
          tags: ['articles', 'ein'],
        },
        {
          id: 'ex-a1-07-02-04',
          type: 'multiple-choice',
          question: 'Which sentence is correct for "These are children"?',
          questionHinglish: '"Yeh bacche hain" ke liye kaun sa sentence sahi hai?',
          options: ['Das sind ein Kinder.', 'Das sind eine Kinder.', 'Das sind Kinder.', 'Das ist Kinder.'],
          correctAnswer: 'Das sind Kinder.',
          explanation: 'There is no indefinite article in the plural: Das sind Kinder.',
          explanationHinglish: 'Plural mein indefinite article nahi hota: Das sind Kinder.',
          difficulty: 2,
          xpReward: 10,
          tags: ['articles', 'plurals'],
        },
        {
          id: 'ex-a1-07-02-05',
          type: 'typing',
          question: 'Translate: "That is a woman."',
          questionHinglish: 'Translate karo: "That is a woman."',
          correctAnswer: 'Das ist eine Frau.',
          explanation: '"Frau" is feminine, so "a woman" is "eine Frau": Das ist eine Frau.',
          explanationHinglish: '"Frau" feminine hai, isliye "a woman" = "eine Frau": Das ist eine Frau.',
          difficulty: 1,
          xpReward: 10,
          tags: ['articles', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-07-03',
      level: 'A1',
      moduleId: 'm-a1-07',
      title: 'The Accusative Case: den, einen, mein',
      titleHinglish: 'Accusative Case: den, einen, mein',
      objective: 'Use accusative articles for direct objects',
      objectiveHinglish: 'Direct objects ke liye accusative articles sahi use karo',
      estimatedMinutes: 25,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-07-02'],
      order: 3,
      grammarPoints: ['accusative case', 'den/einen', 'direct objects'],
      vocabulary: [],
      content: {
        warmUp: [
          'In "I see the man", which word receives the action?',
          'Do you remember the difference between der and den?',
        ],
        explanation: `The **accusative case** is used for the **direct object** — the person or thing that receives the action.

**Only masculine articles change in the accusative:**

| Gender | Nominative | Accusative |
|--------|------------|------------|
| Masculine | der / ein / mein | **den / einen / meinen** |
| Feminine | die / eine / meine | die / eine / meine |
| Neuter | das / ein / mein | das / ein / mein |
| Plural | die / — / meine | die / — / meine |

**Common verbs that take an accusative object:**
haben, kaufen, sehen, brauchen, essen, trinken, mögen, suchen, lesen.

Examples:
- Ich sehe **den** Mann. (masculine)
- Ich kaufe **einen** Apfel. (masculine)
- Ich trinke **eine** Cola. (feminine — unchanged)
- Ich lese **das** Buch. (neuter — unchanged)
- Ich habe **keine** Kinder. (plural — unchanged)

**Accusative pronouns:** mich, dich, ihn, sie, es, uns, euch, sie/Sie.
- Ich sehe **ihn**. (I see him.)
- Ich brauche **dich**. (I need you.)

**Common mistakes:**
- ❌ Ich sehe der Mann. → ✅ Ich sehe den Mann.
- ❌ Ich kaufe ein Apfel. → ✅ Ich kaufe einen Apfel.`,
        explanationHinglish: `**Accusative case** **direct object** ke liye use hota hai — woh person ya cheez jis par action hota hai.

**Sirf masculine articles accusative mein badalte hain:**

| Gender | Nominative | Accusative |
|--------|------------|------------|
| Masculine | der / ein / mein | **den / einen / meinen** |
| Feminine | die / eine / meine | die / eine / meine |
| Neuter | das / ein / mein | das / ein / mein |
| Plural | die / — / meine | die / — / meine |

**Common verbs jo accusative object lete hain:**
haben, kaufen, sehen, brauchen, essen, trinken, mögen, suchen, lesen.

Examples:
- Ich sehe **den** Mann. (masculine)
- Ich kaufe **einen** Apfel. (masculine)
- Ich trinke **eine** Cola. (feminine — same)
- Ich lese **das** Buch. (neuter — same)
- Ich habe **keine** Kinder. (plural — same)

**Accusative pronouns:** mich, dich, ihn, sie, es, uns, euch, sie/Sie.
- Ich sehe **ihn**. (Main use dekhta hoon.)
- Ich brauche **dich**. (Mujhe tumhari zarurat hai.)

**Common mistakes:**
- ❌ Ich sehe der Mann. → ✅ Ich sehe den Mann.
- ❌ Ich kaufe ein Apfel. → ✅ Ich kaufe einen Apfel.`,
        examples: [
          {
            german: 'Ich sehe den Mann.',
            english: 'I see the man.',
            hinglish: 'Main aadmi ko dekhta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject (nominative)', meaning: 'I' },
              { word: 'sehe', role: 'verb', meaning: 'see' },
              { word: 'den', role: 'article (masculine accusative)', meaning: 'the' },
              { word: 'Mann', role: 'direct object', meaning: 'man' },
            ],
            audioText: 'Ich sehe den Mann.',
          },
          {
            german: 'Ich kaufe einen Apfel.',
            english: 'I am buying an apple.',
            hinglish: 'Main ek seb kharid raha hoon.',
            audioText: 'Ich kaufe einen Apfel.',
          },
          {
            german: 'Ich trinke eine Cola.',
            english: 'I am drinking a cola.',
            hinglish: 'Main ek cola pee raha hoon.',
            audioText: 'Ich trinke eine Cola.',
          },
          {
            german: 'Ich lese das Buch.',
            english: 'I am reading the book.',
            hinglish: 'Main kitaab padh raha hoon.',
            audioText: 'Ich lese das Buch.',
          },
        ],
        realLifeContext: 'Every time you buy something, see someone, need something, or eat something, you use the accusative. Mastering der→den and ein→einen is one of the biggest A1 milestones.',
        summary: [
          'The accusative marks the direct object',
          'Only masculine changes: der→den, ein→einen, mein→meinen',
          'Feminine, neuter, and plural stay the same',
          'Common verbs: haben, kaufen, sehen, brauchen, essen, trinken',
          'Accusative pronouns: mich, dich, ihn, sie, es, uns, euch',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-07-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich sehe ___ Mann."',
          questionHinglish: 'Complete karo: "Ich sehe ___ Mann."',
          options: ['der', 'den', 'dem', 'des'],
          correctAnswer: 'den',
          explanation: 'The direct object "Mann" is masculine, so der becomes den: Ich sehe den Mann.',
          explanationHinglish: 'Direct object "Mann" masculine hai, isliye der → den: Ich sehe den Mann.',
          difficulty: 1,
          xpReward: 8,
          tags: ['accusative', 'articles'],
        },
        {
          id: 'ex-a1-07-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich kaufe ___ Apfel."',
          questionHinglish: 'Complete karo: "Ich kaufe ___ Apfel."',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctAnswer: 'einen',
          explanation: '"Apfel" is masculine and is the direct object, so ein becomes einen: Ich kaufe einen Apfel.',
          explanationHinglish: '"Apfel" masculine hai aur direct object hai, isliye ein → einen: Ich kaufe einen Apfel.',
          difficulty: 2,
          xpReward: 10,
          tags: ['accusative', 'articles'],
        },
        {
          id: 'ex-a1-07-03-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe ___ Schwester."',
          questionHinglish: 'Complete karo: "Ich habe ___ Schwester."',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctAnswer: 'eine',
          explanation: '"Schwester" is feminine. Feminine articles do not change in the accusative: eine Schwester.',
          explanationHinglish: '"Schwester" feminine hai. Accusative mein feminine articles nahi badalte: eine Schwester.',
          difficulty: 2,
          xpReward: 10,
          tags: ['accusative', 'articles'],
        },
        {
          id: 'ex-a1-07-03-04',
          type: 'multiple-choice',
          question: 'Complete: "Ich trinke ___ Wasser."',
          questionHinglish: 'Complete karo: "Ich trinke ___ Wasser."',
          options: ['der', 'den', 'das', 'dem'],
          correctAnswer: 'das',
          explanation: '"Wasser" is neuter. Neuter articles do not change in the accusative: das Wasser.',
          explanationHinglish: '"Wasser" neuter hai. Accusative mein neuter articles nahi badalte: das Wasser.',
          difficulty: 2,
          xpReward: 10,
          tags: ['accusative', 'articles'],
        },
        {
          id: 'ex-a1-07-03-05',
          type: 'multiple-choice',
          question: 'Complete: "Ich sehe ___ Frau."',
          questionHinglish: 'Complete karo: "Ich sehe ___ Frau."',
          options: ['der', 'den', 'die', 'das'],
          correctAnswer: 'die',
          explanation: '"Frau" is feminine. Feminine articles stay "die" in the accusative: Ich sehe die Frau.',
          explanationHinglish: '"Frau" feminine hai. Accusative mein feminine article "die" hi rehta hai: Ich sehe die Frau.',
          difficulty: 1,
          xpReward: 8,
          tags: ['accusative', 'articles'],
        },
        {
          id: 'ex-a1-07-03-06',
          type: 'typing',
          question: 'Translate: "I see the man."',
          questionHinglish: 'Translate karo: "I see the man."',
          correctAnswer: 'Ich sehe den Mann.',
          explanation: 'The masculine direct object takes "den": Ich sehe den Mann.',
          explanationHinglish: 'Masculine direct object "den" leta hai: Ich sehe den Mann.',
          difficulty: 2,
          xpReward: 12,
          tags: ['accusative', 'typing'],
        },
      ],
    },
  ],
};
