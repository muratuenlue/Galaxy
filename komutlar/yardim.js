const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail(bicon)
  .addField("", bot.user.username)
  .addField("**Eglence ve Kullanici Komutlari**",
  .addField("**Yetkili Komutlari**", 
  .addField("**Ana Komutlar**", 
  .addField("**Yapimcim**", " **Rookie Farak** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDogru kullanim: ` + prefix + `${command.help.usage}`);
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
  name: 'yardim',
  description: 'Tüm komutlari gösterir.',
  usage: 'yardim [komut]'
};
