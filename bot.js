const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send("ya merhaba sana sunucu atarsam benim için gelirmisin para kazanıyormuşuz bilmiyorum para lazım bana ondan dolayı gelirsen teşşekür ederim  :smile: :heart: geldiğin zaman arkadaşlık atarsan kabul ederim :) https://discord.gg/nUq2xka")

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
