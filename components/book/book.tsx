import { BookType, MarkdownResult } from "@/lib/content";

import styles from "./book.module.css";
import BookCover from "./bookCover";
import BookNavigation from "./bookNavigation";
import Endorsements from "./endorsements";
import RetailerComp from "./retailer";
import DateComponent from "../date";

export default function Book({
  frontmatter: {
    title,
    releaseDate,
    image,
    spineImage,
    retailers,
    endorsements,
    paperTint,
  },
  content,
  otherBooks,
}: {
  frontmatter: BookType;
  content: React.ReactElement;
  otherBooks: MarkdownResult<BookType>[];
}) {
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
            top: "calc(min(7rem, 20vh))",
          }}
        />
      </div>

      {content && (
        <div className={`cms ${styles.body}`} itemProp="abstract">
          {content}
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
    </article>
  );
}
