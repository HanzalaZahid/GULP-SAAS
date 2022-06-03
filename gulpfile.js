const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));;
const browserSync = require('browser-sync').create();

//Compile scss into css

function style()
{
  //1. SCSS FILE
  return gulp.src('./scss/**/*.scss')
  // 2. Pass to compiler
  .pipe(sass())
  // 3. where to output file
  .pipe(gulp.dest('./css'))
}

exports.style = style;