import { Login } from "./login";
import { Register } from "./register";
import { BrowserRouter, Route, Routes  } from "react-router-dom"

export function Credentials() {
  return(
    <BrowserRouter>
       <section className="rounded-s-2xl bg-gray-900 max-w-5pc max-h-8pc flex justify-center object-cover">
        <img src="src\assets\Slogan.png" alt="" />
      </section>                                              
      <Routes className="flex flex-row max-h-full gap-1">
        <Route path="/" Component={Login}/>
        <Route path="/register" Component={Register}/>
      </Routes>
    </BrowserRouter>
  )
}