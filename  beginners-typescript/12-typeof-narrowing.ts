const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === 'number') {
    return amount;
  }
  return amount.amount;
};
