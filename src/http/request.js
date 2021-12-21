import axios from 'axios';
import { Toast } from 'vant';
import router from '@router';
import Cookies from 'js-cookie';
// import store from '@/store';
// import qs from 'qs';
let envUrl = '/proxy';
if (process.env.NODE_ENV === 'production') {
  envUrl = process.env.API_ROOT;
}
// 超时时间 单位是ms，这里设置了10s的超时时间
const requestTime = 10;
const service = axios.create({
  baseURL: envUrl,
  timeout: requestTime * 1000,
});
// 2.请求拦截器
service.interceptors.request.use((config) => {
  config.data = JSON.stringify(config.data); // 数据转化,也可以使用qs转换
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
    config.headers.token = token;
  }
  return config;
}, (error) => {
  Promise.reject(error);
});

// 3.响应拦截器
service.interceptors.response.use((response) => {
  // console.log('request-response', response);
  // console.log('typeof response.data', typeof response.data);
  if (response.data.code === 401) {
    // 清除cookie以及store状态
    Cookies.remove('token');
    // 跳转到登录页面
    Toast.fail('Token已失效');
    router.replace({ name: 'login' });
    return Promise.reject(response.data.message);
  }
  if (response.data.code !== 200 && response.config.responseType !== 'blob') {
    Toast.fail(response.data.message);
    return Promise.reject(response.data.message);
  }
  let result = response.data.data;
  if (response.config.responseType === 'blob') {
    result = response.data;
  }
  // console.log('result', result);
  return Promise.resolve(result);
}, (error) => {
  // console.log('response', error);
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
    case 400:
      error.message = '错误请求';
      break;
    case 401:
      error.message = '未授权，请重新登录';
      break;
    case 403:
      error.message = '拒绝访问';
      break;
    case 404:
      error.message = '请求错误,未找到该资源';
      // window.location.href = "/404";
      break;
    case 405:
      error.message = '请求方法未允许';
      break;
    case 408:
      error.message = '请求超时';
      break;
    case 500:
      error.message = '服务器端出错';
      break;
    case 501:
      error.message = '网络未实现';
      break;
    case 502:
      error.message = '网络错误';
      break;
    case 503:
      error.message = '服务不可用';
      break;
    case 504:
      error.message = '网络超时';
      break;
    case 505:
      error.message = 'http版本不支持该请求';
      break;
    default:
      error.message = `连接错误${error.response.status}`;
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      error.message('服务器响应超时');
    } else {
      error.message('连接服务器失败');
    }
  }
  Toast.fail(error.message);
  return Promise.reject(null);
});
// 4.导入文件
export default service;
