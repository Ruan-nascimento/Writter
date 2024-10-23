import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ButtonHTMLAttributes } from "react"

interface InteractButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconDefinition,
  likes?: number,
  color?: string,
  labelColor?: string
}

export const InteractButtons = ({labelColor="text-red-500", color="#EF4444", icon, likes, ...rest}:InteractButtonsProps) => {
  return(
    <div className="flex gap-2 items-center">
      <button {...rest} className="w-8 h-8 rounded-full hover:bg-neutral-900">
        <FontAwesomeIcon icon={icon} size="xl" color={color}/>
      </button>
      <span className={`${labelColor} text-xs`}>{likes ? likes : ''}</span>
    </div>
  )
}