import { useState } from "react";
import { FaEdit } from "react-icons/fa";

export function Input({type, placeholder='', evite=false, full=false}) {

  const [disabled, setDisabled] = useState(true)
  const [modPlaceholder, setModPlaceholder] = useState(false)

  

  const handleDisable = () => {
    if(evite){
      setDisabled(true)
    } else {
      setDisabled(!disabled)
    }
  }

  return(
    <div className={`h-12 relative ${full ? 'w-full' : 'w-5pc'}`} title={placeholder}>
      <button onClick={e => handleDisable(e)} className={`${evite ? 'hidden' : 'absolute right-0 rounded-e-lg flex items-center justify-center bottom-0 w-10 h-12 outline-none duration-200 ease-in-out hover:bg-white'}`}><FaEdit size={20} color="gray" /></button>
      
      <input disabled={disabled} placeholder={placeholder} type={type} className={`w-full h-full p-3 pe-12 outline-transparent  rounded-lg duration-200 ease-in-out hover:bg-gray-900 focus:outline-light-yellow ${disabled ? 'cursor-not-allowed bg-slate-600 text-gray-400' : 'bg-gray-950 cursor-text'} `} />
    </div>
  )
}