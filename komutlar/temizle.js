const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(99);
message.channel.send("99 mesaj sildim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'temizle', 
  description: '99 Tane mesaj siler',
  usage: 'temizle'
};