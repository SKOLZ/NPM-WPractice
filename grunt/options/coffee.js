'use strict';

module.exports = function(grunt) {
  return {
    glob_to_multiple: {
      expand: true,
      nonull: true,
      cwd: 'src/js/',
      src: ['*.coffee', '!config/*.coffee', 'config/<%= grunt.option("env") %>.coffee'],
      dest: '.tmp/js/',
      ext: '.js'
    }
  };
};
