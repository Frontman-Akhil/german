// ============================================================
// A1 MODULE 13 – HOME & HEALTH
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_HOMEHEALTH: Module = {
  id: 'm-a1-13',
  level: 'A1',
  title: 'Home & Health',
  titleHinglish: 'Ghar aur Sehat',
  description: 'Describe your home, name body parts, and talk about common health problems.',
  descriptionHinglish: 'Apna ghar describe karo, body parts batao aur common health problems ke baare mein bolo.',
  skills: ['speaking', 'vocabulary', 'listening'],
  order: 13,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-13-01',
      level: 'A1',
      moduleId: 'm-a1-13',
      title: 'My Home & Rooms',
      titleHinglish: 'Mera Ghar aur Rooms',
      objective: 'Describe your apartment, rooms, and furniture',
      objectiveHinglish: 'Apni apartment, rooms aur furniture describe karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a1-12-03'],
      order: 1,
      grammarPoints: ['es gibt', 'wohnen in', 'location prepositions'],
      vocabulary: [],
      content: {
        warmUp: [
          'How many rooms are in your home?',
          'What furniture is in your living room?',
        ],
        explanation: `**Talking about your home:**
- Ich **wohne in einer Wohnung**. = I live in an apartment.
- Ich **wohne in einem Haus**. = I live in a house.
- Die Wohnung ist **klein / groß / hell / alt / neu**.
- Meine Wohnung **hat** zwei Zimmer. = My apartment has two rooms.

**Rooms:**
- das **Wohnzimmer** = living room
- das **Schlafzimmer** = bedroom
- die **Küche** = kitchen
- das **Badezimmer** = bathroom
- der **Flur** = hallway
- der **Balkon** = balcony
- der **Garten** = garden

**Furniture:**
- der **Tisch** = table
- der **Stuhl** = chair
- das **Sofa** = sofa
- das **Bett** = bed
- der **Schrank** = cupboard / wardrobe
- die **Lampe** = lamp
- der **Kühlschrank** = fridge

**"es gibt" = there is / there are:**
- In meiner Wohnung **gibt es** ein Sofa.
- **Es gibt** einen Tisch und vier Stühle.
After "es gibt", the noun is in the **accusative**: einen Tisch, eine Küche, ein Bett.

**Location:**
- Das Sofa steht **im Wohnzimmer**.
- Der Tisch steht **in der Küche**.
- Die Lampen sind **auf dem Tisch**.

**Common mistakes:**
- ❌ Es gibt ein Tisch. → ✅ Es gibt **einen** Tisch.
- ❌ Ich wohne auf einer Wohnung. → ✅ Ich wohne **in** einer Wohnung.
- ❌ Das Sofa ist im Wohnzimmer (correct) vs. ❌ Das Sofa steht im Wohnzimmer? (also possible)`,
        explanationHinglish: `**Apne ghar ke baare mein:**
- Ich **wohne in einer Wohnung**. = Main apartment mein rehta hoon.
- Ich **wohne in einem Haus**. = Main ghar mein rehta hoon.
- Die Wohnung ist **klein / groß / hell / alt / neu**.
- Meine Wohnung **hat** zwei Zimmer. = Meri apartment mein do rooms hain.

**Rooms:**
- das **Wohnzimmer** = living room
- das **Schlafzimmer** = bedroom
- die **Küche** = kitchen
- das **Badezimmer** = bathroom
- der **Flur** = hallway
- der **Balkon** = balcony
- der **Garten** = garden

**Furniture:**
- der **Tisch** = table
- der **Stuhl** = chair
- das **Sofa** = sofa
- das **Bett** = bed
- der **Schrank** = cupboard / wardrobe
- die **Lampe** = lamp
- der **Kühlschrank** = fridge

**"es gibt" = hai / hain:**
- In meiner Wohnung **gibt es** ein Sofa.
- **Es gibt** einen Tisch und vier Stühle.
"es gibt" ke baad noun **accusative** mein: einen Tisch, eine Küche, ein Bett.

**Location:**
- Das Sofa steht **im Wohnzimmer**.
- Der Tisch steht **in der Küche**.
- Die Lampen sind **auf dem Tisch**.

**Common mistakes:**
- ❌ Es gibt ein Tisch. → ✅ Es gibt **einen** Tisch.
- ❌ Ich wohne auf einer Wohnung. → ✅ Ich wohne **in** einer Wohnung.`,
        examples: [
          {
            german: 'Meine Wohnung hat zwei Zimmer.',
            english: 'My apartment has two rooms.',
            hinglish: 'Meri apartment mein do rooms hain.',
            breakdown: [
              { word: 'Meine Wohnung', role: 'subject', meaning: 'my apartment' },
              { word: 'hat', role: 'verb', meaning: 'has' },
              { word: 'zwei Zimmer', role: 'object', meaning: 'two rooms' },
            ],
            audioText: 'Meine Wohnung hat zwei Zimmer.',
          },
          {
            german: 'In meiner Wohnung gibt es ein Sofa.',
            english: 'There is a sofa in my apartment.',
            hinglish: 'Meri apartment mein ek sofa hai.',
            audioText: 'In meiner Wohnung gibt es ein Sofa.',
          },
          {
            german: 'Das Sofa steht im Wohnzimmer.',
            english: 'The sofa is in the living room.',
            hinglish: 'Sofa living room mein hai.',
            audioText: 'Das Sofa steht im Wohnzimmer.',
          },
        ],
        realLifeContext: 'Describing your home is a standard A1 topic. You will need it when renting a flat, talking to neighbours, or welcoming guests.',
        culturalNote: 'In Germany, apartments often list the number of rooms excluding kitchen and bathroom: "eine 2-Zimmer-Wohnung" means two main rooms, not two rooms total.',
        summary: [
          'Ich wohne in einer Wohnung / in einem Haus',
          'Meine Wohnung hat ... Zimmer',
          'es gibt + accusative: Es gibt einen Tisch',
          'Room names: Wohnzimmer, Schlafzimmer, Küche, Badezimmer',
          'Use location prepositions: im Wohnzimmer, in der Küche',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-13-01-01',
          type: 'multiple-choice',
          question: 'Complete: "___ gibt es drei Zimmer."',
          questionHinglish: 'Complete karo: "___ gibt es drei Zimmer."',
          options: ['Es', 'Er', 'Sie', 'Das'],
          correctAnswer: 'Es',
          explanation: 'The fixed phrase is "es gibt" = there is / there are.',
          explanationHinglish: 'Fixed phrase "es gibt" hai = hai / hain.',
          difficulty: 1,
          xpReward: 8,
          tags: ['home', 'es-gibt'],
        },
        {
          id: 'ex-a1-13-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich wohne ___ einer Wohnung."',
          questionHinglish: 'Complete karo: "Ich wohne ___ einer Wohnung."',
          options: ['in', 'im', 'auf', 'bei'],
          correctAnswer: 'in',
          explanation: '"wohnen in" is the correct phrase: Ich wohne in einer Wohnung.',
          explanationHinglish: 'Sahi phrase "wohnen in" hai: Ich wohne in einer Wohnung.',
          difficulty: 1,
          xpReward: 8,
          tags: ['home', 'prepositions'],
        },
        {
          id: 'ex-a1-13-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Das Sofa steht ___ Wohnzimmer."',
          questionHinglish: 'Complete karo: "Das Sofa steht ___ Wohnzimmer."',
          options: ['im', 'in der', 'auf dem', 'am'],
          correctAnswer: 'im',
          explanation: '"Wohnzimmer" is neuter; location "in dem" contracts to "im".',
          explanationHinglish: '"Wohnzimmer" neuter hai; location "in dem" ka contraction "im".',
          difficulty: 2,
          xpReward: 10,
          tags: ['home', 'location'],
        },
        {
          id: 'ex-a1-13-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Meine Wohnung / hat / zwei Zimmer / ."',
          questionHinglish: 'Sahi sentence banao: "Meine Wohnung / hat / zwei Zimmer / ."',
          options: ['Meine Wohnung', 'hat', 'zwei Zimmer', '.'],
          correctAnswer: 'Meine Wohnung hat zwei Zimmer .',
          explanation: 'Subject + verb + object: Meine Wohnung hat zwei Zimmer.',
          explanationHinglish: 'Subject + verb + object: Meine Wohnung hat zwei Zimmer.',
          difficulty: 1,
          xpReward: 10,
          tags: ['home', 'word-order'],
        },
        {
          id: 'ex-a1-13-01-05',
          type: 'typing',
          question: 'Translate: "My apartment is small."',
          questionHinglish: 'Translate karo: "My apartment is small."',
          correctAnswer: 'Meine Wohnung ist klein.',
          explanation: 'Use "Meine Wohnung ist klein" for "My apartment is small."',
          explanationHinglish: '"My apartment is small" ke liye "Meine Wohnung ist klein" use karo.',
          difficulty: 1,
          xpReward: 8,
          tags: ['home', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-13-02',
      level: 'A1',
      moduleId: 'm-a1-13',
      title: 'Body & Health Problems',
      titleHinglish: 'Body aur Health Problems',
      objective: 'Name body parts and say what hurts',
      objectiveHinglish: 'Body parts batao aur bolo kis jagah dard hai',
      estimatedMinutes: 20,
      skillFocus: ['vocabulary', 'speaking'],
      prerequisites: ['l-a1-13-01'],
      order: 2,
      grammarPoints: ['body vocabulary', 'tut weh', 'sich fühlen'],
      vocabulary: [],
      content: {
        warmUp: [
          'What do you say when you have a headache?',
          'Which body parts do you already know in German?',
        ],
        explanation: `**Body parts:**
- der **Kopf** = head
- die **Augen** = eyes
- die **Nase** = nose
- der **Mund** = mouth
- die **Ohren** = ears
- der **Arm** = arm
- die **Hand** = hand
- der **Bauch** = stomach
- das **Bein** = leg
- der **Fuß** = foot

**Health problems:**
- Ich habe **Kopfschmerzen**. = I have a headache.
- Ich habe **Fieber**. = I have a fever.
- Ich habe **Husten**. = I have a cough.
- Ich habe **Schnupfen**. = I have a cold / runny nose.
- Mir ist **schlecht**. = I feel sick.
- Ich fühle **mich** krank. = I feel ill.
- Mein Arm **tut weh**. = My arm hurts.
- Meine Beine **tun weh**. = My legs hurt.

**"tut weh" / "tun weh":**
- Singular body part: Mein Kopf **tut** weh.
- Plural body part: Meine Augen **tun** weh.

**Useful sentences:**
- Ich brauche einen **Arzt**.
- Ich muss **zum Arzt** gehen.
- Ich bleibe **zu Hause**.
- Gute **Besserung**! = Get well soon!

**Common mistakes:**
- ❌ Ich habe Kopfschmerz. → ✅ Ich habe Kopfschmerzen. (plural)
- ❌ Mein Arm tut Schmerz. → ✅ Mein Arm tut weh.
- ❌ Ich fühle krank. → ✅ Ich fühle **mich** krank.`,
        explanationHinglish: `**Body parts:**
- der **Kopf** = sir
- die **Augen** = aankhein
- die **Nase** = naak
- der **Mund** = muh
- die **Ohren** = kaan
- der **Arm** = baazu
- die **Hand** = haath
- der **Bauch** = pet
- das **Bein** = taang
- der **Fuß** = pair

**Health problems:**
- Ich habe **Kopfschmerzen**. = Mere sir mein dard hai.
- Ich habe **Fieber**. = Mujhe bukhar hai.
- Ich habe **Husten**. = Mujhe khansi hai.
- Ich habe **Schnupfen**. = Mujhe zukaam hai.
- Mir ist **schlecht**. = Mujhe ulti jaisa lag raha hai.
- Ich fühle **mich** krank. = Main bimaar mehsoos karta hoon.
- Mein Arm **tut weh**. = Mere baazu mein dard hai.
- Meine Beine **tun weh**. = Meri taangein dard karti hain.

**"tut weh" / "tun weh":**
- Singular body part: Mein Kopf **tut** weh.
- Plural body part: Meine Augen **tun** weh.

**Useful sentences:**
- Ich brauche einen **Arzt**.
- Ich muss **zum Arzt** gehen.
- Ich bleibe **zu Hause**.
- Gute **Besserung**! = Jaldi theek ho jao!

**Common mistakes:**
- ❌ Ich habe Kopfschmerz. → ✅ Ich habe Kopfschmerzen. (plural)
- ❌ Mein Arm tut Schmerz. → ✅ Mein Arm tut weh.
- ❌ Ich fühle krank. → ✅ Ich fühle **mich** krank.`,
        examples: [
          {
            german: 'Ich habe Kopfschmerzen.',
            english: 'I have a headache.',
            hinglish: 'Mere sir mein dard hai.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'verb', meaning: 'have' },
              { word: 'Kopfschmerzen', role: 'plural noun', meaning: 'headache / head pain' },
            ],
            audioText: 'Ich habe Kopfschmerzen.',
          },
          {
            german: 'Mein Arm tut weh.',
            english: 'My arm hurts.',
            hinglish: 'Mere baazu mein dard hai.',
            audioText: 'Mein Arm tut weh.',
          },
          {
            german: 'Ich fühle mich krank.',
            english: 'I feel ill.',
            hinglish: 'Main bimaar mehsoos karta hoon.',
            audioText: 'Ich fühle mich krank.',
          },
        ],
        realLifeContext: 'Health vocabulary is essential when you are ill abroad, need a pharmacy, or have to explain symptoms to a doctor.',
        culturalNote: 'For minor problems, Germans often go to an "Apotheke" (pharmacy) first. For urgent issues outside opening hours, there is an emergency doctor service called "der Notdienst".',
        summary: [
          'Body parts: Kopf, Augen, Nase, Mund, Arm, Bauch, Bein, Fuß',
          'Ich habe Kopfschmerzen / Fieber / Husten',
          'Mein Arm tut weh = My arm hurts',
          'Ich fühle mich krank = I feel ill',
          'Gute Besserung! = Get well soon!',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-13-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe ___." (a headache)',
          questionHinglish: 'Complete karo: "Ich habe ___." (sir dard)',
          options: ['Kopfschmerzen', 'Kopf', 'Arzt', 'Fieber'],
          correctAnswer: 'Kopfschmerzen',
          explanation: '"Kopfschmerzen" means headache: Ich habe Kopfschmerzen.',
          explanationHinglish: '"Kopfschmerzen" ka matlab sir dard: Ich habe Kopfschmerzen.',
          difficulty: 1,
          xpReward: 8,
          tags: ['health', 'vocabulary'],
        },
        {
          id: 'ex-a1-13-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Mein Arm ___ weh."',
          questionHinglish: 'Complete karo: "Mein Arm ___ weh."',
          options: ['tut', 'tun', 'ist', 'hat'],
          correctAnswer: 'tut',
          explanation: 'A singular body part takes "tut": Mein Arm tut weh.',
          explanationHinglish: 'Singular body part ke saath "tut": Mein Arm tut weh.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'verbs'],
        },
        {
          id: 'ex-a1-13-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich fühle ___ krank."',
          questionHinglish: 'Complete karo: "Ich fühle ___ krank."',
          options: ['mich', 'mir', 'ich', 'mein'],
          correctAnswer: 'mich',
          explanation: '"sich fühlen" is reflexive: Ich fühle mich krank.',
          explanationHinglish: '"sich fühlen" reflexive hai: Ich fühle mich krank.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'reflexive'],
        },
        {
          id: 'ex-a1-13-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / muss / zum Arzt / gehen / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / muss / zum Arzt / gehen / ."',
          options: ['Ich', 'muss', 'zum Arzt', 'gehen', '.'],
          correctAnswer: 'Ich muss zum Arzt gehen .',
          explanation: 'With a modal verb, the infinitive goes to the end: Ich muss zum Arzt gehen.',
          explanationHinglish: 'Modal verb ke saath infinitive end par: Ich muss zum Arzt gehen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'word-order'],
        },
        {
          id: 'ex-a1-13-02-05',
          type: 'typing',
          question: 'Translate: "I have a headache."',
          questionHinglish: 'Translate karo: "I have a headache."',
          correctAnswer: 'Ich habe Kopfschmerzen.',
          explanation: 'Use the plural noun "Kopfschmerzen": Ich habe Kopfschmerzen.',
          explanationHinglish: 'Plural noun "Kopfschmerzen" use karo: Ich habe Kopfschmerzen.',
          difficulty: 1,
          xpReward: 8,
          tags: ['health', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-13-03',
      level: 'A1',
      moduleId: 'm-a1-13',
      title: 'At the Doctor & Appointments',
      titleHinglish: 'Doctor ke paas aur Appointments',
      objective: 'Make a doctor\'s appointment and describe how long you have been ill',
      objectiveHinglish: 'Doctor ka appointment banao aur batao kitne din se bimaar ho',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-13-02'],
      order: 3,
      grammarPoints: ['Termin machen', 'seit + dative', 'imperatives'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you phone a doctor in German?',
          'How do you say "since two days"?',
        ],
        explanation: `**Making an appointment:**
- Ich möchte einen **Termin** machen. = I would like to make an appointment.
- Ich habe einen **Termin**. = I have an appointment.
- **Wann** haben Sie Zeit? = When do you have time?
- **Können** Sie morgen? = Can you do tomorrow?
- **Um** zehn Uhr? = At ten o'clock?
- Das **passt** mir gut. = That suits me.

**Describing the problem:**
- Ich habe **seit zwei Tagen** Fieber. = I have had a fever for two days.
- Mein **Hals** tut weh. = My throat hurts.
- Ich **huste** viel. = I cough a lot.
- Ich brauche ein **Rezept**. = I need a prescription.
- Ich brauche **Tabletten**. = I need tablets.

**At the practice:**
- **Guten Tag**, ich habe einen Termin.
- **Hier** ist meine Versicherungskarte.
- **Danke**, auf Wiedersehen.

**Doctor's instructions (informal):**
- **Nehmen** Sie die Tabletten **zweimal täglich**.
- **Bleiben** Sie im Bett.
- **Trinken** Sie viel Wasser.

**"seit" + dative:**
- seit **zwei Tagen** = for two days
- seit **einer Woche** = for a week
- seit **einem Monat** = for a month
"seit" describes something that started in the past and continues.

**Common mistakes:**
- ❌ Ich möchte ein Termin. → ✅ Ich möchte **einen** Termin.
- ❌ Seit zwei Tage. → ✅ Seit zwei **Tagen**.
- ❌ Ich habe Fieber seit zwei Tagen (possible) vs. word order: Ich habe seit zwei Tagen Fieber. (common)`,
        explanationHinglish: `**Appointment banana:**
- Ich möchte einen **Termin** machen. = Main appointment banana chahta hoon.
- Ich habe einen **Termin**. = Mera appointment hai.
- **Wann** haben Sie Zeit? = Aapko kab time hai?
- **Können** Sie morgen? = Aap kal aa sakte hain?
- **Um** zehn Uhr? = Das baje?
- Das **passt** mir gut. = Mujhe theek hai.

**Problem batana:**
- Ich habe **seit zwei Tagen** Fieber. = Do din se bukhar hai.
- Mein **Hals** tut weh. = Gala dard kar raha hai.
- Ich **huste** viel. = Main bahut khans raha hoon.
- Ich brauche ein **Rezept**. = Mujhe prescription chahiye.
- Ich brauche **Tabletten**. = Mujhe tablets chahiye.

**Clinic par:**
- **Guten Tag**, ich habe einen Termin.
- **Hier** ist meine Versicherungskarte.
- **Danke**, auf Wiedersehen.

**Doctor ke instructions (formal):**
- **Nehmen** Sie die Tabletten **zweimal täglich**.
- **Bleiben** Sie im Bett.
- **Trinken** Sie viel Wasser.

**"seit" + dative:**
- seit **zwei Tagen** = do din se
- seit **einer Woche** = ek hafte se
- seit **einem Monat** = ek mahine se
"seit" tab use hota hai jab kaam past mein shuru hua aur abhi bhi continue hai.

**Common mistakes:**
- ❌ Ich möchte ein Termin. → ✅ Ich möchte **einen** Termin.
- ❌ Seit zwei Tage. → ✅ Seit zwei **Tagen**.`,
        examples: [
          {
            german: 'Ich möchte einen Termin machen.',
            english: 'I would like to make an appointment.',
            hinglish: 'Main appointment banana chahta hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'möchte', role: 'modal verb', meaning: 'would like' },
              { word: 'einen Termin', role: 'accusative object', meaning: 'an appointment' },
              { word: 'machen', role: 'infinitive', meaning: 'to make' },
            ],
            audioText: 'Ich möchte einen Termin machen.',
          },
          {
            german: 'Ich habe seit zwei Tagen Fieber.',
            english: 'I have had a fever for two days.',
            hinglish: 'Mujhe do din se bukhar hai.',
            audioText: 'Ich habe seit zwei Tagen Fieber.',
          },
          {
            german: 'Gute Besserung!',
            english: 'Get well soon!',
            hinglish: 'Jaldi theek ho jao!',
            audioText: 'Gute Besserung!',
          },
        ],
        realLifeContext: 'Calling a doctor and explaining symptoms is a practical survival skill. You may need it when travelling, studying, or working in a German-speaking country.',
        culturalNote: 'Many German doctors require an appointment, but practices often have "offene Sprechstunden" for urgent cases. Bring your insurance card ("Versicherungskarte") to every visit.',
        summary: [
          'Ich möchte einen Termin machen = I would like to make an appointment',
          'seit + dative: seit zwei Tagen, seit einer Woche',
          'Mein Hals tut weh = My throat hurts',
          'Ich brauche ein Rezept / Tabletten',
          'Gute Besserung! = Get well soon!',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-13-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich möchte einen ___ machen."',
          questionHinglish: 'Complete karo: "Ich möchte einen ___ machen."',
          options: ['Termin', 'Arzt', 'Tablette', 'Fieber'],
          correctAnswer: 'Termin',
          explanation: 'The phrase is "einen Termin machen" = to make an appointment.',
          explanationHinglish: 'Phrase "einen Termin machen" hai = appointment banana.',
          difficulty: 1,
          xpReward: 8,
          tags: ['health', 'appointments'],
        },
        {
          id: 'ex-a1-13-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Seit ___ Tagen habe ich Fieber."',
          questionHinglish: 'Complete karo: "Seit ___ Tagen habe ich Fieber."',
          options: ['zwei', 'zweimal', 'der', 'dem'],
          correctAnswer: 'zwei',
          explanation: '"seit" takes the dative. "zwei Tagen" is the correct dative plural form.',
          explanationHinglish: '"seit" dative leta hai. "zwei Tagen" sahi dative plural hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'dative'],
        },
        {
          id: 'ex-a1-13-03-03',
          type: 'multiple-choice',
          question: 'Complete the wish: "Gute ___!"',
          questionHinglish: 'Wish complete karo: "Gute ___!"',
          options: ['Besserung', 'Zeit', 'Termin', 'Arzt'],
          correctAnswer: 'Besserung',
          explanation: '"Gute Besserung!" means Get well soon!',
          explanationHinglish: '"Gute Besserung!" ka matlab jaldi theek ho jao!',
          difficulty: 1,
          xpReward: 8,
          tags: ['health', 'expressions'],
        },
        {
          id: 'ex-a1-13-03-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / möchte / einen Termin / machen / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / möchte / einen Termin / machen / ."',
          options: ['Ich', 'möchte', 'einen Termin', 'machen', '.'],
          correctAnswer: 'Ich möchte einen Termin machen .',
          explanation: 'Modal verb in position 2, infinitive at the end: Ich möchte einen Termin machen.',
          explanationHinglish: 'Modal verb position 2, infinitive end par: Ich möchte einen Termin machen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'word-order'],
        },
        {
          id: 'ex-a1-13-03-05',
          type: 'typing',
          question: 'Translate: "I would like to make an appointment."',
          questionHinglish: 'Translate karo: "I would like to make an appointment."',
          correctAnswer: 'Ich möchte einen Termin machen.',
          explanation: 'Use "Ich möchte einen Termin machen" for this request.',
          explanationHinglish: 'Is request ke liye "Ich möchte einen Termin machen" use karo.',
          difficulty: 2,
          xpReward: 10,
          tags: ['health', 'typing'],
        },
      ],
    },
  ],
};
