import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

import { Source } from "../lib/content";
import { H1, H2, H3, H4, H5, H6 } from "./typography/h";
import MarkdownLink from "./typography/link";

interface MarkdownProps {
  source: Source;
  noParagraph?: Boolean;
}

const Markdown = ({ source, noParagraph = false }: MarkdownProps) => {
  const components: MDXRemoteProps["components"] = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: MarkdownLink,
  };

  if (noParagraph) {
    components.p = ({ children }) => <>{children}</>;
  }

  return <MDXRemote {...source} components={components} />;
};

export default Markdown;
