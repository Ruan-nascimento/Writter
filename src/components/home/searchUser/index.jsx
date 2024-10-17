import { UserShow } from "./users";

export function FindUser() {
  const rand = Math.floor(Math.random() * 1000)
  return(
    <section className="no-scrollbar flex flex-col items-center justify-start gap-3 flex-1 max-full max-h-5pc h-4pc py-4 px-2 overflow-auto bg-gray-800 rounded-md">
      
      <div className="flex items-center w-9pc justify-center">
        <input type="search" placeholder="Buscar..." className="w-9pc max-w-9pc py-2 px-3 rounded-2xl bg-gray-900 outline-none text-xs duration-200 ease-in-out hover:bg-gray-700 focus:bg-gray-600"/>
      </div>

      <div className="w-full flex flex-col gap-1">
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/2}`} online={false} username="Ruan Carlos"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/10}`} online={true} username="Luiz Guilherme Conceição"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/9}`} online={false} username="Arthur Elias"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/8}`} online={false} username="Davi Gameplays"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/7}`} online={true} username="Victoria maria Domingos da Luz"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/3}`} online={false} username="Maria Vitória Santos"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/4}`} online={false} username="Maria Beatriz"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/5}`} online={true} username="Everson Denilson"/>
        <UserShow img={`https://picsum.photos/1920/1080?random=${rand/6}`} online={false} username="Matheus Aguiar"/>
      </div>
    </section>
  )
}