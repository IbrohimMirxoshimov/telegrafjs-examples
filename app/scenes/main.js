const { Scenes, Markup } = require("telegraf");
const { BaseScene } = Scenes;

const mainScene = new BaseScene("main");

// when entered
mainScene.enter((ctx) =>

  // send hello and remove keyboards
  ctx.reply(
    "Hello\n\n/phone - to send contact\n/location - to send location",
    Markup.removeKeyboard()
  )
);

// handle commands
mainScene
  .command("phone", (ctx) => ctx.scene.enter("phone"))
  .command("location", (ctx) => ctx.scene.enter("location"));

// hande any update for reenter scene
mainScene.use((ctx) => ctx.scene.reenter());

module.exports = mainScene;
