var gulp = require('gulp');

// general
var rename = require('gulp-rename');
var clean = require('del');
var include = require('gulp-rigger');
var plumber = require('gulp-plumber');
var newer = require('gulp-newer');

var run = require('run-sequence');
var server = require('browser-sync').create();
var ghPages = require('gulp-gh-pages');

// html
var htmlmin = require('gulp-htmlmin');

// css
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');
var autoprefixer = require('gulp-autoprefixer');
var cssMinify = require('gulp-csso');

// js
var jsMinify = require('gulp-uglify');

// img
var imgMinify = require('gulp-imagemin');
var webpCreate = require('gulp-webp');
var svgstore = require('gulp-svgstore');


gulp.task('clean', function () {
  return clean('build');
});

gulp.task('copy', function () {
  return gulp.src([
    'source/*.html',
    'source/font/**/*.{woff,woff2}',
    'source/js/**/*.js',
    'source/img/**/*',
    'source/video/**/*',
    'source/data/**/*'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'));
});


gulp.task('html:copy', function() {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('html:min', function() {
  return gulp.src('build/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'));
});


gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(autoprefixer({
      flexbox: 'no-2009'
    }))
    .pipe(gulp.dest('build/css'))
    .pipe(cssMinify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(server.stream());
});


gulp.task('js:copy', function() {
  return gulp.src('source/js/**/*.js')
    .pipe(newer('build/js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('js:include', function () {
  return gulp.src('source/js/**/*.js')
    .pipe(plumber())
    .pipe(include())
    .pipe(gulp.dest('build/js'))
});

gulp.task('js:minify', function () {
  return gulp.src('build/js/script.js')
    .pipe(jsMinify())
    .pipe(gulp.dest('build/js'))
});


gulp.task('img:copy', function() {
  return gulp.src('source/img/**')
    .pipe(newer('build/img'))
    .pipe(gulp.dest('build/img'));
});

gulp.task('img:minify', function () {
  return gulp.src('build/img/**/*.{png,jpg,svg}')
    .pipe(imgMinify([
      imgMinify.optipng(
        {optimizationLevel: 3}
      ),
      imgMinify.jpegtran(
        {progressive: true}
      ),
      imgMinify.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeAttrs:
            {attrs: 'version'}
          }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('img:webp', function () {
  return gulp.src('build/img/**/*.{png,jpg}')
    .pipe(webpCreate(
      {quality: 80}
    ))
    .pipe(gulp.dest('build/img'));
});

gulp.task('img:svg-sprite', function() {
  return gulp.src('source/img/sprite/*.svg')
    .pipe(imgMinify([
      imgMinify.svgo({
        plugins: [
          {removeViewBox: false},
          {removeRasterImages: true},
          {removeAttrs:
            {attrs: 'fill'}
          }
        ]
      })
    ]))
    .pipe(svgstore())
    .pipe(gulp.dest('build/img'));
});


function reload (done) {
  server.reload();
  done();
}


gulp.task('html:update', ['html:copy'], reload);
gulp.task('js:update', ['js:copy', 'js:include'], reload);
gulp.task('img:update', ['img:copy'], reload);

gulp.task('serve', ['css'], function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/*.html', ['html:update']);
  gulp.watch('source/sass/**/*.{scss,sass}', ['css']);
  gulp.watch('source/js/**/*.js', ['js:update']);
  gulp.watch('source/img/**/*', ['img:update']);
});


gulp.task('build', function() {
  run(
    'clean',
    'copy',
    'html:min',
    'css',
    'js:include',
    'js:minify',
    'img:minify',
    'img:webp',
    'img:svg-sprite'
  );
});


gulp.task('deploy', function () {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
