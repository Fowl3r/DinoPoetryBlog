'use client'

import Underline from '@tiptap/extension-underline';
import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function  DisplayRichText({body}) {
    // Check if this is actually needed?
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