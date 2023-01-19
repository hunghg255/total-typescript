# Create a 'key remover' function which can process any generic object

```ts
export const makeKeyRemover =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };

const keyRemover = makeKeyRemover(['a']);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });
```
