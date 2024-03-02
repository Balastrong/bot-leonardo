import * as cron from "cron";
import { TextChannel } from "discord.js";

export const setupQuizCron = (channel: TextChannel | undefined) => {
  if (!channel) {
    throw new Error("Channel not found");
  }

  const quizJob = new cron.CronJob("*/10 * * * * *", () => sendQuiz(channel));
  quizJob.start();

  const answerJob = new cron.CronJob("15,25,35,45,55 * * * * *", () =>
    sendAnswer(channel)
  );
  answerJob.start();
};

let i = 0;
async function sendQuiz(channel: TextChannel) {
  const quizMessage = await channel.send(`Hello ${i++} here!`);
  if (quizMessage) {
    quizMessage.pin();
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

  channel.send(`The answer for ${quizMessage.content} is 42`);
}
