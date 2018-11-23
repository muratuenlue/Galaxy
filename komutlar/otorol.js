const db = require('quick.db')

exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('`ROLLERİ_YÖNET` yetkisine sahip değilsin!')
  if (!args.join(" ").trim()) return message.channel.send('Geçerli bir rol ismi giriniz !otorol <rol-ismi>')
  

  
  db.set(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(otorol => {
    if (!message.guild.roles.find(`name`, otorol.text)) return message.channel.send("Rol bulunamadı")
      message.channel.send(`Otorol Rolü Başarıyla **${otorol}** olarak ayarlandı!`)
    
  })
  
}
exports.help = {
  name:"otorol"
}
