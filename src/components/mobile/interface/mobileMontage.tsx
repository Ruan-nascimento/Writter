import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HeaderMontage } from "../header/headerMontage"
import { Pages } from "../pages"
import { Upper } from "../upper"

export const MobileMontage = () => {
  return(
    <section className="h-screen w-screen flex flex-col items-center">
      <Upper.root/>
      <BrowserRouter>
        <Routes>
          <Route path="/feed" element={<Pages.feed/>}/>
        </Routes>
      </BrowserRouter>
      <HeaderMontage/>
    </section>
  )
}