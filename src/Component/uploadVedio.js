
import React,{useState} from 'react';

function UploadVedio() {

    const [showFile,setShow]=useState(false)
    const [file,setFile]=useState('')
    const [fileName,setFileName]=useState('')
    const [fileType,setfileType]=useState('')

    const changeFunction=(e)=>{
        setShow(true)
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name)
        setfileType(e.target.files[0].type)
        // var reader = new FileReader();
        //  reader.readAsDataURL(file);
        
       }
return(
  <div>
   <input type="file" name="vedio" accept="video/*" onChange={(e)=>changeFunction(e)}/>
      <br/>
      {/* {showFile && <video width="100%" controls autoPlay loop>
          <source src={fileName} type={fileType} />
       </video> } */}
  </div>
  );
}

export default UploadVedio;


// import { Component } from "react"
// class UploadVedio extends React.Component{

//     state={
//         file: '',
//     fileToUpload: '',
//     fileUploadErr:{ state: false, msg: '' },
//     }
//     handlePictureUpload = (e) => {
//         e.preventDefault();
//         if (e.target.files[0] && typeof (e.target.files[0]) != "undefined") {
//             let fileTypeErr=false;
//             let fileDimensionErr=false;
//             const file = e.target.files[0];
//             // var pattern = /image-*/;
//             var pattern =/[\/](jpg|png|jpeg)$/i;;
//             console.log('file type', file, file.type)
//             if (!file.type.match(pattern)) {
//                 fileTypeErr=true;
//             }
//             var reader = new FileReader();
//             reader.readAsDataURL(file);
//             const classContext=this;
//             reader.onload = function (e) {
//                 var image = new Image();
//                 image.src = e.target.result;
//                 image.onload = function () 
//                 {
//                     var height = this.height;
//                     var width = this.width;
//                     console.log('width', this.width, 'height', this.height)
//                     if (height < 240 || width < 240) 
//                     {
//                         fileDimensionErr=true;
//                     }
//                     if(fileTypeErr || fileDimensionErr)
//                     {
//                         const msg=`Invalid file ${fileTypeErr?'type':''} ${(fileTypeErr&&fileDimensionErr)?'and':''} ${fileDimensionErr?'dimension':''}`
//                         classContext.setState({
//                         fileUploadErr: { state: true, msg }
//                         });
//                     }
//                     else
//                     {
//                         classContext.setState({
//                         file: URL.createObjectURL(file),
//                         fileToUpload: file,
//                         fileUploadErr: { state: false, msg: '' }
//                         });
//                     }
//                 };
//             }
//         }
//     };
//     render(){
//     return(
//         <div className='image_container_property'>
//         <div className="profile-image-container">
//        <div className="profile-image">
//            <img alt="profile"
//             src={this.state.file ? this.state.file : null }
//             />
//        </div>
//        <div className="upload-container">
//            <label className="upload-btn" htmlFor="uploadProfileImage">
//            upload
//            </label>
//            <input
//            id="uploadProfileImage"
//            name="uploadProfileImage"
//            style={{ display: 'none' }}
//            type="file"
//            accept="vedio/*"
//            onChange={this.handlePictureUpload}
//            />
          
//        </div>
//      </div>
  
//      </div>
//     )}
// }
// export default UploadVedio;
