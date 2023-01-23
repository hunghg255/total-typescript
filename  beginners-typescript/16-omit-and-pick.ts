interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

// Solution 1
type MyType1 = Omit<User, 'id'>;

// Solution 2
type MyType2 = Pick<User, 'firstName' | 'lastName'>;
