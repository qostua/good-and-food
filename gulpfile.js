const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const webp = require('gulp-webp');

const convertFonts = () => {
  gulp.src('src/fonts/*.ttf')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('public/fonts'))
  return gulp.src('src/fonts/*.ttf')
    .pipe(ttf2woff())
    .pipe(gulp.dest('public/fonts'))
};

const convertToWebp = () => {
  gulp.src('src/image/*.{jpg,png,svg}')
    .pipe(gulp.dest('public/image'))
  return gulp.src('src/image/*.{jpg,png}')
    .pipe(webp())
    .pipe(gulp.dest('public/image'))
}

exports.convertFonts = convertFonts;
exports.convertToWebp = convertToWebp;
