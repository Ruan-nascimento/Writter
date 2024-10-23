import { ChildrenProps } from "../../../../utils/interfaces"

export const PostWrapper = ({children}:ChildrenProps) => {
  return(
    <div className="flex flex-col gap-2 w-full max-h-9pc no-scrollbar bg-neutral-950 border-b border-neutral-900">
      {children}
    </div>
  )
}