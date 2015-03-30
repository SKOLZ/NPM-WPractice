'use strict';
module.exports = function(grunt) {
  var appFiles = grunt.file.readJSON('appjs.json').map(function (filepath) {
    return '.tmp/js/' + filepath;
  });
  var vendorFiles = '.tmp/vendor.js';
  return {
    compile: {
      files: {
        '.build/js/app.min.js': appFiles,
      }
    },
    vendor: {
      files: {
        '.build/js/libs.min.js': vendorFiles
      }
    }
  };
};
