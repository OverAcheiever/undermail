import { env } from "@/env.mjs";
import axios from "axios";

import { cookies } from "next/headers";

import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const getEmails = async () => {
  const res: {
    ownerAddress: string;
    attributes: {
      subject: string;
      body: string;
      from: string;
    };
  }[] = await (
    await axios.get("https://dev.underdogprotocol.com/v2/projects/1/nfts", {
      headers: {
        Authorization: `Bearer ${env.UNDERDOG_KEY}`,
      },
    })
  ).data.results;

  const { value: publicKey } = cookies().get("publicKey")!;

  const emails = res.filter((email) => email.ownerAddress === publicKey);

  return emails.map((email) => ({
    from: email.attributes.from,
    subject: email.attributes.subject,
    body: email.attributes.body,
  }));
};

const Inbox = async () => {
  const emails = await getEmails();

  return (
    <div className="relative w-full">
      {emails.map(({ from, subject, body }, key) => (
        <div className="flex h-16 items-center border-b-2 border-[#111] px-5">
          <div className="text-[#444]">
            {from.slice(0, 5) + "..." + from.slice(-5)}
          </div>

          <div className="pl-10">{subject}</div>
          <div className="px-2 text-[#555]">-</div>
          <div className="text-[#555]">{body}</div>
        </div>
      ))}

      <div className="fixed bottom-5 right-5">
        <Link href="/mail/create">
          <button className="h-14 w-14 rounded-full bg-white p-3">
            <PlusIcon className="h-full w-full text-black" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export const revalidate = 5;

export default Inbox;
