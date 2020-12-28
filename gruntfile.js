const webpackConfig = require(`./webpack.config.js`);

module.exports = (grunt => {
    grunt.initConfig({
        pkg: grunt.file.readJSON(`package.json`),
        webpack: {
            prod: webpackConfig
        },

        // Development Environment
        concurrent: {
            dev: [
                `nodemon:dev`,
                `watch:scripts`
            ],
            options: {
                logConcurrentOutput: false
            }
        },
        nodemon: {
            dev: {
                script: `src/server/server.js`
            },
            options: {
                args: [`dev`],
                nodeArgs: [`--inspect`]
            }
        }
    });


    // Run in dev.
    grunt.registerTask(`dev`, [`concurrent:dev`]);

    // Load required npm tasks.
    grunt.loadNpmTasks(`grunt-contrib-watch`);
    grunt.loadNpmTasks(`grunt-nodemon`);
    grunt.loadNpmTasks(`grunt-concurrent`);
});