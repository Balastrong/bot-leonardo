import { Message } from "discord.js";

export const messageCreate = (message: Message) => {
  if (message.content === "ping") {
    message.reply("Not gonna say pong!");
  }
};
