type Routes = '/users' | '/users/:id' | '/posts' | '/posts/:id';

type DynamicRoutes = Extract<Routes, `${string}:${string}`>;
