import { parseISO } from "date-fns";
import DateComponent from "../date";
import Markdown from "../markdown";
import Retailer from "../retailer";
import Endorsement from "../endorsement";
import BookCover from "../bookCover";

export default function Book({
  title,
  releaseDate,
  image,
  spineImage,
  source,
  retailers,
  endorsements,
}) {
  const isReleased = releaseDate && parseISO(releaseDate) < Date.now();

  return (
    <article
      className="book-details"
      itemScope
      itemType="https://schema.org/Book"
    >
      <header className="header">
        <h1 className="f2 lh-title b i mb3" itemProp="name">
          {title}
        </h1>
        {!isReleased && releaseDate && (
          <p className="grey-3 b lh-title mb2">
            Releases:{" "}
            <DateComponent dateString={releaseDate} itemProp="datePublished" />
          </p>
        )}
      </header>

      <div className="image">
        <BookCover
          title={`Cover for ${title}`}
          image={image}
          spineImage={spineImage}
        />
      </div>

      <div className="cms body" itemProp="abstract">
        <Markdown source={source} />
      </div>

      <section className="mt4 mb5 bg-grey-1 pv4 purchase">
        <div className="mw6 ph3 center">
          <h2 className="f3 b lh-title primary">
            {isReleased ? "Purchase today at:" : "Pre-order now at:"}
          </h2>

          <div className="flex flex-wrap justify-center">
            {retailers.map((retailer, i) => (
              <Retailer key={`retailer-${i}`} {...retailer} />
            ))}
          </div>
        </div>
      </section>

      {endorsements && (
        <section className="mb5 endorsements">
          {endorsements.map((endorsement, i) => (
            <Endorsement key={`endorsement-${i}`} {...endorsement} />
          ))}
        </section>
      )}

      <style jsx>{`
        .book-details {
          margin-top: var(--spacing-large);
          grid-template-rows: repeat(4, auto);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }

        @media screen and (min-width: 46em) {
          .book-details {
            display: grid;
            grid-template-columns: 1fr 4rem 11rem 21rem 4rem 1fr;
          }
        }

        @media screen and (min-width: 69em) {
          .book-details {
            grid-template-columns: 1fr 9rem 11rem 21rem 9rem 1fr;
          }
        }

        .header,
        .body,
        .endorsements {
          padding-left: var(--spacing-medium);
          padding-right: var(--spacing-medium);
          width: 100%;
          max-width: 32rem;
          margin-left: auto;
          margin-right: auto;
        }

        .header {
          grid-area: 1 / 4 / 2 / 6;
        }

        .image {
          grid-area: 1 / 2 / 3 / 4;
          max-width: 20rem;
          margin: 0 auto var(--spacing-medium);
        }

        .body {
          grid-area: 2 / 4 / 3 / 6;
        }

        .purchase {
          grid-area: 3 / 1 / 4 / 7;
        }

        .endorsements {
          grid-area: 4 / 3 / 5 / 5;
        }
      `}</style>
    </article>
  );
}
