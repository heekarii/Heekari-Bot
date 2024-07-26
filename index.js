const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
    console.log('{client.user.tag} has logged in.');
    }   
)