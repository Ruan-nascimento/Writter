import { useState } from "react";
import { Link } from "react-router-dom";

export function ButtonLink({to, type}) {

  return(
    <Link to={to} className={`flex items-center max-h-10 justify-center flex-1 py-3 rounded-xl text-sm text-light-yellow font-medium duration-200 ease-in-out hover:bg-gray-800 active:bg-gray-600 sm:font-normal sm:text-xs 850:font-bold 850:text-sm lg:text-lg`}>
      {type}
    </Link>
  )
}