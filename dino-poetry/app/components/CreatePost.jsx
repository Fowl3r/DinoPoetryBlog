// below tells NEXT to CSR not SSR
'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "./Editor";
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.NEXT_PUBLIC_PB_ADMIN_URL)


export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [mounted, setMounted] = useState(false);
    const isLoggedIn = pb.authStore.isValid;
    const router = useRouter();

    useEffect(() => {
        setMounted(true)
    }, []);

    const URL = process.env.NEXT_PUBLIC_PB_URL

    const create = async(e) => {
        e.preventDefault()
        await fetch(URL,{
        method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                title,
                body,
                category,
            })
        })
        // console.log(JSON.stringify(body))
        setBody('');
        setTitle('');
        setCategory('');
        router.refresh()
        // getPosts();

  
    }

    if(!mounted) return null;

    return (
        <>
        {isLoggedIn ?
            
        <form 
        onSubmit={create}
        className='poem-form'
        >
            <h1
            className="create-header"
            >Compose a new poem...</h1>
            <input
            type='text'
            placeholder='insert masterpiece title here...'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='title-input'
             />
             {/* <textarea
             placeholder="Body"
             value={body}
             onChange={(e) => setBody(e.target.value)}
             className='body-input'
              /> */}
              <Editor setBody={setBody} body={body}  />
             <p
             className="poem-tags"
             > Poem Tags </p> 
                <select
              value={category}
              className='select-input'
               onChange={(e) => setCategory(e.target.value)}>
                <option >please select...</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Therapy">Therapy</option>
                <option value="Expression Dump">Expression Dump</option>
              </select>
              <button
              className="create-btn"
               type='submit'>
                Create Poem
              </button>
        </form>
        
        :
        <h1>Please Login To access this page</h1>
         }
         </>
    )

}