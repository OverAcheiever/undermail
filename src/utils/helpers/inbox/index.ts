import { JSONContent } from "@tiptap/react";

export const preview = (body: JSONContent) => {
  if (!body || !body.content || body.content.length === 0) return "";

  return (
    body.content
      .filter((node) => node.type === "paragraph" && node.content)
      // map over every content in node
      .map((node) => node.content?.map((node) => node.text).join(" "))
      .join(" ")
  );
};

export const date = (date: string) => {
  const parsedDate = new Date(date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${
    parsedDate.getHours() < 24
      ? parsedDate.getHours() < 1
        ? `${parsedDate.getMinutes()} minutes ago`
        : `${parsedDate.getHours()} hours ago`
      : `${parsedDate.getDate()} ${months[parsedDate.getMonth()]}`
  }`;
};
