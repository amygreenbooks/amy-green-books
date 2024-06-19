import Link from "next/link";

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
    <section className="bg-muted bg-opacity-55 py-8">
      <Link
        href={href}
        className="group mx-auto block max-w-lg rounded p-4 no-underline transition-colors hover:bg-white"
      >
        <h2 className="mb-1 font-serif text-2xl font-bold leading-tight text-primary">
          {title}
        </h2>
        <p className="mb-0 group-hover:underline">{description} →</p>
      </Link>
    </section>
  );
}
