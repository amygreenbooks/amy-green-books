import BookSummary from "@/components/book/bookSummary";
import Markdown from "@/components/markdown";
import imgSrcSet from "@/components/util/imgSrcSet";
import { BookType, MarkdownResult } from "@/lib/content";

import styles from "./home-page.module.css";

export default function HomePage({
  books,
  welcome,
  title,
  subtitle,
}: {
  books: Array<MarkdownResult<BookType>>;
  welcome: {
    heading: string;
    text: string;
    image: string;
  };
  title: string;
  subtitle: string;
}) {
  const hasFeaturedBook =
    books.length > 0 &&
    books[0].frontmatter.releaseDate &&
    books[0].frontmatter.releaseDate >= new Date(Date.now());

  return (
    <>
      <header
        className={`flex flex-column flex-row-ns items-center center mw7 pv5 ph3 serif`}
      >
        <img
          {...imgSrcSet({
            src: "/media/meet-amy.png",
            resize: "fit",
            w: 240,
            h: 240,
          })}
          className={`db br-100 w-100 mr5-ns paper-2 ${styles.headShot}`}
          alt="A photo of Amy Lynn Green"
        />
        <div>
          <h1 className="f1 fw9 lh-title black mt3">{title}</h1>
          <p className="f4 fw5 i lh-title mw-100 grey-4 o-60">{subtitle}</p>
        </div>
      </header>
      <section className={`${styles.bookSection}`}>
        {hasFeaturedBook && (
          <div className="bg-white">
            <div className="mw7 center flex-m flex-wrap items-start pt5">
              <BookSummary book={books[0]} featured />
            </div>
          </div>
        )}
        <div className="pt5">
          {books.slice(hasFeaturedBook ? 1 : 0).map((book, i) => (
            <BookSummary key={book.id} book={book} flipped={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="pb4 pt5 mw7 center flex-m mb4">
        <div className="ph3 order-last-m">
          <img
            {...imgSrcSet({
              src: welcome.image,
              resize: "fit",
              w: 350,
            })}
            alt="Amy Lynn Green"
            className="db mb2 center mw4"
          />
        </div>

        <div className="ph3">
          <h3 className="f3 b lh-title mb1 serif">{welcome.heading}</h3>
          <div className="cms">
            <Markdown source={welcome.text} />
          </div>
        </div>
      </section>
    </>
  );
}
