'use client';
import { useRouter } from "next/navigation";
import PocketBase from 'pocketbase';

export default function DeletePost({post}){
const router = useRouter()
const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_ADMIN_URL);


async function removePost(postId){
    const URL = process.env.NEXT_PUBLIC_PB_URL
    await fetch(`${URL +'/' +postId}`, {
    method: 'DELETE',
    })
    router.refresh()
    await getPosts()
}

const isLoggedIn = pb.authStore.isValid;
// const posts = await getPosts();

return (
    isLoggedIn &&
<button
onClick={()=>{removePost(post.id)}}
>
    Delete Post
</button>
    
)
}