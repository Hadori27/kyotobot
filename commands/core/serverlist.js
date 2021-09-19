const { Util } = require('discord.js');

module.exports = {
    name: 'listguilds',
    category: 'Core',
    aliases: [],
    description: 'Lists all guilds the bot is in',
    permissions: [],
    utilisation: '{prefix}listguilds',
    cooldown: 5,

     async execute(client, message, args){
        const ID = '695302790607798335'; // Add your own ID

        if (message.author.id !== ID) return message.channel.send(`:error: - You don't have the permission to use this command.`); // check permissions

        let clientGuilds = message.client.guilds.cache;
        let messageObj = Util.splitMessage(
            clientGuilds.map(g => '\`' + g.id + `\` **|** \`` + g.name + `\` **|** \`` + g.members.cache.size + '\`') || 'None'
        );
        
        if (messageObj.length == 1) {
            message.channel.send(messageObj[0]);
        } else {
            for (i = 0; messageObj.length < i; i++) {
                message.channel.send(messageObj[i]);
            }
        }
    }
}
