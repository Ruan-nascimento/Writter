import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";

export function Create({setPost, setHashTags}) {

  const handleSubmitPost = (e) => {
    e.preventDefault()
    if(text){
      setPost(text)
      setText('')
      setHash('')
    } else {
      alert('Você Precisa Escrever Para Enviar Algo!')
    }
    if(hash) {
      setHashTags(hash)
    } else {
      setHashTags('')
    }
  }

  const handleClearPost = (e) => {
    e.preventDefault()
    setText('')
    setHash('')
  }

  const handleWriteText = (e) => {
    const value = e.target.value
    setText(value)
  }

  const handleWriteHash = (e) => {
    const value = e.target.value
    setHash(value)
  }


  const [text, setText] = useState('')
  const [hash, setHash] = useState('')




  return(
    <div className="w-full h-full rounded-xl bg-gray-800 p-5 no-scrollbar overflow-auto bg-scroll flex-col justify-between">
      <form className="flex w-full h-8pc flex-col">
        
        <div className="flex flex-1 flex-col gap-4">
          <textarea value={text} onChange={(e) => handleWriteText(e)} placeholder="Escreva seu Pensamento..." className="resize-none w-full h-5pc max-h-5pc overflow-auto no-scrollbar rounded-lg p-4 bg-gray-900 outline-none duration-200 ease-in-out hover:bg-gray-700 focus:bg-gray-600 placeholder:font-semibold placeholder:opacity-65"></textarea>
          
          <input value={hash} onChange={(e) => handleWriteHash(e)} type="text" placeholder="Adicione HashTags..." className="rounded-lg p-4 max-h-28 duration-200 ease-in-out bg-gray-900 outline-none hover:bg-gray-700 focus:bg-gray-600 placeholder:font-semibold placeholder:opacity-65"/>
        </div>

        </form>

        <div className="flex h-2pc items-end justify-between">
          <button onClick={(e) => handleClearPost(e)} className="flex gap-2 py-3 px-10 bg-zinc-700 w-44 rounded-lg duration-200 ease-in-out hover:opacity-80 active:scale-50 font-semibold"><FaTrash size={20} color="white"/>Limpar</button>

          <button onClick={(e) => handleSubmitPost(e)} className="py-3 px-10 bg-light-yellow w-44 rounded-lg duration-200 ease-in-out hover:opacity-80 active:scale-50 text-gray-900 font-semibold">Criar</button>
        </div>
    </div>
  )
}