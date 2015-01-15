'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jslint: {
      client: {
        src: [
          'out/**/*.js'
        ],
        exclude: [
          'out/scripts/bootstrap.js',
          'out/scripts/jquery.js'
        ],
        directives: {
          indent: 2
        },
        option: {
          failOnError: false
        }
      },
      server: {
        src: [
          'src/**/*.js',
          '*.js',
          '*.json'
        ],
        exclude: [
          'out/**/*.js',
          'src/files/scripts/bootstrap.js',
          'src/files/scripts/jquery.js'
        ],
        directives: {
          node: true,
          indent: 2
        },
        option: {
          failOnError: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jslint');

  // Default task(s).
  grunt.registerTask('default', ['jslint']);

};
