type InterestCardProps = {
  title: string;
  tag: string;
  description: string;
  bullets?: string[];
};

function InterestCard({ title, tag, description, bullets }: InterestCardProps) {
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
          {description}
        </p>
      </div>
      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-xs text-slate-700 sm:text-[0.78rem]">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function InterestsPage() {
  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section
        aria-labelledby="interests-heading"
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1
            id="interests-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Interests
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Some of the domains I spend the most time thinking about and
            building in.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <InterestCard
            title="Research & Papers"
            tag="ML · Evaluation"
            description="I like framing questions precisely, building datasets, and designing evaluation harnesses. I’ve worked on visual commonsense reasoning with Prof. Ernest Davis, focusing on “visibility” and how models represent what can or cannot be seen."
            bullets={[
              "Dataset and annotation design",
              "Evaluation scripts across multiple models",
              "Error analysis and qualitative examples",
            ]}
          />
          <InterestCard
            title="AI x Crypto & Agents"
            tag="Agents · Signals"
            description="I work on agentic systems that interact with crypto markets: signal engines, dashboards, and workflows where models, data, and humans all have to line up. I care about transparency, traceability, and hard guarantees more than hype."
            bullets={[
              "On-chain / off-chain signal design",
              "Agent workflows and safety guards",
              "Dashboards that surface what matters",
            ]}
          />
          <InterestCard
            title="UE5 & Interactive Media"
            tag="UE5 · Real-time"
            description="I’m exploring Unreal Engine 5 for narrative-driven experiences and prototypes. I’m interested in how game engines, AI, and storytelling can intersect, especially for spaces where player choice and systemic behavior matter."
            bullets={[
              "Small UE5 prototypes and experiments",
              "Tooling and pipelines for iteration",
              "Integrating AI systems into interactive worlds",
            ]}
          />
          <InterestCard
            title="Writing & Humanities"
            tag="Critique · Theory"
            description="I also write in a more humanities-adjacent mode: criticism, comparative literature, and theory-driven essays. I like thinking about how technology, narrative, and power intersect."
            bullets={[
              "Essays on literature, performance, and tech",
              "Notes and reflections that inform my projects",
              "Bridging technical and humanistic perspectives",
            ]}
          />
        </div>
      </section>
    </div>
  );
}


