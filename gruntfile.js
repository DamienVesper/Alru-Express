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
});