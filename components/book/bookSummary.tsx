import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

        <Card className="mx-4 min-w-[48%] flex-1 md:max-w-sm">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            {!isReleased && (
              <CardDescription>
                Releases: <DateCmp date={releaseDate} />
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>{description}</CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={`/books/${id}`}
            >
              Learn more →
            </Link>
            {!isReleased && retailer && (
              <a
                href={retailer.link}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: "default",
                })}
              >
                Pre-Order Now!
              </a>
            )}
          </CardFooter>
        </Card>
      </article>
    </div>
  );
}
