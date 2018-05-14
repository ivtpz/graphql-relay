import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import notice from 'gulp-notice';
import nodemon from 'gulp-nodemon';
import path from 'path';

gulp.task('clean', () => del(['dist/**/*', '!dist/', '!dist/.gitkeep']));

gulp.task('transpile', () =>
  gulp
    .src('src/**/*.js')
    .pipe(babel())
    .pipe(notice())
    .pipe(gulp.dest('dist'))
);

gulp.task('watch', () => gulp.watch('src/**/*.js', gulp.series('clean', 'transpile')));

gulp.task('nodemon', () => {
  const stream = nodemon({
    script: path.join(__dirname, 'dist/app.js'),
    watch: 'dist'
  }).on('crash', () => process.exit());
  return stream;
});

gulp.task('dev', gulp.series('clean', 'transpile', gulp.parallel('watch', 'nodemon')));

gulp.task('default', gulp.series('clean', 'transpile'));
