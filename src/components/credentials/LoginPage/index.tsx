import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../extends/generalButton";
import { Input } from "../../extends/generalInput";
import { CredentialsWrapper } from "../wrapper";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorValidation } from "../../extends/errors/errorValidationForm";

const LoginSchema = z.object({
  email: z.string().nonempty('Você Precisa Preencher o Email para Prosseguir')
    .email('Email Inválido'),
  password: z.string().min(8, 'Digite Pelo menos 8 Caracteres')
})

type FindUserFormData = z.infer<typeof LoginSchema>

export function LoginPage() {

  const {register, handleSubmit, formState:{errors}} = useForm<FindUserFormData>({
    resolver: zodResolver(LoginSchema)
  })
  const [output, setOutput] = useState('')

  const findUsersForLogin = (data:any) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return(
    <CredentialsWrapper>
      <section className=" flex flex-col items-center w-full justify-center gap-12">
        
        <div className="flex justify-center items-center flex-col gap-6">
          <img className="size-44" src='src\assets\LogoWritter.png' alt="" />
          <h2 className="text-lg text-white">Faça seu Login e seja <b className="text-teal-500">Feliz</b></h2>
        </div>

        <form onSubmit={handleSubmit(findUsersForLogin)} className="flex items-center flex-col w-full gap-4">
          <div className="flex w-full flex-col gap-1">
            <Input.root {...register('email')} type="text" placeholder="Seu Email"/>
            {errors.email && <ErrorValidation>{errors.email.message}</ErrorValidation>}
          </div>

          <div className="flex w-full flex-col gap-1">
          <Input.password {...register('password')} placeholder="Sua Senha"/>
          {errors.password && <ErrorValidation>{errors.password.message}</ErrorValidation>}
          </div>

          <Button.root className="mt-4 w-full">
            Logar
            <Button.icon icon={faArrowRight} size='xs'/>
          </Button.root>
        </form>

        <Link to={'/register'} className="justify-self-end text-white font-light cursor-pointer">
            Não Tem uma Conta? 
            <b className="font-bold ml-2 text-teal-600 duration-200 ease-in-out hover:underline">Cadastre-se</b>
          </Link>

      </section>
    </CredentialsWrapper>
  )
}