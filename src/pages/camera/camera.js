import React from 'react';
import './camera.css';

const Camera = () => {
  function getUserMedia(constraints) {
    if (navigator.mediaDevices) {
      return navigator.mediaDevices.getUserMedia(constraints);
    }

    const legacyApi = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    if (legacyApi) {
      return new Promise(function (resolve, reject) {
        legacyApi.bind(navigator)(constraints, resolve, reject);
      });
    }
  };

  function getStream(type) {
    if (!navigator.mediaDevices && !navigator.getUserMedia && !navigator.webkitGetUserMedia &&
      !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
      alert('User Media API not supported.');
      return;
    }

    const constraints = {};
    constraints[type] = true;
    getUserMedia(constraints)
      .then(function (stream) {
        const mediaControl = document.querySelector(type);

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
  };
  return (
    <div>
      <div className="camera">
        <video width="320" height="240" onClick={getStream('video')} controls autoPlay></video>
        <audio onClick={getStream('audio')} controls></audio>
      </div>
    </div>
  );
};

export default Camera;