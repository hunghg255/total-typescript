# Create your own 'objectKeys' function using generics and the 'keyof' operator

```ts
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

// Old
Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});

// New
const objectKeys = <T>(ob: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

objectKeys(obj).forEach((key) => {
  console.log(obj[key]);
});
```
