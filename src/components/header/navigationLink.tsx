import React, { MouseEventHandler } from "react";

import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuItem } from "../../siteConfig";
import styles from "./navigationLink.module.css";

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
    event.stopPropagation();
    setIsOpen(true);
  };

  React.useEffect(() => {
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
    <li
      className={cn("tc", styles.container, {
        [styles.home]: home,
        [styles.active]: active,
      })}
    >
      {subMenus ? (
        <>
          <button
            type="button"
            id={name}
            aria-haspopup="true"
            aria-expanded="false"
            className={styles["nav-link"]}
            onClick={showMenu}
          >
            {title}
          </button>
          <ul
            role="menu"
            aria-labelledby={name}
            className={cn(styles.dropdown, { [styles.open]: isOpen })}
          >
            {subMenus.map((menu) => (
              <NavigationLink key={menu.title} {...menu} />
            ))}
          </ul>
        </>
      ) : (
        <Link href={url} className={styles["nav-link"]}>
          {title}
        </Link>
      )}
    </li>
  );
}
