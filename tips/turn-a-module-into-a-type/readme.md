# Turn a module into a type

```ts
// constant.ts
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

// main.ts
// Old
export type Action = 'ADD_TODO' | 'UPDATE_TODO';

// New
export type ActionModule = typeof import('./constant');
export type NewAction = ActionModule[keyof ActionModule];
```
