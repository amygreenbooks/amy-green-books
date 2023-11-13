import Link from "next/link";

import styles from "./historyLink.module.css";

interface HistoryLinkProps {
  href: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function HistoryLink({
  href,
  title,
  description,
}: HistoryLinkProps) {
  return (
    <section className="bg-off-white pv4">
      <Link
        href={href}
        className={`db mw6 pa3 center br1 border-box ${styles.link}`}
      >
        <h2 className="lh-title primary f3 b mb1 serif">{title}</h2>
        <p className="mb0">{description} →</p>
      </Link>
    </section>
  );
}
