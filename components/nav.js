import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import { mainMenu } from "../content/siteConfig";

function NavLink({ href, children }) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <li>
      <Link href={href}>
        <a
          className={cn("pa3 no-underline db nowrap bb bw2", {
            ["b--primary"]: active,
            ["b--black"]: !active,
          })}
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

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
          {mainMenu.map(({ title, url }) => (
            <NavLink href={url} key={url}>
              {title}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}
