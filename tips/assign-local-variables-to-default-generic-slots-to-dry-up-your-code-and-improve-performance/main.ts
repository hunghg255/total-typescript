export type Obj = {
  a: 'foo';
  a2: 'a2';
  a3: 'a3';
  b: 'b';
  b1: 'b1';
  b2: 'b2';
};

type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
