var gulp = require('gulp');
var uglify = require('gulp-uglify');

var paths = {
	src:'./src/',
	dest:'./dest/'	
};

// The default task (called when you run `gulp` from cli)
gulp.task('default',['js','watch']);

gulp.task('js',function(){
	gulp.src(paths.src +'**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest));
});

gulp.task('watch',function(){
	gulp.watch(paths.src + '**/*.js',['js']);
});
