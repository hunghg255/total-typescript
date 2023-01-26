// problem
// const getValue = <TObj>(obj: TObj, key: keyof TObj) => {
//   return obj[key];
// };

// Solution
const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  return obj[key];
};

const obj = {
  a: 1,
  b: 'some-string',
  c: true,
};

const numberResult = getValue(obj, 'a');
const stringResult = getValue(obj, 'b');
const booleanResult = getValue(obj, 'c');
