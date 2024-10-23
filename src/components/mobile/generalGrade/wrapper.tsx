import { ChildrenProps } from "../../../utils/interfaces"

export const GradeWrapper = ({children}:ChildrenProps) => {
  return(
    <div
    className="flex flex-col gap-4 w-full h-full overflow-auto no-scrollbar flex-1 pb-2 bg-neutral-950 text-white"
    >
      {children}
    </div>
  )
}