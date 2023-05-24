import Footer from "../../components/footer/footer";
import Nav from "../../components/header/nav";
import { getBooks } from "../../lib/content";
import { mainMenu } from "../../siteConfig";

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
      <Nav mainMenu={mainMenu(books)} />
      <main id="main-content" className="pt5-ns">
        {children}
      </main>
      <Footer mainMenu={mainMenu(books)} />
    </>
  );
}
