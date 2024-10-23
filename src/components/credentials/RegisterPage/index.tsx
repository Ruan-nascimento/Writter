import { Link } from "react-router-dom";
import { Input } from "../../extends/generalInput";
import { CredentialsWrapper } from "../wrapper";
import { Button } from "../../extends/generalButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorValidation } from "../../extends/errors/errorValidationForm";
import { createNewUser} from "../../../utils/createNewUser";


const createUserFormSchema = z.object({
  name: z.string().min(1,'Digite seu Nome'),
  lastname: z.string(),
  email: z.string().min(1,'Você precisa digitar um email').email('Formato de Email Inválido'),
  password: z.string().min(8,'A senha Precisa Ter 8 Caracteres'),
  passwordConfirm: z.string().min(8, 'A senha Precisa Ter 8 Caracteres'),
}).refine((data) => data.passwordConfirm === data.password, {
  message: 'As senhas devem ser iguais',
  path: ['passwordConfirm']
})

export type CreateUserFormData = z.infer<typeof createUserFormSchema>


export function RegisterPage() {


  const {register, handleSubmit, formState:{errors}} = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })
  
  const createUser = async(data:CreateUserFormData) => {
    console.log(await createNewUser(data))
  }


  return(
    <CredentialsWrapper>
      <section className="w-full h-full flex items-center justify-between flex-col">
        <h2 className="text-4xl font-semibold text-teal-500">Registre-se</h2>

        <form onSubmit={handleSubmit(createUser)} className="w-full flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <Input.root {...register('name')} type="text" placeholder="Seu Nome"/>
            {errors.name && <ErrorValidation>{errors.name.message}</ErrorValidation>}
          </div>

          <Input.root {...register('lastname')} type="text" placeholder="Seu Sobrenome"/>
          
          <div className="flex flex-col gap-1">
            <Input.root {...register('email')} type="text" placeholder="Seu Email"/>
            {errors.email && <ErrorValidation>{errors.email.message}</ErrorValidation>}
          </div>
          
          <div className="flex gap-2">
            <div className="flex flex-col gap-1">
              <Input.password placeholder="Sua Senha" {...register('password')}/>
              {errors.password && <ErrorValidation>{errors.password.message}</ErrorValidation>}
            </div>

            <div className="flex flex-col gap-1">
              <Input.password placeholder="Repita sua Senha" {...register('passwordConfirm')}/>
              {errors.passwordConfirm && <ErrorValidation>{errors.passwordConfirm.message}</ErrorValidation>}
            </div>
          </div>

          <Button.root type="submit" className="w-full mt-4">
            Cadastrar
            <Button.icon icon={faArrowRight} size="xs"/>
          </Button.root>
        </form>

        <Link to={'/'} className="text-white font-light text-md cursor-pointer">
          Já Tem uma Conta? <b className="font-bold text-teal-600 duration-200 ease-in-out hover:underline">Entrar</b>
        </Link>
      </section>

      
    </CredentialsWrapper>
  )
}