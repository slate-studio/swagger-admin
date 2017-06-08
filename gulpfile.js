var gulp         = require('gulp'),
    rename       = require('gulp-rename'),
    rimraf       = require('gulp-rimraf'),
    gulpSequence = require('gulp-sequence'),
    exec         = require('child_process').exec;

gulp.task('rename-script', function () {
  return gulp.src('dist/*.js')
    .pipe(rimraf())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('rename-css', function () {
  return gulp.src('dist/*.css')
    .pipe(rimraf())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', function (cb) {
  exec('node build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('default', gulpSequence('build', ['rename-script', 'rename-css']))
