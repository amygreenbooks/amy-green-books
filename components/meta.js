import Head from "next/head";

export default function Meta({ home }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link
        rel="sitemap"
        type="application/xml"
        title="Sitemap"
        href="{{ .Site.BaseURL }}sitemap.xml"
      />

      <link rel="canonical" href="{{ .Permalink }}" itemProp="url" />
      <meta name="url" content="{{ .Permalink }}" />
      <meta name="twitter:url" content="{{ .Permalink }}" />
      <meta property="og:url" content="{{ .Permalink }}" />

      {/* Favicons */}
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
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/media/safari-pinned-tab.svg"
        color="#CF262C"
      />
      <meta name="theme-color" content="#CF262C" />

      {home ? (
        <>
          <title>Amy Green Books</title>
          <meta property="og:title" content="{{ $.Site.Title }}" />
          <meta name="twitter:title" content="{{ $.Site.Title }}" />
          <meta itemProp="name" content="{{ $.Site.Title }}" />
          <meta name="application-name" content="{{ $.Site.Title }}" />

          <meta name="description" content="{{ $.Site.Params.description }}" />
          <meta
            itemProp="description"
            content="{{ $.Site.Params.description }}"
          />
          <meta
            property="og:description"
            content="{{ $.Site.Params.description }}"
          />
          <meta
            name="twitter:description"
            content="{{ $.Site.Params.description }}"
          />
        </>
      ) : (
        <>
          <meta
            property="og:title"
            content="{{ .Title }} | {{ $.Site.Title }}"
          />
          <meta
            name="twitter:title"
            content="{{ .Title }} | {{ $.Site.Title }}"
          />
          <meta itemProp="name" content="{{ .Title }} | {{ $.Site.Title }}" />
          <meta
            name="application-name"
            content="{{ .Title }} | {{ $.Site.Title }}"
          />

          <meta name="description" content="{{ .Params.description }}" />
          <meta itemProp="description" content="{{ .Params.description }}" />
          <meta property="og:description" content="{{ .Params.description }}" />
          <meta
            name="twitter:description"
            content="{{ .Params.description }}"
          />
        </>
      )}
      <meta property="og:site_name" content="{{ $.Site.Title }}" />
      {/*
{{ with .Params.image }}
  <meta itemProp="image" content="{{ . | absURL }}" />
  <meta property="og:image" content="{{ . | absURL }}" />
  <meta name="twitter:image" content="{{ . | absURL }}" />
  <meta name="twitter:image:src" content="{{ . | absURL }}" />
{{ else }}
  <meta itemProp="image" content="{{ .Site.Params.ogimage | absURL }}" />
  <meta property="og:image" content="{{ .Site.Params.ogimage | absURL }}" />
  <meta name="twitter:image" content="{{ .Site.Params.ogimage | absURL }}" />
  <meta name="twitter:image:src" content="{{ .Site.Params.ogimage | absURL }}" />
{{ end }}

{{ if eq .Section "books" }}
  <meta property="og:type" content="book"/>
  <meta property="article:publisher" content="{{ .Site.Params.facebook }}" />

  <meta property="og:book:author" content="{{ .Site.Params.author }}"/>
  <meta property="og:article:author" content="{{ .Site.Params.author }}" />
  <meta property="article:author" content="{{ .Site.Params.author }}" />
  <meta name="author" content="{{ .Site.Params.author }}" />

  {{ with .Params.isbn }}
    <meta property="og:book:isbn" content="{{ . }}"/>
  {{ end }}

  {{ with .Params.releasedate }}
    <meta property="og:book:releasedate" content="{{ dateFormat "2006-01-02T15:04:05Z0700" . }}"/>
  {{ end }}
{{ else }}
  <meta property="og:type" content="website" />
  <meta name="author" content="{{ .Site.Params.author }}" />
  <script defer type="application/ld+json"/>
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "{{ .Permalink }}",
      "sameAs": [
        "{{ .Site.Params.facebook }}",
        "{{ .Site.Params.instagram }}"
      ],
      "name": "{{ .Title }}"
    }
  </script>
{{ end }}
  */}
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
