"use client";
import React, { useState, ChangeEvent } from "react";
import { create } from "./create";
import { useWallet } from "@solana/wallet-adapter-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

const editor = new EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: "editorjs",
  tools: {
    header: Header,
  },
});

const Create = (): JSX.Element => {
  const [to, setTo] = useState<string>();
  const [subject, setSubject] = useState<string>();
  const [body, setBody] = useState<string>();

  const handleToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (body: string) => {
    setBody(body);
  };

  const { publicKey } = useWallet();

  const send = async () => {
    if (!to || !subject || !body) return;

    await create({
      from: publicKey!.toString(),
      to,
      subject,
      body,
    });

    console.log("sent");
  };

  console.log(to, subject, body);

  return (
    <div className="relative w-full flex-grow">
      <div className="flex h-14 items-center border-b border-[#111]">
        <div className="px-4 text-[#444]">To</div>
        <input
          type="text"
          className="w-full bg-black outline-none"
          value={to}
          onChange={handleToChange}
        />
      </div>
      <div className="flex h-14 items-center border-b border-[#111]">
        <div className="px-4 text-[#444]">Subject</div>
        <input
          type="text"
          className="w-full bg-black outline-none"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div className="h-full w-full" id="editorjs">
        {/* <TextareaAutosize
          className="h-full w-full border-0 bg-black p-5 outline-none"
          value={body}
          onChange={(e) => handleBodyChange(e.target.value)}
        /> */}
      </div>

      <div className="fixed bottom-5 left-5">
        <button
          className="h-14 w-14 rounded-full bg-white p-3.5 font-black text-black"
          onClick={send}
        >
          <PaperAirplaneIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
};

export default Create;
