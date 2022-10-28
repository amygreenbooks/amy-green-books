import { GetStaticProps } from "next";
import Head from "next/head";

import Masthead from "../components/header/masthead";
import Layout from "../components/layout";
import Home from "../components/layouts/home";
import {
  getContentData,
  getBookSummaries,
  getBookSummaryData,
  BookSummaryType,
  Source,
} from "../lib/content";
import { mainMenu, MenuItem } from "../siteConfig";

export default function HomePage({
  homeContent,
  books,
  menu,
}: {
  homeContent: {
    title: string;
    subtitle: string;
    bannerImage: string;
    welcome: {
      text_md: Source;
      heading: string;
      image: string;
    };
  };
  books: Array<BookSummaryType>;
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
