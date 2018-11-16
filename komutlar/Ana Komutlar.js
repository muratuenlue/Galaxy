
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

   const embedyardim = new Discord.RichEmbed()
  .setTitle("Ana Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail(bicon)
  .addField("", bot.user.username)
  .addField("**Ana Komutlar**", "b/yardim = BOT Komutlarini Atar. \nb/bilgi = BOT Kendisi Hakkinda Bilgi Verir. \nb/ping = BOT Gecikme Süresini Söyler. \nb/davet = BOT Davet Linkini Atar. \nb/istatistik = BOT Istatistiklerini Atar.")

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['anak'],
  permLevel: 0
};
exports.help = {
  name: 'ana-komutlar',
};
