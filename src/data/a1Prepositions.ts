// ============================================================
// A1 MODULE 12 – PREPOSITIONS, LOCATION & DATIVE
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_PREPOSITIONS: Module = {
  id: 'm-a1-12',
  level: 'A1',
  title: 'Prepositions, Location & Dative',
  titleHinglish: 'Prepositions, Location aur Dative',
  description: 'Use dative articles, describe where things are, and talk about time with prepositions.',
  descriptionHinglish: 'Dative articles use karo, batao cheezein kahan hain, aur time prepositions seekho.',
  skills: ['grammar', 'speaking', 'writing'],
  order: 12,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-12-01',
      level: 'A1',
      moduleId: 'm-a1-12',
      title: 'Dative Articles & Pronouns',
      titleHinglish: 'Dative Articles aur Pronouns',
      objective: 'Use dative articles and pronouns with common dative verbs and prepositions',
      objectiveHinglish: 'Common dative verbs aur prepositions ke saath dative articles aur pronouns use karo',
      estimatedMinutes: 22,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-11-03'],
      order: 1,
      grammarPoints: ['dative case', 'dative pronouns', 'dative verbs'],
      vocabulary: [],
      content: {
        warmUp: [
          'Do you remember the accusative articles den/einen?',
          'Which verbs need "to whom" rather than "whom"?',
        ],
        explanation: `The **dative** case marks the indirect object or the person affected by an action.

**Definite articles in the dative:**
| Gender | Nominative | Dative |
|--------|------------|--------|
| masculine | der | **dem** |
| feminine | die | **der** |
| neuter | das | **dem** |
| plural | die | **den** (+ -n on the noun) |

**Indefinite articles:**
- ein → **einem** (masculine/neuter)
- eine → **einer** (feminine)
- plural: keine → **keinen**

**Dative pronouns:**
- mir = to me
- dir = to you (informal)
- ihm = to him
- ihr = to her
- ihm = to it
- uns = to us
- euch = to you (plural)
- ihnen / Ihnen = to them / to you (formal)

**Common dative verbs:**
- **helfen** = to help: Ich helfe **dem Mann**.
- **danken** = to thank: Ich danke **der Frau**.
- **gefallen** = to appeal to: Der Film gefällt **mir**.
- **gehören** = to belong to: Das Buch gehört **mir**.
- **passen** = to fit/suit: Die Jacke passt **dir**.
- **schmecken** = to taste good to: Die Suppe schmeckt **mir**.

**Dative prepositions:**
- **mit** = with: mit dem Bus
- **nach** = after / to: nach dem Essen
- **bei** = at / with: bei der Arbeit
- **seit** = since: seit einem Jahr
- **von** = from: von dem Bahnhof
- **zu** = to: zu der Schule → zur Schule
- **aus** = from / out of: aus der Schweiz

**Common mistakes:**
- ❌ Ich helfe den Mann. → ✅ Ich helfe **dem** Mann.
- ❌ Das gefällt mich. → ✅ Das gefällt **mir**.
- ❌ mit der Bus. → ✅ mit **dem** Bus.`,
        explanationHinglish: `**Dative** case indirect object ya affected person ko mark karta hai.

**Definite articles dative mein:**
| Gender | Nominative | Dative |
|--------|------------|--------|
| masculine | der | **dem** |
| feminine | die | **der** |
| neuter | das | **dem** |
| plural | die | **den** (+ noun par -n) |

**Indefinite articles:**
- ein → **einem** (masculine/neuter)
- eine → **einer** (feminine)
- plural: keine → **keinen**

**Dative pronouns:**
- mir = mujhe
- dir = tumhe
- ihm = use (male)
- ihr = use (female)
- ihm = use (neuter)
- uns = humein
- euch = tum sab ko
- ihnen / Ihnen = unhe / aapko (formal)

**Common dative verbs:**
- **helfen** = madad karna: Ich helfe **dem Mann**.
- **danken** = dhanyavaad dena: Ich danke **der Frau**.
- **gefallen** = pasand aana: Der Film gefällt **mir**.
- **gehören** = kiska hona: Das Buch gehört **mir**.
- **passen** = fit hona: Die Jacke passt **dir**.
- **schmecken** = swaad aana: Die Suppe schmeckt **mir**.

**Dative prepositions:**
- **mit** = ke saath: mit dem Bus
- **nach** = ke baad / ki taraf: nach dem Essen
- **bei** = par / ke paas: bei der Arbeit
- **seit** = se: seit einem Jahr
- **von** = se: von dem Bahnhof
- **zu** = ki taraf: zu der Schule → zur Schule
- **aus** = se / bahar: aus der Schweiz

**Common mistakes:**
- ❌ Ich helfe den Mann. → ✅ Ich helfe **dem** Mann.
- ❌ Das gefällt mich. → ✅ Das gefällt **mir**.
- ❌ mit der Bus. → ✅ mit **dem** Bus.`,
        examples: [
          {
            german: 'Ich helfe dem Mann.',
            english: 'I help the man.',
            hinglish: 'Main aadmi ki madad karta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'helfe', role: 'dative verb', meaning: 'help' },
              { word: 'dem Mann', role: 'dative object', meaning: 'the man' },
            ],
            audioText: 'Ich helfe dem Mann.',
          },
          {
            german: 'Das Buch gehört mir.',
            english: 'The book belongs to me.',
            hinglish: 'Kitaab meri hai.',
            audioText: 'Das Buch gehört mir.',
          },
          {
            german: 'Ich fahre mit dem Bus.',
            english: 'I go by bus.',
            hinglish: 'Main bus se jaata hoon.',
            audioText: 'Ich fahre mit dem Bus.',
          },
        ],
        realLifeContext: 'Dative is essential for saying who you help, thank, or belong to, and for using prepositions like mit, nach, bei, seit, von, zu, and aus. These appear in almost every A1 conversation.',
        culturalNote: 'Some verbs that take a direct object in English take a dative object in German: helfen, danken, gefallen. Learn the verb and its case together.',
        summary: [
          'Dative articles: dem (m), der (f), dem (n), den + -n (pl)',
          'Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen',
          'Common dative verbs: helfen, danken, gefallen, gehören, passen',
          'Dative prepositions: mit, nach, bei, seit, von, zu, aus',
          'Do not use accusative with dative verbs',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-12-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich helfe ___ Mann."',
          questionHinglish: 'Complete karo: "Ich helfe ___ Mann."',
          options: ['dem', 'den', 'der', 'das'],
          correctAnswer: 'dem',
          explanation: '"helfen" takes the dative. "Mann" is masculine, so the dative article is "dem".',
          explanationHinglish: '"helfen" dative leta hai. "Mann" masculine hai, isliye dative article "dem".',
          difficulty: 2,
          xpReward: 10,
          tags: ['dative', 'articles'],
        },
        {
          id: 'ex-a1-12-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich danke ___ Frau."',
          questionHinglish: 'Complete karo: "Ich danke ___ Frau."',
          options: ['der', 'dem', 'den', 'die'],
          correctAnswer: 'der',
          explanation: '"danken" takes the dative. "Frau" is feminine, so the dative article is "der".',
          explanationHinglish: '"danken" dative leta hai. "Frau" feminine hai, isliye dative article "der".',
          difficulty: 2,
          xpReward: 10,
          tags: ['dative', 'articles'],
        },
        {
          id: 'ex-a1-12-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Das Buch gehört ___." (to me)',
          questionHinglish: 'Complete karo: "Das Buch gehört ___." (mera)',
          options: ['mir', 'mich', 'mein', 'ich'],
          correctAnswer: 'mir',
          explanation: '"gehören" takes the dative. The dative pronoun for "me" is "mir".',
          explanationHinglish: '"gehören" dative leta hai. "me" ke liye dative pronoun "mir" hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['dative', 'pronouns'],
        },
        {
          id: 'ex-a1-12-01-04',
          type: 'multiple-choice',
          question: 'Complete: "Ich fahre mit ___ Bus."',
          questionHinglish: 'Complete karo: "Ich fahre mit ___ Bus."',
          options: ['dem', 'den', 'der', 'das'],
          correctAnswer: 'dem',
          explanation: '"mit" is a dative preposition. "Bus" is masculine, so "mit dem Bus".',
          explanationHinglish: '"mit" dative preposition hai. "Bus" masculine hai, isliye "mit dem Bus".',
          difficulty: 2,
          xpReward: 10,
          tags: ['dative', 'prepositions'],
        },
        {
          id: 'ex-a1-12-01-05',
          type: 'typing',
          question: 'Translate: "I help the woman."',
          questionHinglish: 'Translate karo: "I help the woman."',
          correctAnswer: 'Ich helfe der Frau.',
          explanation: '"helfen" takes dative; "Frau" is feminine, so "der Frau".',
          explanationHinglish: '"helfen" dative leta hai; "Frau" feminine hai, isliye "der Frau".',
          difficulty: 2,
          xpReward: 10,
          tags: ['dative', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-12-02',
      level: 'A1',
      moduleId: 'm-a1-12',
      title: 'Location: in, an, auf + Dative',
      titleHinglish: 'Location: in, an, auf + Dative',
      objective: 'Say where something is using dative prepositions',
      objectiveHinglish: 'Dative prepositions use karke batao koi cheez kahan hai',
      estimatedMinutes: 22,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-12-01'],
      order: 2,
      grammarPoints: ['local prepositions', 'dative for location', 'wo vs wohin'],
      vocabulary: [],
      content: {
        warmUp: [
          'Where is your phone right now?',
          'How do you say "on the table" or "in the kitchen"?',
        ],
        explanation: `For **location** (where something is), use **in, an, auf, unter, über, neben, hinter, vor, zwischen** + **dative**.

**Wo? = Where? → dative**
- in **der** Küche = in the kitchen
- in **dem** Wohnzimmer → **im** Wohnzimmer = in the living room
- auf **dem** Tisch = on the table
- an **der** Wand = on the wall
- unter **dem** Tisch = under the table
- neben **dem** Bett = next to the bed
- vor **dem** Haus = in front of the house
- zwischen **den** Stühlen = between the chairs

**Wohin? = Where to? → accusative**
- in **die** Küche = into the kitchen
- auf **den** Tisch = onto the table
- an **die** Wand = onto the wall

**Contrast:**
- Das Buch **liegt auf dem Tisch**. (location — dative)
- Ich **lege** das Buch **auf den Tisch**. (direction — accusative)

**Useful verbs:**
- liegen = to lie / be located
- stehen = to stand / be located
- sein = to be
- legen = to lay (something down)
- stellen = to put (something upright)
- gehen = to go

**Common mistakes:**
- ❌ Das Buch liegt auf den Tisch. → ✅ Das Buch liegt auf **dem** Tisch.
- ❌ Ich gehe in der Küche. → ✅ Ich gehe in **die** Küche.
- ❌ im Küche → ✅ in der Küche (die Küche)`,
        explanationHinglish: `**Location** (cheez kahan hai) ke liye **in, an, auf, unter, über, neben, hinter, vor, zwischen** + **dative**.

**Wo? = Kahan? → dative**
- in **der** Küche = kitchen mein
- in **dem** Wohnzimmer → **im** Wohnzimmer = living room mein
- auf **dem** Tisch = table par
- an **der** Wand = wall par
- unter **dem** Tisch = table ke neeche
- neben **dem** Bett = bed ke paas
- vor **dem** Haus = ghar ke saamne
- zwischen **den** Stühlen = chairs ke beech

**Wohin? = Kahan tak? → accusative**
- in **die** Küche = kitchen mein (direction)
- auf **den** Tisch = table par (direction)
- an **die** Wand = wall par (direction)

**Contrast:**
- Das Buch **liegt auf dem Tisch**. (location — dative)
- Ich **lege** das Buch **auf den Tisch**. (direction — accusative)

**Useful verbs:**
- liegen = pada hona
- stehen = khada hona
- sein = hona
- legen = rakhna (leta kar)
- stellen = rakhna (khada kar)
- gehen = jaana

**Common mistakes:**
- ❌ Das Buch liegt auf den Tisch. → ✅ Das Buch liegt auf **dem** Tisch.
- ❌ Ich gehe in der Küche. → ✅ Ich gehe in **die** Küche.
- ❌ im Küche → ✅ in der Küche (die Küche)`,
        examples: [
          {
            german: 'Das Buch liegt auf dem Tisch.',
            english: 'The book is on the table.',
            hinglish: 'Kitaab table par hai.',
            breakdown: [
              { word: 'Das Buch', role: 'subject', meaning: 'the book' },
              { word: 'liegt', role: 'verb (location)', meaning: 'is lying' },
              { word: 'auf dem Tisch', role: 'dative location', meaning: 'on the table' },
            ],
            audioText: 'Das Buch liegt auf dem Tisch.',
          },
          {
            german: 'Ich gehe in die Küche.',
            english: 'I am going into the kitchen.',
            hinglish: 'Main kitchen mein ja raha hoon.',
            audioText: 'Ich gehe in die Küche.',
          },
          {
            german: 'Die Katze ist unter dem Tisch.',
            english: 'The cat is under the table.',
            hinglish: 'Billi table ke neeche hai.',
            audioText: 'Die Katze ist unter dem Tisch.',
          },
        ],
        realLifeContext: 'Location phrases are essential for describing your home, finding things, and understanding directions. They also prepare you for the dative prepositions used in everyday German.',
        culturalNote: 'German makes a clear distinction between location (Wo? + dative) and direction (Wohin? + accusative). English often uses the same preposition for both, so this needs practice.',
        summary: [
          'Wo? + dative: auf dem Tisch, in der Küche',
          'Wohin? + accusative: auf den Tisch, in die Küche',
          'Common contractions: in dem = im, an dem = am, zu der = zur',
          'Use liegen/stehen/sein for location',
          'Use legen/stellen/gehen for direction',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-12-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Das Buch liegt ___ Tisch."',
          questionHinglish: 'Complete karo: "Das Buch liegt ___ Tisch."',
          options: ['auf dem', 'auf den', 'auf der', 'auf die'],
          correctAnswer: 'auf dem',
          explanation: 'Location with "auf" uses the dative: auf dem Tisch.',
          explanationHinglish: '"auf" ke saath location dative leti hai: auf dem Tisch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['location', 'dative'],
        },
        {
          id: 'ex-a1-12-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich gehe ___ Küche." (direction)',
          questionHinglish: 'Complete karo: "Ich gehe ___ Küche." (direction)',
          options: ['in die', 'in der', 'im', 'auf dem'],
          correctAnswer: 'in die',
          explanation: 'Direction with "in" uses the accusative: in die Küche.',
          explanationHinglish: '"in" ke saath direction accusative leti hai: in die Küche.',
          difficulty: 2,
          xpReward: 10,
          tags: ['location', 'accusative'],
        },
        {
          id: 'ex-a1-12-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Die Katze ist ___ Sofa." (location)',
          questionHinglish: 'Complete karo: "Die Katze ist ___ Sofa." (location)',
          options: ['auf dem', 'auf den', 'auf die', 'auf der'],
          correctAnswer: 'auf dem',
          explanation: '"Sofa" is neuter, so the dative location form is "auf dem Sofa".',
          explanationHinglish: '"Sofa" neuter hai, isliye dative location "auf dem Sofa".',
          difficulty: 2,
          xpReward: 10,
          tags: ['location', 'dative'],
        },
        {
          id: 'ex-a1-12-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Das Buch / liegt / auf dem Tisch / ."',
          questionHinglish: 'Sahi sentence banao: "Das Buch / liegt / auf dem Tisch / ."',
          options: ['Das Buch', 'liegt', 'auf dem Tisch', '.'],
          correctAnswer: 'Das Buch liegt auf dem Tisch .',
          explanation: 'Subject + verb + dative location: Das Buch liegt auf dem Tisch.',
          explanationHinglish: 'Subject + verb + dative location: Das Buch liegt auf dem Tisch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['location', 'word-order'],
        },
        {
          id: 'ex-a1-12-02-05',
          type: 'typing',
          question: 'Translate: "The book is on the table."',
          questionHinglish: 'Translate karo: "The book is on the table."',
          correctAnswer: 'Das Buch liegt auf dem Tisch.',
          explanation: 'Use location + dative: Das Buch liegt auf dem Tisch.',
          explanationHinglish: 'Location + dative use karo: Das Buch liegt auf dem Tisch.',
          difficulty: 2,
          xpReward: 10,
          tags: ['location', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-12-03',
      level: 'A1',
      moduleId: 'm-a1-12',
      title: 'Prepositions of Time',
      titleHinglish: 'Time ke Prepositions',
      objective: 'Use am, im, um, von...bis, vor, and nach correctly',
      objectiveHinglish: 'am, im, um, von...bis, vor aur nach sahi use karo',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-12-02'],
      order: 3,
      grammarPoints: ['am/im/um', 'von...bis', 'vor/nach'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "on Monday", "in summer", and "at 7 o\'clock"?',
          'Which preposition goes with days, months, and clock times?',
        ],
        explanation: `German uses different prepositions for different kinds of time.

**am + days and dates:**
- **am** Montag = on Monday
- **am** Wochenende = at the weekend
- **am** 5. Mai = on 5 May
- **am** Morgen = in the morning (but "morgens" is also common)

**im + months and seasons:**
- **im** Januar = in January
- **im** Sommer = in summer
- **im** Winter = in winter
- **im** Urlaub = on holiday

**um + clock time:**
- **um** sieben Uhr = at seven o'clock
- **um** 18:30 Uhr = at 18:30

**von ... bis ...:**
- **von** Montag **bis** Freitag = from Monday to Friday
- **von** neun **bis** fünf Uhr = from nine to five

**vor / nach + dative:**
- **vor** dem Essen = before the meal
- **nach** der Arbeit = after work
- **nach** dem Kurs = after the course

**Other useful time phrases:**
- **seit** einem Jahr = for a year / since a year
- **in** einer Stunde = in an hour
- **gegen** acht Uhr = around eight o'clock

**Common mistakes:**
- ❌ im Montag → ✅ am Montag
- ❌ am Sommer → ✅ im Sommer
- ❌ in sieben Uhr → ✅ um sieben Uhr
- ❌ nach der Arbeit (correct) vs. ❌ nach die Arbeit`,
        explanationHinglish: `German mein time ke liye alag prepositions hain.

**am + days aur dates:**
- **am** Montag = Monday ko
- **am** Wochenende = weekend par
- **am** 5. Mai = 5 May ko
- **am** Morgen = subah (morgens bhi common)

**im + months aur seasons:**
- **im** Januar = January mein
- **im** Sommer = summer mein
- **im** Winter = winter mein
- **im** Urlaub = chhutti par

**um + clock time:**
- **um** sieben Uhr = saat baje
- **um** 18:30 Uhr = 18:30 baje

**von ... bis ...:**
- **von** Montag **bis** Freitag = Monday se Friday tak
- **von** neun **bis** fünf Uhr = nau se paanch baje tak

**vor / nach + dative:**
- **vor** dem Essen = khane se pehle
- **nach** der Arbeit = kaam ke baad
- **nach** dem Kurs = course ke baad

**Other useful time phrases:**
- **seit** einem Jahr = ek saal se
- **in** einer Stunde = ek ghante mein
- **gegen** acht Uhr = aath baje ke aas-paas

**Common mistakes:**
- ❌ im Montag → ✅ am Montag
- ❌ am Sommer → ✅ im Sommer
- ❌ in sieben Uhr → ✅ um sieben Uhr
- ❌ nach die Arbeit → ✅ nach der Arbeit`,
        examples: [
          {
            german: 'Am Montag habe ich frei.',
            english: 'On Monday I am off.',
            hinglish: 'Monday ko meri chhutti hai.',
            breakdown: [
              { word: 'Am Montag', role: 'time phrase (day)', meaning: 'on Monday' },
              { word: 'habe', role: 'verb (position 2)', meaning: 'have' },
              { word: 'ich', role: 'subject', meaning: 'I' },
              { word: 'frei', role: 'adjective', meaning: 'off / free' },
            ],
            audioText: 'Am Montag habe ich frei.',
          },
          {
            german: 'Im Sommer ist es warm.',
            english: 'In summer it is warm.',
            hinglish: 'Summer mein garmi hoti hai.',
            audioText: 'Im Sommer ist es warm.',
          },
          {
            german: 'Der Kurs beginnt um neun Uhr.',
            english: 'The course begins at nine o\'clock.',
            hinglish: 'Course nau baje shuru hota hai.',
            audioText: 'Der Kurs beginnt um neun Uhr.',
          },
        ],
        realLifeContext: 'Time prepositions are needed for appointments, work schedules, classes, and travel. Mixing up am/im/um is one of the most common A1 mistakes.',
        culturalNote: 'Official schedules often use the 24-hour clock: 17:30 Uhr. In speech, people may say "halb sechs" for 5:30, which literally means "half six" — a common source of confusion.',
        summary: [
          'am + day/date: am Montag, am 5. Mai',
          'im + month/season: im Januar, im Sommer',
          'um + clock time: um sieben Uhr',
          'von ... bis ... = from ... to ...',
          'vor/nach + dative: vor dem Essen, nach der Arbeit',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-12-03-01',
          type: 'multiple-choice',
          question: 'Complete: "___ Montag habe ich frei."',
          questionHinglish: 'Complete karo: "___ Montag habe ich frei."',
          options: ['Am', 'Im', 'Um', 'Von'],
          correctAnswer: 'Am',
          explanation: 'Days use "am": am Montag.',
          explanationHinglish: 'Days ke saath "am": am Montag.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time-prepositions', 'days'],
        },
        {
          id: 'ex-a1-12-03-02',
          type: 'multiple-choice',
          question: 'Complete: "___ Sommer ist es warm."',
          questionHinglish: 'Complete karo: "___ Sommer ist es warm."',
          options: ['Im', 'Am', 'Um', 'Von'],
          correctAnswer: 'Im',
          explanation: 'Seasons use "im": im Sommer.',
          explanationHinglish: 'Seasons ke saath "im": im Sommer.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time-prepositions', 'seasons'],
        },
        {
          id: 'ex-a1-12-03-03',
          type: 'multiple-choice',
          question: 'Complete: "Der Kurs beginnt ___ 9 Uhr."',
          questionHinglish: 'Complete karo: "Der Kurs beginnt ___ 9 Uhr."',
          options: ['um', 'am', 'im', 'von'],
          correctAnswer: 'um',
          explanation: 'Clock times use "um": um 9 Uhr.',
          explanationHinglish: 'Clock times ke saath "um": um 9 Uhr.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time-prepositions', 'clock-time'],
        },
        {
          id: 'ex-a1-12-03-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / arbeite / von Montag / bis Freitag / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / arbeite / von Montag / bis Freitag / ."',
          options: ['Ich', 'arbeite', 'von Montag', 'bis Freitag', '.'],
          correctAnswer: 'Ich arbeite von Montag bis Freitag .',
          explanation: 'Use "von ... bis ..." for a time range: von Montag bis Freitag.',
          explanationHinglish: 'Time range ke liye "von ... bis ...": von Montag bis Freitag.',
          difficulty: 2,
          xpReward: 10,
          tags: ['time-prepositions', 'word-order'],
        },
        {
          id: 'ex-a1-12-03-05',
          type: 'typing',
          question: 'Translate: "I work from Monday to Friday."',
          questionHinglish: 'Translate karo: "I work from Monday to Friday."',
          correctAnswer: 'Ich arbeite von Montag bis Freitag.',
          explanation: 'Use "von ... bis ...": Ich arbeite von Montag bis Freitag.',
          explanationHinglish: '"von ... bis ..." use karo: Ich arbeite von Montag bis Freitag.',
          difficulty: 2,
          xpReward: 10,
          tags: ['time-prepositions', 'typing'],
        },
      ],
    },
  ],
};
