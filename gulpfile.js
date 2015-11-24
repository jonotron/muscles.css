var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
  return gulp.src('muscles/**/*.css')
    .pipe(postcss([ require('postcss-for') ]))
    .pipe(gulp.dest('dist/'));
});

