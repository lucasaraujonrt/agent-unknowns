---
name: unknowns
description: Help a coding agent surface assumptions before, during, and after implementation. Use when the user asks for blind spots, options, an interview, a prototype, a plan they can adjust, live implementation notes, or a change quiz.
---

# Unknowns

Turn an unclear request into a small, evidence-based artifact that the user can respond to. Prefer a few concrete choices over a long report. Each artifact ends with a **reply builder**: the user's selections become a plain-language response with one next action.

## Choose a technique

First identify the phase: **before implementation**, **during implementation**, or **after implementation**. Before implementation, identify the dominant uncertainty. Read only the matching reference.

| Phase | Uncertainty | Reference |
| --- | --- | --- |
| Before | Unfamiliar code area; the request may assume the wrong current state | `references/blindspot-pass.md` |
| Before | Unfamiliar concept or library | `references/teach-me.md` |
| Before | The user can recognize a visual direction but cannot describe it yet | `references/design-directions.md` |
| Before | The user needs to feel an interaction before specifying it | `references/mock-before-wire.md` |
| Before | Open product question that needs evidence before options | `references/brainstorm-grounded.md` |
| Before | Architectural decisions with different downstream costs | `references/interview.md` |
| Before | Porting a reference into an existing system | `references/reference-port.md` |
| Before | Ready to build, but the plan mixes choices with routine work | `references/tweakable-plan.md` |
| During | Findings or deviations appear while implementing | `references/implementation-notes.md` |
| After | The reviewer needs to understand the actual change | `references/change-quiz.md` |
| After | A short, evidence-based proposal needs a decision | `references/pitch-doc.md` |

For a full feature discovery cycle, use `interview` → `tweakable-plan` → `implementation-notes` → `change-quiz`, only when each stage is useful. Do not create artifacts solely to complete the sequence.

## Evidence rules

- For code questions, inspect the current repository, relevant history, tests, and contracts before presenting claims. Link findings to exact files or commits when possible.
- For product questions, use available analytics, interviews, or other primary data. Identify the source and date. If data is unavailable, label the gap and ask for it; do not manufacture metrics.
- Separate verified observations, inferences, options, and decisions. Do not turn a selected chip or a passed quiz into authorization for a deployment, merge, purchase, or other external action.
- Keep private data, credentials, customer content, and raw logs out of shareable HTML. Use synthetic examples in demos.

## Artifact contract

Start from `assets/template-base.html` and keep only the primitives needed for the chosen technique. Replace all example content and placeholders. The file should open locally in a browser without a server or build step. Put generated files in the host project's `.unknowns/` directory by default; create it if needed and let the host decide whether to version artifacts.

Use a short title, evidence links, clear options, and a reply builder that ends with a concrete next action. Interactive controls must update the reply. The template includes single and multiple choice chips, copy buttons, a knowledge quiz, collapsible detail, and filters. A technique may add its own local interaction.

When the user makes a decision, report the selected option in the conversation. Only promote a temporary artifact into project documentation or a task after the user or host workflow asks for it.
