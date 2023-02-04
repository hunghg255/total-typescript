const getUser = () => {
  return Promise.resolve({
    id: '123',
    name: 'John',
    email: 'john@example.com',
  });
};

type ReturnValue = Awaited<ReturnType<typeof getUser>>;
