import { Fragment } from "react";
import PropTypes from "prop-types";
import unified from "unified";
import markdownParse from "remark-parse";
import remark2react from "remark-react";
import Link from "next/link";

function MarkdownLink({ children, href, ...props }) {
  if (href && href.match(/:\/\//g)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

const Markdown = ({ markdown, noParagraph = false }) => {
  const options = {
    remarkReactComponents: {
      a: MarkdownLink,
    },
  };

  if (noParagraph) {
    options.remarkReactComponents.p = Fragment;
  }

  const html = unified()
    .use(markdownParse)
    .use(remark2react, options)
    .processSync(markdown).result;

  return <>{html}</>;
};

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
