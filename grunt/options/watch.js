'use strict';

module.exports = {
    images: {
        files: [
            'src/img/dest/*.*'
        ],
        tasks: ['newer:copy:images']
    },
    less: {
        files: [
            'src/css/**/*.less',
            'src/components/**/*.less'
        ],
        tasks: ['less:devbuild']
    },
    jadejs: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
    },
    coffee: {
      files: ['src/js/**/*.coffee'],
      tasks: ['coffee','uglify:compile','newer:jshint:all']
    },
//    grunt: {
//        files: [
//            'Gruntfile.js',
//            'grunt/**/*.js'
//        ],
//        tasks: ['build:dev']
//    },
    templates: {
        files: [
            'src/components/**/*.html'
        ],
        tasks: ['newer:copy:templates']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            '.build/**/*.*'
        ]
    }
};
