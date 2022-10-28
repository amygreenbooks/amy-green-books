import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function MarkdownLink({
  children,
  href,
  ...props
}: Omit<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  "ref"
>) {
  const router = useRouter();
  if (!router || !href || (href && href.match(/:\/\//g))) {
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
