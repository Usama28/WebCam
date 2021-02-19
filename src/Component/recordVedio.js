import React ,{useState,useEffect} from 'react';
import { useReactMediaRecorder } from "react-media-recorder";
import WebCam from './wbCam'
function RecordVedio() {

    const [showVedio,setShowVedio]=useState(false)
    const [recordVedioURL,setVedioURL]=useState(false)
    
    // record from webcam
    const {
      status,
      startRecording,
      stopRecording,
      mediaBlobUrl,
    } = useReactMediaRecorder({ video: true });

    // base 64 conversion
    const baseFunction=function(){
      console.log(mediaBlobUrl)
      setVedioURL(btoa(mediaBlobUrl))
    }

return(
  <div>
   
        <WebCam/>

         {/* webcam record */}
       <p>Web Cam Status : <span style={{fontWeight:'bold'}}>{status}</span></p>
       <button onClick={startRecording}>Start Recording</button>
       <span onClick={()=>setShowVedio(true)}><button onClick={stopRecording}>Stop Recording</button></span><br/>
      
       {showVedio && <div>
        Recorded Vedio : <video src={mediaBlobUrl} controls autoplay loop />
        <br/>

         {/* base 64 */}
         <button onClick={baseFunction}>Generate base 64 url</button>
        <p><span style={{fontWeight:'bold'}}>Base 64 URL: </span>{recordVedioURL}</p>
        <p id='base-url'></p>
       </div>}

       
  </div>
  );
}

export default RecordVedio;