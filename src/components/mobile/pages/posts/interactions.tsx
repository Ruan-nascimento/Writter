import { faHeart as farHeart, faSave as farSave } from "@fortawesome/free-regular-svg-icons"
import { faComment, faHeart, faSave } from "@fortawesome/free-solid-svg-icons"
import { InteractButtons } from "./interactButtons"
import { useEffect, useState } from "react"
import db from '../../../../db/db.json'

interface IdPostProps {
  idPost: string
}

export const PostInteractions = ({idPost}:IdPostProps) => {

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [comments, setComments] = useState(0)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    db.posts.map(post => {return(post.id === idPost && setComments(post.comentarios))})
    if(!liked){
      db.posts.map(post => {return(post.id === idPost && setLikes(post.likes))})
    } else {
      db.posts.map(post => {return(post.id === idPost && setLikes(post.likes + 1))})

    }
  },[liked])

  const handleClickLike = () => {
    setLiked(!liked)
   
  }

  return(
    <div className="flex p-2 items-center justify-between">
      <div className="flex gap-4">
        <InteractButtons onClick={() => handleClickLike()} likes={likes} icon={liked ? faHeart : farHeart}/>
        
        <InteractButtons color="#319795" labelColor="text-teal-500" likes={comments} icon={faComment}/>
      </div>
  
      <InteractButtons color={saved ? '#c1c1c1' : '#319795'} onClick={() => setSaved(!saved)} icon={saved ? faSave : farSave} />
    </div>
  )
}