"use server";
import { env } from "@/env.mjs";
import axios from "axios";

export const create = ({
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
  axios
    .post(
      "https://dev.underdogprotocol.com/v2/projects/1/nfts",
      {
        name: "mail",
        image:
          "https://media.discordapp.net/attachments/947390920645554236/1130655144040734770/015491d333cde4a4c24d1a76239a97d4.jpg",
        receiverAddress: to,
        attributes: {
          from,
          subject: subject,
          body: body,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${env.UNDERDOG_KEY}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
