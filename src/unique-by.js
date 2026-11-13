export function uniqueBy(items, keySelector) {
  if (!Array.isArray(items)) throw new TypeError('items must be an array');
  if (typeof keySelector !== 'function') throw new TypeError('keySelector must be a function');
  const seen = new Set();
  return items.filter((item, index) => {
    const key = keySelector(item, index);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
