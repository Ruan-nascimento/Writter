export function Input({type, placeholder, disabled}) {
  return(
    <input disabled={disabled} placeholder={placeholder} type={type} className="w-full h-15 p-3 bg-gray-950 rounded-lg duration-200 ease-in-out hover:bg-gray-900" />
  )
}