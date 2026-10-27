// ============================================================
// A1 MODULE 15 – PAST TENSE BASICS
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_PASTBASICS: Module = {
  id: 'm-a1-15',
  level: 'A1',
  title: 'Past Tense Basics',
  titleHinglish: 'Past Tense ki Shuruaat',
  description: 'Talk about yesterday and the weekend using the Perfekt with haben and sein.',
  descriptionHinglish: 'haben aur sein ke saath Perfekt use karke kal aur weekend ke baare mein bolo.',
  skills: ['grammar', 'speaking', 'writing'],
  order: 15,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-15-01',
      level: 'A1',
      moduleId: 'm-a1-15',
      title: 'Perfekt with haben',
      titleHinglish: 'haben ke saath Perfekt',
      objective: 'Talk about completed actions using the Perfekt with haben',
      objectiveHinglish: 'haben ke saath Perfekt use karke complete actions ke baare mein bolo',
      estimatedMinutes: 22,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-14-03'],
      order: 1,
      grammarPoints: ['Perfekt', 'past participles', 'haben as auxiliary'],
      vocabulary: [],
      content: {
        warmUp: [
          'What did you do yesterday?',
          'How do you say "I played football" in German?',
        ],
        explanation: `The **Perfekt** is the usual past tense in spoken German. It has two parts:
1. **haben** or **sein** (auxiliary) in position 2
2. the **past participle** at the end

**Most verbs use haben:**
- Ich **habe** Tennis **gespielt**. = I played tennis.
- Ich **habe** Deutsch **gelernt**. = I learned German.
- Ich **habe** Pizza **gegessen**. = I ate pizza.
- Ich **habe** einen Film **gesehen**. = I watched a film.
- **Was hast du** gestern **gemacht**? = What did you do yesterday?

**Regular participles:**
ge- + verb stem + -t
- spielen → **gespielt**
- lernen → **gelernt**
- kaufen → **gekauft**
- machen → **gemacht**
- arbeiten → **gearbeitet** (add -e- after t/d)

**Verbs ending in -ieren: no ge-**
- studieren → **studiert**
- telefonieren → **telefoniert**

**Common irregular participles:**
- essen → **gegessen**
- trinken → **getrunken**
- sehen → **gesehen**
- lesen → **gelesen**
- schreiben → **geschrieben**
- nehmen → **genommen**
- sprechen → **gesprochen**

**Word order:**
- Ich **habe** gestern Fußball **gespielt**.
- Gestern **habe** ich Fußball **gespielt**.
The participle stays at the end.

**Common mistakes:**
- ❌ Ich habe gespielt Tennis. → ✅ Ich habe Tennis **gespielt**.
- ❌ Ich bin Tennis gespielt. → ✅ Ich **habe** Tennis gespielt.
- ❌ Ich habe studiert Deutsch. → ✅ Ich habe Deutsch **studiert**.`,
        explanationHinglish: `**Perfekt** spoken German ka common past tense hai. Iske do parts hote hain:
1. **haben** ya **sein** (auxiliary) position 2 par
2. **past participle** end par

**Zyadatar verbs haben use karte hain:**
- Ich **habe** Tennis **gespielt**. = Main tennis khela.
- Ich **habe** Deutsch **gelernt**. = Main German seekha.
- Ich **habe** Pizza **gegessen**. = Main pizza khaya.
- Ich **habe** einen Film **gesehen**. = Main film dekhi.
- **Was hast du** gestern **gemacht**? = Kal tumne kya kiya?

**Regular participles:**
ge- + verb stem + -t
- spielen → **gespielt**
- lernen → **gelernt**
- kaufen → **gekauft**
- machen → **gemacht**
- arbeiten → **gearbeitet** (t/d ke baad -e-)

**-ieren verbs: ge- nahi lagta**
- studieren → **studiert**
- telefonieren → **telefoniert**

**Common irregular participles:**
- essen → **gegessen**
- trinken → **getrunken**
- sehen → **gesehen**
- lesen → **gelesen**
- schreiben → **geschrieben**
- nehmen → **genommen**
- sprechen → **gesprochen**

**Word order:**
- Ich **habe** gestern Fußball **gespielt**.
- Gestern **habe** ich Fußball **gespielt**.
Participle end par rehta hai.

**Common mistakes:**
- ❌ Ich habe gespielt Tennis. → ✅ Ich habe Tennis **gespielt**.
- ❌ Ich bin Tennis gespielt. → ✅ Ich **habe** Tennis gespielt.
- ❌ Ich habe studiert Deutsch. → ✅ Ich habe Deutsch **studiert**.`,
        examples: [
          {
            german: 'Ich habe Tennis gespielt.',
            english: 'I played tennis.',
            hinglish: 'Main tennis khela.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'habe', role: 'auxiliary (position 2)', meaning: 'have' },
              { word: 'Tennis', role: 'object', meaning: 'tennis' },
              { word: 'gespielt', role: 'past participle', meaning: 'played' },
            ],
            audioText: 'Ich habe Tennis gespielt.',
          },
          {
            german: 'Was hast du gestern gemacht?',
            english: 'What did you do yesterday?',
            hinglish: 'Kal tumne kya kiya?',
            audioText: 'Was hast du gestern gemacht?',
          },
          {
            german: 'Ich habe Deutsch gelernt.',
            english: 'I learned German.',
            hinglish: 'Main German seekha.',
            audioText: 'Ich habe Deutsch gelernt.',
          },
        ],
        realLifeContext: 'The Perfekt is the main past tense in everyday conversation. You need it to talk about your weekend, your day, holidays, and recent events.',
        culturalNote: 'In formal writing, German often uses the Präteritum instead of the Perfekt. In speech, Perfekt is much more common, even for events further in the past.',
        summary: [
          'Perfekt = haben/sein + past participle at the end',
          'Most verbs use haben',
          'Regular participle: ge- + stem + -t',
          '-ieren verbs have no ge-',
          'Was hast du gemacht? = What did you do?',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-15-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ Tennis gespielt."',
          questionHinglish: 'Complete karo: "Ich ___ Tennis gespielt."',
          options: ['habe', 'bin', 'hat', 'ist'],
          correctAnswer: 'habe',
          explanation: '"spielen" uses the auxiliary "haben": Ich habe Tennis gespielt.',
          explanationHinglish: '"spielen" auxiliary "haben" leta hai: Ich habe Tennis gespielt.',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'haben'],
        },
        {
          id: 'ex-a1-15-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Was hast du ___?"',
          questionHinglish: 'Complete karo: "Was hast du ___?"',
          options: ['gemacht', 'machen', 'machte', 'machst'],
          correctAnswer: 'gemacht',
          explanation: 'The past participle of "machen" is "gemacht": Was hast du gemacht?',
          explanationHinglish: '"machen" ka past participle "gemacht": Was hast du gemacht?',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'participles'],
        },
        {
          id: 'ex-a1-15-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe Deutsch ___."',
          questionHinglish: 'Complete karo: "Ich habe Deutsch ___."',
          options: ['gelernt', 'lernen', 'gelernen', 'lernst'],
          correctAnswer: 'gelernt',
          explanation: 'The past participle of "lernen" is "gelernt".',
          explanationHinglish: '"lernen" ka past participle "gelernt" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'participles'],
        },
        {
          id: 'ex-a1-15-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / habe / gestern / Fußball / gespielt / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / habe / gestern / Fußball / gespielt / ."',
          options: ['Ich', 'habe', 'gestern', 'Fußball', 'gespielt', '.'],
          correctAnswer: 'Ich habe gestern Fußball gespielt .',
          explanation: 'Auxiliary in position 2, participle at the end: Ich habe gestern Fußball gespielt.',
          explanationHinglish: 'Auxiliary position 2, participle end par: Ich habe gestern Fußball gespielt.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'word-order'],
        },
        {
          id: 'ex-a1-15-01-05',
          type: 'typing',
          question: 'Translate: "I learned German."',
          questionHinglish: 'Translate karo: "I learned German."',
          correctAnswer: 'Ich habe Deutsch gelernt.',
          explanation: 'Use Perfekt with haben: Ich habe Deutsch gelernt.',
          explanationHinglish: 'haben ke saath Perfekt use karo: Ich habe Deutsch gelernt.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-15-02',
      level: 'A1',
      moduleId: 'm-a1-15',
      title: 'Perfekt with sein',
      titleHinglish: 'sein ke saath Perfekt',
      objective: 'Use sein with movement and change-of-state verbs in the Perfekt',
      objectiveHinglish: 'Movement aur change-of-state verbs ke saath sein ka Perfekt use karo',
      estimatedMinutes: 20,
      skillFocus: ['grammar', 'speaking'],
      prerequisites: ['l-a1-15-01'],
      order: 2,
      grammarPoints: ['sein as auxiliary', 'movement verbs', 'past participles'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "I went to Berlin"?',
          'Do you use haben or sein with "gehen"?',
        ],
        explanation: `Some verbs use **sein** instead of **haben** in the Perfekt. These are mainly:
- verbs of **movement from A to B**
- verbs of **change of state**
- **sein** and **bleiben**

**Common verbs with sein:**
- gehen → **gegangen**: Ich bin ins Kino gegangen.
- fahren → **gefahren**: Ich bin nach Berlin gefahren.
- fliegen → **geflogen**: Ich bin nach London geflogen.
- kommen → **gekommen**: Er ist spät gekommen.
- bleiben → **geblieben**: Ich bin zu Hause geblieben.
- aufstehen → **aufgestanden**: Ich bin früh aufgestanden.
- einschlafen → **eingeschlafen**: Das Kind ist eingeschlafen.
- sein → **gewesen**: Ich bin zu Hause gewesen.

**Examples:**
- Ich **bin** nach Berlin **gefahren**.
- Wir **sind** ins Kino **gegangen**.
- Er **ist** zu Hause **geblieben**.
- **Wo bist du gewesen?** = Where have you been?
- Ich **bin** müde **geworden**. = I became tired.

**Word order is the same as with haben:**
auxiliary in position 2, participle at the end.
- Gestern **bin** ich nach Hamburg **gefahren**.

**Common mistakes:**
- ❌ Ich habe nach Berlin gefahren. → ✅ Ich **bin** nach Berlin gefahren.
- ❌ Ich bin Tennis gespielt. → ✅ Ich **habe** Tennis gespielt.
- ❌ Ich habe zu Hause geblieben. → ✅ Ich **bin** zu Hause geblieben.`,
        explanationHinglish: `Kuch verbs Perfekt mein **sein** use karte hain, **haben** nahi. Yeh mainly:
- **A se B tak movement**
- **change of state**
- **sein** aur **bleiben**

**Sein ke saath common verbs:**
- gehen → **gegangen**: Ich bin ins Kino gegangen.
- fahren → **gefahren**: Ich bin nach Berlin gefahren.
- fliegen → **geflogen**: Ich bin nach London geflogen.
- kommen → **gekommen**: Er ist spät gekommen.
- bleiben → **geblieben**: Ich bin zu Hause geblieben.
- aufstehen → **aufgestanden**: Ich bin früh aufgestanden.
- einschlafen → **eingeschlafen**: Das Kind ist eingeschlafen.
- sein → **gewesen**: Ich bin zu Hause gewesen.

**Examples:**
- Ich **bin** nach Berlin **gefahren**.
- Wir **sind** ins Kino **gegangen**.
- Er **ist** zu Hause **geblieben**.
- **Wo bist du gewesen?** = Tum kahan the?
- Ich **bin** müde **geworden**. = Main thak gaya.

**Word order haben jaisa hi:**
auxiliary position 2, participle end par.
- Gestern **bin** ich nach Hamburg **gefahren**.

**Common mistakes:**
- ❌ Ich habe nach Berlin gefahren. → ✅ Ich **bin** nach Berlin gefahren.
- ❌ Ich bin Tennis gespielt. → ✅ Ich **habe** Tennis gespielt.
- ❌ Ich habe zu Hause geblieben. → ✅ Ich **bin** zu Hause geblieben.`,
        examples: [
          {
            german: 'Ich bin nach Berlin gefahren.',
            english: 'I went to Berlin.',
            hinglish: 'Main Berlin gaya.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'bin', role: 'auxiliary (position 2)', meaning: 'am' },
              { word: 'nach Berlin', role: 'destination', meaning: 'to Berlin' },
              { word: 'gefahren', role: 'past participle', meaning: 'travelled / driven' },
            ],
            audioText: 'Ich bin nach Berlin gefahren.',
          },
          {
            german: 'Wir sind ins Kino gegangen.',
            english: 'We went to the cinema.',
            hinglish: 'Hum cinema gaye.',
            audioText: 'Wir sind ins Kino gegangen.',
          },
          {
            german: 'Wo bist du gewesen?',
            english: 'Where have you been?',
            hinglish: 'Tum kahan the?',
            audioText: 'Wo bist du gewesen?',
          },
        ],
        realLifeContext: 'You need sein in the Perfekt to talk about trips, journeys, going out, and changes. It is one of the most common past-tense patterns.',
        culturalNote: 'The choice between haben and sein is not always logical. Dative verbs and transitive verbs almost always use haben; movement and change typically use sein. Learn common verbs as chunks.',
        summary: [
          'Movement and change-of-state verbs use sein',
          'gehen → ist gegangen, fahren → ist gefahren',
          'bleiben and sein also use sein',
          'Auxiliary in position 2, participle at the end',
          'Wo bist du gewesen? = Where have you been?',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-15-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ nach Berlin gefahren."',
          questionHinglish: 'Complete karo: "Ich ___ nach Berlin gefahren."',
          options: ['bin', 'habe', 'ist', 'hat'],
          correctAnswer: 'bin',
          explanation: '"fahren" is a movement verb, so it uses sein: Ich bin nach Berlin gefahren.',
          explanationHinglish: '"fahren" movement verb hai, isliye sein: Ich bin nach Berlin gefahren.',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'sein'],
        },
        {
          id: 'ex-a1-15-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Wir sind ins Kino ___."',
          questionHinglish: 'Complete karo: "Wir sind ins Kino ___."',
          options: ['gegangen', 'gehen', 'gegangt', 'ging'],
          correctAnswer: 'gegangen',
          explanation: 'The past participle of "gehen" is "gegangen".',
          explanationHinglish: '"gehen" ka past participle "gegangen" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'participles'],
        },
        {
          id: 'ex-a1-15-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich bin zu Hause ___."',
          questionHinglish: 'Complete karo: "Ich bin zu Hause ___."',
          options: ['geblieben', 'bleiben', 'gebliebt', 'bleibe'],
          correctAnswer: 'geblieben',
          explanation: 'The past participle of "bleiben" is "geblieben".',
          explanationHinglish: '"bleiben" ka past participle "geblieben" hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['perfekt', 'participles'],
        },
        {
          id: 'ex-a1-15-02-04',
          type: 'ordering',
          question: 'Arrange the words into a question: "Wo / bist / du / gewesen / ?"',
          questionHinglish: 'Sahi question banao: "Wo / bist / du / gewesen / ?"',
          options: ['Wo', 'bist', 'du', 'gewesen', '?'],
          correctAnswer: 'Wo bist du gewesen ?',
          explanation: 'Question word first, verb second, participle at the end: Wo bist du gewesen?',
          explanationHinglish: 'Question word pehle, verb doosre, participle end par: Wo bist du gewesen?',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'word-order'],
        },
        {
          id: 'ex-a1-15-02-05',
          type: 'typing',
          question: 'Translate: "I went to Berlin."',
          questionHinglish: 'Translate karo: "I went to Berlin."',
          correctAnswer: 'Ich bin nach Berlin gefahren.',
          explanation: '"fahren" uses sein in the Perfekt: Ich bin nach Berlin gefahren.',
          explanationHinglish: '"fahren" Perfekt mein sein leta hai: Ich bin nach Berlin gefahren.',
          difficulty: 2,
          xpReward: 10,
          tags: ['perfekt', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-15-03',
      level: 'A1',
      moduleId: 'm-a1-15',
      title: 'Talking About Yesterday',
      titleHinglish: 'Kal ke baare mein baat karna',
      objective: 'Use past time expressions and the simple past of sein',
      objectiveHinglish: 'Past time expressions aur sein ka simple past use karo',
      estimatedMinutes: 22,
      skillFocus: ['speaking', 'writing'],
      prerequisites: ['l-a1-15-02'],
      order: 3,
      grammarPoints: ['past time expressions', 'war/waren', 'Perfekt word order'],
      vocabulary: [],
      content: {
        warmUp: [
          'What did you do last weekend?',
          'How do you say "yesterday", "last week", and "last year"?',
        ],
        explanation: `**Past time expressions:**
- **gestern** = yesterday
- **vorgestern** = the day before yesterday
- **letzte Woche** = last week
- **letzten Monat** = last month
- **letztes Jahr** = last year
- **am Wochenende** = at the weekend
- **damals** = back then

**Talking about the past:**
- **Gestern** habe ich gearbeitet. = Yesterday I worked.
- **Letzte Woche** bin ich nach Hamburg gefahren. = Last week I went to Hamburg.
- **Am Wochenende** habe ich Fußball gespielt. = At the weekend I played football.
- **Was hast du am Wochenende gemacht?** = What did you do at the weekend?

**Word order:** if a time expression starts the sentence, the verb comes next:
- **Gestern habe** ich gearbeitet.
- **Am Wochenende habe** ich Fußball gespielt.
- **Letzte Woche bin** ich nach Hamburg gefahren.

**The simple past of sein: war / waren:**
- Ich **war** zu Hause. = I was at home.
- Du **warst** müde. = You were tired.
- Er/Sie/Es **war** krank. = He/She/It was ill.
- Wir **waren** in Berlin. = We were in Berlin.
- Ihr **wart** im Kino. = You were at the cinema.
- Sie **waren** glücklich. = They were happy.

**The simple past of haben: hatte / hatten:**
- Ich **hatte** keine Zeit. = I had no time.
- Wir **hatten** viel Arbeit. = We had a lot of work.

**Common mistakes:**
- ❌ Gestern ich habe gearbeitet. → ✅ Gestern **habe ich** gearbeitet.
- ❌ Ich war in Berlin gefahren. → ✅ Ich **war** in Berlin. / Ich **bin** nach Berlin gefahren.
- ❌ Letzte Woche ich habe ... → ✅ Letzte Woche **habe ich** ...`,
        explanationHinglish: `**Past time expressions:**
- **gestern** = kal
- **vorgestern** = parso (pehle)
- **letzte Woche** = pichhle hafte
- **letzten Monat** = pichhle mahine
- **letztes Jahr** = pichhle saal
- **am Wochenende** = weekend par
- **damals** = us waqt

**Past ke baare mein baat karna:**
- **Gestern** habe ich gearbeitet. = Kal maine kaam kiya.
- **Letzte Woche** bin ich nach Hamburg gefahren. = Pichhle hafte main Hamburg gaya.
- **Am Wochenende** habe ich Fußball gespielt. = Weekend par maine football khela.
- **Was hast du am Wochenende gemacht?** = Weekend par tumne kya kiya?

**Word order:** agar time expression sentence start kare, verb uske baad:
- **Gestern habe** ich gearbeitet.
- **Am Wochenende habe** ich Fußball gespielt.
- **Letzte Woche bin** ich nach Hamburg gefahren.

**sein ka simple past: war / waren:**
- Ich **war** zu Hause. = Main ghar par tha.
- Du **warst** müde. = Tum thake the.
- Er/Sie/Es **war** krank. = Woh bimaar tha/thi.
- Wir **waren** in Berlin. = Hum Berlin mein the.
- Ihr **wart** im Kino. = Tum cinema mein the.
- Sie **waren** glücklich. = Woh khush the.

**haben ka simple past: hatte / hatten:**
- Ich **hatte** keine Zeit. = Mere paas time nahi tha.
- Wir **hatten** viel Arbeit. = Humare paas bahut kaam tha.

**Common mistakes:**
- ❌ Gestern ich habe gearbeitet. → ✅ Gestern **habe ich** gearbeitet.
- ❌ Ich war in Berlin gefahren. → ✅ Ich **war** in Berlin. / Ich **bin** nach Berlin gefahren.
- ❌ Letzte Woche ich habe ... → ✅ Letzte Woche **habe ich** ...`,
        examples: [
          {
            german: 'Gestern habe ich gearbeitet.',
            english: 'Yesterday I worked.',
            hinglish: 'Kal maine kaam kiya.',
            breakdown: [
              { word: 'Gestern', role: 'time expression', meaning: 'yesterday' },
              { word: 'habe', role: 'auxiliary (position 2)', meaning: 'have' },
              { word: 'ich', role: 'subject', meaning: 'I' },
              { word: 'gearbeitet', role: 'past participle', meaning: 'worked' },
            ],
            audioText: 'Gestern habe ich gearbeitet.',
          },
          {
            german: 'Am Wochenende habe ich Fußball gespielt.',
            english: 'At the weekend I played football.',
            hinglish: 'Weekend par maine football khela.',
            audioText: 'Am Wochenende habe ich Fußball gespielt.',
          },
          {
            german: 'Ich war zu Hause.',
            english: 'I was at home.',
            hinglish: 'Main ghar par tha.',
            audioText: 'Ich war zu Hause.',
          },
        ],
        realLifeContext: 'Talking about yesterday and the weekend is one of the most common A1 conversation tasks. You will use it in class, with friends, and in exams.',
        culturalNote: 'The simple past "war" is much more common in speech than the Perfekt "bin gewesen". Both are correct, but "Ich war ..." is shorter and very frequent.',
        summary: [
          'gestern, letzte Woche, letzten Monat, letztes Jahr',
          'Time expression first → verb second',
          'war/waren = simple past of sein',
          'hatte/hatten = simple past of haben',
          'Was hast du am Wochenende gemacht?',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-15-03-01',
          type: 'multiple-choice',
          question: 'Complete: "___ habe ich gearbeitet."',
          questionHinglish: 'Complete karo: "___ habe ich gearbeitet."',
          options: ['Gestern', 'Morgen', 'Heute', 'Jetzt'],
          correctAnswer: 'Gestern',
          explanation: '"Gestern" means yesterday and fits the past tense.',
          explanationHinglish: '"Gestern" ka matlab kal (past) hai aur past tense ke saath fit hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['past', 'time-expressions'],
        },
        {
          id: 'ex-a1-15-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Letzte Woche ___ ich nach Hamburg gefahren."',
          questionHinglish: 'Complete karo: "Letzte Woche ___ ich nach Hamburg gefahren."',
          options: ['bin', 'habe', 'ist', 'hat'],
          correctAnswer: 'bin',
          explanation: '"fahren" uses sein: Letzte Woche bin ich nach Hamburg gefahren.',
          explanationHinglish: '"fahren" sein use karta hai: Letzte Woche bin ich nach Hamburg gefahren.',
          difficulty: 1,
          xpReward: 8,
          tags: ['past', 'sein'],
        },
        {
          id: 'ex-a1-15-03-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich ___ zu Hause." (was)',
          questionHinglish: 'Complete karo: "Ich ___ zu Hause." (tha)',
          options: ['war', 'bin', 'hatte', 'habe'],
          correctAnswer: 'war',
          explanation: 'The simple past of "sein" for "ich" is "war": Ich war zu Hause.',
          explanationHinglish: '"sein" ka simple past "ich" ke liye "war": Ich war zu Hause.',
          difficulty: 1,
          xpReward: 8,
          tags: ['past', 'sein'],
        },
        {
          id: 'ex-a1-15-03-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Am Wochenende / habe / ich / gearbeitet / ."',
          questionHinglish: 'Sahi sentence banao: "Am Wochenende / habe / ich / gearbeitet / ."',
          options: ['Am Wochenende', 'habe', 'ich', 'gearbeitet', '.'],
          correctAnswer: 'Am Wochenende habe ich gearbeitet .',
          explanation: 'Time expression first, then verb, then subject, then participle: Am Wochenende habe ich gearbeitet.',
          explanationHinglish: 'Time expression pehle, phir verb, phir subject, phir participle: Am Wochenende habe ich gearbeitet.',
          difficulty: 2,
          xpReward: 10,
          tags: ['past', 'word-order'],
        },
        {
          id: 'ex-a1-15-03-05',
          type: 'typing',
          question: 'Translate: "Yesterday I worked."',
          questionHinglish: 'Translate karo: "Yesterday I worked."',
          correctAnswer: 'Gestern habe ich gearbeitet.',
          explanation: 'Use Perfekt with time first: Gestern habe ich gearbeitet.',
          explanationHinglish: 'Time pehle aur Perfekt use karo: Gestern habe ich gearbeitet.',
          difficulty: 2,
          xpReward: 10,
          tags: ['past', 'typing'],
        },
      ],
    },
  ],
};
