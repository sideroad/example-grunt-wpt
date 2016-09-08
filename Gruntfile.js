/*
 * grunt-wpt
 * https://github.com/sideroad/grunt-wpt
 *
 * Copyright (c) 2013 sideroad
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['pages'],
    },

    // Configuration to be run (and then tested).
    wpt: {
      options: {
        locations: ['Dulles_MotoG:Motorola G - Chrome', 'Dulles_IE11'],
        runs: 2,
        key: process.env.WPT_API_KEY,
        timeout: 3600
      },
      sideroad: {
        options: {
          url: [
            'http://sideroad.secret.jp/',
            'http://sideroad.secret.jp/articles/',
            'http://sideroad.secret.jp/plugins/'
          ]
        },
        dest: 'pages/sideroad/'
      },
      github: {
        options: {
          url: [
            'http://github.com/',
            'http://github.com/sideroad/',
          ]
        },
        dest: 'pages/github/'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadNpmTasks('grunt-wpt');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['wpt']);

};
