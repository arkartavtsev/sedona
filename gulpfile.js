var gulp = require('gulp');

var rename = require('gulp-rename');
var clean = require('del');
var run = require('run-sequence');

var server = require('browser-sync').create();

var include = require('gulp-rigger');

var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssMinify = require('gulp-csso');

var jsConcat = require('gulp-concat');
var jsMinify = require('gulp-uglify');

var imgMinify = require('gulp-imagemin');
var webpCreate = require('gulp-webp');

var svgstore = require('gulp-svgstore');

var ghPages = require('gulp-gh-pages');


gulp.task('clean', function () {
  return clean('build');
});

gulp.task('copy', function () {
  return gulp.src([
    'source/font/**/*.{woff,woff2}',
    'source/img/*.{png,jpg,svg}',
    'source/video/*',
    'source/js/**/*.js'
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
    .pipe(include())
    .pipe(gulp.dest('build'));
});

gulp.task('style', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
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

gulp.task('script', function () {
  return gulp.src('source/js/**/*.js')
    .pipe(plumber())
    .pipe(jsConcat('script.js'))
    .pipe(jsMinify('script.js'))
    .pipe(gulp.dest('build/js'))
});

gulp.task('images', function () {
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

gulp.task('webp', function () {
  return gulp.src('build/img/**/*.{png,jpg}')
    .pipe(webpCreate(
      {quality: 80}
    ))
    .pipe(gulp.dest('build/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/sprite/*.svg')
    .pipe(imgMinify([
      imgMinify.svgo({
        plugins: [
          {removeAttrs:
            {attrs: 'fill'}
          }
        ]
      })
    ]))
    .pipe(svgstore())
    .pipe(gulp.dest('build/img'));
});


gulp.task('build', function (done) {
  run(
    'clean',
    'copy',
    'html',
    'style',
    'script',
    'images',
    'webp',
    'sprite',
    done
  );
});


gulp.task('serve', function () {
  server.init({
    browser: [
      'chrome',
      'firefox',
      'microsoft-edge:http://localhost:3000',
      'iexplore'
    ],
    server: 'build/',
    tunnel: 'sedona',
    notify: false,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', ['style']);
  gulp.watch('source/**/*.html', ['html']).on('change', server.reload);
  gulp.watch('source/js/**/*.js', ['script']).on('change', server.reload);
});


gulp.task('deploy', function () {
  return gulp.src('build/**/*')
    .pipe(ghPages());
});
