type CreateDataShape<TData, TError> = {
  data: TData;
  error: TError;
};
type Test = CreateDataShape<number, Error>;
