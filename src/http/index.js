import request from './request.js';
import download from '@utils/download.js';

const http = {
  get (url, params) {
    const config = {
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    if (params) config.params = params;
    return request(config);
  },
  post (url, params) {
    const config = {
      method: 'post',
      url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    if (params) config.data = params;
    return request(config);
  },
  put (url, params) {
    const config = {
      method: 'put',
      url,
      headers: {
        'Content-Type':'application/json; charset=utf-8'
      },
    };
    if (params) config.data = params;
    return request(config);
  },
  delete (url, params) {
    const config = {
      method: 'delete',
      url,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };
    if (params) config.params = params;
    return request(config);
  },
  upload (url, params) {
    const config = {
      method: 'post',
      url,
      headers: { //添加请求头
        'Content-Type': 'multipart/form-data'
      },
    };
    return request(config);
  },
  download (url, params) {
    const config = {
      method: 'get',
      url:url,
      headers: {
        // 'Content-Type':'application/json; charset=utf-8',
        'Content-Type':'application/octet-stream; charset=utf-8'
      },
      responseType: 'blob',
    };
    if (params) config.params = params;
    // return request(config);
    // 此处套一个promise函数，是为了外层继续保持调用时then\catch写法，保持所有请求方法保持统一, 也为了外层可以拿到下载成功提示，当然也可以全部封装在这里
    return new Promise((resolve, reject) => {
      request(config).then((res) => {
        download(res, params.fileName);
        resolve('download success');
      }).catch((err) => {
        reject(err);
      }).finally(() => {});
    });
  },
};

export default http;
