const dotenv = require(`dotenv`).config();

const config = {
    appname: `Alliance Reunited`,
    port: process.env.NODE_ENV == `prod` ? 8200 : 8080,
    mode: process.env.NODE_ENV,
    domain: `alru.ga`,
    logging: true,
    staticDir: `${__dirname}/../../client/`
}

module.exports = config;