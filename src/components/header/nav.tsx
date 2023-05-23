import Link from "next/link";

import { MenuItem } from "../../siteConfig";
import NavigationLink from "./navigationLink";

export default function Nav({ mainMenu }: { mainMenu: Array<MenuItem> }) {
  return (
    <nav className="bg-black relative white main-nav serif">
      <div className="mw7 flex-ns flex-wrap justify-between items-center center">
        <Link
          href="/"
          className="pa3 fw6 db mr4-ns nowrap no-underline bg-primary bw1 b--primary bb bt i"
        >
          Amy Lynn Green
        </Link>
        <ul className="flex overflow-x-scroll overflow-x-visible-ns">
          {mainMenu.map((menu) => (
            <NavigationLink key={menu.title} {...menu} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
