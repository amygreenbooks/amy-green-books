import PropTypes from "prop-types";
import unified from "unified";
import parse from "remark-parse";
import reactRenderer from "remark-react";
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

const options = {
  remarkReactComponents: {
    a: MarkdownLink,
  },
};

const Markdown = ({ markdown }) => {
  const html = unified()
    .use(parse)
    .use(reactRenderer, options)
    .processSync(markdown).result;

  return <div className="cms">{html}</div>;
};

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
