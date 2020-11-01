import Link from "next/link";
import Date from "./date";

export default function BookSummary({
  id,
  image,
  title,
  releaseDate,
  description,
}) {
  return (
    <article className="flex-m mhn3-m mb4">
      <Link href={`/books/${id}`}>
        <a className="db mr3-m mb2 w-50-m">
          <img src={image} alt={title} className="db pa1 border-box" />
        </a>
      </Link>

      <div className="pl3-m w-50-m">
        <header>
          <h3 className="f3 b lh-title mb1">
            <em>{title}</em>
          </h3>
          {releaseDate && (
            <p className="mid-gray lh-title mb2">
              Releases: <Date dateString={releaseDate} />
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
    </article>
  );
}
