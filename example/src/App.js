import React from 'react'

import { useMyHook } from 'use-execution-queue'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
