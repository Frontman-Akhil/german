// ============================================================
// B2 MODULE 2 – PASSIVE, RELATIVE CLAUSES & NUANCE
// ============================================================

import type { Module } from '../types';

export const B2_MODULE_STRUCTURES: Module = {
  id: 'm-b2-02',
  level: 'B2',
  title: 'Passive, Relative Clauses & Nuance',
  titleHinglish: 'Passive, Relative Clauses aur Nuance',
  description: 'Use the passive voice and relative clauses to write and speak with greater precision.',
  descriptionHinglish: 'Passive voice aur relative clauses use karke zyada precise German likho aur bolo.',
  skills: ['grammar', 'writing', 'reading'],
  order: 2,
  isComplete: true,
  lessons: [
    {
      id: 'l-b2-02-01',
      level: 'B2',
      moduleId: 'm-b2-02',
      title: 'The Passive Voice',
      titleHinglish: 'Passive Voice',
      objective: 'Form and use the passive in present, past, perfect, and with modal verbs',
      objectiveHinglish: 'Present, past, perfect aur modal verbs ke saath passive banana aur use karna',
      estimatedMinutes: 30,
      skillFocus: ['grammar', 'writing'],
      prerequisites: ['l-b2-01-01'],
      order: 1,
      grammarPoints: ['Passiv', 'werden + Partizip II', 'Zustandspassiv', 'passive with modals'],
      vocabulary: [],
      content: {
        warmUp: [
          'When do we use the passive in English?',
          'What is more important in a news report: the action or the person doing it?',
        ],
        explanation: `The **passive** shifts attention from the doer to the action or result. It is common in news, reports, rules, and formal writing.

**Form:** werden + past participle
- Present: Das Haus **wird** gebaut. (The house is being built.)
- Simple past: Das Haus **wurde** gebaut. (The house was built.)
- Perfect: Das Haus **ist** gebaut **worden**. (The house has been built.)

**With modal verbs:** modal + ... + participle + werden
- Die Aufgabe **muss** erledigt **werden**. (The task must be completed.)
- Die Ergebnisse **können** morgen veröffentlicht **werden**. (The results can be published tomorrow.)

**Agent:** use **von + dative** if the doer is important.
- Der Roman **wurde von Thomas Mann geschrieben**.
- Das Projekt **wurde von der Regierung finanziert**.

**Process vs. state:**
- Das Haus **wird** gebaut. (process: the house is being built)
- Das Haus **ist** gebaut. (state/result: the house is built)
The second form is the **Zustandspassiv** (sein + participle).

**Passive alternatives:**
- Das **lässt sich** leicht erklären. (That can be explained easily.)
- Das **ist** leicht **zu erklären**. (That is easy to explain.)

**Why use the passive?**
- The doer is unknown: Mein Fahrrad **wurde** gestohlen.
- The doer is obvious or unimportant: Die Rechnung **wird** morgen bezahlt.
- Formal/neutral tone: Die Maßnahmen **wurden** beschlossen.

**Common mistakes:**
- ❌ Das Haus ist gebaut worden von 2020. (wrong time/agent)
- ✅ Das Haus wurde 2020 gebaut.
- ❌ Die Aufgabe muss erledigt wird. → ✅ Die Aufgabe muss erledigt werden.
- Do not confuse **worden** (passive auxiliary) with **geworden** (become).`,
        explanationHinglish: `**Passive** attention doer se action ya result par shift karta hai. News, reports, rules aur formal writing mein common hai.

**Form:** werden + past participle
- Present: Das Haus **wird** gebaut. (Ghar ban raha hai.)
- Simple past: Das Haus **wurde** gebaut. (Ghar bana tha.)
- Perfect: Das Haus **ist** gebaut **worden**. (Ghar ban chuka hai.)

**Modal verbs ke saath:** modal + ... + participle + werden
- Die Aufgabe **muss** erledigt **werden**. (Task complete karna zaroori hai.)
- Die Ergebnisse **können** morgen veröffentlicht **werden**. (Results kal publish ho sakte hain.)

**Agent:** doer important ho to **von + dative**.
- Der Roman **wurde von Thomas Mann geschrieben**.
- Das Projekt **wurde von der Regierung finanziert**.

**Process vs. state:**
- Das Haus **wird** gebaut. (process: ghar ban raha hai)
- Das Haus **ist** gebaut. (state/result: ghar ban chuka hai)
Doosra form **Zustandspassiv** hai (sein + participle).

**Passive alternatives:**
- Das **lässt sich** leicht erklären. (Yeh easily explain ho sakta hai.)
- Das **ist** leicht **zu erklären**. (Yeh explain karna easy hai.)

**Passive kyun use karein?**
- Doer unknown: Mein Fahrrad **wurde** gestohlen.
- Doer obvious/unimportant: Die Rechnung **wird** morgen bezahlt.
- Formal/neutral tone: Die Maßnahmen **wurden** beschlossen.

**Common mistakes:**
- ❌ Das Haus ist gebaut worden von 2020. (galat time/agent)
- ✅ Das Haus wurde 2020 gebaut.
- ❌ Die Aufgabe muss erledigt wird. → ✅ Die Aufgabe muss erledigt werden.
- **worden** (passive auxiliary) aur **geworden** (become) ko confuse mat karo.`,
        examples: [
          {
            german: 'Das Haus wird gebaut.',
            english: 'The house is being built.',
            hinglish: 'Ghar ban raha hai.',
            breakdown: [
              { word: 'Das Haus', role: 'subject', meaning: 'the house' },
              { word: 'wird', role: 'passive auxiliary (werden)', meaning: 'is (being)' },
              { word: 'gebaut', role: 'past participle', meaning: 'built' },
            ],
            audioText: 'Das Haus wird gebaut.',
          },
          {
            german: 'Die Aufgabe muss erledigt werden.',
            english: 'The task must be completed.',
            hinglish: 'Task complete karna zaroori hai.',
            audioText: 'Die Aufgabe muss erledigt werden.',
          },
          {
            german: 'Der Roman wurde von Thomas Mann geschrieben.',
            english: 'The novel was written by Thomas Mann.',
            hinglish: 'Novel Thomas Mann ne likha tha.',
            audioText: 'Der Roman wurde von Thomas Mann geschrieben.',
          },
        ],
        realLifeContext: 'The passive appears in German news, official letters, instructions, and academic writing. Understanding it is essential for reading B2 texts and for writing formal reports.',
        culturalNote: 'German formal style often prefers the passive or passive alternatives over direct "man" constructions. News headlines frequently use the passive without an agent.',
        summary: [
          'Passive = werden + past participle',
          'Present: wird gebaut; past: wurde gebaut; perfect: ist gebaut worden',
          'With modals: muss erledigt werden',
          'Agent: von + dative',
          'Zustandspassiv: sein + participle describes a state/result',
        ],
      },
      exercises: [
        {
          id: 'ex-b2-02-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Das Haus ___ gebaut." (present passive)',
          questionHinglish: 'Complete karo: "Das Haus ___ gebaut." (present passive)',
          options: ['wird', 'ist', 'wurde', 'werden'],
          correctAnswer: 'wird',
          explanation: 'Present passive uses werden + participle: Das Haus wird gebaut.',
          explanationHinglish: 'Present passive werden + participle use karta hai: Das Haus wird gebaut.',
          difficulty: 3,
          xpReward: 12,
          tags: ['passive', 'present'],
        },
        {
          id: 'ex-b2-02-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Die Entscheidung ___ gestern getroffen." (simple past passive)',
          questionHinglish: 'Complete karo: "Die Entscheidung ___ gestern getroffen." (simple past passive)',
          options: ['wurde', 'wird', 'ist', 'werden'],
          correctAnswer: 'wurde',
          explanation: 'Simple past passive uses wurde + participle: Die Entscheidung wurde getroffen.',
          explanationHinglish: 'Simple past passive wurde + participle use karta hai: Die Entscheidung wurde getroffen.',
          difficulty: 3,
          xpReward: 12,
          tags: ['passive', 'past'],
        },
        {
          id: 'ex-b2-02-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Die Aufgabe muss erledigt ___."',
          questionHinglish: 'Complete karo: "Die Aufgabe muss erledigt ___."',
          options: ['werden', 'worden', 'wird', 'ist'],
          correctAnswer: 'werden',
          explanation: 'With a modal verb, the passive infinitive "werden" goes at the end: muss erledigt werden.',
          explanationHinglish: 'Modal verb ke saath passive infinitive "werden" end par: muss erledigt werden.',
          difficulty: 3,
          xpReward: 12,
          tags: ['passive', 'modal-verbs'],
        },
        {
          id: 'ex-b2-02-01-04',
          type: 'multiple-choice',
          question: 'Complete: "Der Roman wurde ___ Thomas Mann geschrieben."',
          questionHinglish: 'Complete karo: "Der Roman wurde ___ Thomas Mann geschrieben."',
          options: ['von', 'vom', 'bei', 'aus'],
          correctAnswer: 'von',
          explanation: 'The agent is introduced with "von" + dative. "Thomas Mann" does not take an article here, so "von Thomas Mann".',
          explanationHinglish: 'Agent ke liye "von" + dative. Yahan "Thomas Mann" ke saath article nahi, isliye "von Thomas Mann".',
          difficulty: 3,
          xpReward: 12,
          tags: ['passive', 'agent'],
        },
        {
          id: 'ex-b2-02-01-05',
          type: 'typing',
          question: 'Translate: "The results will be published tomorrow."',
          questionHinglish: 'Translate karo: "The results will be published tomorrow."',
          correctAnswer: 'Die Ergebnisse werden morgen veröffentlicht.',
          explanation: 'Future passive with werden: Die Ergebnisse werden morgen veröffentlicht.',
          explanationHinglish: 'Future passive werden ke saath: Die Ergebnisse werden morgen veröffentlicht.',
          difficulty: 4,
          xpReward: 15,
          tags: ['passive', 'typing'],
        },
      ],
    },
    {
      id: 'l-b2-02-02',
      level: 'B2',
      moduleId: 'm-b2-02',
      title: 'Relative Clauses',
      titleHinglish: 'Relative Clauses',
      objective: 'Connect ideas with relative pronouns in the correct case',
      objectiveHinglish: 'Relative pronouns ko sahi case mein use karke ideas connect karo',
      estimatedMinutes: 30,
      skillFocus: ['grammar', 'writing'],
      prerequisites: ['l-b2-02-01'],
      order: 2,
      grammarPoints: ['relative pronouns', 'relative clauses', 'case in relative clauses'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "the man who..." in German?',
          'Which case does the relative pronoun take?',
        ],
        explanation: `Relative clauses give more information about a noun. The relative pronoun takes its **gender and number from the noun**, but its **case from its role in the relative clause**.

**Nominative:**
- Der Mann, **der** dort steht, ist mein Lehrer.
- Die Frau, **die** hier arbeitet, ist Ärztin.
- Das Kind, **das** spielt, ist müde.

**Accusative:**
- Der Mann, **den** ich sehe, ist mein Lehrer.
- Die Frau, **die** ich kenne, ist nett.
- Das Buch, **das** ich lese, ist spannend.

**Dative:**
- Die Frau, **der** ich helfe, ist meine Nachbarin. (helfen + dative)
- Der Mann, **dem** ich danke, ist mein Chef.
- Das Kind, **dem** ich helfe, ist mein Neffe.

**Genitive:**
- Der Autor, **dessen** Buch ich lese, ist berühmt.
- Die Frau, **deren** Mann Arzt ist, arbeitet hier.

**With prepositions:**
- Das Hotel, **in dem** wir gewohnt haben, war teuer.
- Die Stadt, **in der** ich lebe, ist klein.
- Der Freund, **mit dem** ich reise, ist lustig.

**Word order:** The conjugated verb goes to the **end** of the relative clause:
- Das Buch, das ich **lese**, ist spannend.
- Der Mann, der dort **steht**, ist mein Lehrer.

**Common mistakes:**
- ❌ Der Mann, der ich sehe, ... → ✅ Der Mann, **den** ich sehe, ... (sehen takes accusative)
- ❌ Das Buch, das ich lese ist spannend. → ✅ Das Buch, das ich lese**,** ist spannend.`,
        explanationHinglish: `Relative clauses kisi noun ke baare mein extra information dete hain. Relative pronoun ka **gender aur number noun se**, lekin **case relative clause mein uske role se** aata hai.

**Nominative:**
- Der Mann, **der** dort steht, ist mein Lehrer.
- Die Frau, **die** hier arbeitet, ist Ärztin.
- Das Kind, **das** spielt, ist müde.

**Accusative:**
- Der Mann, **den** ich sehe, ist mein Lehrer.
- Die Frau, **die** ich kenne, ist nett.
- Das Buch, **das** ich lese, ist spannend.

**Dative:**
- Die Frau, **der** ich helfe, ist meine Nachbarin. (helfen + dative)
- Der Mann, **dem** ich danke, ist mein Chef.
- Das Kind, **dem** ich helfe, ist mein Neffe.

**Genitive:**
- Der Autor, **dessen** Buch ich lese, ist berühmt.
- Die Frau, **deren** Mann Arzt ist, arbeitet hier.

**Prepositions ke saath:**
- Das Hotel, **in dem** wir gewohnt haben, war teuer.
- Die Stadt, **in der** ich lebe, ist klein.
- Der Freund, **mit dem** ich reise, ist lustig.

**Word order:** Relative clause mein conjugated verb **end** par:
- Das Buch, das ich **lese**, ist spannend.
- Der Mann, der dort **steht**, ist mein Lehrer.

**Common mistakes:**
- ❌ Der Mann, der ich sehe, ... → ✅ Der Mann, **den** ich sehe, ... (sehen accusative leta hai)
- ❌ Das Buch, das ich lese ist spannend. → ✅ Das Buch, das ich lese**,** ist spannend.`,
        examples: [
          {
            german: 'Der Mann, der dort steht, ist mein Lehrer.',
            english: 'The man who is standing there is my teacher.',
            hinglish: 'Jo aadmi wahan khada hai, woh mera teacher hai.',
            breakdown: [
              { word: 'Der Mann', role: 'antecedent (masculine)', meaning: 'the man' },
              { word: 'der', role: 'relative pronoun (nominative)', meaning: 'who' },
              { word: 'dort steht', role: 'relative clause (verb at end)', meaning: 'is standing there' },
              { word: 'ist mein Lehrer', role: 'main clause', meaning: 'is my teacher' },
            ],
            audioText: 'Der Mann, der dort steht, ist mein Lehrer.',
          },
          {
            german: 'Das Buch, das ich lese, ist spannend.',
            english: 'The book that I am reading is exciting.',
            hinglish: 'Jo kitaab main padh raha hoon, woh interesting hai.',
            audioText: 'Das Buch, das ich lese, ist spannend.',
          },
          {
            german: 'Die Frau, der ich helfe, ist meine Nachbarin.',
            english: 'The woman whom I am helping is my neighbour.',
            hinglish: 'Jis aurat ki main madad kar raha hoon, woh meri neighbour hai.',
            audioText: 'Die Frau, der ich helfe, ist meine Nachbarin.',
          },
        ],
        realLifeContext: 'Relative clauses make your German more fluent and precise. They are essential in B2 writing, descriptions, definitions, and formal emails.',
        culturalNote: 'German relative clauses are separated by commas. In formal writing, the relative pronoun cannot be omitted as easily as "that" in English.',
        summary: [
          'Relative pronoun agrees with the noun in gender and number',
          'Case depends on the role inside the relative clause',
          'Nominative: der/die/das; accusative: den/die/das; dative: dem/der/dem',
          'Genitive: dessen/deren',
          'Conjugated verb goes to the end of the relative clause',
        ],
      },
      exercises: [
        {
          id: 'ex-b2-02-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Der Mann, ___ dort steht, ist mein Lehrer."',
          questionHinglish: 'Complete karo: "Der Mann, ___ dort steht, ist mein Lehrer."',
          options: ['der', 'den', 'dem', 'das'],
          correctAnswer: 'der',
          explanation: 'The relative pronoun is the subject of "steht", so it is nominative masculine: der.',
          explanationHinglish: 'Relative pronoun "steht" ka subject hai, isliye nominative masculine: der.',
          difficulty: 3,
          xpReward: 12,
          tags: ['relative-clauses', 'nominative'],
        },
        {
          id: 'ex-b2-02-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Das Buch, ___ ich lese, ist spannend."',
          questionHinglish: 'Complete karo: "Das Buch, ___ ich lese, ist spannend."',
          options: ['das', 'der', 'den', 'dem'],
          correctAnswer: 'das',
          explanation: '"lesen" takes an accusative object. "Buch" is neuter, so the accusative relative pronoun is "das".',
          explanationHinglish: '"lesen" accusative object leta hai. "Buch" neuter hai, isliye accusative relative pronoun "das".',
          difficulty: 3,
          xpReward: 12,
          tags: ['relative-clauses', 'accusative'],
        },
        {
          id: 'ex-b2-02-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Die Frau, ___ ich helfe, ist meine Nachbarin."',
          questionHinglish: 'Complete karo: "Die Frau, ___ ich helfe, ist meine Nachbarin."',
          options: ['der', 'den', 'die', 'das'],
          correctAnswer: 'der',
          explanation: '"helfen" takes the dative. "Frau" is feminine, so the dative relative pronoun is "der".',
          explanationHinglish: '"helfen" dative leta hai. "Frau" feminine hai, isliye dative relative pronoun "der".',
          difficulty: 4,
          xpReward: 15,
          tags: ['relative-clauses', 'dative'],
        },
        {
          id: 'ex-b2-02-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Der / Mann / der / dort / steht / ist / mein / Lehrer / ."',
          questionHinglish: 'Sahi sentence banao: "Der / Mann / der / dort / steht / ist / mein / Lehrer / ."',
          options: ['Der', 'Mann', 'der', 'dort', 'steht', 'ist', 'mein', 'Lehrer', '.'],
          correctAnswer: 'Der Mann der dort steht ist mein Lehrer .',
          explanation: 'The relative clause "der dort steht" has the verb at the end; then the main clause follows.',
          explanationHinglish: 'Relative clause "der dort steht" mein verb end par; phir main clause.',
          difficulty: 4,
          xpReward: 15,
          tags: ['relative-clauses', 'word-order'],
        },
        {
          id: 'ex-b2-02-02-05',
          type: 'typing',
          question: 'Translate: "The book that I am reading is exciting."',
          questionHinglish: 'Translate karo: "The book that I am reading is exciting."',
          correctAnswer: 'Das Buch, das ich lese, ist spannend.',
          explanation: 'Use "Das Buch, das ich lese, ..." with the verb at the end of the relative clause.',
          explanationHinglish: '"Das Buch, das ich lese, ..." use karo, relative clause mein verb end par.',
          difficulty: 4,
          xpReward: 15,
          tags: ['relative-clauses', 'typing'],
        },
      ],
    },
  ],
};
