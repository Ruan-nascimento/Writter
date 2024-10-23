import { ReactNode } from "react";

interface CredentialsWrapperProps {
  children : ReactNode
}

export const CredentialsWrapper = ({children} :CredentialsWrapperProps) => {
  return(
    <div className="flex items-center justify-center p-6 border border-teal-900 shadow-lg max-h-8pc h-8pc w-8pc max-w-126 rounded-lg backdrop-blur-lg bg-opacity-65 bg-zinc-800">{children}</div>
  )
}