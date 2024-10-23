import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface HeadNavigatorProps {
  icon: IconDefinition,
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x',
  color?: string
}

export const HeadNavigator = ({icon, size, color='#CCFBF1'}:HeadNavigatorProps) => {

  const [hovered, setHovered] = useState(false)

  return(
    <a
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="rounded-full h-full flex-1 flex items-center cursor-pointer justify-center hover:bg-zinc-900 active:bg-zinc-800"
    ><FontAwesomeIcon className={`${hovered && 'text-teal-700'}`} icon={icon} size={size} color={color}/></a>
  )
}