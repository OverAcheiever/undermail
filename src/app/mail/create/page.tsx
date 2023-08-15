"use client";
import React, { useState, ChangeEvent } from "react";
import { create } from "./create";
import { useWallet } from "@solana/wallet-adapter-react";
import To from "./components/to";
import Subject from "./components/subject";
import Editor from "./components/editor";
import Send from "./components/send";

const Create = (): JSX.Element => {
  const [to, setTo] = useState<string>(
    "HHX2R9dW5DyPqjg9pDSEjj5zEy11zg5AGr356PM6Exaq"
  );
  const [subject, setSubject] = useState<string>("hi");
  const [body, setBody] = useState<string>();

  return (
    <div className="relative flex h-screen w-full flex-col justify-between">
      <div>
        <To to={to} setTo={setTo} />
        <Subject subject={subject} setSubject={setSubject} />
        <Editor setBody={setBody} />
      </div>

      <div className="flex h-16 w-full items-center border-t border-[#222] px-3">
        <Send to={to} subject={subject} body={body} />
      </div>
    </div>
  );
};

export default Create;
