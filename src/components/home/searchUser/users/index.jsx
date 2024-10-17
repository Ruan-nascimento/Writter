export function UserShow({username, img, online}) {
  return(
    <div title={username} className="flex justify-between items-center w-full bg-gray-900 p-2 rounded-lg ease-in-out duration-200 max-h-11 overflow-hidden hover:bg-gray-700 cursor-pointer active:bg-gray-800">
     <div className="flex items-center gap-2 flex-1">
      <img src={img} className="w-8 h-8 rounded-full border-light-yellow object-fit"/>
      <span className="max-h-5 text-sm max-w-6pc overflow-hidden">{username}</span>
     </div>
     <span className={`h-2 w-2 rounded-full ${online ? 'bg-lime-600': 'bg-red-700'}`}></span>
    </div>
  )
}