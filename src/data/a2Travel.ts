// ============================================================
// A2 MODULE 3 – TRAVEL, APPOINTMENTS & SHOPPING
// ============================================================

import type { Module } from '../types';

export const A2_MODULE_TRAVEL: Module = {
  id: 'm-a2-03',
  level: 'A2',
  title: 'Travel, Appointments & Shopping',
  titleHinglish: 'Safar, Appointment aur Shopping',
  description: 'Buy tickets, make appointments, and handle everyday shopping situations in German.',
  descriptionHinglish: 'Tickets kharido, appointments banao aur rozana shopping ki situations German mein handle karo.',
  skills: ['speaking', 'listening', 'vocabulary'],
  order: 3,
  isComplete: true,
  lessons: [
    {
      id: 'l-a2-03-01',
      level: 'A2',
      moduleId: 'm-a2-03',
      title: 'At the Train Station',
      titleHinglish: 'Train Station Par',
      objective: 'Buy a ticket, ask about platforms, and understand delays',
      objectiveHinglish: 'Ticket kharido, platform ke baare mein pucho aur delay samjho',
      estimatedMinutes: 22,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a2-02-03'],
      order: 1,
      grammarPoints: ['modal verb möchten', 'questions with wann/wo/von welchem', 'separable verb umsteigen'],
      vocabulary: [],
      content: {
        warmUp: [
          'Have you ever bought a train ticket in another language?',
          'What questions would you ask at a train station?',
        ],
        explanation: `At the train station you need short, polite phrases. Use **möchten** for polite requests.

**Buying a ticket:**
- Ich **möchte** eine Fahrkarte nach Berlin, bitte. (I would like a ticket to Berlin.)
- **Einfach oder hin und zurück?** (One-way or return?)
- Ich brauche eine **einfache Fahrt** nach Hamburg. (I need a one-way ticket to Hamburg.)

**Asking for information:**
- **Wann** fährt der nächste Zug? (When does the next train leave?)
- **Von welchem Gleis** fährt der Zug? (From which platform does the train leave?)
- **Muss ich umsteigen?** (Do I have to change trains?)
- **Wo** ist der Bahnhof? (Where is the station?)

**Problems:**
- Der Zug hat **Verspätung**. (The train is delayed.)
- Der Zug **fällt aus**. (The train is cancelled.)

**Word order with wann/wo:** The question word comes first, then the verb:
- Wann **fährt** der Zug?
- Wo **ist** der Bahnhof?

**Common mistakes:**
- ❌ Ich will eine Fahrkarte nach Berlin. (too direct)
- ✅ Ich möchte eine Fahrkarte nach Berlin, bitte.
- ❌ Ich muss umsteigen? (statement, not a question)
- ✅ Muss ich umsteigen?`,
        explanationHinglish: `Train station par chhote, polite phrases chahiye. Polite request ke liye **möchten** use karo.

**Ticket kharidna:**
- Ich **möchte** eine Fahrkarte nach Berlin, bitte. (Mujhe Berlin ki ticket chahiye.)
- **Einfach oder hin und zurück?** (Ek taraf ya aana-jaana?)
- Ich brauche eine **einfache Fahrt** nach Hamburg. (Mujhe Hamburg ki one-way ticket chahiye.)

**Information puchna:**
- **Wann** fährt der nächste Zug? (Agli train kab jaati hai?)
- **Von welchem Gleis** fährt der Zug? (Train kis platform se jaati hai?)
- **Muss ich umsteigen?** (Kya mujhe train badalni padegi?)
- **Wo** ist der Bahnhof? (Station kahan hai?)

**Problems:**
- Der Zug hat **Verspätung**. (Train late hai.)
- Der Zug **fällt aus**. (Train cancel hai.)

**Word order with wann/wo:** Question word pehle, phir verb:
- Wann **fährt** der Zug?
- Wo **ist** der Bahnhof?

**Common mistakes:**
- ❌ Ich will eine Fahrkarte nach Berlin. (bahut direct)
- ✅ Ich möchte eine Fahrkarte nach Berlin, bitte.
- ❌ Ich muss umsteigen? (statement hai, question nahi)
- ✅ Muss ich umsteigen?`,
        examples: [
          {
            german: 'Ich möchte eine Fahrkarte nach Berlin, bitte.',
            english: 'I would like a ticket to Berlin, please.',
            hinglish: 'Mujhe Berlin ki ticket chahiye, please.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'möchte', role: 'modal verb (polite)', meaning: 'would like' },
              { word: 'eine Fahrkarte', role: 'object (accusative)', meaning: 'a ticket' },
              { word: 'nach Berlin', role: 'destination', meaning: 'to Berlin' },
              { word: 'bitte', role: 'polite particle', meaning: 'please' },
            ],
            audioText: 'Ich möchte eine Fahrkarte nach Berlin, bitte.',
          },
          {
            german: 'Wann fährt der nächste Zug?',
            english: 'When does the next train leave?',
            hinglish: 'Agli train kab jaati hai?',
            audioText: 'Wann fährt der nächste Zug?',
          },
          {
            german: 'Muss ich umsteigen?',
            english: 'Do I have to change trains?',
            hinglish: 'Kya mujhe train badalni padegi?',
            audioText: 'Muss ich umsteigen?',
          },
        ],
        realLifeContext: 'Train travel is common in Germany and essential for reaching work, appointments, and cities. Knowing these phrases helps you avoid missing a connection or buying the wrong ticket.',
        culturalNote: 'German train stations use "Gleis" for platform, not "Platform". "Hin und zurück" is a return ticket; "einfach" is one-way. Ticket machines often offer English, but staff may answer in German.',
        summary: [
          'Use "Ich möchte ..." for polite requests',
          'Fahrkarte = ticket; Gleis = platform; Verspätung = delay',
          'Einfach = one-way; hin und zurück = return',
          'Wann fährt ...? and Von welchem Gleis ...? for information',
          'Muss ich umsteigen? = Do I have to change trains?',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-03-01-01',
          type: 'multiple-choice',
          question: 'Which phrase politely asks for a ticket to Berlin?',
          questionHinglish: 'Berlin ki ticket politely kaise maangoge?',
          options: [
            'Ich möchte eine Fahrkarte nach Berlin, bitte.',
            'Ich will Berlin.',
            'Wo ist Berlin?',
            'Berlin ist eine Fahrkarte.',
          ],
          correctAnswer: 'Ich möchte eine Fahrkarte nach Berlin, bitte.',
          explanation: '"Ich möchte eine Fahrkarte nach Berlin, bitte" is the standard polite request.',
          explanationHinglish: '"Ich möchte eine Fahrkarte nach Berlin, bitte" standard polite request hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'tickets', 'speaking'],
        },
        {
          id: 'ex-a2-03-01-02',
          type: 'multiple-choice',
          question: 'What does "hin und zurück" mean?',
          questionHinglish: '"hin und zurück" ka matlab kya hai?',
          options: ['One-way ticket', 'Return ticket', 'Platform', 'Delay'],
          correctAnswer: 'Return ticket',
          explanation: '"Hin und zurück" means a return ticket (there and back). "Einfach" means one-way.',
          explanationHinglish: '"Hin und zurück" ka matlab return ticket (jaana aur aana). "Einfach" one-way hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'vocabulary'],
        },
        {
          id: 'ex-a2-03-01-03',
          type: 'multiple-choice',
          question: 'What does "Muss ich umsteigen?" mean?',
          questionHinglish: '"Muss ich umsteigen?" ka matlab kya hai?',
          options: [
            'Do I have to change trains?',
            'Where is the train?',
            'Is the train late?',
            'Can I buy a ticket?',
          ],
          correctAnswer: 'Do I have to change trains?',
          explanation: '"umsteigen" means to change trains/buses. "Muss ich ...?" means "Do I have to ...?"',
          explanationHinglish: '"umsteigen" ka matlab train/bus badalna. "Muss ich ...?" ka matlab "Kya mujhe ... karna hai?"',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'umsteigen'],
        },
        {
          id: 'ex-a2-03-01-04',
          type: 'ordering',
          question: 'Arrange the words into a question: "Wann / fährt / der / nächste / Zug / ?"',
          questionHinglish: 'Sahi question banao: "Wann / fährt / der / nächste / Zug / ?"',
          options: ['Wann', 'fährt', 'der', 'nächste', 'Zug', '?'],
          correctAnswer: 'Wann fährt der nächste Zug ?',
          explanation: 'Question word first, then the verb: Wann fährt der nächste Zug?',
          explanationHinglish: 'Question word pehle, phir verb: Wann fährt der nächste Zug?',
          difficulty: 2,
          xpReward: 12,
          tags: ['travel', 'word-order'],
        },
        {
          id: 'ex-a2-03-01-05',
          type: 'typing',
          question: 'Translate: "I would like a ticket to Munich."',
          questionHinglish: 'Translate karo: "I would like a ticket to Munich."',
          correctAnswer: 'Ich möchte eine Fahrkarte nach München.',
          explanation: 'Use "Ich möchte eine Fahrkarte nach ..." for a polite ticket request.',
          explanationHinglish: 'Polite ticket request ke liye "Ich möchte eine Fahrkarte nach ..." use karo.',
          difficulty: 3,
          xpReward: 12,
          tags: ['travel', 'typing'],
        },
      ],
    },
    {
      id: 'l-a2-03-02',
      level: 'A2',
      moduleId: 'm-a2-03',
      title: 'Appointments & Phone Calls',
      titleHinglish: 'Appointment aur Phone Calls',
      objective: 'Make, confirm, and cancel appointments politely',
      objectiveHinglish: 'Politely appointment banao, confirm karo aur cancel karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a2-03-01'],
      order: 2,
      grammarPoints: ['formal Sie', 'time prepositions am/um', 'es passt mir'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you make an appointment in your language?',
          'What do you say when a time does not suit you?',
        ],
        explanation: `Appointments are part of everyday life in Germany: doctor, office, hairdresser, or language course. Use **Sie** for formal situations.

**Making an appointment:**
- Ich **möchte einen Termin vereinbaren**. (I would like to make an appointment.)
- **Haben Sie am Montag Zeit?** (Do you have time on Monday?)
- **Passt es Ihnen um zehn Uhr?** (Does ten o'clock suit you?)

**Responding:**
- Ja, das **passt mir gut**. (Yes, that suits me.)
- Leider **passt es mir nicht**. (Unfortunately, it does not suit me.)
- **Können wir einen anderen Termin finden?** (Can we find another appointment?)

**Changing or cancelling:**
- Ich muss den Termin **absagen**. (I have to cancel the appointment.)
- Ich möchte den Termin **verschieben**. (I would like to postpone the appointment.)
- Ich **rufe später zurück**. (I will call back later.)
- **Können Sie mich bitte zurückrufen?** (Can you please call me back?)

**Time prepositions:**
- **am** Montag (on Monday), **am** 5. Mai (on 5 May)
- **um** zehn Uhr (at ten o'clock)

**Common mistakes:**
- ❌ Ich möchte ein Termin. → ✅ Ich möchte einen Termin. (der Termin, accusative)
- ❌ Am zehn Uhr. → ✅ Um zehn Uhr. (clock time uses um)`,
        explanationHinglish: `Germany mein appointments rozana life ka part hain: doctor, office, hairdresser ya language course. Formal situations mein **Sie** use karo.

**Appointment banana:**
- Ich **möchte einen Termin vereinbaren**. (Main appointment banana chahta hoon.)
- **Haben Sie am Montag Zeit?** (Aapke paas Monday ko time hai?)
- **Passt es Ihnen um zehn Uhr?** (Aapko 10 baje theek hai?)

**Jawab dena:**
- Ja, das **passt mir gut**. (Haan, mujhe theek hai.)
- Leider **passt es mir nicht**. (Unfortunately, mujhe theek nahi hai.)
- **Können wir einen anderen Termin finden?** (Kya hum dusra appointment dhundh sakte hain?)

**Change ya cancel karna:**
- Ich muss den Termin **absagen**. (Mujhe appointment cancel karna hai.)
- Ich möchte den Termin **verschieben**. (Main appointment postpone karna chahta hoon.)
- Ich **rufe später zurück**. (Main baad mein call back karunga.)
- **Können Sie mich bitte zurückrufen?** (Kya aap mujhe call back kar sakte hain?)

**Time prepositions:**
- **am** Montag (Monday ko), **am** 5. Mai (5 May ko)
- **um** zehn Uhr (10 baje)

**Common mistakes:**
- ❌ Ich möchte ein Termin. → ✅ Ich möchte einen Termin. (der Termin, accusative)
- ❌ Am zehn Uhr. → ✅ Um zehn Uhr. (clock time ke saath um)`,
        examples: [
          {
            german: 'Ich möchte einen Termin vereinbaren.',
            english: 'I would like to make an appointment.',
            hinglish: 'Main appointment banana chahta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'möchte', role: 'modal verb (polite)', meaning: 'would like' },
              { word: 'einen Termin', role: 'object (masculine accusative)', meaning: 'an appointment' },
              { word: 'vereinbaren', role: 'infinitive (end)', meaning: 'to arrange' },
            ],
            audioText: 'Ich möchte einen Termin vereinbaren.',
          },
          {
            german: 'Passt es Ihnen um zehn Uhr?',
            english: 'Does ten o\'clock suit you?',
            hinglish: 'Aapko 10 baje theek hai?',
            audioText: 'Passt es Ihnen um zehn Uhr?',
          },
          {
            german: 'Ich muss den Termin leider absagen.',
            english: 'Unfortunately, I have to cancel the appointment.',
            hinglish: 'Unfortunately, mujhe appointment cancel karna hai.',
            audioText: 'Ich muss den Termin leider absagen.',
          },
        ],
        realLifeContext: 'You will need appointments for the Ausländerbehörde, doctor, bank, and language school. Being able to reschedule politely is especially important in Germany, where appointments are planned carefully.',
        culturalNote: 'Punctuality matters. Arrive on time, and cancel as early as possible if you cannot come. "Termin" is used for almost any scheduled appointment, not just medical ones.',
        summary: [
          'Ich möchte einen Termin vereinbaren = I would like to make an appointment',
          'Haben Sie am Montag Zeit? = Do you have time on Monday?',
          'Das passt mir gut / nicht = That suits me / does not suit me',
          'absagen = cancel; verschieben = postpone',
          'am + day/date, um + clock time',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-03-02-01',
          type: 'multiple-choice',
          question: 'Which phrase means "I would like to make an appointment"?',
          questionHinglish: 'Kaun sa phrase "I would like to make an appointment" hai?',
          options: [
            'Ich möchte einen Termin vereinbaren.',
            'Ich habe einen Termin.',
            'Ich möchte einen Termin absagen.',
            'Ich brauche keine Zeit.',
          ],
          correctAnswer: 'Ich möchte einen Termin vereinbaren.',
          explanation: '"vereinbaren" means to arrange/make an appointment. "absagen" means to cancel.',
          explanationHinglish: '"vereinbaren" ka matlab appointment banana. "absagen" ka matlab cancel karna.',
          difficulty: 2,
          xpReward: 10,
          tags: ['appointments', 'speaking'],
        },
        {
          id: 'ex-a2-03-02-02',
          type: 'multiple-choice',
          question: 'Which is the formal way to ask "Do you have time on Monday?"',
          questionHinglish: '"Do you have time on Monday?" ka formal version kaun sa hai?',
          options: [
            'Hast du am Montag Zeit?',
            'Haben Sie am Montag Zeit?',
            'Hat er am Montag Zeit?',
            'Habt ihr am Montag Zeit?',
          ],
          correctAnswer: 'Haben Sie am Montag Zeit?',
          explanation: 'Use "Sie" (capital S) for formal "you": Haben Sie am Montag Zeit?',
          explanationHinglish: 'Formal "you" ke liye "Sie" (capital S): Haben Sie am Montag Zeit?',
          difficulty: 2,
          xpReward: 10,
          tags: ['appointments', 'formal'],
        },
        {
          id: 'ex-a2-03-02-03',
          type: 'multiple-choice',
          question: 'What does "Das passt mir gut" mean?',
          questionHinglish: '"Das passt mir gut" ka matlab kya hai?',
          options: ['That suits me well', 'That is too expensive', 'That is wrong', 'That is cancelled'],
          correctAnswer: 'That suits me well',
          explanation: '"passt mir" means "suits me". "Das passt mir gut" = That suits me well.',
          explanationHinglish: '"passt mir" ka matlab mujhe suit karta hai. "Das passt mir gut" = Mujhe theek hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['appointments', 'vocabulary'],
        },
        {
          id: 'ex-a2-03-02-04',
          type: 'ordering',
          question: 'Arrange the words into a polite question: "Können / Sie / mich / bitte / zurückrufen / ?"',
          questionHinglish: 'Sahi polite question banao: "Können / Sie / mich / bitte / zurückrufen / ?"',
          options: ['Können', 'Sie', 'mich', 'bitte', 'zurückrufen', '?'],
          correctAnswer: 'Können Sie mich bitte zurückrufen ?',
          explanation: 'Modal verb first, then subject, object, "bitte", and infinitive at the end.',
          explanationHinglish: 'Modal verb pehle, phir subject, object, "bitte", aur infinitive end par.',
          difficulty: 2,
          xpReward: 12,
          tags: ['appointments', 'word-order'],
        },
        {
          id: 'ex-a2-03-02-05',
          type: 'typing',
          question: 'Translate: "I would like to cancel the appointment."',
          questionHinglish: 'Translate karo: "I would like to cancel the appointment."',
          correctAnswer: 'Ich möchte den Termin absagen.',
          explanation: 'Use "den Termin" (accusative) + "absagen": Ich möchte den Termin absagen.',
          explanationHinglish: '"den Termin" (accusative) + "absagen" use karo: Ich möchte den Termin absagen.',
          difficulty: 3,
          xpReward: 12,
          tags: ['appointments', 'typing'],
        },
      ],
    },
    {
      id: 'l-a2-03-03',
      level: 'A2',
      moduleId: 'm-a2-03',
      title: 'Shopping & Complaints',
      titleHinglish: 'Shopping aur Complaint',
      objective: 'Ask for sizes, try on clothes, exchange items, and complain politely',
      objectiveHinglish: 'Size pucho, kapde try karo, exchange karo aur politely complaint karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a2-03-02'],
      order: 3,
      grammarPoints: ['accusative articles', 'zu + adjective', 'polite questions with können'],
      vocabulary: [],
      content: {
        warmUp: [
          'What do you say when clothes do not fit?',
          'How do you ask to try something on?',
        ],
        explanation: `Shopping phrases help you solve problems without switching to English.

**Looking for something:**
- Ich **suche** einen Pullover. (I am looking for a sweater.)
- **Haben Sie das in einer anderen Farbe?** (Do you have this in another colour?)
- Ich brauche **Größe M**. (I need size M.)

**Trying on and deciding:**
- **Kann ich das anprobieren?** (Can I try this on?)
- Das **passt nicht**. (That does not fit.)
- Das ist **zu teuer**. (That is too expensive.)
- Das ist **zu klein / zu groß**. (That is too small / too big.)

**Exchanging and returning:**
- **Kann ich das umtauschen?** (Can I exchange this?)
- Ich möchte das **zurückgeben**. (I would like to return this.)
- Ich habe die **Rechnung** dabei. (I have the receipt with me.)

**Paying:**
- Ich bezahle **mit Karte**. (I am paying by card.)
- **Die Rechnung, bitte.** (The bill, please.)

**Accusative articles:** after "suchen", "haben", "möchte":
- der Pullover → Ich suche **einen** Pullover.
- das Hemd → Ich suche **ein** Hemd.
- die Jacke → Ich suche **eine** Jacke.

**Common mistakes:**
- ❌ Ich suche ein Pullover. → ✅ Ich suche einen Pullover. (der Pullover)
- ❌ Das ist teuer zu. → ✅ Das ist zu teuer.`,
        explanationHinglish: `Shopping phrases se tum problems English mein switch kiye bina solve kar sakte ho.

**Kuch dhundhna:**
- Ich **suche** einen Pullover. (Main sweater dhundh raha hoon.)
- **Haben Sie das in einer anderen Farbe?** (Yeh dusre colour mein hai?)
- Ich brauche **Größe M**. (Mujhe size M chahiye.)

**Try karna aur decide karna:**
- **Kann ich das anprobieren?** (Kya main ise try kar sakta hoon?)
- Das **passt nicht**. (Yeh fit nahi hota.)
- Das ist **zu teuer**. (Yeh bahut mehnga hai.)
- Das ist **zu klein / zu groß**. (Yeh bahut chhota / bada hai.)

**Exchange aur return:**
- **Kann ich das umtauschen?** (Kya main ise exchange kar sakta hoon?)
- Ich möchte das **zurückgeben**. (Main ise return karna chahta hoon.)
- Ich habe die **Rechnung** dabei. (Mere paas receipt hai.)

**Payment:**
- Ich bezahle **mit Karte**. (Main card se pay karta hoon.)
- **Die Rechnung, bitte.** (Bill, please.)

**Accusative articles:** "suchen", "haben", "möchte" ke baad:
- der Pullover → Ich suche **einen** Pullover.
- das Hemd → Ich suche **ein** Hemd.
- die Jacke → Ich suche **eine** Jacke.

**Common mistakes:**
- ❌ Ich suche ein Pullover. → ✅ Ich suche einen Pullover. (der Pullover)
- ❌ Das ist teuer zu. → ✅ Das ist zu teuer.`,
        examples: [
          {
            german: 'Ich suche einen Pullover.',
            english: 'I am looking for a sweater.',
            hinglish: 'Main sweater dhundh raha hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'suche', role: 'verb', meaning: 'am looking for' },
              { word: 'einen Pullover', role: 'object (masculine accusative)', meaning: 'a sweater' },
            ],
            audioText: 'Ich suche einen Pullover.',
          },
          {
            german: 'Kann ich das umtauschen?',
            english: 'Can I exchange this?',
            hinglish: 'Kya main ise exchange kar sakta hoon?',
            audioText: 'Kann ich das umtauschen?',
          },
          {
            german: 'Das ist zu teuer.',
            english: 'That is too expensive.',
            hinglish: 'Yeh bahut mehnga hai.',
            audioText: 'Das ist zu teuer.',
          },
        ],
        realLifeContext: 'Shopping is a practical A2 situation: clothes, electronics, groceries, and returns. Germans often expect you to state the problem directly but politely, for example "Das passt nicht" or "Kann ich das umtauschen?"',
        culturalNote: 'In many German shops, exchanges are possible with a receipt, but refunds are not always automatic. "Umtauschen" means exchange; "zurückgeben" means return. Keep the "Kassenbon" or "Rechnung".',
        summary: [
          'Ich suche einen Pullover = I am looking for a sweater',
          'Kann ich das anprobieren? = Can I try this on?',
          'Das passt nicht / Das ist zu teuer = It does not fit / It is too expensive',
          'Kann ich das umtauschen? = Can I exchange this?',
          'Masculine accusative: einen Pullover; neuter: ein Hemd; feminine: eine Jacke',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-03-03-01',
          type: 'multiple-choice',
          question: 'Which phrase means "Can I exchange this?"',
          questionHinglish: 'Kaun sa phrase "Can I exchange this?" hai?',
          options: [
            'Kann ich das umtauschen?',
            'Kann ich das anprobieren?',
            'Kann ich das zurückgeben?',
            'Kann ich das bezahlen?',
          ],
          correctAnswer: 'Kann ich das umtauschen?',
          explanation: '"umtauschen" means to exchange. "anprobieren" means to try on; "zurückgeben" means to return.',
          explanationHinglish: '"umtauschen" ka matlab exchange. "anprobieren" try karna; "zurückgeben" return karna.',
          difficulty: 2,
          xpReward: 10,
          tags: ['shopping', 'vocabulary'],
        },
        {
          id: 'ex-a2-03-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich suche ___ Pullover." (der Pullover)',
          questionHinglish: 'Complete karo: "Ich suche ___ Pullover." (der Pullover)',
          options: ['ein', 'einen', 'eine', 'einem'],
          correctAnswer: 'einen',
          explanation: '"Pullover" is masculine. After "suchen", the accusative form is "einen Pullover".',
          explanationHinglish: '"Pullover" masculine hai. "suchen" ke baad accusative "einen Pullover" hota hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['shopping', 'accusative'],
        },
        {
          id: 'ex-a2-03-03-03',
          type: 'multiple-choice',
          question: 'What does "Das ist zu teuer" mean?',
          questionHinglish: '"Das ist zu teuer" ka matlab kya hai?',
          options: ['That is too expensive', 'That is too small', 'That is very cheap', 'That is broken'],
          correctAnswer: 'That is too expensive',
          explanation: '"zu" + adjective means "too ...": zu teuer = too expensive.',
          explanationHinglish: '"zu" + adjective ka matlab "bahut zyada ...": zu teuer = bahut mehnga.',
          difficulty: 1,
          xpReward: 8,
          tags: ['shopping', 'vocabulary'],
        },
        {
          id: 'ex-a2-03-03-04',
          type: 'ordering',
          question: 'Arrange the words into a question: "Kann / ich / das / anprobieren / ?"',
          questionHinglish: 'Sahi question banao: "Kann / ich / das / anprobieren / ?"',
          options: ['Kann', 'ich', 'das', 'anprobieren', '?'],
          correctAnswer: 'Kann ich das anprobieren ?',
          explanation: 'Modal verb first, then subject and object, with the infinitive at the end.',
          explanationHinglish: 'Modal verb pehle, phir subject aur object, infinitive end par.',
          difficulty: 2,
          xpReward: 12,
          tags: ['shopping', 'word-order'],
        },
        {
          id: 'ex-a2-03-03-05',
          type: 'typing',
          question: 'Translate: "I would like to return this."',
          questionHinglish: 'Translate karo: "I would like to return this."',
          correctAnswer: 'Ich möchte das zurückgeben.',
          explanation: 'Use "Ich möchte ... zurückgeben": Ich möchte das zurückgeben.',
          explanationHinglish: '"Ich möchte ... zurückgeben" use karo: Ich möchte das zurückgeben.',
          difficulty: 3,
          xpReward: 12,
          tags: ['shopping', 'typing'],
        },
      ],
    },
  ],
};
