import slug from "remark-slug";
import { serialize as mdxSerialize } from "next-mdx-remote/serialize";

export const serialize = (content, scope) =>
  mdxSerialize(content, { scope, mdxOptions: { remarkPlugins: [slug] } });

export async function transformMatter(data) {
  data = stringifyDates(data);
  data = parseMatterMd(data);
  return data;
}

async function parseMatterMd(data) {
  return (
    await Promise.all(
      Object.entries(data).map(async ([key, value]) => {
        if (value == null) {
          // Nothing to do here
        } else if (Array.isArray(value)) {
          value = await Promise.all(value.map(parseMatterMd));
        } else if (typeof value === "object") {
          value = await parseMatterMd(value);
        } else if (key.endsWith("_md")) {
          value = await serialize(value);
        }

        return [key, value];
      })
    )
  ).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function stringifyDates(data) {
  return Object.entries(data)
    .map(([key, value]) => [
      key,
      value instanceof Date ? value.toISOString() : value,
    ])
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
}
