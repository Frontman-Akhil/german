// ============================================================
// A2 MODULE 2 – TALKING ABOUT THE PAST
// ============================================================

import type { Module } from '../types';

export const A2_MODULE_PAST: Module = {
  id: 'm-a2-02',
  level: 'A2',
  title: 'Talking About the Past',
  titleHinglish: 'Past ke Baare Mein Bolna',
  description: 'Use the Perfekt tense and the Präteritum of sein/haben to talk about past events.',
  descriptionHinglish: 'Perfekt tense aur sein/haben ke Präteritum se past events ke baare mein bolna seekho.',
  skills: ['grammar', 'speaking', 'writing'],
  order: 2,
  isComplete: true,
  lessons: [
    {
      id: 'l-a2-02-01',
      level: 'A2',
      moduleId: 'm-a2-02',
      title: 'The Perfekt with haben',
      titleHinglish: 'haben ke saath Perfekt',
      objective: 'Talk about completed past actions using haben + past participle',
      objectiveHinglish: 'haben + past participle use karke completed past actions ke baare mein bolo',
      estimatedMinutes: 25,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-09-03'],
      order: 1,
      grammarPoints: ['Perfekt', 'past participle', 'haben as auxiliary'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you talk about yesterday in your language?',
          'Do you know the past participle of "lernen" or "essen"?',
        ],
        explanation: `In spoken German, the **Perfekt** is the normal past tense. It has two parts:

**haben (conjugated) + past participle at the end**

- Ich **habe** gestern Deutsch **gelernt**.
- Wir **haben** im Restaurant **gegessen**.

**Regular past participles:** ge- + stem + -t
- lernen → **gelernt**
- machen → **gemacht**
- wohnen → **gewohnt**
- kaufen → **gekauft**
- arbeiten → **gearbeitet** (extra -e- because the stem ends in -t)

**Common irregular participles:** ge- + changed stem + -en
- essen → **gegessen**
- trinken → **getrunken**
- sehen → **gesehen**
- lesen → **gelesen**
- sprechen → **gesprochen**
- nehmen → **genommen**

**Word order:** The auxiliary "haben" is in position 2. The participle goes to the **end**.
- Ich habe gestern Deutsch gelernt.
- Gestern **habe** ich Deutsch **gelernt**. (inversion after "Gestern")

**Useful past time expressions:** gestern, vorgestern, letzte Woche, letzten Monat, vor zwei Tagen.

**Common mistakes:**
- ❌ Ich habe gelernt Deutsch. → ✅ Ich habe Deutsch gelernt.
- ❌ Ich bin Deutsch gelernt. → ✅ Ich habe Deutsch gelernt. (most verbs use haben)`,
        explanationHinglish: `Spoken German mein **Perfekt** normal past tense hai. Iske do parts hote hain:

**haben (conjugated) + past participle end par**

- Ich **habe** gestern Deutsch **gelernt**.
- Wir **haben** im Restaurant **gegessen**.

**Regular past participles:** ge- + stem + -t
- lernen → **gelernt**
- machen → **gemacht**
- wohnen → **gewohnt**
- kaufen → **gekauft**
- arbeiten → **gearbeitet** (extra -e- kyunki stem -t par khatam hota hai)

**Common irregular participles:** ge- + changed stem + -en
- essen → **gegessen**
- trinken → **getrunken**
- sehen → **gesehen**
- lesen → **gelesen**
- sprechen → **gesprochen**
- nehmen → **genommen**

**Word order:** Auxiliary "haben" position 2 par. Participle **end** par.
- Ich habe gestern Deutsch gelernt.
- Gestern **habe** ich Deutsch **gelernt**. ("Gestern" ke baad inversion)

**Useful past time expressions:** gestern, vorgestern, letzte Woche, letzten Monat, vor zwei Tagen.

**Common mistakes:**
- ❌ Ich habe gelernt Deutsch. → ✅ Ich habe Deutsch gelernt.
- ❌ Ich bin Deutsch gelernt. → ✅ Ich habe Deutsch gelernt. (zyada verbs haben use karte hain)`,
        examples: [
          {
            german: 'Ich habe gestern Deutsch gelernt.',
            english: 'I learned German yesterday.',
            hinglish: 'Maine kal German seekha.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'auxiliary (haben, position 2)', meaning: 'have' },
              { word: 'gestern', role: 'time adverb', meaning: 'yesterday' },
              { word: 'Deutsch', role: 'object', meaning: 'German' },
              { word: 'gelernt', role: 'past participle (end)', meaning: 'learned' },
            ],
            audioText: 'Ich habe gestern Deutsch gelernt.',
          },
          {
            german: 'Wir haben im Restaurant gegessen.',
            english: 'We ate in the restaurant.',
            hinglish: 'Humne restaurant mein khana khaya.',
            audioText: 'Wir haben im Restaurant gegessen.',
          },
          {
            german: 'Gestern habe ich einen Film gesehen.',
            english: 'Yesterday I watched a film.',
            hinglish: 'Kal maine ek film dekhi.',
            audioText: 'Gestern habe ich einen Film gesehen.',
          },
        ],
        realLifeContext: 'The Perfekt is how people actually talk about the past in everyday German: what you did at the weekend, where you ate, what you bought, and what you learned. It is also essential for A2 exams.',
        culturalNote: 'In northern Germany, people use the Perfekt in speech and the Präteritum mostly in writing. In the south, the Perfekt is even more dominant.',
        summary: [
          'Perfekt = haben + past participle at the end',
          'Regular participle: ge- + stem + -t (gelernt, gemacht)',
          'Irregular participle: gegessen, getrunken, gesehen, gelesen',
          'haben stays in position 2; the participle goes to the end',
          'Time expressions: gestern, letzte Woche, vor zwei Tagen',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-02-01-01',
          type: 'multiple-choice',
          question: 'What is the past participle of "lernen"?',
          questionHinglish: '"lernen" ka past participle kya hai?',
          options: ['gelernen', 'gelernt', 'lernte', 'gelern'],
          correctAnswer: 'gelernt',
          explanation: 'Regular verbs take ge- + stem + -t: lernen → gelernt.',
          explanationHinglish: 'Regular verbs ge- + stem + -t lete hain: lernen → gelernt.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'participle'],
        },
        {
          id: 'ex-a2-02-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ gestern Deutsch gelernt."',
          questionHinglish: 'Complete karo: "Ich ___ gestern Deutsch gelernt."',
          options: ['bin', 'habe', 'hat', 'ist'],
          correctAnswer: 'habe',
          explanation: 'The Perfekt of most verbs uses haben. For "ich", the form is "habe": Ich habe gelernt.',
          explanationHinglish: 'Zyada verbs ka Perfekt haben se banta hai. "ich" ke liye "habe": Ich habe gelernt.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'haben'],
        },
        {
          id: 'ex-a2-02-01-03',
          type: 'multiple-choice',
          question: 'What is the past participle of "essen"?',
          questionHinglish: '"essen" ka past participle kya hai?',
          options: ['gegessen', 'geesst', 'gegess', 'essen'],
          correctAnswer: 'gegessen',
          explanation: '"essen" is irregular: gegessen. Example: Ich habe gegessen.',
          explanationHinglish: '"essen" irregular hai: gegessen. Example: Ich habe gegessen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'participle', 'irregular'],
        },
        {
          id: 'ex-a2-02-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct Perfekt sentence: "Ich / habe / gestern / Deutsch / gelernt / ."',
          questionHinglish: 'Sahi Perfekt sentence banao: "Ich / habe / gestern / Deutsch / gelernt / ."',
          options: ['Ich', 'habe', 'gestern', 'Deutsch', 'gelernt', '.'],
          correctAnswer: 'Ich habe gestern Deutsch gelernt .',
          explanation: 'Auxiliary in position 2, participle at the end: Ich habe gestern Deutsch gelernt.',
          explanationHinglish: 'Auxiliary position 2 par, participle end par: Ich habe gestern Deutsch gelernt.',
          difficulty: 2,
          xpReward: 12,
          tags: ['perfekt', 'word-order'],
        },
        {
          id: 'ex-a2-02-01-05',
          type: 'typing',
          question: 'Translate: "I bought a book yesterday."',
          questionHinglish: 'Translate karo: "I bought a book yesterday."',
          correctAnswer: 'Ich habe gestern ein Buch gekauft.',
          explanation: 'kaufen → gekauft. Use haben + participle: Ich habe gestern ein Buch gekauft.',
          explanationHinglish: 'kaufen → gekauft. haben + participle use karo: Ich habe gestern ein Buch gekauft.',
          difficulty: 3,
          xpReward: 12,
          tags: ['perfekt', 'typing'],
        },
      ],
    },
    {
      id: 'l-a2-02-02',
      level: 'A2',
      moduleId: 'm-a2-02',
      title: 'The Perfekt with sein',
      titleHinglish: 'sein ke saath Perfekt',
      objective: 'Use sein as the auxiliary for movement and change-of-state verbs',
      objectiveHinglish: 'Movement aur change-of-state verbs ke liye sein auxiliary use karo',
      estimatedMinutes: 22,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a2-02-01'],
      order: 2,
      grammarPoints: ['Perfekt with sein', 'movement verbs', 'gegangen/gefahren'],
      vocabulary: [],
      content: {
        warmUp: [
          'Which verbs describe movement? (go, come, travel...)',
          'Do you remember the forms of sein?',
        ],
        explanation: `Most verbs use **haben** in the Perfekt. But some verbs use **sein**:
- verbs of **movement** from A to B: gehen, kommen, fahren, fliegen, reisen
- verbs of **change of state**: aufstehen, einschlafen, aufwachen, werden
- **bleiben** (to stay) and **passieren** (to happen) also use sein

**Structure:** sein (conjugated) + past participle at the end
- Ich **bin** nach Berlin **gefahren**.
- Wir **sind** zu Hause **geblieben**.
- Er **ist** früh **aufgestanden**.

**sein forms:** ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.

**Common participles:**
- gehen → **gegangen**
- kommen → **gekommen**
- fahren → **gefahren**
- fliegen → **geflogen**
- aufstehen → **aufgestanden**
- bleiben → **geblieben**
- werden → **geworden**

**Word order:** same as with haben — auxiliary in position 2, participle at the end.
- Gestern **bin** ich ins Kino **gegangen**.
- Ich **bin** gestern ins Kino **gegangen**.

**Common mistakes:**
- ❌ Ich habe nach Berlin gefahren. → ✅ Ich bin nach Berlin gefahren.
- ❌ Ich bin Deutsch gelernt. → ✅ Ich habe Deutsch gelernt. (learning is not movement)`,
        explanationHinglish: `Zyada verbs Perfekt mein **haben** use karte hain. Lekin kuch verbs **sein** use karte hain:
- **movement** verbs A se B: gehen, kommen, fahren, fliegen, reisen
- **change of state** verbs: aufstehen, einschlafen, aufwachen, werden
- **bleiben** (rehna) aur **passieren** (hona) bhi sein use karte hain

**Structure:** sein (conjugated) + past participle end par
- Ich **bin** nach Berlin **gefahren**.
- Wir **sind** zu Hause **geblieben**.
- Er **ist** früh **aufgestanden**.

**sein forms:** ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind.

**Common participles:**
- gehen → **gegangen**
- kommen → **gekommen**
- fahren → **gefahren**
- fliegen → **geflogen**
- aufstehen → **aufgestanden**
- bleiben → **geblieben**
- werden → **geworden**

**Word order:** haben jaisa hi — auxiliary position 2, participle end.
- Gestern **bin** ich ins Kino **gegangen**.
- Ich **bin** gestern ins Kino **gegangen**.

**Common mistakes:**
- ❌ Ich habe nach Berlin gefahren. → ✅ Ich bin nach Berlin gefahren.
- ❌ Ich bin Deutsch gelernt. → ✅ Ich habe Deutsch gelernt. (seekhna movement nahi hai)`,
        examples: [
          {
            german: 'Ich bin gestern nach Berlin gefahren.',
            english: 'I went to Berlin yesterday.',
            hinglish: 'Main kal Berlin gaya.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'bin', role: 'auxiliary (sein, position 2)', meaning: 'am' },
              { word: 'gestern', role: 'time adverb', meaning: 'yesterday' },
              { word: 'nach Berlin', role: 'destination', meaning: 'to Berlin' },
              { word: 'gefahren', role: 'past participle (end)', meaning: 'driven / gone' },
            ],
            audioText: 'Ich bin gestern nach Berlin gefahren.',
          },
          {
            german: 'Wir sind zu Hause geblieben.',
            english: 'We stayed at home.',
            hinglish: 'Hum ghar par rahe.',
            audioText: 'Wir sind zu Hause geblieben.',
          },
          {
            german: 'Er ist früh aufgestanden.',
            english: 'He got up early.',
            hinglish: 'Woh jaldi utha.',
            audioText: 'Er ist früh aufgestanden.',
          },
        ],
        realLifeContext: 'Talking about trips, weekends, and daily routines in the past is a core A2 skill. "Ich bin nach ... gefahren" and "Wir sind ... geblieben" appear constantly in conversations and exams.',
        culturalNote: 'Some verbs can take both auxiliaries depending on meaning. "Ich habe das Auto gefahren" (I drove the car — transitive) vs. "Ich bin nach Berlin gefahren" (I went to Berlin — movement).',
        summary: [
          'Movement and change-of-state verbs use sein in the Perfekt',
          'sein forms: bin, bist, ist, sind, seid, sind',
          'gehen → gegangen, kommen → gekommen, fahren → gefahren',
          'bleiben and passieren also use sein',
          'Participle still goes to the end',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-02-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ gestern ins Kino gegangen."',
          questionHinglish: 'Complete karo: "Ich ___ gestern ins Kino gegangen."',
          options: ['habe', 'bin', 'hat', 'ist'],
          correctAnswer: 'bin',
          explanation: '"gehen" is a movement verb, so the Perfekt uses sein: Ich bin gegangen.',
          explanationHinglish: '"gehen" movement verb hai, isliye Perfekt mein sein: Ich bin gegangen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'sein', 'movement'],
        },
        {
          id: 'ex-a2-02-02-02',
          type: 'multiple-choice',
          question: 'What is the past participle of "kommen"?',
          questionHinglish: '"kommen" ka past participle kya hai?',
          options: ['gekommt', 'gekommen', 'kam', 'kommte'],
          correctAnswer: 'gekommen',
          explanation: '"kommen" is irregular: gekommen. Example: Er ist gekommen.',
          explanationHinglish: '"kommen" irregular hai: gekommen. Example: Er ist gekommen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'participle'],
        },
        {
          id: 'ex-a2-02-02-03',
          type: 'multiple-choice',
          question: 'Which sentence is correct?',
          questionHinglish: 'Kaun sa sentence sahi hai?',
          options: [
            'Ich habe nach Berlin gefahren.',
            'Ich bin nach Berlin gefahren.',
            'Ich bin nach Berlin gefahrt.',
            'Ich habe nach Berlin gefahrt.',
          ],
          correctAnswer: 'Ich bin nach Berlin gefahren.',
          explanation: '"fahren" is a movement verb and takes sein: Ich bin nach Berlin gefahren.',
          explanationHinglish: '"fahren" movement verb hai aur sein leta hai: Ich bin nach Berlin gefahren.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'sein', 'common-mistakes'],
        },
        {
          id: 'ex-a2-02-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Wir / sind / zu Hause / geblieben / ."',
          questionHinglish: 'Sahi sentence banao: "Wir / sind / zu Hause / geblieben / ."',
          options: ['Wir', 'sind', 'zu Hause', 'geblieben', '.'],
          correctAnswer: 'Wir sind zu Hause geblieben .',
          explanation: 'Auxiliary sein in position 2, participle at the end: Wir sind zu Hause geblieben.',
          explanationHinglish: 'Auxiliary sein position 2 par, participle end par: Wir sind zu Hause geblieben.',
          difficulty: 2,
          xpReward: 12,
          tags: ['perfekt', 'word-order'],
        },
        {
          id: 'ex-a2-02-02-05',
          type: 'typing',
          question: 'Translate: "I came home late." (nach Hause)',
          questionHinglish: 'Translate karo: "I came home late." (nach Hause)',
          correctAnswer: 'Ich bin spät nach Hause gekommen.',
          explanation: '"kommen" uses sein in the Perfekt: Ich bin spät nach Hause gekommen.',
          explanationHinglish: '"kommen" Perfekt mein sein use karta hai: Ich bin spät nach Hause gekommen.',
          difficulty: 3,
          xpReward: 12,
          tags: ['perfekt', 'sein', 'typing'],
        },
      ],
    },
    {
      id: 'l-a2-02-03',
      level: 'A2',
      moduleId: 'm-a2-02',
      title: 'Präteritum of sein and haben',
      titleHinglish: 'sein aur haben ka Präteritum',
      objective: 'Use war and hatte to describe past states and possessions',
      objectiveHinglish: 'war aur hatte use karke past states aur possessions describe karo',
      estimatedMinutes: 18,
      skillFocus: ['grammar', 'writing'],
      prerequisites: ['l-a2-02-02'],
      order: 3,
      grammarPoints: ['Präteritum', 'war/hatte', 'spoken vs written past'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "I was" and "I had" in German?',
          'Which past tense do Germans use in stories?',
        ],
        explanation: `The **Präteritum** is the simple past. In spoken German it is mostly used with **sein** and **haben**, and with modal verbs.

**sein → war**
| Person | Form |
|--------|------|
| ich | war |
| du | warst |
| er/sie/es | war |
| wir | waren |
| ihr | wart |
| sie/Sie | waren |

**haben → hatte**
| Person | Form |
|--------|------|
| ich | hatte |
| du | hattest |
| er/sie/es | hatte |
| wir | hatten |
| ihr | hattet |
| sie/Sie | hatten |

**Examples:**
- Ich **war** gestern krank. (I was ill yesterday.)
- Wir **waren** im Urlaub. (We were on holiday.)
- Ich **hatte** keine Zeit. (I had no time.)
- Sie **hatten** ein Haus. (They had a house.)

**Perfekt vs. Präteritum:**
- Spoken: Ich **bin** zu Hause **geblieben**. / Ich **habe** gearbeitet.
- War/hatte are common in speech: Ich **war** müde. Ich **hatte** Hunger.
- Long stories and news use the Präteritum more: Er **war** alt. Sie **hatte** Angst.

**Common mistakes:**
- ❌ Ich bin krank gestern. → ✅ Ich war gestern krank.
- ❌ Ich habe hatte Zeit. → ✅ Ich hatte Zeit.`,
        explanationHinglish: `**Präteritum** simple past hai. Spoken German mein yeh zyada tar **sein** aur **haben** ke saath use hota hai, aur modal verbs ke saath.

**sein → war**
| Person | Form |
|--------|------|
| ich | war |
| du | warst |
| er/sie/es | war |
| wir | waren |
| ihr | wart |
| sie/Sie | waren |

**haben → hatte**
| Person | Form |
|--------|------|
| ich | hatte |
| du | hattest |
| er/sie/es | hatte |
| wir | hatten |
| ihr | hattet |
| sie/Sie | hatten |

**Examples:**
- Ich **war** gestern krank. (Main kal beemar tha.)
- Wir **waren** im Urlaub. (Hum chhutti par the.)
- Ich **hatte** keine Zeit. (Mere paas time nahi tha.)
- Sie **hatten** ein Haus. (Unke paas ghar tha.)

**Perfekt vs. Präteritum:**
- Spoken: Ich **bin** zu Hause **geblieben**. / Ich **habe** gearbeitet.
- War/hatte speech mein common hain: Ich **war** müde. Ich **hatte** Hunger.
- Stories aur news mein Präteritum zyada: Er **war** alt. Sie **hatte** Angst.

**Common mistakes:**
- ❌ Ich bin krank gestern. → ✅ Ich war gestern krank.
- ❌ Ich habe hatte Zeit. → ✅ Ich hatte Zeit.`,
        examples: [
          {
            german: 'Ich war gestern krank.',
            english: 'I was ill yesterday.',
            hinglish: 'Main kal beemar tha.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'war', role: 'Präteritum of sein', meaning: 'was' },
              { word: 'gestern', role: 'time adverb', meaning: 'yesterday' },
              { word: 'krank', role: 'adjective', meaning: 'ill' },
            ],
            audioText: 'Ich war gestern krank.',
          },
          {
            german: 'Wir hatten keine Zeit.',
            english: 'We had no time.',
            hinglish: 'Humare paas time nahi tha.',
            audioText: 'Wir hatten keine Zeit.',
          },
          {
            german: 'Sie war zu Hause.',
            english: 'She was at home.',
            hinglish: 'Woh ghar par thi.',
            audioText: 'Sie war zu Hause.',
          },
        ],
        realLifeContext: 'War and hatte are used every day: explaining why you were absent ("Ich war krank"), saying you had no time, or describing a past situation. They are also the backbone of storytelling.',
        culturalNote: 'Germans often say "Ich war..." and "Ich hatte..." even though the Perfekt is the main spoken past. Using "Ich bin gewesen" or "Ich habe gehabt" sounds unusual in most contexts.',
        summary: [
          'sein → war: ich war, du warst, er war, wir waren',
          'haben → hatte: ich hatte, du hattest, er hatte, wir hatten',
          'Use war/hatte for past states and possessions',
          'Präteritum is common in writing and storytelling',
          'Do not say "Ich bin gewesen" in normal conversation',
        ],
      },
      exercises: [
        {
          id: 'ex-a2-02-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ gestern krank."',
          questionHinglish: 'Complete karo: "Ich ___ gestern krank."',
          options: ['war', 'hatte', 'bin', 'habe'],
          correctAnswer: 'war',
          explanation: 'The past of sein for "ich" is "war": Ich war gestern krank.',
          explanationHinglish: 'sein ka past "ich" ke liye "war" hai: Ich war gestern krank.',
          difficulty: 1,
          xpReward: 8,
          tags: ['präteritum', 'sein'],
        },
        {
          id: 'ex-a2-02-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Wir ___ keine Zeit." (we had)',
          questionHinglish: 'Complete karo: "Wir ___ keine Zeit." (humare paas tha nahi)',
          options: ['war', 'waren', 'hatten', 'hatte'],
          correctAnswer: 'hatten',
          explanation: 'The Präteritum of haben for "wir" is "hatten": Wir hatten keine Zeit.',
          explanationHinglish: 'haben ka Präteritum "wir" ke liye "hatten" hai: Wir hatten keine Zeit.',
          difficulty: 2,
          xpReward: 10,
          tags: ['präteritum', 'haben'],
        },
        {
          id: 'ex-a2-02-03-03',
          type: 'multiple-choice',
          question: 'Which sentence is correct?',
          questionHinglish: 'Kaun sa sentence sahi hai?',
          options: ['Ich bin gestern krank.', 'Ich war gestern krank.', 'Ich habe gestern krank.', 'Ich hatte gestern krank.'],
          correctAnswer: 'Ich war gestern krank.',
          explanation: 'A past state is expressed with "war": Ich war gestern krank.',
          explanationHinglish: 'Past state ke liye "war" use hota hai: Ich war gestern krank.',
          difficulty: 2,
          xpReward: 10,
          tags: ['präteritum', 'common-mistakes'],
        },
        {
          id: 'ex-a2-02-03-04',
          type: 'typing',
          question: 'Translate: "I had a dog." (der Hund)',
          questionHinglish: 'Translate karo: "I had a dog." (der Hund)',
          correctAnswer: 'Ich hatte einen Hund.',
          explanation: 'Use "hatte" for "had": Ich hatte einen Hund. "Hund" is masculine accusative, so "einen".',
          explanationHinglish: '"had" ke liye "hatte": Ich hatte einen Hund. "Hund" masculine accusative hai, isliye "einen".',
          difficulty: 3,
          xpReward: 12,
          tags: ['präteritum', 'typing'],
        },
        {
          id: 'ex-a2-02-03-05',
          type: 'multiple-choice',
          question: 'Which form is the Präteritum of "sein" for "sie" (they)?',
          questionHinglish: '"sein" ka Präteritum "sie" (they) ke liye kaun sa hai?',
          options: ['sind', 'waren', 'war', 'wart'],
          correctAnswer: 'waren',
          explanation: 'For "sie" (they) and "wir", the Präteritum of sein is "waren".',
          explanationHinglish: '"sie" (they) aur "wir" ke liye sein ka Präteritum "waren" hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['präteritum', 'sein'],
        },
      ],
    },
  ],
};
