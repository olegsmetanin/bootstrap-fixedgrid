'use strict';

var gulp = require('gulp'),
    gulpless = require('gulp-less'),
	webpack = require('gulp-webpack'),
    deploypages = require('gulp-gh-pages');

var dest = './dest';

gulp.task('styles', function() {
    return gulp.src([
            './src/less/style.less'
        ])
        .pipe(gulpless({}))
        .pipe(gulp.dest(dest));
});

gulp.task("webpack", function() {
    var config = require('./webpack.config.js');
    return gulp.src('src/js/app.js')
      .pipe(webpack(config))
      .pipe(gulp.dest(dest));
});

gulp.task('resources', function() {
    return gulp.src(['./src/**', '!./src/js', '!./src/js/**', '!./src/less', '!./src/less/**'])
        .pipe(gulp.dest(dest));
});

gulp.task('deploy', function() {
    return gulp.src('./dest/**/*')
        .pipe(deploypages({branch:'gh-pages'}));
});

gulp.task('watch', function() {
    gulp.watch('./src/less/**', ['styles']);
    gulp.watch('./src/js/**', ['webpack']);
    gulp.watch(['./src/**', '!./src/js', '!./src/js/**', '!./src/less', '!./src/less/**'], ['resources']);
});

gulp.task('default', ['styles', 'webpack', 'resources']);
gulp.task('dev', ['default', 'watch']);
