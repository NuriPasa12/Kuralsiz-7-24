const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Euro'nun Gücü Türk Lirasını Yenemez !")
	.setDescription("Euro:6,27")
    .setImage("https://cdn.discordapp.com/attachments/556520542140760195/561451655078477825/indir_1.jpg")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['euro'],
  permLevel: 0
};

exports.help = {
  name: 'euro',
  description: 'Euro Kaç Gösterir.',
  usage: 'euro'
};