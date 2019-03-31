const Discord = require('discord.js');

exports.run = async(client, message, args) => {
const emoji = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("📶 ``Bağlanıyor...`` 🌐 | ***👤 Destek aranıyor lütfen bekleyiniz.***");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "548955241878388756";
      const embed = new Discord.RichEmbed()
        .addField('Dikkat', `Canlı destek talebi alındı. @here`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("00ff00")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('**Talebe bağlanmak için** `bağlan` **yazın, kapatmak için** `kapat` **yazın.**')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'bağlan') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('Bağlantı koptu. ❌')
      if (reason === 'aborted') {
        message.reply('``Talebiniz reddedildi.``')
        client.channels.get(destekKanal).send('``Destek talebi reddedildi.``')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('``Destek talebi alındı.``')
        client.channels.get(destekKanal).send('**Görüşmeyi kapatmak için ``kapat`` yazınız.**')
        chan.send(`${message.author}`)
        chan.send('``Talebiniz yetkili tarafından kabul edildi.``')
        chan.send('**Görüşmeyi kapatmak için `kapat` yazınız.**')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('**Görüşme sonlandırıldı. 🚫**')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('``Canlı destek aramayı kapattı.``')
              if (message.channel.id === destekKanal) chan.send('**Destek karşı taraftan kapatıldı.**')

              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`**📞  ${message.author.tag} :** ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`**📞  ${message.author.tag} :** ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlıdestek'
};