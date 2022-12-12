import { Client } from "discord.js";
import { guildMemberAdd } from "./guildMemberAdd";
import { messageCreate } from "./messageCreate";
import { ready } from "./ready";

export const addListeners = (client: Client) => {
  client.on("ready", ready);
  client.on("messageCreate", messageCreate);
  client.on("guildMemberAdd", guildMemberAdd);
};
