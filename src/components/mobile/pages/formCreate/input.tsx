import { forwardRef, InputHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface InputCreatePostProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export const InputCreatePost = forwardRef<HTMLInputElement, InputCreatePostProps>((rest, ref) => {
  return(
    <div className="flex w-full justify-center">
      <input 
      ref={ref}
      {...rest}
      autoComplete={'false'}
      className={twMerge("w-full p-3 bg-neutral-900 rounded-md border outline-none duration-200 ease-in-out hover:bg-neutral-800 active:scale-75 focus:bg-neutral-950 placeholder:font-semibold placeholder:opacity-25", rest.className)}
      type="text" />
    </div>
  )
})