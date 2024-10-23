interface PostContentProps {
  content: string,
  hashtags: Array<string>
}

export const PostContent = ({content, hashtags}:PostContentProps) => {

  const formatContent = content.split('\n')

  return(
    <div className="max-h-9pc px-4 py-2 no-scrollbar bg-[#0d0d0d]">
      {
        formatContent.map((content, i) => {
          return(
            <p key={i} className="mb-2 text-justify max-h-96 overflow-auto no-scrollbar">{content.split('*').map((word, i) => i % 2 === 1 ? <strong className="text-teal-600 duration-200 ease-in-out cursor-pointer hover:text-teal-300" key={i}>{word}</strong> : word
            )}</p>
          )
        })
      }
      
      
      <div className="flex gap-2 flex-wrap max-h-20 overflow-clip max-w-full mt-4 border-t border-neutral-800 pt-2">
        {hashtags.map((hash, i) => {
          return(
            <a key={i} title={`Procurar Por Postagens com ${hash}`} className="text-sm font-semibold duration-200 ease-in-out text-teal-700 hover:text-teal-400 cursor-pointer underline">{hash}</a>
          )
        })}
      </div>
    </div>
  )
}