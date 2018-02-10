// Thanks to https://www.sitepoint.com/wordpress-theme-automation-with-gulp/
// and the WWW (well, Stackoverflow mostly)

// We want to use cool es6 stuff
require('es6-promise').polyfill();
// Gotta Gulp it. The extra two are for minifying js for production
var gulp          = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify');
// Freaking love SASS
var sass          = require('gulp-sass');
// Stupid broswer compatibility
var autoprefixer  = require('gulp-autoprefixer');
// Get useful error messages, not just blank fails on errors
var plumber       = require('gulp-plumber');



// start using that stuff
gulp.task('sass', function() {
  // find the sass files to compile
  return gulp.src('./sass/**/*.scss')
  // If there's an error let's hear about it
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
  console.log('An error occurred: ' + err.message);
  this.emit('end');
};

// get JS ready for production
gulp.task('js', function(){
    return gulp.src(['./js/*.js'])
        .pipe(gp_concat('app.min.js'))
        .pipe(gulp.dest('./js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./js'));
});

// Note:
// If you only need to include specific files, you can add them inside the gulp.src array as:
// gulp.task('js', function() {
//   return gulp.src([
//     './js/navigation.js',
//     './js/skip-link-focus-fix.js'
//   ])
// });


// We don't want to run a command every time we change something,
// this will do it automatically for us
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['js']);
});
// Define a default if we just type 'gulp' in the console with no argument
gulp.task('default', ['sass', 'js', 'watch']);
