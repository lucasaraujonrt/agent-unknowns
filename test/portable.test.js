import { expect, test } from 'bun:test';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const skill = readFileSync(join(root, 'SKILL.md'), 'utf8');
const refs = readdirSync(join(root, 'references')).filter((name) => name.endsWith('.md'));

test('every routed technique has a readable reference', () => {
  expect(skill).toMatch(/^---\nname: unknowns\ndescription: .+\n---/);
  expect(refs).toHaveLength(11);
  for (const name of refs) {
    expect(skill).toContain(`references/${name}`);
    expect(readFileSync(join(root, 'references', name), 'utf8').trim()).toMatch(/^# /);
  }
  expect(existsSync(join(root, 'assets', 'template-base.html'))).toBe(true);
});

test('portable skill and template contain no local project identifiers', () => {
  const files = ['SKILL.md', 'assets/template-base.html', ...refs.map((name) => `references/${name}`)];
  for (const file of files) {
    const contents = readFileSync(join(root, file), 'utf8');
    expect(contents).not.toMatch(/\/Users\/|inker|kitsune|lucas|\.env\.local/i);
  }
});
