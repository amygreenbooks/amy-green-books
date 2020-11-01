import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import BookSummary from "../components/bookSummary";
import Markdown from "../components/markdown";
import { getContentData, getSortedContentData } from "../lib/content";
import { mainMenu } from "../content/siteConfig";

export default function Home({ homeContent, books }) {
  const { title, subtitle, bannerImage, welcome } = homeContent;

  const nav = (
    <div
      className="hero cover bg-cover"
      style={{
        backgroundImage: `url('${bannerImage}')`,
        backgroundPosition: "84% 70%",
      }}
    >
      <div
        style={{
          background: `rgba(0,0,0,0.1)`,
        }}
      >
        <header className="mw7 center pv5 pv6-l ph3 tr mb3">
          <h1 className="f2 f1-l b lh-title white mb2">{title}</h1>
          <p className="f3 fw5 lh-title mw-100 black">{subtitle}</p>
        </header>

        <nav className="flex justify-center bw2 white bg-black main-nav">
          <ul className="flex flex-wrap justify-between w-100 mw6">
            {mainMenu.map(({ title, url }) => (
              <li key={url} className="flex-auto tc">
                <Link href={url}>
                  <a className="pv3 ph2 no-underline db nowrap">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );

  return (
    <Layout nav={nav}>
      <Head>
        <title>{"Amy Green Books"}</title>
      </Head>
      <section className="bg-grey-1 pb4 pt5">
        <div className="mw7 center">
          <div className="ph3">
            {books.map((book) => (
              <BookSummary key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white pb4 pt5">
        <div className="mw7 center">
          <div className="flex-m mhn3-m mb4">
            <div className="ph3 order-last-m">
              <img src={welcome.image} alt="" className="db mb2 center mw4" />
            </div>

            <div className="ph3">
              <h3 className="f3 b lh-title mb1">{welcome.heading}</h3>
              <div className="cms">
                <Markdown markdown={welcome.text} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const homeContent = await getContentData(null, "index");
  const books = getSortedContentData("books");
  return {
    props: {
      homeContent,
      books,
    },
  };
}
