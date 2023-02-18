type YouSayGoodbyeAndISayHello<T> = T extends 'hello' | 'goodbye'
  ? T extends 'hello'
    ? 'goodbye'
    : 'hello'
  : never;

type tests = YouSayGoodbyeAndISayHello<'hello'>;
