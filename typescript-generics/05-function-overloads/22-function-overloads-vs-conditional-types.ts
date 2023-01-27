function youSayGoodbyeISayHello(greeting: 'goodbye'): 'hello';
function youSayGoodbyeISayHello(greeting: 'hello'): 'goodbye';
function youSayGoodbyeISayHello(greeting: 'goodbye' | 'hello') {
  return greeting === 'goodbye' ? 'hello' : 'goodbye';
}

const result = youSayGoodbyeISayHello('hello');

const result1 = youSayGoodbyeISayHello('goodbye');
