import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello, React!</div>
      <h1 className="text-center text-yellow-500 text-4xl bg-amber-700 w-full">
        Welcome to React
      </h1>
    </>
  );
}

export default App;
