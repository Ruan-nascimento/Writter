import { ChildrenProps } from "../../../../utils/interfaces";

export const CreatePageWrapper = ({children}:ChildrenProps) => {
  return(
    <form
    className="flex p-5 flex-col h-full justify-start gap-4 items-start"
    >{children}</form>
  )
}