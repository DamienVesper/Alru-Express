const dotenv = require(`dotenv`).config();
const config = require(`./config.js`);

const express = require(`express`);
const app = express();



app.listen(config.port, () => console.log(`Server is listneing at port bruh moment`)
});