import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const HeadPresentation = () => {
  return(
    <div className="bg-neutral-950 w-full h-14 p-2 flex items-center justify-between border-b border-zinc-600">
      <div className="flex cursor-pointer h-full items-center gap-4">
        <img 
        className="h-full"
        src="src\assets\LogoWritter.png" alt="Writter" />
        <h2
        className="text-gray-300 text-2xl font-bold"
        >Writter</h2>
      </div>

      <div className="flex h-full items-center gap-4">
        <FontAwesomeIcon className="cursor-pointer w-4 h-4 p-2 rounded-full hover:bg-black active:bg-zinc-950" icon={faFileAlt} color="#0F766E"/>
      </div>
    </div>
  )
}