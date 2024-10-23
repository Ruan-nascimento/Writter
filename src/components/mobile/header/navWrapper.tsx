import { ReactNode } from "react"

interface HeadNavWrapperProps {
  children: ReactNode
}

export const HeadNavWrapper = ({children}:HeadNavWrapperProps) => {
  return(
    <nav
    className="w-full h-full p-2 flex gap-2"
    >
      {children}
    </nav>
  )
}