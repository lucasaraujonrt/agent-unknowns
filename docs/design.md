# Design and boundaries

Agent Unknowns has three layers:

1. `SKILL.md` identifies the task phase and routes to one technique.
2. `references/` gives the agent a bounded recipe and output contract for that technique.
3. `assets/template-base.html` provides local interaction primitives. The agent replaces its synthetic content for each task.

The skill asks the agent to inspect the host repository or primary product evidence before making claims. A generated artifact should distinguish observed facts, inferences, options, and user decisions. If evidence is missing, the artifact names the gap instead of fabricating a metric or state.

The HTML is a communication surface. It can collect a preference and prepare a reply, but it is not an approval system. The agent host remains responsible for authorization, access to external services, and any action that changes a repository or outside system.

Generated files may contain private context even though this repository does not. The default `.unknowns/` output directory is therefore a suggestion for the host project, not a publishing destination. Review and sanitize each artifact before sharing it.

## Portable scope

The public skill contains no absolute paths, vendor credentials, customer data, or dependency on Inker's task board, analytics, or release process. Host-specific integrations can supply evidence, but the skill still works with a plain local repository.

The HTML template uses inline CSS and JavaScript so it opens as a single file. It has no telemetry, remote fonts, or external assets. The included queue example is synthetic and should never be mistaken for a verified incident.
