# School of Computing &mdash; Year 4 Project Proposal Form

## SECTION A

|                     |                   |
|---------------------|-------------------|
|Project Title:       | Infer-Read Language Learning Tool |
|Student 1 Name:      | Ryan McQuillan |
|Student 1 ID:        | 19452414 |
|Student 2 Name:      | Ethan Hall |
|Student 2 ID:        |  19436514 |
|Project Supervisor:  | Jennifer Foster |

## SECTION B


### Introduction

This project covers the area of Computational Lingustics & Machine Learning. This project will make use of language prediction to identify words & phrases within an incoming, user uploaded text. The purpose of which is to provide assistance in the learning of a language. It will make use of a user profile to store the learner's known words. The web app will perform frequency analysis to rank a text in terms of difficulty in comparison to a learner's word bank, highlighting previously unseen and unknown words for the learner to engage and try to disambiguate.

We want learners to learn via inference similar to how one learns as a language as a native; picking up an intuition of meaning via the context of the word usage by fetching synonyms and other instances of the word's usage provided similar context, before providing the learner with an explicit translation.

Each learner will have a unique wordbank, initially through testing their awareness of common words and phrases by means of a simple examination.

Each instance of a "reading session" will POST to the backend, updating the user's word bank if they declared a novel word as known or indicating difficulty with another word.

### Outline

This project is designed to be a language learning tool, a user will begin engaging it with some amount of comfort in their language of choice ( Irish or French ), enough to feel confident starting to read documents in their selected language. Our web app hopes to support language reading through inference & context. In order to provide this, we want to analyse text within a document through machine learning. To the level in which a document scanned could identify words but also common phrases. In addition, through a language prediction model, we want to provide alternative words that would make sense (provide synonyms to the user essentially).

### Background

The idea originated from both students have a previous passion for language learning, Ryan is an intermediate learner of Irish and Ethan is an intermediate learner of French, we are also big readers. As a result, we both desired a convenient, accessible way to improve our language learning through reading. Essentially, we both want to use an application like the one we propose.

Other applications that assist in language learning we found to be beginner-centric, things that introduce grammar & basic vocabulary. But we could not find a similar program that matches our desires, we believe it would possibly fill a gap in the market if published or at the minimum be a helpful tool for learners.

The central idea is that it functions as a tool that assists the learner but doesn't necessarily hold their hand through the learning process; having faith in their ability to work through a text that is both relevant and interesting to them and infer meaning rather than be handed a direct and explicit translation straight away. It allows the learner to build a sort of relational model of a language, linking words and concepts to one another.

The name Infer-Read is a play on words from INFERence Read, to be akin to Infrared.

### Achievements

This application is aimed at intermediate learners, those who have a solid understanding of the fundamentals but want to expand their literacy. A user could log on, scan or select a document and be informed of the difficulty of the text. Text difficulty would be based on a few factors;

1. Idioms, phrases, sayings, etc.
2. Novel words to the user
3. Word complexity
4. Frequency analysis of most commonly used words.

When a text is chosen, novel words are highlighted, allowing the user to select the word, rate their understanding of the word and if known, add it to their word bank, and if not:

- Provide instances of the selected unknown word to the learner in other contexts.
- Provide synonyms of unseen words when selected that the learner is already familiar with, allowing the learner to consider the meaning via inference

### Justification

As stated this tool would be useful for expanding your vocabulary in the chosen language, we believe that the reading of texts would also enhance the learner's ability to conjugate sentences within the language or at the minimum gain confidence within it.

For users with a good vocabulary, the application would also provide an avenue for learning phrases & sayings, a source of pain for all language learners.

From a business perspective, this tool could be incorporated as a strong component of an existing language learning tool. Catering to a more advanced learner. For users of language tools such as Duolingo or Babbel, they could at best, read a short story written for the language tool. This is dissatisfactory for numerous reasons;

1. They are usually extremely basic.
2. Not interesting reading material, e.g. story of a woman going to the bus stop.
3. Limited by its purpose to cater to an extremely large audience e.g. it would not incorporate cultural elements, phrases, literature style writing, etc.

### Programming language(s)

- Python
- Javascript: Angular.js, Node.js

### Programming tools / Tech stack

- OpenCV for Python: computer vision library that we will be using to manipulate images for OCR on user uploaded documents
- Tesseract/PyTesseract: Open source OCR engine
- Angular + Node: Javascript frameworks for frontend and backend development respectively
- spaCy: Natural Language Processing toolkit with pipelines for carrying out different NLP tasks e.g tokenisation, Named Entity Recognition etc
- MongoDB: Document-oriented NoSQL DB for storing user information, document data etc.

### Hardware

No non-standard hardware will be required for the project.

### Learning Challenges

- OCR: We have to learn how to perform OCR on documents via OpenCV and Tesseract
- spaCy & NLP: We have to learn how to use spaCy and also gain a strong working knowledge of Natural Language Processing, this also includes learning how to manage different NLP pipelines.
    - Research established models for the French language
    - Understand models made for the Irish language that are developed by our supervisors group within DCU.

### Breakdown of work

We will plan to be quite flexible & intimate in our work however we have assigned certain elements to each person:

#### Student 1 - Ryan

- Frontend development; UI design, UX 
- NLP modelling for Irish

#### Student 2 - Ethan

- OCR for uploaded documents
- Handling backend development; web server, databasing, queries etc.
- NLP modelling for French