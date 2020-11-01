import Meta from "./meta";
import Nav from "./nav";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children, home, nav, ...props }) {
  return (
    <>
      <Meta home={home} {...props} />
      <div id="skip" className={styles.skip}>
        <a href="#maincontent">Skip to main content</a>
      </div>

      {nav || <Nav />}

      <main id="maincontent">{children}</main>

      <Footer />
    </>
  );
}
