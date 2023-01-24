// Solution 1
const typedObjectKeys1 = <TObject extends object>(obj: TObject) => {
  return Object.keys(obj) as Array<keyof TObject>;
};

// Solution 2
const typedObjectKeys2 = <TKey extends string>(obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>;
};

const result1 = typedObjectKeys2({
  a: 1,
  b: 2,
});
