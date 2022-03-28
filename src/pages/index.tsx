import Head from "next/head";
import Layout from "../components/layout";
import Masthead from "../components/masthead";
import Home from "../components/layouts/home";
import {
  getContentData,
  getBookSummaries,
  getBookSummaryData,
  ContentData,
  BookSummary,
} from "../lib/content";
import { mainMenu, MenuItem } from "../siteConfig";
import { GetStaticProps } from "next";

export default function HomePage({
  homeContent,
  books,
  menu,
}: {
  homeContent: ContentData;
  books: Array<BookSummary>;
  menu: Array<MenuItem>;
}) {
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

export const getStaticProps: GetStaticProps = async () => {
  const homeContent = await getContentData(null, "index");
  const books = await getBookSummaries();
  return {
    props: {
      homeContent,
      books: books.map(getBookSummaryData),
      menu: mainMenu(books),
    },
  };
};
