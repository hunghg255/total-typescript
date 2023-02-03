const pick = <TObj, TPicked extends keyof TObj>(
  obj: TObj,
  picked: Array<TPicked>
) => {
  return picked.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as Pick<TObj, TPicked>);
};

const r1 = pick(
  {
    a: 1,
    b: 2,
    c: 3,
  },
  ['a', 'b']
);
