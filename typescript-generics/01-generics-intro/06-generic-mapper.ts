export const concatenateFirstNameAndLastName = <
  T extends { firstName: string; lastName: string }
>(
  user: T
) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};

const users = [
  {
    firstName: 'Matt',
    lastName: 'Pocock',
  },
];

const newUsers = users.map(concatenateFirstNameAndLastName);
