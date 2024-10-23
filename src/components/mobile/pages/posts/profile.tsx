import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface PostProfileProps {
  username: string,
  imageProfile: string
}

export const PostProfile = ({username, imageProfile}:PostProfileProps) => {
  return(
    <div title={username} className="flex items-center justify-between p-2">
      <div className="flex items-center gap-4">
        <img
        className="border border-teal-500 w-10 h-10 rounded-full object-cover" 
        src={imageProfile} alt={username} title={username} />
        <span
        className="font-semibold text-xs hover:text-teal-500"
        >@{username}</span>
      </div>

      <FontAwesomeIcon 
      title="Mais Opções"
      className="me-3 hover:text-teal-500 cursor-pointer"
      icon={faEllipsisH} color="white"/>
    </div>
  )
}