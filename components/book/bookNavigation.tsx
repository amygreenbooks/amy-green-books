import Image from "next/image";
import Link from "next/link";

import { MarkdownResult, BookType } from "../../lib/content";

function BookNavLink({
  id,
  frontmatter: { image, title, paperTint },
}: MarkdownResult<BookType>) {
  return (
    <>
      <Link
        href={`/books/${id}`}
        className="flex items-center rounded p-2 no-underline transition-colors hover:bg-[var(--paper-tint,_var(--off-white))]"
        style={{ "--paper-tint": paperTint } as React.CSSProperties}
      >
        {image && (
          <Image
            src={image}
            height={120}
            width={78}
            aria-labelledby={`exp-book-${id}`}
            alt=""
            className="h-[120px]"
          />
        )}
        <div className="ml-4 sm:ml-2">
          <h4
            className="mb-1 font-serif text-base font-bold italic sm:text-sm"
            id={`exp-book-${id}`}
          >
            {title}
          </h4>
          <p className="m-0 text-sm font-light text-primary">View Book</p>
        </div>
      </Link>
    </>
  );
}

export default function BookNavigation({
  otherBooks,
}: {
  otherBooks: MarkdownResult<BookType>[];
}) {
  return (
    <>
      <h2 className="mb-1 font-serif text-2xl font-bold leading-tight text-black">
        Explore my other books
      </h2>
      <div className="sm:flex">
        {otherBooks.map((book) => (
          <div className="flex-1" key={book.id}>
            <BookNavLink {...book} />
          </div>
        ))}
      </div>
    </>
  );
}
