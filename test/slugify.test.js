import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';
test('converts words to slugs', () => assert.equal(slugify('Hello, World!'), 'hello-world'));
test('normalizes accents', () => assert.equal(slugify('Crème Brûlée'), 'creme-brulee'));
test('handles blank strings', () => assert.equal(slugify('  '), ''));
test('rejects non-strings', () => assert.throws(() => slugify(42), TypeError));
