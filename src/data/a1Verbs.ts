// ============================================================
// A1 MODULE 5 – ESSENTIAL VERBS & PRESENT TENSE
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_VERBS: Module = {
  id: 'm-a1-05',
  level: 'A1',
  title: 'Essential Verbs & Present Tense',
  titleHinglish: 'Zaruri Verbs aur Present Tense',
  description: 'Conjugate regular verbs, use haben and possessives, and build sentences with modal verbs.',
  descriptionHinglish: 'Regular verbs conjugate karna, haben aur possessives use karna, aur modal verbs se sentence banana seekho.',
  skills: ['grammar', 'speaking', 'writing'],
  order: 5,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-05-01',
      level: 'A1',
      moduleId: 'm-a1-05',
      title: 'Regular Verbs in the Present Tense',
      titleHinglish: 'Present Tense mein Regular Verbs',
      objective: 'Conjugate regular verbs and put the verb in the correct position',
      objectiveHinglish: 'Regular verbs ko conjugate karo aur verb ko sahi position par rakho',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-04-01'],
      order: 1,
      grammarPoints: ['regular verb conjugation', 'verb second position', 'stem endings'],
      vocabulary: [],
      content: {
        warmUp: [
          'Which German verbs do you already know? (sein, haben, kommen, wohnen...)',
          'In English we say "I learn" and "I am learning". Does German need two forms?',
        ],
        explanation: `Regular German verbs follow a **predictable pattern**. Start with the infinitive (the dictionary form), remove the ending **-en**, then add the ending for the person.

**Example: wohnen (to live)**
| Person | Form | Meaning |
|--------|------|---------|
| ich | wohn**e** | I live |
| du | wohn**st** | you live (informal) |
| er/sie/es | wohn**t** | he/she/it lives |
| wir | wohn**en** | we live |
| ihr | wohn**t** | you all live |
| sie/Sie | wohn**en** | they live / you live (formal) |

**Spelling changes to watch:**
- If the stem ends in **-t** or **-d**, add an extra **-e-**: arbeiten → du arbeitest, er arbeitet.
- If the stem ends in **-s**, **-ß**, or **-z**, the du-form only adds **-t**: heißen → du heißt (not "heißst").

**Word order rule:** In a normal statement, the verb is the **second element**:
- Ich **lerne** Deutsch.
- Heute **lerne** ich Deutsch. (When "Heute" starts, the verb stays second and the subject moves after it.)

**Common mistakes:**
- ❌ Ich Deutsch lerne. → ✅ Ich lerne Deutsch.
- ❌ Du wohnen in Berlin. → ✅ Du wohnst in Berlin.`,
        explanationHinglish: `Regular German verbs ek **predictable pattern** follow karte hain. Infinitive (dictionary form) se ending **-en** hatao, phir person ke hisaab se ending lagao.

**Example: wohnen (rehna)**
| Person | Form | Matlab |
|--------|------|--------|
| ich | wohn**e** | main rehta hoon |
| du | wohn**st** | tu rehta hai |
| er/sie/es | wohn**t** | woh rehta hai |
| wir | wohn**en** | hum rehte hain |
| ihr | wohn**t** | tum sab rehte ho |
| sie/Sie | wohn**en** | woh rehte hain / aap rehte hain |

**Spelling changes:**
- Stem **-t** ya **-d** par khatam ho to extra **-e-** lagao: arbeiten → du arbeitest, er arbeitet.
- Stem **-s**, **-ß** ya **-z** par khatam ho to du-form mein sirf **-t**: heißen → du heißt.

**Word order:** Normal statement mein verb **doosre position** par hota hai:
- Ich **lerne** Deutsch.
- Heute **lerne** ich Deutsch. (Jab "Heute" pehle aata hai, verb phir bhi doosre par rehta hai.)

**Common mistakes:**
- ❌ Ich Deutsch lerne. → ✅ Ich lerne Deutsch.
- ❌ Du wohnen in Berlin. → ✅ Du wohnst in Berlin.`,
        examples: [
          {
            german: 'Ich wohne in Berlin.',
            english: 'I live in Berlin.',
            hinglish: 'Main Berlin mein rehta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject pronoun', meaning: 'I' },
              { word: 'wohne', role: 'verb (wohnen, 1st person)', meaning: 'live' },
              { word: 'in', role: 'preposition', meaning: 'in' },
              { word: 'Berlin', role: 'place name', meaning: 'Berlin' },
            ],
            audioText: 'Ich wohne in Berlin.',
          },
          {
            german: 'Du lernst Deutsch.',
            english: 'You are learning German.',
            hinglish: 'Tum German seekh rahe ho.',
            breakdown: [
              { word: 'Du', role: 'subject pronoun (informal)', meaning: 'you' },
              { word: 'lernst', role: 'verb (lernen, 2nd person)', meaning: 'learn' },
              { word: 'Deutsch', role: 'noun', meaning: 'German' },
            ],
            audioText: 'Du lernst Deutsch.',
          },
          {
            german: 'Er arbeitet jeden Tag.',
            english: 'He works every day.',
            hinglish: 'Woh har din kaam karta hai.',
            audioText: 'Er arbeitet jeden Tag.',
          },
          {
            german: 'Heute spielen wir Fußball.',
            english: 'Today we are playing football.',
            hinglish: 'Aaj hum football khel rahe hain.',
            audioText: 'Heute spielen wir Fußball.',
          },
        ],
        realLifeContext: 'German has no separate present continuous. "Ich lerne Deutsch" can mean both "I learn German" and "I am learning German". Use the present tense for habits, facts, and actions happening now.',
        pronunciationGuide: [
          { word: 'wohne', phonetic: '"VOH-ne"', syllables: 'woh-ne', tips: 'German "w" = English "v". The final "-e" is a short, soft "uh".' },
          { word: 'arbeitet', phonetic: '"AR-by-tet"', syllables: 'ar-bei-tet', tips: 'Say all three syllables clearly. The extra "e" before "t" helps pronunciation.' },
        ],
        summary: [
          'Remove -en from the infinitive to get the stem',
          'Endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en',
          'Stems ending in -t/-d add -e- (du arbeitest, er arbeitet)',
          'The verb is the second element in a statement',
          'There is no separate present continuous in German',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-05-01-01',
          type: 'multiple-choice',
          question: 'Choose the correct form: "Ich ___ in Berlin." (wohnen)',
          questionHinglish: 'Sahi form chuno: "Ich ___ in Berlin." (wohnen)',
          options: ['wohne', 'wohnst', 'wohnt', 'wohnen'],
          correctAnswer: 'wohne',
          explanation: 'For "ich", remove -en and add -e: wohnen → ich wohne.',
          explanationHinglish: '"ich" ke liye -en hatao aur -e lagao: wohnen → ich wohne.',
          difficulty: 1,
          xpReward: 8,
          tags: ['verbs', 'present-tense', 'conjugation'],
        },
        {
          id: 'ex-a1-05-01-02',
          type: 'fill-blank',
          question: 'Complete: "Du ___ Deutsch." (lernen)',
          questionHinglish: 'Complete karo: "Du ___ Deutsch." (lernen)',
          options: ['lerne', 'lernst', 'lernt', 'lernen'],
          correctAnswer: 'lernst',
          explanation: 'For "du", add -st: lernen → du lernst.',
          explanationHinglish: '"du" ke liye -st lagao: lernen → du lernst.',
          difficulty: 1,
          xpReward: 8,
          tags: ['verbs', 'present-tense', 'conjugation'],
        },
        {
          id: 'ex-a1-05-01-03',
          type: 'multiple-choice',
          question: 'Choose the correct form: "Er ___ in einem Büro." (arbeiten)',
          questionHinglish: 'Sahi form chuno: "Er ___ in einem Büro." (arbeiten)',
          options: ['arbeite', 'arbeitst', 'arbeitet', 'arbeiten'],
          correctAnswer: 'arbeitet',
          explanation: 'The stem "arbeit-" ends in -t, so an extra -e- is added: er arbeitet.',
          explanationHinglish: 'Stem "arbeit-" -t par khatam hota hai, isliye extra -e- lagta hai: er arbeitet.',
          difficulty: 2,
          xpReward: 10,
          tags: ['verbs', 'present-tense', 'spelling'],
        },
        {
          id: 'ex-a1-05-01-04',
          type: 'multiple-choice',
          question: 'Which sentence has the correct German word order?',
          questionHinglish: 'Kaun se sentence mein German word order sahi hai?',
          options: [
            'Ich lerne jeden Tag Deutsch.',
            'Ich jeden Tag lerne Deutsch.',
            'Jeden Tag ich lerne Deutsch.',
            'Lerne ich jeden Tag Deutsch.',
          ],
          correctAnswer: 'Ich lerne jeden Tag Deutsch.',
          explanation: 'In a statement the verb must be the second element: Ich lerne jeden Tag Deutsch.',
          explanationHinglish: 'Statement mein verb doosre position par hota hai: Ich lerne jeden Tag Deutsch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'verbs'],
        },
        {
          id: 'ex-a1-05-01-05',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Deutsch / lerne / Ich / ."',
          questionHinglish: 'Shabdon ko sahi sentence mein arrange karo: "Deutsch / lerne / Ich / ."',
          options: ['Deutsch', 'lerne', 'Ich', '.'],
          correctAnswer: 'Ich lerne Deutsch .',
          explanation: 'Subject first, verb second: Ich lerne Deutsch.',
          explanationHinglish: 'Subject pehle, verb doosre: Ich lerne Deutsch.',
          difficulty: 1,
          xpReward: 10,
          tags: ['word-order', 'sentence-building'],
        },
        {
          id: 'ex-a1-05-01-06',
          type: 'typing',
          question: 'Type the correct form of "spielen" for "wir": "Wir ___ Fußball."',
          questionHinglish: '"wir" ke liye "spielen" ka sahi form type karo: "Wir ___ Fußball."',
          correctAnswer: 'spielen',
          explanation: 'For "wir", the verb keeps the infinitive ending -en: wir spielen.',
          explanationHinglish: '"wir" ke liye verb -en ending ke saath rehta hai: wir spielen.',
          difficulty: 1,
          xpReward: 8,
          tags: ['verbs', 'present-tense', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-05-02',
      level: 'A1',
      moduleId: 'm-a1-05',
      title: 'haben & Possessive Articles',
      titleHinglish: 'haben aur Possessive Articles',
      objective: 'Use haben correctly and say what belongs to whom',
      objectiveHinglish: 'haben sahi tarah use karo aur batao ki kya kiska hai',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-05-01'],
      order: 2,
      grammarPoints: ['haben conjugation', 'possessive articles', 'age with sein'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "I have" in German?',
          'Do you remember how to say your age in German?',
        ],
        explanation: `**haben (to have)** is one of the most important German verbs. Learn its forms by heart:

| Person | Form |
|--------|------|
| ich | **habe** |
| du | **hast** |
| er/sie/es | **hat** |
| wir | **haben** |
| ihr | **habt** |
| sie/Sie | **haben** |

**Possessive articles** change their ending to match the noun:
| Owner | Masculine/Neuter | Feminine/Plural |
|-------|------------------|-----------------|
| my | mein | meine |
| your (informal) | dein | deine |
| his | sein | seine |
| her | ihr | ihre |
| our | unser | unsere |
| your (plural) | euer | eure |
| their / your (formal) | ihr / Ihr | ihre / Ihre |

Examples:
- Das ist **mein Vater**. (masculine)
- Das ist **meine Mutter**. (feminine)
- Das ist **mein Kind**. (neuter)
- Das sind **meine Eltern**. (plural)

**Important:** Age uses **sein**, not haben:
- ✅ Ich **bin** 25 Jahre alt.
- ❌ Ich habe 25 Jahre.

**Common mistakes:**
- ❌ Ich habe 25 Jahre. → ✅ Ich bin 25 Jahre alt.
- ❌ Das ist meine Vater. → ✅ Das ist mein Vater.`,
        explanationHinglish: `**haben (paas hona)** sabse zaruri German verbs mein se ek hai. Iske forms yaad karo:

| Person | Form |
|--------|------|
| ich | **habe** |
| du | **hast** |
| er/sie/es | **hat** |
| wir | **haben** |
| ihr | **habt** |
| sie/Sie | **haben** |

**Possessive articles** noun ke gender ke hisaab se badalte hain:
| Owner | Masculine/Neuter | Feminine/Plural |
|-------|------------------|-----------------|
| my | mein | meine |
| your (informal) | dein | deine |
| his | sein | seine |
| her | ihr | ihre |
| our | unser | unsere |
| your (plural) | euer | eure |
| their / your (formal) | ihr / Ihr | ihre / Ihre |

Examples:
- Das ist **mein Vater**. (masculine)
- Das ist **meine Mutter**. (feminine)
- Das ist **mein Kind**. (neuter)
- Das sind **meine Eltern**. (plural)

**Zaruri:** Umar ke liye **sein** use hota hai, haben nahi:
- ✅ Ich **bin** 25 Jahre alt.
- ❌ Ich habe 25 Jahre.

**Common mistakes:**
- ❌ Ich habe 25 Jahre. → ✅ Ich bin 25 Jahre alt.
- ❌ Das ist meine Vater. → ✅ Das ist mein Vater.`,
        examples: [
          {
            german: 'Ich habe einen Bruder und eine Schwester.',
            english: 'I have a brother and a sister.',
            hinglish: 'Mera ek bhai aur ek behen hai.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'verb (haben, 1st person)', meaning: 'have' },
              { word: 'einen', role: 'accusative article (masculine)', meaning: 'a' },
              { word: 'Bruder', role: 'noun (masculine)', meaning: 'brother' },
              { word: 'eine', role: 'accusative article (feminine)', meaning: 'a' },
              { word: 'Schwester', role: 'noun (feminine)', meaning: 'sister' },
            ],
            audioText: 'Ich habe einen Bruder und eine Schwester.',
          },
          {
            german: 'Das ist mein Vater. Das ist meine Mutter.',
            english: 'This is my father. This is my mother.',
            hinglish: 'Yeh mere pitaji hain. Yeh meri maa hain.',
            audioText: 'Das ist mein Vater. Das ist meine Mutter.',
          },
          {
            german: 'Meine Eltern wohnen in Indien.',
            english: 'My parents live in India.',
            hinglish: 'Mere maa-baap India mein rehte hain.',
            audioText: 'Meine Eltern wohnen in Indien.',
          },
        ],
        realLifeContext: 'You will use haben and possessives constantly: talking about family, your room, your documents, your plans, and your belongings. At the doctor or in an office, you may be asked "Haben Sie ...?" (Do you have ...?).',
        culturalNote: 'In German, "mein" does not change for the owner\'s gender — it changes for the noun being owned. "Sein Vater" means "his father"; "ihr Vater" means "her father" or "their father" depending on context.',
        summary: [
          'haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben',
          'Possessives: mein/meine, dein/deine, sein/seine, ihr/ihre',
          'The ending depends on the noun, not the owner',
          'Age uses sein: Ich bin 25 Jahre alt',
          'mein Vater, meine Mutter, mein Kind, meine Eltern',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-05-02-01',
          type: 'fill-blank',
          question: 'Complete: "Ich ___ einen Bruder." (haben)',
          questionHinglish: 'Complete karo: "Ich ___ einen Bruder." (haben)',
          options: ['habe', 'hast', 'hat', 'haben'],
          correctAnswer: 'habe',
          explanation: 'The ich-form of haben is "habe": Ich habe einen Bruder.',
          explanationHinglish: 'haben ka ich-form "habe" hai: Ich habe einen Bruder.',
          difficulty: 1,
          xpReward: 8,
          tags: ['haben', 'conjugation'],
        },
        {
          id: 'ex-a1-05-02-02',
          type: 'multiple-choice',
          question: 'Choose the correct form: "Du ___ eine Schwester." (haben)',
          questionHinglish: 'Sahi form chuno: "Du ___ eine Schwester." (haben)',
          options: ['habe', 'hast', 'hat', 'haben'],
          correctAnswer: 'hast',
          explanation: 'The du-form of haben is "hast": Du hast eine Schwester.',
          explanationHinglish: 'haben ka du-form "hast" hai: Du hast eine Schwester.',
          difficulty: 1,
          xpReward: 8,
          tags: ['haben', 'conjugation'],
        },
        {
          id: 'ex-a1-05-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Mutter." (my)',
          questionHinglish: 'Complete karo: "Das ist ___ Mutter." (my)',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          correctAnswer: 'meine',
          explanation: '"Mutter" is feminine, so "my" becomes "meine": meine Mutter.',
          explanationHinglish: '"Mutter" feminine hai, isliye "my" = "meine": meine Mutter.',
          difficulty: 1,
          xpReward: 8,
          tags: ['possessives', 'gender'],
        },
        {
          id: 'ex-a1-05-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Vater." (my)',
          questionHinglish: 'Complete karo: "Das ist ___ Vater." (my)',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          correctAnswer: 'mein',
          explanation: '"Vater" is masculine, so "my" is "mein": mein Vater.',
          explanationHinglish: '"Vater" masculine hai, isliye "my" = "mein": mein Vater.',
          difficulty: 1,
          xpReward: 8,
          tags: ['possessives', 'gender'],
        },
        {
          id: 'ex-a1-05-02-05',
          type: 'typing',
          question: 'Translate: "I have a dog." (der Hund)',
          questionHinglish: 'Translate karo: "I have a dog." (der Hund)',
          correctAnswer: 'Ich habe einen Hund.',
          explanation: 'Use "habe" for ich. "Hund" is masculine, so "a" becomes "einen" in the accusative: Ich habe einen Hund.',
          explanationHinglish: 'ich ke liye "habe" use karo. "Hund" masculine hai, isliye accusative mein "a" = "einen": Ich habe einen Hund.',
          difficulty: 2,
          xpReward: 12,
          tags: ['haben', 'accusative', 'typing'],
        },
        {
          id: 'ex-a1-05-02-06',
          type: 'multiple-choice',
          question: 'Which sentence correctly says "I am 20 years old"?',
          questionHinglish: '"Main 20 saal ka hoon" ke liye kaun sa sentence sahi hai?',
          options: ['Ich habe 20 Jahre.', 'Ich bin 20 Jahre alt.', 'Ich habe 20 Jahre alt.', 'Ich bin 20 Jahren.'],
          correctAnswer: 'Ich bin 20 Jahre alt.',
          explanation: 'German uses sein (to be) for age: Ich bin 20 Jahre alt. Do not use haben.',
          explanationHinglish: 'German mein umar ke liye sein (hona) use hota hai: Ich bin 20 Jahre alt. haben mat use karo.',
          difficulty: 2,
          xpReward: 10,
          tags: ['age', 'sein', 'common-mistakes'],
        },
      ],
    },
    {
      id: 'l-a1-05-03',
      level: 'A1',
      moduleId: 'm-a1-05',
      title: 'Modal Verbs: können, müssen & möchten',
      titleHinglish: 'Modal Verbs: können, müssen aur möchten',
      objective: 'Express ability, obligation, and polite wishes with modal verbs',
      objectiveHinglish: 'Ability, obligation aur polite wishes modal verbs se express karo',
      estimatedMinutes: 22,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-05-02'],
      order: 3,
      grammarPoints: ['modal verbs', 'infinitive at the end', 'polite requests'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "I can" or "I must" in English?',
          'What is the polite way to ask for something in a café?',
        ],
        explanation: `Modal verbs are helping verbs. They express **ability**, **obligation**, **permission**, or **wishes**.

**Key modal verbs at A1:**
| Verb | Meaning | ich | du | er/sie/es | wir | ihr | sie/Sie |
|------|---------|-----|-----|-----------|-----|-----|---------|
| können | can / to be able to | kann | kannst | kann | können | könnt | können |
| müssen | must / to have to | muss | musst | muss | müssen | müsst | müssen |
| möchten | would like | möchte | möchtest | möchte | möchten | möchtet | möchten |
| wollen | to want | will | willst | will | wollen | wollt | wollen |

**Sentence structure:** The modal verb goes in **position 2**. The main verb goes to the **end** as an infinitive.
- Ich **kann** gut Deutsch **sprechen**.
- Wir **müssen** heute **arbeiten**.
- Ich **möchte** einen Kaffee **trinken**.

You can also use a modal verb alone when the meaning is clear:
- Ich **muss** gehen. (I have to go.)
- Ich **möchte** einen Kaffee, bitte. (I would like a coffee, please.)

**Common mistakes:**
- ❌ Ich kann sprechen Deutsch. → ✅ Ich kann Deutsch sprechen.
- ❌ Ich will einen Kaffee, bitte. (too direct) → ✅ Ich möchte einen Kaffee, bitte. (polite)
- ❌ Du muss arbeiten. → ✅ Du musst arbeiten.`,
        explanationHinglish: `Modal verbs helping verbs hote hain. Yeh **ability**, **obligation**, **permission** ya **wishes** express karte hain.

**A1 ke key modal verbs:**
| Verb | Matlab | ich | du | er/sie/es | wir | ihr | sie/Sie |
|------|--------|-----|-----|-----------|-----|-----|---------|
| können | kar sakna | kann | kannst | kann | können | könnt | können |
| müssen | karna padna | muss | musst | muss | müssen | müsst | müssen |
| möchten | chahna (polite) | möchte | möchtest | möchte | möchten | möchtet | möchten |
| wollen | chahna (strong) | will | willst | will | wollen | wollt | wollen |

**Sentence structure:** Modal verb **position 2** par. Main verb **end** par infinitive ban ke.
- Ich **kann** gut Deutsch **sprechen**.
- Wir **müssen** heute **arbeiten**.
- Ich **möchte** einen Kaffee **trinken**.

Jab meaning clear ho to modal akela bhi use hota hai:
- Ich **muss** gehen. (Mujhe jaana hai.)
- Ich **möchte** einen Kaffee, bitte. (Mujhe ek coffee chahiye, kripaya.)

**Common mistakes:**
- ❌ Ich kann sprechen Deutsch. → ✅ Ich kann Deutsch sprechen.
- ❌ Ich will einen Kaffee, bitte. (bahut direct) → ✅ Ich möchte einen Kaffee, bitte. (polite)
- ❌ Du muss arbeiten. → ✅ Du musst arbeiten.`,
        examples: [
          {
            german: 'Ich kann gut Deutsch sprechen.',
            english: 'I can speak German well.',
            hinglish: 'Main achhi German bol sakta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'kann', role: 'modal verb (können)', meaning: 'can' },
              { word: 'gut', role: 'adverb', meaning: 'well' },
              { word: 'Deutsch', role: 'noun', meaning: 'German' },
              { word: 'sprechen', role: 'infinitive at the end', meaning: 'speak' },
            ],
            audioText: 'Ich kann gut Deutsch sprechen.',
          },
          {
            german: 'Wir müssen heute arbeiten.',
            english: 'We have to work today.',
            hinglish: 'Humein aaj kaam karna hai.',
            audioText: 'Wir müssen heute arbeiten.',
          },
          {
            german: 'Ich möchte einen Kaffee, bitte.',
            english: 'I would like a coffee, please.',
            hinglish: 'Mujhe ek coffee chahiye, kripaya.',
            audioText: 'Ich möchte einen Kaffee, bitte.',
          },
          {
            german: 'Du musst jetzt gehen.',
            english: 'You have to go now.',
            hinglish: 'Tumhe abhi jaana hai.',
            audioText: 'Du musst jetzt gehen.',
          },
        ],
        realLifeContext: 'Modal verbs are everywhere in daily German: ordering food, asking permission, talking about rules, making appointments, and explaining what you can or cannot do. "Ich möchte..." is one of the most useful polite phrases you can learn.',
        culturalNote: 'Germans often use "möchten" instead of "wollen" when making requests. "Ich will" can sound childish or rude in shops and restaurants. Use "Ich möchte" or "Ich hätte gern" for politeness.',
        summary: [
          'Modal verbs go in position 2; the main verb goes to the end',
          'können = can, müssen = must, möchten = would like, wollen = want',
          'ich kann/muss/möchte/will; du kannst/musst/möchtest/willst',
          'Use möchten for polite requests',
          'Ich muss gehen = I have to go',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-05-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ gut schwimmen." (können)',
          questionHinglish: 'Complete karo: "Ich ___ gut schwimmen." (können)',
          options: ['kann', 'kannst', 'können', 'könnt'],
          correctAnswer: 'kann',
          explanation: 'The ich-form of können is "kann": Ich kann gut schwimmen.',
          explanationHinglish: 'können ka ich-form "kann" hai: Ich kann gut schwimmen.',
          difficulty: 1,
          xpReward: 8,
          tags: ['modal-verbs', 'können'],
        },
        {
          id: 'ex-a1-05-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Du ___ heute arbeiten." (müssen)',
          questionHinglish: 'Complete karo: "Du ___ heute arbeiten." (müssen)',
          options: ['muss', 'musst', 'müssen', 'müsst'],
          correctAnswer: 'musst',
          explanation: 'The du-form of müssen is "musst": Du musst heute arbeiten.',
          explanationHinglish: 'müssen ka du-form "musst" hai: Du musst heute arbeiten.',
          difficulty: 1,
          xpReward: 8,
          tags: ['modal-verbs', 'müssen'],
        },
        {
          id: 'ex-a1-05-03-03',
          type: 'multiple-choice',
          question: 'Which sentence is correct?',
          questionHinglish: 'Kaun sa sentence sahi hai?',
          options: [
            'Ich kann Deutsch sprechen.',
            'Ich kann sprechen Deutsch.',
            'Ich Deutsch kann sprechen.',
            'Ich sprechen kann Deutsch.',
          ],
          correctAnswer: 'Ich kann Deutsch sprechen.',
          explanation: 'The modal verb is in position 2 and the infinitive goes to the end: Ich kann Deutsch sprechen.',
          explanationHinglish: 'Modal verb position 2 par aur infinitive end par: Ich kann Deutsch sprechen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['word-order', 'modal-verbs'],
        },
        {
          id: 'ex-a1-05-03-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / kann / Deutsch / sprechen / ."',
          questionHinglish: 'Shabdon ko sahi sentence mein arrange karo: "Ich / kann / Deutsch / sprechen / ."',
          options: ['Ich', 'kann', 'Deutsch', 'sprechen', '.'],
          correctAnswer: 'Ich kann Deutsch sprechen .',
          explanation: 'Subject + modal verb + object + infinitive: Ich kann Deutsch sprechen.',
          explanationHinglish: 'Subject + modal verb + object + infinitive: Ich kann Deutsch sprechen.',
          difficulty: 2,
          xpReward: 12,
          tags: ['word-order', 'sentence-building', 'modal-verbs'],
        },
        {
          id: 'ex-a1-05-03-05',
          type: 'multiple-choice',
          question: 'What does "Ich muss gehen" mean?',
          questionHinglish: '"Ich muss gehen" ka matlab kya hai?',
          options: ['I can go.', 'I have to go.', 'I would like to go.', 'I want to go.'],
          correctAnswer: 'I have to go.',
          explanation: '"müssen" means "must / to have to". "Ich muss gehen" = I have to go.',
          explanationHinglish: '"müssen" ka matlab "karna padna" hai. "Ich muss gehen" = Mujhe jaana hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['modal-verbs', 'müssen', 'meaning'],
        },
        {
          id: 'ex-a1-05-03-06',
          type: 'multiple-choice',
          question: 'Which is the most polite way to order a coffee?',
          questionHinglish: 'Coffee order karne ka sabse polite tarika kaun sa hai?',
          options: ['Ich will einen Kaffee.', 'Ich möchte einen Kaffee, bitte.', 'Kaffee!', 'Du gibst mir Kaffee.'],
          correctAnswer: 'Ich möchte einen Kaffee, bitte.',
          explanation: '"Ich möchte ... , bitte" is the standard polite way to order. "Ich will" sounds too direct.',
          explanationHinglish: '"Ich möchte ... , bitte" order karne ka standard polite tarika hai. "Ich will" bahut direct lagta hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['politeness', 'modal-verbs', 'möchten'],
        },
      ],
    },
  ],
};
