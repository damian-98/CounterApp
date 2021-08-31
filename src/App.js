import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const add = () => setCount(count + 1);

  const talk = () => setMessage(message + "Hello \n");

  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>Count:{count}</h1>
      <button onClick={add} id="add">
        Add
      </button>
      <button onClick={talk} id="talk">
        Speak
      </button>
    </div>
  );
}

export default App;
