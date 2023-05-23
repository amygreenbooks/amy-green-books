import Link from "next/link";

import { MarkdownResult, BookType } from "../../lib/content";
import imgSrcSet from "../util/imgSrcSet";
import styles from "./bookNavigation.module.css";

function BookNavLink({
  id,
  frontmatter: { image, title },
  right = false,
}: MarkdownResult<BookType> & {
  right?: boolean;
}) {
  return (
    <>
      <Link
        href={`/books/${id}`}
        className={`flex items-center pa2 ${styles["book-link"]} raise`}
      >
        {!right && <span className="arrow mr2 db-ns dn">←</span>}
        {image && (
          <img
            {...imgSrcSet({
              src: image,
              resize: "fit",
              h: 120,
            })}
            aria-labelledby={`exp-book-${id}`}
            className={styles.cover}
          />
        )}
        <div className="ml3 ml2-ns">
          <h4 className="f5 f6-ns b i mb1 serif" id={`exp-book-${id}`}>
            {title}
          </h4>
          <p className="ma0 f6">View Book</p>
        </div>
        {right && <span className="arrow mr2 db-ns dn">→</span>}
      </Link>
    </>
  );
}

export default function BookNavigation({
  next,
  previous,
}: {
  next: MarkdownResult<BookType>;
  previous?: MarkdownResult<BookType>;
}) {
  return (
    <section className="mw6 mb5 ph3 center">
      <h2 className="lh-title primary f3 b mb1 serif">
        Explore my other books
      </h2>
      <div className="flex-ns">
        <div className={styles["book-nav"]}>
          {next && <BookNavLink {...next} />}
        </div>
        <div className={styles["book-nav"]}>
          {previous && <BookNavLink {...previous} right />}
        </div>
      </div>
    </section>
  );
}
