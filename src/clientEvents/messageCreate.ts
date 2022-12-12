import { Message } from "discord.js";

export const messageCreate = (message: Message) => {
  console.log(message.content);
  if (message.content === "ping") {
    message.reply("Not gonna say pong!");
  }
};
