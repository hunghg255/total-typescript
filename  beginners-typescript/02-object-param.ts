type AddTwoNumbersArgs = {
  first: number;
  second: number;
};

export const addTwoNumbers = (params: AddTwoNumbersArgs) => {
  return params.first + params.second;
};
