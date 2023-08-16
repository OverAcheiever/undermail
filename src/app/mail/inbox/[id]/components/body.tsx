import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

Image.configure({
  allowBase64: true,
});

const Body = ({ body }: { body: JSONContent }) => {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    editorProps: {
      attributes: {
        class: "focus:outline-none",
      },
    },
    content: body,
    editable: false,
  });

  return (
    <div className="h-[calc(100vh-4rem)] w-full overflow-y-auto">
      <div className="flex p-5">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Body;
