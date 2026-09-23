# Agent Unknowns

**Project site:** https://lucasaraujonrt.github.io/agent-unknowns/
A portable skill for coding agents to discover what a request leaves unanswered. It routes a task to one of eleven focused techniques, grounds the result in available evidence, and produces a small interactive HTML artifact. The user's selections become a reply they can paste back into the agent chat.

The skill runs inside the agent. The HTML is a review surface for the user; it does not execute project code or call external services.

## What it covers

| When | Techniques |
| --- | --- |
| Before implementation | Blind spot pass, teach me, design directions, mock before wire, grounded brainstorm, decision interview, reference port, tweakable plan |
| During implementation | Append-only implementation notes and deviations |
| After implementation | Change quiz and pitch document |

The [skill router](SKILL.md) chooses a technique from the phase and dominant uncertainty. Each [reference](references/) gives an agent a concise recipe. The [HTML template](assets/template-base.html) demonstrates choice chips, a reply builder, copy buttons, a knowledge check, collapsible detail, and filters. Its queue retry scenario is fictional and can be opened directly in a browser.

## Use it with an agent

Point your agent's skill loader to this repository, or copy this directory to a supported project skill path such as `.agents/skills/unknowns`. No package installation is required to use the skill or open the template. Agent hosts differ in how they discover skills; follow your host's skill installation instructions.

Example request:

> Use the Unknowns skill for a blind spot pass before changing the queue worker. Inspect the current code and tests, then create a short HTML artifact with the assumptions I should resolve.

Another synthetic input and expected artifact outline are in [examples/example-request.md](examples/example-request.md). Generated artifacts belong in the host project's `.unknowns/` folder by default; that folder is temporary unless the host chooses to keep a result.

## How to customize the template

1. Copy `assets/template-base.html` to a new HTML file in the host project.
2. Replace its fictional queue retry content with verified facts and the chosen technique's controls. Remove unused demo sections.
3. Make every control update the reply. End that reply with one concrete next action.
4. Open the file locally and test the choices, copy action, and filters before sharing it.

The template has no build step or external font dependency. It does not store selections or send content over the network. Its knowledge check tests understanding; it never authorizes a merge, deployment, purchase, or publication.

## Verify this repository

The skill itself has no runtime dependencies. To run the repository checks, install Bun and then:

```sh
bun install --frozen-lockfile
bun test
```

The tests exercise template interactions, verify that every routed reference exists, and check that the reusable skill and template contain no Inker-specific paths or branding. CI runs the same checks on pushes and pull requests.

## Origin and attribution

This project grew out of a workflow used while building Inker. Its approach was inspired by Thariq Shihipar's [“A field guide to Claude Fable 5: Finding your unknowns”](https://claude.com/blog/a-field-guide-to-claude-fable-finding-your-unknowns) and [“Using Claude Code: The unreasonable effectiveness of HTML”](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html). The routing rules, interactive template, and examples here are an independent adaptation. This is a community project, not an Anthropic or Claude release.

See [design and boundaries](docs/design.md) for the evidence and privacy model. Contributions are welcome under [CONTRIBUTING.md](CONTRIBUTING.md). Licensed under [MIT](LICENSE).
