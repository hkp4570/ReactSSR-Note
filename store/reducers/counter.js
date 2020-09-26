import {actionsType} from '../actions/counter'

export default function (state=10,{type}) {
  switch (type) {
    case actionsType.increase:
      return state + 1;
    case actionsType.decrease:
      return state - 1;
    default :
        return state;
  }
}
