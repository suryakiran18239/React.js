import "../components/App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  let reset = () => {
    window.location.reload();
  }

  return (
    <>
    <div className="App">
      <div className="counter">
        <h1>Counter App</h1>
        <h1>Count: {count}</h1>
      </div>
      <div className="button-container">
      <div className="btn">
        <button onClick={increment}>+</button>
      </div>
      <div className="btn">
        <button onClick={decrement}>-</button>
      </div>
      </div>
      <div><button className="btn" onClick={reset}>Reload</button></div>
    </div>
    </>
  );
}

export default App;
