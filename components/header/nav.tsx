"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import styles from "./nav.module.css";
import NavigationLink from "./navigationLink";
import { MenuItem } from "../../lib/siteConfig";

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
      }, 200);
      return () => window.clearTimeout(timeout);
    }
  }, [animationsEnabled]);

  function toggleNav() {
    setAnimationsEnabled(true);
    window.requestAnimationFrame(() => {
      setOpenDrawer((s) => !s);
    });
  }

  const isHome = pathname === "/";
  return (
    <>
      <nav
        className={cn(
          "white main-nav z-3 relative left-0 right-0 top-0 bg-black font-serif",
          {
            ["sm:fixed"]: !isHome,
            [styles.home]: isHome,
          },
        )}
      >
        <div className="mx-auto max-w-3xl items-center justify-between sm:flex">
          <div className="z-4 fixed flex w-full sm:static sm:w-auto">
            <button
              className={cn("sm:dn z-5", styles.menu, {
                white: !isHome || openDrawer,
                black: isHome && !openDrawer,
                [styles.in]: openDrawer,
              })}
              onClick={toggleNav}
              ref={buttonRef}
              aria-label="Navigation Menu"
            >
              <div className={styles.menuLines} />
            </button>
            <Link
              href="/"
              className={cn(
                "nowrap bg-primary text-xl font-semibold no-underline sm:mr-8",
                "z-4 w-full italic sm:w-auto",
                styles.title,
                {
                  [styles.in]: openDrawer,
                  [styles.animate]: animationsEnabled,
                },
              )}
            >
              Amy Lynn Green
            </Link>
          </div>
          <ul
            className={cn(
              "flex-col justify-between bg-black sm:flex-row sm:flex-wrap",
              "z-3 fixed left-0 top-3 w-full sm:static",
              styles.navList,
              {
                "w-full": isHome,
                [styles.in]: openDrawer,
                [styles.animate]: animationsEnabled,
              },
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
        className={cn("pt-16", {
          "sm:pt-0": isHome,
        })}
      />
    </>
  );
}
