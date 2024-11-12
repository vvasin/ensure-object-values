/**
 * Ensures that all values in the provided object match the specified type `T`.
 *
 * This utility function helps in creating objects necessarily containing all
 * types of the provided union. It's particularly useful for creating type-safe
 * maps.
 *
 * @template T - The type that all values in the object must match.
 * @returns A function that takes an object and returns it if all values matches
 * the type `T`, otherwise causes a type error.
 *
 * @example
 * ```typescript
 * // A type to create a map for
 * type Foo = string | number;
 *
 * // A complete map
 * const fooMap = ensureObjectValues<Foo>()({key1: 'bar', key2: 0});
 *
 * // An incomplete map causes the type error:
 * // Argument of type '{ key1: string; }' is not assignable to parameter of type 'never'.
 * const incompleteFooMap = ensureObjectValues<Foo>()({key1: 'bar'});
 *
 * // An extra value type causes the type error:
 * // Type 'bigint' is not assignable to type 'Foo'.
 * const extraFooMap = ensureObjectValues<Foo>()({key1: 'bar', key2: 0, key3: 0n});
 * ```
 */
export default function ensureObjectValues<T>() {
  return <O extends {[key: keyof any]: T}>(
    object: [T] extends [O[keyof O]] ? O : never,
  ) => object;
}
