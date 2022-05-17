const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config();

exports.sayGoodMorning = async (req, res) => {
  try {
    // if (!req.body.temp) {
    //   throw "Temperature is undefined";
    // }

    // When the client is ready, run this code (only once)
    client.on('ready', () => {
      console.log(`${client.user.tag} is online!`);

      // const channel = client.channels.cache.get(process.env.CHANNEL_ID);
      console.log(client.channels);
      // if (!channel) {
      //   return console.error('Could not find the channel.');
      // }

      console.log('Found channel');

      // channel.send('gm')
      //   .then(message => console.log(`Sent message: ${message.content}`))
      //   .catch(e => console.log(e));
    });

    // Login to Discord with your client's token
    client.login(process.env.BOT_TOKEN);
  } catch (error) {
    console.log('got error: ', error);
    res.status(500).send(error);
  }
};
