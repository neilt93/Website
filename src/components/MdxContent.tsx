import { compileMDX } from "next-mdx-remote/rsc";

type MdxContentProps = {
  source: string;
};

export async function MdxContent({ source }: MdxContentProps) {
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return <div className="prose-blog">{content}</div>;
}
