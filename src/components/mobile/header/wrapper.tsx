import { ReactNode } from "react"

interface HeadWrapperProps {
  children: ReactNode
}

export const HeadWrapper = ({children}:HeadWrapperProps) => {
  return(
    <header
    className="w-full h-20 mt-auto bg-neutral-950 backdrop-blur-md backdrop-opacity-55 border-t border-zinc-600"
    >{children}</header>
  )
}