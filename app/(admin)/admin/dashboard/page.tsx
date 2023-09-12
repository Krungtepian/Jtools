"use client"

import { Editor } from '@tinymce/tinymce-react'

export default function Dashboard() {
  return <div>
    <Editor
      // onInit={(evt, editor) => editorRef.current = editor}
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      initialValue="<p>This is the initial content of the editor.</p>"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
    />
    <button>test save to DB</button>
  </div>
}