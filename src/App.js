import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const add = () => setCount(count + 1);
  const subtract = () => setCount(count - 1);

  return (
    <div className="App">
      <h1>Count:{count}</h1>
      <button onClick={add} id="add">
        Add
      </button>
      <button onClick={subtract} id="subtract">
        subtract
      </button>
    </div>
  );
}

export default App;
