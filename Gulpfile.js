var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var reactify = require('reactify');

gulp.task('sass', function () {
  gulp.src('./_src/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: [
        'node_modules'
      ]
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('jekyll', function (callback) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    callback(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll:watch', function (callback) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

  jekyll.on('exit', function (code) {
    callback(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('js', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './_src/js/site.js',
    transform: [
      reactify
    ],
    debug: false
  });

  try {
    b.bundle()
      .pipe(source('site.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .pipe(uglify())
      .on('error', gutil.log)
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/js/'));
  } catch (e) {
    console.log(e);
  }
});

gulp.task('watch', function () {
  var spawn = require('child_process').spawn;
  spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

  gulp.watch('./_src/sass/**/*.scss', ['sass']);
  gulp.watch('./_src/js/**/*.js', ['js']);
});
