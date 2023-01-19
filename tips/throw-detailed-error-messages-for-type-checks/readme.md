# Throw detailed error messages for type checks

```ts
type CheckForBadArgs<Arg> = Arg extends any[]
  ? 'Type Check: You cannot compare two arrays using deepEqualCompare '
  : Arg;

export const deepEqualCompare = <Arg>(
  a: CheckForBadArgs<Arg>,
  b: CheckForBadArgs<Arg>
): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    throw new Error('You cannot compare two arrays using deepEqualCompare');
  }

  return false;
};

deepEqualCompare(1, 1);
deepEqualCompare([], ['a']);
```
