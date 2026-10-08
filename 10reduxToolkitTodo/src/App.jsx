import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {

  return (
    <>
      <h1 className="flex flex-wrap justify-center text-3xl font-bold py-6">
      Learn about redux toolkit </h1>
      <AddTodo />
     <Todos/>
    </>
  );
}


export default App;
