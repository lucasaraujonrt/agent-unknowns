# Contributing

Keep techniques small enough for an agent to load only the relevant reference. A new technique should explain when to use it, what evidence to inspect, the artifact structure, and how the final reply is assembled.

Use synthetic examples. Do not commit generated artifacts containing real prompts, customer records, credentials, analytics exports, or raw logs. Keep the HTML template self-contained and ensure controls work without a server.

Before opening a pull request, run `bun install --frozen-lockfile` and `bun test`. Describe the behavior changed, the evidence for it, and any new host assumptions.
