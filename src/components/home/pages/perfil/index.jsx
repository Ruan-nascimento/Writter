import { useState } from "react";
import { Input } from "./inputs";

export function Perfil() {

  const handleEditMode = (e) => {
    e.preventDefault()
    setDisabled(!disabled)
  }

  const [disabled, setDisabled] = useState(true)
  const biography = "João Silva é um desenvolvedor de software apaixonado com 5 anos de experiência na criação de soluções inovadoras para desafios técnicos. Com um sólido entendimento em várias linguagens de programação, incluindo JavaScript, Python e Java, João tem se destacado em projetos de desenvolvimento web e mobile."

  return(
    <div className="w-full h-full rounded-xl bg-gray-800 p-5 no-scrollbar overflow-auto bg-scroll">
      <div className="flex justify-between h-full gap-10">
        
        <div className="flex flex-col gap-4 max-w-3pc">
          <img className="border-4 border-light-yellow cursor-pointer w-72 h-72 rounded-full object-cover" src='https://picsum.photos/1920/1080?random=2334' alt='Ruan' />
          <textarea placeholder={biography} disabled={disabled} className="cursor-text resize-none flex-1 overflow-auto no-scrollbar rounded-lg bg-gray-950 p-4 text-sm"></textarea>
        </div>
        
        <div className="border-2 border-light-yellow p-4 flex-1 rounded-lg">
          <form className="flex flex-col gap-6 flex-1">
            <Input disabled={disabled} type={'text'} placeholder="Ruan Carlos"/>
            <Input disabled={disabled} type={'email'} placeholder="ruan@gmail.com"/>
            <input disabled={disabled} className="outline-none max-w-5pc p-3 rounded-lg bg-gray-900 flex items-center justify-center" type="date" />
            <button onClick={(e) => {handleEditMode(e)}} className="h-12 w-52 rounded-lg self-end text-gray-900 font-semibold text-lg bg-light-yellow">{disabled ? 'Editar' : 'Salvar'}</button>
          </form>
        </div>

      </div>
    </div>
  )
}