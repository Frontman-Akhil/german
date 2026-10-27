// ============================================================
// A1 MODULE 10 – FAMILY, DAILY ROUTINE & IMPERATIVES
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_FAMILY: Module = {
  id: 'm-a1-10',
  level: 'A1',
  title: 'Family, Daily Routine & Imperatives',
  titleHinglish: 'Parivaar, Rozana Routine aur Imperatives',
  description: 'Talk about family, describe your day, and give simple everyday instructions.',
  descriptionHinglish: 'Parivaar ke baare mein bolo, apna din describe karo aur simple instructions do.',
  skills: ['speaking', 'listening', 'grammar'],
  order: 10,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-10-01',
      level: 'A1',
      moduleId: 'm-a1-10',
      title: 'Family & Possessive Articles',
      titleHinglish: 'Parivaar aur Possessive Articles',
      objective: 'Introduce family members and use mein/dein/sein/ihr correctly',
      objectiveHinglish: 'Family members introduce karo aur mein/dein/sein/ihr sahi use karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a1-09-03'],
      order: 1,
      grammarPoints: ['family vocabulary', 'possessive articles', 'nominative'],
      vocabulary: [],
      content: {
        warmUp: [
          'How many people are in your family?',
          'How do you say "my mother" and "my father" in German?',
        ],
        explanation: `Use **possessive articles** to say who something belongs to.

**Family words:**
- die Familie = family
- die Eltern = parents
- die Mutter = mother, der Vater = father
- die Schwester = sister, der Bruder = brother
- die Großmutter = grandmother, der Großvater = grandfather
- die Tochter = daughter, der Sohn = son
- das Kind = child

**Possessive articles (nominative):**
| Person | Masculine | Feminine | Neuter |
|--------|-----------|----------|--------|
| ich | mein | meine | mein |
| du | dein | deine | dein |
| er | sein | seine | sein |
| sie | ihr | ihre | ihr |
| wir | unser | unsere | unser |
| ihr | euer | eure | euer |
| sie/Sie | ihr/Ihr | ihre/Ihre | ihr/Ihr |

**Examples:**
- Das ist **mein** Bruder.
- **Meine** Mutter heißt Anna.
- Wie heißt **deine** Schwester?
- **Sein** Vater arbeitet in Berlin.

The possessive ending matches the **noun**, not the owner:
- mein Vater (der Vater)
- meine Mutter (die Mutter)
- mein Kind (das Kind)

**Common mistakes:**
- ❌ mein Mutter → ✅ meine Mutter
- ❌ dein Schwester → ✅ deine Schwester
- ❌ Das ist mein Bruder? (statement with question mark) → ✅ Ist das dein Bruder?`,
        explanationHinglish: `**Possessive articles** batate hain cheez kiska hai.

**Family words:**
- die Familie = parivaar
- die Eltern = maa-baap
- die Mutter = maa, der Vater = pitaji
- die Schwester = behen, der Bruder = bhai
- die Großmutter = dadi/nani, der Großvater = dada/nana
- die Tochter = beti, der Sohn = beta
- das Kind = baccha

**Possessive articles (nominative):**
| Person | Masculine | Feminine | Neuter |
|--------|-----------|----------|--------|
| ich | mein | meine | mein |
| du | dein | deine | dein |
| er | sein | seine | sein |
| sie | ihr | ihre | ihr |
| wir | unser | unsere | unser |
| ihr | euer | eure | euer |
| sie/Sie | ihr/Ihr | ihre/Ihre | ihr/Ihr |

**Examples:**
- Das ist **mein** Bruder.
- **Meine** Mutter heißt Anna.
- Wie heißt **deine** Schwester?
- **Sein** Vater arbeitet in Berlin.

Possessive ending **noun** ke hisaab se hota hai, owner ke hisaab se nahi:
- mein Vater (der Vater)
- meine Mutter (die Mutter)
- mein Kind (das Kind)

**Common mistakes:**
- ❌ mein Mutter → ✅ meine Mutter
- ❌ dein Schwester → ✅ deine Schwester
- ❌ Das ist mein Bruder? → ✅ Ist das dein Bruder?`,
        examples: [
          {
            german: 'Das ist mein Bruder.',
            english: 'This is my brother.',
            hinglish: 'Yeh mera bhai hai.',
            breakdown: [
              { word: 'Das', role: 'subject', meaning: 'this' },
              { word: 'ist', role: 'verb', meaning: 'is' },
              { word: 'mein', role: 'possessive (masculine)', meaning: 'my' },
              { word: 'Bruder', role: 'noun (masculine)', meaning: 'brother' },
            ],
            audioText: 'Das ist mein Bruder.',
          },
          {
            german: 'Meine Mutter heißt Anna.',
            english: 'My mother is called Anna.',
            hinglish: 'Meri maa ka naam Anna hai.',
            audioText: 'Meine Mutter heißt Anna.',
          },
          {
            german: 'Wie heißt deine Schwester?',
            english: 'What is your sister called?',
            hinglish: 'Tumhari behen ka naam kya hai?',
            audioText: 'Wie heißt deine Schwester?',
          },
        ],
        realLifeContext: 'Talking about family is one of the first real conversations you will have in German. You will use possessives constantly when describing people, belongings, and relationships.',
        culturalNote: 'In German, "Geschwister" means siblings. "Eltern" is plural and has no singular form; use "Elternteil" for one parent in formal contexts.',
        summary: [
          'Family: die Mutter, der Vater, die Schwester, der Bruder',
          'Possessive endings match the noun: mein Vater, meine Mutter, mein Kind',
          'dein/deine = your (informal); Ihr/Ihre = your (formal)',
          'sein/seine = his; ihr/ihre = her',
          'Use "Das ist ..." to introduce people',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-10-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Das ist ___ Bruder."',
          questionHinglish: 'Complete karo: "Das ist ___ Bruder."',
          options: ['mein', 'meine', 'meinen', 'meiner'],
          correctAnswer: 'mein',
          explanation: '"Bruder" is masculine, so the nominative possessive is "mein": mein Bruder.',
          explanationHinglish: '"Bruder" masculine hai, isliye nominative possessive "mein": mein Bruder.',
          difficulty: 1,
          xpReward: 8,
          tags: ['family', 'possessives'],
        },
        {
          id: 'ex-a1-10-01-02',
          type: 'multiple-choice',
          question: 'Complete: "___ Mutter heißt Anna."',
          questionHinglish: 'Complete karo: "___ Mutter heißt Anna."',
          options: ['Meine', 'Mein', 'Meinen', 'Meiner'],
          correctAnswer: 'Meine',
          explanation: '"Mutter" is feminine, so the possessive is "meine": Meine Mutter.',
          explanationHinglish: '"Mutter" feminine hai, isliye possessive "meine": Meine Mutter.',
          difficulty: 1,
          xpReward: 8,
          tags: ['family', 'possessives'],
        },
        {
          id: 'ex-a1-10-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Wie heißt ___ Schwester?" (your, informal)',
          questionHinglish: 'Complete karo: "Wie heißt ___ Schwester?" (tumhari, informal)',
          options: ['deine', 'dein', 'deinen', 'deiner'],
          correctAnswer: 'deine',
          explanation: '"Schwester" is feminine, so the informal possessive is "deine": deine Schwester.',
          explanationHinglish: '"Schwester" feminine hai, isliye informal possessive "deine": deine Schwester.',
          difficulty: 1,
          xpReward: 8,
          tags: ['family', 'possessives'],
        },
        {
          id: 'ex-a1-10-01-04',
          type: 'multiple-choice',
          question: 'What does "die Eltern" mean?',
          questionHinglish: '"die Eltern" ka matlab kya hai?',
          options: ['parents', 'children', 'grandparents', 'siblings'],
          correctAnswer: 'parents',
          explanation: '"die Eltern" means parents. It is always plural.',
          explanationHinglish: '"die Eltern" ka matlab parents. Yeh hamesha plural hota hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['family', 'vocabulary'],
        },
        {
          id: 'ex-a1-10-01-05',
          type: 'typing',
          question: 'Translate: "This is my sister."',
          questionHinglish: 'Translate karo: "This is my sister."',
          correctAnswer: 'Das ist meine Schwester.',
          explanation: '"Schwester" is feminine, so use "meine": Das ist meine Schwester.',
          explanationHinglish: '"Schwester" feminine hai, isliye "meine": Das ist meine Schwester.',
          difficulty: 2,
          xpReward: 10,
          tags: ['family', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-10-02',
      level: 'A1',
      moduleId: 'm-a1-10',
      title: 'Daily Routine & Separable Verbs',
      titleHinglish: 'Rozana Routine aur Separable Verbs',
      objective: 'Describe your daily routine using time expressions and separable verbs',
      objectiveHinglish: 'Time expressions aur separable verbs use karke apna daily routine describe karo',
      estimatedMinutes: 22,
      skillFocus: ['speaking', 'grammar'],
      prerequisites: ['l-a1-10-01'],
      order: 2,
      grammarPoints: ['separable verbs', 'reflexive verbs', 'time expressions'],
      vocabulary: [],
      content: {
        warmUp: [
          'What do you do first after you wake up?',
          'What time do you get up on a normal day?',
        ],
        explanation: `**Separable verbs** have a prefix that moves to the end of the sentence.

- **aufstehen** → Ich **stehe** um sieben Uhr **auf**.
- **anziehen** → Ich **ziehe** mich **an**.
- **einkaufen** → Wir **kaufen** am Samstag **ein**.
- **fernsehen** → Am Abend **sehe** ich **fern**.
- **aufräumen** → Ich **räume** mein Zimmer **auf**.

**Reflexive verbs:** the reflexive pronoun comes after the verb.
- Ich **dusche mich**.
- Ich **wasche mich**.
- Ich **ziehe mich an**.

**A simple daily routine:**
- Ich **stehe** um sieben Uhr **auf**.
- Ich **dusche mich**.
- Dann **frühstücke** ich.
- Ich **gehe** zur Arbeit.
- Am Abend **sehe** ich **fern**.
- Ich **gehe** um elf Uhr **schlafen**.

**Time expressions:**
- um sieben Uhr = at seven o'clock
- morgens = in the morning
- mittags = at midday
- abends = in the evening
- dann / danach = then / afterwards

**Word order:** the conjugated verb stays in position 2; the separable prefix goes to the end.
- Am Morgen **stehe** ich früh **auf**.
- Am Abend **sehe** ich **fern**.

**Common mistakes:**
- ❌ Ich aufstehe um sieben Uhr. → ✅ Ich stehe um sieben Uhr auf.
- ❌ Ich stehe um sieben Uhr. (missing "auf") → ✅ Ich stehe um sieben Uhr auf.
- ❌ Ich dusche morgens. (without reflexive pronoun) → ✅ Ich dusche mich morgens.`,
        explanationHinglish: `**Separable verbs** ka prefix sentence ke end par chala jaata hai.

- **aufstehen** → Ich **stehe** um sieben Uhr **auf**.
- **anziehen** → Ich **ziehe** mich **an**.
- **einkaufen** → Wir **kaufen** am Samstag **ein**.
- **fernsehen** → Am Abend **sehe** ich **fern**.
- **aufräumen** → Ich **räume** mein Zimmer **auf**.

**Reflexive verbs:** reflexive pronoun verb ke baad aata hai.
- Ich **dusche mich**.
- Ich **wasche mich**.
- Ich **ziehe mich an**.

**Simple daily routine:**
- Ich **stehe** um sieben Uhr **auf**.
- Ich **dusche mich**.
- Dann **frühstücke** ich.
- Ich **gehe** zur Arbeit.
- Am Abend **sehe** ich **fern**.
- Ich **gehe** um elf Uhr **schlafen**.

**Time expressions:**
- um sieben Uhr = saat baje
- morgens = subah
- mittags = dopahar
- abends = shaam
- dann / danach = phir / uske baad

**Word order:** conjugated verb position 2 par; separable prefix end par.
- Am Morgen **stehe** ich früh **auf**.
- Am Abend **sehe** ich **fern**.

**Common mistakes:**
- ❌ Ich aufstehe um sieben Uhr. → ✅ Ich stehe um sieben Uhr auf.
- ❌ Ich stehe um sieben Uhr. (missing "auf") → ✅ Ich stehe um sieben Uhr auf.
- ❌ Ich dusche morgens. (reflexive pronoun ke bina) → ✅ Ich dusche mich morgens.`,
        examples: [
          {
            german: 'Ich stehe um sieben Uhr auf.',
            english: 'I get up at seven o\'clock.',
            hinglish: 'Main saat baje uthta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'stehe ... auf', role: 'separable verb (aufstehen)', meaning: 'get up' },
              { word: 'um sieben Uhr', role: 'time expression', meaning: 'at seven o\'clock' },
            ],
            audioText: 'Ich stehe um sieben Uhr auf.',
          },
          {
            german: 'Ich dusche mich morgens.',
            english: 'I shower in the morning.',
            hinglish: 'Main subah shower karta hoon.',
            audioText: 'Ich dusche mich morgens.',
          },
          {
            german: 'Am Abend sehe ich fern.',
            english: 'In the evening I watch TV.',
            hinglish: 'Shaam ko main TV dekhta hoon.',
            audioText: 'Am Abend sehe ich fern.',
          },
        ],
        realLifeContext: 'Daily routine is a standard A1 speaking topic. You need it for introductions, language exams, and small talk with colleagues or classmates.',
        culturalNote: 'Germans often use the 24-hour clock in schedules: 18:30 instead of 6:30 p.m. In speech, "sieben Uhr" can mean morning or evening depending on context.',
        summary: [
          'Separable verbs send their prefix to the end: stehe ... auf',
          'Reflexive pronouns follow the verb: dusche mich',
          'Use um + clock time, morgens/mittags/abends',
          'dann/danach connect routine steps',
          'Do not put the separable prefix before the verb',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-10-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich stehe um sieben Uhr ___."',
          questionHinglish: 'Complete karo: "Ich stehe um sieben Uhr ___."',
          options: ['auf', 'aus', 'an', 'ein'],
          correctAnswer: 'auf',
          explanation: 'The separable verb is "aufstehen". In a main clause, the prefix "auf" goes to the end.',
          explanationHinglish: 'Separable verb "aufstehen" hai. Main clause mein prefix "auf" end par jaata hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['separable-verbs', 'daily-routine'],
        },
        {
          id: 'ex-a1-10-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ mich morgens." (shower)',
          questionHinglish: 'Complete karo: "Ich ___ mich morgens." (shower karna)',
          options: ['dusche', 'wasche', 'ziehe', 'esse'],
          correctAnswer: 'dusche',
          explanation: 'The reflexive verb is "sich duschen": Ich dusche mich morgens.',
          explanationHinglish: 'Reflexive verb "sich duschen" hai: Ich dusche mich morgens.',
          difficulty: 2,
          xpReward: 10,
          tags: ['reflexive-verbs', 'daily-routine'],
        },
        {
          id: 'ex-a1-10-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Am Abend ___ ich fern."',
          questionHinglish: 'Complete karo: "Am Abend ___ ich fern."',
          options: ['sehe', 'gehe', 'mache', 'stehe'],
          correctAnswer: 'sehe',
          explanation: 'The separable verb is "fernsehen": Am Abend sehe ich fern.',
          explanationHinglish: 'Separable verb "fernsehen" hai: Am Abend sehe ich fern.',
          difficulty: 2,
          xpReward: 10,
          tags: ['separable-verbs', 'daily-routine'],
        },
        {
          id: 'ex-a1-10-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / stehe / um sieben Uhr / auf / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / stehe / um sieben Uhr / auf / ."',
          options: ['Ich', 'stehe', 'um sieben Uhr', 'auf', '.'],
          correctAnswer: 'Ich stehe um sieben Uhr auf .',
          explanation: 'The conjugated verb "stehe" stays in position 2; the prefix "auf" goes to the end.',
          explanationHinglish: 'Conjugated verb "stehe" position 2 par; prefix "auf" end par.',
          difficulty: 2,
          xpReward: 12,
          tags: ['separable-verbs', 'word-order'],
        },
        {
          id: 'ex-a1-10-02-05',
          type: 'typing',
          question: 'Translate: "I get up at seven o\'clock."',
          questionHinglish: 'Translate karo: "I get up at seven o\'clock."',
          correctAnswer: 'Ich stehe um sieben Uhr auf.',
          explanation: 'Use the separable verb "aufstehen": Ich stehe um sieben Uhr auf.',
          explanationHinglish: 'Separable verb "aufstehen" use karo: Ich stehe um sieben Uhr auf.',
          difficulty: 2,
          xpReward: 10,
          tags: ['separable-verbs', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-10-03',
      level: 'A1',
      moduleId: 'm-a1-10',
      title: 'Imperatives & Everyday Instructions',
      titleHinglish: 'Imperatives aur Rozana Instructions',
      objective: 'Give simple instructions with du, ihr, and Sie imperatives',
      objectiveHinglish: 'du, ihr aur Sie imperatives ke saath simple instructions do',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'grammar'],
      prerequisites: ['l-a1-10-02'],
      order: 3,
      grammarPoints: ['imperative', 'du/ihr/Sie', 'separable verbs in imperatives'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you tell someone to come in or sit down?',
          'How do you make a command sound polite?',
        ],
        explanation: `The **imperative** is used for instructions, requests, and advice.

**du (informal singular):**
- **Komm!** = Come!
- **Mach!** = Do it!
- **Warte!** = Wait!
- **Steh auf!** = Get up!
- **Zieh dich an!** = Get dressed!
- **Gib mir bitte das Buch.** = Please give me the book.

**ihr (informal plural):**
- **Kommt!**
- **Macht!**
- **Steht auf!**

**Sie (formal):**
- **Kommen Sie!**
- **Machen Sie!**
- **Stehen Sie auf!**
- **Ziehen Sie sich an!**

**Special forms:**
- sein → **Sei ruhig!** (du) / **Seien Sie ruhig!** (Sie)
- haben → **Hab keine Angst!** (du)
- werden → **Werd schnell gesund!** (du)

**Soften with "bitte":**
- **Komm bitte herein.**
- **Machen Sie bitte das Fenster zu.**

**Word order with separable verbs:** the prefix goes to the end.
- **Steh** bitte **auf**!
- **Mach** die Tür **zu**!

**Common mistakes:**
- ❌ Du kommst! (statement, not command)
- ✅ Komm!
- ❌ Aufsteh! → ✅ Steh auf!
- ❌ Kommen Sie herein bitte. (awkward) → ✅ Kommen Sie bitte herein.`,
        explanationHinglish: `**Imperative** instructions, requests aur advice ke liye use hota hai.

**du (informal singular):**
- **Komm!** = Aao!
- **Mach!** = Karo!
- **Warte!** = Ruko!
- **Steh auf!** = Utho!
- **Zieh dich an!** = Kapde pehno!
- **Gib mir bitte das Buch.** = Please mujhe kitaab do.

**ihr (informal plural):**
- **Kommt!**
- **Macht!**
- **Steht auf!**

**Sie (formal):**
- **Kommen Sie!**
- **Machen Sie!**
- **Stehen Sie auf!**
- **Ziehen Sie sich an!**

**Special forms:**
- sein → **Sei ruhig!** (du) / **Seien Sie ruhig!** (Sie)
- haben → **Hab keine Angst!** (du)
- werden → **Werd schnell gesund!** (du)

**"bitte" se soften karo:**
- **Komm bitte herein.**
- **Machen Sie bitte das Fenster zu.**

**Separable verbs in imperative:** prefix end par.
- **Steh** bitte **auf**!
- **Mach** die Tür **zu**!

**Common mistakes:**
- ❌ Du kommst! (statement hai, command nahi)
- ✅ Komm!
- ❌ Aufsteh! → ✅ Steh auf!
- ❌ Kommen Sie herein bitte. (awkward) → ✅ Kommen Sie bitte herein.`,
        examples: [
          {
            german: 'Komm bitte herein.',
            english: 'Please come in.',
            hinglish: 'Please andar aao.',
            breakdown: [
              { word: 'Komm', role: 'imperative (du) of kommen', meaning: 'come' },
              { word: 'bitte', role: 'polite particle', meaning: 'please' },
              { word: 'herein', role: 'separable prefix', meaning: 'in / inside' },
            ],
            audioText: 'Komm bitte herein.',
          },
          {
            german: 'Steh bitte auf.',
            english: 'Please get up.',
            hinglish: 'Please utho.',
            audioText: 'Steh bitte auf.',
          },
          {
            german: 'Kommen Sie bitte herein.',
            english: 'Please come in. (formal)',
            hinglish: 'Please andar aaiye. (formal)',
            audioText: 'Kommen Sie bitte herein.',
          },
        ],
        realLifeContext: 'You will hear imperatives in classrooms, shops, offices, and public transport. Knowing the difference between du, ihr, and Sie helps you sound appropriate and polite.',
        culturalNote: 'German imperatives can sound direct. Adding "bitte" is standard politeness. In formal situations, always use the Sie form.',
        summary: [
          'du imperative: Komm! Mach! Steh auf!',
          'ihr imperative: Kommt! Macht! Steht auf!',
          'Sie imperative: Kommen Sie! Machen Sie!',
          'Use bitte to soften commands',
          'Separable prefixes go to the end: Steh auf!',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-10-03-01',
          type: 'multiple-choice',
          question: 'What is the du imperative of "kommen"?',
          questionHinglish: '"kommen" ka du imperative kya hai?',
          options: ['Komm!', 'Kommt!', 'Kommen!', 'Kommst!'],
          correctAnswer: 'Komm!',
          explanation: 'For du, regular verbs usually use the stem without -st: kommen → Komm!',
          explanationHinglish: 'du ke liye regular verbs usually stem without -st: kommen → Komm!',
          difficulty: 2,
          xpReward: 10,
          tags: ['imperative', 'du'],
        },
        {
          id: 'ex-a1-10-03-02',
          type: 'multiple-choice',
          question: 'Complete the formal command: "___ Sie bitte herein!"',
          questionHinglish: 'Formal command complete karo: "___ Sie bitte herein!"',
          options: ['Kommen', 'Kommt', 'Komm', 'Kommst'],
          correctAnswer: 'Kommen',
          explanation: 'The Sie imperative uses the infinitive form + Sie: Kommen Sie bitte herein!',
          explanationHinglish: 'Sie imperative infinitive + Sie use karta hai: Kommen Sie bitte herein!',
          difficulty: 2,
          xpReward: 10,
          tags: ['imperative', 'formal'],
        },
        {
          id: 'ex-a1-10-03-03',
          type: 'multiple-choice',
          question: 'Complete the du imperative: "___ auf!" (aufstehen)',
          questionHinglish: 'du imperative complete karo: "___ auf!" (aufstehen)',
          options: ['Steh', 'Stehe', 'Stehen', 'Steht'],
          correctAnswer: 'Steh',
          explanation: 'The du imperative of aufstehen is "Steh auf!" The prefix stays at the end.',
          explanationHinglish: 'aufstehen ka du imperative "Steh auf!" hai. Prefix end par rehta hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['imperative', 'separable-verbs'],
        },
        {
          id: 'ex-a1-10-03-04',
          type: 'ordering',
          question: 'Arrange the words into a correct command: "Mach / bitte / die Tür / zu / ."',
          questionHinglish: 'Sahi command banao: "Mach / bitte / die Tür / zu / ."',
          options: ['Mach', 'bitte', 'die Tür', 'zu', '.'],
          correctAnswer: 'Mach bitte die Tür zu .',
          explanation: 'The imperative "Mach" comes first, and the separable prefix "zu" goes to the end.',
          explanationHinglish: 'Imperative "Mach" pehle, aur separable prefix "zu" end par.',
          difficulty: 2,
          xpReward: 12,
          tags: ['imperative', 'word-order'],
        },
        {
          id: 'ex-a1-10-03-05',
          type: 'typing',
          question: 'Translate: "Please come in." (formal)',
          questionHinglish: 'Translate karo: "Please come in." (formal)',
          correctAnswer: 'Kommen Sie bitte herein.',
          explanation: 'Use the Sie imperative: Kommen Sie bitte herein.',
          explanationHinglish: 'Sie imperative use karo: Kommen Sie bitte herein.',
          difficulty: 2,
          xpReward: 10,
          tags: ['imperative', 'typing'],
        },
      ],
    },
  ],
};
