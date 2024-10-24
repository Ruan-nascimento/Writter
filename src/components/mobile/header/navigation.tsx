import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

interface HeadNavigatorProps {
  icon: IconDefinition,
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '4x' | '5x' | '6x',
  color?: string,
  loc?: string,
  mod: React.Dispatch<React.SetStateAction<boolean>>
  modR: boolean,
  active: boolean
}

export const HeadNavigator = ({active, mod, modR, loc='/', icon, size, color='#CCFBF1'}:HeadNavigatorProps) => {

  const [hovered, setHovered] = useState(false)

  return(
    <Link
    onClick={() => mod(!modR)}
    to={loc}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className={`rounded-full h-full flex-1 flex items-center cursor-pointer justify-center hover:bg-zinc-900 active:bg-zinc-800 ${active && 'bg-zinc-900'}`}
    ><FontAwesomeIcon className={`${hovered && 'text-teal-700'}`} icon={icon} size={size} color={color}/></Link>
  )
}