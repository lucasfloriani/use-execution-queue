# use-execution-queue

> Custom hook that implements a queue to execute functions

[![NPM](https://img.shields.io/npm/v/use-execution-queue.svg)](https://www.npmjs.com/package/use-execution-queue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-execution-queue
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-execution-queue'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [lucasfloriani](https://github.com/lucasfloriani)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
