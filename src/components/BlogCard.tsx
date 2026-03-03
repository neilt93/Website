import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export function BlogCard({ slug, title, date, summary }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_22px_60px_rgba(30,64,175,0.25)]">
        <div className="space-y-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-500">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className="text-sm font-semibold text-slate-900 group-hover:text-accent sm:text-base">
            {title}
          </h2>
          <p className="text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
            {summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
