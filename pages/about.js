import Layout from "../components/layout";
import Markdown from "../components/markdown";
import { getContentData } from "../lib/content";

export default function About({ content }) {
  const { aboutImage, title, contentMark } = content;
  return (
    <Layout>
      <article className="mw5 center ph3 mt4 mb5 cms">
        {aboutImage && <img src={aboutImage} alt={title} />}
        <Markdown markdown={contentMark} />
      </article>
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await getContentData(null, "about");
  return {
    props: {
      content,
    },
  };
}
