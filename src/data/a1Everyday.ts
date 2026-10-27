// ============================================================
// A1 MODULE 9 – EVERYDAY SITUATIONS
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_EVERYDAY: Module = {
  id: 'm-a1-09',
  level: 'A1',
  title: 'Everyday Situations',
  titleHinglish: 'Rozmarra ki Situations',
  description: 'Shop, order food and drinks, and ask for directions with confidence.',
  descriptionHinglish: 'Shopping karna, khana-peena order karna, aur raaste poochhna confidently seekho.',
  skills: ['speaking', 'listening', 'vocabulary'],
  order: 9,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-09-01',
      level: 'A1',
      moduleId: 'm-a1-09',
      title: 'Shopping & Prices',
      titleHinglish: 'Shopping aur Daam',
      objective: 'Ask prices, buy things, and use polite shopping phrases',
      objectiveHinglish: 'Daam poocho, cheezein kharido, aur polite shopping phrases use karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-08-02'],
      order: 1,
      grammarPoints: ['Was kostet...?', 'accusative objects', 'polite requests'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you ask "How much is this?" in German?',
          'What polite phrase do you already know for ordering?',
        ],
        explanation: `**Asking prices:**
- **Was kostet das?** (What does that cost?)
- **Wie viel kostet das?** (How much does that cost?)
- **Das kostet 5 Euro.** (That costs 5 euros.)

**Polite shopping phrases:**
- **Ich möchte** das, bitte. (I would like that, please.)
- **Ich hätte gern** den/das ..., bitte. (I would like ... — very polite)
- **Ich nehme** das. (I'll take that.)
- **Haben Sie ...?** (Do you have ...?)
- **Wie viel kostet dieser/diese/dieses ...?** (How much is this ...?)

**Prices:**
- 3,50 € = **drei Euro fünfzig**
- 12,99 € = **zwölf Euro neunundneunzig**
- 100 € = **hundert Euro**

**Useful words:**
teuer (expensive), günstig (good value), billig (cheap), die Kasse (checkout), bar (cash), mit Karte (by card).

**Common mistakes:**
- ❌ Ich will das. (too direct) → ✅ Ich möchte das, bitte.
- ❌ Das kostet fünf Euro fünfzig Cent? (usually just "fünf Euro fünfzig")`,
        explanationHinglish: `**Daam poochhna:**
- **Was kostet das?** (Yeh kitne ka hai?)
- **Wie viel kostet das?** (Yeh kitne ka hai?)
- **Das kostet 5 Euro.** (Yeh 5 euro ka hai.)

**Polite shopping phrases:**
- **Ich möchte** das, bitte. (Mujhe yeh chahiye, kripaya.)
- **Ich hätte gern** den/das ..., bitte. (Mujhe ... chahiye — bahut polite)
- **Ich nehme** das. (Main yeh le leta hoon.)
- **Haben Sie ...?** (Aapke paas ... hai?)
- **Wie viel kostet dieser/diese/dieses ...?** (Yeh ... kitne ka hai?)

**Prices:**
- 3,50 € = **drei Euro fünfzig**
- 12,99 € = **zwölf Euro neunundneunzig**
- 100 € = **hundert Euro**

**Useful words:**
teuer (mehnga), günstig (achhi value), billig (sasta), die Kasse (checkout), bar (cash), mit Karte (card se).

**Common mistakes:**
- ❌ Ich will das. (bahut direct) → ✅ Ich möchte das, bitte.
- ❌ Das kostet fünf Euro fünfzig Cent? (aksar sirf "fünf Euro fünfzig")`,
        examples: [
          {
            german: 'Was kostet das? — Das kostet drei Euro fünfzig.',
            english: 'How much is that? — That costs 3.50 euros.',
            hinglish: 'Yeh kitne ka hai? — Yeh teen euro pachaas paise ka hai.',
            breakdown: [
              { word: 'Was', role: 'question word', meaning: 'what' },
              { word: 'kostet', role: 'verb (kosten, 3rd person)', meaning: 'costs' },
              { word: 'das', role: 'pronoun', meaning: 'that' },
              { word: 'drei', role: 'numeral', meaning: 'three' },
              { word: 'Euro', role: 'noun', meaning: 'euro' },
              { word: 'fünfzig', role: 'numeral', meaning: 'fifty' },
            ],
            audioText: 'Was kostet das? Das kostet drei Euro fünfzig.',
          },
          {
            german: 'Ich nehme das, bitte.',
            english: 'I will take that, please.',
            hinglish: 'Main yeh le leta hoon, kripaya.',
            audioText: 'Ich nehme das, bitte.',
          },
          {
            german: 'Haben Sie einen Kugelschreiber?',
            english: 'Do you have a pen?',
            hinglish: 'Aapke paas ek pen hai?',
            audioText: 'Haben Sie einen Kugelschreiber?',
          },
        ],
        realLifeContext: 'In German shops, you usually greet the staff when entering ("Guten Tag") and say "Danke" or "Auf Wiedersehen" when leaving. At the checkout, you may be asked "Bar oder mit Karte?" (Cash or card?).',
        culturalNote: 'Many small German shops and bakeries still prefer cash, so carry some euros. "Mit Karte" is common in supermarkets, but not everywhere.',
        summary: [
          'Was kostet das? = How much is that?',
          'Ich möchte ... / Ich hätte gern ... = polite requests',
          'Ich nehme das = I will take that',
          'Prices: drei Euro fünfzig = 3.50 €',
          'Bar oder mit Karte? = cash or card?',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-09-01-01',
          type: 'multiple-choice',
          question: 'How do you ask "How much is that?"',
          questionHinglish: '"Yeh kitne ka hai?" kaise poochhoge?',
          options: ['Wo ist das?', 'Was kostet das?', 'Wer ist das?', 'Wann ist das?'],
          correctAnswer: 'Was kostet das?',
          explanation: '"Was kostet das?" is the standard way to ask a price.',
          explanationHinglish: 'Price poochhne ka standard tarika "Was kostet das?" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['shopping', 'questions'],
        },
        {
          id: 'ex-a1-09-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ das, bitte."',
          questionHinglish: 'Complete karo: "Ich ___ das, bitte."',
          options: ['nehme', 'nimmst', 'nimmt', 'nehmen'],
          correctAnswer: 'nehme',
          explanation: 'The ich-form of nehmen is "nehme": Ich nehme das, bitte.',
          explanationHinglish: 'nehmen ka ich-form "nehme" hai: Ich nehme das, bitte.',
          difficulty: 2,
          xpReward: 10,
          tags: ['shopping', 'verbs'],
        },
        {
          id: 'ex-a1-09-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Haben Sie ___ Kugelschreiber?"',
          questionHinglish: 'Complete karo: "Haben Sie ___ Kugelschreiber?"',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctAnswer: 'einen',
          explanation: '"Kugelschreiber" is masculine and the direct object, so use "einen": einen Kugelschreiber.',
          explanationHinglish: '"Kugelschreiber" masculine hai aur direct object hai, isliye "einen": einen Kugelschreiber.',
          difficulty: 3,
          xpReward: 12,
          tags: ['shopping', 'accusative'],
        },
        {
          id: 'ex-a1-09-01-04',
          type: 'multiple-choice',
          question: 'How do you say 3,50 € in German?',
          questionHinglish: '3,50 € ko German mein kaise kehte hain?',
          options: ['drei Euro fünfzig', 'drei fünfzig Euro', 'fünfzig Euro drei', 'drei Euro fünf'],
          correctAnswer: 'drei Euro fünfzig',
          explanation: 'Say the euros first, then the cents: drei Euro fünfzig.',
          explanationHinglish: 'Pehle euro, phir cents: drei Euro fünfzig.',
          difficulty: 1,
          xpReward: 8,
          tags: ['shopping', 'prices'],
        },
        {
          id: 'ex-a1-09-01-05',
          type: 'multiple-choice',
          question: 'Which request is the most polite?',
          questionHinglish: 'Kaun si request sabse polite hai?',
          options: ['Ich will das.', 'Gib mir das.', 'Ich möchte das, bitte.', 'Das!'],
          correctAnswer: 'Ich möchte das, bitte.',
          explanation: '"Ich möchte das, bitte" is polite and standard in shops.',
          explanationHinglish: '"Ich möchte das, bitte" shops mein polite aur standard hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['shopping', 'politeness'],
        },
        {
          id: 'ex-a1-09-01-06',
          type: 'typing',
          question: 'Translate: "How much does that cost?"',
          questionHinglish: 'Translate karo: "How much does that cost?"',
          correctAnswer: 'Wie viel kostet das?',
          explanation: 'Use "Wie viel" (how much) + "kostet" + "das": Wie viel kostet das?',
          explanationHinglish: '"Wie viel" (kitna) + "kostet" + "das" use karo: Wie viel kostet das?',
          difficulty: 2,
          xpReward: 12,
          tags: ['shopping', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-09-02',
      level: 'A1',
      moduleId: 'm-a1-09',
      title: 'At a Café or Restaurant',
      titleHinglish: 'Café ya Restaurant Mein',
      objective: 'Order food and drinks politely and ask for the bill',
      objectiveHinglish: 'Khana-peena politely order karo aur bill maango',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-09-01'],
      order: 2,
      grammarPoints: ['möchten + accusative', 'ordering phrases', 'die Rechnung'],
      vocabulary: [],
      content: {
        warmUp: [
          'What is your favourite drink? Say it in German if you can.',
          'How do you ask for the bill in a restaurant?',
        ],
        explanation: `**Ordering politely:**
- **Ich möchte** einen Kaffee, bitte. (I would like a coffee, please.)
- **Ich hätte gern** einen Tee. (I would like a tea — very polite.)
- **Ich nehme** die Suppe. (I'll have the soup.)
- **Die Speisekarte, bitte.** (The menu, please.)

**At the end:**
- **Die Rechnung, bitte.** (The bill, please.)
- **Zusammen oder getrennt?** (Together or separately?)
- **Zusammen, bitte.** / **Getrennt, bitte.**
- **Ich zahle mit Karte.** (I am paying by card.)
- **Zum Mitnehmen, bitte.** (To take away, please.)

**Food and drink vocabulary:**
der Kaffee, der Tee, das Wasser, das Bier, das Brot, der Käse, der Apfel, die Suppe, der Salat.

**Accusative reminder:** Masculine nouns change after "möchten":
- einen Kaffee (der Kaffee)
- einen Tee (der Tee)
- einen Apfel (der Apfel)
Feminine and neuter stay the same:
- eine Suppe (die Suppe)
- ein Wasser (das Wasser)

**Common mistakes:**
- ❌ Ich möchte ein Kaffee. → ✅ Ich möchte einen Kaffee.
- ❌ Ich will die Rechnung. (direct) → ✅ Die Rechnung, bitte.`,
        explanationHinglish: `**Polite order karna:**
- **Ich möchte** einen Kaffee, bitte. (Mujhe ek coffee chahiye, kripaya.)
- **Ich hätte gern** einen Tee. (Mujhe ek tea chahiye — bahut polite.)
- **Ich nehme** die Suppe. (Main soup le leta hoon.)
- **Die Speisekarte, bitte.** (Menu, kripaya.)

**End mein:**
- **Die Rechnung, bitte.** (Bill, kripaya.)
- **Zusammen oder getrennt?** (Saath mein ya alag-alag?)
- **Zusammen, bitte.** / **Getrennt, bitte.**
- **Ich zahle mit Karte.** (Main card se payment karunga.)
- **Zum Mitnehmen, bitte.** (Parcel/take away, kripaya.)

**Food aur drink vocabulary:**
der Kaffee, der Tee, das Wasser, das Bier, das Brot, der Käse, der Apfel, die Suppe, der Salat.

**Accusative reminder:** "möchten" ke baad masculine nouns badalte hain:
- einen Kaffee (der Kaffee)
- einen Tee (der Tee)
- einen Apfel (der Apfel)
Feminine aur neuter same rehte hain:
- eine Suppe (die Suppe)
- ein Wasser (das Wasser)

**Common mistakes:**
- ❌ Ich möchte ein Kaffee. → ✅ Ich möchte einen Kaffee.
- ❌ Ich will die Rechnung. (direct) → ✅ Die Rechnung, bitte.`,
        examples: [
          {
            german: 'Ich möchte einen Kaffee, bitte.',
            english: 'I would like a coffee, please.',
            hinglish: 'Mujhe ek coffee chahiye, kripaya.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'möchte', role: 'modal verb (polite)', meaning: 'would like' },
              { word: 'einen', role: 'accusative article (masculine)', meaning: 'a' },
              { word: 'Kaffee', role: 'noun (masculine)', meaning: 'coffee' },
              { word: 'bitte', role: 'politeness word', meaning: 'please' },
            ],
            audioText: 'Ich möchte einen Kaffee, bitte.',
          },
          {
            german: 'Die Rechnung, bitte.',
            english: 'The bill, please.',
            hinglish: 'Bill, kripaya.',
            audioText: 'Die Rechnung, bitte.',
          },
          {
            german: 'Zusammen oder getrennt?',
            english: 'Together or separately?',
            hinglish: 'Saath mein ya alag-alag?',
            audioText: 'Zusammen oder getrennt?',
          },
          {
            german: 'Ich zahle mit Karte.',
            english: 'I am paying by card.',
            hinglish: 'Main card se payment karunga.',
            audioText: 'Ich zahle mit Karte.',
          },
        ],
        realLifeContext: 'Ordering food is one of the first real conversations you will have in Germany. In cafés you often order at the counter, while in restaurants a server comes to your table. Asking for the bill is done with "Die Rechnung, bitte."',
        culturalNote: 'In Germany, it is normal to share a table in busy cafés ("Ist hier frei?" = Is this seat free?). Tipping is usually rounded up to the next euro or about 5–10%.',
        summary: [
          'Ich möchte ... / Ich hätte gern ... = I would like ...',
          'Die Rechnung, bitte = the bill, please',
          'Zusammen oder getrennt? = together or separately?',
          'Use accusative: einen Kaffee, einen Tee, eine Suppe',
          'Zum Mitnehmen = to take away',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-09-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich möchte ___ Kaffee, bitte."',
          questionHinglish: 'Complete karo: "Ich möchte ___ Kaffee, bitte."',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctAnswer: 'einen',
          explanation: '"Kaffee" is masculine and the direct object, so use "einen": einen Kaffee.',
          explanationHinglish: '"Kaffee" masculine hai aur direct object hai, isliye "einen": einen Kaffee.',
          difficulty: 2,
          xpReward: 10,
          tags: ['restaurant', 'accusative'],
        },
        {
          id: 'ex-a1-09-02-02',
          type: 'multiple-choice',
          question: 'How do you ask for the bill?',
          questionHinglish: 'Bill kaise maangoge?',
          options: ['Die Speisekarte, bitte.', 'Die Rechnung, bitte.', 'Das Wasser, bitte.', 'Der Kaffee, bitte.'],
          correctAnswer: 'Die Rechnung, bitte.',
          explanation: '"Die Rechnung" means the bill. "Die Speisekarte" is the menu.',
          explanationHinglish: '"Die Rechnung" ka matlab bill hai. "Die Speisekarte" menu hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['restaurant', 'phrases'],
        },
        {
          id: 'ex-a1-09-02-03',
          type: 'multiple-choice',
          question: 'What does "Zusammen oder getrennt?" mean?',
          questionHinglish: '"Zusammen oder getrennt?" ka matlab kya hai?',
          options: ['Cash or card?', 'Together or separately?', 'Here or to go?', 'Large or small?'],
          correctAnswer: 'Together or separately?',
          explanation: 'The server asks whether you are paying together or separately.',
          explanationHinglish: 'Server poochhta hai ki payment saath mein karna hai ya alag-alag.',
          difficulty: 2,
          xpReward: 10,
          tags: ['restaurant', 'meaning'],
        },
        {
          id: 'ex-a1-09-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Ich möchte ___ Tee."',
          questionHinglish: 'Complete karo: "Ich möchte ___ Tee."',
          options: ['ein', 'eine', 'einen', 'einem'],
          correctAnswer: 'einen',
          explanation: '"Tee" is masculine, so the accusative article is "einen": einen Tee.',
          explanationHinglish: '"Tee" masculine hai, isliye accusative article "einen": einen Tee.',
          difficulty: 2,
          xpReward: 10,
          tags: ['restaurant', 'accusative'],
        },
        {
          id: 'ex-a1-09-02-05',
          type: 'multiple-choice',
          question: 'What does "Zum Mitnehmen, bitte" mean?',
          questionHinglish: '"Zum Mitnehmen, bitte" ka matlab kya hai?',
          options: ['To eat here, please.', 'To take away, please.', 'The bill, please.', 'The menu, please.'],
          correctAnswer: 'To take away, please.',
          explanation: '"Zum Mitnehmen" means "to take away" / "for takeaway".',
          explanationHinglish: '"Zum Mitnehmen" ka matlab "parcel/take away" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['restaurant', 'meaning'],
        },
        {
          id: 'ex-a1-09-02-06',
          type: 'typing',
          question: 'Translate: "I would like a coffee, please."',
          questionHinglish: 'Translate karo: "I would like a coffee, please."',
          correctAnswer: 'Ich möchte einen Kaffee, bitte.',
          explanation: '"Kaffee" is masculine, so use "einen": Ich möchte einen Kaffee, bitte.',
          explanationHinglish: '"Kaffee" masculine hai, isliye "einen" use karo: Ich möchte einen Kaffee, bitte.',
          difficulty: 2,
          xpReward: 12,
          tags: ['restaurant', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-09-03',
      level: 'A1',
      moduleId: 'm-a1-09',
      title: 'Asking for Directions',
      titleHinglish: 'Raasta Poochhna',
      objective: 'Ask where places are and understand simple directions',
      objectiveHinglish: 'Jagah ke baare mein poochho aur simple directions samjho',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-09-02'],
      order: 3,
      grammarPoints: ['Wo ist...?', 'imperatives for directions', 'prepositions of place'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you stop a stranger politely in German?',
          'What places do you need to find in a new city?',
        ],
        explanation: `**Polite opener:**
- **Entschuldigung, ...** (Excuse me, ...)

**Asking where something is:**
- **Wo ist der Bahnhof?** (Where is the train station?)
- **Wo ist die Toilette?** (Where is the toilet?)
- **Wie komme ich zum Bahnhof?** (How do I get to the train station?)
- **Ist es weit?** (Is it far?)

**Directions:**
- **geradeaus** (straight ahead)
- **links** (left)
- **rechts** (right)
- **die erste Straße links** (the first street on the left)
- **an der Ampel** (at the traffic light)
- **in der Nähe** (nearby)
- **weit** (far)

**Useful sentences:**
- **Gehen Sie geradeaus.** (Go straight ahead.)
- **Biegen Sie rechts ab.** (Turn right.)
- **Es ist dort drüben.** (It is over there.)
- **Ich habe mich verlaufen.** (I am lost.)

**Places:**
der Bahnhof, der Supermarkt, die Apotheke, die Bank, die Post, die Toilette, das Hotel, das Restaurant.

**Common mistakes:**
- ❌ Wo ist Bahnhof? → ✅ Wo ist der Bahnhof? (German nouns need an article)
- ❌ Ich bin verloren. (less natural) → ✅ Ich habe mich verlaufen.`,
        explanationHinglish: `**Polite opener:**
- **Entschuldigung, ...** (Maaf kijiye, ...)

**Kisi jagah ke baare mein poochhna:**
- **Wo ist der Bahnhof?** (Station kahan hai?)
- **Wo ist die Toilette?** (Toilet kahan hai?)
- **Wie komme ich zum Bahnhof?** (Station kaise pahunchu?)
- **Ist es weit?** (Kya yeh door hai?)

**Directions:**
- **geradeaus** (seedha)
- **links** (baayein)
- **rechts** (daayein)
- **die erste Straße links** (pehli gali baayein)
- **an der Ampel** (traffic light par)
- **in der Nähe** (paas mein)
- **weit** (door)

**Useful sentences:**
- **Gehen Sie geradeaus.** (Seedha jaaiye.)
- **Biegen Sie rechts ab.** (Daayein mudiye.)
- **Es ist dort drüben.** (Woh wahan hai.)
- **Ich habe mich verlaufen.** (Main kho gaya hoon.)

**Places:**
der Bahnhof, der Supermarkt, die Apotheke, die Bank, die Post, die Toilette, das Hotel, das Restaurant.

**Common mistakes:**
- ❌ Wo ist Bahnhof? → ✅ Wo ist der Bahnhof? (German nouns ko article chahiye)
- ❌ Ich bin verloren. (less natural) → ✅ Ich habe mich verlaufen.`,
        examples: [
          {
            german: 'Entschuldigung, wo ist der Bahnhof?',
            english: 'Excuse me, where is the train station?',
            hinglish: 'Maaf kijiye, station kahan hai?',
            breakdown: [
              { word: 'Entschuldigung', role: 'polite opener', meaning: 'excuse me' },
              { word: 'wo', role: 'question word', meaning: 'where' },
              { word: 'ist', role: 'verb (sein, 3rd person)', meaning: 'is' },
              { word: 'der', role: 'article (masculine)', meaning: 'the' },
              { word: 'Bahnhof', role: 'noun (masculine)', meaning: 'train station' },
            ],
            audioText: 'Entschuldigung, wo ist der Bahnhof?',
          },
          {
            german: 'Gehen Sie geradeaus, dann biegen Sie links ab.',
            english: 'Go straight ahead, then turn left.',
            hinglish: 'Seedha jaaiye, phir baayein mudiye.',
            audioText: 'Gehen Sie geradeaus, dann biegen Sie links ab.',
          },
          {
            german: 'Die Apotheke ist in der Nähe.',
            english: 'The pharmacy is nearby.',
            hinglish: 'Pharmacy paas mein hai.',
            audioText: 'Die Apotheke ist in der Nähe.',
          },
          {
            german: 'Ich habe mich verlaufen.',
            english: 'I am lost.',
            hinglish: 'Main kho gaya hoon.',
            audioText: 'Ich habe mich verlaufen.',
          },
        ],
        realLifeContext: 'Finding your way is essential in a new city: locating the station, a pharmacy, your language school, or the registration office. Germans are usually helpful if you ask politely with "Entschuldigung".',
        culturalNote: 'In Germany, pedestrians expect you to follow traffic rules. At a red pedestrian light ("Ampel"), people usually wait even if no car is coming — especially if children are watching.',
        summary: [
          'Start politely with Entschuldigung',
          'Wo ist ...? = Where is ...?',
          'geradeaus = straight, links = left, rechts = right',
          'Biegen Sie ... ab = turn ...',
          'Ich habe mich verlaufen = I am lost',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-09-03-01',
          type: 'multiple-choice',
          question: 'How do you ask "Where is the train station?"',
          questionHinglish: '"Station kahan hai?" kaise poochhoge?',
          options: ['Wo ist der Bahnhof?', 'Wer ist der Bahnhof?', 'Wann ist der Bahnhof?', 'Was ist der Bahnhof?'],
          correctAnswer: 'Wo ist der Bahnhof?',
          explanation: '"Wo" asks about location: Wo ist der Bahnhof?',
          explanationHinglish: '"Wo" location ke baare mein puchta hai: Wo ist der Bahnhof?',
          difficulty: 1,
          xpReward: 8,
          tags: ['directions', 'questions'],
        },
        {
          id: 'ex-a1-09-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Biegen Sie ___ ab." (Turn right.)',
          questionHinglish: 'Complete karo: "Biegen Sie ___ ab." (Daayein mudiye.)',
          options: ['geradeaus', 'links', 'rechts', 'weit'],
          correctAnswer: 'rechts',
          explanation: '"rechts" means right. "Biegen Sie rechts ab" = turn right.',
          explanationHinglish: '"rechts" ka matlab daayein. "Biegen Sie rechts ab" = daayein mudiye.',
          difficulty: 1,
          xpReward: 8,
          tags: ['directions', 'vocabulary'],
        },
        {
          id: 'ex-a1-09-03-03',
          type: 'multiple-choice',
          question: 'What does "geradeaus" mean?',
          questionHinglish: '"geradeaus" ka matlab kya hai?',
          options: ['left', 'right', 'straight ahead', 'far'],
          correctAnswer: 'straight ahead',
          explanation: '"geradeaus" means straight ahead.',
          explanationHinglish: '"geradeaus" ka matlab seedha aage hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['directions', 'meaning'],
        },
        {
          id: 'ex-a1-09-03-04',
          type: 'multiple-choice',
          question: 'What does "Die Apotheke ist in der Nähe" mean?',
          questionHinglish: '"Die Apotheke ist in der Nähe" ka matlab kya hai?',
          options: ['The pharmacy is far away.', 'The pharmacy is nearby.', 'The pharmacy is closed.', 'The pharmacy is expensive.'],
          correctAnswer: 'The pharmacy is nearby.',
          explanation: '"in der Nähe" means nearby.',
          explanationHinglish: '"in der Nähe" ka matlab paas mein hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['directions', 'meaning'],
        },
        {
          id: 'ex-a1-09-03-05',
          type: 'matching',
          question: 'Match each direction word with its meaning:',
          questionHinglish: 'Har direction word ko uske meaning se milao:',
          options: [
            'geradeaus | straight ahead',
            'links | left',
            'rechts | right',
            'in der Nähe | nearby',
          ],
          correctAnswer: 'geradeaus | straight ahead',
          explanation: 'These four direction words are essential for understanding simple route instructions.',
          explanationHinglish: 'Yeh chaar direction words simple route instructions samajhne ke liye zaruri hain.',
          difficulty: 1,
          xpReward: 12,
          tags: ['directions', 'matching'],
        },
        {
          id: 'ex-a1-09-03-06',
          type: 'multiple-choice',
          question: 'Which phrase politely starts a question to a stranger?',
          questionHinglish: 'Kisi ajnabi se sawaal shuru karne ka polite phrase kaun sa hai?',
          options: ['Hey!', 'Entschuldigung, ...', 'Tschüss!', 'Danke!'],
          correctAnswer: 'Entschuldigung, ...',
          explanation: '"Entschuldigung" means "excuse me" and is the polite way to get someone\'s attention.',
          explanationHinglish: '"Entschuldigung" ka matlab "excuse me" hai aur kisi ka dhyan khinchne ka polite tarika hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['directions', 'politeness'],
        },
      ],
    },
  ],
};
