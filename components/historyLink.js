import Link from "next/link";

export default function HistoryLink({ href, title, description }) {
  return (
    <section className="mt5 bg-grey-1 pv4">
      <Link href={href}>
        <a className="db mw6 pa3 center br1 border-box">
          <h2 className="lh-title primary f3 b mb1">{title}</h2>
          <p className="mb0">{description} →</p>
        </a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          transition: var(--hover-transition);
        }

        a:hover {
          background: white;
        }

        a:hover p {
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
}
