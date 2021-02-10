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
    <article className="ph3 mhn3-m mb4 w-50-m">
      <Link href={`/books/${id}`}>
        <a className="db mr3-m mb2 w-100-m">
          <img src={image} alt={title} className="db pa1 border-box center" />
        </a>
      </Link>

      <div className="pl3-m w-100-m">
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
        img {
          max-height: 25rem;
        }
      `}</style>
    </article>
  );
}
