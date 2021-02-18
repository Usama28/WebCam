import React ,{useState,useEffect} from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import WebCam from './wbCam'
function RecordVedio() {

    const [showVedio,setShowVedio]=useState(false)
  // record from webcam
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });
return(
  <div>
   
        <WebCam/>

         {/* webcam record */}
       <p>Web Cam Status : <span style={{fontWeight:'bold'}}>{status}</span></p>
      <button onClick={startRecording}>Start Recording</button>
      <span onClick={()=>setShowVedio(true)}><button onClick={stopRecording}>Stop Recording</button></span><br/>
     {showVedio && <div>
        Recorded Vedio : <video src={mediaBlobUrl} controls autoplay loop />
       </div>}
      
  </div>
  );
}

export default RecordVedio;