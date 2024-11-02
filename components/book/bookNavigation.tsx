import Image from "next/image";
import Link from "next/link";

import styles from "./bookNavigation.module.css";
import { MarkdownResult, BookType } from "../../lib/content";

function BookNavLink({
  id,
  frontmatter: { image, title, paperTint },
}: MarkdownResult<BookType>) {
  return (
    <>
      <Link
        href={`/books/${id}`}
        className={`flex items-center pa2 br1 ${styles["book-link"]}`}
        style={{ "--paper-tint": paperTint } as React.CSSProperties}
      >
        {image && (
          <Image
            src={image}
            height={120}
            width={78}
            aria-labelledby={`exp-book-${id}`}
            alt=""
            className={styles.cover}
          />
        )}
        <div className="ml3 ml2-ns">
          <h4 className="f5 f6-ns b i mb1 serif" id={`exp-book-${id}`}>
            {title}
          </h4>
          <p className="ma0 f6">View Book</p>
        </div>
      </Link>
    </>
  );
}

export default function BookNavigation({
  otherBooks,
}: {
  otherBooks: MarkdownResult<BookType>[];
}) {
  return (
    <>
      <h2 className="lh-title black f3 b mb1 serif">Explore my other books</h2>
      <div className="flex-ns flex-wrap mhn2">
        {otherBooks.map((book) => (
          <div className={styles["book-nav"]} key={book.id}>
            <BookNavLink {...book} />
          </div>
        ))}
      </div>
    </>
  );
}
