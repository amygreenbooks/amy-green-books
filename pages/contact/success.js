import Link from "next/link";
import Layout from "../../components/layout";
import Markdown from "../../components/markdown";
import Jumbotron from "../../components/jumbotron";
import { getContentData } from "../../lib/content";

export default function ContactSuccess({ content }) {
  const { successMessage, title, bannerImage } = content;

  return (
    <Layout>
      <Jumbotron title={title} image={bannerImage} />
      <div className="ph3 bg-off-white">
        <div className="center mw6 pv3 cms">
          <Markdown markdown={successMessage} />
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "contact");
  return {
    props: {
      content,
    },
  };
}
