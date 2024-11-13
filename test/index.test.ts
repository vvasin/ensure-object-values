import {describe, expect, it} from 'vitest';
import ensureObjectValues from '../src/index';

describe('ensureObjectValues', () => {
  it('returns the provided argument', () => {
    type Foo = string | number;

    const fooMap = {key1: 'bar', key2: 0};
    const ensuredFooMap = ensureObjectValues<Foo>()(fooMap);

    expect(ensuredFooMap).toBe(fooMap);
  });
});
