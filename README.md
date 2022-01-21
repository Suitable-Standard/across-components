## Cosmos-Reverse

- Use stencil to build a cross-platform components

## Core Highlight

- Useful and beautiful UX.
- Cross-platform

## Usage

- In vanilla js:

```html
<script src="https://cdn.jsdelivr.net/npm/@cosmosreverse/cosmos@latest/dist/cosmos-reverse/cosmos-reverse.js"></script>

<body>
  <todo-list todo-title="Here"></todo-list>
</body>
```

- In React:

```tsx
// Install
// yarn add @cosmosreverse/cosmos @cosmosreverse/cosmos-react

import { defineCustomElements } from '@cosmosreverse/cosmos/dist/loader';
import { TodoList } from '@cosmosreverse/cosmos-react';

defineCustomElements();
const Example: FC = () => {
  return <TodoList todoTitle="todo-title" />;
};
```

- In nextjs:

  > 需要做一个额外的操作：安装 [next-transpile-modules](https://github.com/wellcometrust/next-plugin-transpile-modules) ，进而从 node_modules 中`转换未转换的模块`

```ts
// In next.config.js
const withTM = require('next-transpile-modules');

module.exports = withTM(['some modules'])({
  // ....
});
```
