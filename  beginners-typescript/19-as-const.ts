
const route = {
  home: '/',
  user: '/user'
} as const;

type TRoute = (typeof route)[keyof typeof route];

const route1 = ['/', '/home'] as const;

type TRoute1 = typeof route1[number];
