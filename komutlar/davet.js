const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embeddavet = new Discord.RichEmbed()
  .setDescription(`[Bot Davet Linki](  https://discordapp.com/api/oauth2/authorize?client_id=506402962906677271&permissions=8&scope=bot  ) | [Destek Sunucusu](  https://discord.gg/Jg6Dbcr  )\n\n**Ping:** ${Math.round(client.ping)}ms!`)
  .setColor("#7289DA")
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['d', 'botu-ekle', 'bote', 'sunucuya-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linkini atar',
  usage: 'davet'
};
