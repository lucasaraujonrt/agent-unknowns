# Decision interview

Use when several architectural choices are open and one choice constrains the others.

1. Inspect current contracts and identify candidate decisions. For each, write what it would constrain and whether it is easy to reverse.
2. Ask one question at a time, highest downstream impact first. Offer 2–3 distinct options, plus a free-form answer when appropriate.
3. In an HTML artifact, show progress and reveal the next question after the current one is answered. Do not present a wall of questions.
4. After the last answer, show a decision table with rationale and remaining unknowns. Build an implementation prompt using only decisions actually made.

If the next step is blocked by an unanswered decision, keep that question open. Do not silently choose a default for an irreversible change.
