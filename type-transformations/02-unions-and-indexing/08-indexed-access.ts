export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
};

type FakeDataDefaults = typeof fakeDataDefaults;

export type StringType = FakeDataDefaults['String'];
export type IntType = FakeDataDefaults['Int'];
export type FloatType = FakeDataDefaults['Float'];
export type BooleanType = FakeDataDefaults['Boolean'];
export type IDType = FakeDataDefaults['ID'];
