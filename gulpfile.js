'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('styles', function() {
  return gulp.src('src/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
  return del('dest');
});

gulp.task('build', ['clean', 'styles']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['styles']);
});

gulp.task('dev', ['build', 'watch']);

gulp.task('default', ['dev']);
