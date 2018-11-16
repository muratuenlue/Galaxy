const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

   const embedyardim = new Discord.RichEmbed()
  .setTitle("Kullanici ve eglence Komutlari")
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail(bicon)
  .addField("", bot.user.username)
  .addField("**Eglence ve Kullanici Komutlari**", `b/banned = Dene ve Gör! \nb/herkesebendençay = Herkese Çay Alirsiniz. \nb/kos = Kosarsiniz.\nb/çayiç = Çay Içersiniz. \nb/çekiç = Istediginiz Kisiye Çekiç Atarsiniz. \nb/çayasekerat = Çaya Seker Atarsiniz. \nb/yumruh-at = Yumruk Atarsiniz. \nb/yaz = Bota Istediginiz Seyi Yazdirirsiniz.\nb/sunucubilgi = BOT Sunucu Hakkinda Bilgi Verir. \nb/kullanicibilgim = Sizin Hakkinizda Bilgi Verir. `)

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y','yardim'],
  permLevel: 0
};
exports.help = {
  name: 'kullanici-komutlar',
};

