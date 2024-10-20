export function ButtonsOut({name, save=false}) {
  return(
    <button className={`px-4 py-2 w-3pc rounded-md h-10 text-white font-medium duration-200 ease-in-out hover:bg-gray-700 active:scale-95 ${save ? 'bg-gray-900 hover:bg-gray-950' : 'bg-gray-600'}`}>{name}</button>
  )
}