const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedeglence = new Discord.RichEmbed()
  .setColor("#7289DA")
  .addField("**BD BOT • Komutlar**", `▫️ **|  b/banned:** EDene ve Gör :D \n▫️ **|  b/atatürk:** Atatürk resmi atar. \n▫️ **|  b/herkesebendençay:** Herkese Çay Verir \n▫️ **|  b/koş:** Koşarsınız\n▫️ **|  b/koş:** Koşarsınız  
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
  aliases: ['eğlencekomutları', 'funycommands'],
  permLevel: 0
};

exports.help = {
  name: 'eğlencek',
  description: 'Eğlence komutlarını gösterir',
  usage: 'eğlencek [komut]'
};
