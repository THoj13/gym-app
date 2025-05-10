import { useState } from 'react'

export const ViteExample = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col">
        <a href="https://vite.dev" target="_blank">
          Vite Docs
        </a>
        <a href="https://react.dev" target="_blank">
          React Docs
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
