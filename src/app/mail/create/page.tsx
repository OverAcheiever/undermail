"use client";
import React, { useState, ChangeEvent } from "react";
import To from "./components/to";
import Subject from "./components/subject";
import Editor from "./components/editor";
import Send from "./components/send";

const create = () => {
  const [to, setTo] = useState<string>();
  const [subject, setSubject] = useState<string>();
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

export default create;
