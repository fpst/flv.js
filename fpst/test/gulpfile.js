'use strict';

const del = require('del');
const gulp = require('gulp');

function doBundle(b) {
    return b.bundle()
        .on('error', console.error.bind(console))
        .pipe(source('flv-tests.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('../../dist/'));
}

function doLint(paths, exit) {
    return gulp.src(paths)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(exit ? eslint.failAfterError() : eslint.result(function () {}));
}

gulp.task('clean', function () {
    return del([
        '../../dist/flv-tests.*'
    ]);
});

gulp.task('lint', function () {
    return doLint(['gulpfile.js', '../../src/**/*.js'], true);
});

gulp.task('build', ['clean', 'lint'], function () {
    let b = browserify({
        entries: 'index.js',
        standalone: 'flvjs',
        debug: true,
        transform: ['babelify', 'browserify-versionify'],
        plugin: ['browserify-derequire']
    });

    return doBundle(b);
});
