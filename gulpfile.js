var gulp = require("gulp"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  uglify = require("gulp-uglify"),
  notify = require("gulp-notify"),
  zip = require("gulp-zip");

gulp.task("Html", function() {
  return gulp
    .src("Stage/html/*.pug")
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest("Dest"))
    .pipe(livereload());
});

gulp.task("Sass", function() {
  return gulp
    .src("Stage/css/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefix("last 2 versions"))
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("Dest/css"))
    .pipe(livereload());
});

//handle Js file task
gulp.task("Scripts", function() {
  return gulp
    .src("Stage/js/*.js")
    .pipe(concat("plugin.js"))
    .pipe(uglify())
    .pipe(gulp.dest("Dest/js"))
    .pipe(livereload());
});

gulp.task("Imgs", function() {
  return gulp
    .src("Stage/imgs/**/*.*")
    .pipe(gulp.dest("Dest/imgs"))
    .pipe(livereload());
});

gulp.task("Libraries", function() {
  return gulp
    .src("Stage/libs/**/*.*")
    .pipe(gulp.dest("Dest/libs"))
    .pipe(livereload());
});

gulp.task("Watch", function() {
  require("./server.js");
  livereload.listen();
  gulp.watch("Stage/html/**/*.pug", gulp.series("Html"));
  gulp.watch("Stage/css/**/*.scss", gulp.series("Sass"));
  gulp.watch("Stage/js/*.js", gulp.series("Scripts"));
  gulp.watch("Stage/imgs/*.*", gulp.series("Imgs"));
  gulp.watch("Stage/libs/**/*.*", gulp.series("Libraries"));
});
