const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send({embed: {
  color: 0x36393e,
  footer: { 
    text: 'Katılmayı unutma!'
    },
  description: `**Merhaba! Nasılsın dostum? Sana kısaca bir sunucu tanıtacağım;\n:small_blue_diamond: Para kazanabilirsin! 10 Davet 15 Lira, daha fazlası...\n:small_blue_diamond: Nitro bulabilirsin! 5 Davet 3 Aylık, daha fazlası\n:small_blue_diamond: Diğer ödüller! Neden gelmiyorsun?**[TIKLA VE KATIL](https://discord.gg/h6PMy9a)`
}});

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
