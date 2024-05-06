const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("build:css", (done) => {
  gulp
    .src("scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("public"));
  done();
});

gulp.task("watch", (done) => {
  gulp.watch("scss/**/*.scss", gulp.series(["build:css"]));
  done();
});
