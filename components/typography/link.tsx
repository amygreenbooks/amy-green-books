import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import Link from "next/link";

export default function MarkdownLink({
  children,
  href,
  ...props
}: Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
>) {
  if (!href || (href && href.match(/:\/\//g))) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
