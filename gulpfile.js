const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        csso = require('gulp-csso'),
        uglify = require('gulp-uglify'),
        browserSync = require('browser-sync');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('sass', () =>{
    return gulp.src(['src/styles/app.sass'])
        .pipe(sass().on('error',sass.logError))
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(csso())
        .pipe(gulp.dest('assets/css'))        
});

gulp.task('js', () => {
    return gulp.src(['src/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('dev', ['sass','js','browserSync'], () => {
        gulp.watch('src/styles/**/*', ['sass']);
        gulp.watch('src/js/**/*.js', ['js']);
        gulp.watch(['index.html','assets/**/*'], ['browserSync']);
});