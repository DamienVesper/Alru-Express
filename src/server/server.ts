import config from '../../config/config';
import log from './utils/log';

import * as HTTP from 'http';
import express from 'express';

import indexRouter from './routes/index';
import apiRouter from './routes/api';

import * as path from 'path';

const EJSLayouts = require(`express-ejs-layouts`);

const app: express.Application = express();
const server: HTTP.Server = HTTP.createServer(app);

app.set(`views`, path.resolve(__dirname, `../client/views`));
app.set(`view engine`, `ejs`);

app.use(EJSLayouts);

app.use(`/assets`, express.static(path.resolve(__dirname, `../client/assets`)));

app.use(`/api`, apiRouter);
app.use(`/`, indexRouter);

server.listen(config.port, () => log(`green`, `Server is listening at port ${config.port}.`));

export default {
    app,
    server
};
