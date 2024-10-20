import { useState } from "react";
import { ButtonLink } from "./buttonHead";



export function Header() {


  return(
    <header className="flex items-center w-full gap-2 h-max-6 fixed left-0 bottom-0 z-50 sm:relative sm:gap-3 sm:max-h-12 850:items-center max-h-12">
      
      <div className="hidden sm:flex gap-2 p-2 max-w-3pc overflow-hidden items-center">
        <img src="src\assets\Logo-Writter.png" className="850:w-12 h-12 rounded-full" />
        <b className="hidden 850:flex flex-1 text-xs max-w-20 max-h-4 overflow-hidden">Ruan Carlos da Silva Nascimento</b>
      </div>

      <nav className="flex flex-1 w-full bg-gray-900 justify-around cursor-pointer sm:rounded-xl">
                 
        <ButtonLink  to='/foryou' type='Para Você'/>
        <ButtonLink  to='/create' type='Criar'/>
        <ButtonLink to='/saved' type='Salvos'/>
        <ButtonLink  to='/gallery' type='Galeria'/>
        <ButtonLink  to='/perfil' type='Perfil'/>

      </nav>
    </header>
  )
}


/*

*/