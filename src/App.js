import React ,{useState,useEffect} from 'react';
import { flushSync } from 'react-dom';
import './App.css'
import RecordVedio from './Component/recordVedio';
import UploadVedio from './Component/uploadVedio';
function App() {

  const [showRecord,setVRecord]=useState(false)
 
return(
  <div>

      <h1>vedio upload</h1>
      <UploadVedio/>
      <br/><br/><br/>

      <h1>WebCam</h1>
     <button onClick={()=>setVRecord(true)}>start Web Cam</button>
        { showRecord && <RecordVedio/> }
      
      
  </div>
  );
}

export default App;
