import {login, whoAmi} from '../services/loginService'

const Login = () => {
  // login('11111111111','123123').then(res => {
  //   console.log(res)
  // })
  whoAmi().then(res => {
    console.log(res)
  })
  return (
    <h1>登录页</h1>
  )
}

export default Login;
