var 
	gulp = require("gulp"),
	livereload = require("gulp-livereload");

gulp.task("reload-css", function(){
	gulp.src("./src/*.css")
	.pipe(livereload());

});
gulp.task("reload-html", function(){
	gulp.src("./src/*.html")
	.pipe(livereload());
	
});
gulp.task("reload-js", function(){
	gulp.src("./src/*.js")
	.pipe(livereload());
	
});

gulp.task("default", function(){
	livereload.listen();
	gulp.watch("./src/*", gulp.parallel('reload-css','reload-html','reload-js','default'));
	
});