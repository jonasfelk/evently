"use client";

import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.label}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap hover:text-primary-500 `}
          >
            <Link
              // className={cn(
              //   "flex-center p-medium-16 flex h-[24px] whitespace-nowrap rounded-2xl p-4 hover:bg-primary-500 hover:text-white",
              //   {
              //     "bg-primary-500 text-white ": pathname === link.route,
              //   },
              // )}
              href={link.route}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
