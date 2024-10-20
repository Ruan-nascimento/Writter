import { Header } from "./header";
import { ForYou } from "./pages/for-you";
import { Create } from "./pages/create";
import { Saved } from "./pages/saveds";
import { Gallery } from "./pages/gallery";
import { Perfil } from "./pages/perfil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FindUser } from "./searchUser";
import { TopHashTags } from "./topHashtags";
import { useEffect, useState } from "react";

export function Home() {

  const [copied, setCopied] = useState(false)
  const [copy, setCopy] = useState('')
  const [textPost, setTextPost] = useState('')
  const [hashPost, setHashPost] = useState('')

  const pasteClipboard = async () => {
    if(copied){
      setCopy(await navigator.clipboard.readText())
    }
  }

  useEffect(() => {
    pasteClipboard()
    }, [pasteClipboard])


  return (
    <section className="flex gap-3 h-full">
      <BrowserRouter>

        <div className="flex flex-1 flex-col gap-2 h-full"> 
          <Header/>
          <Routes>
            <Route path='/foryou' element={<ForYou textPost={textPost} hashPost={hashPost}/>}/>
            <Route path='/create' element={<Create copy={copy} setPost={setTextPost} setHashTags={setHashPost}/>}/>
            <Route path='/saved' Component={Saved}/>
            <Route path='/gallery' Component={Gallery}/>
            <Route path='/perfil' element={<Perfil/>}/>
          </Routes>
        </div>

        <div className="hidden 850:flex flex-col gap-3 w-2pc max-w-2pc max-h-full">
          <FindUser/>
          <TopHashTags copied={copied} setCopied={setCopied}/>
        </div>

      </BrowserRouter>
    </section>
  )
}