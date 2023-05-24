import cn from "classnames";

import Footer from "@/components/footer/footer";
import Masthead from "@/components/header/masthead";
import Nav from "@/components/header/nav";
import { getContentData, getBooks } from "@/lib/content";
import { mainMenu } from "@/siteConfig";

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
    frontmatter: { welcome, title, subtitle },
  } = await getContentData<HomeContent>(null, "index");
  const books = await getBooks();
  const menu = mainMenu(books);
  const useMasthead = true;
  return (
    <>
      {useMasthead ? <Masthead mainMenu={menu} /> : <Nav mainMenu={menu} />}

      <main
        id="main-content"
        className={cn({
          pt5: !useMasthead,
        })}
      >
        <HomePage
          subtitle={subtitle}
          title={title}
          books={books}
          welcome={welcome}
        />
      </main>
      <Footer mainMenu={menu} />
    </>
  );
}
