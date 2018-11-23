const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm selam,  Hoşgeldin :D');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hayırsız bot') {
    msg.reply('**Öyle Olsun :sob: :sob:** ');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("message", msg => {
    const kufur = ["amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "meme"];
    if (kufur.some(word => msg.content.includes(word)) ) {
        msg.delete()
        msg.reply("Küfür etme krdşm")
    }
});

client.setInterval(() => {
    let Status = [
        `🔸Yardım yenileniyor mu?`,
        `🎲 ${client.guilds.size} sunucuda hizmet!`,
        `💎b/yardım yaz yardım komutlarına eriş`,
	`👤 ${client.users.size} kullanıcı`, 
    ];
    client.user.setActivity(Status[Math.floor(Math.random() * Status.length)], { "type": "PLAYING" }); 
    client.user.setStatus('online'); 
}, 5 * 1000); 


var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('message', msg => { // eslint-disable-line
 
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content.split(' ');
  const searchString = args.slice(1).join(' ');
  const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  const serverQueue = queue.get(msg.guild.id);

  let command = msg.content.toLowerCase().split(' ')[0];
  command = command.slice(prefix.length)



  if (command === 'çal') {
if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`You can not use commands here.`)
return msg.author.sendEmbed(ozelmesajuyari); }
          const voiceChannel = msg.member.voiceChannel;
if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
          const permissions = voiceChannel.permissionsFor(msg.client.user);
          if (!permissions.has('CONNECT')) {
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('🚫 | Şuanda olduğunuz kanala girmek için gerekli izinlere sahip değilim.'));
          }
          if (!permissions.has('SPEAK')) {
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('🚫 | Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.'));
          }

          if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                  const playlist =  youtube.getPlaylist(url);
                  const videos =  playlist.getVideos();
                  for (const video of Object.values(videos)) {
                          const video2 =  youtube.getVideoByID(video.id); // ehehehehu videomuzu bulalım
                           handleVideo(video2, msg, voiceChannel, true); // ve gönderelim
                  }
return msg.channel.sendEmbed(new Discord.RichEmbed)
.setDescription(`✔ | Playlist ➢ **${playlist.title}** has been added to the queue!`);
          } else {
                  try {
                          var video =  youtube.getVideo(url);
                  } catch (error) {
                          try {
                                  var videos =  youtube.searchVideos(searchString, 10);
                                  let index = 0;
                                  msg.channel.sendEmbed(new Discord.RichEmbed()
                          .setTitle('Şarkı Seçimi')
.setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
 .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 30 saniye içinde liste iptal edilecektir.')
    .setColor('RANDOM'));
                                  // en fazla 5 tane
                                  try {
                                          var response =  msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                                  maxMatches: 1,
                                                  time: 10000,
                                                  errors: ['time']
                                          });
                                  } catch (err) {
                                          console.error(err);
      return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('❎ | Şarkı seçimi iptal edildi. '));
                                  }
                                  const videoIndex = parseInt(response.first().content);
                                  var video =  youtube.getVideoByID(videos[videoIndex - 1].id);
                          } catch (err) {
                                  console.error(err);
    return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(' ❎ | Herhangi bir arama sonucu elde edemedim.'));
                          }
                  }
                  return handleVideo(video, msg, voiceChannel);
          }
  } else if (command === 'geç') {
if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`You can not use commands here.`)
return msg.author.sendEmbed(ozelmesajuyari); }
if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | Lütfen öncelikle sesli bir kanala katılınız.'));
          if (!serverQueue) return msg.channel.send(' ❎ | Kuyruk boş olduğu için geçemiyorum. ');
          serverQueue.connection.dispatcher.end('Geç komudu kullanıldı.');
          return undefined;
  } else if (command === 'çık') {
if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`You can not use commands here.`)
return msg.author.sendEmbed(ozelmesajuyari); }
if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | Lütfen öncelikle sesli bir kanala katılınız.'));
if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | Şu anda herhangi bir şarkı çalmıyorum.'));
          serverQueue.songs = [];
          serverQueue.connection.dispatcher.end('Kapat komutu kullanıldı!');
          return undefined;
  } else if (command === 'ses') {
if (!msg.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription(`You can not use commands here.`)
  return msg.author.sendEmbed(ozelmesajuyari); }
if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | Lütfen öncelikle sesli bir kanala katılınız.'));
if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(' ❎ | Şu anda herhangi bir şarkı çalmıyorum.'));
if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(` 🔊 | Ses seviyesi: **${serverQueue.volume}**`));
          serverQueue.volume = args[1];
  if (args[1] > 10) return msg.channel.send({
      embed: {
          title: "",
          color: 0xE50000,
          description: "Lütfen 10'dan az yada 10 olarak bir sayı belirtin."
      }
  });
          serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Ses Seviyesi ' + `**${args[1]}**` + ' Olarak Ayarlandı.'));
  } else if (command === 'çalınan') {


if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`❕ | Şu anda hiçbir şey çalmıyorum.`)
return msg.author.sendEmbed(ozelmesajuyari); }
if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(':x: | Şu anda hiçbir şey çalmıyorum.'));
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
.addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
  } else if (command === 'kuyruk') {
          if (!serverQueue) return msg.channel.send('❎ | Şu anda hiçbir şey çalmıyorum. ');
          return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Şarkı Kuyruğu')
.setDescription(`${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}`))
.addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
  } else if (command === 'durdur') {
if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`You can not use commands here.`)
return msg.author.sendEmbed(ozelmesajuyari); }
          if (serverQueue && serverQueue.playing) {
                  serverQueue.playing = false;
                  serverQueue.connection.dispatcher.pause();
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setDescription('⏸ | Müzik durduruldu.')
.setColor('RANDOM'));
          }
          return msg.channel.send('🚫 | Şu anda hiçbir şey çalmıyorum.');
  } else if (command === 'devam') {
if (!msg.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setDescription(`Burada komutu kullanamazsınız.`)
return msg.author.sendEmbed(ozelmesajuyari); }
          if (serverQueue && !serverQueue.playing) {
                  serverQueue.playing = true;
                  serverQueue.connection.dispatcher.resume();
return msg.channel.sendEmbed(new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('▶ | Müzik devam ediyor.'));
          }
          return msg.channel.send('❎ | Şu anda hiçbir şey çalmıyorum.');
}

  return undefined;
});

