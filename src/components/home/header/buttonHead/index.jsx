import { useState } from "react";
import { Link } from "react-router-dom";

export function ButtonLink({active, onClick, to, type}) {

  return(
    <Link onClick={onClick} to={to} className={`flex items-center justify-center flex-1 py-3 rounded-xl text-light-yellow font-bold duration-200 ease-in-out hover:bg-gray-800 active:bg-gray-600 ${active ? 'bg-gray-800' : 'bg-transparent'}`}>
      {type}
    </Link>
  )
}