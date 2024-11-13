# ensure-object-values

![npm](https://img.shields.io/npm/v/ensure-object-values)

A TypeScript utility function for ensuring that all values in the provided object match the specified type.

## Installation

```bash
npm install ensure-object-values
```

## Usage

The `ensureObjectValues` function helps in creating objects necessarily containing all types of the provided union. It's particularly useful for creating type-safe maps.

```typescript
import ensureObjectValues from 'ensure-object-values';

// A type to create a map for
type Foo = string | number;

// A complete map
const fooMap = ensureObjectValues<Foo>()({key1: 'bar', key2: 0});

// An incomplete map causes the type error:
// Argument of type '{ key1: string; }' is not assignable to parameter of type 'never'.
const incompleteFooMap = ensureObjectValues<Foo>()({key1: 'bar'});

// An extra value type causes the type error:
// Type 'bigint' is not assignable to type 'Foo'.
const extraFooMap = ensureObjectValues<Foo>()({key1: 'bar', key2: 0, key3: 0n});
```
