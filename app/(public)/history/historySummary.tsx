import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
    <Link
      href={`/history/${id}`}
      className={cn(styles.link, "mb-8 block rounded py-4")}
    >
      <article id={id} className="items-center sm:flex">
        <div className={cn("px-4", { "sm:order-last": flip })}>
          <Image
            src={`/ar_26:15,c_fill/${image}`}
            width={260}
            height={150}
            alt={`The History Behind ${title}`}
            className="mx-auto block"
          />
        </div>

        <div
          className={cn("tc mt-2 flex-auto px-4 sm:mt-0", {
            "sm:tr": flip,
            "sm:tl": !flip,
          })}
        >
          <p className="mb-0 text-sm text-grey-3">Explore the history behind</p>
          <h2 className="mb-1 font-serif text-2xl font-bold italic leading-tight">
            {title}
          </h2>
          <p className="mb-0">Read Post →</p>
        </div>
      </article>
    </Link>
  );
}
