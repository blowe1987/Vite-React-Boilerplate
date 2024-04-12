import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mockup-window border bg-base-300">
        <div className="justify-center p-16 border-t border-base-300">
          <div className="flex items-center justify-center">
            <img src="/vite.svg" alt="Vite" width="100" className="logo" />
            <img
              src="/react.svg"
              alt="React"
              width="100"
              className="logo react"
            />
          </div>
          <h1>Vite + React Boilerplate</h1>
          <div className="m-4 p-4">
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p className="m-4">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p>
            Boilerplate by{" "}
            <a href="https://github.com/blowe1987">Berian Lowe</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
