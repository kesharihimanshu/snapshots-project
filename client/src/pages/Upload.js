import React, {useState} from 'react';

const Upload=()=>{
const [fileInputState,setFileInputState]= useState('');
const [previewSource,setpreviewSource]= useState('');

const [selectedFile,setSelectedFile]=useState();

const handleFileInputChange= e =>{
   const file=e.target.files[0];
   previewFile(file)
   setSelectedFile(file);
   setFileInputState(e.target.value);

}
const handleSubmitFile= e=>{
e.preventDefault();
if(!selectedFile) return ;

const reader =new FileReader(selectedFile);
reader.readAsDataURL(selectedFile);
reader.onloadend=()=>{
    UploadImage(reader.result)
}
reader.onerror=()=>{
    console.log('Error');
}

}
const UploadImage = async (image)=>{
    try{
   await fetch('/api/upload',{
       method:'POST',
       body:JSON.stringify({data: image}),
       headers:{'content-Type':'application/json'}
   })
   setFileInputState('');
   setpreviewSource('');
    }catch(error){
        console.log(error)

    }
}
const previewFile=file=>{
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=()=>{
        setpreviewSource(reader.result)
    }
}

    return(
        <div className='bg1'>
               <h3 className='text-light'>Upload your picture</h3>
               <form onSubmit={handleSubmitFile} className="form">
                   <input 
                   id="fileInput"
                   type="file"
                   name="image"
                   onChange={handleFileInputChange}
                   value={fileInputState}
                   className="form-input form-label "
                   multiple
                   />
                   <button className='btn' type='submit'>Submit</button>
                 
               </form>
               {previewSource && (
                   <img src={previewSource} alt="chosen" style={{height:'300px'}} />
               )}
        </div>
    )
}

export default Upload;