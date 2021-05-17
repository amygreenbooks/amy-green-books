import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize, transformMatter } from "./markdownProcessor";

const postsDirectory = path.join(process.cwd(), "content");

export async function getSortedContentData(contentType) {
  // Get file names under /content/{contentType}
  const dirPath = path.join(postsDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(dirPath);
  const allData = await Promise.all(
    fileNames
      .filter((fileName) => fileName.match(/\.md$/))
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
          id,
          ...matterResult.data,
        };
      })
      .filter((d) => !d.date || d.date < Date.now())
      .map(async (n) => await transformMatter(n))
  );

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.date < b.date) {
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
    .filter((fileName) => fileName.match(/\.md$/));

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
