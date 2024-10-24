import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { MainGrade } from "../generalGrade"
import { FormCreatePost } from "./formCreate"

export const CreatePage = () => {
  return (
    <MainGrade.root>
      <FormCreatePost.root>
        <FormCreatePost.input placeholder="Insira o Titulo..."/>
        <FormCreatePost.content placeholder="Digite Seu Pensamento..."/>
        <FormCreatePost.input placeholder="Insira suas HashTags..."/>
        <FormCreatePost.button className="m-auto w-44" text="Enviar" icon={faArrowLeft}/>
      </FormCreatePost.root>
    </MainGrade.root>
  )
}