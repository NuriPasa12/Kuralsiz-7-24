const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Kuralsız™ Tüm Hakları Saklıdır. ®2019")
	.setDescription("**Kurucu:**@NURİ PAŞA#1583 **Kurucu Yardımcısı:**@Cem❤Nevra#7573")
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botsahibi'],
  permLevel: 0
};

exports.help = {
  name: 'botsahibi',
  description: 'Bot sahiplerini gösterir.',
  usage: 'botsahibi'
};