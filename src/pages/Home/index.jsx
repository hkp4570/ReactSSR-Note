import React, {useState} from 'react'

function App () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>click</button>
    </div>
  )
}

export default App
