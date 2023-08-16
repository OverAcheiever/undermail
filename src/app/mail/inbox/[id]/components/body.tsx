import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

const Body = ({ body }: { body: JSONContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        HTMLAttributes: {
          class: "underline",
        },
      }),
      Image.configure({
        allowBase64: true,
      }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none prose underline",
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
