import { BookType } from "@/lib/content";

import DateComponent from "../date";
import styles from "./book.module.css";
import BookCover from "./bookCover";
import EndorsementComp from "./endorsement";
import RetailerComp from "./retailer";

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
        <div className="mw6 ph3 center">
          <h2 className="f3 b lh-title serif">
            {isReleased ? "Purchase today at:" : "Pre-order now at:"}
          </h2>

          <div className="flex flex-wrap justify-center">
            {retailers.map((retailer, i) => (
              <RetailerComp key={`retailer-${i}`} {...retailer} />
            ))}
          </div>
        </div>
      </section>

      {endorsements && endorsements.length > 0 && (
        <section className={`mb5 ${styles.endorsements}`}>
          {endorsements.map((endorsement, i) => (
            <EndorsementComp key={`endorsement-${i}`} {...endorsement} />
          ))}
        </section>
      )}
    </article>
  );
}
