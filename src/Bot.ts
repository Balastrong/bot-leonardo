import { Client, GatewayIntentBits } from "discord.js";
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.content === "ping") {
    message.reply("Not gonna say pong!");
  }
});

client.login(TOKEN);
