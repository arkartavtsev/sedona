'use strict';


(function () {
  var player = document.querySelector('.player');

  if (player) {
    var video = player.querySelector('.player__frame');

    var controlsPane = player.querySelector('.player__controls-pane');
    var playbackBtn = controlsPane.querySelector('.player__control--playback');
    var soundBtn = controlsPane.querySelector('.player__control--sound');
    var fullscreenBtn = controlsPane.querySelector('.player__control--fullscreen');

    var timeline = player.querySelector('.player__timeline');
    var timeProgress = timeline.querySelector('.player__time-progress');
    var timePointer = timeline.querySelector('.player__time-pointer');


    var togglePlayback = function () {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    var showPlayIcon = function () {
      playbackBtn.classList.remove('player__control--play');
      playbackBtn.classList.add('player__control--pause');
    };

    var showPauseIcon = function () {
      playbackBtn.classList.remove('player__control--pause');
      playbackBtn.classList.add('player__control--play');
    };


    var toggleSound = function () {
      if (video.muted) {
        video.muted = false;
      } else {
        video.muted = true;
      }
    };

    var toggleSoundBtnIcon = function () {
      if (video.muted) {
        soundBtn.classList.remove('player__control--sound-on');
        soundBtn.classList.add('player__control--sound-off');
      } else {
        soundBtn.classList.remove('player__control--sound-off');
        soundBtn.classList.add('player__control--sound-on');
      }
    };


    var updateTimeProgress = function () {
      console.log(video.currentTime);
      var position = (video.currentTime / video.duration * 100);

      timeProgress.style.width = position + '%';
      timePointer.style.left = position + '%';
    };


    var onTimePointerMouseDown = function (downEvt) {
      var cursorPosition = downEvt.clientX;

      var onTimePointerMouseMove = function (moveEvt) {
        var timelineEdge = {
          left: timeline.getBoundingClientRect().left,
          right: timeline.getBoundingClientRect().right,
        };

        cursorPosition = moveEvt.clientX;

        if (cursorPosition < timelineEdge.left) {
          video.currentTime = 0;
        } else if (cursorPosition > timelineEdge.right) {
          video.currentTime = video.duration;
        } else {
          video.currentTime = (cursorPosition - timelineEdge.left) / timeline.offsetWidth * video.duration;
          console.log(video.currentTime);
        }
      };

      var onTimePointerMouseUp = function () {
        document.removeEventListener('mousemove', onTimePointerMouseMove);
        document.removeEventListener('mouseup', onTimePointerMouseUp);
      };

      document.addEventListener('mousemove', onTimePointerMouseMove);
      document.addEventListener('mouseup', onTimePointerMouseUp);
    };


    var isFullScreen = function () {
      return document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement;
    };

    var openFullscreen = function () {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
    };

    var togglePlayerControls = function () {
      if (isFullScreen()) {
        video.controls = true;
      } else {
        video.controls = false;
      }
    };


    playbackBtn.addEventListener('click', togglePlayback);
    soundBtn.addEventListener('click', toggleSound);
    fullscreenBtn.addEventListener('click', openFullscreen);

    video.addEventListener('timeupdate', updateTimeProgress);

    timePointer.addEventListener('mousedown', onTimePointerMouseDown);

    video.addEventListener('play', showPlayIcon);
    video.addEventListener('pause', showPauseIcon);
    video.addEventListener('volumechange', toggleSoundBtnIcon);

    document.addEventListener('fullscreenchange', togglePlayerControls);
    document.addEventListener('webkitfullscreenchange', togglePlayerControls);
    document.addEventListener('mozfullscreenchange', togglePlayerControls);
    document.addEventListener('msfullscreenchange', togglePlayerControls);
    document.addEventListener('MSFullscreenChange', togglePlayerControls);

    // iPhone fullscreen exit bug fix
    video.addEventListener('webkitendfullscreen', function () {
      video.controls = false;
    });


    video.controls = false;
    controlsPane.hidden = false;
    controlsPane.classList.add('player__controls-pane--js');
  }
})();
