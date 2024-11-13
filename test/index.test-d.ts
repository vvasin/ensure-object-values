import {describe, expectTypeOf, it} from 'vitest';
import ensureObjectValues from '../src/index';

describe('ensureObjectValues', () => {
  type Foo = string | number;

  it('ensures that the provided object includes all possible values of the specified type', () => {
    const incompleteFooMap = {key1: 'bar'};
    type IncompleteFooValue =
      (typeof incompleteFooMap)[keyof typeof incompleteFooMap];

    expectTypeOf<IncompleteFooValue>().toMatchTypeOf<Foo>();
    expectTypeOf<Foo>().not.toMatchTypeOf<IncompleteFooValue>();
    // @ts-expect-error
    ensureObjectValues<Foo>()(incompleteFooMap);
  });

  it('ensures that the provided object does not include values outside the specified type', () => {
    const extraFooMap = {key1: 'bar', key2: 0, key3: 0n};
    type ExtraFooValue = (typeof extraFooMap)[keyof typeof extraFooMap];

    expectTypeOf<ExtraFooValue>().not.toMatchTypeOf<Foo>();
    expectTypeOf<Foo>().toMatchTypeOf<ExtraFooValue>();
    // @ts-expect-error
    ensureObjectValues<Foo>()(extraFooMap);
  });
});
