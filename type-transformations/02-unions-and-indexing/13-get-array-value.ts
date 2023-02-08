const fruits = ['apple', 'banana', 'orange'] as const;

type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];
