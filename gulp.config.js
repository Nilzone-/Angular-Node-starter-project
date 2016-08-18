module.exports = (function () {
    var client = './public';

    var config = {
        allJS: [
            '*.js',
            'public/js/*.js',
            'public/js/**/*.js'
        ],
        client: client,
        index: client + '/index.html',

        customFiles: [
            './public/css/*.css',
            './public/js/*.js',
            './public/js/**/*.js'
        ],

        bower: {
            json: require('./bower.json'),
            directory: './public/lib',
            ignorePath: '/public'
        },

    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    config.getServeOptions = function () {
        var options = {
            script: 'server.js',
            delayTime: 1,
            env: {
                PORT: 3000
            },
            watch: config.allJS
        };

        return options;
    };

    return config;
})();