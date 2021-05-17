import Link from "next/link";

export default function MarkdownLink({ children, href, ...props }) {
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
