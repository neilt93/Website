import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "./mdx-components";

type MdxContentProps = {
  source: string;
};

export async function MdxContent({ source }: MdxContentProps) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  return <div className="prose-blog">{content}</div>;
}
