import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const verifyEmailValidation = (e) => {
    setEmail(e.target.value)
  }
  const verifyPasswordValidation = (e) => {
    setPassword(e.target.value)
    console.log(password)
  }
  const cleanAllInputs = (e) => {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  return(
      <section className="bg-gray-800 flex-col flex-1 p-5 rounded-e-2xl flex items-center justify-between h-8pc">

        <h2 className="font-bold font text-5xl text-light-yellow">Login</h2>

        <form  className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col flex-1 justify-center gap-10 w-full">
            <input type="email" onChange={(e) => verifyEmailValidation(e)} value={email} placeholder="Digite Seu E-mail" className="w-full p-3 rounded-xl bg-gray-950 outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

            <input type="password" onChange={(e) => verifyPasswordValidation(e)} value={password} placeholder="Digite Sua Senha" className="w-full p-3 rounded-xl bg-gray-950 outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>
          </div>

          <button onClick={(e) => cleanAllInputs(e)} type="submit" className="p-4 bg-gray-950 w-full border-2 border-transparent rounded-2xl font-bold ease-in-out duration-200 hover:bg-gray-900 cursor-pointer hover:border-gray-500 active:bg-gray-700 active:scale-50">Entrar</button>

        </form>
        <p>Não Tem uma Conta? <Link to="/register" className="font-bold text-light-yellow hover:underline">Registre-se</Link></p>
      </section>
  )
}