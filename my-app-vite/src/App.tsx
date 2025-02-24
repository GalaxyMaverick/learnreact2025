import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const password = prompt("Password");

  // useRef is a React Hook that creates a mutable reference (like a container) that persists across renders but doesn’t cause re-renders when updated.
  const promptShown = useRef(false); // Ref to track if prompt has been shown

  // useEffect is a React Hook that runs side effects in function components. Side effects include things like: Fetching data from an API Subscribing to events Updating the document title Running code only once when the component mounts
  useEffect(() => {
    if (!promptShown.current) {  // Run only if false
      promptShown.current = true; // Set to true to prevent re-running
      const userPassword = prompt("Password");
      if(userPassword === "Hello")
      {
        console.log("Good");
      }
      else
      {
        console.log("Bad");
      }
      const hobbies = ["Me", "You"];
      for(const hobby of hobbies)
      {
        console.log(hobby);
      }
    }
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR (hi)
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
