// Solution 1
const makeSafe1 =
  <TParams extends any[], TReturn>(func: (...args: TParams) => TReturn) =>
  (
    ...args: TParams
  ):
    | {
        type: 'success';
        result: TReturn;
      }
    | {
        type: 'failure';
        error: Error;
      } => {
    try {
      const result = func(...args);

      return {
        type: 'success',
        result,
      };
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  };

// Solution 2
const makeSafe2 =
  <TFunc extends (...args: any[]) => any>(func: TFunc) =>
  (
    ...args: Parameters<TFunc>
  ):
    | {
        type: 'success';
        result: ReturnType<TFunc>;
      }
    | {
        type: 'failure';
        error: Error;
      } => {
    try {
      const result = func(...args);

      return {
        type: 'success',
        result,
      };
    } catch (e) {
      return {
        type: 'failure',
        error: e as Error,
      };
    }
  };

const func = makeSafe2(() => '2');

const result = func();
