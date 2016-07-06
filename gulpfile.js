var gulp = require('gulp')
var gutil = require('gulp-util')
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

//requires browserify and vinyl-source-stream
var browserify = require('browserify')
var source = require('vinyl-source-stream')


//connnect task
gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 4000
	})
})

gulp.task('browserify', function(){
    return browserify('./app/app.js')
    .bundle()
		.on('error', function(e) {
			gutil.log(e);
		})
    .pipe(source('main.js'))

    .pipe(gulp.dest('./public/js/'));
})

gulp.task('sass', function(){
    return sass('sass/style.sass')
        .pipe(gulp.dest('public/css'))
})

gulp.task('foundation', function(){
    gulp.src(['node_modules/foundation-sites/dist/foundation.css'])
    .pipe(gulp.dest('public/css/'))
    gulp.src(['node_modules/foundation-sites/dist/foundation.js'])
    .pipe(gulp.dest('public/js/foundation/vendor/'))
    gulp.src(['node_modules/foundation-sites/vendor/jquery/dist/jquery.js'])
    .pipe(gulp.dest('public/js/foundation/vendor/'))
    gulp.src(['node_modules/what-input/what-input.js'])
    .pipe(gulp.dest('public/js/foundation/vendor/'))
    gulp.src(['node_modules/foundation-sites/dist/plugins/foundation.reveal.js'])
    .pipe(gulp.dest('public/js/foundation/'))
})

gulp.task('watch', function(){
    gulp.watch('app/**/*.js', ['browserify'])
    gulp.watch('sass/style.sass', ['sass'])
})

gulp.task('default', ['connect', 'watch'])
