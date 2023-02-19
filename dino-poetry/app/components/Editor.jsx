import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold, FaCode, FaHeading, FaItalic, FaListOl, FaListUl, FaQuoteLeft, FaRedo, FaRulerHorizontal, FaStrikethrough, FaUnderline, FaUndo } from 'react-icons/fa'
import Underline from '@tiptap/extension-underline'
import parser from 'html-react-parser'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='editor-menu'>
      <button
        onClick={(e) =>  editor.chain().focus().toggleBold().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? ' editor-button-active' : 'editor-button'}
      >
        <FaBold />
      </button>
      <button
        onClick={(e) => editor.chain().focus().toggleItalic().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? ' editor-button-active ' : 'editor-button'}
      >
        <FaItalic />
      </button>
      <button
        onClick={(e) => editor.chain().focus().toggleUnderline().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        className={editor.isActive('underline') ? ' editor-button-active ' : 'editor-button'}
      >
        <FaUnderline/>
      </button>

      <button
        onClick={(e) => editor.chain().focus().toggleStrike().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? ' editor-button-active ' : 'editor-button'}
      >
        <FaStrikethrough />
      </button>

      {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}

      <button
        onClick={(e) => editor.chain().focus().toggleHeading({ level: 1 }).run(e.preventDefault())}
        className={editor.isActive('heading', { level: 1 }) ? ' editor-button-active ' : 'editor-button'}
      >
        <FaHeading />
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? '' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? '' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? '' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      {/* </button> */}
      <button
        onClick={(e) => editor.chain().focus().toggleBulletList().run(e.preventDefault())}
        className={editor.isActive('bulletList') ? 'is-active editor-button-active ' : 'editor-button'}
      > 
        <FaListUl />
      </button>
      <button
        onClick={(e) => editor.chain().focus().toggleOrderedList().run(e.preventDefault())}
        className={editor.isActive('orderedList') ? 'is-active editor-button-active ' : 'editor-button'}
      >
        <FaListOl />
      </button>
      <button
        onClick={(e) => editor.chain().focus().toggleBlockquote().run(e.preventDefault())}
        className={editor.isActive('blockquote') ? 'is-active editor-button-active ' : 'editor-button'}
      >
        <FaQuoteLeft />
      </button>
      <button
      className='editor-button'
       onClick={(e) => editor.chain().focus().setHorizontalRule().run(e.preventDefault())}>
        <FaRulerHorizontal />
      </button>
      {/* <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button> */}
      <button
      className='editor-button'
        onClick={(e) => editor.chain().focus().undo().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <FaUndo />
      </button>
      <button
      className='editor-button'
        onClick={(e) => editor.chain().focus().redo().run(e.preventDefault())}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <FaRedo />
      </button>
    </div>
  )
}

export default function Editor({setBody}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline
    ],
    content: ``,
    onUpdate: ({editor}) => {
        const html = editor.getHTML()
        setBody(html)
        console.log(html)
    },
  })

  return (
    <div className='text-editor'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className='edit-area' />
    </div>
  )
}