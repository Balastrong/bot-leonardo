import { Client, TextChannel } from "discord.js";
import { setupQuizCron } from "quiz";
import { BOT_TEST_CHANNEL_ID } from "utils";

export const ready = (client: Client) => {
  setupQuizCron(client.channels.cache.get(BOT_TEST_CHANNEL_ID) as TextChannel);
  console.log("Bot is ready!");
};
