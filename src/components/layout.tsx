import { MenuItem } from "../siteConfig";
import Footer from "./footer/footer";
import Nav from "./header/nav";
import styles from "./layout.module.css";
import Meta from "./meta";

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
