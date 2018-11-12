const Discord = require("discord.js");
const ayalar = require("../ayarlar.json");
const renkler = require("../renkler.json");
const kırmızı = renkler.red;
const yeşil = renkler.green;
const turuncu = renkler.orange;

exports.run = async (bot, message, args) => {

    if(args[0] == "yardım"){
      message.reply("b/bildir <kullanıcı> <sebebi>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Belirtiğiniz kişiyi bulamadım");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor(turuncu)
    .addField("Bildirilen Kişi", `${rUser} with ID: ${rUser.id}`)
    .addField("Bildiren Kişi", `${message.author} with ID: ${message.author.id}`)
    .addField("Kanalı", message.channel)
    .addField("Zamanı", message.createdAt)
    .addField("Sebebi", rreason);

    let reportschannel = message.guild.channels.find(`name`, "şikayetler");
    if(!reportschannel) return message.channel.send("Şikayet kanalını bulamadım");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şikayet', 'bildiri', 'b', 'report'],
  permLevel: 0
};

exports.help = {
  name: 'bildiri',
  description: 'Sizi rahatsız eden kişilerden şikayetçi olmanızı sağlar',
  usage: 'b/bildir <kullanıcı> <sebebi>'
};

