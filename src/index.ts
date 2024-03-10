import { addListeners } from "clientEvents";
import { Client, GatewayIntentBits, Partials } from "discord.js";
require("dotenv").config();

const TOKEN = process.env.BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

addListeners(client);

client.login(TOKEN);
