// Gulp.js configuration
var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('lint', function() {
    return gulp.src('public/js/controllers/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/js/controllers/*.js', ['lint']);
});


gulp.task('default', ['lint', 'watch']);
