client.on('message', async message => {
  if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
  if (error) return console.log('Hata:', error);
  else if (!error) { 
      var dolar = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
  if (error) return console.log('Hata:', error); 
  else if (!error) { 
      var euro = JSON.parse(body);
       
        const doviz = new Discord.RichEmbed()
        .setColor(0x093b8c)
        .setTitle(`**Dolar:** Alış**:** **${dolar.buying}** TL Satış**:** **${dolar.selling}** TL \n**Euro:** Alış**:** **${euro.selling}** TL Satış**:** **${euro.buying}** TL`)
        message.channel.send(doviz);
    }
})
    }
})
    }
})
