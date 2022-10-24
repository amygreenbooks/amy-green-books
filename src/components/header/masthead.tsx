import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { GlobalStore } from "~/context";
import NavLink from "./navLink";
import styles from "./masthead.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const globalStore = useContext(GlobalStore);
  return (
    <div className="hero cover bg-cover banner">
      <div
        style={{
          background: `rgba(0,0,0,0.1)`,
        }}
      >
        <header className="mw7 center pv5 pv6-l ph3 tr mb3">
          <h1 className="f2 f1-l b lh-title white mb2">Amy Lynn Green</h1>
          <p className="f3 fw5 lh-title mw-100 black">
            Historical Fiction Author
          </p>
        </header>

        <nav className="flex justify-center bw2 white bg-black main-nav">
          <ul className="flex flex-wrap justify-between w-100 mw6">
            {globalStore.mainMenu.map((menu) => (
              <NavLink {...menu} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
});
