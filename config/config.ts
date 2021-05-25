import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

interface Args {
    port: number
}

const argv = (yargs(hideBin(process.argv)).options({
    port: { type: `number`, default: 8080 }
}).argv as Args);

const config = {
    port: argv.port
};

export default config;
