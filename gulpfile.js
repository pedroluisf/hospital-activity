var gulp = require("gulp"),
    $ = require("gulp-load-plugins")();

var config = {
    styles: {
        watch: "./src/styles/**/*.less",
        src: ["./src/styles/site.less", "./src/styles/freelancer.less"],
        dest: "./public/styles/"
    },
    scripts: {
        src: "./src/scripts/**/*.js",
        dest: "./public/scripts",
        configFile: "./src/scripts/config.js",
        baseUrl: "./public/scripts"
    }
};

gulp.task("dev:scripts", function() {
    return gulp
        .src(config.scripts.src)
        .pipe($.cleanDest(config.scripts.dest))
        .pipe(gulp.dest(config.scripts.dest));
});

gulp.task("dev:styles", function() {
    return gulp
        .src(config.styles.src)
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe($.sourcemaps.write())
        .pipe($.cleanDest(config.styles.dest))
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task("dev", gulp.parallel("dev:scripts", "dev:styles"));

gulp.task("dev:watch", gulp.series("dev", function() {
    gulp.watch(config.styles.watch, gulp.series("dev:styles"));
    gulp.watch(config.scripts.src, gulp.series("dev:scripts"));
}));

gulp.task("prod:scripts", function() {
    return gulp
        .src(config.scripts.src)
        .pipe($.requirejsOptimize({
            baseUrl: config.scripts.baseUrl,
            mainConfigFile: config.scripts.configFile
        }))
        .pipe($.cleanDest(config.scripts.dest))
        .pipe(gulp.dest(config.scripts.dest));
});

gulp.task("prod:styles", function() {
    return gulp
        .src(config.styles.src)
        .pipe($.less())
        .pipe($.autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe($.minifyCss())
        .pipe($.cleanDest(config.styles.dest))
        .pipe(gulp.dest(config.styles.dest));
});

gulp.task("prod", gulp.parallel("prod:scripts", "prod:styles"));
