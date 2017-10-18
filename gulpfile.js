var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('babelify');

var sass = require('gulp-sass');

gulp.task('build-js', function() {
 var b = browserify({
   entries: ['./src/js/index.js'], //entry file
   debug: true
 });
 b.transform(reactify); // use the reactify transform
 return b.bundle()
  .pipe(source('index.js'))
  .on('error', onError)
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('build-kitchen-sink-js', function() {
 var b = browserify({
   entries: ['./src/js/kitchen-sink.js'], //entry file
   debug: true
 });
 b.transform(reactify); // use the reactify transform
 return b.bundle()
  .pipe(source('kitchen-sink.js'))
  .on('error', onError)
  .pipe(gulp.dest('./build/js/'));
});

gulp.task('build-styling', function() {
  gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});

function onError(err) {
  console.log(err);
  //this.emit('end');
}

gulp.task('watch', function() {
  gulp.watch('./src/js/**/*.js', ['build-js']);
  gulp.watch('./src/js/**/*.js', ['build-kitchen-sink-js']);
  gulp.watch('./src/sass/**/*.scss',['build-styling']);
});

gulp.task('default', ['watch','build-js','build-kitchen-sink-js', 'build-styling']);
