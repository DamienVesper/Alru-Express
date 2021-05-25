import config from '../../config/config';
import log from './utils/log';

import * as HTTP from 'http';
import * as Express from 'express';

import pageRouter from './routes/index';
import apiRouter from './routes/api';

import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Express.Application = Express();

const server: HTTP.Server = HTTP.createServer(app);
server.listen(config.port, () => log(`green`, `Server is listening at port ${config.port}.`));

app.set(`views`, path.resolve(__dirname, `views`));
app.set(`view engine`, `ejs`);

app.use(`/assets`, Express.static(path.resolve(__dirname, `../client/assets`)));

app.use(`/`, pageRouter);
app.use(`/api`, apiRouter);

export default {
    app,
    server
};
