const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Bir Çay İçtin!")
    .setImage("https://cdn.discordapp.com/attachments/561262244739022848/561481273210568704/s-a1732b0a2c4f36e7e6edd22154d45d5d827c3e42.gif")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çayiç'],
  permLevel: 0
};

exports.help = {
  name: 'çayiç',
  description: 'Çay İçersin!.',
  usage: 'çayiç'
};