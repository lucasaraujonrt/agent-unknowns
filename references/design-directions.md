# Design directions

Use when the user can recognize a suitable visual direction but cannot describe it precisely. For an interaction or flow, use `mock-before-wire`.

1. Inspect the current interface and use the same representative content in each direction. If real content is sensitive, use structurally realistic synthetic content and label it.
2. Render 3–4 genuinely different directions in one HTML file. Vary layout, density, typography, and color with intent; explain one tradeoff per direction.
3. Give each direction a selection control. Provide separate controls for elements the user wants to borrow or skip.
4. Make the reply builder name the selected direction, borrowed elements, skipped elements, and the exact screen or component to change next.

The HTML is an exploration, not production UI. Do not change the application until the user selects a direction.
