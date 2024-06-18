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
    <section className="bg-off-white py-8">
      <Link
        href={href}
        className={`border-box mx-auto block max-w-lg rounded p-4 ${styles.link}`}
      >
        <h2 className="mb-1 font-serif text-2xl font-bold leading-tight text-primary">
          {title}
        </h2>
        <p className="mb-0">{description} →</p>
      </Link>
    </section>
  );
}
