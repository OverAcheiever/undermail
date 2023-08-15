import { isValidPublicKey } from "@/utils/helpers/validate/publickey";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Toaster, toast } from "react-hot-toast";
import { create } from "../create";

const Send = ({
  to,
  subject,
  body,
}: {
  to?: string;
  subject?: string;
  body?: string;
}) => {
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

    await create({
      to,
      subject,
      body,
    }).catch((err) => {
      console.log(err);
      toast.error("failed to send message");
    });

    window.location.href = "/mail/inbox";
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
        <PaperAirplaneIcon className="h-5 w-5 " />
      </button>
    </>
  );
};

export default Send;
