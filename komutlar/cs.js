const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("CS 1.6 Oynuyorsun !")
    .setImage("https://cdn.discordapp.com/attachments/561552351874252811/561826555119009794/tenor.gif")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['csoyna'],
  permLevel: 0
};

exports.help = {
  name: 'csoyna',
  description: 'Cs 1.6 Oynatır.',
  usage: 'csoyna'
};