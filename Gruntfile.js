module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      kiosk_scripts: {
        files: {
          'build/js/kiosk_video_player.js': [
            'libs/jquery-2.0.3.min.js',
            'libs/video.js',
            'libs/handlebars.js',
            'src/js/video_kiosk.js',
            'src/js/screensaver.js',
            'src/content/history_colorado/hc_0425_pine_beetles.js'
          ]
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'build/theme/css/kiosk_video_player.css': [
            'src/themes/base/reset.css',
            'src/themes/base/video_kiosk.css',
            'src/themes/history_colorado/colorado.css',
            'src/themes/base/build.css'
          ]
        }
      }
    },
    smushit: {
      path: {
        src:['assets/images', 'assets/themes']
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSSMin plugin
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Image optimizer
  grunt.loadNpmTasks('grunt-smushit');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
