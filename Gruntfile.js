module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      // Define tasks
      babel: {
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        },
        dist: {
          files: {
            'dist/stopwatch.js': 'src/Stopwatch.js'
          }
        }
      },
      uglify: {
        dist: {
          files: {
            'dist/stopwatch.min.js': ['dist/stopwatch.js']
          }
        }
      },
      watch: {
        scripts: {
          files: ['src/**/*.js'],
          tasks: ['babel', 'uglify'],
          options: {
            spawn: false,
          },
        },
      },
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    // Register tasks
    grunt.registerTask('default', ['babel', 'uglify', 'watch']);
  };
  