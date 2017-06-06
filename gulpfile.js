var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('babelify');

var sass = require('gulp-sass');

gulp.task('build-js', function() {
 var b = browserify({
   entries: ['web-app/src/js/index.js'], //entry file
   debug: true
 });
 b.transform(reactify); // use the reactify transform
 return b.bundle()
  .pipe(source('index.js'))
  .on('error', onError)
  .pipe(gulp.dest('./web-app/build/js/'));
});

gulp.task('build-kitchen-sink-js', function() {
 var b = browserify({
   entries: ['web-app/src/js/kitchen-sink.js'], //entry file
   debug: true
 });
 b.transform(reactify); // use the reactify transform
 return b.bundle()
  .pipe(source('kitchen-sink.js'))
  .on('error', onError)
  .pipe(gulp.dest('./web-app/build/js/'));
});

gulp.task('build-styling', function() {
  gulp.src('web-app/src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./web-app/build/css/'));
});

function onError(err) {
  console.log(err);
  //this.emit('end');
}

gulp.task('watch', function() {
  gulp.watch('web-app/src/js/**/*.js', ['build-js']);
  gulp.watch('web-app/src/js/**/*.js', ['build-kitchen-sink-js']);
  gulp.watch('web-app/src/sass/**/*.scss',['build-styling']);
});

gulp.task('default', ['watch','build-js','build-kitchen-sink-js', 'build-styling']);
