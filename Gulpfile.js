var gulp = require('gulp');
var sass = require('gulp-sass');

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

gulp.task('jekyll', function (gulpCallBack) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build'], {stdio: 'inherit'});

  jekyll.on('exit', function(code) {
      gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('jekyll:watch', function (callback) {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

  jekyll.on('exit', function(code) {
      gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });
});

gulp.task('watch', function () {
  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--watch'], {stdio: 'inherit'});

  gulp.watch('./_src/sass/**/*.scss', ['sass']);
});
