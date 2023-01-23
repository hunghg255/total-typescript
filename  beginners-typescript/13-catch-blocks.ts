// Solution 1
const tryCatchDemo1 = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e: any) {
    return e.message;
  }
};

// Solution 2
const tryCatchDemo2 = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    return (e as Error).message;
  }
};

// Solution 3
const tryCatchDemo3 = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};
