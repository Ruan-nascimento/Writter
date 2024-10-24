import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeaderMontage } from "../header/headerMontage"
import { Pages } from "../pages"
import { Upper } from "../upper"
import { useEffect, useState } from "react"

export const MobileMontage = () => {

  const [modifier, setModifier] = useState(false)
  const [page, setPage] = useState(window.location.href)

  useEffect(() => {setPage(window.location.href)
    console.log(page)
  },[modifier])


  return(
    <section className="h-screen w-screen flex flex-col items-center">
      <Upper.root/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Pages.feed/>}/>
          <Route path="/create" element={<Pages.create/>}/>
          <Route path="/search" element={<Pages.search/>}/>
          <Route path="/profile" element={<Pages.profile/>}/>
        </Routes>
      <HeaderMontage mod={setModifier} modR={modifier} page={page}/>
      </BrowserRouter>
    </section>
  )
}