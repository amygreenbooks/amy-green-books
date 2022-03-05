import Link from "next/link";
import imgSrcSet from "./util/imgSrcSet";
import cn from "classnames";

export default function HistorySummary({ id, title, image, flip }) {
  return (
    <>
      <Link href={`/history/${id}`}>
        <a className="article-link db pv3 mb4 br1">
          <article id={id} className="flex-ns">
            <div className={cn("ph3 img-side", { "order-last-ns": flip })}>
              <img
                {...imgSrcSet({
                  src: image,
                  resize: "fit",
                  w: 214,
                })}
                alt={`The History Behind ${title}`}
                className="db mb2 center mw4"
                width={214}
              />
            </div>

            <div className={cn("ph3 text-side", { "tr-ns": flip })}>
              <p className="mb0 grey-3 f6">Explore the history behind</p>
              <h2 className="f3 b lh-title mb1">
                <em>{title}</em>
              </h2>
              <p>Read Post →</p>
            </div>
          </article>
        </a>
      </Link>

      <style jsx>{`
        .article-link {
          text-decoration: none;
          transition: var(--hover-transition);
          margin-left: calc(-1 * var(--spacing-medium));
          margin-right: calc(-1 * var(--spacing-medium));
        }

        .article-link:hover {
          background: var(--grey-1);
        }

        .article-link:hover h2 {
          color: var(--primary);
        }

        .text-side {
          flex: 1 1 66%;
        }

        .img-side {
          flex: 1 1 214px;
        }

        @media screen and (min-width: 50em) {
          .article-link {
          }
        }
      `}</style>
    </>
  );
}
