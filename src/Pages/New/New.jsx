import { useState } from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Sidebar } from '../../Components/Sidebar/Sidebar';
import './New.scss';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
export const New = ({inputs, title}) => {

  const [file, setFile] = useState('')
  // create file state to store img 
  return (
    <div className='new' >
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>{title}</h1>

        </div>
        <div className="bottom">

          <div className="left">
            <img src={file ? URL.createObjectURL(file) : 'prev img url'} alt="" />
            {/* here src={file ? URL.createObjectURL(file) : 'prev img url'} which first check if new file is creted or not if not then it set to one default one  */}
          </div>

          <div className="right">
            <form>

              <div className="formInput" key={inputs.id}>
                <label htmlFor='file' >Image : <DriveFolderUploadIcon className='icon' /></label>
                <input type="file" onChange={e => setFile(e.target.files[0] )}  id='file' style={{display:'none'}} />
              </div>
              {/* here e.target.files[0] to take only one image  */}
              {inputs.map((input) =>(
                <div className="formInput">
                <label >{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              

              <button>Send</button>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
