'use client';
import { useRouter } from "next/navigation";

export default function DeletePost({post}){
const router = useRouter()

async function removePost(postId){
    await fetch(`http://127.0.0.1:8090/api/collections/posts/records/${postId}`, {
    method: 'DELETE',
    })

    router.refresh()
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