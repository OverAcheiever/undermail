"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { JSONContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { get } from "./get";
import { read } from "./read";
import Loading from "@/app/components/loading";
import { date } from "@/utils/helpers/inbox";
import Body from "./components/body";

const Mail = ({ params: { id } }: { params: { id: string } }) => {
  const [mail, setMail] = useState<{
    from: string;
    subject: string;
    body: JSONContent;
    createdAt: string;
  }>();

  const { publicKey } = useWallet();

  useEffect(() => {
    if (!mail) {
      (async () => {
        setMail(await get(id));
        read(id);
      })();
    }
  }, [publicKey]);

  console.log(mail);

  return (
    <>
      {mail ? (
        <div>
          <div className="flex h-16 w-full items-center justify-between border-b-2 border-[#111] px-5">
            <div className="flex items-center gap-x-3">
              <div className="text-lg font-bold">10% off Underdog Protocol</div>

              {/* <div className="text-[#444]">
                {mail.from.slice(0, 5) + "..." + mail.from.slice(-5)}
              </div> */}
            </div>
            <div className="text-sm font-bold text-[#555]">
              {date(mail.createdAt)}
            </div>
          </div>

          <Body body={mail.body} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Mail;
