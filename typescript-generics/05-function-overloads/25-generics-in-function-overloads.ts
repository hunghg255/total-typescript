function returnWhatIPassInExceptFor1(t: 1): 2;
function returnWhatIPassInExceptFor1<T>(t: T): T;
function returnWhatIPassInExceptFor1(t: unknown): unknown {
  if (t === 1) {
    return 2;
  }
  return t;
}

const r = returnWhatIPassInExceptFor1(1);

const a = returnWhatIPassInExceptFor1('a');
const b = returnWhatIPassInExceptFor1('b');
const c = returnWhatIPassInExceptFor1('c');
