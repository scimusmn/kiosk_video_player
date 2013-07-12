/**
 * Video playback functionality.
 * Allows video selection from the kiosk start page.
*/

$(function() {

 var $videoOption = $('.videoBox'),
      videoPlayer = videojs('videoPlayer'),
      // Path is relative to index.html
      videoPath = '../assets/videos/';

  // Unbind video.js default behavior of rewinding the video when it ends
  // We're providing our own "ended" event.
  videoPlayer.off('ended', videoPlayer.ended);
  videoPlayer.off('ended', function() {
    if (this.options.loop) {
      this.currentTime(0);
      this.play();
    } else {
      this.pause();
    }
  });

  // Initialize the videojs plugin.
  videoPlayer.ready(function() {

    // Set the video source when one is selected
    $videoOption.click(function() {
      var video = $(this).attr('data-video-source');

      console.log('Playing ' + videoPath + video);

      // Change the video source
      videoPlayer.src(videoPath + video);

      // Hide the buttons, show the video
      $('.wrapper').fadeOut(500, function() {
        $('.hidden').fadeIn('fast', function() {
          videoPlayer.play();
        });
      });

      // Back button returns you to the video options and stops the video
      $('#back').click(function() {
        restartKiosk();
      });

    });

    // When the video ends, go back to the start page
    this.on('ended', function(){
      restartKiosk(this);
    });

  });

  /**
   * Restart the kiosk:
   * Fade out the video screen, then reload the page.
   */
  var restartKiosk = function() {
    $('.hidden').fadeOut('fast', function() {
      location.reload();
    });
  }

});
