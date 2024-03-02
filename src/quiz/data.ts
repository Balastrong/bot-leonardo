export type Quiz = { id: string } & Question & Answer;

type Question = {
  question: string;
  answers: string[];
};

type Answer = {
  correctAnswerIndex: number;
  context?: string;
  learnMoreUrl?: string;
};

export const quizzes: Quiz[] = [
  {
    id: "1",
    question: "What is the output of `0.1 + 0.2` in JavaScript?",
    answers: ["0.3", "0.30000000000000004", "0.10.2", "0.2"],
    correctAnswerIndex: 1,
    context: "This is due to floating point precision in JavaScript.",
    learnMoreUrl: "https://youtube.com/shorts/EeUXQgm7ic4",
  },
  {
    id: "2",
    question: "What is the output of `typeof null` in JavaScript?",
    answers: ["null", "undefined", "object", "number"],
    correctAnswerIndex: 2,
  },
  {
    id: "3",
    question: "What is a Fork on GitHub?",
    answers: [
      "A copy of a repository",
      "A branch of a repository",
      "A commit in a repository",
      "A pull request in a repository",
    ],
    correctAnswerIndex: 0,
    learnMoreUrl: "https://youtu.be/VbfvQzCoiQc",
  },
  {
    id: "4",
    question: "What is useState in React?",
    answers: [
      "A function to fetch data from an API",
      "A function to update the state of a component",
      "A function to create a new component",
      "A function to delete a component",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "5",
    question: "What's the difference between `unkown` and `any` in TypeScript?",
    answers: [
      "There is no difference",
      "unknown is a type-safe version of any",
      "any is a type-safe version of unknown",
      "unknown is a type-safe version of void",
    ],
    correctAnswerIndex: 1,
    context:
      "The advantage of unknown over any is that it forces you to do some type checking before you try to use the value.",
  },
  {
    id: "6",
    question: "What is the `git reflog` command?",
    answers: [
      "A command to show the history of a branch",
      "A command to show the history of a commit",
      "A command to show the history of a repository",
      "A command to show the history of a ref",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "7",
    question: "What is the output of `console.log(1 + '1')` in JavaScript?",
    answers: ["11", "2", "undefined", "NaN"],
    correctAnswerIndex: 0,
  },
  {
    id: "8",
    question:
      "Which method of the `console` object does NOT exist in JavaScript?",
    answers: [
      "console.assert",
      "console.table",
      "console.print",
      "console.log",
    ],
    correctAnswerIndex: 3,
    context: "The `console` object has so many useful methods!",
    learnMoreUrl: "https://youtube.com/shorts/1cnerJildcQ",
  },
];
