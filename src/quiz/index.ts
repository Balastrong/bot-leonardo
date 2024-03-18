import { CronJob } from "cron";
import { TextChannel } from "discord.js";
import { ANSWER_CRON, QUIZ_CRON } from "./constants";
import { quizzes } from "./data";
import {
  answerMessageBuilder,
  getIdFromMessage,
  quizMessageBuilder,
} from "./messages";

const answerEmojis = ["🇦", "🇧", "🇨", "🇩"];

export const setupQuizCron = (channel: TextChannel | undefined) => {
  if (!channel) {
    console.error("Quiz channel not found");
    return;
  }

  const quizIds = new Set(quizzes.map((quiz) => quiz.id));
  if (quizIds.size !== quizzes.length) {
    console.error("Duplicate quiz IDs found");
  }

  const quizJob = new CronJob(QUIZ_CRON, () => sendQuiz(channel));
  quizJob.start();

  const answerJob = new CronJob(ANSWER_CRON, () => sendAnswer(channel));
  answerJob.start();
};

async function sendQuiz(channel: TextChannel) {
  const quiz = pickRandomQuiz();
  const quizText = quizMessageBuilder(quiz);

  const quizMessage = await channel.send(quizText);
  if (quizMessage) {
    quizMessage.pin();
    answerEmojis.forEach((emoji) => quizMessage.react(emoji));
    quizMessage.suppressEmbeds();
  }
}

async function sendAnswer(channel: TextChannel) {
  const pinnedMessages = await channel.messages.fetchPinned();
  const quizMessage = pinnedMessages.first();

  if (!quizMessage) {
    console.warn("Quiz message not found");
    return;
  }

  pinnedMessages.forEach((message) => message.unpin());

  const quizId = getIdFromMessage(quizMessage.content);
  if (!quizId) {
    console.warn("Quiz ID not found");
    return;
  }

  const quiz = quizzes.find((quiz) => quiz.id === quizId);
  if (!quiz) {
    console.warn("Quiz not found");
    return;
  }

  const answerMessage = await quizMessage.reply(answerMessageBuilder(quiz));
  answerMessage?.suppressEmbeds();
  answerMessage.react("🏆");
}

function pickRandomQuiz() {
  const quizLength = quizzes.length;
  const randomIndex = Math.floor(Math.random() * quizLength);
  return quizzes[randomIndex];
}
