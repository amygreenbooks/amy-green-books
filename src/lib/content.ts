import fs from "fs";
import path from "path";

import matter from "gray-matter";

import { transformMatter } from "./markdownProcessor";

const postsDirectory = path.join(process.cwd(), "content");

export type ContentData = {
  id: string;
  source?: string;
  date?: Date;
  [key: string]: unknown;
};

export const getBookSummaries = async () =>
  await getSortedContentData<BookSummaryType>("books");

export async function getSortedContentData<TData extends ContentData>(
  contentType: string,
  includeContent = false
): Promise<Array<TData>> {
  // Get file names under /content/{contentType}
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData: Array<TData> = await Promise.all(
    fileNames
      .filter((fileName) => fileName.match(/\.md$/))
      .filter((fileName) => fileName !== "index.md")
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        return {
          id,
          ...matter(fileContents),
        };
      })
      .filter((d) => !d.data.date || d.data.date < Date.now())
      .map(async (n) => {
        const data = await transformMatter(n.data);

        // Combine the data with the id
        const result: ContentData = {
          id: n.id,
          ...data,
        };

        if (includeContent) {
          result.source = n.content;
        }

        return result as TData;
      })
  );

  // Sort posts by date
  return allData.sort((a, b) => {
    if (!a.date || !b.date || a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllContentIds(contentType: string): Array<string> {
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(dirPath)
    .filter((fileName) => fileName.match(/\.md$/))
    .filter((fileName) => fileName !== "index.md");

  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getContentData<TData extends ContentData = ContentData>(
  contentType: string | null,
  id: string
): Promise<TData> {
  const fullPath = contentType
    ? path.join(postsDirectory, contentType, `${id}.md`)
    : path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const res = matter(fileContents);
  const data = await transformMatter(res.data);

  return {
    id,
    source: res.content,
    ...data,
  } as TData;
}

export type BookType = ContentData & {
  title: string;
  description: string;
  isbn?: string;
  releaseDate?: string;
  image: string;
  spineImage?: string;
  retailers: Retailer[];
  endorsements: Endorsement[];
};

export type BookSummaryType = {
  id: string;
  title: string;
  image?: string;
  spineImage?: string;
  releaseDate?: string;
  description?: string;
  retailers: Array<Retailer>;
};

export type Retailer = {
  name: string;
  link: string;
  image: string;
};

export type Endorsement = {
  author: string;
  quote: string;
};

export type HistoryType = ContentData & {
  title: string;
  image: string;
};

export const getBookSummaryData = (b: BookType): BookSummaryType => ({
  id: b.id,
  image: b.image,
  spineImage: b.spineImage as string,
  title: b.title,
  releaseDate: b.releaseDate as string,
  description: b.description as string,
  retailers: b.retailers,
});
