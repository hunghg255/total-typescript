# Use 'in' operator to transform a union to another union

```ts
export type Entity = { type: 'user' } | { type: 'post' } | { type: 'comment' };

// Old type
export type EntityWithId =
  | { type: 'user'; userId: string }
  | { type: 'post'; postId: string }
  | { type: 'comment'; commentId: string };

// New type
type NewEntityWithId = {
  [EntityType in Entity['type']]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity['type']];

const r: NewEntityWithId = {
  type: 'comment',
  commentId: '2',
};
```
