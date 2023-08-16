"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useWallet } from "@solana/wallet-adapter-react";
import { JSONContent } from "@tiptap/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { get } from "./get";
import Loading from "@/app/components/loading";
import { date, preview } from "@/utils/helpers/inbox";

const Inbox = () => {
  const [emails, setEmails] = useState<
    {
      id: string;
      from: string;
      subject: string;
      body: JSONContent;
      createdAt: string;
      hasOpened: boolean;
    }[]
  >();

  const { publicKey } = useWallet();

  const getEmails = async () => {
    const _mails = await get(publicKey!.toString());
    setEmails(_mails);
    localStorage.setItem("mails", JSON.stringify(_mails));
  };

  useEffect(() => {
    if (publicKey) {
      const cache = localStorage.getItem("mails");
      if (cache) {
        setEmails(JSON.parse(cache));
      }

      getEmails();
    }
  }, [publicKey]);

  return (
    <div className="relative h-screen w-full overflow-y-auto">
      {emails !== undefined ? (
        emails.map(({ id, from, subject, body, createdAt, hasOpened }, key) => {
          return (
            <Link href={`/mail/inbox/${id}`} key={id}>
              <div
                className={`flex h-16 items-center justify-between border-b-2 px-5 transition-all duration-200 hover:bg-[rgb(20,20,20)]
                ${
                  hasOpened
                    ? " border-[#111]"
                    : "border-[rgb(20,20,20)] bg-[rgb(15,15,15)] "
                }
              `}
              >
                <div className="flex items-center">
                  <div className="text-[#444]">
                    {from.slice(0, 5) + "..." + from.slice(-5)}
                  </div>
                  <div className="pl-10">{subject}</div>
                  <div className="px-2 text-[#555]">-</div>
                  <div className="text-[#555]">{preview(body)}</div>
                </div>

                <div className="text-sm text-[#555]">{date(createdAt)}</div>
              </div>
            </Link>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Inbox;
