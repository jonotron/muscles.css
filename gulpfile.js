var gulp = require('gulp');
var postcss = require('gulp-postcss');

gulp.task('css', function() {
  var vars = {
    muscles_base_basis: '96px',
    muscles_base_gutter: '12px'
  };
  var theme = {
    title: 'Muscles.css docs',
    examples: {
      css: ['../dist/muscles.css']
    }
  };
  var opts = {
    maps: [{
      defaultMap: {
        modules: {
          wrap:             true,
          direction:        true,
          justify:          true,
          'align-items':    true,
          'align-content':  true,
          gutter:           true,
          grow:             true,
          shrink:           true,
          order:            true,
          length:           true,
          fraction:         true,
          width:            true,
          'align-self':     true
        } 
      }
    }],
  };
  var processors = [
    require('postcss-map')(opts),
    require('postcss-conditionals'),
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-simple-vars')({ variables: vars }), // must come after postcss-for
    require('mdcss')({
      theme: require('mdcss-theme-github')(theme)
    }),
    require('postcss-discard-comments'),
    require('css-mqpacker')
  ];
  return gulp.src('muscles/muscles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

