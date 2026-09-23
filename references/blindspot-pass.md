# Blind spot pass

Use before changing an unfamiliar area of code, especially when the request assumes behavior that may not match the repository.

1. Inspect the relevant files, tests, recent commits, migrations, and open work. Keep the search bounded to the requested area.
2. Find 3–8 material gaps between the request and the code as it exists. Include exact file or commit references. If no material gap exists, say so.
3. Show one short card per gap: **assumption**, **observed behavior**, **impact**, and a suggested correction to the request.
4. Let the user mark which corrections matter. Build one revised prompt from those selections.

Use simple cards and copy buttons from the HTML template. Do not add a quiz: the goal is to correct assumptions, not test the user.

Example reply: “The worker already deduplicates by event ID. Keep that path and add a test for the timeout case in `src/worker.ts` before changing the retry policy.”
