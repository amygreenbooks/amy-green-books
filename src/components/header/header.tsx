import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { GlobalStore } from "~/context";
import NavLink from "./navLink";

export default component$(() => {
  const globalStore = useContext(GlobalStore);

  return (
    <nav className="bg-black relative white main-nav">
      <div className="mw7 flex-ns flex-wrap justify-between items-center center">
        <Link
          href="/"
          class="pa3 fw6 db mr4-ns nowrap no-underline bg-primary bw1 b--primary bb bt"
        >
          Amy Lynn Green
        </Link>
        <ul className="flex overflow-x-scroll overflow-x-visible-ns">
          {globalStore.mainMenu.map((menu) => (
            <NavLink {...menu} />
          ))}
        </ul>
      </div>
    </nav>
  );
});
