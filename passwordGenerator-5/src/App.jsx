import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hook
  const passwordRef = useRef(null);

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+{}[]/;<>?,~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);


  const CopyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password);
  }, [password]);


  useEffect(() => {
    passwordGenerater();
  }, [length, charAllowed, numberAllowed, passwordGenerater]);

  return (
    <>
      <div className=" w-full  max-w-md mx-auto shadow-md rounded-lg bg-gray-700 text-orange-500 font-semibold px-4 py-4 my-8">
        <h1 className="text-white text-center text-lg">Password Generator</h1>

        <div className="bg-white flex shadow-md rounded-lg overflow-hidden mb-4 mt-2">
          <input
            type="text"
            value={password}
            className="w-full outline-none px-3 py-1 font-bold "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className=" cursor-pointer text-white outline-none bg-indigo-700 px-2 py-0.5 shrink-0
            hover:scale-120 transition-transform duration-200"
            onClick={() => {
              CopyPasswordToClipboard();
            }}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="NumberAllowed"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charAllowed"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />

            <label htmlFor="CharacterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
