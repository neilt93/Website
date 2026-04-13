type PaperCardProps = {
  title: string;
  role: string;
  venue: string;
  year: string;
  summary: string;
  bullets?: string[];
  href?: string;
  pdfHref?: string;
};

function PaperCard({
  title,
  role,
  venue,
  year,
  summary,
  bullets,
  href,
  pdfHref,
}: PaperCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
            {title}
          </h2>
          <p className="text-xs text-slate-600">
            <span className="font-medium">{role}</span> · {venue} · {year}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-slate-700 sm:text-[0.8rem]">
          {summary}
        </p>
      </div>
      {bullets && bullets.length > 0 && (
        <div className="mt-3 space-y-1.5">
          <p className="text-[0.7rem] font-medium uppercase tracking-wide text-slate-500">
            My role
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 sm:text-[0.78rem]">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(href || pdfHref) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-xs font-medium text-blue-700 underline-offset-4 hover:text-blue-800 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={`Open external resource for ${title} in a new tab`}
            >
              View code/project
            </a>
          )}
          {pdfHref && (
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-xs font-medium text-slate-700 underline-offset-4 hover:text-slate-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={`Open PDF for ${title} in a new tab`}
            >
              Read paper (PDF)
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function PapersPage() {
  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section
        aria-labelledby="papers-heading"
        className="space-y-6"
      >
        <div className="space-y-2">
          <h1
            id="papers-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Papers &amp; Research
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Work that leans more into research, evaluation, and writing than product
            UI, but still grounded in concrete systems and data.
          </p>
        </div>

        <div className="space-y-6">
          <PaperCard
            title="TAP-Score: Runtime Failure Detection for Diffusion Policy"
            role="Independent research"
            venue="Writeup in progress"
            year="Jan 2026 – Present"
            summary="Supervised risk predictor trained on real visuomotor rollouts that detects when a Diffusion Policy will fail before execution completes, enabling selective execution and closed-loop recovery."
            bullets={[
              "AUROC 0.972 on Can and 0.982 (obs-only) on Lift under zero-object perturbation",
              "Selective execution: 100% success at 20% coverage versus 45% baseline",
              "Action-conditioned world-model guardrail; fusion with risk predictor reaches AUROC 0.923",
            ]}
            href="https://github.com/neilt93/TAP-Score"
          />

          <PaperCard
            title="Temporal-Bench: Do Frontier LLMs Know When Their Context Is Stale?"
            role="Independent research"
            venue="Paper in preparation"
            year="Mar 2026 – Present"
            summary="Benchmark testing whether LLMs recognise when their context is stale. Headline finding: more capable models are more confidently wrong when timestamps are absent."
            bullets={[
              "GPT-5.4: 100% false trust without timestamps, 0% with",
              "Claude Opus: 100% switch sensitivity, 84.6% false trust without timestamps",
              "Fine-tuned GPT-2 and TinyLlama baselines with time-conditioned inputs",
            ]}
            href="https://github.com/neilt93/temporal-bench"
          />

          <PaperCard
            title="Benchmarking Commonsense Visual Reasoning for Vision-Language Models"
            role="Co-author with Prof. Ernest Davis (NYU)"
            venue="arXiv cs.AI"
            year="Submitted Mar 2026"
            summary="Visibility-reasoning benchmark for vision-language models with a 2×2 XOR design across 100 families and 300 headline cells, with automated graders and scoring."
            bullets={[
              "Evaluated 9 VLMs across three tiers (flagship, prior-gen, open-source)",
              "Surfaced a 26% abstention rate in GPT-5 as a key finding",
              "Top scores: GPT-4o (0.728) and Gemini 3.1 Pro (0.727) effectively tied",
            ]}
            href="https://github.com/neilt93/Paper-with-Davis"
          />

          <PaperCard
            title="Adversarial Robustness of 3D U-Net Radiation Therapy Dose Prediction"
            role="Co-author"
            venue="Submitted to SERA 2026 (IEEE/ACIS) and ASTRO 2026"
            year="2025 – 2026"
            summary="Evaluated adversarial (FGSM/PGD) and clinically plausible CT perturbations on the OpenKBP dataset using clinical DVH metrics."
            bullets={[
              "Identified resolution downsampling as the only perturbation with immediate clinical impact",
              "Bone shift late takeoff at level 4-5; noise, bias field, and dental flat through extreme amplitudes",
              "Junior Investigator Travel Award application for ASTRO 2026",
            ]}
            href="https://github.com/neilt93/OpenKBP-Project"
          />

          <PaperCard
            title="Legal Text Classification with BERT and LegalBERT"
            role="Co-author"
            venue="NYU Natural Language Processing · Course project"
            year="2024"
            summary="Fine-tuned BERT-family models on legal corpora; compared against classical baselines with reproducible training and reporting."
            bullets={[
              "Compared BERT-Double, Legal-BERT, and Custom-Legal BERT models",
              "Implemented end-to-end NLP pipeline over legal case corpora",
              "Proposed and implemented a composite evaluation metric for legal QA",
            ]}
            href="https://github.com/rachelren2025/NLP_Final_Project"
            pdfHref="/NLP_Group_10.pdf"
          />
        </div>
      </section>
    </div>
  );
}
