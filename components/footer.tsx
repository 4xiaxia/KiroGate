export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&#9889;</span>
            <span className="font-semibold text-foreground">KiroGate</span>
            <span>v2.3.0</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Open source under AGPL-3.0 License
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/4xiaxia/KiroGate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://github.com/4xiaxia/KiroGate/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Issues
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
