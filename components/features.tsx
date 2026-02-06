import { Layers, Shield, Zap, Code2, RefreshCw, Users } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Dual API Format",
    description:
      "Fully compatible with both OpenAI and Anthropic API formats. Drop-in replacement for any tool that supports these APIs.",
  },
  {
    icon: Zap,
    title: "Streaming Support",
    description:
      "Real-time streaming responses with SSE for both OpenAI and Anthropic formats, including thinking/reasoning blocks.",
  },
  {
    icon: Code2,
    title: "Tool Calling",
    description:
      "Complete tool/function calling support with automatic format conversion between OpenAI and Anthropic schemas.",
  },
  {
    icon: Users,
    title: "Multi-Tenant",
    description:
      "Built-in multi-tenant support with user management, OAuth2 authentication, and per-user token pools.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description:
      "API key authentication, rate limiting, CSRF protection, encrypted token storage, and admin dashboard with session management.",
  },
  {
    icon: RefreshCw,
    title: "Auto Token Refresh",
    description:
      "Automatic Kiro token lifecycle management with health checking, exponential backoff retry, and intelligent failover.",
  },
]

export function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for a production API gateway
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Built with security, performance, and developer experience in mind.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2.5">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
