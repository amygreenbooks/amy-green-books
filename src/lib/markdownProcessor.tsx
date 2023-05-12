import { compileMDX, MDXRemoteProps } from "next-mdx-remote/rsc";

import { H1, H2, H3, H4, H5, H6 } from "../components/typography/h";
import MarkdownLink from "../components/typography/link";

export async function compile<TData extends Record<string, unknown>>(
  source: string,
  options: { noParagraph: boolean } = { noParagraph: false }
) {
  const components: MDXRemoteProps["components"] = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: MarkdownLink,
  };

  if (options.noParagraph) {
    components.p = ({ children }) => <>{children}</>;
  }

  return await compileMDX<TData>({
    source,
    options: {
      parseFrontmatter: true,
    },
    components,
  });
}

// async function parseMatterMd(data: Record<string, unknown>) {
//   return (
//     await Promise.all(
//       Object.entries(data).map(async ([key, value]) => {
//         if (value == null) {
//           // Nothing to do here
//         } else if (Array.isArray(value)) {
//           value = await Promise.all(value.map(parseMatterMd));
//         } else if (typeof value === "object") {
//           value = await parseMatterMd(value as Record<string, unknown>);
//         }

//         return { key, value };
//       })
//     )
//   ).reduce<Record<string, unknown>>((acc, { key, value }) => {
//     acc[key] = value;
//     return acc;
//   }, {});
// }

// function stringifyDates(data: Record<string, unknown>) {
//   return Object.entries(data)
//     .map(([key, value]) => ({
//       key,
//       value: value instanceof Date ? value.toISOString() : value,
//     }))
//     .reduce<Record<string, unknown>>((acc, { key, value }) => {
//       acc[key] = value;
//       return acc;
//     }, {});
// }
