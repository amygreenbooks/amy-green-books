"use client";

import { usePathname } from "next/navigation";

import NewsletterForm from "./newsletterForm";

export default function NewsletterSection({
  id,
  footer = false,
}: {
  id: string;
  footer?: boolean;
}) {
  const pathname = usePathname();

  // Hide the footer newsletter section on the newsletter page.
  if (footer && pathname === "/newsletter") {
    return null;
  }

  return (
    <article className="measure center ph3 mv5">
      <p className="f3 lh-title light-gray b tc mb2 serif">
        Sign Up for my Newsletter
      </p>
      <p className="tc">
        Enter your email address for quarterly writing updates
        and&nbsp;bookish&nbsp;fun!
      </p>
      <NewsletterForm id={id} footer={footer} />
    </article>
  );
}
