import { BookType } from "@/lib/content";

import styles from "./book.module.css";
import BookCover from "./bookCover";
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
}: {
  frontmatter: BookType;
  content: React.ReactElement;
}) {
  const isReleased = releaseDate && releaseDate < new Date(Date.now());

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
            top: "6rem",
          }}
        />
      </div>

      {content && (
        <div className={`cms ${styles.body}`} itemProp="abstract">
          {content}
        </div>
      )}

      <section
        className={`mt4 mb5 pv4 ${styles.purchase}`}
        style={{
          backgroundColor: paperTint,
        }}
      >
        <div className={`ph3 center ${styles.purchaseContainer}`}>
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

      <div className={styles.endorsements}>
        <Endorsements endorsements={endorsements} />
      </div>
    </article>
  );
}
