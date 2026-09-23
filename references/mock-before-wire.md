# Mock before wire

Use when the unknown is how an interaction should feel. Build a local functional mock before connecting production data or services.

1. Put 2–3 variants of the same flow in one HTML file with a visible variant switcher.
2. Make each variant respond to clicks and inputs using in-memory state. It must make no API or database calls.
3. Ask 3–4 focused questions about the behavior, such as inline versus modal confirmation or what happens after an error.
4. Build a reply from the selected variant and answers, pointing to the implementation surface.

Mark the mock as simulated. A working-looking mock is evidence of interaction preference, not evidence that the integration works.
