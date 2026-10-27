// ============================================================
// A1 MODULE 14 – WORK, TRANSPORT & TRAVEL
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_WORKTRAVEL: Module = {
  id: 'm-a1-14',
  level: 'A1',
  title: 'Work, Transport & Travel',
  titleHinglish: 'Kaam, Transport aur Safar',
  description: 'Talk about jobs, use transport, and handle basic travel situations.',
  descriptionHinglish: 'Jobs ke baare mein bolo, transport use karo aur basic travel situations handle karo.',
  skills: ['speaking', 'listening', 'vocabulary'],
  order: 14,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-14-01',
      level: 'A1',
      moduleId: 'm-a1-14',
      title: 'Jobs & Work',
      titleHinglish: 'Jobs aur Kaam',
      objective: 'Talk about your job and where you work',
      objectiveHinglish: 'Apni job aur kahan kaam karte ho, ye batao',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a1-13-03'],
      order: 1,
      grammarPoints: ['von Beruf sein', 'arbeiten als', 'feminine job forms'],
      vocabulary: [],
      content: {
        warmUp: [
          'What is your job or dream job?',
          'Do you work in an office, a shop, or somewhere else?',
        ],
        explanation: `**Asking about jobs:**
- **Was bist du von Beruf?** = What is your job? (informal)
- **Was sind Sie von Beruf?** = What is your job? (formal)
- **Was machst du?** = What do you do?

**Answering:**
- Ich **bin** Lehrer. = I am a teacher.
- Ich **bin** Lehrerin. = I am a teacher. (female)
- Ich **arbeite als** Lehrer. = I work as a teacher.
- Ich **arbeite bei** Siemens. = I work at Siemens.
- Ich **arbeite in** einem Büro. = I work in an office.
- Ich **arbeite** im Krankenhaus. = I work in a hospital.

**Common jobs:**
- der **Lehrer** / die **Lehrerin** = teacher
- der **Arzt** / die **Ärztin** = doctor
- der **Verkäufer** / die **Verkäuferin** = salesperson
- der **Koch** / die **Köchin** = cook
- der **Ingenieur** / die **Ingenieurin** = engineer
- der **Student** / die **Studentin** = student
- der **Fahrer** / die **Fahrerin** = driver
- der **Krankenpfleger** / die **Krankenpflegerin** = nurse

**Feminine forms:** many jobs add **-in**:
- Lehrer → Lehrerin
- Arzt → Ärztin
- Koch → Köchin

**Describing work:**
- Meine Arbeit ist **interessant / stressig / langweilig**.
- Ich arbeite **von neun bis fünf**.
- Ich habe **viel / wenig** Arbeit.
- Ich **verdiene** Geld.

**Common mistakes:**
- ❌ Ich bin ein Lehrer. (usually no article for professions) → ✅ Ich bin Lehrer.
- ❌ Ich arbeite wie Lehrer. → ✅ Ich arbeite **als** Lehrer.
- ❌ Ich bin Lehrerin (for a man) → ✅ Ich bin Lehrer.`,
        explanationHinglish: `**Job ke baare mein puchna:**
- **Was bist du von Beruf?** = Tumhara profession kya hai? (informal)
- **Was sind Sie von Beruf?** = Aapka profession kya hai? (formal)
- **Was machst du?** = Tum kya karte ho?

**Answering:**
- Ich **bin** Lehrer. = Main teacher hoon.
- Ich **bin** Lehrerin. = Main teacher hoon. (female)
- Ich **arbeite als** Lehrer. = Main teacher ke roop mein kaam karta hoon.
- Ich **arbeite bei** Siemens. = Main Siemens mein kaam karta hoon.
- Ich **arbeite in** einem Büro. = Main office mein kaam karta hoon.
- Ich **arbeite** im Krankenhaus. = Main hospital mein kaam karta hoon.

**Common jobs:**
- der **Lehrer** / die **Lehrerin** = teacher
- der **Arzt** / die **Ärztin** = doctor
- der **Verkäufer** / die **Verkäuferin** = salesperson
- der **Koch** / die **Köchin** = cook
- der **Ingenieur** / die **Ingenieurin** = engineer
- der **Student** / die **Studentin** = student
- der **Fahrer** / die **Fahrerin** = driver
- der **Krankenpfleger** / die **Krankenpflegerin** = nurse

**Feminine forms:** bahut jobs mein **-in** lagta hai:
- Lehrer → Lehrerin
- Arzt → Ärztin
- Koch → Köchin

**Work describe karna:**
- Meine Arbeit ist **interessant / stressig / langweilig**.
- Ich arbeite **von neun bis fünf**.
- Ich habe **viel / wenig** Arbeit.
- Ich **verdiene** Geld.

**Common mistakes:**
- ❌ Ich bin ein Lehrer. → ✅ Ich bin Lehrer. (profession ke saath article nahi)
- ❌ Ich arbeite wie Lehrer. → ✅ Ich arbeite **als** Lehrer.
- ❌ Ich bin Lehrerin (for a man) → ✅ Ich bin Lehrer.`,
        examples: [
          {
            german: 'Was bist du von Beruf?',
            english: 'What is your job?',
            hinglish: 'Tumhara profession kya hai?',
            breakdown: [
              { word: 'Was', role: 'question word', meaning: 'what' },
              { word: 'bist', role: 'verb', meaning: 'are' },
              { word: 'du', role: 'subject', meaning: 'you' },
              { word: 'von Beruf', role: 'fixed phrase', meaning: 'by profession' },
            ],
            audioText: 'Was bist du von Beruf?',
          },
          {
            german: 'Ich arbeite als Lehrer.',
            english: 'I work as a teacher.',
            hinglish: 'Main teacher ke roop mein kaam karta hoon.',
            audioText: 'Ich arbeite als Lehrer.',
          },
          {
            german: 'Sie arbeitet in einem Büro.',
            english: 'She works in an office.',
            hinglish: 'Woh office mein kaam karti hai.',
            audioText: 'Sie arbeitet in einem Büro.',
          },
        ],
        realLifeContext: 'Job vocabulary is essential for introductions, applications, and small talk. You will also need it to understand work schedules and contracts.',
        culturalNote: 'In German, professions are usually used without an article: "Ich bin Lehrer." Adding "ein" sounds like you are describing a role in a film rather than your job.',
        summary: [
          'Was bist du von Beruf? = What is your job?',
          'Ich bin Lehrer / Lehrerin',
          'Ich arbeite als ... / bei ... / in ...',
          'Many feminine job forms add -in',
          'No article before professions: Ich bin Lehrer',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-14-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Was bist du von ___?"',
          questionHinglish: 'Complete karo: "Was bist du von ___?"',
          options: ['Beruf', 'Arbeit', 'Job', 'Name'],
          correctAnswer: 'Beruf',
          explanation: 'The fixed question is "Was bist du von Beruf?"',
          explanationHinglish: 'Fixed question "Was bist du von Beruf?" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['work', 'questions'],
        },
        {
          id: 'ex-a1-14-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich arbeite ___ Lehrer."',
          questionHinglish: 'Complete karo: "Ich arbeite ___ Lehrer."',
          options: ['als', 'wie', 'bei', 'in'],
          correctAnswer: 'als',
          explanation: 'Use "als" to say what role you work in: Ich arbeite als Lehrer.',
          explanationHinglish: 'Role batane ke liye "als": Ich arbeite als Lehrer.',
          difficulty: 1,
          xpReward: 8,
          tags: ['work', 'prepositions'],
        },
        {
          id: 'ex-a1-14-01-03',
          type: 'multiple-choice',
          question: 'She is a doctor. He is a ___.',
          questionHinglish: 'Woh doctor hai (female). Woh doctor hai (male) ___.',
          options: ['Arzt', 'Ärztin', 'Arbeiter', 'Lehrerin'],
          correctAnswer: 'Arzt',
          explanation: 'The masculine form of "Ärztin" is "Arzt".',
          explanationHinglish: '"Ärztin" ka masculine form "Arzt" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['work', 'vocabulary'],
        },
        {
          id: 'ex-a1-14-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / arbeite / in einem Büro / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / arbeite / in einem Büro / ."',
          options: ['Ich', 'arbeite', 'in einem Büro', '.'],
          correctAnswer: 'Ich arbeite in einem Büro .',
          explanation: 'Subject + verb + place: Ich arbeite in einem Büro.',
          explanationHinglish: 'Subject + verb + place: Ich arbeite in einem Büro.',
          difficulty: 1,
          xpReward: 10,
          tags: ['work', 'word-order'],
        },
        {
          id: 'ex-a1-14-01-05',
          type: 'typing',
          question: 'Translate: "I work as a teacher."',
          questionHinglish: 'Translate karo: "I work as a teacher."',
          correctAnswer: 'Ich arbeite als Lehrer.',
          explanation: 'Use "arbeiten als" + profession: Ich arbeite als Lehrer.',
          explanationHinglish: '"arbeiten als" + profession: Ich arbeite als Lehrer.',
          difficulty: 2,
          xpReward: 10,
          tags: ['work', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-14-02',
      level: 'A1',
      moduleId: 'm-a1-14',
      title: 'Transport & Getting Around',
      titleHinglish: 'Transport aur Aana-Jaana',
      objective: 'Talk about how you travel and use public transport',
      objectiveHinglish: 'Kaise travel karte ho batao aur public transport use karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-14-01'],
      order: 2,
      grammarPoints: ['mit + dative', 'nehmen + accusative', 'zu Fuß'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you get to school or work?',
          'Do you prefer the bus, the train, or walking?',
        ],
        explanation: `**Means of transport:**
- der **Bus** = bus
- der **Zug** = train
- die **U-Bahn** = underground / metro
- die **Straßenbahn** = tram
- das **Fahrrad** = bicycle
- das **Auto** = car
- das **Flugzeug** = plane
- das **Taxi** = taxi

**How you travel:**
- Ich fahre **mit dem Bus**. = I go by bus.
- Ich fahre **mit dem Zug**. = I go by train.
- Ich fahre **mit dem Fahrrad**. = I go by bicycle.
- Ich fahre **mit dem Auto**. = I go by car.
- Ich **fliege** mit dem Flugzeug. = I fly by plane.
- Ich gehe **zu Fuß**. = I walk / go on foot.

**"nehmen" for public transport:**
- Ich **nehme den Bus**. = I take the bus.
- Ich **nehme den Zug**. = I take the train.
- Ich **nehme die U-Bahn**. = I take the metro.
Here the transport is the direct object → **accusative**.

**Asking about transport:**
- **Wann** fährt der Zug? = When does the train leave?
- **Wo** ist die Haltestelle? = Where is the stop?
- **Wie** kommst du zur Arbeit? = How do you get to work?
- Der Bus **kommt** um acht Uhr. = The bus comes at eight.

**Useful verbs:**
- fahren = to go (by vehicle) / to drive
- fliegen = to fly
- nehmen = to take
- kommen = to come
- warten = to wait

**Common mistakes:**
- ❌ Ich fahre mit der Bus. → ✅ Ich fahre mit **dem** Bus.
- ❌ Ich nehme dem Zug. → ✅ Ich nehme **den** Zug.
- ❌ Ich gehe mit Fuß. → ✅ Ich gehe **zu Fuß**.`,
        explanationHinglish: `**Means of transport:**
- der **Bus** = bus
- der **Zug** = train
- die **U-Bahn** = metro
- die **Straßenbahn** = tram
- das **Fahrrad** = cycle
- das **Auto** = car
- das **Flugzeug** = plane
- das **Taxi** = taxi

**Kaise travel karte ho:**
- Ich fahre **mit dem Bus**. = Main bus se jaata hoon.
- Ich fahre **mit dem Zug**. = Main train se jaata hoon.
- Ich fahre **mit dem Fahrrad**. = Main cycle se jaata hoon.
- Ich fahre **mit dem Auto**. = Main car se jaata hoon.
- Ich **fliege** mit dem Flugzeug. = Main plane se udta hoon.
- Ich gehe **zu Fuß**. = Main paidal jaata hoon.

**Public transport ke liye "nehmen":**
- Ich **nehme den Bus**. = Main bus leta hoon.
- Ich **nehme den Zug**. = Main train leta hoon.
- Ich **nehme die U-Bahn**. = Main metro leta hoon.
Yahan transport direct object hai → **accusative**.

**Transport ke baare mein puchna:**
- **Wann** fährt der Zug? = Train kab jaati hai?
- **Wo** ist die Haltestelle? = Stop kahan hai?
- **Wie** kommst du zur Arbeit? = Tum kaam par kaise jaate ho?
- Der Bus **kommt** um acht Uhr. = Bus aath baje aata hai.

**Useful verbs:**
- fahren = vehicle se jaana / drive karna
- fliegen = udna
- nehmen = lena
- kommen = aana
- warten = wait karna

**Common mistakes:**
- ❌ Ich fahre mit der Bus. → ✅ Ich fahre mit **dem** Bus.
- ❌ Ich nehme dem Zug. → ✅ Ich nehme **den** Zug.
- ❌ Ich gehe mit Fuß. → ✅ Ich gehe **zu Fuß**.`,
        examples: [
          {
            german: 'Ich fahre mit dem Bus.',
            english: 'I go by bus.',
            hinglish: 'Main bus se jaata hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'fahre', role: 'verb', meaning: 'go / drive' },
              { word: 'mit dem Bus', role: 'dative phrase', meaning: 'by bus' },
            ],
            audioText: 'Ich fahre mit dem Bus.',
          },
          {
            german: 'Ich nehme den Zug.',
            english: 'I take the train.',
            hinglish: 'Main train leta hoon.',
            audioText: 'Ich nehme den Zug.',
          },
          {
            german: 'Ich gehe zu Fuß.',
            english: 'I walk.',
            hinglish: 'Main paidal jaata hoon.',
            audioText: 'Ich gehe zu Fuß.',
          },
        ],
        realLifeContext: 'Transport phrases are essential for commuting, buying tickets, and asking for directions. You will use them every day in a German-speaking city.',
        culturalNote: 'German public transport often runs on an honour system: you buy and validate a ticket before travelling. Inspectors ("Kontrolleure") can fine you for riding without a valid ticket.',
        summary: [
          'mit + dative: mit dem Bus, mit dem Zug',
          'nehmen + accusative: Ich nehme den Bus',
          'Ich gehe zu Fuß = I walk',
          'Wann fährt der Zug? = When does the train leave?',
          'Use fahren for vehicles, fliegen for planes',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-14-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich fahre ___ dem Bus."',
          questionHinglish: 'Complete karo: "Ich fahre ___ dem Bus."',
          options: ['mit', 'von', 'zu', 'in'],
          correctAnswer: 'mit',
          explanation: 'Use "mit" + dative for means of transport: mit dem Bus.',
          explanationHinglish: 'Transport ke liye "mit" + dative: mit dem Bus.',
          difficulty: 1,
          xpReward: 8,
          tags: ['transport', 'prepositions'],
        },
        {
          id: 'ex-a1-14-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich nehme ___ Zug."',
          questionHinglish: 'Complete karo: "Ich nehme ___ Zug."',
          options: ['den', 'dem', 'der', 'das'],
          correctAnswer: 'den',
          explanation: '"nehmen" takes the accusative. "Zug" is masculine, so "den Zug".',
          explanationHinglish: '"nehmen" accusative leta hai. "Zug" masculine hai, isliye "den Zug".',
          difficulty: 2,
          xpReward: 10,
          tags: ['transport', 'accusative'],
        },
        {
          id: 'ex-a1-14-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich gehe ___ Fuß."',
          questionHinglish: 'Complete karo: "Ich gehe ___ Fuß."',
          options: ['zu', 'mit', 'in', 'auf'],
          correctAnswer: 'zu',
          explanation: 'The fixed phrase is "zu Fuß gehen" = to walk.',
          explanationHinglish: 'Fixed phrase "zu Fuß gehen" hai = paidal jaana.',
          difficulty: 1,
          xpReward: 8,
          tags: ['transport', 'expressions'],
        },
        {
          id: 'ex-a1-14-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Der Zug / fährt / um acht Uhr / ."',
          questionHinglish: 'Sahi sentence banao: "Der Zug / fährt / um acht Uhr / ."',
          options: ['Der Zug', 'fährt', 'um acht Uhr', '.'],
          correctAnswer: 'Der Zug fährt um acht Uhr .',
          explanation: 'Subject + verb + time: Der Zug fährt um acht Uhr.',
          explanationHinglish: 'Subject + verb + time: Der Zug fährt um acht Uhr.',
          difficulty: 2,
          xpReward: 10,
          tags: ['transport', 'word-order'],
        },
        {
          id: 'ex-a1-14-02-05',
          type: 'typing',
          question: 'Translate: "I go by bus."',
          questionHinglish: 'Translate karo: "I go by bus."',
          correctAnswer: 'Ich fahre mit dem Bus.',
          explanation: 'Use "fahren mit" + dative: Ich fahre mit dem Bus.',
          explanationHinglish: '"fahren mit" + dative: Ich fahre mit dem Bus.',
          difficulty: 1,
          xpReward: 8,
          tags: ['transport', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-14-03',
      level: 'A1',
      moduleId: 'm-a1-14',
      title: 'Travel, Hotels & Directions',
      titleHinglish: 'Safar, Hotels aur Directions',
      objective: 'Book a hotel room and ask for basic travel information',
      objectiveHinglish: 'Hotel room book karo aur basic travel information pucho',
      estimatedMinutes: 22,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-14-02'],
      order: 3,
      grammarPoints: ['in den Urlaub', 'hotel requests', 'polite questions'],
      vocabulary: [],
      content: {
        warmUp: [
          'What do you say when you arrive at a hotel?',
          'How do you ask how much a room costs?',
        ],
        explanation: `**Travel phrases:**
- Ich fahre **in den Urlaub**. = I am going on holiday.
- Ich **reise** nach Deutschland. = I travel to Germany.
- Ich **fliege** nach Berlin. = I fly to Berlin.
- Ich **fahre** nach Wien. = I go to Vienna.
- Ich bin **im Urlaub**. = I am on holiday.

**At the hotel:**
- Ich **brauche** ein Zimmer. = I need a room.
- **Haben** Sie ein Zimmer **frei**? = Do you have a room available?
- Ich **möchte** ein **Einzelzimmer**. = I would like a single room.
- Ich **möchte** ein **Doppelzimmer**. = I would like a double room.
- **Für** zwei **Nächte**. = For two nights.
- Ich habe eine **Reservierung**. = I have a reservation.
- **Wie viel kostet** das Zimmer? = How much does the room cost?
- **Ist** das Frühstück **inklusive**? = Is breakfast included?
- **Wo** ist der **Bahnhof**? = Where is the station?
- **Wann** ist der **Check-out**? = When is check-out?

**Polite requests:**
- Ich **möchte** ... = I would like ...
- **Könnten** Sie ...? = Could you ...?
- **Entschuldigung**, ... = Excuse me, ...

**Useful nouns:**
- die **Nacht** = night
- der **Schlüssel** = key
- das **Frühstück** = breakfast
- die **Rezeption** = reception
- der **Bahnhof** = train station
- der **Flughafen** = airport

**Common mistakes:**
- ❌ Ich fahre in Urlaub. → ✅ Ich fahre **in den** Urlaub.
- ❌ Wie viel kostet der Zimmer? → ✅ Wie viel kostet **das** Zimmer?
- ❌ Ich möchte ein Zimmer für zwei Nacht. → ✅ ... für zwei **Nächte**.`,
        explanationHinglish: `**Travel phrases:**
- Ich fahre **in den Urlaub**. = Main chhutti par ja raha hoon.
- Ich **reise** nach Deutschland. = Main Germany travel karta hoon.
- Ich **fliege** nach Berlin. = Main Berlin udta hoon.
- Ich **fahre** nach Wien. = Main Vienna jaata hoon.
- Ich bin **im Urlaub**. = Main chhutti par hoon.

**Hotel par:**
- Ich **brauche** ein Zimmer. = Mujhe room chahiye.
- **Haben** Sie ein Zimmer **frei**? = Koi room available hai?
- Ich **möchte** ein **Einzelzimmer**. = Mujhe single room chahiye.
- Ich **möchte** ein **Doppelzimmer**. = Mujhe double room chahiye.
- **Für** zwei **Nächte**. = Do raaton ke liye.
- Ich habe eine **Reservierung**. = Mera reservation hai.
- **Wie viel kostet** das Zimmer? = Room kitne ka hai?
- **Ist** das Frühstück **inklusive**? = Breakfast included hai?
- **Wo** ist der **Bahnhof**? = Station kahan hai?
- **Wann** ist der **Check-out**? = Check-out kab hai?

**Polite requests:**
- Ich **möchte** ... = Mujhe ... chahiye.
- **Könnten** Sie ...? = Kya aap ... kar sakte hain?
- **Entschuldigung**, ... = Maaf kijiye, ...

**Useful nouns:**
- die **Nacht** = raat
- der **Schlüssel** = key
- das **Frühstück** = breakfast
- die **Rezeption** = reception
- der **Bahnhof** = train station
- der **Flughafen** = airport

**Common mistakes:**
- ❌ Ich fahre in Urlaub. → ✅ Ich fahre **in den** Urlaub.
- ❌ Wie viel kostet der Zimmer? → ✅ Wie viel kostet **das** Zimmer?
- ❌ Ich möchte ein Zimmer für zwei Nacht. → ✅ ... für zwei **Nächte**.`,
        examples: [
          {
            german: 'Haben Sie ein Zimmer frei?',
            english: 'Do you have a room available?',
            hinglish: 'Aapke paas koi room available hai?',
            breakdown: [
              { word: 'Haben', role: 'verb', meaning: 'have' },
              { word: 'Sie', role: 'formal subject', meaning: 'you' },
              { word: 'ein Zimmer', role: 'accusative object', meaning: 'a room' },
              { word: 'frei', role: 'adjective', meaning: 'free / available' },
            ],
            audioText: 'Haben Sie ein Zimmer frei?',
          },
          {
            german: 'Wie viel kostet das Zimmer?',
            english: 'How much does the room cost?',
            hinglish: 'Room kitne ka hai?',
            audioText: 'Wie viel kostet das Zimmer?',
          },
          {
            german: 'Ich fahre in den Urlaub.',
            english: 'I am going on holiday.',
            hinglish: 'Main chhutti par ja raha hoon.',
            audioText: 'Ich fahre in den Urlaub.',
          },
        ],
        realLifeContext: 'Hotel and travel phrases are essential for holidays and business trips. They help you check in, ask about prices, and find your way.',
        culturalNote: 'In Germany, many hotels expect you to fill out a registration form ("Meldeschein") at check-in. Breakfast is often called "Frühstück" and may or may not be included.',
        summary: [
          'Ich fahre in den Urlaub = I am going on holiday',
          'Haben Sie ein Zimmer frei? = Do you have a room available?',
          'Wie viel kostet das Zimmer? = How much does the room cost?',
          'Ich möchte ein Einzelzimmer / Doppelzimmer',
          'für zwei Nächte = for two nights',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-14-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich möchte ein ___." (hotel room)',
          questionHinglish: 'Complete karo: "Ich möchte ein ___." (hotel room)',
          options: ['Zimmer', 'Haus', 'Bahn', 'Bus'],
          correctAnswer: 'Zimmer',
          explanation: '"Zimmer" means room: Ich möchte ein Zimmer.',
          explanationHinglish: '"Zimmer" ka matlab room: Ich möchte ein Zimmer.',
          difficulty: 1,
          xpReward: 8,
          tags: ['travel', 'hotel'],
        },
        {
          id: 'ex-a1-14-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Wie viel ___ das Zimmer?"',
          questionHinglish: 'Complete karo: "Wie viel ___ das Zimmer?"',
          options: ['kostet', 'kosten', 'ist', 'hat'],
          correctAnswer: 'kostet',
          explanation: '"das Zimmer" is singular, so use "kostet": Wie viel kostet das Zimmer?',
          explanationHinglish: '"das Zimmer" singular hai, isliye "kostet": Wie viel kostet das Zimmer?',
          difficulty: 1,
          xpReward: 8,
          tags: ['travel', 'hotel'],
        },
        {
          id: 'ex-a1-14-03-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich fahre ___ Urlaub."',
          questionHinglish: 'Complete karo: "Ich fahre ___ Urlaub."',
          options: ['in den', 'im', 'auf den', 'zu'],
          correctAnswer: 'in den',
          explanation: 'The fixed phrase is "in den Urlaub fahren".',
          explanationHinglish: 'Fixed phrase "in den Urlaub fahren" hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'expressions'],
        },
        {
          id: 'ex-a1-14-03-04',
          type: 'ordering',
          question: 'Arrange the words into a question: "Haben / Sie / ein Zimmer / frei / ?"',
          questionHinglish: 'Sahi question banao: "Haben / Sie / ein Zimmer / frei / ?"',
          options: ['Haben', 'Sie', 'ein Zimmer', 'frei', '?'],
          correctAnswer: 'Haben Sie ein Zimmer frei ?',
          explanation: 'Verb first for a yes/no question: Haben Sie ein Zimmer frei?',
          explanationHinglish: 'Yes/no question ke liye verb pehle: Haben Sie ein Zimmer frei?',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'word-order'],
        },
        {
          id: 'ex-a1-14-03-05',
          type: 'typing',
          question: 'Translate: "How much does the room cost?"',
          questionHinglish: 'Translate karo: "How much does the room cost?"',
          correctAnswer: 'Wie viel kostet das Zimmer?',
          explanation: 'Use "Wie viel kostet das Zimmer?" for this question.',
          explanationHinglish: 'Is question ke liye "Wie viel kostet das Zimmer?" use karo.',
          difficulty: 2,
          xpReward: 10,
          tags: ['travel', 'typing'],
        },
      ],
    },
  ],
};
