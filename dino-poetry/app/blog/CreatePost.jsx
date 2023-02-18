// below tells NEXT to CSR not SSR
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getPosts } from "./page";

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [category, setCategory] = useState('');

    const router = useRouter();

    const create = async(e) => {
        e.preventDefault()
        await fetch('http://127.0.0.1:8090/api/collections/posts/records',{
        method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                title,
                body,
                // category,
            })
        })
        setBody('');
        setTitle('');
        router.refresh()
        // getPosts();
        // setCategory('');

  
    }


    return (
        <form onSubmit={create}>
            <h3>Create a new post</h3>
            <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
             />
             <textarea
             placeholder="Body"
             value={body}
             onChange={(e) => setBody(e.target.value)}
              />
{/* <select
              value={category}
               onChange={(e) => setCategory(e.target.value)}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Therapy">Therapy</option>
                <option value="Expression Dump">Expression Dump</option>
              </select> */}
              <button type='submit'>
                Create Post
              </button>
        </form>
    )

}