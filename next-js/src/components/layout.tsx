import { MenuItem } from "../../../src/siteConfig";
import Footer from "./footer";
import styles from "./layout.module.css";
import Meta from "./meta";
import Nav from "./nav";

export default function Layout({
  children,
  home,
  nav,
  mainMenu,
  ...props
}: {
  children: React.ReactNode;
  home?: boolean;
  nav?: React.ReactNode;
  mainMenu: Array<MenuItem>;
}) {
  return (
    <>
      <Meta home={home} {...props} />
      <div id="skip" className={styles.skip}>
        <a href="#maincontent">Skip to main content</a>
      </div>

      {nav || <Nav mainMenu={mainMenu} />}

      <main id="maincontent">{children}</main>

      <Footer mainMenu={mainMenu} />
    </>
  );
}
