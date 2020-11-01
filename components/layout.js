import Meta from "./meta";
import Nav from "./nav";
import Footer from "./footer";
import styles from "./layout.module.css";

export default function Layout({ children, home, nav }) {
  return (
    <>
      <Meta home={home} />
      <div id="skip" className={styles.skip}>
        <a href="#maincontent">Skip to main content</a>
      </div>

      {nav || <Nav />}

      <main id="maincontent">{children}</main>

      <Footer />
    </>
  );
}
