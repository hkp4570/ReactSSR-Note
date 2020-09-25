// import React, {useState} from 'react';
// import styles from './index.css';
// import bg from '../../assets/yifu.jpg';
//
// function App () {
//   const [number, setNumber] = useState(0);
//   return (
//     <div>
//       <h1>{number}</h1>
//       <img src={bg} alt=""/>
//       <div className={styles.bg} />
//       <button className={styles.beautybutton} onClick={() => setNumber(number + 1)}>click</button>
//     </div>
//   )
// }
//
// export default App

import React from 'react';
import {connect} from 'react-redux';
import {increase,decrease} from '../../store/actions/counter';

function Counter ({number, onIncrease, onDecrease}) {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    number: state.counter,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrease(){
      dispatch(increase());
    },
    onDecrease(){
      dispatch(decrease());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
