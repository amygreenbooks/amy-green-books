import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { description as siteDescription, siteTitle } from "../../siteConfig";
import { Social } from "./social";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const { href } = useLocation();
  const title = head.title ? `${head.title} | ${siteTitle}` : siteTitle;
  const description =
    head.meta.find((m) => m.name === "description")?.content || siteDescription;
  const image =
    head.meta.find((m) => m.name === "image")?.content || "/media/ogimage.jpg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/media/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-128.png"
        sizes="128x128"
      />
      <link
        rel="icon"
        type="image/png"
        href="/media/favicon-192.png"
        sizes="192x192"
      />
      <link
        rel="mask-icon"
        href="/media/safari-pinned-tab.svg"
        color="#CF262C"
      />
      <meta name="theme-color" content="#CF262C" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap"
        rel="stylesheet"
      />

      {import.meta.env.PROD && (
        <Social
          title={title}
          description={description}
          href={href}
          image={image}
        />
      )}

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
