"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

const codeSnippets = {
  python: {
    label: "Python",
    code: `# pip install uvicorn fastapi
git clone https://github.com/4xiaxia/KiroGate.git
cd KiroGate

# Configure environment
cp .env.example .env
# Edit .env with your PROXY_API_KEY and REFRESH_TOKEN

# Start the gateway
python main.py`,
  },
  deno: {
    label: "Deno",
    code: `# Single-file edition - no dependencies needed
deno run --allow-net --allow-env --unstable-kv main.ts`,
  },
  docker: {
    label: "Docker",
    code: `docker run -d \\
  -p 8000:8000 \\
  -e PROXY_API_KEY=your_secret_key \\
  -e REFRESH_TOKEN=your_kiro_token \\
  ghcr.io/4xiaxia/kirogate:latest`,
  },
  curl: {
    label: "Usage",
    code: `# OpenAI-compatible request
curl http://localhost:8000/v1/chat/completions \\
  -H "Authorization: Bearer your_proxy_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-sonnet-4-5",
    "messages": [{"role": "user", "content": "Hello!"}],
    "stream": true
  }'`,
  },
}

type Tab = keyof typeof codeSnippets

export function Quickstart() {
  const [activeTab, setActiveTab] = useState<Tab>("python")
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(codeSnippets[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick Start
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Get up and running in minutes with Python, Deno, or Docker.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          {/* Tabs */}
          <div className="flex border-b border-border bg-muted/50">
            {(Object.keys(codeSnippets) as Tab[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-3 text-sm font-medium transition-colors ${
                  activeTab === key
                    ? "border-b-2 border-primary bg-card text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {codeSnippets[key].label}
              </button>
            ))}
          </div>

          {/* Code block */}
          <div className="relative">
            <button
              onClick={handleCopy}
              className="absolute right-3 top-3 rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
            <pre className="overflow-x-auto border-0 p-5 text-sm leading-relaxed text-foreground">
              <code>{codeSnippets[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
