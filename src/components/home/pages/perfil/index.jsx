import { useState } from "react";
import { Input } from "./inputs";
import { List } from "./list";
import { ButtonsOut } from "./buttonsOut";
import { footerText } from "../../../../utils/variables";

export function Perfil() {


  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setPreview(reader.result)
      }

      reader.readAsDataURL(file)
    }}

  return(
    <div className="w-full h-full rounded-xl bg-gray-800 p-5 no-scrollbar overflow-auto bg-scroll">
      <div className="flex justify-between h-full gap-10">
        
        <section className="flex flex-col gap-4 w-3pc justify-center max-w-3pc">

          <div className="relative flex w-full h-72 items-center justify-center">
            <input
              title="Selecione uma Foto"
              className="absolute rounded-full bg-transparent w-full h-full  opacity-0 cursor-pointer"
              type="file" accept="image/*" onChange={handleImageChange}/>
              
              <div className="w-full h-full flex items-center justify-center">
                {preview ? (
                <img 
                className="w-full h-full rounded-full border-4  border-light-yellow object-cover"
                src={preview} 
                alt="Image Preview" 
              />
              ) : 
              (
                <img 
                className="w-full h-full rounded-full border-4  border-light-yellow object-cover"
                src="src\assets\Perfil default.jpg" 
                alt="Image Preview" 
              />
              )}
              </div>

          </div>


          <textarea placeholder="biografia" className="outline-none cursor-text border-2 border-transparent resize-none flex-1 overflow-auto no-scrollbar rounded-lg bg-gray-950 p-4 text-sm focus:border-2 focus:border-light-yellow"></textarea>

        </section>
        
        <section className="border-2 border-light-yellow p-4 flex-1 rounded-lg flex flex-col gap-10">

              <div className="w-full h-2pc flex justify-around items-center">
                <List num={25} title="Curtidas"/>
                <List num={5} title="Posts"/>
                <List num={15} title="Salvos"/>
              </div>

              <div className="flex gap-4">
                <Input placeholder={`Ruan`} type={`text`}/>
                <Input placeholder={`Carlos`} type={`text`}/>
              </div>
              <div className="flex gap-4">
                <Input type={'text'} placeholder="@Shottinn"/>
                <Input type={`date`}/>
              </div>
              <div className="flex gap-4">
                <Input evite={true} placeholder={`ruan@gmail.com`} type={`email`}/>
                <Input evite={true} placeholder={`************`} type={`password`}/>
              </div>

              <div className="flex gap-4 justify-around">
                <ButtonsOut save name={`Salvar`}/>
                <ButtonsOut name={`Excluir Conta`}/>
                <ButtonsOut name={`Sair`}/>
              </div>

              <p className="w-full h-full overflow-hidden text-xs text-light-yellow">{footerText}</p>

        </section>

      </div>
    </div>
  )
}