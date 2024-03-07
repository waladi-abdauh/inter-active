import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

/*
    -- TOP LEVEL FUNCTIONS --
    gulp.task - Define tasks
    gulp.src - Points to files to use
    gulp.dest - Points to files to output
    gulp.watch - Watch files and folder for changes
*/

// Logs Message
gulp.task('message', function() { 
    return new Promise(function(resolve, reject) {
      console.log("Gulp is running...");
      resolve();
    });
});

// Copy all HTML
gulp.task('copyHTML', function() { 
    return new Promise(function(resolve, reject) {
      gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
      resolve();
    });
});

// Optimize image
gulp.task('imageMin', function() { 
    return new Promise(function(resolve, reject) {
      gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
      resolve();
    });
});

// Minify js
gulp.task('minify', function() { 
    return new Promise(function(resolve, reject) {
      gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
      resolve();
    });
});

// compile sass
gulp.task('sass', function() { 
    return new Promise(function(resolve, reject) {
      gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('dist/css'))
      resolve();
    });
});

gulp.task('default', gulp.series('copyHTML', 'imageMin', 'minify', 'sass'));

// Watch files and folder for changes
gulp.task('watch', function() { 
    return new Promise(function(resolve, reject) {
      gulp.watch('src/*.html', gulp.series('copyHTML'));
      gulp.watch('src/images/*', gulp.series('imageMin'));
      gulp.watch('src/js/*.js', gulp.series('minify'));
      gulp.watch('src/sass/*.scss', gulp.series('sass'));
      resolve();
    });
});