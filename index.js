require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
    const splitMessage = message.content.split(' ');

    if (splitMessage[0] === '$searchYoutube') {
        const song = splitMessage[1];

        if (!song) {
            return;
        }

        if (song.toLowerCase() === 'hello') {
            await message.reply('I see you like adele');
        } else {
            await message.reply('Nice song');
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);