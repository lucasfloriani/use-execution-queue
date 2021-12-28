# use-execution-queue

> Custom hook that implements a queue to execute functions

[![NPM](https://img.shields.io/npm/v/use-execution-queue.svg)](https://www.npmjs.com/package/use-execution-queue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install use-execution-queue
yarn add use-execution-queue
```

## Usage

```tsx
import * as React from "react";

import { useExecutionQueue } from "use-execution-queue";

const Example = () => {
  const [text, setText] = React.useState("Test");
  const [asyncItems, setAsyncItems] = React.useState([]);
  const { addToQueue } = useExecutionQueue();

  return (
    <div>
      <ul>
        {asyncItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          addToQueue(() => {
            setAsyncItems((previousItems) => [...previousItems, text]);
          });
        }}
      >
        Add Using Queue
      </button>
    </div>
  );
};
```

## License

MIT © [lucasfloriani](https://github.com/lucasfloriani)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
