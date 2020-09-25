import { actionsType } from '../actions/movies';

export default function (state=[],{type,payload}) {
  switch (type) {
    case actionsType.setData:
      return payload;
    default:
      return state;
  }
}
