import React from 'react';
import './audio.css'

const Audio = () => {

  function getUserMedia(constraints) {
    // if Promise-based API is available, use it
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }

    // otherwise try falling back to old, possibly prefixed API...
    var legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (legacyApi) {
      // ...and promisify it
      return new Promise(function (resolve, reject) {
        legacyApi.bind(navigator)(constraints, resolve, reject);
      });
    }
  }

  function getStream(type) {
    if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }

    var constraints = {};
    constraints[type] = true;

    getUserMedia(constraints)
      .then(function (stream) {
        var mediaControl = document.querySelector(type);

        if ('srcObject' in mediaControl) {
          mediaControl.srcObject = stream;
        } else if (navigator.mozGetUserMedia) {
          mediaControl.mozSrcObject = stream;
        } else {
          mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
        }

        mediaControl.play();
      })
      .catch(function (err) {
        alert('Error: ' + err);
      });
  }
  return (
    <div class="columns">
      <div class="column">
        {/* <p><button type="button">Grab video</button></p> */}
        <video width="320" height="240" onclick={getStream('video')} controls autoplay></video>
        {/* <p><button type="button">Grab audio</button></p> */}
        <audio onclick={getStream('audio')} controls></audio>
      </div>
    </div>
  );
};

export default Audio;