import { MouseEventHandler, useState, useEffect } from "react";
import cn from "classnames";
import { MenuItem } from "../siteConfig";
import styles from "./navigationLink.module.css";

export default function NavigationLink({
  home,
  title,
  url,
  subMenus,
}: MenuItem & { home?: boolean }) {
  // const active = router.asPath.indexOf(url) !== -1;
  const active = false;

  const [isOpen, setIsOpen] = useState(false);

  const showMenu: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log(isOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.setTimeout(() => document.addEventListener("click", closeMenu), 1);
      return () => document.removeEventListener("click", closeMenu);
    }
  }, [isOpen]);

  const name = `menu-${title.replace(" ", "-")}`;

  return (
    <li
      className={cn("tc", styles["nav-cont"], {
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
        <a className={styles["nav-link"]} href={url}>
          {title}
        </a>
      )}
    </li>
  );
}
