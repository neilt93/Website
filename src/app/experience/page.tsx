type TimelineItemProps = {
  title: string;
  meta: string;
  text: string;
};

function TimelineItem({ title, meta, text }: TimelineItemProps) {
  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div
        className="absolute left-[-15px] top-5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-50 sm:left-[-16px]"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(30,64,175,0.25)]" />
      </div>
      <div className="space-y-1.5 pl-1">
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {meta}
        </p>
        <p className="pt-1 text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
          {text}
        </p>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section
        aria-labelledby="experience-heading"
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1
            id="experience-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Experience &amp; Highlights
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Roles and work from research, product, and engineering across AI, crypto,
            and teaching.
          </p>
        </div>

        <div className="relative pl-5 sm:pl-6">
          <div
            className="pointer-events-none absolute left-[10px] top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 sm:left-[11px]"
            aria-hidden="true"
          />
          <div className="space-y-6">
            <TimelineItem
              title="AI x Crypto Engineering"
              meta="2024 – Present"
              text="Built agentic pipelines, crypto signal engines, and dashboards that sit between models, data, and actual users. Focused on reliability, observability, and clear abstractions rather than hype, including work on systems like an AI-driven crypto signal dashboard."
            />
            <TimelineItem
              title="Research with Prof. Ernest Davis · Visual Common Sense"
              meta="2024 – 2025 · NYU"
              text="Worked on a project around visual commonsense reasoning and visibility, including designing diagnostic datasets, building evaluation harnesses and graders, and co-authoring a manuscript on how vision-language models handle occlusion and viewpoint shifts."
            />
            <TimelineItem
              title="Teaching Assistant · Database Design, NYU"
              meta="Jan 2025 – May 2025 · New York City, NY"
              text="Ran problem sessions and office hours for students learning relational models, SQL, and schema design for the first time, with an emphasis on building intuition and breaking concepts into approachable steps."
            />
          </div>
        </div>
      </section>
    </div>
  );
}


