// Configuration.
const config = require(`./config/config.js`);
const dotenv = require(`dotenv`).config();

// Utilities.
const log = require(`./utils/log.js`);

// HTTP / HTTPS transport protocols.
const http = require(`http`);

// Express app.
const express = require(`express`);
const app = express();

// Express middleware.
const bodyParser = require(`body-parser`);
const compression = require(`compression`);
const flash = require(`connect-flash`);

let indexRouter = require(`./routes/index.js`);
let redirectRouter = require(`./routes/redirect.js`);
let apiRouter = require(`./routes/api.js`);

// Set headers.
app.use((req, res, next) => {
    res.header(`Access-Control-Allow-Credentials`, true);
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `POST, GET, OPTIONS, PUT, DELETE, PATCH, HEAD`);
    res.header(`Access-Control-Allow-Headers`, `Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept`);
    req.method.toLowerCase() == `options` ? res.sendStatus(200) : next();
});

// Use compression middleware.
app.use(compression());
app.use(flash());

app.use(bodyParser.json({
    limit: `50mb`
}));
app.use(bodyParser.urlencoded({
    limit: `50mb`,
    extended: true
}));

// Set view engine.
app.set(`views`, `${__dirname}/views`);
app.set(`view engine`, `ejs`);

// Serve the static directory.
app.use(`/assets`, express.static(config.staticDir));

// Use routes.
app.use(`/`, indexRouter);
app.use(`/`, redirectRouter);
app.use(`/api`, apiRouter);

// Create webfront.
let server = http.createServer(app);

// Bind the webfront.
server.listen(config.port, () => log(`green`, `Server is listening at port ${config.port}.`));

process.on(`uncaughtException`, err => {
    log(`red`, err.stack);
});

module.exports = {
    server,
    app
}