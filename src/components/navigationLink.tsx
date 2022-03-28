import React, { MouseEventHandler } from "react";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import { MenuItem } from "../siteConfig";

export default function NavigationLink({
  home,
  title,
  url,
  subMenus,
}: MenuItem & { home?: boolean }) {
  const router = useRouter();
  const active = router.asPath.indexOf(url) !== -1;

  const [isOpen, setIsOpen] = React.useState(false);

  const showMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setIsOpen(true);
  };

  React.useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      event.preventDefault();
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", closeMenu);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isOpen]);

  const name = `menu-${title.replace(" ", "-")}`;

  return (
    <li className={cn("tc nav-cont", { home, active })}>
      {subMenus ? (
        <>
          <button
            type="button"
            id={name}
            aria-haspopup="true"
            aria-expanded="false"
            className="nav-link"
            onClick={showMenu}
          >
            {title}
          </button>
          <ul
            role="menu"
            aria-labelledby={name}
            className={cn("dropdown", { open: isOpen })}
          >
            {subMenus.map((menu) => (
              <NavigationLink key={menu.title} {...menu} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={url}>
          <a className="nav-link">{title}</a>
        </Link>
      )}

      <style jsx>{`
        .nav-cont {
          flex: 1 0 auto;
        }

        .nav-link {
          background: transparent;
          box-sizing: border-box;
          border-color: var(--black);
          border-width: var(--spacing-extra-small);
          border-bottom-style: solid;
          border-bottom-width: 6px;
          border-radius: 0;
          color: inherit;
          display: block;
          font-size: inherit;
          line-height: inherit;
          padding: var(--spacing-medium);
          text-decoration: none;
          white-space: nowrap;
          width: 100%;
        }

        .home > .nav-link {
          padding: var(--spacing-medium) var(--spacing-small);
          border-bottom-style: none;
        }

        .active > .nav-link {
          border-color: var(--primary);
        }

        .nav-link:hover,
        .nav-link:focus {
          background: var(--primary);
          border-color: var(--primary);
          outline: none;
        }

        .dropdown {
          position: absolute;
          background-color: var(--black);
          display: none;
          z-index: 30000;
        }

        .dropdown.open {
          display: block;
        }

        .dropdown .nav-link {
          padding-left: var(--spacing-medium);
          padding-right: var(--spacing-medium);
          border-bottom-style: none;
        }
      `}</style>
    </li>
  );
}
