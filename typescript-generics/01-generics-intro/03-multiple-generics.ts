const returnBothOfWhatIPassIn = <A, B>(a: A, b: B) => {
  return {
    a,
    b,
  };
};

const result = returnBothOfWhatIPassIn('a', 1);
