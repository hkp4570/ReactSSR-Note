import axios from "axios";


// const config = {};
// if (typeof window === "undefined") {
//   //服务器
//   config.baseURL = "http://yuanjin.tech:5005/";
// } else {
//   //浏览器
// }
//
// const instance = axios.create(config);
//
// export default instance;

// 登录  next某版本无法代理post请求，现在由客户端直接发送请求
const config = {};
if (typeof window === "undefined") {
  //服务器
  config.baseURL = "http://yuanjin.tech:5100/";
} else {
  //浏览器
  config.baseURL = "http://yuanjin.tech:5100/";
}

const instance = axios.create(config);

export default instance;
