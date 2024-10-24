import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { ButtonHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonCreatePostProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon: IconDefinition,
  text?: string
}

export const ButtonCreatePost = ({text, icon, ...rest}:ButtonCreatePostProps) => {
  return(
    <button {...rest} className={twMerge("flex items-center justify-center gap-4 rounded-md w-24 h-12 text-lg font-bold text-zinc-900 bg-teal-500 duration-200 ease-in-out hover:bg-teal-700 active:scale-90 active:bg-teal-300", rest.className)}>
      <FontAwesomeIcon className={twMerge('text-2xl text-zinc-900')} icon={icon} size="1x"/>
      {text}
    </button>
  )
}