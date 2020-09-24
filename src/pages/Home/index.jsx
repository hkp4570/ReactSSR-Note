import React, {useState} from 'react';
import styles from './index.css';
import bg from '../../assets/yifu.jpg';

function App () {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <img src={bg} alt=""/>
      <div className={styles.bg} />
      <button className={styles.beautybutton} onClick={() => setNumber(number + 1)}>click</button>
    </div>
  )
}

export default App
