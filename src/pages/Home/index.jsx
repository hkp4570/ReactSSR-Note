import React, {useState} from 'react';
import styles from './index.css';

console.log('styles',styles);
function App () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button className={styles.beautybutton} onClick={() => setNumber(number + 1)}>click</button>
    </div>
  )
}

export default App
