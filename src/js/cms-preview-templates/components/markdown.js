import React, { Fragment } from "react";
import PropTypes from "prop-types";
import unified from "unified";
import parse from "remark-parse";
import reactRenderer from "remark-react";

const Markdown = ({ markdown }) => {
  const html = unified().use(parse).use(reactRenderer).processSync(markdown)
    .contents;

  return <Fragment>{html}</Fragment>;
};

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Markdown;
