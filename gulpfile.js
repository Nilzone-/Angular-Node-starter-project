var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});
var config = require('./gulp.config');


gulp.task('style', function () {
    log('Analyzing source with JSHint and JSCS');

    return gulp.src(config.allJS)
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe($.jscs());
});


gulp.task('inject', function () {
    log('Injecting the JS and CSS files into index.html');

    var wiredep = require('wiredep').stream;
    var options = config.getWiredepDefaultOptions();

    return gulp.src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.customFiles), {ignorePath: options.ignorePath}))
        .pipe(gulp.dest(config.client));
});


gulp.task('serve', ['style', 'inject'], function () {
    var options = config.getServeOptions();

    return $.nodemon(options)
        .on('restart', function () {
            console.log('Restarting...');
        });

});


function log(msg) {
    if (typeof msg === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}