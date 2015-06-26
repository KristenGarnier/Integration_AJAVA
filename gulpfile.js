var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('sass', function () {
    gulp.src('./assets/SCSS/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', ['watch'], function(){

});

gulp.task('watch', ['sass'], function() {

    browserSync({
        proxy: "localhost/intAJAVA/utilisateur.html"
    });

    gulp.watch("assets/SCSS/*.scss", ['sass']).on('change', reload);
    gulp.watch("*.html").on('change', reload);
});