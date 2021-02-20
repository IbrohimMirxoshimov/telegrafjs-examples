const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;

module.exports = new BaseScene("location")
  .enter((ctx) =>
    ctx.reply(
      "Send location\n/main - main scene",
      Markup.keyboard([Markup.button.locationRequest("Send my location")])
        .oneTime()
        .resize()
    )
  )
  .on("location", (ctx) => {
    const { latitude, longitude } = ctx.message.location;
    return ctx.reply(`Your coordinates: ${latitude}, ${longitude}`);
  })
  .command("main", (ctx) => ctx.scene.enter("main"))
  .use((ctx) => ctx.scene.reenter());
