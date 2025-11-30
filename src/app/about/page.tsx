import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-20 py-10 sm:space-y-24 sm:py-12 lg:space-y-28 lg:py-16">
      {/* Hero-style about section (like the screenshot) */}
      <section
        aria-labelledby="about-hero-heading"
        className="pt-2"
      >
        <div className="mb-10 flex flex-col gap-4">
          <span className="inline-flex max-w-fit items-center rounded-full border border-slate-200 bg-[var(--accent-soft)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
            Portfolio
          </span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h1
              id="about-hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-6xl"
            >
              Neil Tripathi
            </h1>
            <p className="max-w-[38rem] text-pretty text-sm leading-relaxed text-slate-700 sm:text-base">
              CS @ NYU. I work across AI/ML, crypto, UE5, and writing, building
              agents, experiments, and systems that actually ship.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                View projects
              </a>
              <a
                href="https://github.com/neilt93"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Neil Tripathi GitHub profile in a new tab"
                className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:border-[#cbd5f5] hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                GitHub
              </a>
            </div>
          </div>

          <aside
            aria-label="Current focuses"
            className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-5 shadow-soft sm:p-6"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border border-slate-200 bg-slate-100 sm:h-24 sm:w-24">
                <Image
                  src="/neil-headshot.jpeg"
                  alt="Portrait of Neil Tripathi"
                  fill
                  sizes="120px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-900">
                  Neil Tripathi
                </p>
                <p className="text-xs text-slate-500">
                  CS @ NYU · AI/ML, crypto, UE5, writing
                </p>
              </div>
            </div>
            <h2 className="text-sm font-medium text-slate-900">Currently</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Working on AI x crypto agents &amp; signals</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Research on visual common sense &amp; evaluation</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Exploring UE5 and narrative-driven projects</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* Deeper about content */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              About
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-[0.94rem]">
              <p>
                I&apos;m a computer science student and builder interested in
                the intersection of machine learning, agents, crypto, and
                interactive media. I like projects that mix research instincts
                (clear problem statements, evaluation, ablations) with
                real-world constraints: messy data, latency, users, and
                shipping.
              </p>
              <p>
                I split my time between research and papers, agentic AI x
                crypto systems, UE5 and game design experiments, and writing
                that sits closer to humanities and theory.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
              Skills &amp; tools
            </h2>
            <ul className="grid gap-2 text-sm text-slate-800 sm:text-[0.94rem]">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Programming</span>: Python, Java, C,
                TypeScript, SQL, Rust, Solidity
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">AI/ML</span>: PyTorch, TensorFlow, LLM
                fine-tuning, evaluation pipelines, model optimisation
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Data &amp; Cloud</span>: Postgres,
                MongoDB, BigQuery, Supabase, AWS, Docker, REST APIs
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Languages</span>: English, Hindi,
                Spanish, French
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

