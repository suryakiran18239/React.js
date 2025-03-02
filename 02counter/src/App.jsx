import { useState } from 'react'
import './App.css'

function App() {
  const [Count, setCounter] = useState(10)
  let addValue = () => {
     
     setCounter(Count + 1)
  }
  
  const decreaseValue = () => {
    
    setCounter(Count - 1)
  }

  return (
    <>
     <h2>Increase/Decrease</h2>
     <p>Counter value: {Count}</p>
     <button onClick={addValue}>Add Value {Count}</button><br />
     <button onClick={decreaseValue}>Decrease Value {Count}</button>
    </>
  )
}

export default App
