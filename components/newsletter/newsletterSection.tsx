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
    <article className="mx-auto my-16 max-w-prose px-4">
      <p className="mb-2 text-center font-serif text-2xl font-bold leading-tight">
        Sign Up for my Newsletter
      </p>
      <p className="mb-4 text-center font-light">
        Enter your email address for quarterly writing updates
        and&nbsp;bookish&nbsp;fun!
      </p>
      <NewsletterForm id={id} />
    </article>
  );
}
