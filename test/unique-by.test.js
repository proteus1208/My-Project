import test from 'node:test';
import assert from 'node:assert/strict';
import { uniqueBy } from '../src/unique-by.js';
test('preserves first matching item', () => {
 const a = [{id:1,n:'a'},{id:1,n:'b'},{id:2,n:'c'}];
 assert.deepEqual(uniqueBy(a, x => x.id), [a[0],a[2]]);
});
test('preserves order', () => assert.deepEqual(uniqueBy([3,1,3,2], x => x), [3,1,2]));
test('validates arguments', () => assert.throws(() => uniqueBy('x', x => x), TypeError));
