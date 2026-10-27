// ============================================================
// B1 MODULE 2 – OPINIONS & DISCUSSIONS
// ============================================================

import type { Module } from '../types';

export const B1_MODULE_OPINIONS: Module = {
  id: 'm-b1-02',
  level: 'B1',
  title: 'Opinions & Discussions',
  titleHinglish: 'Vichaar aur Discussion',
  description: 'Express opinions, agree and disagree politely, and make suggestions in discussions.',
  descriptionHinglish: 'Apne vichaar bolo, politely agree/disagree karo aur discussions mein suggestions do.',
  skills: ['speaking', 'writing', 'listening'],
  order: 2,
  isComplete: true,
  lessons: [
    {
      id: 'l-b1-02-01',
      level: 'B1',
      moduleId: 'm-b1-02',
      title: 'Giving Your Opinion',
      titleHinglish: 'Apna Vichaar Dena',
      objective: 'Express opinions with phrases like "Meiner Meinung nach" and use weil/deshalb correctly',
      objectiveHinglish: '"Meiner Meinung nach" jaisi phrases se opinion do aur weil/deshalb sahi use karo',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'grammar'],
      prerequisites: ['l-b1-01-01'],
      order: 1,
      grammarPoints: ['opinion phrases', 'weil', 'deshalb', 'dass clauses'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "I think" or "in my opinion" in German?',
          'Do you know the difference between "weil" and "deshalb"?',
        ],
        explanation: `At B1 you need to give reasons and opinions, not just facts.

**Opinion phrases:**
- **Meiner Meinung nach** ist das richtig. (In my opinion, that is correct.)
- **Ich finde**, dass das richtig ist. (I think that is correct.)
- **Ich bin der Meinung**, dass wir mehr üben müssen. (I am of the opinion that we need to practise more.)
- **Aus meiner Sicht** ist das ein Problem. (From my point of view, that is a problem.)

**Giving reasons with weil:**
"weil" sends the verb to the **end** of the clause.
- Ich bleibe zu Hause, **weil** ich krank **bin**.
- Wir lernen Deutsch, **weil** wir in Deutschland arbeiten **wollen**.

**Giving consequences with deshalb:**
"deshalb" starts a new clause and the verb comes directly after it.
- Ich bin krank. **Deshalb bleibe** ich zu Hause.
- Ich möchte besser sprechen. **Deshalb übe** ich jeden Tag.

**dass clauses:** the verb also goes to the end.
- Ich finde, **dass** das zu teuer **ist**.
- Ich denke, **dass** wir das morgen **machen** können.

**Word-order contrast:**
- Ich bleibe zu Hause, **weil** ich krank **bin**. (verb at end)
- Ich bin krank, **deshalb bleibe** ich zu Hause. (verb after deshalb)

**Common mistakes:**
- ❌ ..., weil ich bin krank. → ✅ ..., weil ich krank bin.
- ❌ ..., deshalb ich bleibe zu Hause. → ✅ ..., deshalb bleibe ich zu Hause.`,
        explanationHinglish: `B1 par tumhe sirf facts nahi, reasons aur opinions bhi dene hain.

**Opinion phrases:**
- **Meiner Meinung nach** ist das richtig. (Mere hisaab se yeh sahi hai.)
- **Ich finde**, dass das richtig ist. (Mujhe lagta hai yeh sahi hai.)
- **Ich bin der Meinung**, dass wir mehr üben müssen. (Main is opinion mein hoon ki humein zyada practice karni chahiye.)
- **Aus meiner Sicht** ist das ein Problem. (Mere point of view se yeh problem hai.)

**weil se reason dena:**
"weil" clause mein verb **end** par jaata hai.
- Ich bleibe zu Hause, **weil** ich krank **bin**.
- Wir lernen Deutsch, **weil** wir in Deutschland arbeiten **wollen**.

**deshalb se consequence:**
"deshalb" naya clause start karta hai aur verb turant uske baad aata hai.
- Ich bin krank. **Deshalb bleibe** ich zu Hause.
- Ich möchte besser sprechen. **Deshalb übe** ich jeden Tag.

**dass clauses:** verb end par.
- Ich finde, **dass** das zu teuer **ist**.
- Ich denke, **dass** wir das morgen **machen** können.

**Word-order contrast:**
- Ich bleibe zu Hause, **weil** ich krank **bin**. (verb end)
- Ich bin krank, **deshalb bleibe** ich zu Hause. (verb deshalb ke baad)

**Common mistakes:**
- ❌ ..., weil ich bin krank. → ✅ ..., weil ich krank bin.
- ❌ ..., deshalb ich bleibe zu Hause. → ✅ ..., deshalb bleibe ich zu Hause.`,
        examples: [
          {
            german: 'Meiner Meinung nach ist das zu teuer.',
            english: 'In my opinion, that is too expensive.',
            hinglish: 'Mere hisaab se yeh bahut mehnga hai.',
            breakdown: [
              { word: 'Meiner Meinung nach', role: 'opinion phrase', meaning: 'in my opinion' },
              { word: 'ist', role: 'verb (position 2)', meaning: 'is' },
              { word: 'das', role: 'subject', meaning: 'that' },
              { word: 'zu teuer', role: 'adjective phrase', meaning: 'too expensive' },
            ],
            audioText: 'Meiner Meinung nach ist das zu teuer.',
          },
          {
            german: 'Ich bleibe zu Hause, weil ich krank bin.',
            english: 'I am staying at home because I am ill.',
            hinglish: 'Main ghar par reh raha hoon kyunki main beemar hoon.',
            audioText: 'Ich bleibe zu Hause, weil ich krank bin.',
          },
          {
            german: 'Ich bin krank. Deshalb bleibe ich zu Hause.',
            english: 'I am ill. Therefore, I am staying at home.',
            hinglish: 'Main beemar hoon. Isliye main ghar par reh raha hoon.',
            audioText: 'Ich bin krank. Deshalb bleibe ich zu Hause.',
          },
        ],
        realLifeContext: 'B1 conversations require you to explain your opinion and give reasons. These structures are also essential for B1 speaking exams, discussions at work, and writing formal emails.',
        culturalNote: 'Germans often state disagreement directly but politely: "Das sehe ich anders" is normal. A reason with "weil" makes your opinion sound more convincing than a bare "Ich finde..."',
        summary: [
          'Meiner Meinung nach ... = In my opinion ...',
          'Ich finde, dass ... / Ich bin der Meinung, dass ...',
          'weil sends the verb to the end',
          'deshalb starts the consequence clause with the verb next',
          'dass clauses also put the verb at the end',
        ],
      },
      exercises: [
        {
          id: 'ex-b1-02-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Meiner Meinung nach ___ das richtig."',
          questionHinglish: 'Complete karo: "Meiner Meinung nach ___ das richtig."',
          options: ['ist', 'sind', 'bin', 'sein'],
          correctAnswer: 'ist',
          explanation: 'The subject is "das" (singular), so the verb is "ist". The phrase "Meiner Meinung nach" occupies position 1; the verb comes next.',
          explanationHinglish: 'Subject "das" (singular) hai, isliye verb "ist". "Meiner Meinung nach" position 1 par hai; verb uske baad.',
          difficulty: 2,
          xpReward: 10,
          tags: ['opinions', 'word-order'],
        },
        {
          id: 'ex-b1-02-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Ich bleibe zu Hause, weil ich krank ___."',
          questionHinglish: 'Complete karo: "Ich bleibe zu Hause, weil ich krank ___."',
          options: ['bin', 'ist', 'deshalb', 'weil'],
          correctAnswer: 'bin',
          explanation: 'In a "weil" clause, the conjugated verb goes to the end: ... weil ich krank bin.',
          explanationHinglish: '"weil" clause mein conjugated verb end par jaata hai: ... weil ich krank bin.',
          difficulty: 2,
          xpReward: 10,
          tags: ['weil', 'word-order'],
        },
        {
          id: 'ex-b1-02-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich bin krank. ___ bleibe ich zu Hause."',
          questionHinglish: 'Complete karo: "Ich bin krank. ___ bleibe ich zu Hause."',
          options: ['Deshalb', 'Weil', 'Dass', 'Obwohl'],
          correctAnswer: 'Deshalb',
          explanation: '"Deshalb" expresses a consequence and is followed directly by the verb: Deshalb bleibe ich zu Hause.',
          explanationHinglish: '"Deshalb" consequence batata hai aur uske turant baad verb aata hai: Deshalb bleibe ich zu Hause.',
          difficulty: 2,
          xpReward: 10,
          tags: ['deshalb', 'connectors'],
        },
        {
          id: 'ex-b1-02-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / finde / dass / das / zu teuer / ist / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / finde / dass / das / zu teuer / ist / ."',
          options: ['Ich', 'finde', 'dass', 'das', 'zu teuer', 'ist', '.'],
          correctAnswer: 'Ich finde dass das zu teuer ist .',
          explanation: 'In a "dass" clause, the verb goes to the end: Ich finde, dass das zu teuer ist.',
          explanationHinglish: '"dass" clause mein verb end par: Ich finde, dass das zu teuer ist.',
          difficulty: 3,
          xpReward: 12,
          tags: ['dass', 'word-order'],
        },
        {
          id: 'ex-b1-02-01-05',
          type: 'typing',
          question: 'Translate: "In my opinion, this is too expensive."',
          questionHinglish: 'Translate karo: "In my opinion, this is too expensive."',
          correctAnswer: 'Meiner Meinung nach ist das zu teuer.',
          explanation: 'Use "Meiner Meinung nach" + verb + subject: Meiner Meinung nach ist das zu teuer.',
          explanationHinglish: '"Meiner Meinung nach" + verb + subject use karo: Meiner Meinung nach ist das zu teuer.',
          difficulty: 3,
          xpReward: 12,
          tags: ['opinions', 'typing'],
        },
      ],
    },
    {
      id: 'l-b1-02-02',
      level: 'B1',
      moduleId: 'm-b1-02',
      title: 'Agreeing & Disagreeing Politely',
      titleHinglish: 'Politely Agree aur Disagree Karna',
      objective: 'Agree, disagree, and balance arguments using zwar...aber, obwohl, and trotzdem',
      objectiveHinglish: 'zwar...aber, obwohl aur trotzdem use karke agree, disagree aur balanced arguments do',
      estimatedMinutes: 25,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-b1-02-01'],
      order: 2,
      grammarPoints: ['zwar...aber', 'obwohl', 'trotzdem', 'polite disagreement'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you disagree without sounding rude?',
          'What is the difference between "obwohl" and "trotzdem"?',
        ],
        explanation: `Discussions need polite agreement and disagreement.

**Agreeing:**
- **Da hast du recht.** (You are right.)
- **Das stimmt.** (That is true.)
- **Ich stimme dir zu.** (I agree with you.)
- **Ich bin damit einverstanden.** (I agree with that.)

**Disagreeing politely:**
- **Das sehe ich anders.** (I see that differently.)
- **Ich bin damit nicht einverstanden.** (I do not agree with that.)
- **Da bin ich anderer Meinung.** (I have a different opinion there.)
- **Das stimmt zwar, aber ...** (That is true, but ...)

**Balancing with zwar ... aber:**
- Das ist **zwar** teuer, **aber** praktisch. (It is expensive, but practical.)
- Ich habe **zwar** Zeit, **aber** kein Geld. (I have time, but no money.)

**obwohl = although** (verb goes to the end):
- **Obwohl** es teuer **ist**, kaufe ich es. (Although it is expensive, I am buying it.)
- Ich kaufe es, **obwohl** es teuer **ist**.

**trotzdem = nevertheless** (verb comes right after it):
- Es ist teuer. **Trotzdem kaufe** ich es. (It is expensive. Nevertheless, I am buying it.)
- Ich bin müde. **Trotzdem gehe** ich noch einkaufen.

**Contrast:**
- **obwohl** + subordinate clause (verb at end)
- **trotzdem** + main clause (verb in position 2)

**Common mistakes:**
- ❌ Obwohl es ist teuer, kaufe ich es. → ✅ Obwohl es teuer ist, kaufe ich es.
- ❌ Trotzdem ich müde bin, gehe ich einkaufen. → ✅ Trotzdem gehe ich einkaufen.`,
        explanationHinglish: `Discussions mein polite agreement aur disagreement zaroori hai.

**Agreeing:**
- **Da hast du recht.** (Tum sahi ho.)
- **Das stimmt.** (Yeh sach hai.)
- **Ich stimme dir zu.** (Main tumse agree karta hoon.)
- **Ich bin damit einverstanden.** (Main isse agree karta hoon.)

**Politely disagree:**
- **Das sehe ich anders.** (Main ise alag tarah se dekhta hoon.)
- **Ich bin damit nicht einverstanden.** (Main isse agree nahi karta.)
- **Da bin ich anderer Meinung.** (Wahan mera alag opinion hai.)
- **Das stimmt zwar, aber ...** (Yeh sach hai, lekin ...)

**zwar ... aber se balance:**
- Das ist **zwar** teuer, **aber** praktisch. (Yeh mehnga hai, lekin practical hai.)
- Ich habe **zwar** Zeit, **aber** kein Geld. (Mere paas time hai, lekin paisa nahi.)

**obwohl = although** (verb end par):
- **Obwohl** es teuer **ist**, kaufe ich es. (Halanki yeh mehnga hai, main ise khareedta hoon.)
- Ich kaufe es, **obwohl** es teuer **ist**.

**trotzdem = nevertheless** (verb turant baad):
- Es ist teuer. **Trotzdem kaufe** ich es. (Yeh mehnga hai. Phir bhi main ise khareedta hoon.)
- Ich bin müde. **Trotzdem gehe** ich noch einkaufen.

**Contrast:**
- **obwohl** + subordinate clause (verb end)
- **trotzdem** + main clause (verb position 2)

**Common mistakes:**
- ❌ Obwohl es ist teuer, kaufe ich es. → ✅ Obwohl es teuer ist, kaufe ich es.
- ❌ Trotzdem ich müde bin, gehe ich einkaufen. → ✅ Trotzdem gehe ich einkaufen.`,
        examples: [
          {
            german: 'Das ist zwar teuer, aber praktisch.',
            english: 'It is expensive, but practical.',
            hinglish: 'Yeh mehnga hai, lekin practical hai.',
            breakdown: [
              { word: 'Das', role: 'subject', meaning: 'that' },
              { word: 'ist', role: 'verb', meaning: 'is' },
              { word: 'zwar', role: 'contrast particle', meaning: 'admittedly / indeed' },
              { word: 'teuer', role: 'adjective', meaning: 'expensive' },
              { word: 'aber', role: 'conjunction', meaning: 'but' },
              { word: 'praktisch', role: 'adjective', meaning: 'practical' },
            ],
            audioText: 'Das ist zwar teuer, aber praktisch.',
          },
          {
            german: 'Obwohl es teuer ist, kaufe ich es.',
            english: 'Although it is expensive, I am buying it.',
            hinglish: 'Halanki yeh mehnga hai, main ise khareedta hoon.',
            audioText: 'Obwohl es teuer ist, kaufe ich es.',
          },
          {
            german: 'Ich stimme dir zu.',
            english: 'I agree with you.',
            hinglish: 'Main tumse agree karta hoon.',
            audioText: 'Ich stimme dir zu.',
          },
        ],
        realLifeContext: 'Polite disagreement is essential in German workplaces, language courses, and everyday discussions. Direct disagreement is acceptable, but adding "zwar...aber" or "Das sehe ich anders" keeps the tone respectful.',
        culturalNote: 'Germans often separate the person from the opinion: you can disagree strongly with an idea while remaining friendly. "Da bin ich anderer Meinung" is a standard polite formula.',
        summary: [
          'Da hast du recht / Das stimmt = You are right / That is true',
          'Ich stimme dir zu = I agree with you',
          'Das sehe ich anders = I see that differently',
          'zwar ... aber = admittedly ..., but ...',
          'obwohl + verb at end; trotzdem + verb in position 2',
        ],
      },
      exercises: [
        {
          id: 'ex-b1-02-02-01',
          type: 'multiple-choice',
          question: 'What is the correct ending? "Ich stimme dir ___."',
          questionHinglish: 'Sahi ending kya hai? "Ich stimme dir ___."',
          options: ['zu', 'ab', 'an', 'ein'],
          correctAnswer: 'zu',
          explanation: '"zustimmen" is separable: Ich stimme dir zu. It means "I agree with you."',
          explanationHinglish: '"zustimmen" separable hai: Ich stimme dir zu. Matlab "main tumse agree karta hoon".',
          difficulty: 2,
          xpReward: 10,
          tags: ['agreeing', 'separable-verbs'],
        },
        {
          id: 'ex-b1-02-02-02',
          type: 'multiple-choice',
          question: 'What does "Das sehe ich anders" mean?',
          questionHinglish: '"Das sehe ich anders" ka matlab kya hai?',
          options: ['I see that differently', 'I cannot see that', 'I agree completely', 'I do not understand'],
          correctAnswer: 'I see that differently',
          explanation: '"anders" means differently. "Das sehe ich anders" is a polite way to disagree.',
          explanationHinglish: '"anders" ka matlab alag tarah se. "Das sehe ich anders" politely disagree karne ka tarika hai.',
          difficulty: 2,
          xpReward: 10,
          tags: ['disagreeing', 'vocabulary'],
        },
        {
          id: 'ex-b1-02-02-03',
          type: 'multiple-choice',
          question: 'Complete: "___ es teuer ist, kaufe ich es."',
          questionHinglish: 'Complete karo: "___ es teuer ist, kaufe ich es."',
          options: ['Obwohl', 'Weil', 'Deshalb', 'Dass'],
          correctAnswer: 'Obwohl',
          explanation: '"Obwohl" means although and introduces a subordinate clause with the verb at the end: Obwohl es teuer ist, ...',
          explanationHinglish: '"Obwohl" ka matlab although hai aur subordinate clause mein verb end par: Obwohl es teuer ist, ...',
          difficulty: 3,
          xpReward: 12,
          tags: ['obwohl', 'connectors'],
        },
        {
          id: 'ex-b1-02-02-04',
          type: 'multiple-choice',
          question: 'Complete: "Es ist teuer. ___ kaufe ich es."',
          questionHinglish: 'Complete karo: "Es ist teuer. ___ kaufe ich es."',
          options: ['Trotzdem', 'Obwohl', 'Weil', 'Dass'],
          correctAnswer: 'Trotzdem',
          explanation: '"Trotzdem" means nevertheless and is followed directly by the verb: Trotzdem kaufe ich es.',
          explanationHinglish: '"Trotzdem" ka matlab nevertheless hai aur uske turant baad verb: Trotzdem kaufe ich es.',
          difficulty: 3,
          xpReward: 12,
          tags: ['trotzdem', 'connectors'],
        },
        {
          id: 'ex-b1-02-02-05',
          type: 'typing',
          question: 'Translate: "I see that differently."',
          questionHinglish: 'Translate karo: "I see that differently."',
          correctAnswer: 'Das sehe ich anders.',
          explanation: 'Use the fixed phrase "Das sehe ich anders" for polite disagreement.',
          explanationHinglish: 'Polite disagreement ke liye fixed phrase "Das sehe ich anders" use karo.',
          difficulty: 2,
          xpReward: 10,
          tags: ['disagreeing', 'typing'],
        },
      ],
    },
    {
      id: 'l-b1-02-03',
      level: 'B1',
      moduleId: 'm-b1-02',
      title: 'Suggestions & Polite Requests',
      titleHinglish: 'Suggestions aur Polite Requests',
      objective: 'Make suggestions and polite requests using Konjunktiv II',
      objectiveHinglish: 'Konjunktiv II use karke suggestions aur polite requests banao',
      estimatedMinutes: 22,
      skillFocus: ['speaking', 'writing'],
      prerequisites: ['l-b1-02-02'],
      order: 3,
      grammarPoints: ['Konjunktiv II', 'würde/könnte/sollte', 'suggestions'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you say "Could you help me?" politely?',
          'How do you suggest an idea to a group?',
        ],
        explanation: `**Konjunktiv II** makes requests, suggestions, and hypothetical situations sound polite.

**würde + infinitive** (would):
- Ich **würde** nach Berlin **fahren**. (I would go to Berlin.)
- **Würdest** du mir helfen? (Would you help me?)

**könnte** (could):
- **Könntest** du mir bitte helfen? (Could you please help me?)
- **Könnten** Sie das wiederholen? (Could you repeat that?)

**sollte** (should):
- Du **solltest** mehr lernen. (You should study more.)
- Wir **sollten** früher anfangen. (We should start earlier.)

**Suggestions:**
- **Wie wäre es mit** einem Kaffee? (How about a coffee?)
- **Lass uns** ins Kino **gehen**. (Let's go to the cinema.)
- **Ich würde vorschlagen**, dass wir morgen **anfangen**. (I would suggest that we start tomorrow.)
- **Hast du Lust, ...?** (Do you feel like ...?)

**Hypothetical:**
- **Wenn ich du wäre**, würde ich das machen. (If I were you, I would do that.)

**Politeness ladder:**
- Kannst du mir helfen? (direct, informal)
- **Könntest** du mir helfen? (more polite)
- **Könnten Sie** mir helfen? (formal and polite)

**Common mistakes:**
- ❌ Ich würde nach Berlin fahre. → ✅ Ich würde nach Berlin fahren. (infinitive after würde)
- ❌ Wie wäre mit einem Kaffee? → ✅ Wie wäre es mit einem Kaffee?`,
        explanationHinglish: `**Konjunktiv II** requests, suggestions aur hypothetical situations ko polite banata hai.

**würde + infinitive** (would):
- Ich **würde** nach Berlin **fahren**. (Main Berlin jaata.)
- **Würdest** du mir helfen? (Kya tum meri madad karoge?)

**könnte** (could):
- **Könntest** du mir bitte helfen? (Kya tum please meri madad kar sakte ho?)
- **Könnten** Sie das wiederholen? (Kya aap ise repeat kar sakte hain?)

**sollte** (should):
- Du **solltest** mehr lernen. (Tumhe zyada padhna chahiye.)
- Wir **sollten** früher anfangen. (Humein jaldi shuru karna chahiye.)

**Suggestions:**
- **Wie wäre es mit** einem Kaffee? (Ek coffee kaise rahega?)
- **Lass uns** ins Kino **gehen**. (Chalo cinema chalte hain.)
- **Ich würde vorschlagen**, dass wir morgen **anfangen**. (Main suggest karunga ki hum kal shuru karein.)
- **Hast du Lust, ...?** (Kya tumhara mann hai ...?)

**Hypothetical:**
- **Wenn ich du wäre**, würde ich das machen. (Agar main tum hota, main yeh karta.)

**Politeness ladder:**
- Kannst du mir helfen? (direct, informal)
- **Könntest** du mir helfen? (zyada polite)
- **Könnten Sie** mir helfen? (formal aur polite)

**Common mistakes:**
- ❌ Ich würde nach Berlin fahre. → ✅ Ich würde nach Berlin fahren. (würde ke baad infinitive)
- ❌ Wie wäre mit einem Kaffee? → ✅ Wie wäre es mit einem Kaffee?`,
        examples: [
          {
            german: 'Könntest du mir bitte helfen?',
            english: 'Could you please help me?',
            hinglish: 'Kya tum please meri madad kar sakte ho?',
            breakdown: [
              { word: 'Könntest', role: 'Konjunktiv II of können', meaning: 'could' },
              { word: 'du', role: 'subject', meaning: 'you (informal)' },
              { word: 'mir', role: 'dative object', meaning: 'me' },
              { word: 'bitte', role: 'polite particle', meaning: 'please' },
              { word: 'helfen', role: 'infinitive (end)', meaning: 'help' },
            ],
            audioText: 'Könntest du mir bitte helfen?',
          },
          {
            german: 'Wie wäre es mit einem Kaffee?',
            english: 'How about a coffee?',
            hinglish: 'Ek coffee kaise rahega?',
            audioText: 'Wie wäre es mit einem Kaffee?',
          },
          {
            german: 'Ich würde vorschlagen, dass wir morgen anfangen.',
            english: 'I would suggest that we start tomorrow.',
            hinglish: 'Main suggest karunga ki hum kal shuru karein.',
            audioText: 'Ich würde vorschlagen, dass wir morgen anfangen.',
          },
        ],
        realLifeContext: 'B1 learners need polite suggestions at work, in shared flats, and in appointments. "Könnten Sie...?" and "Ich würde vorschlagen..." are safer than direct imperatives.',
        culturalNote: 'Direct imperatives can sound harsh in German. Using "Könnten Sie bitte..." or "Würden Sie bitte..." is standard in offices, shops, and formal emails.',
        summary: [
          'würde + infinitive = would do',
          'könnte = could; sollte = should',
          'Könntest du ...? / Könnten Sie ...? for polite requests',
          'Wie wäre es mit ...? = How about ...?',
          'Ich würde vorschlagen, dass ... = I would suggest that ...',
        ],
      },
      exercises: [
        {
          id: 'ex-b1-02-03-01',
          type: 'multiple-choice',
          question: 'Which is the most polite request?',
          questionHinglish: 'Sabse polite request kaun si hai?',
          options: [
            'Hilf mir!',
            'Kannst du mir helfen?',
            'Könntest du mir bitte helfen?',
            'Du hilfst mir.',
          ],
          correctAnswer: 'Könntest du mir bitte helfen?',
          explanation: '"Könntest" (Konjunktiv II) + "bitte" makes the request polite.',
          explanationHinglish: '"Könntest" (Konjunktiv II) + "bitte" request ko polite banate hain.',
          difficulty: 2,
          xpReward: 10,
          tags: ['konjunktiv-ii', 'politeness'],
        },
        {
          id: 'ex-b1-02-03-02',
          type: 'multiple-choice',
          question: 'Complete: "Wie ___ es mit einem Kaffee?"',
          questionHinglish: 'Complete karo: "Wie ___ es mit einem Kaffee?"',
          options: ['wäre', 'ist', 'war', 'wird'],
          correctAnswer: 'wäre',
          explanation: 'The fixed suggestion phrase is "Wie wäre es mit ...?" (How about ...?).',
          explanationHinglish: 'Fixed suggestion phrase hai "Wie wäre es mit ...?" (Kya ... kaise rahega?).',
          difficulty: 2,
          xpReward: 10,
          tags: ['suggestions', 'konjunktiv-ii'],
        },
        {
          id: 'ex-b1-02-03-03',
          type: 'multiple-choice',
          question: 'Complete: "Lass ___ ins Kino gehen."',
          questionHinglish: 'Complete karo: "Lass ___ ins Kino gehen."',
          options: ['uns', 'du', 'wir', 'ihr'],
          correctAnswer: 'uns',
          explanation: '"Lass uns ..." means "Let\'s ...": Lass uns ins Kino gehen.',
          explanationHinglish: '"Lass uns ..." ka matlab "Chalo ...": Lass uns ins Kino gehen.',
          difficulty: 2,
          xpReward: 10,
          tags: ['suggestions'],
        },
        {
          id: 'ex-b1-02-03-04',
          type: 'ordering',
          question: 'Arrange the words into a suggestion: "Ich / würde / vorschlagen / dass / wir / morgen / anfangen / ."',
          questionHinglish: 'Sahi suggestion banao: "Ich / würde / vorschlagen / dass / wir / morgen / anfangen / ."',
          options: ['Ich', 'würde', 'vorschlagen', 'dass', 'wir', 'morgen', 'anfangen', '.'],
          correctAnswer: 'Ich würde vorschlagen dass wir morgen anfangen .',
          explanation: 'würde + infinitive "vorschlagen", and the dass clause puts "anfangen" at the end.',
          explanationHinglish: 'würde + infinitive "vorschlagen", aur dass clause mein "anfangen" end par.',
          difficulty: 4,
          xpReward: 15,
          tags: ['suggestions', 'word-order'],
        },
        {
          id: 'ex-b1-02-03-05',
          type: 'typing',
          question: 'Translate: "I would suggest that we start tomorrow."',
          questionHinglish: 'Translate karo: "I would suggest that we start tomorrow."',
          correctAnswer: 'Ich würde vorschlagen, dass wir morgen anfangen.',
          explanation: 'Use "Ich würde vorschlagen, dass ..." with the verb at the end of the dass clause.',
          explanationHinglish: '"Ich würde vorschlagen, dass ..." use karo, dass clause mein verb end par.',
          difficulty: 4,
          xpReward: 15,
          tags: ['suggestions', 'typing'],
        },
      ],
    },
  ],
};
