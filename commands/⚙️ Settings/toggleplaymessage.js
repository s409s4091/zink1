const { MessageEmbed } = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require("../../botconfig/emojis.json");
module.exports = {
    name: "toggleplaymessage",
    aliases: ["toggleplaymsg", "playmessage", "playmsg"],
    category: "⚙️ Settings",
    description: "Toggles playmessage (same as pruning...). If its true a message of playing a new track will be sent, even if your afk. If false it wont send any message if a new Track plays! | Default: true aka send new Track information",
    usage: "toggleplaymessage",
    memberpermissions: ["ADMINISTRATOR"],
    type: "music",
    run: async (client, message, args, cmduser, text, prefix) => {
    
      let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
      
      //run the code of togglepruning
      let { run } = require("./togglepruning");
      run(client, message, args);
  }
};

/**
  * @INFO
  * Bot Coded by S409#7733 | https://discord.gg/Zink bot
  * @INFO
  * Work for Zink bot Development | https://https://sites.google.com/view/zink-bot
  * @INFO
  * Please mention him / Zink bot Development, when using this Code!
  * @INFO
*/
