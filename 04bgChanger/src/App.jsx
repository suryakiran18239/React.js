import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("orange");

  return (
     <div style={{ backgroundColor: color, minHeight: "100vh" }}>
       <div style={{ border: "1px solid black", backgroundColor: "grey" }} className="fixed flex flex-wrap justify-center">
        <button onClick={() => setColor("cyan")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("tomato")}>Red</button>
       </div>
     </div>
  );
}

export default App;