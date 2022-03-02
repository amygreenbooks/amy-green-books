import Link from "next/link";
import imgSrcSet from "./util/imgSrcSet";

function BookNavLink({ id, image, title, right }) {
  return (
    <>
      <Link href={`/books/${id}`}>
        <a className="flex items-center pa2 book-link raise">
          {!right && <span className="arrow mr2 db-ns dn">←</span>}
          <img
            {...imgSrcSet({
              src: image,
              resize: "fit",
              h: 120,
            })}
            aria-labelledby={`exp-book-${id}`}
            className="cover"
          />
          <div className="ml2">
            <h4 className="f6 b mb1" id={`exp-book-${id}`}>
              <em>{title}</em>
            </h4>
            <p className="ma0 f6">View Book</p>
          </div>
          {right && <span className="arrow mr2 db-ns dn">→</span>}
        </a>
      </Link>
      <style jsx>{`
        .book-link {
          text-decoration: none;
        }

        p {
          color: var(--primary);
        }

        .book-link:hover p {
          text-decoration: underline;
        }

        .cover {
          height: 120px;
        }
      `}</style>
    </>
  );
}

export default function BookNavigation({ next, previous }) {
  return (
    <section className="mw6 mb5 ph3 center">
      <h2 className="lh-title primary f3 b mb1">Explore my other books</h2>
      <div className="flex-ns">
        <div className="book-nav">{next && <BookNavLink {...next} />}</div>
        <div className="book-nav">
          {previous && <BookNavLink {...previous} right />}
        </div>
      </div>
      <style jsx>{`
        .book-nav {
          flex: 1 1 50%;
        }
      `}</style>
    </section>
  );
}
