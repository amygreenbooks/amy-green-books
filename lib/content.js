import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize, transformMatter } from "./markdownProcessor";

const postsDirectory = path.join(process.cwd(), "content");

export async function getSortedContentData(
  contentType,
  includeContent = false
) {
  // Get file names under /content/{contentType}
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData = await Promise.all(
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
        let result = {
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
    if (!a.date || a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllContentIds(contentType) {
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

export async function getContentData(contentType, id) {
  const fullPath = contentType
    ? path.join(postsDirectory, contentType, `${id}.md`)
    : path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  let { content, data } = matter(fileContents);
  data = await transformMatter(data);
  const mdxSource = await serialize(content);

  return {
    id,
    source: mdxSource,
    ...data,
  };
}

export const getBookSummaryData = (b) => ({
  id: b.id || null,
  image: b.image || null,
  spineImage: b.spineImage || null,
  title: b.title || null,
  releaseDate: b.releaseDate || null,
  description: b.description || null,
  retailers: b.retailers || [],
});
