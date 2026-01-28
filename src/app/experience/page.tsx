type TimelineItemProps = {
  title: string;
  meta: string;
  bullets: string[];
};

function TimelineItem({ title, meta, bullets }: TimelineItemProps) {
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
        <ul className="space-y-1 pt-1 text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
            Experience
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Roles across research, AI product work, teaching, and internships.
          </p>
        </div>

        <div className="relative pl-5 sm:pl-6">
          <div
            className="pointer-events-none absolute left-[10px] top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-slate-300 via-slate-200 to-slate-300 sm:left-[11px]"
            aria-hidden="true"
          />
          <div className="space-y-6">
            <TimelineItem
              title="AI Product & Research Intern · Sentient Labs"
              meta="May 2025 – Aug 2025 · New York City, NY (Hybrid)"
              bullets={[
                "Built an internal evaluation suite of 100+ LLM prompts with automated scoring for tool-call correctness and safety-violation rate.",
                "Improved feedback-to-ticket latency by 20% via regression harness and iteration notes; shipped 3 tool integrations with engineers.",
                "Built a real-time crypto signals dashboard (2–3k lines backend TS, 1k lines frontend React) with latency under 2s for exchange data.",
                "Prototyped 'Dobby Mode' agent (300-line Streamlit demo) using Dolphin Mistral; enforced JSON schema to reduce hallucinations.",
              ]}
            />
            <TimelineItem
              title="Research with Prof. Ernest Davis · Visual Common Sense"
              meta="Sep 2025 – Dec 2025 · NYU"
              bullets={[
                "Built a diagnostic benchmark (100 base + 100 counterfactual images; 100 questions + 100 flips) and automatic graders.",
                "Evaluated six VLMs (ChatGPT, Claude, LLaVA, etc.) and analysed hallucination/abstention behavior.",
              ]}
            />
            <TimelineItem
              title="Teaching Assistant · Database Design, NYU"
              meta="Jan 2025 – May 2025 · New York City, NY"
              bullets={[
                "Led recitations on SQL, MongoDB, Flask/Jinja, and schema design; supported 50+ students via office hours and grading.",
              ]}
            />
            <TimelineItem
              title="ML & Full-Stack Intern · 4mainstreet.ai"
              meta="May 2024 – Aug 2024 · Fremont, CA (Remote)"
              bullets={[
                "Built data pipelines for customer voice + text (4,000 records); integrated outputs into a Flutter front-end.",
                "Built an evaluation harness to benchmark Llama 3 8B, Gemini, and GPT-class models on 4,000 labeled examples; computed precision/recall/F1 and surfaced failure modes to guide model selection.",
              ]}
            />
            <TimelineItem
              title="Software Engineering Intern (Blockchain & Data) · Scroll.io"
              meta="May 2023 – Aug 2023 · New York City, NY (Remote)"
              bullets={[
                "Built a Discord analytics tool for a 20K+ community; automated ingestion into BigQuery and cut manual reporting by 5 hours/week.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        aria-labelledby="education-heading"
        className="space-y-6"
      >
        <h2
          id="education-heading"
          className="text-xl font-semibold text-slate-900 sm:text-2xl"
        >
          Education
        </h2>
        <div className="space-y-4">
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h3 className="text-sm font-semibold text-slate-900">New York University</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Sep 2022 – Dec 2025 · New York, NY
            </p>
            <p className="pt-1.5 text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
              B.A. Computer Science, Minor: Mathematics, GPA: 3.77/4.00. Dean&apos;s
              List (2023–2024, 2024–2025). Coursework: ML, AI, NLP, algorithms,
              operating systems, cryptography, databases.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h3 className="text-sm font-semibold text-slate-900">St Olave&apos;s Grammar School</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Sep 2016 – Jun 2022 · London, UK
            </p>
            <p className="pt-1.5 text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
              A levels: Mathematics, Further Mathematics, Computer Science, Physics (A* in each).
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
