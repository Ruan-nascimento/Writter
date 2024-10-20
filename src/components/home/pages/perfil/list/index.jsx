export function List({num, title}) {
  return (
    <div className="w-24 h-24 rounded-full bg-gray-800 border-2 border-light-yellow flex items-center justify-center duration-200 ease-in-out flex-col hover:scale-95 cursor-pointer">
      <b className="font-bold text-light-yellow">{num}</b>
      <p>{title}</p>
    </div>
  )
}