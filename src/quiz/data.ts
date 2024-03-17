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
  {
    id: "9",
    question: "What is the library zod used for?",
    answers: [
      "Fetching data from APIs",
      "Rendering components in React",
      "Defining schemas for data validation",
      "Managing the connection and communication with a database",
    ],
    correctAnswerIndex: 2,
    learnMoreUrl: "https://github.com/colinhacks/zod",
  },
  {
    id: "10",
    question: "Which one of these is NOT a testing library?",
    answers: ["valibot", "jest", "vitest", "node:test"],
    correctAnswerIndex: 0,
  },
  {
    id: "11",
    question: "In javascript, what is the output of console.log(2 + '2' - 2);",
    answers: ["20", "22", "02", "NaN"],
    correctAnswerIndex: 0,
    learnMoreUrl: "https://youtu.be/wE-6CswAE64",
  },
  {
    id: "12",
    question: "In javascript, what is the output of console.log(013 - 02);",
    answers: ["011", "1", "9", "NaN"],
    correctAnswerIndex: 2,
    context:
      "The leading 0 in a number indicates it's not in base 10 but it is an an octal number. This means 013 is 11 in base 10 and 02 is 2 in base 10 making our log in fact 11 - 2 = 9",
    learnMoreUrl: "https://youtu.be/8gGuu9c9miY",
  },
  {
    id: "13",
    question:
      "Challenge: How can you check if a variable is an array in JavaScript?",
    answers: [
      "Array.isArray(variable)",
      "typeof variable === 'array'",
      "variable instanceof Array",
      "variable.isArray()",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: "14",
    question: "What is the trigger name to manually run a GitHub Action?",
    answers: [
      "workflow_run",
      "action_manual",
      "on_demand",
      "workflow_dispatch",
    ],
    correctAnswerIndex: 3,
    learnMoreUrl: "https://youtu.be/KGfncu595pc",
  },
  {
    id: "15",
    question: "What is a GitHub Awesome List?",
    answers: [
      "The most active users on GitHub",
      "A repository with a list of useful resources",
      "A series of best practices for using GitHub",
      "The changelog of GitHub updates",
    ],
    correctAnswerIndex: 1,
    learnMoreUrl: "https://youtu.be/dqp-JFb1Upg",
  },
  {
    id: "16",
    question: "Which one is NOT a merge option for Pull Requests in GitHub?",
    answers: ["Rebase", "Squash", "Merge", "Append"],
    correctAnswerIndex: 3,
    learnMoreUrl: "https://youtu.be/rFRtsiQEJZw",
  },
  {
    id: "17",
    question: "In GitHub Issues Form Schemas, which control is NOT available?",
    answers: ["datepicker", "multiselect", "textarea", "markdown"],
    correctAnswerIndex: 0,
    learnMoreUrl: "https://youtu.be/hNs5Gg_fEEs",
  },
  {
    id: "18",
    question: "Which platform is NOT yet enabled for GitHub Sponsor?",
    answers: ["Buy Me a Coffee", "Open Collective", "Patreon", "YouTube"],
    correctAnswerIndex: 3,
    learnMoreUrl: "https://github.com/sponsors/Balastrong",
  },
  {
    id: "19",
    question:
      "In TanStack Router, how can you define where a component will render inside a route?",
    answers: ["`<Render />`", "`{children}`", "`<Outlet />`", "`<slot />`"],
    correctAnswerIndex: 2,
    learnMoreUrl: "https://youtu.be/4sslBg8LprE",
  },
  {
    id: "20",
    question:
      "In TanStack Router, how do you navigate to a route with a path parameter?",
    answers: [
      "`<Link to={'/path/' + value} />`",
      "`<Link to='/path?id=value' />`",
      "`<Link to='/path/$id' params={{id: value}} />`",
      "`<Link to='/path' id={value} />`",
    ],
    correctAnswerIndex: 2,
    learnMoreUrl: "https://youtu.be/xUrbLlcrIXY",
  },
  {
    id: "21",
    question:
      "In TanStack Router, how do you access the path parameter in a component?",
    answers: [
      "`const { id } = useParams();`",
      "`const id = useParam();`",
      "`const id = useParams();`",
      "`const { id } = useParam();`",
    ],
    correctAnswerIndex: 0,
    learnMoreUrl: "https://youtu.be/xUrbLlcrIXY",
  },
  {
    id: "22",
    question:
      "In TanStack Router, in which function do you verify if the user is authenticated?",
    answers: ["`useEffect`", "`beforeLoad`", "`onLoad`", "`preRender`"],
    correctAnswerIndex: 1,
    learnMoreUrl: "https://youtu.be/O6dS0_IvvK0",
  },
];
