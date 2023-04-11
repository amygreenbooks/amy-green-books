import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
import { getBookSummaries } from "../../lib/content";
import { mainMenu } from "../../siteConfig";
import styles from "./layout.module.css";

export const metadata = {
  charSet: "utf-8",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const books = await getBookSummaries();

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
