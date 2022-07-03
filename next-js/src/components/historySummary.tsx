import cn from "classnames";
import Link from "next/link";

import imgSrcSet from "./util/imgSrcSet";

export default function HistorySummary({
  id,
  title,
  image,
  flip = false,
}: {
  id: string;
  title: string;
  image: string;
  flip?: boolean;
}) {
  return (
    <>
      <Link href={`/history/${id}`}>
        <a className="article-link db pv3 mb4 br1">
          <article id={id} className="flex-ns items-center">
            <div className={cn("ph3", { "order-last-ns": flip })}>
              <img
                {...imgSrcSet({
                  src: image,
                  resize: "smartcrop",
                  w: 260,
                  h: 150,
                })}
                alt={`The History Behind ${title}`}
                className="db center"
              />
            </div>

            <div className={cn("ph3 flex-auto", { "tr-ns": flip })}>
              <p className="mb0 grey-3 f6">Explore the history behind</p>
              <h2 className="f3 b lh-title mb1">
                <em>{title}</em>
              </h2>
              <p className="mb0">Read Post →</p>
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

        @media screen and (min-width: 50em) {
          .article-link {
          }
        }
      `}</style>
    </>
  );
}
