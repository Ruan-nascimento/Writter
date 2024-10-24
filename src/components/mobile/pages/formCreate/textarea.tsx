import { forwardRef, TextareaHTMLAttributes, useState } from "react"
import { twMerge } from "tailwind-merge"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string
}

export const TextAreaCreatePost = forwardRef<HTMLTextAreaElement, TextAreaProps>((rest, ref) => {

  const [active, setActive] = useState(false)
  const [content, setContent] = useState('')

  return(
    <div className="w-full relative duration-200 ease-in-out active:scale-90">
      <textarea
      onFocus={() => setActive(true)}
      ref={ref}                                       
      {...rest}
      value={content}
      onChange={(e) => setContent(e.target.value)}
      className={twMerge("resize-none w-full rounded-md min-h-44 h-96 overflow-auto no-scrollbar duration-200 ease-in-out bg-neutral-900 border outline-none p-3 placeholder:opacity-35 placeholder:font-semibold ")}
      ></textarea>

      <button onClick={() => setContent('')} className={active ? "absolute bottom-5 right-3 bg-zinc-700 w-20 h-8 duration-200 ease-in-out rounded-md active:scale-90 active:bg-zinc-800" : "hidden"}>Limpar</button>
    </div>
  )
})