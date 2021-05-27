import config from '../../config/config';
import log from './utils/log';

import * as HTTP from 'http';
import express from 'express';

import * as EJSLayouts from 'express-ejs-layouts';

// import pageRouter from './routes/index';
// import apiRouter from './routes/api';

import * as path from 'path';
import * as fs from 'fs';

const app: express.Application = express();
const server: HTTP.Server = HTTP.createServer(app);

app.set(`views`, path.resolve(__dirname, `../client/views`));
app.set(`view engine`, `ejs`);

app.use(EJSLayouts);

app.use(`/assets`, express.static(path.resolve(__dirname, `../client/assets`)));

app.use(`/`, (req: express.Request, res: express.Response) => {
    if (req.path === `/`) res.render(`index.ejs`);
    else {
        const pathToFile = req.path.slice(1);
        const fileExists = fs.existsSync(path.resolve(__dirname, `../client/views`, `${pathToFile}.ejs`));

        if (fileExists) res.render(`${pathToFile}.ejs`);
        else res.render(`404.ejs`);
    }
});

server.listen(config.port, () => log(`green`, `Server is listening at port ${config.port}.`));

export default {
    app,
    server
};
