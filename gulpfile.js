const gulp = require('gulp');
const tsPipeline = require('gulp-webpack-typescript-pipeline');

tsPipeline.registerBuildGulpTasks(
  gulp,
  {
    entryPoints: {
      'index': __dirname + '/src/index.ts'
    },
    outputDir: __dirname + '/dist',
    isNodeLibrary: true
  }
);

gulp.task('default', ['tsPipeline:watch']);
