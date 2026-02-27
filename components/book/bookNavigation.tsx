import Link from "next/link";

import styles from "./bookNavigation.module.css";
import { MarkdownResult, BookType } from "../../lib/content";
import CldImage from "../CldImage";

function BookNavLink({
  id,
  frontmatter: { image, title, paperTint },
}: MarkdownResult<BookType>) {
  return (
    <Link
      href={`/books/${id}`}
      className={`flex items-center justify-center pa2 br1 ${styles["book-link"]}`}
      style={{ "--paper-tint": paperTint } as React.CSSProperties}
    >
      <CldImage
        src={image}
        height={280}
        width={182}
        alt={title}
        className={styles.cover}
      />
    </Link>
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
      <div className={`mhn2 ${styles["book-nav-container"]}`}>
        {otherBooks
          .filter((b) => !!b.frontmatter.image)
          .map((book) => (
            <BookNavLink {...book} key={book.id} />
          ))}
      </div>
    </>
  );
}
