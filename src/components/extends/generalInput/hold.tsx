import { forwardRef, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface HoldInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disable?: boolean
}

export const HoldInput = forwardRef<HTMLInputElement, HoldInputProps>((props, ref) => {
  return(
    <input {...props} ref={ref}
    className={twMerge("rounded-md p-2 w-full bg-zinc-900 border border-transparent text-white outline-none duration-200 ease-in-out hover:bg-zinc-950 focus:border-teal-500 focus:bg-zinc-950", props.className)}
    />
  )
})