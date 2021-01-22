const dotenv = require('dotenv');
dotenv.config();

// const JSSoup = require('jssoup'.default);
const request = require('request');

// require the discord.js module
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const request = require('request');

client.once('ready', () => {
    console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
    if (message.content === prefix + 'ping') {
        message.channel.send('Pong.');
    }
    else if (message.content === prefix + 'beep') {
        message.channel.send('Boop.');
    }
    else if (message.content === prefix + 'server') {
        message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
    }
    else if (message.content === prefix + 'user-info') {
        message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id + '\nCreated at: ' + message.author.createdAt);
    }
    else if (message.content === prefix + 'annoy') {
        message.author.createDM().then(function(result) {
            result.send('Привет )');
            result.startTyping();
        }).catch(function() {
            console.log('Something went wrong');
        });

    }
    else if (message.content === `${prefix}what is my avatar`) {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
    else if (message.content === `${prefix}bash`) {
        request('https://bash.im/random', function(error, response, body) {
            console.log(body);
            // message.reply(body);
        });

    }
});

client.login(config.token);

