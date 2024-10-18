import { useState } from "react"
import { FaCheck, FaComment, FaRegStar, FaSave, FaStar } from "react-icons/fa"
import { AddLike, CommentsCont, StarsCont } from "../../../../../utils/numCont"

export function Posts({img, username, content, hashtags, starsNum, commentsNum}) {

  const [starsCont, setStarsCont] = useState(starsNum)
  const [commentsCont, setCommentsCont] = useState(commentsNum)

  CommentsCont(commentsCont, setCommentsCont)
  StarsCont(starsCont, setStarsCont)

  const [saved, setSaved] = useState(false)
  const [liked, setLiked] = useState(false)
  
  

  return(
    <div className="w-full flex flex-col p-4 gap-4 bg-gray-900 rounded-lg">

      <div title={username} className="flex items-center justify-between">
        <div className="flex flex-1 gap-4 items-center">
          <img className="h-10 w-10 rounded-full" src={img} alt={username} />
          <span className="font-bold w-full">{username}</span>
        </div>
        <button onClick={(e) => setSaved(!saved)}>{saved ? <FaCheck size={20} color="green"/>  : <FaSave size={20} color="#FDE68A"/>}</button>
      </div>

      <p className="max-h-80 overflow-auto border-2 rounded-lg border-gray-600 p-3 text-justify text-sm">{content}<p><strong className="font-bold text-sm text-light-yellow">{hashtags}</strong></p></p>

      <div className="flex gap-10 cursor-pointer">
        <div className="flex gap-2 items-center">
          <button onClick={(e) =>  AddLike(setLiked, liked, starsCont, setStarsCont)} id="star">{liked ? <FaStar size={20} color="gold"/> : <FaRegStar size={20} color="gold"/>}</button>
          <label htmlFor="star" className="text-xs cursor-pointer duration-200 ease-in-out hover:text-yellow-500">{starsCont}</label>
        </div>
        <div className="flex gap-2 items-center">
          <button id="comments"><FaComment size={20} color="#64748B"/></button>
          <label className="text-xs cursor-pointer duration-200 ease-in-out hover:text-yellow-500" htmlFor="comments">{commentsCont}</label>
        </div>
      </div>
    </div>
  )
}