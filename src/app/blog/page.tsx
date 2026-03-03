import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Neil Tripathi",
  description: "Writing about projects, ideas, and things I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section aria-labelledby="blog-heading" className="space-y-6">
        <div className="space-y-2">
          <h1
            id="blog-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Blog
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Writing about projects, ideas, and things I&apos;m learning.
          </p>
        </div>

        <div className="grid gap-5">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </div>
  );
}
