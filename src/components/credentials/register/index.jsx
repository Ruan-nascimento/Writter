import { useState } from "react"
import { Link } from "react-router-dom"

export function Register() {

const [name, setName] = useState('')
const [lastName, setLastName] = useState('')
const [email, setEmail] = useState('')
const [emailConfirm, setEmailConfirm] = useState('')
const [password, setPassword] = useState('')
const [passwordConfirm, setPasswordConfirm] = useState('')

const [isAvailable, setIsAvailable] = useState(true)
const [passIsAvailable, setPassIsAvailable] = useState(true)

const checkEmailValidation = (e) => {
  setEmailConfirm(e)
  if(e != email) {
    setIsAvailable(false)
  } else {
    setIsAvailable(true)
  }
}
const checkPasswordValidation = (e) => {
  const value = e.target.value
  setPasswordConfirm(value)
  const input = e.target
  if(value != password) {
    console.log("fide")
    setPassIsAvailable(false)
  } else {
    console.log("iguais")
    setPassIsAvailable(true)
  }
}



  return(
      <section className="bg-gray-800 flex-1 flex-col p-5 rounded-e-2xl flex items-center justify-between h-8pc">

        <h2 className="font-bold font text-5xl text-light-yellow">Cadastre-se</h2>

        <form className="flex flex-col items-center justify-evenly h-full w-full">
          

          <div className="flex gap-4 w-full">

            <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Primeiro Nome" className="p-3 rounded-xl bg-gray-950 w-full outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

            <input required value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Sobrenome" className="p-3 rounded-xl w-full bg-gray-950 outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>
          
          </div>

          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Seu Melhor E-mail" className="w-full p-3 rounded-xl bg-gray-950 outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

          <input required value={emailConfirm} onChange={(e) => checkEmailValidation(e.target.value)} type="email" placeholder="Repita seu E-mail" className="w-full p-3 rounded-xl bg-gray-950 outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

          <div className="flex gap-4 w-full"> 
            <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Crie uma Senha" className="p-3 rounded-xl bg-gray-950 w-full outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

            <input value={passwordConfirm}  onChange={(e) => checkPasswordValidation(e)} required type="password" placeholder="Repita a Senha" className="p-3 rounded-xl bg-gray-950 w-full outline-none border-2 border-transparent ease-in-out duration-200 placeholder:opacity-50 hover:bg-gray-900 focus:bg-gray-800 focus:border-gray-500"/>

          </div>

          <button disabled={!isAvailable && !passIsAvailable} type="submit" className={`p-4 bg-gray-950 w-full border-2 border-transparent rounded-2xl font-bold ease-in-out duration-200 hover:bg-gray-900 hover:border-gray-500 active:bg-gray-700 active:scale-50 ${isAvailable && passIsAvailable ? "cursor-pointer" : "cursor-not-allowed hover:bg-gray-800 hover:text-transparent hover:border-transparent"}`}>Cadastrar</button>
          
        </form>

        <p>Já Tem uma Conta? <Link to="/" className="font-bold text-light-yellow hover:underline">Entre</Link></p>

      </section>
  )
}