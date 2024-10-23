import { Post } from "."

interface PostMontageProps {
  username: string,
  imageProfile: string,
  title: string,
  content: string,
  hashtags: Array<string>,
  idPost: string
}

export const PostMontage = ({idPost, username, imageProfile, title, content, hashtags}:PostMontageProps) => {
  return(
    <Post.root>
      <Post.Profile username={username} imageProfile={imageProfile}/>
      <Post.title title={title}/>
      <Post.content
      content={content}
      hashtags={hashtags}
      />
      <Post.interactions idPost={idPost}/>
    </Post.root>
  )
}