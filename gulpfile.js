var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
  var vars = {
    muscles_base_basis: '96px',
    muscles_base_gutter: '12px'
  };
  var processors = [
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-simple-vars')({ variables: vars }), // must come after postcss-for
    require('mdcss'),
    require('postcss-discard-comments'),
    require('css-mqpacker')
  ];
  return gulp.src('muscles/muscles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

