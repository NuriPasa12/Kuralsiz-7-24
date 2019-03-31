const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Dolar'ın Gücü Türk Lirasını Yenemez !")
	.setDescription("Dolar:5,58")
    .setImage("https://cdn.discordapp.com/attachments/556520542140760195/561260069900124160/2127694_810x458.jpg")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dolar'],
  permLevel: 0
};

exports.help = {
  name: 'dolar',
  description: 'Dolar Kaç Gösterir.',
  usage: 'dolar'
};