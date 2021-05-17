import { Fragment } from "react";
import { MDXRemote } from "next-mdx-remote";

import { H1, H2, H3, H4, H5, H6 } from "../components/typography/h";
import MarkdownLink from "../components/typography/link";

const Markdown = ({ source, noParagraph = false }) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: MarkdownLink,
  };

  if (noParagraph) {
    components.p = Fragment;
  }

  return <MDXRemote {...source} components={components} />;
};

export default Markdown;
