import cn from "classnames";
import Link from "next/link";

import { BookType, MarkdownResult } from "../../lib/content";
import DateCmp from "../date";
import BookCover from "./bookCover";
import styles from "./bookSummary.module.css";

export default function BookSummary({
  book: {
    id,
    frontmatter: {
      releaseDate,
      retailers,
      title,
      image,
      spineImage,
      description,
    },
  },
  featured = false,
}: {
  book: MarkdownResult<BookType>;
  featured?: boolean;
}) {
  const isReleased = !releaseDate || releaseDate < new Date(Date.now());
  const retailer = (retailers || []).reduce((acc, n) =>
    n.name === "Baker Book House" ? n : acc
  );

  return (
    <article
      className={cn(styles.article, {
        [styles.featured]: featured,
        "items-start": description,
        "items-center": !description,
      })}
    >
      {image && (
        <Link
          href={`/books/${id}`}
          className={`${styles.side} ${styles["img-side"]}`}
        >
          <BookCover
            title={title}
            image={image}
            spineImage={spineImage}
            animateIn
          />
        </Link>
      )}

      <div className={`${styles.side} ${styles["text-side"]}`}>
        <header>
          <h3 className="f3 b lh-title mb1">
            <em>{title}</em>
          </h3>
          {!isReleased && (
            <p className="mid-gray lh-title mb2">
              Releases: <DateCmp date={releaseDate} />
            </p>
          )}
        </header>
        <p>{description}</p>
        <footer>
          <Link href={`/books/${id}`} className="link">
            Learn more →
          </Link>
          {featured && !isReleased && retailer && (
            <div className="mt2">
              <a
                href={retailer.link}
                target="_blank"
                rel="noreferrer"
                className="bg-primary white f6 btn raise"
              >
                Pre-Order Now!
              </a>
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
