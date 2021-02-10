import Link from "next/link";
import { mainMenu } from "../content/siteConfig";
import NavigationLink from "./navigationLink";

export default function Nav() {
  return (
    <nav className="bg-black relative white main-nav">
      <div className="mw7 flex-ns flex-wrap justify-between items-center center">
        <Link href="/">
          <a className="pa3 fw6 db mr4-ns nowrap no-underline bg-primary bw1 b--primary bb bt">
            Amy Lynn Green
          </a>
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
