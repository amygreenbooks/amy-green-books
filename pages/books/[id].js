import { parseISO } from "date-fns";
import DateComponent from "../../components/date";
import Layout from "../../components/layout";
import Retailer from "../../components/retailer";
import Endorsement from "../../components/endorsement";
import { getAllContentIds, getContentData } from "../../lib/content";

const contentType = "books";

export default function Book({ bookData }) {
  const {
    title,
    releaseDate,
    image,
    contentHtml,
    retailers,
    endorsements,
  } = bookData;

  const isReleased = releaseDate && parseISO(releaseDate) < Date.now();

  return (
    <Layout>
      <article
        className="mw6 center ph3 mt4 mb5"
        itemScope
        itemType="https://schema.org/Book"
      >
        <header>
          <h1 className="f2 lh-title b i mb3" itemProp="name">
            {title}
          </h1>
          {!isReleased && releaseDate && (
            <p className="grey-3 b lh-title mb2">
              Releases:{" "}
              <DateComponent
                dateString={releaseDate}
                itemProp="datePublished"
              />
            </p>
          )}
        </header>

        {image && (
          <figure className="mv3">
            <img itemProp="image" src={image} alt={`Cover for ${title}`} />
          </figure>
        )}

        <div
          className="cms mb4"
          itemProp="abstract"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <section className="mt4 mb5 bg-grey-1 pv4">
        <div className="mw6 ph3 center">
          <h2 className="f3 b lh-title primary">
            {isReleased ? "Purchase today at:" : "Pre-order now at:"}
          </h2>

          <div className="flex flex-wrap justify-center">
            {retailers.map((retailer, i) => (
              <Retailer key={`retailer-${i}`} {...retailer} />
            ))}
          </div>
        </div>
      </section>

      <section className="mw6 center ph3 mt4 mb5">
        {endorsements.map((endorsement, i) => (
          <Endorsement key={`endorsement-${i}`} {...endorsement} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllContentIds(contentType);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const bookData = await getContentData(contentType, params.id);
  return {
    props: {
      bookData,
    },
  };
}
