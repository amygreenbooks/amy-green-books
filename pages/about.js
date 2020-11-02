import Layout from "../components/layout";
import About from "../components/layouts/about";
import { getContentData } from "../lib/content";

export default function AboutPage({ content }) {
  return (
    <Layout>
      <About {...content} />
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
