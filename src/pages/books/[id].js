import Head from "next/head";

import BookNavigation from "../../components/book/bookNavigation";
import HistoryLink from "../../components/book/historyLink";
import Layout from "../../components/layout";
import Book from "../../components/layouts/book";
import {
  getAllContentIds,
  getContentData,
  getSortedContentData,
  getBookSummaryData,
} from "../../lib/content";
import { socialLinks, author, mainMenu } from "../../siteConfig";

const contentType = "books";

export default function BookPage({ bookData, next, previous, history, menu }) {
  const { title, releaseDate, description, image, isbn } = bookData;

  return (
    <Layout
      title={title}
      description={description}
      image={image}
      book
      mainMenu={menu}
    >
      <Head>
        <meta property="og:type" content="book" />
        <meta property="article:publisher" content={socialLinks.facebook} />

        <meta property="og:book:author" content={author} />
        <meta property="og:article:author" content={author} />
        <meta property="article:author" content={author} />
        <meta name="author" content={author} />

        {isbn && <meta property="og:book:isbn" content={isbn} />}

        {releaseDate && (
          <meta property="og:book:releasedate" content={releaseDate} />
        )}
      </Head>
      <Book {...bookData} />
      <BookNavigation next={next} previous={previous} />
      {history && (
        <HistoryLink
          href={`/history/${history.id}`}
          title={
            <>
              History Behind <em>{history.title}</em>
            </>
          }
          description={
            <>
              Explore the real history behind <em>{title}</em>
            </>
          }
        />
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds(contentType).map((id) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bookData = await getContentData(contentType, params.id);
  const allBooks = await getSortedContentData("books");
  const bookIndex = allBooks.findIndex((n) => n.id == params.id);
  const previous = getBookSummaryData(
    allBooks[(bookIndex + 1) % allBooks.length]
  );
  const next = getBookSummaryData(
    allBooks[(bookIndex + allBooks.length - 1) % allBooks.length]
  );
  const history =
    (await getSortedContentData("history")).find((n) => n.id === params.id) ||
    null;

  return {
    props: {
      bookData,
      next,
      previous,
      history,
      menu: mainMenu(allBooks),
    },
  };
}
