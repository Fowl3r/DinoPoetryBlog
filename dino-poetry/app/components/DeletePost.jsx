'use client';
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {pb} from '../lib/pocketbase';

export default function DeletePost({post}){
const router = useRouter()
const isLoggedIn = pb.authStore.isValid;
// const [loggedIn, setLoggedIn] = useState(false);

// useEffect(() => {
  
//     if(isLoggedIn) {
//       setLoggedIn(true)
//     }
//   },[loggedIn])

async function removePost(postId){
    const URL = process.env.NEXT_PUBLIC_PB_URL
    await fetch(`${URL +'/' +postId}`, {
    method: 'DELETE',
    })
    router.refresh()
    await getPosts()
}


return (

<button
onClick={()=>{removePost(post.id)}}
className={isLoggedIn ? 'block' : 'hidden'  }
>
    Delete Post
</button>

)

}