function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
          id: video.id,
          title: video.title,
          url: `https://www.youtube.com/watch?v=${video.id}`,
durationh: video.duration.hours,
durationm: video.duration.minutes,
          durations: video.duration.seconds,
views: video.views,
  };
  if (!serverQueue) {
          const queueConstruct = {
                  textChannel: msg.channel,
                  voiceChannel: voiceChannel,
                  connection: null,
                  songs: [],
                  volume: 3,
                  playing: true
          };
          queue.set(msg.guild.id, queueConstruct);

          queueConstruct.songs.push(song);

          try {
                  var connection = svoiceChannel.join();
                  queueConstruct.connection = connection;
                  play(msg.guild, queueConstruct.songs[0]);
          } catch (error) {
                  console.error(`I could not join the voice channel: ${error}`);
                  queue.delete(msg.guild.id);
                  return msg.channel.send(`HATA | Ses kanalına katılamadım: ${error}`);
          }
  } else {
          serverQueue.songs.push(song);
          console.log(serverQueue.songs);
          if (playlist) return undefined;
else return msg.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`✔ | **${song.title}** adlı şarkı başarıyla kuyruğa eklendi.`)
.setColor('RANDOM'));
  }

  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
          serverQueue.voiceChannel.leave();
          queue.delete(guild.id);
          return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
          .on('end', reason => {
                  if (reason === 'Akış yeterince hızlı diğil.') console.log('Şarkı Durduruldu.');
                  else console.log(reason);
                  serverQueue.songs.shift();
                  play(guild, serverQueue.songs[0]);
          })
          .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()
.setAuthor(`Şarkı Çalınıyor`, `https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png`)
.setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
.addField('Başlık', `[${song.title}](${song.url})`, true)
.addField("Süre", `${song.durationm}:${song.durations}`, true)
.addField("Ses Seviyesi", `${serverQueue.volume}%`, true)
.setColor('#FFFFFF'));
}

client.login(process.env.BOT_TOKEN);
