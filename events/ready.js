const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

let statuses = ['https://discord.gg/bmbSrqu', 'Selam Dunya']
clint.on('ready',() => {

  let statuses = statuses[Math.floor(Math.random()*statuses.lenght)];

  client.user.setPresence({ activity: {name:statuses}, status: 'online'});

    setInterval(function(){

    }, 10000)

        })
