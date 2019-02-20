const Discord = require('discord.js');
const Client = new Discord.Client();
const token = process.env.TOKEN;

const prefix = '!';
Client.on('message', message => {
    let msg = message.content.toUpperCase();
    let sender = message.author;
    if (msg === prefix + 'ซัน'){
        message.channel.send('เป็นไก่');
    }
    if (msg === prefix + 'พี่เฟรม'){
        message.channel.send('ไก่กุ๊กๆ');
    }
    if (msg === prefix + 'ปั๊ม'){
        message.channel.send(message.user.username);
    }
});

Client.on('guildMemberAdd', member => {
   var role = member.guild.roles.find("name", "Guest❗❓");
    member.addRole(role)
});
// Client.on('guildMemberAdd', member => {
//    member.addRole(member.guild.roles.find(role => role.name === "new"));
// });

Client.on('guildMemberAdd', member => {
    let memberaddembeb = new Discord.RichEmbed()
    .setColor('#22FF00')
    .setAuthor('Welcome to ARRANT', member.user.avatarURL)
    .addField('ยินดีตอนรับ' ,"<@" + member.id + ">" + 'กรุณาเปลี่ยนชื่อ Discord เป็น ชื่อตระกูล ชื่อเล่น อายุ โดยคลิกขวาที่ชื่อของตนเองแล้วคลิก Change Nickname')
    .addField('การใช้งาน' ,'คุณจะยังไม่สามารถเห็นห้องภายใน Discord ให้คุณทักหาหัวหน้ากิลแล้วรอที่ห้อง Welcome to ARRANT ได้เลย')
    .setFooter(member.guild.memberCount + ' Members')
    .setTimestamp()
    
    member.guild.channels.get('546373490996150282').send(memberaddembeb);
    // Client.on('message', message => {
    //     message.tim
    // });
});


Client.on('guildMemberRemove', member => {
    let memberremoveembed = new Discord.RichEmbed()
    .setAuthor(member.user.username , member.user.avatarURL)

    member.guild.channels.get('546373490996150282').send('**' + "<@" + member.id + ">" + '**,has leave the server!');
    // Client.on('message', message => {
    //     message.delete(5000);
    // });
});

Client.on('voiceStateUpdate', (oldMember , newMember) => { // เข้าออก voice channel
    let newUserChannel = newMember.voiceChannel
    let oldUserChannel = oldMember.voiceChannel

    
    if (oldUserChannel === undefined && newUserChannel !== undefined)
    {   
        let joinmemberembed = new Discord.RichEmbed()
        .setColor('#22FF00')
        .setAuthor(newMember.user.username , newMember.user.avatarURL)
        .setDescription(newMember.user.username + ' Joined voice channel #'+ newMember.voiceChannel.name)
        newMember.guild.channels.get('546373490996150282').send(joinmemberembed)
    }
    else if (newUserChannel === undefined)
    {    
        let leavememberembed = new Discord.RichEmbed()
        .setColor('#22FF00')
        .setAuthor(oldMember.user.username, oldMember.user.avatarURL)
        .setDescription(oldMember.user.username + ' Left voice channel #'+ oldMember.voiceChannel.name)
        oldMember.guild.channels.get('546373490996150282').send(leavememberembed)
    }
    else if (oldUserChannel !== undefined && newUserChannel !== undefined)
    {
        let movememberembed = new Discord.RichEmbed()
        .setColor('#22FF00')
        .setAuthor(newMember.user.username, newMember.user.avatarURL)
        .setDescription(newMember.user.username + ' Switched voice channel #'+ oldMember.voiceChannel.name+ ' -> #' + newMember.voiceChannel.name)
        newMember.guild.channels.get('546373490996150282').send(movememberembed)
    }
})

Client.on('ready', () => {
    console.log('Blueline Active...')
    Client.user.setActivity("ARRANT GUILD", { type: "PLAYING"})
});

Client.login(token).catch(err => console.log(err));
