module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jade: {
      options: {
        pretty: true
      },
      compile: {
        files: {
          'index.html': ['app/jade/index.jade']
        }
      }
    },
    sass: {
      options: {
        includePaths: ['bower_components', 'assets/scss']
      },
      dist: {
        files: {
          'static/style.css': 'app/scss/style.scss'
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
        files: ['app/jade/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['jade', 'sass']);
};
