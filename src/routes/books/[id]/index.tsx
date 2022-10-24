import {
  component$,
  useServerMount$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { StaticGenerateHandler, useLocation } from "@builder.io/qwik-city";
import {
  BookData,
  BookSummaryType,
  getAllContentIds,
  getBookSummaries,
  getContentData,
} from "~/lib/content";
import DateComponent from "~/components/books/date";
import Retailer from "~/components/books/retailer";
import Endorsement from "~/components/books/endorsement";
import styles from "./book.css";
import BookNavigation from "~/components/books/bookNavigation";

export const contentType = "books";

export default component$(() => {
  useStylesScoped$(styles);
  const { params } = useLocation();
  const store = useStore<{
    book: null | BookData;
    next: null | BookSummaryType;
    previous: null | BookSummaryType;
  }>({
    book: null,
    next: null,
    previous: null,
  });

  useServerMount$(async () => {
    const allBooks = await getBookSummaries();
    store.book = await getContentData<BookData>(contentType, params.id);
    const bookIndex = allBooks.findIndex((n) => n.id == params.id);
    store.previous = allBooks[(bookIndex + 1) % allBooks.length];
    store.next = allBooks[(bookIndex + allBooks.length - 1) % allBooks.length];
  });

  if (store.book == null || store.next == null || store.previous == null) {
    return <></>;
  }

  const {
    title,
    releaseDate,
    // description,
    // image,
    // isbn,
    contentHtml,
    retailers,
    endorsements,
  } = store.book;

  const isReleased = releaseDate && releaseDate < new Date(Date.now());

  return (
    <>
      <article
        className="book-details"
        itemScope
        itemType="https://schema.org/Book"
      >
        <header className="header">
          <h1 className="f2 lh-title b i mb3" itemProp="name">
            {title}
          </h1>
          {!isReleased && releaseDate && (
            <p className="grey-3 b lh-title mb2">
              Releases:{" "}
              <DateComponent date={releaseDate} item-prop="datePublished" />
            </p>
          )}
        </header>

        <div className="image">
          {/* <BookCover
            title={`Cover for ${title}`}
            image={image}
            spineImage={spineImage}
          /> */}
        </div>

        <div
          className="cms body"
          itemProp="abstract"
          dangerouslySetInnerHTML={contentHtml}
        />

        <section className="mt4 mb5 bg-grey-1 pv4 purchase">
          <div className="mw6 ph3 center">
            <h2 className="f3 b lh-title primary">
              {isReleased ? "Purchase today at:" : "Pre-order now at:"}
            </h2>

            {retailers && retailers.length > 0 && (
              <div className="flex flex-wrap justify-center">
                {retailers.map((retailer) => (
                  <Retailer {...retailer} />
                ))}
              </div>
            )}
          </div>
        </section>

        {endorsements && endorsements.length > 0 && (
          <section className="mb5 endorsements">
            {endorsements.map((endorsement) => (
              <Endorsement {...endorsement} />
            ))}
          </section>
        )}
      </article>
      <BookNavigation next={store.next} previous={store.previous} />
    </>
  );
});

export const onStaticGenerate: StaticGenerateHandler = () => {
  const ids = getAllContentIds(contentType);

  return {
    params: ids.map((id) => {
      return {
        id,
      };
    }),
  };
};
