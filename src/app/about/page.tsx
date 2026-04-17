import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-20 py-10 sm:space-y-24 sm:py-12 lg:space-y-28 lg:py-16">
      {/* Hero-style about section */}
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
              CS from NYU (B.A., Minor in Math). I work on neural
              controllers built from real connectome data, runtime safety
              for robot learning policies, and temporal reasoning in
              language models.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                View Projects
              </a>
              <a
                href="/Neil_Tripathi_Resume_Jan_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:border-[#cbd5f5] hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Open resume PDF in a new tab"
              >
                Download Resume
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
            className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100 p-6 shadow-soft sm:p-7 lg:p-8"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-100 sm:h-32 sm:w-32">
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
                  CS from NYU · San Francisco, CA
                </p>
              </div>
            </div>
            <h2 className="text-sm font-medium text-slate-900">Currently</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>ML Engineer (part-time) at Cybernetic Labs since March: VLM-as-Judge evaluation, Isaac Sim sim-to-real fixes, 2-camera SmolVLA deployment on SO-101</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Connectome locomotion: simulating 13K neurons from the Drosophila MANC VNC in MuJoCo, deploying to a physical hexapod</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>TAP-Score: runtime failure detection for Diffusion Policy (Can AUROC 0.972, Lift obs-only 0.982)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Temporal reasoning benchmark for LLMs: frontier models are more confidently wrong when timestamps are absent</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span>Co-founding Physical.AI, a data-driven marketplace for physical ads (top 6 at YC W25 hackathon)</span>
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
                I graduated from NYU with a B.A. in Computer Science and a Minor
                in Mathematics (Dean&apos;s List 2023-2025). My current work
                sits at the intersection of computational neuroscience and
                robotics: building locomotion controllers from real connectome
                wiring diagrams, testing whether biological circuits fail in
                more interpretable ways than learned policies, and deploying
                the results on physical hardware.
              </p>
              <p>
                Part of my week goes to Cybernetic Labs, where I&apos;m an
                ML Engineer (since March 2026) working on robot policy
                evaluation infrastructure for sim-to-real manipulation:
                VLM-as-Judge evaluation, Isaac Sim sim-to-real fixes, and
                SmolVLA deployment on the SO-101 arm. Alongside that I build
                TAP-Score for
                Diffusion Policy, study temporal reasoning failures in
                frontier LLMs, and have a radiotherapy-robustness paper
                accepted at SERA 2026 plus a VLM visibility benchmark
                submitted with Prof. Ernest Davis at NYU. Previously I
                co-founded Physical.AI (top 6, YC W25 hackathon) and built
                Sympli, a voice-first health companion with a HIPAA-aware
                AWS stack.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
              Skills &amp; tools
            </h2>
            <ul className="grid gap-2 text-sm text-slate-800 sm:text-[0.94rem]">
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">AI/ML</span>: PyTorch, MuJoCo,
                Brian2, diffusion models, LLM fine-tuning, object detection,
                evaluation pipelines, agent tool use
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Programming</span>: Python, TypeScript,
                SQL, Java, Rust, C
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Data &amp; Cloud</span>: Postgres,
                MongoDB, BigQuery, Supabase, AWS, Docker, REST APIs
              </li>
              <li className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                <span className="font-medium">Languages</span>: English (fluent),
                Hindi (fluent), Spanish (intermediate), French (basic)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
