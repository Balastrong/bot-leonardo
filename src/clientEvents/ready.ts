import { Client, TextChannel } from "discord.js";
import { setupQuizCron } from "quiz";
import { DEV_QUIZ_CHANNEL_ID } from "../utils/constants";

export const ready = (client: Client) => {
  setupQuizCron(client.channels.cache.get(DEV_QUIZ_CHANNEL_ID) as TextChannel);
  console.log("Bot is ready!");
};
