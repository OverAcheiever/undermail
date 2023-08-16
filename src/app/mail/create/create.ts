"use server";
import { env } from "@/env.mjs";
import axios from "axios";
import { cookies } from "next/headers";

export const create = async ({
  from,
  to,
  subject,
  body,
}: {
  from: string;
  to: string;
  subject: string;
  body: string;
}) => {
  await axios
    .post(
      "https://dev.underdogprotocol.com/v2/projects/1/nfts",
      {
        name: "mail",
        image: "",
        receiverAddress: to,
        attributes: {
          from,
          subject: subject,
          body: body,
          createdAt: new Date().toISOString(),
          hasOpened: "false",
        },
      },
      { headers: { Authorization: `Bearer ${env.UNDERDOG_KEY}` } }
    )
    .then((res) => {
      console.log(res);
    });
};
