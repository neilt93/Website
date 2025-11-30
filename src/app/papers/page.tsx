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
        <ul className="mt-4 space-y-1.5 text-xs text-slate-700 sm:text-[0.78rem]">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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

        <div className="grid gap-5 sm:grid-cols-2">
          <PaperCard
            title="Benchmarking Commonsense Visual Reasoning in Vision-Language Models"
            role="Co-author"
            venue="Research with Prof. Ernest Davis"
            year="2025 · Manuscript in preparation"
            summary="Diagnostic study of visual commonsense reasoning with a focus on visibility, occlusion, and viewpoint shifts in vision-language models."
            bullets={[
              "Designed diagnostic datasets probing viewpoint and occlusion",
              "Built automatic graders to detect hallucination and inconsistency",
              "Evaluated GPT-4V, Gemini, and Claude variants for reliability metrics",
            ]}
          />

          <PaperCard
            title="Evaluating Large Language Models for Legal Multiple Choice Question Answering"
            role="Co-author"
            venue="NYU Natural Language Processing · Course project"
            year="2024"
            summary="Applied transformer-based models to legal multiple choice question answering, introducing a new evaluation metric that combines question difficulty, model confidence, and correctness."
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


