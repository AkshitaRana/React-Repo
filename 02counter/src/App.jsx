import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 10

  const addValue = () => {
    if (counter<20){
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      setCounter(prevCounter => prevCounter+1)
      // counter = counter+1
      // setCounter(counter)
    // console.log("Clicked", counter);
    }
  }

  const removeValue = () => {
    if (counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>React new project</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
