var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
  var processors = [
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-simple-vars') // must come after postcss-for
  ];
  return gulp.src('muscles/muscles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

