import './password.css'
import { FaEyeSlash } from "react-icons/fa6";
export default function InputPassword(){
    return(
        <div className='password'>
            <input type="text" placeholder ="Your Password "/>
            <FaEyeSlash size={17} className='eyeicon'/>
        </div>
        
    )
}