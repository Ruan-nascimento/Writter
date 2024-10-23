import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IconButtonProps {
  icon: IconProp
  size: SizeProp
}

export const IconButton = ({icon, size}:IconButtonProps) => {
  return(
    <FontAwesomeIcon icon={icon} size={size}/>
  )
}