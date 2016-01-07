var gulp = require('gulp');
var postcss = require('gulp-postcss');

var opts = {
  maps: [{
    defaultMap: {
      modules: {
        wrap:             true,
        direction:        true,
        justify:          true,
        alignItems:    true,
        alignContent:  true,
        gutter:           true,
        grow:             true,
        shrink:           true,
        order:            true,
        length:           true,
        fraction:         true,
        width:            true,
        alignSelf:     true
      } 
    }
  }],
};


gulp.task('css', function() {
  var vars = {
    muscles_base_basis: '96px',
    muscles_base_gutter: '12px'
  };

  var processors = [
    require('postcss-map')(opts),
    require('postcss-conditionals'),
    require('postcss-import'),
    require('postcss-custom-media'),
    require('postcss-mixins'),
    require('postcss-for'),
    require('postcss-simple-vars')({ variables: vars }), // must come after postcss-for
    require('postcss-discard-comments'),
    require('css-mqpacker')
  ];

  return gulp.src('muscles/muscles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('dist/'));
});

gulp.task('mdcss', function() {
  var theme = {
    title: 'Muscles.css docs',
    examples: {
      css: [
        '../dist/muscles.css', 
        '../example/example.css', 
        'http://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.2/normalize.min.css'
      ]
    }
  };

  var processors = [
    require('postcss-map')(opts),
    require('postcss-conditionals'),
    require('postcss-import'),
    require('mdcss')({
      theme: require('mdcss-theme-github')(theme)
    }),
    require('postcss-discard-comments')
  ]

  return gulp.src('muscles/muscles.css')
    .pipe(postcss(processors));
});

