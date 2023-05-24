import fs from "fs";
import path from "path";

import { notFound } from "next/navigation";

import { compile } from "./markdownProcessor";

const postsDirectory = path.join(process.cwd(), "content");

export type MarkdownResult<TFrontmatter = Record<string, unknown>> = {
  id: string;
  content: React.ReactElement;
  frontmatter: TFrontmatter;
};

export const getBooks = async () =>
  await getSortedContentData<BookType>("books");

export const getPages = async () =>
  await getSortedContentData<PageType>("pages");

export const getHistoryPages = async () =>
  await getSortedContentData<HistoryType>("history");

export async function getSortedContentData<
  TData extends Record<string, unknown> & { date: Date }
>(contentType: string): Promise<Array<MarkdownResult<TData>>> {
  // Get file names under /content/{contentType}
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData: Array<MarkdownResult<TData>> = await Promise.all(
    fileNames
      .filter((fileName) => fileName.match(/\.md$/))
      .filter((fileName) => fileName !== "index.md")
      .map(async (fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        return {
          id,
          ...(await compile<TData>(fileContents)),
        };
      })
  );

  // Sort posts by date
  return allData
    .filter(
      (d) => !d.frontmatter.date || d.frontmatter.date < new Date(Date.now())
    )
    .sort((a, b) => {
      if (
        !a.frontmatter.date ||
        !b.frontmatter.date ||
        a.frontmatter.date < b.frontmatter.date
      ) {
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

export async function getContentData<
  TData extends Record<string, unknown> = Record<string, unknown>
>(
  contentType: string | null,
  id: string,
  options: { noParagraph: boolean } = { noParagraph: false }
): Promise<MarkdownResult<TData>> {
  const fullPath = contentType
    ? path.join(postsDirectory, contentType, `${id}.md`)
    : path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return {
    id,
    ...(await compile<TData>(fileContents, options)),
  };
}

export type BookType = {
  title: string;
  date: Date;
  description: string;
  isbn?: string;
  releaseDate?: Date;
  image: string;
  spineImage?: string;
  retailers: Retailer[];
  endorsements: Endorsement[];
  paperTint?: string;
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

export type HistoryType = {
  date: Date;
  title: string;
  image: string;
};

export type PageType = {
  description: string;
  date: Date;
  title: string;
};
