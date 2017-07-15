// Gulp.js configuration
var gulp = require('gulp');
var jslint = require('gulp-jslint');

// Linting can be done for all the js files.
//This is an attempt to show linting for all the controllers/
gulp.task('lint', function() {
    return gulp.src('public/js/controllers/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});

// Watch Files For Changes and perform tasks which are kept
//on watch like 'lint' below
gulp.task('watch', function() {
    gulp.watch('public/js/controllers/*.js', ['lint']);
});

//This declares the tasks which we want gulp command to run.
gulp.task('default', ['lint', 'watch']);
