import {login, whoAmi, loginOut} from '../services/loginService'
import { getServerInstance } from '../services/request'

const Login = () => {
  // login('11111111111','123123').then(res => {
  //   console.log(res)
  // })
  // whoAmi().then(res => {
  //   console.log(res)
  // })
  loginOut();
  return (
    <h1>登录页</h1>
  )
}

export default Login;

// 服务端登录
export async function getServerSideProps({ req }) {
  const request = getServerInstance(req);
  whoAmi(request).then(resp => {
    console.log(resp);
  });
  return {
    props: {}
  };
}
