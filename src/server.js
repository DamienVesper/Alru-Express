const dotenv = require(`dotenv`).config();
const config = require(`../config.js`);

const express = require(`express`);
const app = express();

let indexRouter = require(`./server/routes/index`);

// Set view engine.
app.set(`views`, __dirname + `/views`);
app.set(`view engine`, `ejs`);

// Use routes.
app.use(`/`, indexRouter);

// Bind the webfront.
app.listen(config.port, () => log(`green`, `Server is listening at port ${config.port}.`));

// OK LETS GO RAJEEV TIME