"use server";
import { env } from "@/env.mjs";
import { JSONContent } from "@tiptap/react";
import axios from "axios";

export const get = async (publicKey: string) => {
  const emails: {
    id: string;
    ownerAddress: string;
    attributes: {
      subject: string;
      body: string;
      from: string;
      createdAt: string;
      hasOpened: string;
    };
  }[] = await (
    await axios.get(
      `https://dev.underdogprotocol.com/v2/projects/1/nfts/search?search=${publicKey}`,
      {
        headers: {
          Authorization: `Bearer ${env.UNDERDOG_KEY}`,
        },
      }
    )
  ).data.results;

  return emails.map((email) => ({
    id: email.id,
    from: email.attributes.from,
    subject: email.attributes.subject,
    body: JSON.parse(email.attributes.body) as JSONContent,
    createdAt: email.attributes.createdAt,
    // convert "true" to true
    hasOpened: email.attributes.hasOpened === "true" ? true : false,
  }));
};
