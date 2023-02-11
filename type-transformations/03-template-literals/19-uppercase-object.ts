type TEvent = `log_in` | 'log_out' | 'sign_up';

type ObjectOfKeys = Record<Uppercase<TEvent>, string>;
