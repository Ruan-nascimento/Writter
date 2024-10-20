import { useEffect, useRef, useState } from "react";
import { Posts } from "./posts";

export function ForYou({textPost, hashPost}) {

  // text processing
  const [processing, setProcessing] = useState(textPost)


  return(
    <div className="w-full h-full rounded-xl bg-gray-800 p-5 pb-10 no-scrollbar overflow-auto bg-scroll flex flex-col gap-5">
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
      <Posts 
      content={processing}
      hashtags={hashPost}
      img={`https://picsum.photos/1920/1080?random=${Math.floor(Math.random() * 1000)/6}`}
      username="Ruan Carlos da Silva"
      commentsNum={2300}
      starsNum={1330300}
      />
    </div>
  )
}