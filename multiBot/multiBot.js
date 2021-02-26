const { Telegraf } = require("telegraf");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

const botsData = [
  {
    id: 1,
    name: "Bot 1",
    token: "aa11",
  },
  {
    id: 2,
    name: "Bot 2",
    token: "bb22",
  },
];

// create instances
const bots = botsData.map((data) => {
  const bot = new Telegraf(data.token);
  bot.context.data = data;
  return bot;
});

// registration handlers
bots.forEach((bot, index) => {
  bot.start((ctx) => ctx.reply("Hello, it is " + bot.context.data.name));

  // set webhook
  bot.telegram.setWebhook("https://{YOUR DOMAIN}/" + bot.context.data.id);

  // Set the bot API endpoint
  app.use(bot.webhookCallback("/" + bot.context.data.id));
});

// listen port
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
