'use client'

import Underline from '@tiptap/extension-underline';
import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import { generateHTML } from '@tiptap/react';
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
// import Bold from '@tiptap/extension-bold'
// import Underline from '@tiptap/extension-underline';
// import { useMemo } from 'react';

/* 
 {posts?.map((post) => {
        return <PostCard key={post.id} post={post} />;
    })
    }
*/

export default function  DisplayRichText({body}) {
    const content = body
 

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline
        ],
        content:content,
        editable:false,
        readOnly:true,
        
    })
    console.log(body)
    return (
        <EditorContent  editor={editor} content={content} />
    )
}