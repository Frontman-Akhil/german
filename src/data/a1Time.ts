// ============================================================
// A1 MODULE 8 – TIME, DAYS & DATES
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_TIME: Module = {
  id: 'm-a1-08',
  level: 'A1',
  title: 'Time, Days & Dates',
  titleHinglish: 'Samay, Din aur Taarikh',
  description: 'Tell the time, talk about days and months, and give dates correctly.',
  descriptionHinglish: 'Time batana, din aur mahino ke baare mein bolna, aur taarikh sahi batana seekho.',
  skills: ['listening', 'speaking', 'vocabulary'],
  order: 8,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-08-01',
      level: 'A1',
      moduleId: 'm-a1-08',
      title: 'Telling Time',
      titleHinglish: 'Time Batana',
      objective: 'Ask for and tell the time in German',
      objectiveHinglish: 'German mein time puchna aur batana',
      estimatedMinutes: 22,
      skillFocus: ['listening', 'speaking'],
      prerequisites: ['l-a1-07-03'],
      order: 1,
      grammarPoints: ['Uhrzeit', 'halb/viertel', 'um + time'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you ask "What time is it?" in your language?',
          'Is 2:30 "half past two" or "half to three" in German?',
        ],
        explanation: `**Asking the time:**
- **Wie viel Uhr ist es?** (What time is it?)
- **Wie spät ist es?** (How late is it? — also "What time is it?")

**Answering:** **Es ist ...**

**Full hours:**
- 1:00 = Es ist **ein** Uhr.
- 2:00 = Es ist **zwei** Uhr.
- 12:00 = Es ist **zwölf** Uhr.

**Quarters and halves — pay attention!**
- 2:15 = **Viertel nach zwei** (quarter past two)
- 2:30 = **halb drei** — literally "half three", but it means **halfway to three = 2:30**!
- 2:45 = **Viertel vor drei** (quarter to three)
- 2:20 = **zwanzig nach zwei**
- 2:40 = **zwanzig vor drei**

**Formal / train station style:** hour + Uhr + minutes
- 14:30 = **vierzehn Uhr dreißig**
- 18:45 = **achtzehn Uhr fünfundvierzig**

**"at" a time = um:**
- Der Kurs beginnt **um** neun Uhr.
- Ich komme **um** halb acht. (I am coming at 7:30.)

**Common mistakes:**
- ❌ halb nach drei → ✅ halb drei (2:30)
- ❌ Es ist zwei Stunden. → ✅ Es ist zwei Uhr.`,
        explanationHinglish: `**Time puchna:**
- **Wie viel Uhr ist es?** (Kitne baje hain?)
- **Wie spät ist es?** (Kitna time hua hai?)

**Jawab:** **Es ist ...**

**Poore ghante:**
- 1:00 = Es ist **ein** Uhr.
- 2:00 = Es ist **zwei** Uhr.
- 12:00 = Es ist **zwölf** Uhr.

**Quarter aur half — dhyan do!**
- 2:15 = **Viertel nach zwei** (sawa do)
- 2:30 = **halb drei** — literally "half three", lekin matlab **2:30** hai!
- 2:45 = **Viertel vor drei** (paune teen)
- 2:20 = **zwanzig nach zwei**
- 2:40 = **zwanzig vor drei**

**Formal / train station style:** hour + Uhr + minutes
- 14:30 = **vierzehn Uhr dreißig**
- 18:45 = **achtzehn Uhr fünfundvierzig**

**"at" a time = um:**
- Der Kurs beginnt **um** neun Uhr.
- Ich komme **um** halb acht. (Main 7:30 baje aaunga.)

**Common mistakes:**
- ❌ halb nach drei → ✅ halb drei (2:30)
- ❌ Es ist zwei Stunden. → ✅ Es ist zwei Uhr.`,
        examples: [
          {
            german: 'Wie viel Uhr ist es? — Es ist halb drei.',
            english: 'What time is it? — It is 2:30.',
            hinglish: 'Kitne baje hain? — Sava do baje hain.',
            breakdown: [
              { word: 'Wie viel', role: 'question phrase', meaning: 'how much' },
              { word: 'Uhr', role: 'noun', meaning: 'o\'clock / clock' },
              { word: 'halb', role: 'adverb', meaning: 'half (to the next hour)' },
              { word: 'drei', role: 'numeral', meaning: 'three' },
            ],
            audioText: 'Wie viel Uhr ist es? Es ist halb drei.',
          },
          {
            german: 'Der Kurs beginnt um neun Uhr.',
            english: 'The course begins at nine o\'clock.',
            hinglish: 'Course nau baje shuru hota hai.',
            audioText: 'Der Kurs beginnt um neun Uhr.',
          },
          {
            german: 'Es ist Viertel vor sieben.',
            english: 'It is a quarter to seven (6:45).',
            hinglish: 'Sava chhe baje hain (6:45).',
            audioText: 'Es ist Viertel vor sieben.',
          },
        ],
        realLifeContext: 'You need time expressions for appointments, trains, classes, work, and meeting friends. German train stations and official schedules often use the 24-hour clock: "Der Zug fährt um vierzehn Uhr dreißig."',
        culturalNote: 'The German "halb" system surprises many learners: "halb drei" is 2:30, not 3:30. Think of it as "halfway to three".',
        summary: [
          'Wie viel Uhr ist es? / Wie spät ist es? = What time is it?',
          'Full hours: Es ist zwei Uhr',
          'Viertel nach = quarter past; Viertel vor = quarter to',
          'halb drei = 2:30 (halfway to three)',
          'Use um for "at" a time: um neun Uhr',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-08-01-01',
          type: 'multiple-choice',
          question: 'What time is "halb drei"?',
          questionHinglish: '"halb drei" kitne baje hai?',
          options: ['2:30', '3:30', '3:00', '2:00'],
          correctAnswer: '2:30',
          explanation: '"halb drei" means halfway to three, so it is 2:30 — not 3:30.',
          explanationHinglish: '"halb drei" ka matlab teen baje ke aadhe raaste par, yani 2:30 — 3:30 nahi.',
          difficulty: 2,
          xpReward: 10,
          tags: ['time', 'halb'],
        },
        {
          id: 'ex-a1-08-01-02',
          type: 'multiple-choice',
          question: 'How do you say 7:15?',
          questionHinglish: '7:15 ko German mein kaise kehte hain?',
          options: ['Viertel nach sieben', 'Viertel vor sieben', 'halb sieben', 'sieben nach Viertel'],
          correctAnswer: 'Viertel nach sieben',
          explanation: '7:15 is a quarter past seven: Viertel nach sieben.',
          explanationHinglish: '7:15 sava saat hai: Viertel nach sieben.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time', 'viertel'],
        },
        {
          id: 'ex-a1-08-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Es ist ___ Uhr." (2:00)',
          questionHinglish: 'Complete karo: "Es ist ___ Uhr." (2:00)',
          options: ['zwei', 'zwölf', 'zwanzig', 'zwei Uhrzehn'],
          correctAnswer: 'zwei',
          explanation: 'At 2:00 exactly, say "Es ist zwei Uhr".',
          explanationHinglish: '2:00 baje exactly "Es ist zwei Uhr" kehte hain.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time'],
        },
        {
          id: 'ex-a1-08-01-04',
          type: 'multiple-choice',
          question: 'Complete: "Der Zug fährt ___ acht Uhr."',
          questionHinglish: 'Complete karo: "Der Zug fährt ___ acht Uhr."',
          options: ['um', 'in', 'am', 'an'],
          correctAnswer: 'um',
          explanation: 'Use "um" for "at" a specific time: um acht Uhr.',
          explanationHinglish: 'Specific time ke liye "um" use karo: um acht Uhr.',
          difficulty: 1,
          xpReward: 8,
          tags: ['time', 'prepositions'],
        },
        {
          id: 'ex-a1-08-01-05',
          type: 'multiple-choice',
          question: 'What time is "Viertel vor drei"?',
          questionHinglish: '"Viertel vor drei" kitne baje hai?',
          options: ['3:15', '2:45', '2:15', '3:45'],
          correctAnswer: '2:45',
          explanation: '"Viertel vor drei" is a quarter before three, so 2:45.',
          explanationHinglish: '"Viertel vor drei" teen baje se pandrah minute pehle, yani 2:45.',
          difficulty: 2,
          xpReward: 10,
          tags: ['time', 'viertel'],
        },
        {
          id: 'ex-a1-08-01-06',
          type: 'typing',
          question: 'Translate: "It is 3:00."',
          questionHinglish: 'Translate karo: "It is 3:00."',
          correctAnswer: 'Es ist drei Uhr.',
          explanation: 'Use "Es ist" + number + "Uhr": Es ist drei Uhr.',
          explanationHinglish: '"Es ist" + number + "Uhr" use karo: Es ist drei Uhr.',
          difficulty: 1,
          xpReward: 10,
          tags: ['time', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-08-02',
      level: 'A1',
      moduleId: 'm-a1-08',
      title: 'Days, Months & Dates',
      titleHinglish: 'Din, Mahine aur Taarikh',
      objective: 'Talk about days, months, birthdays, and dates',
      objectiveHinglish: 'Din, mahine, birthday aur taarikh ke baare mein bolna',
      estimatedMinutes: 20,
      skillFocus: ['vocabulary', 'speaking'],
      prerequisites: ['l-a1-08-01'],
      order: 2,
      grammarPoints: ['am + day', 'im + month', 'date with der/dem'],
      vocabulary: [],
      content: {
        warmUp: [
          'Can you name the days of the week in German?',
          'When is your birthday?',
        ],
        explanation: `**Days of the week:**
Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.

Use **am** for days and dates:
- **am** Montag (on Monday)
- **am** Wochenende (on the weekend)
- **am** 5. Mai (on the 5th of May)

**Months:**
Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.

Use **im** for months and years:
- **im** Januar (in January)
- **im** Sommer (in summer)
- **im** Jahr 2026 (in the year 2026)

**Dates:** Written with a period after the number, spoken as an ordinal.
- 3. Oktober = **der dritte Oktober**
- am 3. Oktober = **am dritten Oktober**

**Birthday questions:**
- **Wann hast du Geburtstag?** (When is your birthday?)
- Ich habe **am** 5. Mai Geburtstag.
- **Wann ist dein Geburtstag?** (When is your birthday?)

**Common mistakes:**
- ❌ in Montag → ✅ am Montag
- ❌ in Januar → ✅ im Januar
- ❌ Ich habe Geburtstag in 5. Mai. → ✅ Ich habe am 5. Mai Geburtstag.`,
        explanationHinglish: `**Days of the week:**
Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.

Din aur taarikh ke liye **am**:
- **am** Montag (Somvaar ko)
- **am** Wochenende (weekend par)
- **am** 5. Mai (5 May ko)

**Months:**
Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.

Mahine aur saal ke liye **im**:
- **im** Januar (January mein)
- **im** Sommer (garmi mein)
- **im** Jahr 2026 (saal 2026 mein)

**Dates:** Number ke baad period likhte hain, bolte waqt ordinal.
- 3. Oktober = **der dritte Oktober**
- am 3. Oktober = **am dritten Oktober**

**Birthday questions:**
- **Wann hast du Geburtstag?** (Tumhara birthday kab hai?)
- Ich habe **am** 5. Mai Geburtstag.
- **Wann ist dein Geburtstag?**

**Common mistakes:**
- ❌ in Montag → ✅ am Montag
- ❌ in Januar → ✅ im Januar
- ❌ Ich habe Geburtstag in 5. Mai. → ✅ Ich habe am 5. Mai Geburtstag.`,
        examples: [
          {
            german: 'Am Montag habe ich Deutschkurs.',
            english: 'On Monday I have German class.',
            hinglish: 'Somvaar ko mera German class hai.',
            breakdown: [
              { word: 'Am', role: 'preposition + article', meaning: 'on the' },
              { word: 'Montag', role: 'day of the week', meaning: 'Monday' },
              { word: 'habe', role: 'verb', meaning: 'have' },
              { word: 'ich', role: 'subject', meaning: 'I' },
            ],
            audioText: 'Am Montag habe ich Deutschkurs.',
          },
          {
            german: 'Im Januar ist es kalt.',
            english: 'In January it is cold.',
            hinglish: 'January mein thand hoti hai.',
            audioText: 'Im Januar ist es kalt.',
          },
          {
            german: 'Ich habe am 5. Mai Geburtstag.',
            english: 'My birthday is on the 5th of May.',
            hinglish: 'Mera birthday 5 May ko hai.',
            audioText: 'Ich habe am fünften Mai Geburtstag.',
          },
        ],
        realLifeContext: 'Dates and days are essential for appointments, work schedules, registration deadlines, and exam dates. You will see dates written as "05.05.2026" on forms in Germany.',
        culturalNote: 'German dates are written day.month.year: 05.05.2026 means 5 May 2026. This is different from the American month/day/year format.',
        summary: [
          'Days: Montag to Sonntag',
          'Use am with days and dates: am Montag, am 5. Mai',
          'Use im with months and years: im Januar',
          'Date format in Germany: day.month.year',
          'Wann hast du Geburtstag? — Ich habe am ... Geburtstag',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-08-02-01',
          type: 'multiple-choice',
          question: 'What is "Wednesday" in German?',
          questionHinglish: 'German mein "Wednesday" kya hai?',
          options: ['Montag', 'Mittwoch', 'Donnerstag', 'Dienstag'],
          correctAnswer: 'Mittwoch',
          explanation: 'Wednesday is "Mittwoch" — literally "mid-week".',
          explanationHinglish: 'Wednesday = Mittwoch — literally "hafte ka beech".',
          difficulty: 1,
          xpReward: 8,
          tags: ['days', 'vocabulary'],
        },
        {
          id: 'ex-a1-08-02-02',
          type: 'multiple-choice',
          question: 'Complete: "___ Montag habe ich Deutschkurs."',
          questionHinglish: 'Complete karo: "___ Montag habe ich Deutschkurs."',
          options: ['Am', 'Im', 'In', 'Um'],
          correctAnswer: 'Am',
          explanation: 'Use "am" with days: Am Montag habe ich Deutschkurs.',
          explanationHinglish: 'Din ke saath "am" use karo: Am Montag habe ich Deutschkurs.',
          difficulty: 1,
          xpReward: 8,
          tags: ['days', 'prepositions'],
        },
        {
          id: 'ex-a1-08-02-03',
          type: 'multiple-choice',
          question: 'Complete: "___ Januar ist es kalt."',
          questionHinglish: 'Complete karo: "___ Januar ist es kalt."',
          options: ['Am', 'Im', 'In', 'Um'],
          correctAnswer: 'Im',
          explanation: 'Use "im" with months: Im Januar ist es kalt.',
          explanationHinglish: 'Mahino ke saath "im" use karo: Im Januar ist es kalt.',
          difficulty: 1,
          xpReward: 8,
          tags: ['months', 'prepositions'],
        },
        {
          id: 'ex-a1-08-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Heute ist der ___ Oktober." (3rd)',
          questionHinglish: 'Complete karo: "Heute ist der ___ Oktober." (3rd)',
          options: ['drei', 'dritte', 'dritter', 'dritten'],
          correctAnswer: 'dritte',
          explanation: 'After "der", the ordinal takes the weak ending -e: der dritte Oktober.',
          explanationHinglish: '"der" ke baad ordinal weak ending -e leta hai: der dritte Oktober.',
          difficulty: 3,
          xpReward: 12,
          tags: ['dates', 'ordinals'],
        },
        {
          id: 'ex-a1-08-02-05',
          type: 'ordering',
          question: 'Arrange the days in the correct order:',
          questionHinglish: 'Dino ko sahi order mein arrange karo:',
          options: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag'],
          correctAnswer: 'Montag Dienstag Mittwoch Donnerstag',
          explanation: 'The week starts with Montag, then Dienstag, Mittwoch, Donnerstag.',
          explanationHinglish: 'Hafta Montag se shuru hota hai, phir Dienstag, Mittwoch, Donnerstag.',
          difficulty: 1,
          xpReward: 10,
          tags: ['days', 'ordering'],
        },
        {
          id: 'ex-a1-08-02-06',
          type: 'multiple-choice',
          question: 'How do you answer "Wann hast du Geburtstag?"',
          questionHinglish: '"Wann hast du Geburtstag?" ka jawab kaise doge?',
          options: ['Ich bin am 5. Mai.', 'Ich habe am 5. Mai Geburtstag.', 'Ich wohne am 5. Mai.', 'Ich komme am 5. Mai.'],
          correctAnswer: 'Ich habe am 5. Mai Geburtstag.',
          explanation: 'The fixed expression is "Ich habe am [date] Geburtstag".',
          explanationHinglish: 'Fixed expression hai "Ich habe am [date] Geburtstag".',
          difficulty: 2,
          xpReward: 10,
          tags: ['dates', 'birthday'],
        },
      ],
    },
  ],
};
