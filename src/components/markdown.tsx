import { unified } from "unified";
import parse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import { createElement, Fragment } from "react";

import { H1, H2, H3, H4, H5, H6 } from "./typography/h";
import MarkdownLink from "./typography/link";

const Markdown = ({
  source,
  noParagraph = false,
}: {
  source: string;
  noParagraph?: boolean;
}) => {
  const components: Record<string, unknown> = {
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

  const html = unified()
    .use(parse)
    .use(remarkRehype, {})
    .use(rehypeReact, { createElement, Fragment, components })
    .processSync(source).result;

  return <>{html}</>;
};

export default Markdown;
