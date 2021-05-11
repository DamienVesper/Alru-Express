const Webpack = require(`webpack`);
const path = require(`path`);
const dotenv = require(`dotenv`).config();

module.exports = {
    mode: `production`,
    entry: [],
    output: {
        path: path.resolve(__dirname, `src/client/assets/js`),
        filename: `index.min.js`
    },
    plugins: [new Webpack.IgnorePlugin(/node_modules/)],
    optimization: {
        minimize: true,
        removeAvailableModules: true
    },
    target: `node`,
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: `babel-loader`,
                    options: {
                        presets: [`@babel/preset-env`]
                    }
                }
            }
        ]
    }
};
