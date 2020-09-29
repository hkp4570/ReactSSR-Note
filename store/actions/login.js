import { login, loginOut, whoAmi } from '../../services/loginService'

export const actionsType = {
  setLoginUser: 'login/setLoginUser',
  login: 'login/login',
  whoAmi: 'login/whoAmi',
  loginOut: 'login/loginOut',
}

export function setLoginUser (user) {
  return { type: actionsType.setLoginUser, payload: user }
}

export function login (loginId, loginPwd) {
  return async function (dispatch) {
    const resp = await login(loginId, loginPwd)
    if (resp.data) {
      dispatch(setLoginUser(resp.data))
      return true
    } else {
      dispatch(setLoginUser(null))
      return false
    }
  }
}

export function whoAmi (axios) {
  return async function (dispatch) {
    const resp = await whoAmi(axios)
    if (resp.data) {
      dispatch(setLoginUser(resp.data))
      return true
    } else {
      dispatch(setLoginUser(null))
      return false
    }
  }
}

export function loginOut () {
  return async function (dispatch) {
    dispatch(setLoginUser(null))
    loginOut()
  }
}
