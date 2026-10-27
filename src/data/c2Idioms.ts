// ============================================================
// C2 MODULE 2 – IDIOMS & COLLOCATIONS
// ============================================================

import type { Module } from '../types';

export const C2_MODULE_IDIOMS: Module = {
  id: 'm-c2-02',
  level: 'C2',
  title: 'Idioms & Collocations',
  titleHinglish: 'Idioms aur Collocations',
  description: 'Sound natural with common German idioms and precise verb-noun collocations.',
  descriptionHinglish: 'Common German idioms aur precise verb-noun collocations ke saath natural sound karo.',
  skills: ['speaking', 'reading', 'writing'],
  order: 2,
  isComplete: true,
  lessons: [
    {
      id: 'l-c2-02-01',
      level: 'C2',
      moduleId: 'm-c2-02',
      title: 'Everyday Idioms',
      titleHinglish: 'Rozana ke Idioms',
      objective: 'Understand and use common German idioms in the right register',
      objectiveHinglish: 'Common German idioms ko sahi register mein samjho aur use karo',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'reading'],
      prerequisites: ['l-c2-01-01'],
      order: 1,
      grammarPoints: ['idioms', 'register', 'fixed expressions'],
      vocabulary: [],
      content: {
        warmUp: [
          'What does "to hit the nail on the head" mean in your language?',
          'Do idioms sound natural in formal writing?',
        ],
        explanation: `Idioms make German sound natural, but they are mostly **informal/spoken**. Use them with friends, colleagues, and in relaxed messages — not in academic essays.

**Common idioms:**
- **die Nase voll haben** (von + dative) = to be fed up with
  - Ich habe die Nase voll von diesem Wetter.
- **ins Fettnäpfchen treten** = to put your foot in it
  - Ich bin ins Fettnäpfchen getreten, als ich nach ihrem Alter gefragt habe.
- **auf dem Laufenden bleiben** = to stay informed
  - Bleib auf dem Laufenden!
- **den Nagel auf den Kopf treffen** = to hit the nail on the head
  - Du hast den Nagel auf den Kopf getroffen.
- **Tomaten auf den Augen haben** = to be oblivious / not see the obvious
  - Du hast wohl Tomaten auf den Augen!
- **jemandem die Daumen drücken** = to keep your fingers crossed for someone
  - Ich drücke dir die Daumen!
- **Ich verstehe nur Bahnhof** = I don't understand anything
- **Das ist mir Wurst** = I don't care
- **Da steppt der Bär** = there is a big party
- **die Kirche im Dorf lassen** = not to exaggerate

**Register warning:**
- Spoken/informal: Ich habe die Nase voll. / Das ist mir Wurst.
- Formal alternative: Ich bin damit unzufrieden. / Das ist mir gleichgültig.

**Common mistakes:**
- ❌ Ich habe die Nase voll **für** das Wetter. → ✅ Ich habe die Nase voll **von** dem Wetter.
- Using idioms in a job application or academic paper.`,
        explanationHinglish: `Idioms German ko natural banate hain, lekin zyada tar **informal/spoken** hote hain. Friends, colleagues aur relaxed messages mein use karo — academic essays mein nahi.

**Common idioms:**
- **die Nase voll haben** (von + dative) = kisi cheez se tang aana
  - Ich habe die Nase voll von diesem Wetter.
- **ins Fettnäpfchen treten** = galti se kisi ko offend karna / foot in mouth
  - Ich bin ins Fettnäpfchen getreten, als ich nach ihrem Alter gefragt habe.
- **auf dem Laufenden bleiben** = updated rehna
  - Bleib auf dem Laufenden!
- **den Nagel auf den Kopf treffen** = bilkul sahi baat kehna / hit the nail on the head
  - Du hast den Nagel auf den Kopf getroffen.
- **Tomaten auf den Augen haben** = obvious cheez na dekhna
  - Du hast wohl Tomaten auf den Augen!
- **jemandem die Daumen drücken** = kisi ke liye fingers crossed karna
  - Ich drücke dir die Daumen!
- **Ich verstehe nur Bahnhof** = mujhe kuch samajh nahi aaya
- **Das ist mir Wurst** = mujhe farq nahi padta
- **Da steppt der Bär** = wahan badi party hai
- **die Kirche im Dorf lassen** = exaggerate na karna

**Register warning:**
- Spoken/informal: Ich habe die Nase voll. / Das ist mir Wurst.
- Formal alternative: Ich bin damit unzufrieden. / Das ist mir gleichgültig.

**Common mistakes:**
- ❌ Ich habe die Nase voll **für** das Wetter. → ✅ Ich habe die Nase voll **von** dem Wetter.
- Job application ya academic paper mein idioms use karna.`,
        examples: [
          {
            german: 'Ich habe die Nase voll von diesem Wetter.',
            english: 'I am fed up with this weather.',
            hinglish: 'Main is mausam se tang aa gaya hoon.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'verb', meaning: 'have' },
              { word: 'die Nase voll', role: 'idiom', meaning: 'fed up' },
              { word: 'von diesem Wetter', role: 'prepositional object', meaning: 'with this weather' },
            ],
            audioText: 'Ich habe die Nase voll von diesem Wetter.',
          },
          {
            german: 'Ich drücke dir die Daumen!',
            english: 'I am keeping my fingers crossed for you!',
            hinglish: 'Main tumhare liye fingers crossed kar raha hoon!',
            audioText: 'Ich drücke dir die Daumen!',
          },
          {
            german: 'Du hast den Nagel auf den Kopf getroffen.',
            english: 'You hit the nail on the head.',
            hinglish: 'Tumne bilkul sahi baat kahi.',
            audioText: 'Du hast den Nagel auf den Kopf getroffen.',
          },
        ],
        realLifeContext: 'Idioms help you understand films, conversations, and social media. They also signal cultural fluency, but using too many in formal contexts sounds inappropriate.',
        culturalNote: 'Many German idioms are regional. "Da steppt der Bär" is informal and mainly northern/central. "Ich verstehe nur Bahnhof" is widely understood and safe in casual conversation.',
        summary: [
          'die Nase voll haben = to be fed up',
          'den Nagel auf den Kopf treffen = to hit the nail on the head',
          'jemandem die Daumen drücken = to keep fingers crossed',
          'Ich verstehe nur Bahnhof = I do not understand anything',
          'Most idioms are informal; avoid them in academic writing',
        ],
      },
      exercises: [
        {
          id: 'ex-c2-02-01-01',
          type: 'multiple-choice',
          question: 'What does "Ich habe die Nase voll" mean?',
          questionHinglish: '"Ich habe die Nase voll" ka matlab kya hai?',
          options: ['I am fed up', 'I am ill', 'I am hungry', 'I am confused'],
          correctAnswer: 'I am fed up',
          explanation: '"die Nase voll haben" means to be fed up with something.',
          explanationHinglish: '"die Nase voll haben" ka matlab kisi cheez se tang aana.',
          difficulty: 5,
          xpReward: 20,
          tags: ['idioms', 'c2'],
        },
        {
          id: 'ex-c2-02-01-02',
          type: 'multiple-choice',
          question: 'What does "Du hast wohl Tomaten auf den Augen!" mean?',
          questionHinglish: '"Du hast wohl Tomaten auf den Augen!" ka matlab kya hai?',
          options: [
            'You are not seeing something obvious',
            'You are hungry',
            'You are wearing glasses',
            'You are angry',
          ],
          correctAnswer: 'You are not seeing something obvious',
          explanation: '"Tomaten auf den Augen haben" means to be oblivious to something obvious.',
          explanationHinglish: '"Tomaten auf den Augen haben" ka matlab obvious cheez na dekhna.',
          difficulty: 5,
          xpReward: 20,
          tags: ['idioms', 'c2'],
        },
        {
          id: 'ex-c2-02-01-03',
          type: 'multiple-choice',
          question: 'Which idiom means "to keep your fingers crossed"?',
          questionHinglish: 'Kaun sa idiom "fingers crossed" ke liye hai?',
          options: [
            'jemandem die Daumen drücken',
            'die Nase voll haben',
            'ins Fettnäpfchen treten',
            'auf dem Laufenden bleiben',
          ],
          correctAnswer: 'jemandem die Daumen drücken',
          explanation: '"jemandem die Daumen drücken" means to keep your fingers crossed for someone.',
          explanationHinglish: '"jemandem die Daumen drücken" ka matlab kisi ke liye fingers crossed karna.',
          difficulty: 5,
          xpReward: 20,
          tags: ['idioms', 'c2'],
        },
        {
          id: 'ex-c2-02-01-04',
          type: 'multiple-choice',
          question: 'Which idiom means "to hit the nail on the head"?',
          questionHinglish: 'Kaun sa idiom "hit the nail on the head" ke liye hai?',
          options: [
            'den Nagel auf den Kopf treffen',
            'die Kirche im Dorf lassen',
            'Da steppt der Bär',
            'Das ist mir Wurst',
          ],
          correctAnswer: 'den Nagel auf den Kopf treffen',
          explanation: '"den Nagel auf den Kopf treffen" means to say exactly the right thing.',
          explanationHinglish: '"den Nagel auf den Kopf treffen" ka matlab bilkul sahi baat kehna.',
          difficulty: 5,
          xpReward: 20,
          tags: ['idioms', 'c2'],
        },
        {
          id: 'ex-c2-02-01-05',
          type: 'typing',
          question: 'Translate idiomatically: "I don\'t understand anything."',
          questionHinglish: 'Idiomatically translate karo: "I don\'t understand anything."',
          correctAnswer: 'Ich verstehe nur Bahnhof.',
          explanation: '"Ich verstehe nur Bahnhof" is the idiomatic way to say "I don\'t understand anything."',
          explanationHinglish: '"Ich verstehe nur Bahnhof" idiomatic expression hai "mujhe kuch samajh nahi aaya" ke liye.',
          difficulty: 5,
          xpReward: 20,
          tags: ['idioms', 'typing', 'c2'],
        },
      ],
    },
    {
      id: 'l-c2-02-02',
      level: 'C2',
      moduleId: 'm-c2-02',
      title: 'Collocations & Precision',
      titleHinglish: 'Collocations aur Precision',
      objective: 'Use natural verb-noun combinations instead of literal translations',
      objectiveHinglish: 'Literal translation ki jagah natural verb-noun combinations use karo',
      estimatedMinutes: 25,
      skillFocus: ['writing', 'speaking'],
      prerequisites: ['l-c2-02-01'],
      order: 2,
      grammarPoints: ['collocations', 'fixed verb-noun combinations', 'register'],
      vocabulary: [],
      content: {
        warmUp: [
          'Do you say "make a decision" or "do a decision" in English?',
          'Why do some verb-noun combinations sound wrong even when the grammar is correct?',
        ],
        explanation: `At C2, precision comes from **collocations** — words that naturally go together. Literal translations often sound foreign even when the grammar is correct.

**Key collocations:**
- **eine Entscheidung treffen** = to make a decision (not "machen")
- **eine Rolle spielen** = to play a role
- **Kritik üben** = to criticize (not "Kritik machen")
- **einen Antrag stellen** = to submit an application (not "machen")
- **Verantwortung übernehmen** = to take responsibility
- **in Frage stellen** = to call into question
- **zur Verfügung stellen** = to make available
- **einen Beitrag leisten** = to make a contribution
- **Rücksicht nehmen auf** + accusative = to consider / be considerate of
- **einen Eindruck hinterlassen** = to leave an impression

**Examples:**
- Die Regierung muss eine **Entscheidung treffen**.
- Bildung **spielt** eine zentrale **Rolle**.
- Wir müssen **Verantwortung übernehmen**.
- Die Ergebnisse **stellen** die bisherige Annahme **in Frage**.
- Der Verein **stellt** Räume **zur Verfügung**.

**Why it matters:**
- ❌ eine Entscheidung machen (understandable but unnatural)
- ✅ eine Entscheidung treffen
- ❌ Kritik machen
- ✅ Kritik üben

**Register:** These collocations work in formal and neutral contexts. Some are fixed; changing the verb changes the meaning or sounds wrong.

**Common mistakes:**
- Translating the English verb directly: "make a decision" → "eine Entscheidung machen".
- Using "tun" for everything: "Verantwortung tun" is wrong.`,
        explanationHinglish: `C2 par precision **collocations** se aati hai — words jo naturally saath aate hain. Literal translation often foreign sound karta hai, chahe grammar sahi ho.

**Key collocations:**
- **eine Entscheidung treffen** = decision lena (not "machen")
- **eine Rolle spielen** = role play karna
- **Kritik üben** = criticize karna (not "Kritik machen")
- **einen Antrag stellen** = application submit karna (not "machen")
- **Verantwortung übernehmen** = responsibility lena
- **in Frage stellen** = question karna / doubt karna
- **zur Verfügung stellen** = available karna
- **einen Beitrag leisten** = contribution dena
- **Rücksicht nehmen auf** + accusative = consider karna
- **einen Eindruck hinterlassen** = impression chhodna

**Examples:**
- Die Regierung muss eine **Entscheidung treffen**.
- Bildung **spielt** eine zentrale **Rolle**.
- Wir müssen **Verantwortung übernehmen**.
- Die Ergebnisse **stellen** die bisherige Annahme **in Frage**.
- Der Verein **stellt** Räume **zur Verfügung**.

**Why it matters:**
- ❌ eine Entscheidung machen (samajh aa jaata hai, lekin unnatural)
- ✅ eine Entscheidung treffen
- ❌ Kritik machen
- ✅ Kritik üben

**Register:** Ye collocations formal aur neutral contexts mein kaam karte hain. Kuch fixed hain; verb badalne se meaning badal jaata hai ya galat lagta hai.

**Common mistakes:**
- English verb directly translate karna: "make a decision" → "eine Entscheidung machen".
- Har cheez ke liye "tun": "Verantwortung tun" galat hai.`,
        examples: [
          {
            german: 'Die Regierung muss eine Entscheidung treffen.',
            english: 'The government must make a decision.',
            hinglish: 'Government ko decision lena hai.',
            breakdown: [
              { word: 'Die Regierung', role: 'subject', meaning: 'the government' },
              { word: 'muss', role: 'modal verb', meaning: 'must' },
              { word: 'eine Entscheidung', role: 'noun object', meaning: 'a decision' },
              { word: 'treffen', role: 'collocation verb', meaning: 'make (a decision)' },
            ],
            audioText: 'Die Regierung muss eine Entscheidung treffen.',
          },
          {
            german: 'Bildung spielt eine zentrale Rolle.',
            english: 'Education plays a central role.',
            hinglish: 'Education central role play karti hai.',
            audioText: 'Bildung spielt eine zentrale Rolle.',
          },
          {
            german: 'Die Ergebnisse stellen die Annahme in Frage.',
            english: 'The results call the assumption into question.',
            hinglish: 'Results assumption ko question karte hain.',
            audioText: 'Die Ergebnisse stellen die Annahme in Frage.',
          },
        ],
        realLifeContext: 'Collocations are what make advanced German sound professional. They are essential in reports, presentations, applications, and academic writing.',
        culturalNote: 'German formal style relies on stable verb-noun pairs. Learning nouns together with their verbs is more efficient than learning isolated vocabulary.',
        summary: [
          'eine Entscheidung treffen = make a decision',
          'Kritik üben = criticize',
          'einen Antrag stellen = submit an application',
          'Verantwortung übernehmen = take responsibility',
          'Learn nouns together with their natural verbs',
        ],
      },
      exercises: [
        {
          id: 'ex-c2-02-02-01',
          type: 'multiple-choice',
          question: 'Complete the collocation: "eine Entscheidung ___"',
          questionHinglish: 'Collocation complete karo: "eine Entscheidung ___"',
          options: ['treffen', 'machen', 'stellen', 'geben'],
          correctAnswer: 'treffen',
          explanation: 'The correct collocation is "eine Entscheidung treffen" (to make a decision).',
          explanationHinglish: 'Sahi collocation "eine Entscheidung treffen" hai (decision lena).',
          difficulty: 5,
          xpReward: 20,
          tags: ['collocations', 'c2'],
        },
        {
          id: 'ex-c2-02-02-02',
          type: 'multiple-choice',
          question: 'Complete the collocation: "Kritik ___"',
          questionHinglish: 'Collocation complete karo: "Kritik ___"',
          options: ['üben', 'machen', 'treffen', 'nehmen'],
          correctAnswer: 'üben',
          explanation: 'The correct collocation is "Kritik üben" (to criticize).',
          explanationHinglish: 'Sahi collocation "Kritik üben" hai (criticize karna).',
          difficulty: 5,
          xpReward: 20,
          tags: ['collocations', 'c2'],
        },
        {
          id: 'ex-c2-02-02-03',
          type: 'multiple-choice',
          question: 'Complete the collocation: "Verantwortung ___"',
          questionHinglish: 'Collocation complete karo: "Verantwortung ___"',
          options: ['übernehmen', 'machen', 'treffen', 'stellen'],
          correctAnswer: 'übernehmen',
          explanation: 'The correct collocation is "Verantwortung übernehmen" (to take responsibility).',
          explanationHinglish: 'Sahi collocation "Verantwortung übernehmen" hai (responsibility lena).',
          difficulty: 5,
          xpReward: 20,
          tags: ['collocations', 'c2'],
        },
        {
          id: 'ex-c2-02-02-04',
          type: 'multiple-choice',
          question: 'Complete the collocation: "einen Antrag ___"',
          questionHinglish: 'Collocation complete karo: "einen Antrag ___"',
          options: ['stellen', 'machen', 'treffen', 'üben'],
          correctAnswer: 'stellen',
          explanation: 'The correct collocation is "einen Antrag stellen" (to submit an application).',
          explanationHinglish: 'Sahi collocation "einen Antrag stellen" hai (application submit karna).',
          difficulty: 5,
          xpReward: 20,
          tags: ['collocations', 'c2'],
        },
        {
          id: 'ex-c2-02-02-05',
          type: 'typing',
          question: 'Translate: "Education plays a central role."',
          questionHinglish: 'Translate karo: "Education plays a central role."',
          correctAnswer: 'Bildung spielt eine zentrale Rolle.',
          explanation: 'Use the collocation "eine Rolle spielen": Bildung spielt eine zentrale Rolle.',
          explanationHinglish: 'Collocation "eine Rolle spielen" use karo: Bildung spielt eine zentrale Rolle.',
          difficulty: 5,
          xpReward: 20,
          tags: ['collocations', 'typing', 'c2'],
        },
      ],
    },
  ],
};
