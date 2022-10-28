import { MenuItem } from "../../siteConfig";
import NavigationLink from "./navigationLink";

interface MastheadProps {
  bannerImage: string;
  title: string;
  subtitle: string;
  mainMenu: MenuItem[];
}

export default function Masthead({
  bannerImage,
  title,
  subtitle,
  mainMenu,
}: MastheadProps) {
  return (
    <div className="hero cover bg-cover banner">
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
            {mainMenu.map((menu) => (
              <NavigationLink key={menu.title} {...menu} />
            ))}
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .banner {
          background-image: url("${bannerImage}?nf_resize=fit&h=350");
          background-image: image-set(
            url("${bannerImage}?nf_resize=fit&h=350") 1x,
            url("${bannerImage}?nf_resize=fit&h=700") 2x
          );
          background-position: 84% 70%;
        }

        @media screen and (min-width: 60em) {
          .banner {
            background-image: url("${bannerImage}?nf_resize=fit&h=600");
            background-image: image-set(
              url("${bannerImage}?nf_resize=fit&h=600") 1x,
              url("${bannerImage}?nf_resize=fit&h=1200") 2x
            );
          }
        }
      `}</style>
    </div>
  );
}
