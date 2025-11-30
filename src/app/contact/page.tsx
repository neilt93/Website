export default function ContactPage() {
  return (
    <div className="space-y-8 py-10 sm:space-y-10 sm:py-12 lg:space-y-12 lg:py-16">
      <section
        aria-labelledby="contact-heading"
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
      >
        <div className="space-y-4">
          <h1
            id="contact-heading"
            className="text-xl font-semibold text-slate-900 sm:text-2xl"
          >
            Contact
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            I&apos;m always open to talking about research, agents, crypto,
            UE5 experiments, or interesting products to build.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="mailto:neiltripathi93@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition hover:bg-[#1d4ed8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Email me
            </a>
            <a
              href="https://github.com/neilt93"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:border-[#cbd5f5] hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Open GitHub profile in a new tab"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/neil-tripathi-001b50300/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[var(--accent)] transition hover:border-[#cbd5f5] hover:bg-[var(--accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Open LinkedIn profile in a new tab"
            >
              LinkedIn
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-500 sm:text-[0.8rem]">
            <p>Based in New York City, NY</p>
            <p className="mt-1">Phone: (929) 476 5255</p>
          </div>
        </div>
      </section>
    </div>
  );
}


