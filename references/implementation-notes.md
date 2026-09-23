# Implementation notes

Use during work that may uncover deviations, especially a longer or multi-file change. Keep an append-only decision trail that the user can inspect without losing the original plan.

1. Create a local HTML artifact from `assets/template-base.html` after the plan is agreed. Record the plan in a short opening section.
2. Append dated or sequenced entries as work progresses:
   - **Discovery:** a verified finding that requires no decision.
   - **Deviation:** planned behavior, actual constraint, and the conservative choice taken.
   - **Decision needed:** a blocking or material choice with options and a reply builder.
3. Keep counts of deviations and open decisions near the top. Let filters show all entries, deviations, or decisions without reloading.
4. Close with a short account of what changed from the plan and what still needs a decision.

Continue independent work when a choice is optional. Ask directly in the conversation when an answer is required for the next action; an HTML page is not a substitute for a blocking question or authorization.
