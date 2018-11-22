const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .setThumbnail(bicon)
  .addField("", bot.user.username)
  .addField("**Eğlence ve Kullanıcı Komutları**", `b/banned = Dene ve Gör! \nb/herkesebendençay = Herkese Çay Alırsınız. \nb/koş = Koşarsınız.\nb/çayiç = Çay İçersiniz. \nb/çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nb/çayaşekerat = Çaya Şeker Atarsınız. \nb/yumruh-at = Yumruk Atarsınız. \nb/yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nb/sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nb/kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `b/ban = İstediğiniz Kişiyi Sunucudan Banlar. \nb/kick  = İstediğiniz Kişiyi Sunucudan Atar. \nb/unban = İstediğiniz Kişinin Yasağını Açar. \nb/sustur = İstediğiniz Kişiyi Susturur. \nb/oylama = Oylama Açar. \nb/duyuru = Güzel Bir Duyuru Görünümü Sağlar.\nb/süreli-sustur = Modların ve üstündeki kişilerin 2 tane uyarı alanları süreli susturmasına yarar.`)
  .addField("**Ana Komutlar**", "b/yardım = BOT Komutlarını Atar. \nb/bilgi = BOT Kendisi Hakkında Bilgi Verir. \nb/ping = BOT Gecikme Süresini Söyler. \nb/davet = BOT Davet Linkini Atar. \nb/istatistik = BOT İstatistiklerini Atar./nb/tavsiye = Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar  /nb/atatürk = Atatürk resmi atar")
  .addField("**Yapımcı**", " **Rookie Farak** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
