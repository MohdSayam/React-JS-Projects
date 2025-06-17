import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);   this is a correct way to increment state as many times as you want
  };

  const deleteValue = () => {
    setCounter(counter - 1);
  };
  const resetValue = () => {
    setCounter(15);
  };

  return (
    <>
      <h1>You can see the magic counter here: {counter}</h1>
      <button onClick={addValue}>Add Counter</button>{" "}
      <button onClick={deleteValue}>Delete Counter</button>{" "}
      <button onClick={resetValue}>Reset Counter</button>
      <footer>This is footer count: {counter}</footer>
    </>
  );
}

export default App;
