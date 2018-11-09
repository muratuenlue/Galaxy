const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

client.setInterval(() => {
    let Status = [
        `deneme1`,
        `2`,
        `3`,
    ];
    client.user.setActivity(Status[Math.floor(Math.random() * Status.length)], { "type": "PLAYING" }); 
    client.user.setStatus('online'); 
}, 30 * 1000); 
