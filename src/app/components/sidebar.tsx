import { PlusCircleIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const buttons = [
  {
    href: "/",
    Icon: HomeIcon,
  },
  {
    href: "/mail/create",
    Icon: PlusCircleIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="flex h-full w-16 flex-col gap-y-1 border-r-2 border-[#111] p-2 pt-20">
      {buttons.map(({ Icon, href }, index) => (
        <Link key={index} href={href}>
          <button className="flex h-12 w-full items-center justify-center rounded p-2 hover:bg-[#111]">
            <Icon className="h-full w-full text-[#333]" />
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
