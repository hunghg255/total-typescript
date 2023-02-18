type GetDataValue<T> = T extends { data: any } ? T['data'] : never;

type GetDataValue2<T> = T extends { data: infer TInferredData }
  ? TInferredData
  : never;

type tests1 = GetDataValue2<{ data: 'hello' }>;
