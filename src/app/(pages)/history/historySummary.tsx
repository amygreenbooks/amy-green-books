import cn from "classnames";
import Link from "next/link";

import imgSrcSet from "@/components/util/imgSrcSet";

import styles from "./historySummary.module.css";

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
    <Link href={`/history/${id}`} className={`${styles.link} db pv3 mb4 br1`}>
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
    </Link>
  );
}
