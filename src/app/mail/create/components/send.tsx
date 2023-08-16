import { isValidPublicKey } from "@/utils/helpers/validate/publickey";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Toaster, toast } from "react-hot-toast";
import { create } from "../create";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";

const Send = ({
  to,
  subject,
  body,
}: {
  to?: string;
  subject?: string;
  body?: string;
}) => {
  const [loading, setLoading] = useState(false);

  const { publicKey } = useWallet();

  const send = async () => {
    if (!to) {
      return toast.error("enter recipient address");
    }

    if (!subject) {
      return toast.error("enter subject");
    }

    if (!body) {
      return toast.error("cannot send empty message");
    }

    if (!isValidPublicKey(to)) {
      return toast.error("invalid recipient address");
    }

    setLoading(true);

    await create({
      from: publicKey!.toString(),
      to,
      subject,
      body,
    })
      .then((res) => {
        window.location.href = "/mail/inbox";
      })
      .catch((err) => {
        toast.error("failed to send message");
        setLoading(false);
      });
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#111",
            color: "#fff",
            border: "1px solid #222",
            display: "flex",
            gap: "0.3rem",
            paddingLeft: "0.8rem",
          },
        }}
      />
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#222] bg-white font-bold text-black"
        onClick={send}
      >
        {loading ? (
          <div className="animate-spin text-2xl">✻</div>
        ) : (
          <PaperAirplaneIcon className="h-5 w-5 " />
        )}
      </button>
    </>
  );
};

export default Send;
