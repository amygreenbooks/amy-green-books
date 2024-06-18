import Link from "next/link";

import { cn } from "@/lib/utils";

import BookCover from "./bookCover";
import { BookType, MarkdownResult } from "../../lib/content";
import DateCmp from "../date";

export default function BookSummary({
  book: {
    id,
    frontmatter: {
      releaseDate,
      retailers,
      title,
      image,
      spineImage,
      description,
      paperTint,
    },
  },
  flipped = false,
  priority = false,
}: {
  book: MarkdownResult<BookType>;
  flipped?: boolean;
  priority?: boolean;
}) {
  const isReleased = !releaseDate || releaseDate < new Date(Date.now());
  let retailer = null;
  if (retailers && retailers.length > 0) {
    retailer = retailers.reduce((acc, n) =>
      n.name === "Baker Book House" ? n : acc,
    );
  }

  return (
    <div
      className=""
      style={{
        backgroundColor: paperTint,
      }}
    >
      <article className="mx-auto flex w-full max-w-3xl flex-wrap items-center py-8 md:flex">
        {image && (
          <Link
            href={`/books/${id}`}
            className={cn("black mx-auto mb-4 mt-0 max-w-72", {
              "sm:order-last": flipped,
            })}
          >
            <BookCover
              title={title}
              image={image}
              spineImage={spineImage}
              priority={priority}
              animateIn
            />
          </Link>
        )}

        <div className="mx-4 block min-w-[48%] flex-1 rounded bg-white p-8 drop-shadow md:max-w-sm">
          <header>
            <h3 className="mb-1 font-serif text-2xl font-bold italic leading-tight">
              {title}
            </h3>
            {!isReleased && (
              <p className="mb-2 leading-tight text-grey-3">
                Releases: <DateCmp date={releaseDate} />
              </p>
            )}
          </header>
          <p className="font-light">{description}</p>
          <footer className="flex">
            <Link href={`/books/${id}`} className="btn raise">
              Learn more →
            </Link>
            {!isReleased && retailer && (
              <a
                href={retailer.link}
                target="_blank"
                rel="noreferrer"
                className="white btn raise ml-2 bg-primary text-sm"
              >
                Pre-Order Now!
              </a>
            )}
          </footer>
        </div>
      </article>
    </div>
  );
}
