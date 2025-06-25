import styles from "./goodReads.module.css";

export default function GoodReads({
  className = "",
  isbn,
}: {
  className?: string;
  isbn: string;
}) {
  return (
    <section className={`${styles.background} ${className}`}>
      <iframe
        sandbox="allow-popups allow-scripts allow-same-origin"
        className={`${styles.iframe} ${styles.container}`}
        src={
          "https://www.goodreads.com/api/reviews_widget_iframe?" +
          [
            "did=DEVELOPER_ID",
            "format=html",
            `isbn=${isbn}`,
            "links=660",
            "min_rating=",
            "num_reviews=5",
            "review_back=fdfefb",
            "stars=2e5338",
            "stylesheet=",
            "text=444",
          ].join("&")
        }
        width="100%"
        height="700"
      ></iframe>
      <div className={`${styles.footer} ${styles.container}`}>
        <a
          className={styles.branding}
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`https://www.goodreads.com/book/show/${isbn}?utm_medium=api&utm_source=reviews_widget`}
        >
          Reviews from Goodreads.com
        </a>
      </div>
    </section>
  );
}
