const Discord = require('discord.js');


exports.run = function(client, message) {
    const embed = new Discord.RichEmbed()
    .setAuthor("Botu Sunucuna Ekleyebilirsin!")
	.addField("Botu Davet Et", "[Davet](https://discordapp.com/oauth2/authorize?client_id=538401686901882905&scope=bot&permissions=2146958847)", true)
	.addField("Destek Sunucumuz", "[Destek](https://discord.gg/kP5e5hu)", true)
    .setColor("007aff")
    .setTimestamp()
    message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Kuralsız Botunun Davet Linki Atar.',
  usage: 'davet'
};