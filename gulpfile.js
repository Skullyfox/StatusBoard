const   gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        csso = require('gulp-csso'),
        babelify = require('babelify'),
        uglify = require('gulp-uglify'),
        concat = require('gulp-concat'),
        browserify = require('gulp-browserify'),
        notify = require('gulp-notify'),
        gulpIf = require('gulp-if'),
        runSequence = require('run-sequence').use(gulp),
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

const   prod = process.env.NODE_ENV === 'production',
        opts = {
            entries: './js/app.js',
            debug: true,
            cache: {},
            transform: [
                babelify.configure({
                    presets: ["env"],
                })
            ]
        };

gulp.task('build-dev',() => runSequence('sass', 'js', 'browserSync', 'watch'));

gulp.task('build-prod',() => runSequence('sass', 'js'));

gulp.task('default', [prod ? 'build-prod' : 'build-dev']);

gulp.task('sass', () =>{
    return gulp.src(['src/styles/app.sass'])
        .pipe(sass().on('error',sass.logError))
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(gulpIf(prod, csso()))
        .pipe(gulp.dest('assets/css'))
        .pipe(gulpIf(!prod, notify({
            title: "Compilation SASS",
            message: "Compilation des fichiers SASS réalisé avec Succés !"
        })))       
});

gulp.task('js', () => {
    return gulp.src(['src/js/'])
        .pipe(browserify(opts))
        .pipe(gulpIf(prod, uglify()))
        .pipe(concat("app.js"))
        .pipe(gulp.dest('assets/js'))
        .pipe(gulpIf(prod, notify({
            title: "Build Success",
            message: "Build de production réalisé avec succés !"
        })))
        .pipe(gulpIf(!prod, notify({
            title: "Compilation JS",
            message: "Compilation des fichiers JS réalisé avec Succés !"
        })))
});

gulp.task('browserSync', function(){
    browserSync({
        server: {
            baseDir: './'
        },
    })
});

gulp.task('watch', () => {
        gulp.watch('src/styles/**/*', ['sass']);
        gulp.watch('src/js/**/*.js', ['js']);
        gulp.watch(['index.html','assets/**/*'], browserSync.reload);
});