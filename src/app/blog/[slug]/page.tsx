import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MdxContent } from "@/components/MdxContent";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: `${meta.title} | Neil Tripathi`,
      description: meta.summary,
    };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-8 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-2xl space-y-8">
        <Link
          href="/blog"
          className="inline-flex text-xs font-medium text-slate-500 transition-colors hover:text-foreground"
        >
          &larr; Back to blog
        </Link>

        <header className="space-y-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-500">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {post.meta.title}
          </h1>
        </header>

        <MdxContent source={post.content} />
      </div>
    </div>
  );
}
