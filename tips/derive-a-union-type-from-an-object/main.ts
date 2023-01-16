export const fruitCounts = {
  apple: 1,
  pear: 2,
  banana: 3,
};

// Old Type
type SigleFruitCount =
  | { apple: number }
  | { pear: number }
  | { banana: number };

// New Type
type FruitCounts = typeof fruitCounts;
type NewSigleFruitCount = {
  [K in keyof FruitCounts]: {
    [K2 in K]: number;
  };
}[keyof FruitCounts];

const sigleFruitCount: NewSigleFruitCount = {
  apple: 2,
};
