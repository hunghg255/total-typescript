// Old
export type Action = 'ADD_TODO' | 'UPDATE_TODO';

// New
export type ActionModule = typeof import('./constant');
export type NewAction = ActionModule[keyof ActionModule];
