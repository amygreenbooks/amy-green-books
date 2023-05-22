import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
import { getBooks } from "../../lib/content";
import { mainMenu } from "../../siteConfig";
import styles from "./layout.module.css";

export const metadata = {
  metadataBase: new URL("https://amygreenbooks.com"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBooks();

  return (
    <>
      <div id="skip" className={styles.skip}>
        <a href="#main-content">Skip to main content</a>
      </div>
      <Nav mainMenu={mainMenu(books)} />
      <main id="main-content">{children}</main>
      <Footer mainMenu={mainMenu(books)} />
    </>
  );
}
