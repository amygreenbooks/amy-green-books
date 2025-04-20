import { compileMDX } from "next-mdx-remote/rsc";

import { H1, H2, H3, H4, H5, H6 } from "../components/typography/h";
import MarkdownLink from "../components/typography/link";

export async function compile<TData extends Record<string, unknown>>(
  source: string,
  options: { noParagraph: boolean } = { noParagraph: false },
) {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    a: MarkdownLink,
  };

  if (options.noParagraph) {
    return await compileMDX<TData>({
      source,
      options: {
        parseFrontmatter: true,
      },
      components: {
        ...components,
        p: ({ children }) => <>{children}</>,
      },
    });
  }

  return await compileMDX<TData>({
    source,
    options: {
      parseFrontmatter: true,
    },
    components,
  });
}
