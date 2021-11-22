import axios from 'axios';
import { Toast } from 'vant';
// import store from '@/store';
// import qs from 'qs';
let envUrl = '/api';
if (process.env.NODE_ENV === 'production') {
  envUrl = process.env.API_ROOT;
}
// const envUrl = process.env.VITE_APP_API_ROOT;
// console.log('process.env', process.env);
// console.log('process.env.ENV_CONFIG', process.env.ENV_CONFIG);
const service = axios.create({
  baseURL: envUrl,
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 60 * 1000,
});
// 2.请求拦截器
service.interceptors.request.use((config) => {
  // console.log('store.state', store.state);
  // console.log('request-config', config);
  // config.headers = {
  //   'Content-Type':'application/json; charset=utf-8' // 配置请求头
  // };
  config.data = JSON.stringify(config.data); // 数据转化,也可以使用qs转换
  // console.log('localStorage', localStorage);
  // const { token } = local;
  // console.log('sessionStorage', sessionStorage);
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjA0NTYyMjU3LCJleHAiOjE2MDUxNjcwNTd9.CEXMJSL6y_0T7WxLJ4ppvM6ojw1riH6ML4eXUYCEboOU2ZEiAFq7DOjQg2V8fEQgT2Xg0d7d8_CnbNU6HcTaKA';
  // console.log('localStorage.Storage', localStorage);
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
  let result = null;
  if (response.status === 200) {
    if (response.data.code !== 200) {
      Toast.fail(response.data.message);
      result = response.data;
    } else {
      result = response.data.data;
    }
  } else {
    Toast.fail(response.data.message);
    result = Promise.reject(response);
  }
  return result;
}, (error) => {
  // console.log('response', error);
  // if (error && error.response) {
  //   // 1.公共错误处理
  //   // 2.根据响应码具体处理
  //   switch (error.response.status) {
  //   case 400:
  //     error.message = '错误请求';
  //     break;
  //   case 401:
  //     error.message = '未授权，请重新登录';
  //     break;
  //   case 403:
  //     error.message = '拒绝访问';
  //     break;
  //   case 404:
  //     error.message = '请求错误,未找到该资源';
  //     // window.location.href = "/404";
  //     break;
  //   case 405:
  //     error.message = '请求方法未允许';
  //     break;
  //   case 408:
  //     error.message = '请求超时';
  //     break;
  //   case 500:
  //     error.message = '服务器端出错';
  //     break;
  //   case 501:
  //     error.message = '网络未实现';
  //     break;
  //   case 502:
  //     error.message = '网络错误';
  //     break;
  //   case 503:
  //     error.message = '服务不可用';
  //     break;
  //   case 504:
  //     error.message = '网络超时';
  //     break;
  //   case 505:
  //     error.message = 'http版本不支持该请求';
  //     break;
  //   default:
  //     error.message = `连接错误${error.response.status}`;
  //   }
  // } else {
  //   // 超时处理
  //   if (JSON.stringify(error).includes('timeout')) {
  //     // KToptips.error('服务器响应超时，请刷新当前页');
  //   }
  //   error.message('连接服务器失败');
  // }

  // KToptips.error(error.message);
  // ***** 处理结束 ***** /
  // 如果不需要错误处理，以上的处理过程都可省略
  Toast.fail(error.message);
  return Promise.reject(null);
});
// 4.导入文件
export default service;
