export function Hashtags({hash, setCopied}){

  const handleCopy = () => {
    navigator.clipboard.writeText(hash)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return(
    <div onClick={handleCopy} title="copiar" className="bg-gray-900 rounded-md p-1 flex items-center justify-center transition-transform ease-in-out cursor-pointer hover:bg-gray-700 active:bg-gray-950 active:scale-50 ">
      <h3 className="text-light-yellow font-semibold text-xs w-8pc max-w-8pc overflow-hidden text-center">{hash}</h3>
    </div>
  )
}