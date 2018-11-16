const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

   const embedyardim = new Discord.RichEmbed()
  .setTitle("Yetkili Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail(bicon)
  .addField("", bot.user.username)
  .addField("**Yetkili Komutlari**", `b/ban = Istediginiz Kisiyi Sunucudan Banlar. \nb/kick  = Istediginiz Kisiyi Sunucudan Atar. \nb/unban = Istediginiz Kisinin Yasagini Açar. \nb/sustur = Istediginiz Kisiyi Susturur. \nb/oylama = Oylama Açar. \nb/duyuru = Güzel Bir Duyuru Görünümü Saglar.\nb/süreli-sustur = Modların ve üstündeki kişilerin 2 tane uyarı alanları süreli susturmasına yarar.`)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkik', 'yetkisikomutlari', 'ykomutlari'],
  permLevel: 0
};
exports.help = {
  name: 'yetkili-komutlari',
};