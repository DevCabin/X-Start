// We want to use cool es6 stuff
require('es6-promise').polyfill();
// Gotta Gulp it
var gulp = require('gulp');
// Freaking love SASS
var sass          = require('gulp-sass');
// Stupid broswer compatibility
var autoprefixer  = require('gulp-autoprefixer');
// Get useful error messages, not just blank fails on errors
var plumber = require('gulp-plumber');
// goes with the plumber
var gutil = require('gulp-util');

// start using that stuff
gulp.task('sass', function() {
  // find the sass files to compile
  return gulp.src('./sass/**/*.scss')
  // IF there's an error let's hear about it
  .pipe(plumber({ errorHandler: onError }))
  // Get sassy
  .pipe(sass())
  // get prefixxy
  .pipe(autoprefixer())
  // Spit out that css for real world use
  .pipe(gulp.dest('./'))
});
// Here's where we use the error handler
var onError = function (err) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};
// We don't want to run a command every time we change something,
// this will do it automatically for us
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
// Define a default if we just type 'gulp' in the console with no argument
gulp.task('default', ['sass', 'watch']);
