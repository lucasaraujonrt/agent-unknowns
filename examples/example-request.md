# Synthetic example: uncertain queue result

An agent receives this request:

> “Add automatic retries to `src/jobs.ts` when the image provider times out.”

Before editing, the agent uses `blindspot-pass` to inspect the worker, its tests, and any provider status API. The artifact should show whether a timeout can occur after the provider accepted a paid request, whether a stable idempotency key exists, and which state is persisted before dispatch.

The user can choose a recovery direction in the interactive artifact. A useful reply names the chosen policy and points to one next action, such as adding a provider-state check before retrying. All paths and events in this example are fictional.

Open [the template](../assets/template-base.html) to try the choice chips, reply builder, knowledge check, and filters.
