// Solution 1
const returnBothOfWhatIPassIn1 = <T1, T2>(params: { a: T1; b: T2 }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

// Solution 2
type Params<T1, T2> = {
  a: T1;
  b: T2;
};

// interface Params<T1, T2> {
//   a: T1;
//   b: T2;
// }

const returnBothOfWhatIPassIn2 = <T1, T2>(params: Params<T1, T2>) => {
  return {
    first: params.a,
    second: params.b,
  };
};
