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
              title="AI Product & Research Intern · Sentient Foundation"
              meta="May 2025 – Present · New York City (Hybrid)"
              text="Market research and user cohort analysis around AI agents, designing evaluation datasets for the Unhinged Dobby model, and prototyping new features with the back-end team to improve agent pipelines and reliability."
            />
            <TimelineItem
              title="Teaching Assistant · Database Design, NYU"
              meta="Jan 2025 – May 2025 · New York City, NY"
              text="Led in-class sessions, taught SQL, MongoDB, Flask/Jinja, and schema design, and held office hours supporting 50+ students learning relational models and databases."
            />
            <TimelineItem
              title="ML / Full-Stack Intern · 4mainstreet.ai"
              meta="May 2024 – Sep 2024 · Fremont, CA (Remote)"
              text="Built ML and data pipelines over customer voice/text data, integrated outputs into a Flutter front end, and fine-tuned Llama 3, Gemini, and GPT-3 models while managing cloud compute usage."
            />
            <TimelineItem
              title="Blockchain Developer Intern · Scroll.io"
              meta="May 2023 – Sep 2023 · New York City, NY (Remote)"
              text="Created a Discord analytics tool for a 20K+ member community and automated data pipelines into Google BigQuery for insights."
            />
            <TimelineItem
              title="Volunteer Robotics Instructor · Out of the Box Club"
              meta="Jan 2021 – Sep 2021 · London, UK"
              text="Taught children robotics with LEGO Mindstorms and helped design the club website to showcase projects and activities."
            />
          </div>
        </div>
      </section>
    </div>
  );
}


