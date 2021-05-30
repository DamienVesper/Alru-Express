import * as Express from 'express';

import * as fs from 'fs';
import * as path from 'path';

const indexRouter: Express.Router = Express.Router();

indexRouter.use(`/`, (req: Express.Request, res: Express.Response) => {
    if (req.path === `/`) res.render(`index.ejs`);
    else {
        const pathToFile = req.path.slice(1);
        const fileExists = fs.existsSync(path.resolve(__dirname, `../../client/views`, `${pathToFile}.ejs`));

        if (fileExists) res.render(`${pathToFile}.ejs`);
        else res.render(`errors/404.ejs`);
    }
});

export default indexRouter;
