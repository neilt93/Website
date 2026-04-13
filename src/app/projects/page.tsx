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
            A mix of research, infrastructure, and product work. Most of it goes
            from paper to running code to real users or real hardware.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            title="TAP-Score"
            tag="Research · Robot Learning"
            summary="Runtime failure detection for Diffusion Policy: predicts when a visuomotor policy will fail so the robot can abstain and dramatically improve success rates."
            bullets={[
              "AUROC 0.972 on Can and 0.982 (obs-only) on Lift under zero-object perturbation",
              "Selective execution: 100% success at 20% coverage vs 45% baseline",
              "World-model guardrail fused with risk predictor reaches AUROC 0.923",
            ]}
            href="https://github.com/neilt93/TAP-Score"
          />
          <ProjectCard
            title="Connectome-Driven Locomotion"
            tag="Research · Neuro-Robotics"
            summary="Biologically-inspired locomotion controller: simulates the full 13,101-neuron Drosophila ventral nerve cord in Brian2 + FlyGym, then deploys to a physical hexapod."
            bullets={[
              "Minimal 1,000-neuron circuit preserves tripod gait and causal ablation results",
              "Emergent odor avoidance from connectome wiring alone (no engineered navigation)",
              "Sim-to-real on a Waveshare HexArth 18-DOF Dynamixel hexapod",
            ]}
            href="https://github.com/neilt93/Fly-Brain-AI"
          />
          <ProjectCard
            title="Temporal-Bench"
            tag="Research · LLM Eval"
            summary="Do frontier LLMs know when their context is stale? Headline finding: more capable models are more confidently wrong without timestamps."
            bullets={[
              "GPT-5.4: 100% false trust without timestamps, 0% with",
              "Claude Opus: 100% switch sensitivity, 84.6% false trust without timestamps",
              "Fine-tuned GPT-2 + TinyLlama baselines; paper in preparation",
            ]}
            href="https://github.com/neilt93/temporal-bench"
          />
          <ProjectCard
            title="Crypto Safety Wallet"
            tag="Agents · Safety"
            summary="LLM-native crypto wallet with a 4-check safety engine on Base. Natural-language intents across send, swap, batch, chain, streaming, and bridging."
            bullets={[
              "4-check safety pipeline: simulation, approval scope, reputation, semantic review",
              "170-case eval suite including 32 adversarial tests across 6 attack categories",
              "NEAR Intents Skills API with policy layer and bridge adapter",
            ]}
          />
          <ProjectCard
            title="Prediction Market Agent"
            tag="Forecasting · LLM"
            summary="Local-first prediction market forecasting agent with LLM-driven sub-question decomposition, devil's advocate debate, and automated Kalshi trading."
            bullets={[
              "Backtested across 229 markets with Qwen 14B: 80% directional accuracy",
              "Brier score 0.0033; dynamic ECE thresholds for position sizing",
              "LightGBM calibration layer + automated position management",
            ]}
            href="https://github.com/neilt93/Prediction-Market-Agent"
          />
          <ProjectCard
            title="Physical.AI"
            tag="Co-Founder · SF"
            summary="Data-driven marketplace for physical ads. Zillow-style discovery on a map, top 6 at YC W25 hackathon finals out of 100+ teams."
            bullets={[
              "Live attention score derived from Caltrans PeMS traffic data (OTS volume, dwell time)",
              "Backend ingests placements, maps to nearby sensors, computes scores against baselines",
            ]}
          />
          <ProjectCard
            title="Sympli"
            tag="Technical Co-Founder · On-Hold"
            summary="Voice-first health companion. Voice intake → clinician-style note pipeline (ASR + summarisation) with latency under 1 minute."
            bullets={[
              "HIPAA-aware AWS stack: TypeScript, Postgres, self-hosted LLM",
              "Shipped alpha to 20 users (100+ sessions)",
            ]}
            href="https://github.com/neilt93/Sympli-Prototype"
          />
          <ProjectCard
            title="HVAC Assembly Part Counter"
            tag="Computer Vision · Contract"
            summary="Freelance CV project to count small parts in 1:72 HVAC assembly kits from video and image data. Delivered an iOS app for real-time part counting."
            bullets={[
              "Trained object detector across 14 part classes; 95% accuracy on a 1,200-image test set",
              "Optimised latency to under 5s on iPhone 16 Pro",
            ]}
            href="https://github.com/neilt93/HVAC-project"
          />
          <ProjectCard
            title="Crypto Signal Dashboard"
            tag="AI x Crypto · Sentient Labs"
            summary="Real-time dashboard for whale movements, volume anomalies, and notable trader activity using Nansen on-chain data. Built at Sentient Labs."
            bullets={[
              "2–3k lines backend TypeScript, ~1k lines frontend React",
              "Streaming aggregation with sub-2s latency on exchange data",
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
