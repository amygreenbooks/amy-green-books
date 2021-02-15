import { parseISO } from "date-fns";
import Link from "next/link";
import DateCmp from "./date";

export default function BookSummary({
  id,
  image,
  title,
  releaseDate,
  description,
}) {
  const isReleased = !releaseDate || parseISO(releaseDate) < Date.now();

  return (
    <article>
      <Link href={`/books/${id}`}>
        <a className="side img-side">
          <img src={image} alt={title} className="db pa1 border-box center" />
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
          padding: 0 var(--spacing-medium);
        }

        .img-side {
          min-width: 16rem;
          margin-bottom: var(--spacing-small);
        }

        .text-side {
          min-width: 20rem;
          flex: 1 1;
        }

        img {
          max-height: 25rem;
        }
      `}</style>
    </article>
  );
}
