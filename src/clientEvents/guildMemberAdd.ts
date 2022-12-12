import { GENERAL_CHANNEL_ID, INTRODUCE_YOURSELF_CHANNEL_ID } from "utils";
import { GuildMember, TextBasedChannel, EmbedBuilder } from "discord.js";

export const guildMemberAdd = (member: GuildMember) => {
  console.log("New member joined the server");

  const channel = member.client.channels.cache.get(
    GENERAL_CHANNEL_ID
  ) as TextBasedChannel;

  if (!channel || !("send" in channel)) return;

  const { user } = member;

  const welcomeMessage = new EmbedBuilder()
    .setTitle("Welcome on board!")
    .setDescription(
      `Hey ${member}, welcome on Leonardo's Community!\nHere we usually talk about Open Source and we like learn from each other.\nDon't be shy, feel free to tell us something about you on <#${INTRODUCE_YOURSELF_CHANNEL_ID}>, for example what you like, what are you working on or what brought you here.\nLast but on least, have fun! :partying_face:`
    )
    .setColor("#5468ff")
    .setAuthor({ name: user.username, iconURL: user.displayAvatarURL() })
    .setTimestamp();

  channel.send({ embeds: [welcomeMessage] });
};
