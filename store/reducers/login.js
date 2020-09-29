import { actionsType } from '../actions/login'

export default function (state = null, { type, payload }) {
  switch (type) {
    case actionsType.setLoginUser:
      return payload
    default:
      return state
  }
}
