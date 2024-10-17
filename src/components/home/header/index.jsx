import { useState } from "react";
import { BrowserRouter} from "react-router-dom";
import { ButtonLink } from "./buttonHead";



export function Header() {

  const [foryou, setForyou] = useState(true)
  const [create, setCreate] = useState(false)
  const [saved, setSaved] = useState(false)
  const [gallery, setGallery] = useState(false)
  const [perfil, setPerfil] = useState(false)
  
  const checkLink = (e) => {
    if(e.target.href.includes('foryou')){
      setForyou(true)
      setCreate(false)
      setSaved(false)
      setGallery(false)
      setPerfil(false)
    } if(e.target.href.includes('create')){
      setForyou(false)
      setCreate(true)
      setSaved(false)
      setGallery(false)
      setPerfil(false)
    } if(e.target.href.includes('saved')){
      setForyou(false)
      setCreate(false)
      setSaved(true)
      setGallery(false)
      setPerfil(false)
    } if(e.target.href.includes('gallery')){
      setForyou(false)
      setCreate(false)
      setSaved(false)
      setGallery(true)
      setPerfil(false)
    } if(e.target.href.includes('perfil')){
      setForyou(false)
      setCreate(false)
      setSaved(false)
      setGallery(false)
      setPerfil(true)
    }
  }

  return(
    <header className="flex items-center w-full gap-3 max-h-12">
      <div className="flex gap-2 p-2 max-w-3pc overflow-hidden items-center">
        <img src="src\assets\Logo-Writter.png" className="w-12 h-12 rounded-full" />
        <b className="flex flex-1 text-xs max-w-20 max-h-4 overflow-hidden">Ruan Carlos da Silva Nascimento</b>
      </div>

      <nav className="flex flex-1 w-full bg-gray-900 justify-around  rounded-xl cursor-pointer">
                 
        <ButtonLink onClick={(e) => checkLink(e)} active={foryou} to='/foryou' type='Para Você'/>
        <ButtonLink onClick={(e) => checkLink(e)} active={create} to='/create' type='Criar'/>
        <ButtonLink onClick={(e) => checkLink(e)} active={saved} to='/saved' type='Salvos'/>
        <ButtonLink onClick={(e) => checkLink(e)} active={gallery} to='/gallery' type='Galeria'/>
        <ButtonLink onClick={(e) => checkLink(e)} active={perfil} to='/perfil' type='Perfil'/>

      </nav>
    </header>
  )
}


/*

*/