"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../../package.json");
const config_1 = require("../../config/config");
const log_1 = require("./utils/log");
const HTTP = require("http");
const Express = require("express");
const index_1 = require("./routes/index");
const api_1 = require("./routes/api");
const path = require("path");
const app = Express();
const server = HTTP.createServer(app);
app.set(`views`, path.resolve(__dirname, `../client/views`));
app.set(`view engine`, `ejs`);
app.use(`/assets`, Express.static(path.resolve(__dirname, `../client/assets`)));
app.use(`/`, index_1.default);
app.use(`/api`, api_1.default);
server.listen(config_1.default.port, () => log_1.default(`green`, `Server is listening at port ${config_1.default.port}.`));
log_1.default(`blue`, `[ALRU.GA] Website | v${package_json_1.version}`);
exports.default = {
    app,
    server
};
