interface PostTitleProps {
  title: string
}

export const PostTitle = ({title}:PostTitleProps) => {
  return(
    <h2 title={title} className="bg-[#0d0d0d] p-2 font-bold text-teal-300 cursor-pointer duration-200 ease-in-out text-lg -mb-2 max-h-10 overflow-clip hover:text-teal-600">"{title}..."</h2>
  )
}