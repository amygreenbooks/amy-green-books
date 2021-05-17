import React, { Fragment } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import unified from "unified";
import markdownParse from "remark-parse";
import slug from "remark-slug";
import remark2rehype from "remark-rehype";
import raw from "rehype-raw";
import rehype2react from "rehype-react";
import Link from "next/link";

function MarkdownLink({ children, href, ...props }) {
  if (href && href.match(/:\/\//g)) {
    return (
      <a href={href} target="_blank" {...props}>
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

var own = {}.hasOwnProperty;

const Markdown = ({ markdown, noParagraph = false }) => {
  const router = useRouter();
  const components = {};

  if (router) {
    components.a = MarkdownLink;
  }

  if (noParagraph) {
    components.p = Fragment;
  }

  const options = {
    sanitize: false,
    createElement: (name, props, children) => {
      return React.createElement(
        own.call(components, name) ? components[name] : name,
        props,
        children
      );
    },
  };

  const html = unified()
    .use(markdownParse)
    .use(slug)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehype2react, options)
    .processSync(markdown).result;

  return <>{html}</>;
};

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
