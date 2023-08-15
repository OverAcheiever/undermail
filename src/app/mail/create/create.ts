"use server";
import { env } from "@/env.mjs";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const create = async ({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) => {
  const { value: from } = cookies().get("publicKey")!;

  await axios.post(
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
  );

  redirect("/mail/inbox");
};
