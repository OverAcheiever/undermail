"use server";
import { env } from "@/env.mjs";
import { JSONContent } from "@tiptap/react";
import axios from "axios";

export const get = async (id: string) => {
  const mail: {
    ownerAddress: string;
    attributes: {
      subject: string;
      body: string;
      from: string;
      createdAt: string;
    };
  } = await (
    await axios.get(
      `https://dev.underdogprotocol.com/v2/projects/1/nfts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${env.UNDERDOG_KEY}`,
        },
      }
    )
  ).data;

  return {
    from: mail.attributes.from,
    subject: mail.attributes.subject,
    body: JSON.parse(mail.attributes.body) as JSONContent,
    createdAt: mail.attributes.createdAt,
  };
};
