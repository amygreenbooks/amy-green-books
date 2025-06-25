import { Metadata } from "next";

import styles from "./book.module.css";
import DateComponent from "@/components/date";
import BookCover from "@/components/book/bookCover";
import RetailerComp from "@/components/book/retailer";
import Endorsements from "@/components/book/endorsements";
import BookNavigation from "@/components/book/bookNavigation";
import HistoryLink from "@/components/book/historyLink";
import GoodReads from "@/components/book/goodReads";
import {
  BookType,
  getAllContentIds,
  getBooks,
  getContentData,
  getHistoryPages,
} from "@/lib/content";
import { author, domain } from "@/lib/siteConfig";

type BookPageParams = Promise<{ slug: string }>;

export default async function BookPage({ params }: { params: BookPageParams }) {
  const { slug } = await params;
  const bookData = await getContentData<BookType>("books", slug);
  const allBooks = await getBooks();
  const otherBooks = allBooks.filter((n) => n.id !== slug);
  const history = (await getHistoryPages()).find((n) => n.id === slug) || null;
  const {
    releaseDate,
    title,
    image,
    spineImage,
    retailers,
    endorsements,
    paperTint,
    isbn,
  } = bookData.frontmatter;
  const isReleased = releaseDate && Date.parse(releaseDate) < Date.now();

  return (
    <article
      className={styles.book}
      itemScope
      itemType="https://schema.org/Book"
    >
      <header className={styles.header}>
        <h1 className="f2 lh-title b i mb3 serif" itemProp="name">
          {title}
        </h1>
        {!isReleased && releaseDate && (
          <p className="grey-3 b lh-title mb2">
            Releases:{" "}
            <DateComponent date={releaseDate} itemProp="datePublished" />
          </p>
        )}
      </header>

      <div className={styles.image}>
        <BookCover
          title={`Cover for ${title}`}
          image={image}
          spineImage={spineImage}
          style={{
            position: "sticky",
            top: "calc(min(10rem, 20vh))",
          }}
        />
      </div>

      {bookData.content && (
        <div className={`cms ${styles.body}`} itemProp="abstract">
          {bookData.content}
        </div>
      )}

      {retailers && (
        <section
          className={`mt4 mb5 pv4 ${styles.purchase}`}
          style={{
            backgroundColor: paperTint,
          }}
        >
          <div className={`center ${styles.purchaseContainer}`}>
            <h2 className="f3 b lh-title serif mb2">
              {isReleased ? "Purchase today at:" : "Pre-order now at:"}
            </h2>

            <div className="flex flex-wrap mhn2 justify-center">
              {retailers.map((retailer, i) => (
                <RetailerComp key={`retailer-${i}`} {...retailer} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.endorsements}>
        <Endorsements endorsements={endorsements} />
      </section>

      <section className={styles.bookNavigation}>
        <BookNavigation otherBooks={otherBooks} />
      </section>

      {history && (
        <section className={styles.history}>
          <HistoryLink
            href={`/history/${history.id}`}
            title={
              <>
                History Behind <em>{title}</em>
              </>
            }
            description={
              <>
                Explore the real history behind <em>{title}</em>
              </>
            }
          />
        </section>
      )}

      {isbn && <GoodReads className={styles.goodReads} isbn={isbn} />}
    </article>
  );
}

export async function generateStaticParams() {
  return getAllContentIds("books").map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: BookPageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter: bookData } = await getContentData<BookType>(
    "books",
    slug,
  );
  return {
    title: bookData.title,
    description: bookData.description,
    openGraph: {
      title: bookData.title,
      description: bookData.description,
      type: "book",
      authors: [author],
      isbn: bookData.isbn,
      releaseDate: bookData.releaseDate
        ? new Date(Date.parse(bookData.releaseDate)).toISOString()
        : undefined,
      images: [
        {
          url: `${domain}${bookData.image}`,
        },
      ],
    },
    twitter: {
      title: bookData.title,
      description: bookData.description,
      images: [`${domain}${bookData.image}`],
    },
  };
}
