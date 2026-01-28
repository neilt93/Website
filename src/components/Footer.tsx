export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between sm:px-6">
        <p>&copy; {new Date().getFullYear()} Neil Tripathi</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/neilt93"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-slate-900"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neil-tripathi-001b50300/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-slate-900"
          >
            LinkedIn
          </a>
          <a
            href="mailto:neiltripathi93@gmail.com"
            className="transition hover:text-slate-900"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
