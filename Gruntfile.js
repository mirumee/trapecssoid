module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jade: {
      options: {
        pretty: true
      },
      compile: {
        files: {
          'index.html': ['demo/jade/index.jade']
        }
      }
    },
    sass: {
      options: {
        includePaths: ['bower_components', 'lib']
      },
      dist: {
        files: {
          'static/style.css': 'demo/scss/style.scss'
        }
      }
    },
    watch: {
      options: {
        atBegin: true,
        interrupt: false,
        livereload: true,
        spawn: false
      },
      jade: {
        files: ['demo/jade/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['demo/**/*.scss', 'lib/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['jade', 'sass']);
};
