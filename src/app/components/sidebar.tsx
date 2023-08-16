"use client";
import { PlusCircleIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

const buttons = [
  {
    href: "/mail/inbox",
    Icon: HomeIcon,
  },
  {
    href: "/mail/create",
    Icon: PlusCircleIcon,
  },
];

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex h-full w-16 flex-col gap-y-1 border-r-2 border-[#111] p-2 pt-20">
      {buttons.map(({ Icon, href }, index) => (
        <Link href={href} key={index}>
          <button
            className={`flex h-12 w-full items-center justify-center rounded-md border-[#222] p-2 transition-all ${
              path === href
                ? "border-2 bg-[#111]"
                : "hover:border-2 hover:bg-[#111]"
            }`}
          >
            <Icon className="h-full w-full text-[#333]" />
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
