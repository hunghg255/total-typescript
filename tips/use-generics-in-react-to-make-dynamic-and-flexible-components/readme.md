# Use generics in React to make dynamic and flexible components

```ts
import React from 'react';

interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => React.ReactNode;
}

// Regular function
function Table<T>(props: TableProps<T>) {
  return null;
}

// Arrow function
const TableArrow = <T extends any>(props: TableProps<T>) => {
  return null;
};

// Normal
const App = () => {
  return (
    <Table
      items={[{ id: 1, title: 'title' }]}
      renderItem={(item) => {
        return <>{item.id}</>;
      }}
    />
  );
};

// Pass generics
const App1 = () => {
  return (
    <Table<{ id: string }>
      items={[{ id: 1, title: 'title' }]}
      renderItem={(item) => {
        return <>{item.id}</>;
      }}
    />
  );
};
```
