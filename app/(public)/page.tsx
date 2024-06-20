import Image from "next/image";

import BookSummary from "@/components/book/bookSummary";
import Markdown from "@/components/markdown";
import NewsletterSection from "@/components/newsletter/newsletterSection";
import { getContentData, getBooks } from "@/lib/content";
import { cn } from "@/lib/utils";

type HomeContent = {
  title: string;
  date: number;
  subtitle: string;
  bannerImage: string;
  welcome: {
    text: string;
    heading: string;
    image: string;
  };
};

export default async function Page() {
  const {
    frontmatter: { welcome, title, subtitle },
  } = await getContentData<HomeContent>(null, "index");
  const books = await getBooks();

  return (
    <>
      <header className="flex flex-col items-center justify-center px-4 py-16 font-serif sm:flex-row">
        <Image
          src="/meet-amy.png"
          alt="A photo of Amy Lynn Green"
          width={240}
          height={240}
          priority
          style={{
            width: "100%",
            height: "auto",
          }}
          className="block max-w-48 rounded-full shadow-lg sm:mr-16"
        />

        <div>
          <h1 className="mt-4 text-5xl font-extrabold leading-tight text-primary max-sm:text-center">
            {title}
          </h1>
          <p className="max-w-full text-xl font-normal italic leading-tight text-foreground text-opacity-40 max-sm:text-center">
            {subtitle}
          </p>
        </div>
      </header>

      <section>
        <BookSummary book={books[0]} priority />
      </section>

      <NewsletterSection id="2157311" />

      <section>
        {books.slice(1).map((book, i) => (
          <BookSummary key={book.id} book={book} flipped={i % 2 === 0} />
        ))}
      </section>

      <section className="mx-auto mb-8 max-w-3xl pb-8 pt-16 sm:flex">
        <div
          className={cn("px-4", {
            ["md:order-last"]: books.length % 2 === 1,
          })}
        >
          <Image
            src={welcome.image}
            width={350}
            height={464}
            alt="Amy Lynn Green"
            className="mx-auto mb-2 block rounded sm:min-w-48 md:min-w-64"
          />
        </div>

        <div className="px-4">
          <h3 className="mb-1 font-serif text-2xl font-bold leading-tight">
            {welcome.heading}
          </h3>
          <div className="cms">
            <Markdown source={welcome.text} />
          </div>
        </div>
      </section>
    </>
  );
}
