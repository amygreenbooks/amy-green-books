"use client";
import { useState, useEffect, MouseEventHandler } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuItem } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const linkStyles = ({ active = false, subMenuItem = false }) =>
  cn(
    "block w-full whitespace-nowrap border-y-4 border-solid border-b-black border-t-transparent bg-transparent p-4 no-underline",
    "hover:border-primary hover:bg-primary hover:outline-none focus-visible:border-primary focus-visible:bg-primary focus-visible:outline-none",
    {
      "border-b-primary": active,
      "px-4 border-none": subMenuItem,
    },
  );

export default function NavigationLink({
  title,
  url,
  subMenuItem = false,
  subMenus,
}: MenuItem & { subMenuItem?: boolean }) {
  const pathname = usePathname();
  const active = pathname?.includes(url);

  const [isOpen, setIsOpen] = useState(false);

  const showMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(true);
  };

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      event.preventDefault();
      console.log("closing menu");
      setIsOpen(false);
    };

    if (isOpen) {
      console.log("adding close handler");
      document.addEventListener("click", closeMenu);
    }
    return () => document.removeEventListener("click", closeMenu);
  }, [isOpen]);

  const name = `menu-${title.replace(" ", "-")}`;

  return (
    <li className="flex-auto flex-shrink-0 text-center">
      {subMenus ? (
        <>
          <button
            type="button"
            id={name}
            aria-haspopup="true"
            aria-expanded="false"
            className={linkStyles({ active, subMenuItem })}
            onClick={showMenu}
          >
            {title}
          </button>
          <ul
            role="menu"
            aria-labelledby={name}
            className={cn(
              "hidden bg-gray-800 text-white sm:absolute sm:z-50 sm:bg-foreground sm:text-background",
              {
                block: isOpen,
              },
            )}
          >
            {subMenus.map((menu) => (
              <NavigationLink key={menu.title} subMenuItem {...menu} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={url} className={linkStyles({ active, subMenuItem })}>
          {title}
        </Link>
      )}
    </li>
  );
}
