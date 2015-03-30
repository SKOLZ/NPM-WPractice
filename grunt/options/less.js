'use strict';

module.exports = function(grunt) {
    var appFiles = grunt.file.readJSON('css.json').map(function (filepath) {
        return 'src/css/' + filepath;
      });

    return {
        options: {
            strictImports: true
        },
        devbuild: {
            options: {
                dumpLineNumbers: 'comments'
            },
            files: {
                '.build/css/app.min.css': appFiles
            }
        },
        build: {
            options: {
                compress: true,
                cleancss: true
            },
            files: {
                '.build/css/app.min.css': appFiles
            }
        }
    };
};
