const models = [
  {
    name: "claude-opus-4-5",
    tier: "Top Tier",
    description: "Most capable model for complex reasoning and analysis",
    badge: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
  {
    name: "claude-sonnet-4-5",
    tier: "Enhanced",
    description: "Best balance of capability and speed for most tasks",
    badge: "bg-primary/10 text-primary border-primary/20",
  },
  {
    name: "claude-sonnet-4",
    tier: "Balanced",
    description: "Reliable performance for everyday coding and writing",
    badge: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    name: "claude-haiku-4-5",
    tier: "Fast",
    description: "Fastest response times for simple tasks and queries",
    badge: "bg-accent/10 text-accent-foreground border-accent/20",
  },
]

export function Models() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Supported Models
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Access the full range of Claude models through a unified API interface.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4">
          {models.map((model) => (
            <div
              key={model.name}
              className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md sm:p-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <svg
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-foreground">
                    {model.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {model.description}
                  </p>
                </div>
              </div>
              <span
                className={`hidden rounded-full border px-3 py-1 text-xs font-medium sm:inline-block ${model.badge}`}
              >
                {model.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
