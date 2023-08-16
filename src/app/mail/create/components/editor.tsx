"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

Image.configure({
  allowBase64: true,
});

const Editor = ({ setBody }: { setBody: (body: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    // content: "",
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setBody(JSON.stringify(editor.getJSON()));
    },
  });

  return (
    <div className="scrollbar relative h-[calc(100vh-11rem)] w-full overflow-y-auto p-5">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
