import axios from 'axios';

let config = {};
if(typeof window === 'undefined') {
  config.baseURL = "http://yuanjin.tech:5005/";
} else {

}
const instance = axios.create(config);

export default instance;
