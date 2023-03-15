'use client';
import { useRouter } from "next/navigation";

export default function DeletePost({post}){
const router = useRouter()

async function removePost(postId){
    const URL = process.env.NEXT_PUBLIC_PB_URL
    await fetch(`${URL +'/' +postId}`, {
    method: 'DELETE',
    })
    router.refresh()
    await getPosts()
}

// const posts = await getPosts();

return (
<button
onClick={()=>{removePost(post.id)}}
>
    Delete Post
</button>
)
}