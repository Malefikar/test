import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import squoosh from 'gulp-libsquoosh';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import del from 'del';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
     pipe(gulp.dest('source/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

const html = () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('build'));
}

  // Scripts

const scripts = () => {
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('build/js'))
    .pipe(browser.stream());
  }

  // Images

const copyImages = () => {
  return gulp.src('source/img/**/*.{png,jpg}')
  .pipe(gulp.dest('build/img'))
}

  // SVG

  const svg = () =>
  gulp.src(['source/img/*.svg', '!source/img/icons/*.svg'])
    .pipe(svgo())
    .pipe(gulp.dest('build/img'));

const sprite = () => {
  return gulp.src('source/img/*.svg')
    .pipe(svgo())
    .pipe(svgstore({
      inlineSvg: true
  }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/img'));
  }

    // Copy

const copy = (done) => {
  gulp.src([
    'source/fonts/*.{woff2,woff}'
  ], {
  base: 'source'
  })
    .pipe(gulp.dest('build'))
    done();
  }

  // Clean

const clean = () => {
  return del('build');
  };

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

  // Reload

  const reload = (done) => {
    browser.reload();
    done();
    }

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  gulp.watch('source/*.html', gulp.series(html, reload));
}


export const build = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
  ),
  );

  // Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    sprite,
  ),
  gulp.series(
    server,
    watcher
  ));
