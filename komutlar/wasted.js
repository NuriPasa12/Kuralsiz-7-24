const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/26uf1w19JaA9wpElO/giphy.gif", "https://media.giphy.com/media/Qi2pBNdPf76QU/giphy.gif", "https://media.giphy.com/media/AHMHuF12pW4b6/giphy.gif", "https://media.giphy.com/media/uAH7abSiUAlPO/giphy.gif", "https://media.giphy.com/media/b2XqngBAfpwQ0/giphy.gif", "https://media.giphy.com/media/BdrpgYHvghIkw/source.gif", "https://media.giphy.com/media/RLi2oeVZiVkE8/giphy.gif", "https://media.giphy.com/media/ux7olM9fLZKww/source.gif", "https://media.giphy.com/media/zRYggL2TQF3ws/giphy.gif", "https://media.giphy.com/media/2C1uOfp93olDG/giphy.gif", "https://media.giphy.com/media/4l5McqvSUSvYI/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'wasted',
  description: 'Rastgele wasted gifi atar.',
  usage: 'wasted'
}; 