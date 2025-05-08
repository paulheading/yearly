import gulp from "gulp";
import rename from "gulp-rename";

let readme = {
  dest: "src/markdown",
  name: "readme.md",
  rename: "readme.md",
  src: "readme.md",
  task: "copy:readme",
};

let userguide = {
  dest: "src/markdown",
  name: "userguide.md",
  rename: "userguide.md",
  src: "userguide.md",
  task: "copy:userguide",
};

function copyfiles(done, file) {
  gulp
    .src(file.src)
    .pipe(rename(file.rename ? file.rename : file.name))
    .pipe(gulp.dest(file.dest));
  done();
}

gulp.task("copy:markdown", function (done) {
  copyfiles(done, readme);
  copyfiles(done, userguide);
});

gulp.task("watch", function (done) {
  gulp.watch(readme.src, gulp.series([readme.task]));
  gulp.watch(userguide.src, gulp.series([userguide.task]));
  done();
});
