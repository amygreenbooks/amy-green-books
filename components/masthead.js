import Link from "next/link";

export default function Masthead({ bannerImage, title, subtitle, mainMenu }) {
  return (
    <div
      className="hero cover bg-cover"
      style={{
        backgroundImage: `url('${bannerImage}')`,
        backgroundPosition: "84% 70%",
      }}
    >
      <div
        style={{
          background: `rgba(0,0,0,0.1)`,
        }}
      >
        <header className="mw7 center pv5 pv6-l ph3 tr mb3">
          <h1 className="f2 f1-l b lh-title white mb2">{title}</h1>
          <p className="f3 fw5 lh-title mw-100 black">{subtitle}</p>
        </header>

        <nav className="flex justify-center bw2 white bg-black main-nav">
          <ul className="flex flex-wrap justify-between w-100 mw6">
            {mainMenu.map(({ title, url }) => (
              <li key={url} className="flex-auto tc">
                <Link href={url}>
                  <a className="pv3 ph2 no-underline db nowrap">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
