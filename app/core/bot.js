const { Telegraf, session, Scenes } = require("telegraf");
const { Stage } = Scenes;

const { TOKEN, DEV_ID } = require("../config");
const bot = new Telegraf(TOKEN);
const scenes = require("../scenes");
const stage = new Stage(Object.values(scenes));


// error handler
bot.catch((err) => {
  const message = err.stack || err;
  console.log(message, err);
  bot.telegram.sendMessage(DEV_ID, message);
});

// registration middlewares
bot.use(session()).use(stage.middleware());

// start command
bot.start((ctx) => {

  // enter main scene
  return ctx.scene.enter("main");
});

// handle any text messsage
bot.on("text", (ctx) => {

  // enter main scene
  return ctx.scene.enter("main");
});

//launch bot and send message developer
bot.launch().then(() => {
  const message = "Bot started";
  console.log(message);
  bot.telegram.sendMessage(DEV_ID, message);
});
