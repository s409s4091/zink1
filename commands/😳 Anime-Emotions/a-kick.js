const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const anime = require('anime-actions');
module.exports = {
  name: "a-kick",
  aliases: ["akick", "animekick", "anime-kick"],
  category: "😳 Anime-Emotions",
  description: "Shows an Emotion-Expression in an Anime style",
  usage: "a-kick",
  type: "mention",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if(!client.settings.get(message.guild.id, "ANIME")){
        return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(require(`${process.cwd()}/handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
        ]});
    }
    //send new Message
    message.reply({embeds : [
        new MessageEmbed()
        .setColor(es.color)
        .setImage(await anime.kick())
        .setAuthor(`${message.author.username} kicks${message.mentions.users.first() ? " " + message.mentions.users.first().username : " him-/herself.."}`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => {})
      
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/https://sites.google.com/view/zink-bot/home?pli=1
 * @INFO
 * Work for https://sites.google.com/view/zink-bot/home?pli=1 Development | https://https://sites.google.com/view/zink-bot/home?pli=1.eu
 * @INFO
 * Please mention him / https://sites.google.com/view/zink-bot/home?pli=1 Development, when using this Code!
 * @INFO
 */
