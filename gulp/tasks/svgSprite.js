const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');
const streamqueue = require('streamqueue');

module.exports = function svgSprite() {
    return streamqueue(
        { objectMode: true },
        gulp.src(['src/images/**/*.svg', '!src/images/noRemoveStrokeAndFill/**/*.svg'])
        .pipe(
            svgmin({
                js2svg: {
                    pretty: true
                },
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false
                    }, {
                        name: 'removeAttrs',
                        params: {
                            attrs: ['fill', 'stroke', 'style']
                        }
                    }
                ],
            })
        ),
        gulp.src('src/images/noRemoveStrokeAndFill/**/*.svg').pipe(
            svgmin({
                js2svg: {
                    pretty: true
                },
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: false
                    }
                ],
            })
        )
    )
    .pipe(
        svgstore({
            inlineSvg: true
        })
    )
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('build/images'));
};