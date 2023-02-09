type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

// Should succeed:

goToRoute('/asd');
goToRoute('/');
goToRoute('/admin/users');
