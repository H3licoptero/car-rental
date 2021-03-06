"use strict";
const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");
const tinypng = require("gulp-tinypng-compress");

// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
  watch("src/*.html").on("change", browserSync.reload);
  watch("src/sass/**/*.sass", serveSass);
  watch("src/sass/**/*.scss", serveSass);
  watch("src/js/*.js").on("change", browserSync.reload);
}

function serveSass() {
  return src("src/sass/**/*.sass", "src/sass/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(dest("src/style"))
    .pipe(browserSync.stream());
}

function buildCSS(done) {
  src("src/style/**/**.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(dest("dist/style"));
  done();
}

function buildJS(done) {
  src(["src/js/**/**.js", "!src/js/**/**.min.js"])
    .pipe(
      minify({
        ext: {
          src: "main.js",
          min: ".js",
        },
      })
    )
    .pipe(dest("dist/js"));
    src("src/js/**.min.js").pipe(dest("dist/js/"));
  done();
}

function buildHTML(done) {
  src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist/"));
  done();
}

function buildPHP(done) {
  src("src/**.php").pipe(dest("dist"));
  src("src/PHPmailer/**.php").pipe(dest("dist/PHPmailer"));
  done();
}


function buildFonts(done) {
  src("src/fonts/IstokWeb/**")
    .pipe(dest("dist/fonts/IstokWeb"));
  src("src/fonts/OpenSans/**")
    .pipe(dest("dist/fonts/OpenSans"));
  done();
}

function buildImg(done) {
  src("src/img/**/*.{png,jpg,jpeg}")
    .pipe(
      tinypng({
        key: "dJt6mmMrMy7RJPlNCzcWk2DgBfWvlsrv",
      })
    )
    .pipe(dest("dist/img"));
  src("src/img/**.svg").pipe(dest("dist/img"));
  done();
}

exports.serve = bs;
exports.build = series(
  buildCSS,
  buildJS,
  buildHTML,
  buildFonts,
  buildImg,
  buildPHP
);
