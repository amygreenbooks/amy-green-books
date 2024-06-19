"use client";

import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

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
          "relative left-0 right-0 top-0 z-10 bg-black font-serif text-primary-foreground",
          {
            ["sm:fixed"]: !isHome,
          },
        )}
      >
        <div className="mx-auto max-w-3xl items-center justify-between sm:flex">
          <div className="fixed z-40 flex w-full sm:static sm:w-auto">
            <button
              className={cn(
                "absolute z-50 h-16 w-12 flex-shrink-0 cursor-pointer border-none bg-transparent p-0 outline-none sm:hidden",
                {
                  "text-primary-foreground": !isHome || openDrawer,
                  "text-foreground": isHome && !openDrawer,
                },
              )}
              onClick={toggleNav}
              ref={buttonRef}
              aria-label="Navigation Menu"
            >
              <div
                className={cn(
                  "pointer-events-none absolute left-[30%] top-[55%] mt-[-0.125em] block h-[1px] w-[40%] bg-current transition-transform",
                  "before:absolute before:left-0 before:top-[0.4rem] before:block before:h-[1px] before:w-full before:bg-current before:transition-transform",
                  "after:absolute after:left-0 after:top-[-0.4rem] after:block after:h-[1px] after:w-full after:bg-current after:transition-transform",
                  {
                    ["bg-transparent before:translate-y-[-7.1px] before:rotate-[135deg] after:translate-y-[7.1px] after:rotate-45"]:
                      openDrawer,
                  },
                )}
              />
            </button>
            <Link
              href="/"
              className={cn(
                "z-40 block w-full text-nowrap bg-primary p-4 text-xl font-semibold italic leading-8 no-underline max-sm:pl-16 sm:mr-8 sm:w-auto",
                {
                  "hidden -translate-y-full": isHome,
                  "translate-y-0": isHome && openDrawer,
                  "transition-transform": isHome && animationsEnabled,
                  "max-sm:block": isHome && (openDrawer || animationsEnabled),
                },
              )}
            >
              Amy Lynn Green
            </Link>
          </div>
          <ul
            className={cn(
              "fixed left-0 top-16 z-30 hidden w-full flex-col justify-between bg-black max-sm:max-h-[calc(100%-4rem)] max-sm:translate-y-[calc(-100%-4rem)] max-sm:overflow-y-scroll sm:static sm:flex sm:flex-row sm:flex-wrap",
              {
                "w-full": isHome,
                "max-sm:translate-y-0": openDrawer,
                "transition-transform": animationsEnabled,
                flex: openDrawer || animationsEnabled,
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
