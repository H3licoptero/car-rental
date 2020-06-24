"use strict";
const { src, dest, watch, series } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const htmlmin = require("gulp-htmlmin");

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
  src("src/js/**/**.js")
    .pipe(
      minify({
        ext: {
          min: ".js",
        },
      })
    )
    .pipe(dest("dist/js"));
  done();
}

function buildHTML(done) {
  src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist/"));
  done();
}

function buildFonts(done) {
  src("src/fonts/OpenSans/**")
    .pipe(dest("dist/fonts/OpenSans"));
  src("src/fonts/IsokWeb/**")
    .pipe(dest("dist/fonts/IstokWeb"));
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, buildHTML, buildFonts);
