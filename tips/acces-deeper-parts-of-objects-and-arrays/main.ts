interface ColorVariants {
  primary: 'blue';
  secondary: 'red';
  tertiary: 'green';
}

type PrimaryColor = ColorVariants['primary'];

type NonPrimaryColor = ColorVariants['secondary' | 'tertiary'];

type EveryColor = ColorVariants[keyof ColorVariants];

type Letters = ['a', 'b', 'c'];

type AOrB = Letters[0 | 1];
type Letter = Letters[number];

interface UserRoleConfig {
  user: ['view', 'create', 'update'];
  superAdmin: ['view', 'create', 'update', 'delete'];
}

type Role = UserRoleConfig[keyof UserRoleConfig][number];
