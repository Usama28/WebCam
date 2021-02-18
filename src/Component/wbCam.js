import React ,{useState,useEffect} from 'react';
import Webcam from "react-webcam";

function WebCam() {

  useEffect(()=>{
      navigator.getMedia = ( navigator.getUserMedia || // use the proper vendor prefix
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

      navigator.getMedia({video: true}, function() {
      // webcam is available
      alert('Web Cam starts')
      }, function() {
      // webcam is not available
      alert('Web cam not working')
      });
  },[])

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
      const webcamRef = React.useRef(null);

      var stream=null
      const stopFunction = () => {
       // stop only audio
      // localStream.getAudioTracks()[0].stop();
      // // stop only video
      // localStream.getVideoTracks()[0].stop();
      };
return(
  <div>
    {/* <button onClick={stopFunction}>stop</button><br/> */}
    <div id='vedio'>
      <Webcam audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}/>;
    </div>
  </div>
  );
}

export default WebCam;