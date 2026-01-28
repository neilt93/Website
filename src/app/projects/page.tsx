type ProjectCardProps = {
  title: string;
  tag: string;
  summary: string;
  bullets: string[];
  href?: string;
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
      {href && (
        <div className="mt-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs font-medium text-blue-700 underline-offset-4 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label={`Open ${title} project in a new tab`}
          >
            View project
          </a>
        </div>
      )}
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            title="Physical.AI"
            tag="Co-Founder · SF"
            summary="Data-driven marketplace for physical ads. Built a Zillow-style discovery experience on a map; achieved top 6 at YC W25 hackathon finals out of 100+ teams."
            bullets={[
              "Integrated live attention score using Caltrans PeMS traffic data to estimate OTS volume, dwell time, and impact by time of day",
              "Backend ingests ad placements, maps to nearby sensors, computes metrics against historical baselines, and surfaces ticker-style scores",
            ]}
          />
          <ProjectCard
            title="Sympli"
            tag="Technical Co-Founder"
            summary="Voice-first health companion app. Built voice intake → clinician-style note pipeline (ASR + summarization) with latency under 1 minute."
            bullets={[
              "Deployed HIPAA-aware AWS stack (TypeScript + Postgres + self-hosted LLM)",
              "Shipped alpha to 20 users (100+ sessions) with end-to-end instrumentation",
            ]}
          />
          <ProjectCard
            title="TAP-Score (Push-T OOD Detection)"
            tag="Research · PyTorch"
            summary="Replicated Diffusion Policy on Push-T; built TAP-Score to rate (obs, action-chunk) pairs using demo positives + shuffled/noisy negatives."
            bullets={[
              "Tested OOD detection under brightness/noise/occlusion perturbations",
              "Reporting AUROC and clean false-alarm rate with score traces",
            ]}
          />
          <ProjectCard
            title="1:72 Scale HVAC Assembly Part Counter"
            tag="Computer Vision · Contract"
            summary="Freelance CV project to count small parts in 1:72 HVAC assembly kits from video and image data. Delivered an iOS app for real-time part counting."
            bullets={[
              "Trained object detector across 14 part classes; achieved 95% accuracy on a 1,200-image test set",
              "Improved robustness to lighting variance and motion blur; optimised latency to under 5s on iPhone 16 Pro",
            ]}
          />
          <ProjectCard
            title="Transformer LM from Scratch"
            tag="PyTorch · Personal"
            summary="Implemented a Transformer language model from scratch in PyTorch; trained on an anonymised corpus (2.6M tokens)."
            bullets={[
              "Reached validation perplexity of 15",
              "Full implementation of attention, positional encoding, and training loop",
            ]}
          />
          <ProjectCard
            title="NLP Final Project — Legal MCQA"
            tag="NLP · BERT · CaseHOLD"
            summary="NYU NLP project on legal multiple-choice QA over the CaseHOLD dataset, using BERT-based models and a new evaluation metric combining difficulty, confidence, and correctness."
            bullets={[
              "Compared BERT-Double, Legal-BERT, and Custom-Legal BERT models",
              "Implemented end-to-end NLP pipeline over legal case corpora",
            ]}
            href="https://github.com/rachelren2025/NLP_Final_Project"
          />
          <ProjectCard
            title="Crypto Signal Dashboard"
            tag="AI x Crypto · TypeScript"
            summary="Real-time dashboard for monitoring high-priority crypto trading and risk signals. 2–3k lines backend TS, 1k lines frontend React with sub-2s latency."
            bullets={[
              "Defined key signals across on-chain and exchange data",
              "Designed for quick, actionable decision-making with streaming aggregation",
            ]}
            href="https://github.com/neilt93/Crypto-signal-dashboard"
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
