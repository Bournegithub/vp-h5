import request from './request.js';

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
  // put (url, params) {
  //   const config = {
  //     method: 'put',
  //     url:url,
  //     headers: {
  //       'Content-Type':'application/json; charset=utf-8'
  //     },
  //   };
  //   if (params) config.data = params;
  //   return request(config);
  // },
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
  // upload (url, params) {
  //   const config = {
  //     method: 'post',
  //     url:url,
  //     headers: { //添加请求头
  //       'Content-Type': 'multipart/form-data'
  //     },
  //   };
  //   let file = new FormData();
  //   file.append('file', params);
  //   if (params) config.data = file;
  //   return request(config);
  // },
  // download (url, params) {
  //   const config = {
  //     method: 'post',
  //     url:url,
  //     headers: {
  //       'Content-Type':'application/json; charset=utf-8'
  //     },
  //     responseType: 'blob',
  //   };
  //   if (params) config.params = params;
  //   return request(config);
  // },
};

export default http;
