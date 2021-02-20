const { Markup, Scenes } = require("telegraf");
const { BaseScene } = Scenes;

module.exports = new BaseScene("phone")
  .enter((ctx) =>
    ctx.reply(
      "Send contact\n\n/main - main scene",
      Markup.keyboard([Markup.button.contactRequest("Send my contact")])
        .oneTime()
        .resize()
    )
  )
  .on("contact", (ctx) => {
    const { phone_number } = ctx.message.contact;
    return ctx.reply(`Your number: ${phone_number}`);
  })
  .command("main", (ctx) => ctx.scene.enter("main"))
  .use((ctx) => ctx.scene.reenter());
