// ============================================================
// A1 MODULE 11 – FREE TIME, WEATHER & INVITATIONS
// ============================================================

import type { Module } from '../types';

export const A1_MODULE_FREETIME: Module = {
  id: 'm-a1-11',
  level: 'A1',
  title: 'Free Time, Weather & Invitations',
  titleHinglish: 'Free Time, Mausam aur Invitations',
  description: 'Talk about hobbies, describe the weather, and invite someone in German.',
  descriptionHinglish: 'Hobbies ke baare mein bolo, mausam describe karo aur kisi ko invite karo.',
  skills: ['speaking', 'listening', 'vocabulary'],
  order: 11,
  isComplete: true,
  lessons: [
    {
      id: 'l-a1-11-01',
      level: 'A1',
      moduleId: 'm-a1-11',
      title: 'Hobbies & Free Time',
      titleHinglish: 'Hobbies aur Free Time',
      objective: 'Say what you like doing in your free time using gern',
      objectiveHinglish: 'gern use karke batao ki free time mein tumhe kya karna pasand hai',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a1-10-03'],
      order: 1,
      grammarPoints: ['gern', 'present tense', 'free-time vocabulary'],
      vocabulary: [],
      content: {
        warmUp: [
          'What do you like doing at the weekend?',
          'Do you prefer sport, music, or films?',
        ],
        explanation: `Use **gern** to say you like doing something. It usually comes after the verb.

**Questions:**
- **Was machst du gern?** = What do you like doing?
- **Was machst du in deiner Freizeit?** = What do you do in your free time?
- **Hast du ein Hobby?** = Do you have a hobby?

**Answers:**
- Ich **spiele gern** Fußball.
- Ich **höre gern** Musik.
- Ich **lese gern**.
- Ich **gehe gern** schwimmen.
- Ich **koche gern**.
- Ich **tanze gern**.

**Preferences:**
- Ich spiele **gern** Tennis.
- Ich spiele **lieber** Fußball. (I prefer football.)
- Ich spiele **am liebsten** Basketball. (I like basketball best.)

**Negative:**
- Ich spiele **nicht gern** Tennis.
- Ich habe **keine Zeit**.

**Word order:** gern comes after the conjugated verb:
- Ich **lese gern** Bücher.
- Am Wochenende **gehe** ich **gern** ins Kino.

**Common mistakes:**
- ❌ Ich gern spiele Fußball. → ✅ Ich spiele gern Fußball.
- ❌ Ich mag spielen Fußball. → ✅ Ich spiele gern Fußball.
- ❌ Ich habe nicht Zeit. → ✅ Ich habe keine Zeit. (Zeit is a noun)`,
        explanationHinglish: `**gern** use karke batao ki tumhe koi kaam karna pasand hai. Yeh usually verb ke baad aata hai.

**Questions:**
- **Was machst du gern?** = Tumhe kya karna pasand hai?
- **Was machst du in deiner Freizeit?** = Free time mein kya karte ho?
- **Hast du ein Hobby?** = Koi hobby hai?

**Answers:**
- Ich **spiele gern** Fußball.
- Ich **höre gern** Musik.
- Ich **lese gern**.
- Ich **gehe gern** schwimmen.
- Ich **koche gern**.
- Ich **tanze gern**.

**Preferences:**
- Ich spiele **gern** Tennis.
- Ich spiele **lieber** Fußball. (Mujhe football zyada pasand hai.)
- Ich spiele **am liebsten** Basketball. (Mujhe basketball sabse zyada pasand hai.)

**Negative:**
- Ich spiele **nicht gern** Tennis.
- Ich habe **keine Zeit**.

**Word order:** gern conjugated verb ke baad:
- Ich **lese gern** Bücher.
- Am Wochenende **gehe** ich **gern** ins Kino.

**Common mistakes:**
- ❌ Ich gern spiele Fußball. → ✅ Ich spiele gern Fußball.
- ❌ Ich mag spielen Fußball. → ✅ Ich spiele gern Fußball.
- ❌ Ich habe nicht Zeit. → ✅ Ich habe keine Zeit. (Zeit noun hai)`,
        examples: [
          {
            german: 'Ich spiele gern Fußball.',
            english: 'I like playing football.',
            hinglish: 'Mujhe football khelna pasand hai.',
            breakdown: [
              { word: 'Ich', role: 'subject', meaning: 'I' },
              { word: 'spiele', role: 'conjugated verb', meaning: 'play' },
              { word: 'gern', role: 'adverb of preference', meaning: 'like to' },
              { word: 'Fußball', role: 'noun', meaning: 'football' },
            ],
            audioText: 'Ich spiele gern Fußball.',
          },
          {
            german: 'Ich höre gern Musik.',
            english: 'I like listening to music.',
            hinglish: 'Mujhe music sunna pasand hai.',
            audioText: 'Ich höre gern Musik.',
          },
          {
            german: 'Was machst du in deiner Freizeit?',
            english: 'What do you do in your free time?',
            hinglish: 'Free time mein kya karte ho?',
            audioText: 'Was machst du in deiner Freizeit?',
          },
        ],
        realLifeContext: 'Hobbies are a common small-talk topic. They help you connect with classmates, colleagues, and hosts, and they are a standard A1 speaking exam topic.',
        culturalNote: 'Club life is important in Germany: "der Verein" is a club for sport, music, or hobbies. Many people say "Ich bin im Verein" when they belong to one.',
        summary: [
          'gern after the verb = like doing something',
          'lieber = prefer; am liebsten = like best',
          'Was machst du in deiner Freizeit? = What do you do in your free time?',
          'nicht gern = do not like doing something',
          'keine Zeit = no time',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-11-01-01',
          type: 'multiple-choice',
          question: 'Complete: "Ich höre gern ___."',
          questionHinglish: 'Complete karo: "Ich höre gern ___."',
          options: ['Musik', 'Buch', 'Fußball', 'Zeit'],
          correctAnswer: 'Musik',
          explanation: 'You listen to music: Ich höre gern Musik.',
          explanationHinglish: 'Music suni jaati hai: Ich höre gern Musik.',
          difficulty: 1,
          xpReward: 8,
          tags: ['hobbies', 'vocabulary'],
        },
        {
          id: 'ex-a1-11-01-02',
          type: 'multiple-choice',
          question: 'Complete: "Was machst du in deiner ___?"',
          questionHinglish: 'Complete karo: "Was machst du in deiner ___?"',
          options: ['Freizeit', 'Arbeit', 'Schule', 'Musik'],
          correctAnswer: 'Freizeit',
          explanation: '"Freizeit" means free time. The question asks what you do in your free time.',
          explanationHinglish: '"Freizeit" ka matlab free time. Question free time ke baare mein hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['hobbies', 'vocabulary'],
        },
        {
          id: 'ex-a1-11-01-03',
          type: 'multiple-choice',
          question: 'Complete: "Ich habe keine ___." (no time)',
          questionHinglish: 'Complete karo: "Ich habe keine ___." (time nahi hai)',
          options: ['Zeit', 'Musik', 'Film', 'Hobby'],
          correctAnswer: 'Zeit',
          explanation: '"keine Zeit" means no time: Ich habe keine Zeit.',
          explanationHinglish: '"keine Zeit" ka matlab time nahi: Ich habe keine Zeit.',
          difficulty: 1,
          xpReward: 8,
          tags: ['hobbies', 'negation'],
        },
        {
          id: 'ex-a1-11-01-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Ich / spiele / gern / Fußball / ."',
          questionHinglish: 'Sahi sentence banao: "Ich / spiele / gern / Fußball / ."',
          options: ['Ich', 'spiele', 'gern', 'Fußball', '.'],
          correctAnswer: 'Ich spiele gern Fußball .',
          explanation: 'gern comes after the conjugated verb: Ich spiele gern Fußball.',
          explanationHinglish: 'gern conjugated verb ke baad: Ich spiele gern Fußball.',
          difficulty: 1,
          xpReward: 10,
          tags: ['hobbies', 'word-order'],
        },
        {
          id: 'ex-a1-11-01-05',
          type: 'typing',
          question: 'Translate: "I like reading."',
          questionHinglish: 'Translate karo: "I like reading."',
          correctAnswer: 'Ich lese gern.',
          explanation: 'Use gern after the verb: Ich lese gern.',
          explanationHinglish: 'Verb ke baad gern use karo: Ich lese gern.',
          difficulty: 2,
          xpReward: 10,
          tags: ['hobbies', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-11-02',
      level: 'A1',
      moduleId: 'm-a1-11',
      title: 'Weather & Seasons',
      titleHinglish: 'Mausam aur Seasons',
      objective: 'Describe the weather and talk about the four seasons',
      objectiveHinglish: 'Mausam describe karo aur chaar seasons ke baare mein bolo',
      estimatedMinutes: 18,
      skillFocus: ['speaking', 'vocabulary'],
      prerequisites: ['l-a1-11-01'],
      order: 2,
      grammarPoints: ['weather expressions', 'seasons', 'impersonal es'],
      vocabulary: [],
      content: {
        warmUp: [
          'What is the weather like today?',
          'Which season do you like best?',
        ],
        explanation: `**Asking about the weather:**
- **Wie ist das Wetter?** = What is the weather like?
- **Wie ist das Wetter heute?** = What is the weather like today?

**Weather expressions:**
- Es ist **sonnig**. = It is sunny.
- Es ist **bewölkt**. = It is cloudy.
- Es ist **windig**. = It is windy.
- Es **regnet**. = It is raining.
- Es **schneit**. = It is snowing.
- Es ist **kalt / warm / heiß / kühl**. = It is cold / warm / hot / cool.

**Seasons:**
- der **Frühling** = spring
- der **Sommer** = summer
- der **Herbst** = autumn
- der **Winter** = winter

**Talking about seasons:**
- **Im Sommer** ist es warm.
- **Im Winter** ist es kalt und es schneit oft.
- **Im Herbst** regnet es viel.
- **Im Frühling** ist es schön.

**Useful words:**
- der Regen = rain
- der Schnee = snow
- die Sonne = sun
- der Wind = wind

**Common mistakes:**
- ❌ Es ist regnen. → ✅ Es regnet.
- ❌ Im Winter ist kalt. → ✅ Im Winter ist es kalt.
- ❌ Das Wetter ist sonnig heute. (word order) → ✅ Das Wetter ist heute sonnig.`,
        explanationHinglish: `**Mausam ke baare mein puchna:**
- **Wie ist das Wetter?** = Mausam kaisa hai?
- **Wie ist das Wetter heute?** = Aaj mausam kaisa hai?

**Weather expressions:**
- Es ist **sonnig**. = Dhoop hai.
- Es ist **bewölkt**. = Badal chhaaye hain.
- Es ist **windig**. = Hawa chal rahi hai.
- Es **regnet**. = Barish ho rahi hai.
- Es **schneit**. = Baraf pad rahi hai.
- Es ist **kalt / warm / heiß / kühl**. = Thand / garmi / bahut garmi / thanda.

**Seasons:**
- der **Frühling** = spring
- der **Sommer** = summer
- der **Herbst** = autumn
- der **Winter** = winter

**Seasons ke baare mein:**
- **Im Sommer** ist es warm.
- **Im Winter** ist es kalt und es schneit oft.
- **Im Herbst** regnet es viel.
- **Im Frühling** ist es schön.

**Useful words:**
- der Regen = barish
- der Schnee = baraf
- die Sonne = sooraj
- der Wind = hawa

**Common mistakes:**
- ❌ Es ist regnen. → ✅ Es regnet.
- ❌ Im Winter ist kalt. → ✅ Im Winter ist es kalt.
- ❌ Das Wetter ist sonnig heute. → ✅ Das Wetter ist heute sonnig.`,
        examples: [
          {
            german: 'Wie ist das Wetter heute?',
            english: 'What is the weather like today?',
            hinglish: 'Aaj mausam kaisa hai?',
            breakdown: [
              { word: 'Wie', role: 'question word', meaning: 'how' },
              { word: 'ist', role: 'verb', meaning: 'is' },
              { word: 'das Wetter', role: 'subject', meaning: 'the weather' },
              { word: 'heute', role: 'time adverb', meaning: 'today' },
            ],
            audioText: 'Wie ist das Wetter heute?',
          },
          {
            german: 'Es regnet.',
            english: 'It is raining.',
            hinglish: 'Barish ho rahi hai.',
            audioText: 'Es regnet.',
          },
          {
            german: 'Im Winter ist es kalt.',
            english: 'In winter it is cold.',
            hinglish: 'Winter mein thand hoti hai.',
            audioText: 'Im Winter ist es kalt.',
          },
        ],
        realLifeContext: 'Weather talk is everywhere: at the bus stop, in shops, and with neighbours. It is also a safe small-talk topic when you meet someone new.',
        culturalNote: 'The German weather is famously changeable. "Es regnet" can be used without a subject like "it"; the verb is always third-person singular.',
        summary: [
          'Wie ist das Wetter? = What is the weather like?',
          'Es regnet / Es schneit / Es ist sonnig',
          'Seasons: Frühling, Sommer, Herbst, Winter',
          'Use im + season: im Sommer, im Winter',
          'Weather sentences often start with es',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-11-02-01',
          type: 'multiple-choice',
          question: 'Complete: "Es ___." (it is raining)',
          questionHinglish: 'Complete karo: "Es ___." (barish ho rahi hai)',
          options: ['regnet', 'schneit', 'scheint', 'ist'],
          correctAnswer: 'regnet',
          explanation: '"regnen" means to rain: Es regnet.',
          explanationHinglish: '"regnen" ka matlab barish hona: Es regnet.',
          difficulty: 1,
          xpReward: 8,
          tags: ['weather', 'vocabulary'],
        },
        {
          id: 'ex-a1-11-02-02',
          type: 'multiple-choice',
          question: 'Complete: "Im ___ ist es kalt."',
          questionHinglish: 'Complete karo: "Im ___ ist es kalt."',
          options: ['Winter', 'Sommer', 'Frühling', 'Herbst'],
          correctAnswer: 'Winter',
          explanation: 'Winter is the coldest season: Im Winter ist es kalt.',
          explanationHinglish: 'Winter sabse thanda season hai: Im Winter ist es kalt.',
          difficulty: 1,
          xpReward: 8,
          tags: ['weather', 'seasons'],
        },
        {
          id: 'ex-a1-11-02-03',
          type: 'multiple-choice',
          question: 'Complete: "Wie ist das ___?"',
          questionHinglish: 'Complete karo: "Wie ist das ___?"',
          options: ['Wetter', 'Zeit', 'Regen', 'Schnee'],
          correctAnswer: 'Wetter',
          explanation: 'The question is "Wie ist das Wetter?" = What is the weather like?',
          explanationHinglish: 'Question "Wie ist das Wetter?" hai = Mausam kaisa hai?',
          difficulty: 1,
          xpReward: 8,
          tags: ['weather', 'questions'],
        },
        {
          id: 'ex-a1-11-02-04',
          type: 'ordering',
          question: 'Arrange the words into a correct sentence: "Im Sommer / ist / es / warm / ."',
          questionHinglish: 'Sahi sentence banao: "Im Sommer / ist / es / warm / ."',
          options: ['Im Sommer', 'ist', 'es', 'warm', '.'],
          correctAnswer: 'Im Sommer ist es warm .',
          explanation: 'The time expression starts the sentence; the verb "ist" stays in position 2.',
          explanationHinglish: 'Time expression sentence start karta hai; verb "ist" position 2 par.',
          difficulty: 2,
          xpReward: 10,
          tags: ['weather', 'word-order'],
        },
        {
          id: 'ex-a1-11-02-05',
          type: 'typing',
          question: 'Translate: "It is sunny."',
          questionHinglish: 'Translate karo: "It is sunny."',
          correctAnswer: 'Es ist sonnig.',
          explanation: 'Use "Es ist sonnig" for sunny weather.',
          explanationHinglish: 'Sunny weather ke liye "Es ist sonnig" use karo.',
          difficulty: 1,
          xpReward: 8,
          tags: ['weather', 'typing'],
        },
      ],
    },
    {
      id: 'l-a1-11-03',
      level: 'A1',
      moduleId: 'm-a1-11',
      title: 'Invitations & Making Plans',
      titleHinglish: 'Invitations aur Plans Banana',
      objective: 'Invite someone, accept, and decline politely',
      objectiveHinglish: 'Kisi ko invite karo, accept karo aur politely decline karo',
      estimatedMinutes: 20,
      skillFocus: ['speaking', 'listening'],
      prerequisites: ['l-a1-11-02'],
      order: 3,
      grammarPoints: ['Lust haben', 'Wollen wir...?', 'polite acceptance/refusal'],
      vocabulary: [],
      content: {
        warmUp: [
          'How do you invite a friend to the cinema?',
          'How do you say no without being rude?',
        ],
        explanation: `**Inviting someone:**
- **Hast du Lust, ins Kino zu gehen?** = Do you feel like going to the cinema?
- **Wollen wir ins Kino gehen?** = Shall we go to the cinema?
- **Gehen wir zusammen essen?** = Shall we eat together?
- **Treffen wir uns um sieben Uhr?** = Shall we meet at seven?

**Accepting:**
- **Ja, gern!** = Yes, gladly!
- **Das ist eine gute Idee.** = That is a good idea.
- **Ja, das passt mir gut.** = Yes, that suits me.

**Declining politely:**
- **Leider kann ich nicht.** = Unfortunately, I cannot.
- **Ich habe leider keine Zeit.** = Unfortunately, I have no time.
- **Vielleicht ein anderes Mal.** = Maybe another time.

**Useful responses:**
- **Wann?** = When?
- **Wo?** = Where?
- **Um wie viel Uhr?** = At what time?

**Word order with "Lust haben":**
- Hast du **Lust**, ins Kino **zu gehen**?
The infinitive with **zu** goes to the end.

**Common mistakes:**
- ❌ Hast du Lust, gehen ins Kino? → ✅ Hast du Lust, ins Kino zu gehen?
- ❌ Ich kann nicht leider. → ✅ Ich kann leider nicht.
- ❌ Ich habe kein Zeit. → ✅ Ich habe keine Zeit.`,
        explanationHinglish: `**Kisi ko invite karna:**
- **Hast du Lust, ins Kino zu gehen?** = Kya tumhara cinema jaane ka mann hai?
- **Wollen wir ins Kino gehen?** = Kya hum cinema chalte hain?
- **Gehen wir zusammen essen?** = Kya hum saath khana khane chalte hain?
- **Treffen wir uns um sieben Uhr?** = Kya hum saat baje milte hain?

**Accepting:**
- **Ja, gern!** = Haan, zaroor!
- **Das ist eine gute Idee.** = Yeh achha idea hai.
- **Ja, das passt mir gut.** = Haan, mujhe theek hai.

**Politely decline:**
- **Leider kann ich nicht.** = Unfortunately, main nahi kar sakta.
- **Ich habe leider keine Zeit.** = Unfortunately, mere paas time nahi hai.
- **Vielleicht ein anderes Mal.** = Shayad kisi aur baar.

**Useful responses:**
- **Wann?** = Kab?
- **Wo?** = Kahan?
- **Um wie viel Uhr?** = Kitne baje?

**"Lust haben" ke saath word order:**
- Hast du **Lust**, ins Kino **zu gehen**?
Infinitive with **zu** end par jaata hai.

**Common mistakes:**
- ❌ Hast du Lust, gehen ins Kino? → ✅ Hast du Lust, ins Kino zu gehen?
- ❌ Ich kann nicht leider. → ✅ Ich kann leider nicht.
- ❌ Ich habe kein Zeit. → ✅ Ich habe keine Zeit.`,
        examples: [
          {
            german: 'Hast du Lust, ins Kino zu gehen?',
            english: 'Do you feel like going to the cinema?',
            hinglish: 'Kya tumhara cinema jaane ka mann hai?',
            breakdown: [
              { word: 'Hast', role: 'verb', meaning: 'have' },
              { word: 'du', role: 'subject', meaning: 'you (informal)' },
              { word: 'Lust', role: 'noun', meaning: 'desire / mood' },
              { word: 'ins Kino zu gehen', role: 'infinitive clause', meaning: 'to go to the cinema' },
            ],
            audioText: 'Hast du Lust, ins Kino zu gehen?',
          },
          {
            german: 'Ja, gern!',
            english: 'Yes, gladly!',
            hinglish: 'Haan, zaroor!',
            audioText: 'Ja, gern!',
          },
          {
            german: 'Leider kann ich nicht.',
            english: 'Unfortunately, I cannot.',
            hinglish: 'Unfortunately, main nahi kar sakta.',
            audioText: 'Leider kann ich nicht.',
          },
        ],
        realLifeContext: 'Invitations are a core social skill. You will use them to make friends, practise German, and organise plans at work or school.',
        culturalNote: 'Germans often plan ahead. If you decline, a short reason and "vielleicht ein anderes Mal" keeps the invitation friendly.',
        summary: [
          'Hast du Lust, ... zu ...? = Do you feel like ...?',
          'Wollen wir ...? = Shall we ...?',
          'Ja, gern! = Yes, gladly!',
          'Leider kann ich nicht = Unfortunately, I cannot',
          'The zu-infinitive goes to the end',
        ],
      },
      exercises: [
        {
          id: 'ex-a1-11-03-01',
          type: 'multiple-choice',
          question: 'Complete: "Hast du ___ , ins Kino zu gehen?"',
          questionHinglish: 'Complete karo: "Hast du ___ , ins Kino zu gehen?"',
          options: ['Lust', 'Zeit', 'Spiel', 'gern'],
          correctAnswer: 'Lust',
          explanation: 'The fixed phrase is "Lust haben": Hast du Lust, ins Kino zu gehen?',
          explanationHinglish: 'Fixed phrase "Lust haben" hai: Hast du Lust, ins Kino zu gehen?',
          difficulty: 2,
          xpReward: 10,
          tags: ['invitations', 'vocabulary'],
        },
        {
          id: 'ex-a1-11-03-02',
          type: 'multiple-choice',
          question: 'How do you accept an invitation?',
          questionHinglish: 'Invitation accept kaise karoge?',
          options: ['Ja, gern!', 'Leider nicht.', 'Ich habe keine Zeit.', 'Vielleicht nicht.'],
          correctAnswer: 'Ja, gern!',
          explanation: '"Ja, gern!" is a natural way to accept an invitation.',
          explanationHinglish: '"Ja, gern!" invitation accept karne ka natural tarika hai.',
          difficulty: 1,
          xpReward: 8,
          tags: ['invitations', 'speaking'],
        },
        {
          id: 'ex-a1-11-03-03',
          type: 'multiple-choice',
          question: 'Complete the polite refusal: "Ich kann leider ___."',
          questionHinglish: 'Polite refusal complete karo: "Ich kann leider ___."',
          options: ['nicht', 'kein', 'gern', 'Zeit'],
          correctAnswer: 'nicht',
          explanation: 'Use "nicht" to negate the verb: Ich kann leider nicht.',
          explanationHinglish: 'Verb negate karne ke liye "nicht": Ich kann leider nicht.',
          difficulty: 2,
          xpReward: 10,
          tags: ['invitations', 'negation'],
        },
        {
          id: 'ex-a1-11-03-04',
          type: 'ordering',
          question: 'Arrange the words into a question: "Wollen / wir / ins Kino / gehen / ?"',
          questionHinglish: 'Sahi question banao: "Wollen / wir / ins Kino / gehen / ?"',
          options: ['Wollen', 'wir', 'ins Kino', 'gehen', '?'],
          correctAnswer: 'Wollen wir ins Kino gehen ?',
          explanation: 'Modal verb first, subject second, infinitive at the end: Wollen wir ins Kino gehen?',
          explanationHinglish: 'Modal verb pehle, subject doosre, infinitive end par: Wollen wir ins Kino gehen?',
          difficulty: 2,
          xpReward: 10,
          tags: ['invitations', 'word-order'],
        },
        {
          id: 'ex-a1-11-03-05',
          type: 'typing',
          question: 'Translate: "Do you feel like going to the cinema?"',
          questionHinglish: 'Translate karo: "Do you feel like going to the cinema?"',
          correctAnswer: 'Hast du Lust, ins Kino zu gehen?',
          explanation: 'Use "Hast du Lust, ... zu ...?" with the infinitive at the end.',
          explanationHinglish: '"Hast du Lust, ... zu ...?" use karo, infinitive end par.',
          difficulty: 3,
          xpReward: 12,
          tags: ['invitations', 'typing'],
        },
      ],
    },
  ],
};
