import Footer from "../components/footer/footer";
import Masthead from "../components/header/masthead";
import { getContentData, getBooks } from "../lib/content";
import { mainMenu } from "../siteConfig";
import HomePage from "./home-page";

type HomeContent = {
  title: string;
  date: number;
  subtitle: string;
  bannerImage: string;
  welcome: {
    text: string;
    heading: string;
    image: string;
  };
};

export default async function Page() {
  const {
    frontmatter: { title, subtitle, bannerImage, welcome },
  } = await getContentData<HomeContent>(null, "index");
  const books = await getBooks();
  const menu = mainMenu(books);
  return (
    <>
      <Masthead
        title={title}
        subtitle={subtitle}
        bannerImage={bannerImage}
        mainMenu={menu}
      />
      <main id="maincontent">
        <HomePage books={books} welcome={welcome} />
      </main>
      <Footer mainMenu={menu} />
    </>
  );
}
