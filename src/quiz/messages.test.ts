import { strictEqual } from "node:assert";
import { describe, it } from "node:test";
import { Quiz } from "./data";
import {
  answerMessageBuilder,
  getIdFromMessage,
  quizMessageBuilder,
} from "./messages";

const quiz1: Quiz = {
  id: "1",
  question: "What is the output of `0.1 + 0.2` in JavaScript?",
  answers: ["0.3", "0.30000000000000004", "0.10.2", "0.2"],
  correctAnswerIndex: 1,
  context: "This is due to floating point precision in JavaScript.",
  learnMoreUrl: "https://youtube.com/shorts/EeUXQgm7ic4",
};

describe("quizMessageBuilder", () => {
  it("should return a message with the quiz question and answers", () => {
    const expected = `It's quiz time! <@&1216364701051519016>
**What is the output of \`0.1 + 0.2\` in JavaScript?**

🇦 - 0.3
🇧 - 0.30000000000000004
🇨 - 0.10.2
🇩 - 0.2

React to this message with the correct answer! Come back later for the solutions 🏆

_(Quiz ID: 1)_`;
    const actual = quizMessageBuilder(quiz1);
    strictEqual(actual, expected);
  });
});

describe("answerMessageBuilder", () => {
  it("should return a message with the correct answer", () => {
    const expected = `The answer is... **🇧 0.30000000000000004**!

_This is due to floating point precision in JavaScript._
Learn more: https://youtube.com/shorts/EeUXQgm7ic4

<@&1216364701051519016> see you soon for another quiz! 🎉`;
    const actual = answerMessageBuilder(quiz1);
    strictEqual(actual, expected);
  });

  it("should print the correct spaced when there is not extra content", () => {
    const expected = `The answer is... **🇧 0.30000000000000004**!

<@&1216364701051519016> see you soon for another quiz! 🎉`;
    const actual = answerMessageBuilder({
      ...quiz1,
      learnMoreUrl: undefined,
      context: undefined,
    });
    strictEqual(actual, expected);
  });
});

describe("getIdFromMessage", () => {
  it("should return the quiz ID from the message", () => {
    const message = quizMessageBuilder(quiz1);

    const expected = "1";
    const actual = getIdFromMessage(message);
    strictEqual(actual, expected);
  });
});
