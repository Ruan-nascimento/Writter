import { ReactNode } from "react"

interface MessageProps {children: ReactNode}

export const ErrorValidation = ({children}:MessageProps) => {
  return(
    <div className="flex items-center justify-center p-1 rounded bg-red-700 text-white">{children}</div>
  )
}