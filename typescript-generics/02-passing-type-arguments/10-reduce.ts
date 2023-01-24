const array = [
  {
    name: 'John',
    id: 1,
  },
  {
    name: 'Steve',
    id: 1,
  },
];

const obj = array.reduce<Record<string, { name: string; id: number }>>(
  (accum, item) => {
    accum[item.id] = item;
    return accum;
  },
  {}
);
