import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type ContentData = {
  id: string;
  date?: Date;
  contentHtml?: string;
  [key: string]: unknown;
};

export type BookData = {
  id: string;
  date?: Date;
  title: string;
  releaseDate: Date;
  image: string;
  spineImage: string;
  contentHtml: string;
  retailers: Retailer[];
  endorsements: Endorsement[];
};

export const getBookSummaries = async () =>
  (await getSortedContentData("books")) as BookSummaryType[];

export async function getSortedContentData(
  contentType: string,
  includeContent = false
): Promise<ContentData[]> {
  const dirPath = path.join(process.cwd(), "content", contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData: Array<ContentData> = await Promise.all(
    fileNames
      .filter((fileName) => fileName.match(/\.md$/))
      .filter((fileName) => fileName !== "index.md")
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf-8");

        return {
          id,
          ...matter(fileContents),
        };
      })
      .filter((d) => !d.data.date || d.data.date < Date.now())
      .map(async (n) => {
        const result: ContentData = {
          id: n.id,
          ...n.data,
        };

        if (includeContent) {
          // todo
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

export function getAllContentIds(contentType: string): string[] {
  const dirPath = path.join(process.cwd(), "content", contentType);
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
  T extends { id: string; contentHtml: string }
>(contentType: string | null, id: string): Promise<T> {
  const fullPath = contentType
    ? path.join(process.cwd(), "content", contentType, `${id}.md`)
    : path.join(process.cwd(), "content", `${id}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const res = matter(fileContents);
  const data = res.data;
  const processedContent = await remark().use(html).process(res.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...data,
  } as T;
}

export type BookSummaryType = {
  id: string;
  title: string;
  image: string;
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
  quote_md: string;
  author_md: string;
};
