import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import styles from "./layout.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <>
      <div id="skip" class="skip">
        <a href="#mainContent">Skip to main content</a>
      </div>
      <Header />
      <main id="mainContent">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
