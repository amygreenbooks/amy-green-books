export default function MarkdownLink({ children, href, ...props }) {
  if (href && href.match(/:\/\//g)) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
