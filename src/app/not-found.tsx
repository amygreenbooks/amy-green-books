import Footer from "@/components/footer/footer";
import Nav from "@/components/header/nav";
import { getBooks } from "@/lib/content";
import { mainMenu } from "@/siteConfig";

export default async function NotFound() {
  const books = await getBooks();
  return (
    <>
      <Nav mainMenu={mainMenu(books)} />
      <main id="main-content">
        <div className="ph4">
          <div className="measure center mt6 mb6 tc">
            <h2 className="db primary f2 b lh-title mb1">Not Found</h2>
            <p className="mid-gray lh-title">
              Could not find requested resource
            </p>
          </div>
        </div>
      </main>
      <Footer mainMenu={mainMenu(books)} />
    </>
  );
}
