type YouSayGoodbyeAndISayHello<T> = T extends 'hello' ? 'goodbye' : 'hello';

type tests = YouSayGoodbyeAndISayHello<'hello'>;
