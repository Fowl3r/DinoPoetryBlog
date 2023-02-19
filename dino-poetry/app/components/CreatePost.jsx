// below tells NEXT to CSR not SSR
'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "./Editor";

/* 
PLAN:
Allow for text layout to be incorporated (poems)
? Will need a specialised text entry form
^^^ Rich Text Editor
publish & save to drafts functionality?
*/


export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');

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
                category,
            })
        })
        console.log(category)
        setBody('');
        setTitle('');
        setCategory('');
        router.refresh()
        // getPosts();

  
    }


    return (
        <form 
        onSubmit={create}
        className='poem-form'
        >
            <h1
            className="create-header"
            >Compose a new poem...</h1>
            <input
            type='text'
            placeholder='Title'
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
              <Editor setBody={setBody}  />
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
    )

}