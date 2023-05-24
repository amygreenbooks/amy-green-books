import Link from "next/link";

import { MenuItem } from "../../siteConfig";
import styles from "./nav.module.css";
import NavigationLink from "./navigationLink";

export default function Nav({ mainMenu }: { mainMenu: Array<MenuItem> }) {
  return (
    <nav className="bg-black relative white main-nav serif fixed-ns top-0 left-0 right-0 z-3">
      <div className="mw7 flex-ns flex-wrap justify-between items-center center">
        <Link
          href="/"
          className={`f4 pa3 fw6 db mr4-ns nowrap no-underline bg-primary i ${styles.title}`}
        >
          Amy Lynn Green
        </Link>
        <ul className="flex overflow-x-scroll overflow-x-visible-ns overflow-y-visible">
          {mainMenu.map((menu) => (
            <NavigationLink key={menu.title} {...menu} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
