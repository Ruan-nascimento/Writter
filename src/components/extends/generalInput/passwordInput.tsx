import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge"

interface passwordProps extends React.HTMLAttributes<HTMLInputElement>{
  placeholder: string
}

export const PasswordInput = forwardRef<HTMLInputElement, passwordProps>((props, ref) => {

  const [show, setShow] = useState('password')

  const handleShowPassword = () => {
    if(show === 'password'){
      setShow('text')
    } else if(show === 'text'){
      setShow('password')
    }
  }

  return(
    <div className="w-full relative">
      <div onClick={() => handleShowPassword()} className="absolute right-5 top-2 cursor-pointer">
      {show === 'password' ? <FontAwesomeIcon icon={faEye} size="xs" color="white"/>
      : <FontAwesomeIcon icon={faEyeSlash} size="xs" color="white"/>}
      </div>

      <input
      {...props} ref={ref}
      className={twMerge("rounded-md p-2 pe-10 w-full bg-zinc-900 border border-transparent text-white outline-none duration-200 ease-in-out hover:bg-zinc-950 focus:border-teal-500 focus:bg-zinc-950", props.className)}
      type={show} />
    </div>
  )
})