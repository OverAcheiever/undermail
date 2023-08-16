"use server";
import { env } from "@/env.mjs";
import axios from "axios";

export const read = async (id: string) => {
  await axios.patch(
    `https://dev.underdogprotocol.com/v2/projects/1/nfts/${id}`,
    {
      attributes: {
        hasOpened: "true",
      },
    },
    {
      headers: {
        Authorization: `Bearer ${env.UNDERDOG_KEY}`,
      },
    }
  );
};
