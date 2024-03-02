import { addListeners } from "clientEvents";
import { Client, GatewayIntentBits } from "discord.js";
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});

addListeners(client);

client.login(TOKEN);
