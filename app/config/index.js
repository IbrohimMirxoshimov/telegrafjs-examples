require("dotenv").config();
const production = process.env.NODE_ENV === "production";

// your configs
// edit example.env file and rename to .env
const DEV_ID = process.env.DEV_ID;
const TOKEN = process.env.TOKEN;

module.exports = {
  production,
  DEV_ID,
  TOKEN,
};
