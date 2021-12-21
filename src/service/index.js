import http from '@http';

// 全局
export const globalApi = {
  // 获取用户
  getUserInfo: params => http.get(`/api/v1/getUserInfo`, params),
  // 登陆
  login: params => http.post(`/api/v1/login`, params),
  // 测试token失效
  testFail: params => http.get(`/api/v1/testFail`, params),
  // 上传
  upload: (url, params) => http.upload(url, params),
  // 下载
  testDownload: (url, params) =>  http.download(url, params),
};
