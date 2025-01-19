import gulp from "gulp";
import rename from "gulp-rename";

let readme = {
  dest: "src/markdown",
  name: "README.md",
  rename: "readme.md",
  src: "README.md",
  task: "copy:readme",
};

function copyfiles(done, file) {
  gulp
    .src(file.src)
    .pipe(rename(file.rename ? file.rename : file.name))
    .pipe(gulp.dest(file.dest));
  done();
}

gulp.task(readme.task, function (done) {
  copyfiles(done, readme);
});

gulp.task("watch", function (done) {
  gulp.watch(readme.src, gulp.series([readme.task]));
  done();
});
