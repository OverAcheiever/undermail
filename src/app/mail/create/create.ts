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
    axios.post("https://dev.underdogprotocol.com/v2/projects/1/nfts", {
        name: "mail",
        image: "",
        receiverAddress: to,
        attributes: { from, subject: subject, body: body, }, },
        { headers: { Authorization: `Bearer ${env.UNDERDOG_KEY}`, }, 
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
