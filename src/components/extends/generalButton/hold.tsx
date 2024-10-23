import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface HoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const HoldButton = ({children, ...rest}: HoldButtonProps) => {
  return(
    <button {...rest} className={twMerge("flex gap-4 items-center justify-center w-44 h-10 bg-teal-600 border-none outline-none rounded-md text-white font-semibold text-lg duration-200 ease-in-out hover:bg-teal-700 active:bg-teal-800 active:scale-90",  rest.className)}>{children}</button>
  )
}