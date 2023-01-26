const returnBothOfWhatIPassIn = <
  TParams extends {
    a: unknown;
    b: unknown;
  }
>(
  params: TParams
): [TParams['a'], TParams['b']] => {
  return [params.a, params.b];
};

const result = returnBothOfWhatIPassIn({
  a: 'a',
  b: 1,
});
