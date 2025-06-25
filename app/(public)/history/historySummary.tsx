import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./historySummary.module.css";
import CldImage from "@/components/CldImage";

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
    <Link href={`/history/${id}`} className={cn(styles.link, "db pv3 mb4 br1")}>
      <article id={id} className="flex-ns items-center">
        <div className={cn("ph3", { "order-last-ns": flip })}>
          <CldImage
            src={image}
            width={260}
            height={150}
            aspectRatio="26:15"
            crop="fill"
            alt={`The History Behind ${title}`}
            className="db center"
          />
        </div>

        <div
          className={cn("ph3 flex-auto tc mt2 mt0-ns", {
            "tr-ns": flip,
            "tl-ns": !flip,
          })}
        >
          <p className="mb0 grey-3 f6">Explore the history behind</p>
          <h2 className="f3 b i lh-title mb1 serif">{title}</h2>
          <p className="mb0">Read Post →</p>
        </div>
      </article>
    </Link>
  );
}
