import NewsletterForm from "./newsletterForm";

export default function NewsletterSection() {
  return (
    <article className="measure center ph3 mv5">
      <p className="f3 lh-title light-gray b tc mb2 serif">
        Sign Up for my Newsletter
      </p>
      <p className="tc">
        Enter your email address for quarterly writing updates
        and&nbsp;bookish&nbsp;fun!
      </p>
      <NewsletterForm id="2157311" />
    </article>
  );
}
