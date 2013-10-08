module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist/*.js', 'test/testem.tap'],
    jshint: {
      all: ['src/*.js'],
      options: grunt.file.readJSON('jshintrc')
    },
    concat: {
      build: {
        files: {
          'dist/<%= pkg.name %>.js': [
            'src/superb.js',
            'src/impressive.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    testem: {
      options: {
        launch_in_ci: ['PhantomJS']
      },
      'spec/testem.tap': ['spec/*.html']
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          junit: {
            path: 'output/testresults'
          }
        }
      },
      istanbul: {
        src:'src/**/*.js',
        options:{
          specs: 'spec/*Spec.js',
          helpers: 'spec/*Helper.js',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'output/coverage/coverage.json',
            report: [
           //   {type: 'html', options: {dir: 'output/coverage'}},
              {type: 'lcov', options: {dir: 'output/coveragelcov'}},
              {type:'text-summary'}
            ]
          }
        }
      }
    },
    plato: {
      options: {
        title: 'Awesome Project',
        jshint: grunt.file.readJSON('jshintrc')
      },
      metrics: {
        files: {
          'dist/metrics': [ 'src/*.js' ]
        }
      }
    },
    jsduck: {
      main: {
          // source paths with your code
          src: [
              'src'
          ],

          // docs output dir
          dest: 'docs',

          // extra options
          options: {
              'builtin-classes': false,
              'warnings': ['-no_doc', '-dup_member', '-link_ambiguous'],
              'external': ['XMLHttpRequest']
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-testem');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-jsduck');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'testem', 'clean', 'jasmine']);
  grunt.registerTask('jenkins', ['jshint', 'testem', 'clean', 'jasmine', 'plato', 'jsduck', 'concat', 'uglify']);

};
