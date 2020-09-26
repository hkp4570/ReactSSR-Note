import {connect} from 'react-redux';
import * as actions from '../store/actions/counter';
import makeStore from '../store';

const Redux = ({number,increase,decrease,asyncIncrease,asyncDecrease}) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={asyncDecrease}>异步减</button>
        <button onClick={decrease}>减</button>
        <button onClick={increase}>加</button>
        <button onClick={asyncIncrease}>异步加</button>
      </div>
    </div>
  )
}
function mapStateToProps (state) {
  return {
    number:state.counter,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    increase(){
      dispatch(actions.increase())
    },
    decrease(){
      dispatch(actions.decrease())
    },
    asyncIncrease(){
      dispatch(actions.asyncIncrease())
    },
    asyncDecrease(){
      dispatch(actions.asyncDecrease())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Redux);

export async function getServerSideProps () {
  const store = makeStore();
  await store.dispatch(actions.asyncIncrease());
  return {
    props:{
      _initialState: store.getState()
    }
  }
}
