
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin  = require('gulp-cssmin'),
    concat  = require('gulp-concat'),
    uglify  = require('gulp-uglify'),
    watch   = require('gulp-watch'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyjs = require('gulp-js-minify'),
    browserSync = require('browser-sync');



gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);