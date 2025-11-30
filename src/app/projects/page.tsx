type ProjectCardProps = {
  title: string;
  tag: string;
  summary: string;
  bullets: string[];
  href: string;
};

function ProjectCard({ title, tag, summary, bullets, href }: ProjectCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-[0_22px_60px_rgba(30,64,175,0.25)]">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-slate-800">
            {tag}
          </span>
        </div>
        <p className="text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
          {summary}
        </p>
      </div>
      <ul className="mt-4 space-y-1.5 text-xs text-slate-700 sm:text-[0.78rem]">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-xs font-medium text-blue-700 underline-offset-4 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label={`Open ${title} repository in a new tab`}
        >
          View repository
        </a>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section
        aria-labelledby="projects-heading"
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1
            id="projects-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Selected Projects
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            A few projects that represent how I like to design, build, and ship
            things.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ProjectCard
            title="Paper-with-Davis"
            tag="Research · Python"
            summary="Visual commonsense reasoning project exploring “visibility”: constructing a dataset, defining task structure, and building an evaluation harness over multiple models."
            bullets={[
              "Dataset construction & annotation schema",
              "Evaluation harness across multiple LLM/VLM backends",
              "Reproducible experiment scripts and metrics",
            ]}
            href="https://github.com/neilt93/Paper-with-Davis"
          />
          <ProjectCard
            title="Sympli-Prototype"
            tag="Product · TypeScript"
            summary="Prototype for Sympli, a product aimed at simplifying complex workflows. Frontend uses modern TypeScript and React patterns focused on clarity, quick iteration, and usability."
            bullets={[
              "Responsive UI with minimal, clean design",
              "Typed components for safer iteration",
              "Built to rapidly test product hypotheses",
            ]}
            href="https://github.com/neilt93/Sympli-Prototype"
          />
          <ProjectCard
            title="Crypto Signal Dashboard"
            tag="AI x Crypto · TypeScript"
            summary="Dashboard for monitoring high-priority crypto trading and risk signals. Combines on-chain data, exchange feeds, and custom logic into a single interface for power users."
            bullets={[
              "Signal definitions (whale flows, funding flips, etc.)",
              "Streaming + aggregation into a clear UI",
              "Designed for fast, actionable decision-making",
            ]}
            href="https://github.com/neilt93/Crypto-signal-dashboard"
          />
          <ProjectCard
            title="Hackathons & Competitions"
            tag="Games · DeFi · dApps"
            summary="Assorted hackathon projects across Solana, Polkadot, and Ethereum, including games and funding platforms."
            bullets={[
              "Finalist in a Solana game hackathon with an NFT-based game",
              "Built Polkadot game with NFT rewards that won a prize",
              "Developed Ethereum Kickstarter-style dApp for project funding approvals",
            ]}
            href="https://github.com/neilt93?tab=repositories"
          />
        </div>

        <div>
          <a
            href="https://github.com/neilt93?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-blue-700 underline-offset-4 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="View all repositories on GitHub in a new tab"
          >
            View all repositories on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}


