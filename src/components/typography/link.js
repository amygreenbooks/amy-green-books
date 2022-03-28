import Link from "next/link";
import { useRouter } from "next/router";

export default function MarkdownLink({ children, href, ...props }) {
  const router = useRouter();
  if (!router || (href && href.match(/:\/\//g))) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
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
