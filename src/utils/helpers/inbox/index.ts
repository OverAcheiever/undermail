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
  const _date = new Date(date);
  const now = new Date();

  const difference = now.getTime() - _date.getTime();

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

  // return `${
  //   parsedDate.getHours() < 24
  //     ? parsedDate.getHours() < 1
  //       ? `${parsedDate.getMinutes()} minutes ago`
  //       : `${parsedDate.getHours()} hours ago`
  //     : `${parsedDate.getDate()} ${months[parsedDate.getMonth()]}`
  // }`;

  // rewrite corretcly by subtracting _date from now
  return `${
    difference < 86400000
      ? difference < 3600000
        ? `${Math.floor(difference / 60000)} minutes ago`
        : `${Math.floor(difference / 3600000)} hours ago`
      : `${_date.getDate()} ${months[_date.getMonth()]}`
  }`;
};
