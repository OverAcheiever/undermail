"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useRef } from "react";

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
      console.log(editor.getJSON());
      setBody(JSON.stringify(editor.getJSON()));
    },
  });

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="scrollbar relative h-[calc(100vh-11rem)] w-full overflow-y-auto p-5">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
