type AddRoutePrefix<TRoute extends string> = `/${TRoute}`;

type A = AddRoutePrefix<'about'>;
