import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

import { serialize, transformMatter } from "./markdownProcessor";

const postsDirectory = path.join(process.cwd(), "content");

export type Source = MDXRemoteSerializeResult<Record<string, unknown>>;

export type ContentData = {
  id: string;
  source?: Source;
  date?: Date;
  [key: string]: unknown;
};

export const getBookSummaries = async () =>
  (await getSortedContentData("books")) as BookSummaryType[];

export async function getSortedContentData(
  contentType: string,
  includeContent = false
): Promise<Array<ContentData>> {
  // Get file names under /content/{contentType}
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData: Array<ContentData> = await Promise.all(
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
          result.source = await serialize(n.content);
        }

        return result;
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

export async function getContentData(
  contentType: string | null,
  id: string
): Promise<ContentData> {
  const fullPath = contentType
    ? path.join(postsDirectory, contentType, `${id}.md`)
    : path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const res = matter(fileContents);
  const data = await transformMatter(res.data);
  const mdxSource = await serialize(res.content);

  return {
    id,
    source: mdxSource,
    ...data,
  };
}

export type BookSummaryType = {
  id: string;
  title: string;
  image?: string;
  spineImage?: string;
  releaseDate?: string;
  description?: string;
  retailers?: Array<Retailer>;
};

export type Retailer = {
  name: string;
  link: string;
  image: string;
};

export type Endorsement = {
  author_md: string;
  quote_md: string;
};

export const getBookSummaryData = (b: ContentData): BookSummaryType => ({
  id: b.id,
  image: b.image as string,
  spineImage: b.spineImage as string,
  title: b.title as string,
  releaseDate: b.releaseDate as string,
  description: b.description as string,
  retailers: (b.retailers as Array<Retailer>) || [],
});
