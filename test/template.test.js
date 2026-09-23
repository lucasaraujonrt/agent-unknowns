import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../assets/template-base.html', import.meta.url), 'utf8');

function page() {
  return new JSDOM(html, { runScripts: 'dangerously', url: 'https://example.test/' });
}

test('choices update the reply as text, including untrusted labels', () => {
  const dom = page();
  const { document } = dom.window;
  const reply = document.querySelector('#reply-prose');
  expect(reply.textContent).toContain('idempotency key');

  const manual = document.querySelector('[data-value="reconcile"]');
  manual.click();
  expect(reply.textContent).toContain('manual reconciliation');
  expect(document.querySelectorAll('[data-chipgroup="single"] .chip.on')).toHaveLength(1);

  const constraint = document.querySelector('[data-value="timeout"]');
  constraint.dataset.reply = '<img src=x onerror=alert(1)>';
  constraint.click();
  expect(reply.textContent).toContain('<img src=x onerror=alert(1)>');
  expect(reply.querySelector('img')).toBeNull();
  dom.window.close();
});

test('knowledge check points to evidence, completes, and resets', () => {
  const dom = page();
  const { document } = dom.window;
  const first = document.querySelector('[data-q="1"]');
  first.querySelector('[data-correct="false"]').click();
  expect(first.querySelector('.gate-pointer').classList.contains('show')).toBe(true);
  expect(document.querySelector('#gate-banner').classList.contains('show')).toBe(false);

  first.querySelector('[data-correct="true"]').click();
  document.querySelector('[data-q="2"] [data-correct="true"]').click();
  expect(document.querySelector('#gate-progress').textContent).toBe('2/2');
  expect(document.querySelector('#gate-banner').classList.contains('show')).toBe(true);

  dom.window.resetGate();
  expect(document.querySelector('#gate-progress').textContent).toBe('0/2');
  expect(document.querySelector('#gate-banner').classList.contains('show')).toBe(false);
  dom.window.close();
});

test('filter only hides categorized cards', () => {
  const dom = page();
  const { document } = dom.window;
  const copyCard = document.querySelector('.filtered-block:not([data-cat])');
  document.querySelector('[data-filter="decision"]').click();
  expect(copyCard.style.display).toBe('');
  expect([...document.querySelectorAll('[data-cat="finding"]')].every((card) => card.style.display === 'none')).toBe(true);
  expect([...document.querySelectorAll('[data-cat="decision"]')].every((card) => card.style.display === '')).toBe(true);
  dom.window.close();
});

test('copy button exports the reply text', async () => {
  const dom = page();
  const { document, navigator } = dom.window;
  let copied = '';
  Object.defineProperty(dom.window, 'isSecureContext', { value: true });
  Object.defineProperty(navigator, 'clipboard', { value: { writeText: async (text) => { copied = text; } } });
  document.querySelector('[data-copy-target="reply-prose"]').click();
  await new Promise((resolve) => setTimeout(resolve, 0));
  expect(copied).toBe(document.querySelector('#reply-prose').textContent);
  dom.window.close();
});
