import { MetadataRoute } from "next";

import { getBooks, getHistoryPages, getPages } from "../lib/content";
import { domain } from "../siteConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const books = (await getBooks()).map((b) => ({
    url: `${domain}/books/${b.id}`,
    lastModified: new Date(),
  }));

  const pages = (await getPages()).map((p) => ({
    url: `${domain}/${p.id}`,
    lastModified: new Date(),
  }));

  const historyPages = (await getHistoryPages()).map((h) => ({
    url: `${domain}/history/${h.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: domain,
      lastModified: new Date(),
    },
    {
      url: `${domain}/about`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${domain}/history`,
      lastModified: new Date(),
    },
    ...books,
    ...pages,
    ...historyPages,
  ];
}
