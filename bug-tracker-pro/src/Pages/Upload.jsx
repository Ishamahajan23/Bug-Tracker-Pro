

import { useDispatch } from "react-redux";
import { setLogs } from "../redux/actions";
import { useRef } from "react";
import {useNavigate} from 'react-router-dom';
import "../App.css"

export function Upload() {

    const inputRef=useRef(null);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const file=e.target.files[0];
        const reader= new FileReader();
        reader.onload=()=>{
    
          try{
            const logs=JSON.parse(reader.result);
            dispatch(setLogs(logs));
            navigate('/logs');
            
          }catch(err){
             alert('Invalid JSON File')
          }
    
        }
        reader.readAsText(file);
    
           
      }




    return(
        <div className="upload">
              <h1>Upload JSON FILE</h1>
              <input type="file" ref={inputRef} accept='application/json' display="none" onChange={handleChange} />
              <button onClick={()=>inputRef.current.click()} >Upload Json</button>
        </div>
    )
}
