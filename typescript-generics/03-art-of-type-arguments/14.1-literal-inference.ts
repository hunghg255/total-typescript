// When returning the value only, it infers
// the literal type
const returnsValueOnly = <T>(t: T) => {
  return t;
};

const result1 = returnsValueOnly('a');
//    ^?

// When returning an object or array, it doesn't infer the
// literal type
const returnsValueInAnObject = <T1>(t: T1) => {
  return {
    t,
  };
};

const result2 = returnsValueInAnObject('abc');
//    ^?

// With a constraint, it narrows it to its literal
const returnsValueInAnObjectWithConstraint = <T1 extends string>(t: T1) => {
  return {
    t,
  };
};

const result3 = returnsValueInAnObjectWithConstraint('abc');
//    ^?

const acceptsValueInAnObject = <T>(obj: { input: T }) => {
  return obj.input;
};

const result5 = acceptsValueInAnObject({ input: 'abc' });
//    ^?

const result2WithAsConst = acceptsValueInAnObject({ input: 'abc' } as const);
//    ^?

const acceptsValueInAnObjectFieldWithConstraint = <T extends string>(obj: {
  input: T;
}) => {
  return obj.input;
};

const result6 = acceptsValueInAnObjectFieldWithConstraint({ input: 'abc' });
//    ^?

const acceptsValueWithObjectConstraint = <
  T extends {
    input: string;
  }
>(
  obj: T
) => {
  return obj.input;
};

const result7 = acceptsValueWithObjectConstraint({ input: 'abc' });

const result4WithAsConst = acceptsValueWithObjectConstraint({
  input: 'abc',
} as const);
