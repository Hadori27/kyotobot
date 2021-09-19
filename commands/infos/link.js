module.exports = {
    name: 'link',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=820381095076954133&permissions=8&scope=bot`);
    },
};