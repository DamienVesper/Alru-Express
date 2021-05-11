import config from './config/config';
import log from './utils/log';

import * as http from 'http';
import * as Express from 'express';

import pageRouter from './routes/index';
import redirectRouter from './routes/redirect';
import apiRouter from './routes/api';

import * as dotenv from 'dotenv';
dotenv.config();

const app: Express.Application = Express();

export default {
    app
};
