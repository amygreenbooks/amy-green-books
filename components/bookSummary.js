import { parseISO } from "date-fns";
import Link from "next/link";
import DateCmp from "./date";
import BookCover from "./bookCover";

export default function BookSummary({
  id,
  image,
  spineImage,
  title,
  releaseDate,
  description,
}) {
  const isReleased = !releaseDate || parseISO(releaseDate) < Date.now();

  return (
    <article>
      <Link href={`/books/${id}`}>
        <a className="side img-side">
          <BookCover
            title={title}
            image={image}
            spineImage={spineImage}
            animateIn
          />
        </a>
      </Link>

      <div className="side text-side">
        <header>
          <h3 className="f3 b lh-title mb1">
            <em>{title}</em>
          </h3>
          {!isReleased && (
            <p className="mid-gray lh-title mb2">
              Releases: <DateCmp dateString={releaseDate} />
            </p>
          )}
        </header>
        <p>{description}</p>
        <footer>
          <Link href={`/books/${id}`}>
            <a className="link">Learn more →</a>
          </Link>
        </footer>
      </div>

      <style jsx>{`
        article {
          display: flex;
          flex: 1 1 auto;
          flex-wrap: wrap;
          margin-bottom: var(--spacing-large);
          min-width: 50%;
        }

        .side {
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .text-side {
          min-width: 48%;
          flex: 1 1;
          padding: 0 var(--spacing-medium);
        }

        .img-side {
          max-width: 18rem;
          margin: 0 auto;
        }
      `}</style>
    </article>
  );
}
