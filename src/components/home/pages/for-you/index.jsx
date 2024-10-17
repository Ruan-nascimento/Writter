import { Posts } from "./posts";

export function ForYou() {

  const text = "A vida é uma jornada imprevisível, repleta de altos e baixos, momentos de alegria e tristeza, desafios e vitórias. Muitas vezes, buscamos sentido nas coisas grandes e nos esquecemos de que é nas pequenas que reside a essência do viver."
  const text2 = "Paixão é o fogo que nos move, que acende a alma e transforma o ordinário em extraordinário. Ela vai além de simples desejo ou atração, é uma força poderosa e quase inexplicável que nos consome, nos impulsiona a buscar algo mais profundo e significativo. Seja por uma pessoa, um projeto, ou um sonho, a paixão é o combustível que nos faz superar obstáculos e resistir ao cansaço. Nos momentos de dúvida, é ela quem nos lembra do porquê começamos, quem nos dá coragem para seguir adiante. Paixão é a chama que ilumina o caminho, mesmo quando tudo parece escuro. No entanto, é preciso cuidado, pois a mesma intensidade que a torna mágica também pode nos cegar, nos fazer perder o equilíbrio. Encontrar a harmonia entre viver com paixão e manter a clareza é o desafio. Quando bem dosada, a paixão nos leva a lugares inimagináveis, transforma a vida em uma aventura vibrante e nos permite viver cada dia com propósito e entusiasmo."
  const text3 = "Paixão é mais do que uma simples emoção; é uma força avassaladora que impulsiona o ser humano a ir além do comum. Quando estamos apaixonados por algo — seja uma pessoa, uma arte ou um objetivo —, tudo ao redor parece ganhar mais cor e vida. Ela é o que faz alguém dedicar horas intermináveis a um projeto sem sentir o peso do tempo, ou o que nos leva a superar obstáculos que, sem ela, pareceriam intransponíveis."
  const text4 = "Paixão é aquela faísca que transforma o trabalho árduo em prazer e faz do sacrifício uma experiência gratificante. É a energia que flui quando estamos alinhados com o que realmente nos move, tornando o processo mais importante que o resultado. Contudo, a paixão também carrega consigo o risco de desequilíbrio. "
  const text5 = "A natureza é um espetáculo constante de vida e transformação, uma força silenciosa que sustenta tudo ao nosso redor. Desde as vastas florestas até os mais minúsculos organismos, ela opera com uma harmonia que impressiona e inspira."

  return(
    <div className="w-full h-full rounded-xl bg-gray-800 p-5 no-scrollbar overflow-auto bg-scroll flex flex-col gap-5">
      <Posts 
      content={text}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2}
      starsNum={20}
      />

      <Posts 
      content={text2}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Samuel Inácio"
      commentsNum={30}
      starsNum={130}
      />
      
      <Posts 
      content={text3}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Luiz Araújo de cáprio"
      commentsNum={100}
      starsNum={1330}
      />

      <Posts 
      content={text4}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Thays Soares dos Santos"
      commentsNum={30}
      starsNum={930}
      />

      <Posts 
      content={text5}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Everton Sobraes Escrivão"
      commentsNum={100}
      starsNum={12130}
      />
    </div>
  )
}