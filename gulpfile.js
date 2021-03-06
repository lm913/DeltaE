var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var wrap = require('gulp-wrap-exports');
var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var jsdoc = require('gulp-jsdoc');

// Build all distribution files from source
gulp.task('build', function() {
    // global export version
   browserify('./src/index.js',{
            standalone: 'DeltaE'
        })
        .bundle()
        .pipe(source('deltae.global.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

// Generate JSDocs
gulp.task('jsdoc', function() {
    gulp
        .src(['./src/*.js', './README.md'])
        .pipe(jsdoc('./jsdoc', {
            path: 'ink-docstrap'
        }));
});