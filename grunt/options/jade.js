'use strict';

module.exports = {
    compile: {
      options: {
          client: false,
          pretty: true
      },
      files: [ {
        cwd: 'src/',
        src: '**/*.jade',
        dest: '.build/',
        expand: true,
        ext: '.html',
        extDot: 'last'
      } ]
  }
};
