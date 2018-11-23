const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedyardim = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail("https://cdn.discordapp.com/attachments/506057365599027220/515225400633458689/PPSunucu.png")
  .setDescription(``)
  .setColor("#7289DA")
  .addField("**BD BOT •Eğlence Komutları**", `▫️ **|  b/deneme:** Eğlence komutlarını gösterir. \n▫️ **|  b/modk:** Moderasyon komutlarını gösterir. \n▫️ **|  b/anak:** Temel komutları gösterir. \n\n ** Yapımcı:** RookieFarak`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` - prefix - `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'eğlencek',
  description: 'eğlenceli komutları gösterir',
  usage: 'eğlencek'
};
