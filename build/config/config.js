"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("yargs");
const helpers_1 = require("yargs/helpers");
const argv = yargs_1.default(helpers_1.hideBin(process.argv)).options({
    port: { type: `number`, default: 8080 }
}).argv;
const config = {
    port: argv.port
};
exports.default = config;
