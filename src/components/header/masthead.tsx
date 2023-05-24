import { MenuItem } from "../../siteConfig";
import NavigationLink from "./navigationLink";

interface MastheadProps {
  mainMenu: MenuItem[];
}

export default function Masthead({ mainMenu }: MastheadProps) {
  return (
    <nav className="flex bw2 main-nav w-100 bg-black white serif">
      <ul className="flex flex-wrap justify-between center w-100 mw7">
        {mainMenu.map((menu) => (
          <NavigationLink key={menu.title} {...menu} />
        ))}
      </ul>
    </nav>
  );
}
