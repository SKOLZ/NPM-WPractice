'use strict';

module.exports = function(grunt) {
    grunt.registerTask('build', function gruntTaskBuild(target){
        // Set defaults
        var isDevEnv = (target === 'dev'),
            type = isDevEnv && 'devbuild' || 'build';

        if (target === 'dev') {
            grunt.option('env', 'development');
        } else {
            grunt.option('env', 'production');
        }

        grunt.task.run('clean:build');
        grunt.task.run('clean:temp');

        grunt.task.run('less:'+type);
        grunt.task.run('bower_concat');
        grunt.task.run('jade');
        grunt.task.run('coffee');
        grunt.task.run('uglify');
        grunt.task.run('copy:templates');
        grunt.task.run('copy:css');
        grunt.task.run('copy:images');
        grunt.task.run('copy:videos');
        grunt.task.run('copy:seo');
        grunt.task.run('jshint:all');
    });
};
