const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Boğazda Bir Simit Yedin!")
    .setImage("https://www.bobiler.org/monte/preview/116199/bobiler.gif")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['simitye'],
  permLevel: 0
};

exports.help = {
  name: 'simitye',
  description: 'Simit Yedirtir.',
  usage: 'simitye'
};