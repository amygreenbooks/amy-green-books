import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import { getBooks } from "@/lib/content";
import { mainMenu } from "@/siteConfig";

import styles from "./layout.module.css";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBooks();
  const menu = mainMenu(books);
  return (
    <>
      <div id="skip" className={styles.skip}>
        <a href="#main-content">Skip to main content</a>
      </div>
      <Nav mainMenu={menu} />
      <main id="main-content">{children}</main>
      <Footer mainMenu={menu} />
    </>
  );
}
