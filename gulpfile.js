const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("app/styles.scss") //'*.scss' for all sass files
    .pipe(sass())
    .pipe(dest("css"));
}
function watchTask() {
  watch(["app/styles.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
