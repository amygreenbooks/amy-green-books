"use client";

import { useEffect, useRef, useState } from "react";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuItem } from "../../lib/siteConfig";
import styles from "./nav.module.css";
import NavigationLink from "./navigationLink";

export default function Nav({ mainMenu }: { mainMenu: Array<MenuItem> }) {
  const pathname = usePathname();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const drawerRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close the drawer when the user clicks outside of it
  useEffect(() => {
    const closeDrawer = (event: MouseEvent) => {
      if (
        (drawerRef.current &&
          drawerRef.current.contains(event.target as HTMLElement)) ||
        (buttonRef.current &&
          buttonRef.current.contains(event.target as HTMLElement))
      ) {
        return;
      }

      setAnimationsEnabled(true);
      setOpenDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  // Close the drawer when the pathname changes
  useEffect(() => {
    setAnimationsEnabled(true);
    setOpenDrawer(false);
  }, [pathname]);

  // Disable animations after a short timeout. This prevents them from
  // running when the page is resized between small and large breakpoints.
  useEffect(() => {
    if (animationsEnabled) {
      const timeout = window.setTimeout(() => {
        setAnimationsEnabled(false);
      }, 500);
      return () => window.clearTimeout(timeout);
    }
  }, [animationsEnabled]);

  function toggleNav() {
    setAnimationsEnabled(true);
    setOpenDrawer((s) => !s);
  }

  const isHome = pathname === "/";
  return (
    <>
      <nav
        className={cn(
          "bg-black relative white main-nav serif top-0 left-0 right-0 z-3",
          {
            ["fixed-ns"]: !isHome,
            [styles.home]: isHome,
          }
        )}
      >
        <div className="mw7 flex-ns justify-between items-center center">
          <div className="flex z-4 fixed static-ns w-100 w-auto-ns">
            <button
              className={cn("dn-ns z-5", styles.menu, {
                white: !isHome || openDrawer,
                black: isHome && !openDrawer,
              })}
              onClick={toggleNav}
              ref={buttonRef}
            >
              <div className={styles.menuLines} />
            </button>
            <Link
              href="/"
              className={cn(
                "f4 fw6 db mr4-ns nowrap no-underline bg-primary",
                "i w-100 w-auto-ns z-4",
                styles.title,
                {
                  [styles.in]: openDrawer,
                  [styles.animate]: animationsEnabled,
                }
              )}
            >
              Amy Lynn Green
            </Link>
          </div>
          <ul
            className={cn(
              "flex flex-wrap bg-black justify-between flex-column flex-row-ns db-ns",
              "fixed top-3 left-0 z-3 w-100 static-ns",
              styles.navList,
              {
                "w-100": isHome,
                [styles.in]: openDrawer,
                [styles.animate]: animationsEnabled,
              }
            )}
            ref={drawerRef}
          >
            {mainMenu.map((menu) => (
              <NavigationLink key={menu.title} {...menu} />
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={cn("pt5", {
          "pt0-ns": isHome,
        })}
      />
    </>
  );
}
