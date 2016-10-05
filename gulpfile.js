
const gulp = require('gulp');
const del = require('del');
const concatCSS = require('gulp-concat-css');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

gulp.task('build', ['copy:html', 'build:css', 'build:js']);

gulp.task('clean:html', () => {
    return del(['dist/index.html']);
});
gulp.task('copy:html', ['clean:html'], () => {
    gulp.src('index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean:css', () => {
    return del(['dist/css/**']);
});
gulp.task('build:css', ['clean:css'], () => {
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.css'])
        .pipe(concatCSS("bundle.css"))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('clean:js', () => {
    return del(['dist/js/**']);
});
gulp.task('build:js', ['clean:js'], () => {
    return gulp.src('source/js/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'));
});
