"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuItem } from "../../lib/siteConfig";
import styles from "./nav.module.css";
import NavigationLink from "./navigationLink";

export default function Nav({ mainMenu }: { mainMenu: Array<MenuItem> }) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <>
      <nav
        className={cn(
          "bg-black relative white main-nav serif top-0 left-0 right-0 z-3",
          {
            ["fixed-ns"]: !isHome,
          }
        )}
      >
        <div className="mw7 flex-ns flex-wrap justify-between items-center center">
          {!isHome && (
            <Link
              href="/"
              className={`f4 pa3 fw6 db mr4-ns nowrap no-underline bg-primary i ${styles.title}`}
            >
              Amy Lynn Green
            </Link>
          )}
          <ul
            className={cn("flex flex-wrap justify-between", {
              "w-100": isHome,
            })}
          >
            {mainMenu.map((menu) => (
              <NavigationLink key={menu.title} {...menu} />
            ))}
          </ul>
        </div>
      </nav>
      <div className={cn({ ["pt5-ns"]: !isHome })} />
    </>
  );
}
