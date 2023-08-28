import { Metadata } from "next";

import Book from "@/components/book/book";
import BookNavigation from "@/components/book/bookNavigation";
import HistoryLink from "@/components/book/historyLink";
import {
  BookType,
  getAllContentIds,
  getBooks,
  getContentData,
  getHistoryPages,
} from "@/lib/content";
import { author, domain } from "@/lib/siteConfig";

type BookPageParams = { slug: string };

export default async function BookPage({ params }: { params: BookPageParams }) {
  const bookData = await getContentData<BookType>("books", params.slug);
  const allBooks = await getBooks();
  const bookIndex = allBooks.findIndex((n) => n.id === params.slug);
  const previous = allBooks[(bookIndex + 1) % allBooks.length];
  const next = allBooks[(bookIndex + allBooks.length - 1) % allBooks.length];
  const history =
    (await getHistoryPages()).find((n) => n.id === params.slug) || null;

  return (
    <>
      <Book {...bookData} />
      <BookNavigation next={next} previous={previous} />
      {history && (
        <HistoryLink
          href={`/history/${history.id}`}
          title={
            <>
              History Behind <em>{history.frontmatter.title}</em>
            </>
          }
          description={
            <>
              Explore the real history behind{" "}
              <em>{bookData.frontmatter.title}</em>
            </>
          }
        />
      )}
    </>
  );
}

export async function generateStaticParams() {
  return getAllContentIds("books").map((id) => ({
    slug: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: BookPageParams;
}): Promise<Metadata> {
  const { frontmatter: bookData } = await getContentData<BookType>(
    "books",
    params.slug,
  );
  return {
    title: bookData.title,
    description: bookData.description,
    openGraph: {
      title: bookData.title,
      description: bookData.description,
      type: "book",
      authors: [author],
      isbn: bookData.isbn,
      releaseDate: bookData.releaseDate?.toISOString(),
      images: [
        {
          url: `${domain}${bookData.image}`,
        },
      ],
    },
    twitter: {
      title: bookData.title,
      description: bookData.description,
      images: [`${domain}${bookData.image}`],
    },
  };
}
