// Solution 1
function youSayGoodbyeISayHello1<TGreeting extends 'hello' | 'goodbye'>(
  greeting: TGreeting
): TGreeting extends 'hello' ? 'goodbye' : 'hello' {
  return (greeting === 'goodbye' ? 'hello' : 'goodbye') as any;
}

// Solution 2

type GreetingResult<TGreeting> = TGreeting extends 'hello'
  ? 'goodbye'
  : 'hello';

function youSayGoodbyeISayHello2<TGreeting extends 'hello' | 'goodbye'>(
  greeting: TGreeting
) {
  return (
    greeting === 'goodbye' ? 'hello' : 'goodbye'
  ) as GreetingResult<TGreeting>;
}

const result = youSayGoodbyeISayHello1('hello');
