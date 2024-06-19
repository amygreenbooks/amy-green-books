import { BookType, MarkdownResult } from "@/lib/content";

import BookCover from "./bookCover";
import BookNavigation from "./bookNavigation";
import Endorsements from "./endorsements";
import RetailerComp from "./retailer";
import DateComponent from "../date";

export default function Book({
  frontmatter: {
    title,
    releaseDate,
    image,
    spineImage,
    retailers,
    endorsements,
    paperTint,
  },
  content,
  otherBooks,
}: {
  frontmatter: BookType;
  content: React.ReactElement;
  otherBooks: MarkdownResult<BookType>[];
}) {
  const isReleased = releaseDate && releaseDate < new Date(Date.now());

  return (
    <article
      className="mb-16 mt-8 grid-cols-[1fr_1rem_minmax(13rem,_19rem)_1rem_minmax(35ch,_45ch)_1rem_1fr] grid-rows-[repeat(3,_auto)_3rem_repeat(2,_auto)] gap-0 md:grid"
      itemScope
      itemType="https://schema.org/Book"
    >
      <header className="col-start-5 mx-auto w-full max-w-[32rem] px-4 md:px-0">
        <h1
          className="mb-4 font-serif text-4xl font-bold italic leading-tight"
          itemProp="name"
        >
          {title}
        </h1>
        {!isReleased && releaseDate && (
          <p className="mb-2 font-bold leading-tight text-foreground text-opacity-40">
            Releases:{" "}
            <DateComponent date={releaseDate} itemProp="datePublished" />
          </p>
        )}
      </header>

      <div className="col-span-2 col-start-2 row-span-3 row-start-1 mx-auto mb-4 mt-0 max-w-80">
        <BookCover
          title={`Cover for ${title}`}
          image={image}
          spineImage={spineImage}
          style={{
            position: "sticky",
            top: "calc(min(7rem, 20vh))",
          }}
        />
      </div>

      {content && (
        <div
          className="cms col-start-5 row-start-2 mx-auto w-full max-w-[32rem] px-4 font-light md:px-0"
          itemProp="abstract"
        >
          {content}
        </div>
      )}

      <section
        className="col-span-7 col-start-1 row-start-3 mb-16 mt-8 px-4 py-8 md:grid md:grid-cols-subgrid md:px-0"
        style={{
          backgroundColor: paperTint,
        }}
      >
        <div className="col-start-5 mx-auto">
          <h2 className="mb-2 font-serif text-2xl font-bold leading-tight">
            {isReleased ? "Purchase today at:" : "Pre-order now at:"}
          </h2>

          <div className="mx-[-0.5rem] flex flex-wrap justify-center">
            {retailers.map((retailer) => (
              <RetailerComp key={retailer.name} {...retailer} />
            ))}
          </div>
        </div>
      </section>

      <section className="col-span-5 col-start-2 row-start-5">
        <Endorsements endorsements={endorsements} />
      </section>

      <section className="col-span-3 col-start-3 row-start-6 px-4 md:px-0">
        <BookNavigation otherBooks={otherBooks} />
      </section>
    </article>
  );
}
