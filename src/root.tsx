import {
  component$,
  useStore,
  useContextProvider,
  useServerMount$,
} from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { GlobalStore, SiteStore } from "./context";
import { RouterHead } from "./components/router-head/router-head";
import { mainMenu } from "./siteConfig";
import { getBookSummaries } from "./lib/content";

import "./styles/main.css";

export default component$(() => {
  const store = useStore<SiteStore>({
    mainMenu: [],
  });

  useServerMount$(async () => {
    store.mainMenu = mainMenu(await getBookSummaries());
  });

  useContextProvider(GlobalStore, store);

  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
