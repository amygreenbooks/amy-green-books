import Head from "next/head";
import Layout from "../components/layout";
import Masthead from "../components/masthead";
import Home from "../components/layouts/home";
import { getContentData, getSortedContentData } from "../lib/content";
import { mainMenu } from "../content/siteConfig";

export default function HomePage({ homeContent, books, menu }) {
  const { title, subtitle, bannerImage, welcome } = homeContent;

  const nav = (
    <Masthead
      title={title}
      subtitle={subtitle}
      bannerImage={bannerImage}
      mainMenu={menu}
    />
  );

  return (
    <Layout nav={nav} mainMenu={menu}>
      <Head>
        <title>{"Amy Green Books"}</title>
      </Head>
      <Home books={books} welcome={welcome} />
    </Layout>
  );
}

export async function getStaticProps() {
  const homeContent = await getContentData(null, "index");
  const books = await getSortedContentData("books");
  return {
    props: {
      homeContent,
      books: books.map((b) => ({
        id: b.id || null,
        image: b.image || null,
        spineImage: b.spineImage || null,
        title: b.title || null,
        releaseDate: b.releaseDate || null,
        description: b.description || null,
      })),
      menu: mainMenu(books),
    },
  };
}
