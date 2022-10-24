import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { MenuItem } from "~/siteConfig";
import cn from "classnames";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./navLink.css";

export const NavLink = component$(
  ({ home, title, url, subMenus }: MenuItem & { home?: boolean }) => {
    useStylesScoped$(styles);
    const { pathname } = useLocation();
    const active = pathname.indexOf(url) !== -1;
    const store = useStore({ isOpen: false });
    const name = `menu-${title.replace(" ", "-")}`;

    useClientEffect$(({ track }) => {
      const isOpen = track(() => store.isOpen);
      const closeMenu = (event: MouseEvent) => {
        event.preventDefault();
        store.isOpen = false;
      };
      if (isOpen) {
        document.addEventListener("click", closeMenu);
        return () => document.removeEventListener("click", closeMenu);
      }
    });

    return (
      <li class={cn("tc nav-cont", { home, active })}>
        {subMenus ? (
          <>
            <button
              type="button"
              id={name}
              aria-haspopup="true"
              aria-expanded="false"
              class="nav-link"
              preventdefault:click
              onClick$={() => (store.isOpen = true)}
            >
              {title}
            </button>
            <ul
              role="menu"
              aria-labelledby={name}
              class={cn("dropdown", { open: store.isOpen })}
            >
              {subMenus.map((menu) => (
                <NavLink {...menu} />
              ))}
            </ul>
          </>
        ) : (
          <Link href={url} class="nav-link">
            {title}
          </Link>
        )}
      </li>
    );
  }
);

export default NavLink;
