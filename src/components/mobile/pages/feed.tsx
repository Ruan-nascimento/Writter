import { MainGrade } from "../generalGrade"
import { PostMontage } from "./posts/postMontage"
import db from '../../../db/db.json'

export const FeedPage = () => {

  return (
    <MainGrade.root>
      {db.posts.map((post, i) => {
        return(
          <PostMontage
          key={i}
          idPost={post.id}
          username={post.nome}
          content={post.postagem}
          hashtags={post.hashtags}
          title={post.titulo}
          imageProfile={`https://picsum.photos/200/300?random=${Math.floor(Math.random()*10000)}`}
          />
        )
      })}
    </MainGrade.root>
  )
}