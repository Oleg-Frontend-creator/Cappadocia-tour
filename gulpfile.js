'use strict';

const gulp = require("gulp");
const less = require("gulp-less");
const cleanCss = require("gulp-clean-css");
const rename = require("gulp-rename");
const concatCss = require('gulp-concat-css');

//сборка less-файлов в один минифицированный css-файл
exports.less = function () {
    return gulp.src(["./src/styles/less/styles.less"])
        .pipe(less())
        .pipe(concatCss("./src/styles/libraries/style.css"))
        .pipe(
            rename(function (file) {
                file.basename = file.basename + ".min";
            })
        )
        .pipe(cleanCss())
        .pipe(gulp.dest("./"));
};

//сборка всех css-файлов (наших стилей и библиотек) в один минифицированный css-файл
exports.concatStyles = function () {
    return gulp.src(["./src/styles/libraries/hover.css"
        , "./src/styles/libraries/bootstrap.min.css"
        , "./src/styles/libraries/animate.min.css"
        , "./src/styles/libraries/magnific-popup.css"
        , "./src/styles/libraries/style.min.css"])
        .pipe(concatCss("./dist/style.css"))
        .pipe(
            rename(function (file) {
                file.basename = file.basename + ".min";
            })
        )
        .pipe(cleanCss())
        .pipe(gulp.dest("./"));
};

// сборка и минификация js-файлов
const concat = require('gulp-concat');
const minify = require('gulp-minify');

exports.scripts = function () {
    return gulp.src(["./src/scripts/wow.min.js", "./src/scripts/bootstrap.min.js", "./src/scripts/imask.js",
        "./src/scripts/jquery-3.7.1.min.js", "./src/scripts/jquery.magnific-popup.js",
        "./src/scripts/script.js"])
        .pipe(concat('script.js'))
        .pipe(minify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('./dist'));
};

exports.watch = function () {
    gulp.watch('./src/styles/less/*.less', gulp.series('less', 'concatStyles', 'scripts'));
    gulp.watch('./src/scripts/*.js', gulp.series('scripts'));
};
