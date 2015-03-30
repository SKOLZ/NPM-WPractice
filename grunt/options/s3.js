'use strict';

module.exports = function(grunt) {
  var aws = grunt.file.readJSON('aws-credentials.json');
  return {
    options: {
      accessKeyId: aws.accessKeyId,
      secretAccessKey: aws.secretAccessKey,
      region: 'us-east-1'
    },
    stage: {
      options: {
        bucket: ''
      },
      cwd: '.build/',
      src: '**'
    },
    prod: {
      options: {
        bucket: 'www.woloxamerica.com'
      },
      cwd: '.build/',
      src: '**'
    }
  };
};
