const { stream } = require('browser-sync');
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')



gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss')
        // Сжимаю и перевожу на css
        .pipe(sass({ outputStyle: 'compressed' }))
        // переименовываю 
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('sassMedia', function () {
    return gulp.src('./app/scss/media.scss')
        // Сжимаю и перевожу на css
        .pipe(sass({ outputStyle: 'compressed' }))
        // переименовываю 
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('js', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

// Конкатинация сторонних библиотек как на js так и на css

gulp.task('style', function () {
    return gulp.src([
        'node_modules/slick-carousel/slick/slick.css',
        'node_modules/normalize.css/normalize.css',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/rateyo/src/jquery.rateyo.css',
        // 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
        'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css',
    ])

        .pipe(concat('libs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'))
});

gulp.task('script', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.js',
        'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        // 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    ])

        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
});



gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('app/scss/media.scss', gulp.parallel('sassMedia'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('js'));
});

// Устанавливаю по дефолту имя, теперь обращаться можно просто по gulp и запускаю сразу несколько процессов
gulp.task('default', gulp.parallel('sass', 'sassMedia', 'watch', 'browser-sync', 'script', 'style'))
