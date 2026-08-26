import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  //  let counter =10;

  const addValue = () => {
    console.log(`Value Added ! ${counter}`);
    // counter=counter+1;
    if (counter < 20) {
      setCounter(counter + 1);
      setCounter(counter + 1); // single increment
      setCounter(counter + 1);
      setCounter(counter + 1);
      /* setCounter((prevCounter) => prevCounter +1); 
      setCounter((prevCounter) => prevCounter +1);  // multiple increment
      setCounter((prevCounter) => prevCounter +1); 
      setCounter((prevCounter) => prevCounter +1);
      */
    }
  };

  const removeValue = () => {
    console.log(`Value Removed !${counter}`);
    if (counter > 0) {
      setCounter(counter - 1);
    }
    // counter =counter-1;
    // setCounter(counter);
  };

  return (
    <>
      <h1>Hello ! ❤️</h1>

      <h2>Keep Learning & Growing! ❤️</h2>
      <h2>Counter value : {counter}</h2>
      <p>
        <button className="increase" onClick={addValue}>
          Add Value : {counter}
        </button>
        <br />

        <button className="decrease" onClick={removeValue}>
          Remove Value : {counter}
        </button>
      </p>
    </>
  );
}

export default App;
