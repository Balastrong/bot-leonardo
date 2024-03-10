import {
  MessageReaction,
  PartialMessageReaction,
  PartialUser,
  User,
} from "discord.js";
import {
  DEV_QUIZ_CHANNEL_ID,
  QUIZ_EMOJI_ID as QUIZ_EMOJI_NAME,
  QUIZ_ROLE_ID,
} from "../utils";

export const messageReactionAdd = async (
  reaction: MessageReaction | PartialMessageReaction,
  user: User | PartialUser
) => {
  console.log("X");
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Fetching message failed: ", error);
      return;
    }
  }

  addQuizRole(reaction as MessageReaction, user);
};

const addQuizRole = async (
  reaction: MessageReaction,
  user: User | PartialUser
) => {
  if (user.bot) {
    return;
  }

  if (reaction.message.channelId !== DEV_QUIZ_CHANNEL_ID) {
    return;
  }

  console.log(reaction);
  if (reaction.emoji.name !== QUIZ_EMOJI_NAME) {
    return;
  }

  const role = reaction.message.guild?.roles.cache.find(
    (r) => r.id === QUIZ_ROLE_ID
  );

  if (!role) {
    return;
  }

  const { guild } = reaction.message;
  const member = guild?.members.cache.find((member) => member.id === user.id);

  member?.roles.add(role);
};
