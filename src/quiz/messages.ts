import { Quiz } from "./data";

export const answerEmojis = ["🇦", "🇧", "🇨", "🇩"];

export function quizMessageBuilder(quiz: Quiz) {
  const answers = quiz.answers
    .map((answer, index) => `${answerEmojis[index]} - ${answer}`)
    .join("\n");

  return `It's quiz time! 🤔
**${quiz.question}**

${answers}

React to this message with the correct answer! Come back later for the solutions 🏆

_(Quiz ID: ${quiz.id})_`;
}

export function answerMessageBuilder(quiz: Quiz) {
  const context = quiz.context ? `\n_${quiz.context}_` : "";
  const learnMore = quiz.learnMoreUrl
    ? `\nLearn more: ${quiz.learnMoreUrl}`
    : "";

  const extrasBlock = context + learnMore;

  return `The answer is... **${answerEmojis[quiz.correctAnswerIndex]} ${
    quiz.answers[quiz.correctAnswerIndex]
  }**!${extrasBlock ? `\n${extrasBlock}` : ""}

See you soon for another quiz! 🎉`;
}

export function getIdFromMessage(message: string) {
  return message.match(/Quiz ID: (\d+)/)?.[1];
}
