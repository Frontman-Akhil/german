// ============================================================
// C1 MODULE 2 – REPORTED SPEECH & NUANCE
// ============================================================

import type { Module } from '../types';

export const C1_MODULE_NUANCE: Module = {
  id: 'm-c1-02',
  level: 'C1',
  title: 'Reported Speech & Nuance',
  titleHinglish: 'Reported Speech aur Nuance',
  description: 'Report statements with Konjunktiv I and use modal particles to sound natural.',
  descriptionHinglish: 'Konjunktiv I se statements report karo aur modal particles se natural sound karo.',
  skills: ['grammar', 'reading', 'speaking'],
  order: 2,
  isComplete: true,
  lessons: [
    {
      id: 'l-c1-02-01',
      level: 'C1',
      moduleId: 'm-c1-02',
      title: 'Konjunktiv I & Reported Speech',
      titleHinglish: 'Konjunktiv I aur Reported Speech',
      objective: 'Report what someone said using Konjunktiv I, especially in journalism and formal writing',
      objectiveHinglish: 'Konjunktiv I use karke kisi ki baat report karo, khaas kar journalism aur formal writing mein',
      estimatedMinutes: 30,
      skillFocus: ['grammar', 'reading'],
      prerequisites: ['l-c1-01-01'],
      order: 1,
      grammarPoints: ['Konjunktiv I', 'indirect speech', 'journalistic style'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do German news reports show that a claim is not confirmed?',
          'What is the difference between direct and indirect speech?',
        ],
        explanation: `**Konjunktiv I** is the mood of reported speech. It lets you report a statement without confirming it. This is standard in German journalism and formal writing.

**Core forms (third person):**
- sein → **sei**
- haben → **habe**
- werden → **werde**
- können → **könne**
- müssen → **müsse**
- sollen → **solle**
- wollen → **wolle**
- dürfen → **dürfe**
- machen → **mache**
- kommen → **komme**
- gehen → **gehe**

**Reported speech with or without dass:**
- Er sagt, er **sei** krank.
- Er sagt, **dass** er krank **sei**.
- Sie sagte, sie **habe** keine Zeit.
- Der Minister erklärte, die Lage **sei** schwierig.

**Past in reported speech:** use Konjunktiv I of haben/sein + participle.
- Er **habe** gearbeitet.
- Sie **sei** gekommen.
- Sie **hätten** den Vertrag unterschrieben.

**Future:** werden in Konjunktiv I + infinitive.
- Er **werde** morgen kommen.

**The ambiguity rule:** If the Konjunktiv I form is identical to the indicative, use Konjunktiv II instead.
- "sie" (they) + haben → Konjunktiv I would be "haben" (same as indicative), so use **hätten**:
  - Sie sagten, sie **hätten** Zeit.
- "ich" and "wir" often use Konjunktiv II for the same reason.

**Why journalists use it:**
- Neutral distance: Der Zeuge sagte, er **habe** nichts gesehen.
- No confirmation: Die Firma erklärte, die Preise **würden** steigen.

**Common mistakes:**
- ❌ Er sagt, dass er krank ist. (indicative — fine in casual speech, but not neutral reported style)
- ✅ Er sagt, dass er krank **sei**.
- ❌ Sie sagten, sie haben Zeit. → ✅ Sie sagten, sie **hätten** Zeit.`,
        explanationHinglish: `**Konjunktiv I** reported speech ka mood hai. Isse tum kisi ki baat report karte ho bina confirm kiye. German journalism aur formal writing mein standard hai.

**Core forms (third person):**
- sein → **sei**
- haben → **habe**
- werden → **werde**
- können → **könne**
- müssen → **müsse**
- sollen → **solle**
- wollen → **wolle**
- dürfen → **dürfe**
- machen → **mache**
- kommen → **komme**
- gehen → **gehe**

**Reported speech with ya without dass:**
- Er sagt, er **sei** krank.
- Er sagt, **dass** er krank **sei**.
- Sie sagte, sie **habe** keine Zeit.
- Der Minister erklärte, die Lage **sei** schwierig.

**Reported past:** Konjunktiv I of haben/sein + participle.
- Er **habe** gearbeitet.
- Sie **sei** gekommen.
- Sie **hätten** den Vertrag unterschrieben.

**Future:** werden in Konjunktiv I + infinitive.
- Er **werde** morgen kommen.

**Ambiguity rule:** Agar Konjunktiv I form indicative jaisi hi hai, to Konjunktiv II use karo.
- "sie" (they) + haben → Konjunktiv I "haben" (indicative jaisa), isliye **hätten**:
  - Sie sagten, sie **hätten** Zeit.
- "ich" aur "wir" bhi often Konjunktiv II use karte hain isi reason se.

**Journalists kyun use karte hain:**
- Neutral distance: Der Zeuge sagte, er **habe** nichts gesehen.
- No confirmation: Die Firma erklärte, die Preise **würden** steigen.

**Common mistakes:**
- ❌ Er sagt, dass er krank ist. (indicative — casual speech mein fine, neutral reported style mein nahi)
- ✅ Er sagt, dass er krank **sei**.
- ❌ Sie sagten, sie haben Zeit. → ✅ Sie sagten, sie **hätten** Zeit.`,
        examples: [
          {
            german: 'Er sagt, er sei krank.',
            english: 'He says that he is ill.',
            hinglish: 'Woh kehta hai ki woh beemar hai.',
            breakdown: [
              { word: 'Er', role: 'subject', meaning: 'he' },
              { word: 'sagt', role: 'reporting verb', meaning: 'says' },
              { word: 'er', role: 'subject of reported clause', meaning: 'he' },
              { word: 'sei', role: 'Konjunktiv I of sein', meaning: 'is (reported)' },
              { word: 'krank', role: 'adjective', meaning: 'ill' },
            ],
            audioText: 'Er sagt, er sei krank.',
          },
          {
            german: 'Sie sagte, sie habe keine Zeit.',
            english: 'She said that she had no time.',
            hinglish: 'Usne kaha ki uske paas time nahi tha.',
            audioText: 'Sie sagte, sie habe keine Zeit.',
          },
          {
            german: 'Sie sagten, sie hätten Zeit.',
            english: 'They said that they had time.',
            hinglish: 'Unhone kaha ki unke paas time tha.',
            audioText: 'Sie sagten, sie hätten Zeit.',
          },
        ],
        realLifeContext: 'Reported speech is essential for reading German news, attending lectures, and writing formal summaries. It also helps you avoid confirming information you are only repeating.',
        culturalNote: 'German journalism uses Konjunktiv I heavily to distance itself from claims. If you read "Er sagte, er sei unschuldig", the newspaper is reporting the claim, not confirming it.',
        summary: [
          'Konjunktiv I is used for reported speech',
          'sein → sei, haben → habe, werden → werde',
          'Use Konjunktiv I + participle for reported past',
          'If Konjunktiv I equals the indicative, use Konjunktiv II',
          'Journalists use Konjunktiv I to stay neutral',
        ],
      },
      exercises: [
        {
          id: 'ex-c1-02-01-01',
          type: 'multiple-choice',
          question: 'Complete in reported speech: "Er sagt, er ___ krank."',
          questionHinglish: 'Reported speech mein complete karo: "Er sagt, er ___ krank."',
          options: ['sei', 'ist', 'war', 'wäre'],
          correctAnswer: 'sei',
          explanation: 'Reported speech uses Konjunktiv I. The form of sein for "er" is "sei".',
          explanationHinglish: 'Reported speech Konjunktiv I use karti hai. "er" ke liye sein ka form "sei" hai.',
          difficulty: 4,
          xpReward: 15,
          tags: ['konjunktiv-i', 'reported-speech'],
        },
        {
          id: 'ex-c1-02-01-02',
          type: 'multiple-choice',
          question: 'Which is the Konjunktiv I form of "werden" for "er"?',
          questionHinglish: '"werden" ka Konjunktiv I form "er" ke liye kaun sa hai?',
          options: ['werde', 'wird', 'würde', 'geworden'],
          correctAnswer: 'werde',
          explanation: 'Konjunktiv I of werden for "er" is "werde": Er werde morgen kommen.',
          explanationHinglish: '"er" ke liye werden ka Konjunktiv I "werde" hai: Er werde morgen kommen.',
          difficulty: 4,
          xpReward: 15,
          tags: ['konjunktiv-i', 'werden'],
        },
        {
          id: 'ex-c1-02-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Sie sagten, sie ___ Zeit." (they had time)',
          questionHinglish: 'Complete karo: "Sie sagten, sie ___ Zeit." (unke paas time tha)',
          options: ['hätten', 'haben', 'hatten', 'hat'],
          correctAnswer: 'hätten',
          explanation: 'Konjunktiv I "haben" is identical to the indicative for "sie", so Konjunktiv II "hätten" is used instead.',
          explanationHinglish: '"sie" ke liye Konjunktiv I "haben" indicative jaisa hai, isliye Konjunktiv II "hätten" use hota hai.',
          difficulty: 4,
          xpReward: 15,
          tags: ['konjunktiv-ii', 'reported-speech'],
        },
        {
          id: 'ex-c1-02-01-04',
          type: 'multiple-choice',
          question: 'Which sentence correctly reports "Ich habe keine Zeit" in formal style?',
          questionHinglish: 'Formal style mein "Ich habe keine Zeit" ko kaun sa sentence sahi report karta hai?',
          options: [
            'Er sagte, er habe keine Zeit.',
            'Er sagte, er hat keine Zeit.',
            'Er sagte, er hatte keine Zeit.',
            'Er sagte, er keine Zeit habe nicht.',
          ],
          correctAnswer: 'Er sagte, er habe keine Zeit.',
          explanation: 'Formal reported speech uses Konjunktiv I: Er sagte, er habe keine Zeit.',
          explanationHinglish: 'Formal reported speech Konjunktiv I use karti hai: Er sagte, er habe keine Zeit.',
          difficulty: 4,
          xpReward: 15,
          tags: ['konjunktiv-i', 'reported-speech'],
        },
        {
          id: 'ex-c1-02-01-05',
          type: 'typing',
          question: 'Translate: "He said that he had no time." (formal reported speech)',
          questionHinglish: 'Translate karo: "He said that he had no time." (formal reported speech)',
          correctAnswer: 'Er sagte, er habe keine Zeit.',
          explanation: 'Use Konjunktiv I "habe" for reported speech: Er sagte, er habe keine Zeit.',
          explanationHinglish: 'Reported speech ke liye Konjunktiv I "habe": Er sagte, er habe keine Zeit.',
          difficulty: 4,
          xpReward: 15,
          tags: ['konjunktiv-i', 'typing'],
        },
      ],
    },
    {
      id: 'l-c1-02-02',
      level: 'C1',
      moduleId: 'm-c1-02',
      title: 'Modal Particles & Register',
      titleHinglish: 'Modal Particles aur Register',
      objective: 'Use doch, ja, mal, wohl, denn, and halt to express tone like a native speaker',
      objectiveHinglish: 'doch, ja, mal, wohl, denn aur halt use karke native jaisa tone express karo',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-c1-02-01'],
      order: 2,
      grammarPoints: ['modal particles', 'register', 'spoken German'],
      vocabulary: [],
      content: {
        warmUp: [
          'Why can "Das ist ja toll!" sound surprised rather than factual?',
          'Which small words make German sound natural?',
        ],
        explanation: `**Modal particles** are small words that add tone, emotion, or expectation. They are common in spoken German and hard to translate one-to-one.

**doch** — contradiction, encouragement, or "after all":
- Komm **doch** mit! (Why don't you come along!)
- Du bist **doch** müde, oder? (You are tired, aren't you?)
- Das ist **doch** klar. (That is obvious, after all.)

**ja** — surprise, emphasis, or shared knowledge (not "yes"):
- Das ist **ja** interessant! (That is interesting indeed!)
- Du weißt **ja**, dass ich wenig Zeit habe. (You know that I have little time.)

**mal** — softens a request or means "for a moment":
- Kannst du mir **mal** helfen? (Can you help me for a moment?)
- Schau **mal** hier. (Have a look here.)

**wohl** — probability, "probably":
- Er ist **wohl** krank. (He is probably ill.)
- Das wird **wohl** stimmen. (That is probably right.)

**denn** — adds interest or surprise in questions:
- Was ist **denn** los? (What is going on, then?)
- Wo bist du **denn** gewesen? (Where have you been, then?)

**halt / eben** — acceptance, "just / that's how it is":
- Das ist **halt** so. (That's just how it is.)
- Dann müssen wir **eben** warten. (Then we just have to wait.)

**Register warning:** Modal particles belong mainly to **spoken and informal** German. In academic or official writing, they usually disappear.
- Casual: Komm doch mal vorbei!
- Formal: Besuchen Sie uns bitte.

**Common mistakes:**
- ❌ Translating "ja" as "yes" in "Das ist ja toll."
- ❌ Using "halt" in a formal report.
- Overusing particles in every sentence — one per clause is enough.`,
        explanationHinglish: `**Modal particles** chhote words hain jo tone, emotion ya expectation add karte hain. Spoken German mein common hain aur one-to-one translate karna mushkil hota hai.

**doch** — contradiction, encouragement, ya "after all":
- Komm **doch** mit! (Chalo na, saath aao!)
- Du bist **doch** müde, oder? (Tum tired ho na, hai na?)
- Das ist **doch** klar. (Yeh to obvious hai.)

**ja** — surprise, emphasis, ya shared knowledge ("yes" nahi):
- Das ist **ja** interessant! (Yeh waqai interesting hai!)
- Du weißt **ja**, dass ich wenig Zeit habe. (Tumhe pata hai na ki mere paas time kam hai.)

**mal** — request soften karta hai ya "for a moment":
- Kannst du mir **mal** helfen? (Kya tum ek minute ke liye help kar sakte ho?)
- Schau **mal** hier. (Yahan dekho na.)

**wohl** — probability, "probably":
- Er ist **wohl** krank. (Woh probably beemar hai.)
- Das wird **wohl** stimmen. (Yeh probably sahi hoga.)

**denn** — questions mein interest ya surprise:
- Was ist **denn** los? (Kya ho raha hai, batao na?)
- Wo bist du **denn** gewesen? (Tum kahan the, batao?)

**halt / eben** — acceptance, "just / that's how it is":
- Das ist **halt** so. (Aisa hi hota hai.)
- Dann müssen wir **eben** warten. (Phir humein wait karna padega.)

**Register warning:** Modal particles mainly **spoken aur informal** German mein aate hain. Academic ya official writing mein usually nahi.
- Casual: Komm doch mal vorbei!
- Formal: Besuchen Sie uns bitte.

**Common mistakes:**
- ❌ "Das ist ja toll" mein "ja" ko "yes" samajhna.
- ❌ Formal report mein "halt" use karna.
- Har sentence mein particles overuse mat karo — ek clause mein ek kaafi hai.`,
        examples: [
          {
            german: 'Das ist ja interessant!',
            english: 'That is interesting indeed!',
            hinglish: 'Yeh waqai interesting hai!',
            breakdown: [
              { word: 'Das', role: 'subject', meaning: 'that' },
              { word: 'ist', role: 'verb', meaning: 'is' },
              { word: 'ja', role: 'modal particle (surprise/emphasis)', meaning: 'indeed' },
              { word: 'interessant', role: 'adjective', meaning: 'interesting' },
            ],
            audioText: 'Das ist ja interessant!',
          },
          {
            german: 'Kannst du mir mal helfen?',
            english: 'Can you help me for a moment?',
            hinglish: 'Kya tum ek minute ke liye help kar sakte ho?',
            audioText: 'Kannst du mir mal helfen?',
          },
          {
            german: 'Das ist halt so.',
            english: 'That is just how it is.',
            hinglish: 'Aisa hi hota hai.',
            audioText: 'Das ist halt so.',
          },
        ],
        realLifeContext: 'Modal particles make the difference between correct German and natural German. They are everywhere in conversations, films, and messages, and they signal emotional tone.',
        culturalNote: 'Germans use particles to soften requests and show engagement. "Kannst du mal..." sounds friendlier than "Kannst du...". In formal emails, however, particles are usually avoided.',
        summary: [
          'Modal particles add tone rather than concrete meaning',
          'doch = contradiction/encouragement; ja = surprise/emphasis',
          'mal = softens requests; wohl = probably',
          'denn = adds interest to questions; halt/eben = acceptance',
          'Use them in spoken/informal German, not formal writing',
        ],
      },
      exercises: [
        {
          id: 'ex-c1-02-02-01',
          type: 'multiple-choice',
          question: 'Which particle expresses surprise/emphasis in "Das ist ___ interessant!"?',
          questionHinglish: '"Das ist ___ interessant!" mein kaun sa particle surprise/emphasis deta hai?',
          options: ['ja', 'mal', 'wohl', 'denn'],
          correctAnswer: 'ja',
          explanation: 'In "Das ist ja interessant!", "ja" expresses surprise or emphasis. It does not mean "yes" here.',
          explanationHinglish: '"Das ist ja interessant!" mein "ja" surprise ya emphasis deta hai. Yahan iska matlab "yes" nahi.',
          difficulty: 4,
          xpReward: 15,
          tags: ['modal-particles', 'ja'],
        },
        {
          id: 'ex-c1-02-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Er ist ___ krank." (probably)',
          questionHinglish: 'Complete karo: "Er ist ___ krank." (probably)',
          options: ['wohl', 'doch', 'ja', 'mal'],
          correctAnswer: 'wohl',
          explanation: '"wohl" expresses probability: Er ist wohl krank = He is probably ill.',
          explanationHinglish: '"wohl" probability batata hai: Er ist wohl krank = Woh probably beemar hai.',
          difficulty: 4,
          xpReward: 15,
          tags: ['modal-particles', 'wohl'],
        },
        {
          id: 'ex-c1-02-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Kannst du mir ___ helfen?" (softening a request)',
          questionHinglish: 'Complete karo: "Kannst du mir ___ helfen?" (request soften karna)',
          options: ['mal', 'wohl', 'ja', 'denn'],
          correctAnswer: 'mal',
          explanation: '"mal" softens a request and often means "for a moment": Kannst du mir mal helfen?',
          explanationHinglish: '"mal" request soften karta hai aur often "for a moment" ka matlab deta hai: Kannst du mir mal helfen?',
          difficulty: 4,
          xpReward: 15,
          tags: ['modal-particles', 'mal'],
        },
        {
          id: 'ex-c1-02-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Was ist ___ los?" (What is going on, then?)',
          questionHinglish: 'Complete karo: "Was ist ___ los?" (Kya ho raha hai, batao?)',
          options: ['denn', 'doch', 'mal', 'wohl'],
          correctAnswer: 'denn',
          explanation: '"denn" adds interest or surprise to a question: Was ist denn los?',
          explanationHinglish: '"denn" question mein interest ya surprise add karta hai: Was ist denn los?',
          difficulty: 4,
          xpReward: 15,
          tags: ['modal-particles', 'denn'],
        },
        {
          id: 'ex-c1-02-02-05',
          type: 'typing',
          question: 'Translate: "That is just how it is."',
          questionHinglish: 'Translate karo: "That is just how it is."',
          correctAnswer: 'Das ist halt so.',
          explanation: 'Use "halt" for acceptance: Das ist halt so.',
          explanationHinglish: 'Acceptance ke liye "halt": Das ist halt so.',
          difficulty: 4,
          xpReward: 15,
          tags: ['modal-particles', 'typing'],
        },
      ],
    },
  ],
};
